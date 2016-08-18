Ext.define('Chaching.view.common.grid.ChachingTransactionDetailGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.common-grid-chachingtransactiondetailgrid',
    onNewClicked: function() {
        var me = this, view = me.getView(), detailStore = view.getStore();
        if (view.isInViewMode)return;
        if (detailStore) {
            var multiplyOfField = view.down('numberfield[itemId=multiplyOf]'), multiplyOf = multiplyOfField.getValue();
            var modelClass = detailStore.getModel(),
                className = modelClass.$className;
            if (multiplyOfField.validate()) {
                Ext.suspendLayouts();
                for (var i = 0; i < multiplyOf; i++) {
                    var rec = Ext.create(className);
                    detailStore.insert(0, rec);
                }
                Ext.resumeLayouts();
            } else {
                abp.notify.info(app.localize('AddNewValidationMessage'), app.localize('ValidationFailed'));
            }
        }
    },
    onDeleteClicked: function (grid, rowIndex, colIndex) {
        var me = this,
            view = me.getView(),
            detailStore = view.getStore();
        if (view.isInViewMode) return;
        var record = detailStore.getAt(rowIndex);
        if (record) {
            var accountingItemId = record.get('accountingItemId');
            if (accountingItemId > 0 && me.allowDetailRowDelete(record)) {
                record.set('id', accountingItemId);
                var operation = Ext.data.Operation({
                    params: {id:accountingItemId},
                    controller: me,
                    action: 'destroy',
                    records: [record],
                    callback: me.onDetailDeleteOperationCompleteCallBack
                });
                detailStore.erase(operation);
            }
            detailStore.remove(record);
        }
    },
    onDetailDeleteOperationCompleteCallBack:function(records, operation, success) {
        if (success) {
            abp.notify.success('Operation completed successfully.', 'Success');
        } else {
            var response = Ext.decode(operation.getResponse().responseText);
            var message = '',
                title = 'Error';
            if (response && response.error) {
                if (response.error.message && response.error.details) {
                    title = response.error.message;
                    message = response.error.details;
                    abp.message.warn(message, title);
                    return;
                }
                title = response.error.message;
                message = response.error.details ? response.error.details : title;
            }
            abp.message.warn(message, title);
        }
    },
    allowDetailRowDelete:function(record) {
        return true;
    },
    onRefreshClicked:function() {
        var me = this,
           view = me.getView(),
           multiSearchPlugin = view.getPlugin('gms'),
           gridStore = view.getStore();

        if (multiSearchPlugin) {
            multiSearchPlugin.clearValues(true);
            gridStore.clearFilter();
        } else gridStore.clearFilter();

        gridStore.getSorters().clear();
        gridStore.reload();
    },
    onSplitClicked: function (field) {
        var me = this,
           view = me.getView(),
           gridStore = view.getStore();
        var isInlineSplit = false,
            editor = undefined,
            cellRecordIndex = undefined;
        if (field.xtype === "numberfield") {
            editor = field.up();
            if (editor && editor.context) {
                cellRecordIndex = editor.context.record;
                isInlineSplit = true;
            }
        }
       
        var multiplyOfField = view.down('numberfield[itemId=multiplyOf]'), multiplyOf = multiplyOfField.getValue();
        if (isInlineSplit && cellRecordIndex) {
            view.getSelectionModel().select(cellRecordIndex);
            multiplyOfField = field;
            multiplyOf = multiplyOfField.getValue();
            if (editor && editor.editingPlugin) {
                var cellEditing = editor.editingPlugin;
                cellEditing.completeEdit();
            }
        }
        var selectionModel = view.getSelectionModel(),
            selectedRecords = selectionModel.getSelection();
        if (view.isInViewMode) return;

        if (selectedRecords && selectedRecords.length === 1) {
            var parentRecord = selectedRecords[0],
                parentIndex = gridStore.indexOf(parentRecord);
            //if (parentRecord.get('isAccountingItemSplit')) {
            //    abp.notify.info(app.localize('AlreadySplit'), app.localize('ValidationFailed'));
            //    return;
            //}
            if (!parentRecord.get('amount')) {
                abp.notify.info(app.localize('EnterAmountToSplit'), app.localize('ValidationFailed'));
                return;
            }
            
            var modelClass = gridStore.getModel(),
                className = modelClass.$className;
            if (multiplyOfField.validate()) {
                //var amount = parentRecord.get('amount') / multiplyOf,
                //firstValue = (Math.floor(amount * 100) / 100),
                //decimalAmount = (parentRecord.get('amount') - (firstValue * multiplyOf)).toFixed(2);
                //parentRecord.set('amount', +firstValue.toFixed(2));
                parentRecord.set('isAccountingItemSplit', true);
                var lastUsedSplitGroupCls = view.lastUsedSplitGroupCls,
                    splitGroupsCls = Chaching.utilities.ChachingGlobals.splitGroupCls;

                if (!lastUsedSplitGroupCls) {
                    lastUsedSplitGroupCls = splitGroupsCls[0];
                    view.lastUsedSplitGroupCls = lastUsedSplitGroupCls;
                } else {
                    var indexOfLastGroupCls = splitGroupsCls.indexOf(lastUsedSplitGroupCls);
                    if (indexOfLastGroupCls+1 < splitGroupsCls.length) {
                        lastUsedSplitGroupCls = splitGroupsCls[indexOfLastGroupCls+1];
                        view.lastUsedSplitGroupCls = lastUsedSplitGroupCls;
                    } else {
                        lastUsedSplitGroupCls = splitGroupsCls[0];
                        view.lastUsedSplitGroupCls = lastUsedSplitGroupCls;
                    }
                }
                parentRecord.set('SplitGroupCls', lastUsedSplitGroupCls);
                parentRecord.set('OriginalImportedAmount', parentRecord.get('amount'));
                var localSplitGroup = me.numToChar(parentRecord.internalId);
                Ext.suspendLayouts();
                for (var i = 1; i < multiplyOf; i++) {
                    var rec = Ext.create(className);
                    Ext.apply(rec.data, parentRecord.data);
                    rec.set('SplitAccountingItemId', parentRecord.get('accountingItemId'));
                    rec.set('accountingItemId', 0);
                    rec.set('isAccountingItemSplit', true);
                    rec.set('amount', 0);
                    rec.set('creatorUserId', null);
                    rec.set('lastModifierUserId', null);
                    rec.set('creationTime', null);
                    rec.set('lastModificationTime', null);
                    rec.set('parentRec', parentRecord);
                    rec.set('LocalSplitGroup', parentRecord.internalId + '-' + localSplitGroup);
                    gridStore.insert(parentIndex + 1, rec);
                }
                if (editor && editor.editingPlugin) {
                    var cellEditing = editor.editingPlugin;
                    cellEditing.completeEdit();
                    parentRecord.set('SplitGroupCls', lastUsedSplitGroupCls);
                    parentRecord.set('isAccountingItemSplit', true);
                    parentRecord.set('LocalSplitGroup', parentRecord.internalId + '-' + localSplitGroup);
                }
                Ext.resumeLayouts();
                //parentRecord.set('amount', (firstValue + +decimalAmount).toFixed(2));
            }
        } else {
            if (selectedRecords&&selectedRecords.length === 0)
                abp.notify.info(app.localize('SplitRecordSelect'), app.localize('ValidationFailed'));
            else if (selectedRecords && selectedRecords.length > 1)
                abp.notify.info(app.localize('SingleSplit'), app.localize('ValidationFailed'));
        }
    },
    numToChar: function (number) {
        var numeric = (number - 1) % 26;
        var letter = this.chr(65 + numeric);
        var number2 = parseInt((number - 1) / 26);
        if (number2 > 0) {
            return this.numToChar(number2) + letter;
        } else {
            return letter;
        }
    },

    chr: function (codePt) {
        if (codePt > 0xFFFF) {
            codePt -= 0x10000;
            return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
        }
        return String.fromCharCode(codePt);
    },
    onDetailsAmountChange: function(field, newValue, oldValue, eOpts) {
        var value = 0,
            plusMinus = "minus";
        if (!oldValue)value = newValue;
        else if (newValue > oldValue) {
            value = newValue - oldValue;
            plusMinus = "minus";
        }
        else if (newValue < oldValue) {
            value = oldValue - newValue;
            plusMinus = "plus";
        }
        var editor = field.up();
        if (editor) {
            var context = editor.context,
                record = context.record,
                detailStore = this.getView().getStore();
            if (record && record.get('isAccountingItemSplit')) {
                var parentRec = record.get('parentRec');
                if (!parentRec && record.get('splitAccountingItemId')) parentRec = detailStore.findRecord('accountingItemId', record.get('splitAccountingItemId'));
                if (parentRec) {
                    plusMinus === "minus" ? parentRec.set('amount', parseInt(Math.abs(parentRec.get('amount')) - value)) : parentRec.set('amount', parseInt(Math.abs(parentRec.get('amount')) + value));
                }
            }
        }
    },
    onDetailsAmountFocus:function(field, e, eOpts) {
        if (field.getValue() === 0) {
            var editor = field.up();
            if (editor) {
                var context = editor.context,
                    record = context.record,
                    detailStore = this.getView().getStore(),
                    origImportedAmount = record.get('OriginalImportedAmount'),
                    calculatedAmount = 0,
                    amountRemains = 0;
                if (record && record.get('isAccountingItemSplit')) {
                    var groupRecords = detailStore.queryRecords('LocalSplitGroup',
                            record.get('LocalSplitGroup'));
                    if (groupRecords && groupRecords.length > 0) {
                        for (var i = 0; i < groupRecords.length; i++) {
                            var loopRec = groupRecords[i];
                            if (record
                                .internalId !==
                                loopRec.internalId) calculatedAmount += parseFloat(loopRec.get('amount'));
                        }
                        amountRemains = parseFloat(origImportedAmount - calculatedAmount).toFixed(2);
                        if (amountRemains) {
                            field.setValue(amountRemains);
                            record.set('amount', amountRemains);
                        }
                    }
                }
            }
        }
    },
    beforeAccountQuery: function (queryPlan, eOpts) {
        var me = this,
            view = me.getView(),
            editingPlugin = view.getPlugin('editingPlugin'),
            combo = queryPlan.combo,
            comboStore = combo.getStore();
        if (editingPlugin&&editingPlugin.activeRecord) {
            var activeRec = editingPlugin.activeRecord,
                jobId = activeRec.get('jobId');
            if (jobId > 0) {
                comboStore.getProxy().setExtraParam('jobId', jobId);
            } else comboStore.getProxy().setExtraParam('jobId', null);
        }
        if (queryPlan.lastQuery === queryPlan.query) {
            queryPlan.cancel = true;
            combo.expand();
        }
        comboStore.combo = combo;
        comboStore.on('load', function () {
            if (this.combo) this.combo.focus();
        });
    },
    beforeJobDivisionQuery:function(queryPlan, eOpts) {
        var me = this,
            view = me.getView(),
            combo = queryPlan.combo,
            comboStore = combo.getStore();
        if (queryPlan.lastQuery === queryPlan.query) {
            queryPlan.cancel = true;
            combo.expand();
        }
        comboStore.combo = combo;
        comboStore.on('load', function () {
            if (this.combo) this.combo.focus();
        });
    },
    onBeforeSubAccountQuery:function(queryPlan, eOpts) {
        var me = this,
            view = me.getView(),
            combo = queryPlan.combo,
            comboStore = combo.getStore();
        if (queryPlan.lastQuery === queryPlan.query) {
            queryPlan.cancel = true;
            combo.expand();
        }
        comboStore.combo = combo;
        comboStore.on('load', function () {
            if (this.combo) this.combo.focus();
        });
    },
    onBeforeVendorQuery: function (queryPlan, eOpts) {
        var me = this,
            view = me.getView(),
            combo = queryPlan.combo,
            comboStore = combo.getStore();
        if (queryPlan.lastQuery === queryPlan.query) {
            queryPlan.cancel = true;
            combo.expand();
        }
        comboStore.combo = combo;
        comboStore.on('load', function () {
            if (this.combo) this.combo.focus();
        });
    },
    emptyFunction:function(){},
    onBeforeGridEdit: function (editor, context, eOpts) {
        var me = this, view = me.getView();

        if (view.isInViewMode) return false;
        var moduleSpecificChecks = me.doModuleSpecificBeforeEdit(editor, context, eOpts);
        if (!moduleSpecificChecks) {
            return false;
        }
        if (context.field === "amount" && context.record.get('isAccountingItemSplit')) {
            var validateSplitAmount = me.validateSplitAmount(editor, context);
            if (!validateSplitAmount) {
                return false;
            }
        }
        var cell = view.getView().getCell(context.record, context.column);
        if (cell) {
            cell.removeCls("x-invalid-cell-value");
            cell.removeCls("x-mandatory-cell-value");
            cell.set({ 'data-errorqtip': '' });
        }
        return true;
    },
    doModuleSpecificBeforeEdit:function(editor, context, eOpts) {
        return true;
    },
    validateSplitAmount:function(editor, context) {
        var isValid = true;
        if (editor&&context) {
            var record = context.record,
                 detailStore = this.getView().getStore(),
                    origImportedAmount = record.get('OriginalImportedAmount'),
                    calculatedAmount = 0,
                    amountRemains = 0;
            if (record && record.get('isAccountingItemSplit')) {
                var groupRecords = detailStore.queryRecords('LocalSplitGroup',
                        record.get('LocalSplitGroup'));
                if (groupRecords && groupRecords.length > 0) {
                    for (var i = 0; i < groupRecords.length; i++) {
                        var loopRec = groupRecords[i];
                        if (record
                            .internalId !==
                            loopRec.internalId) calculatedAmount += parseFloat(loopRec.get('amount'));
                    }
                    amountRemains = parseFloat(origImportedAmount - calculatedAmount).toFixed(2);
                    if (!amountRemains || amountRemains === "0" || amountRemains === "0.00") {
                        abp.notify.warn(app.localize('SplitGroupTotalExceed'), app.localize('ValidationFailed'));
                        isValid = false;
                    }
                }
            }
        }
        return isValid;
    }

});
