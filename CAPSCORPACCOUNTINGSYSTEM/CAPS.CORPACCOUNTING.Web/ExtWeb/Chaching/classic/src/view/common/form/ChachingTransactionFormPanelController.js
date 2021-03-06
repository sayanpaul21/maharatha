Ext.define('Chaching.view.common.form.ChachingTransactionFormPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.common-form-chachingtransactionformpanel',
    //use the function to set default values
    setDefaultValues: function () { },
    //event handlers
    onSaveClicked:function() {
        var me = this;
        me.doSaveAction();
    },
    onSaveContinueClicked: function () {
        var me = this;
        me.doSaveAction(true,false);
    },
    onSaveCloneClicked: function () {
        var me = this;
        me.doSaveAction(false,true);
    },
    onCancelClicked:function() {
        var me = this,
            view = me.getView();
        if (view && view.openInPopupWindow) {
            var wnd = view.up('window');
            Ext.destroy(wnd);
            return;
        }
        Ext.destroy(view);
    },
    onEditButtonClicked: function(editBtn) {
        var me = this,
            view = me.getView(),
            childGrids = view.query('gridpanel'),
            form = view.getForm(),
            fields = form.getFields().items;

        Ext.each(fields, function (field) {
            if (field.xtype !== "hiddenfield" && !field.isFilterField) {
                field.setDisabled(false);
                if (typeof (field.setEmptyText) === "function") {
                    field.setEmptyText(field.originalEmptyText);
                }
            }
        });

        if (childGrids&&childGrids.length>0) {
            Ext.each(childGrids, function (grid) {
                grid.isInViewMode = false;
                var dockedItems = grid.getDockedItems();
                if (dockedItems && dockedItems.length > 0) {
                    Ext.each(dockedItems, function (toolbar) {
                        if (toolbar.isActionToolBar) toolbar.show();
                    });
                }
            });
        }

        var defaultActionGroup = view.defaultActionGroup;
        if (defaultActionGroup) {
            var actionButtons = defaultActionGroup.query('button');
            Ext.each(actionButtons, function (button) {
                if (button.name !== 'Cancel' && button.name !== "Edit" && typeof (button.hide) === "function") {
                    button.show();
                }
                if (button.name === "Edit") button.hide();
            });
        }

    },
    doSaveAction: function (saveContinue, saveClone, autoSave) {
        var me = this,
            view = me.getView(),
            parentGrid = view.parentGrid,
            values = view.getValues(),
            detailGrid = view.down('gridpanel[isTransactionDetailGrid=true]'),
            detailsStore = detailGrid.getStore(),
            serverKeyName = detailsStore.serverKeyName;
        me.disableActionGroup();
        if (parentGrid) {
            var gridStore = parentGrid.getStore(),
                idPropertyField = gridStore.idPropertyField,
                operation;
            var record = Ext.create(gridStore.model.$className);
            Ext.apply(record.data, values);
            var target;
            if (view.openInPopupWindow) {
                target = view.up('window');
            } else {
                target = view;
            }
            var myMask = new Ext.LoadMask({
                msg: 'Please wait...',
                target: target
            });

            //perform any custom operation in doPreSaveOperation function of controller.
            //if doPreSaveOperation returns false the saving will be cancel
            record = me.doPreSaveOperation(record, values, idPropertyField);
            if (!record) return record;

            myMask.show();
            if (me.validateDetails(me, view, detailGrid, detailsStore,myMask)) {
                var modifiedRecords = me.getDetailsModifiedRecords(me, view, detailGrid, detailsStore);
                if (modifiedRecords.data.length > 0) {
                    record.data[serverKeyName] = modifiedRecords.data;
                    values[serverKeyName] = modifiedRecords.data;
                } else {
                    record.data[serverKeyName] = [];
                    values[serverKeyName] = [];
                }
            } else {
                me.enableActionGroup();
                return abp.notify.warn(app.localize('DetailGridValidationFailMessage'), app.localize('DetailGridValidation'));
            }
            //return;
            if (values && parseInt(values[idPropertyField]) > 0) {
                operation = Ext.data.Operation({
                    params: record.data,
                    parentGrid: parentGrid,
                    records: [record],
                    controller: me,
                    operationMask: myMask,
                    saveContinue: saveContinue,
                    saveClone: saveClone,
                    autoSave: autoSave,
                    callback: me.onOperationCompleteCallBack
                });
                gridStore.update(operation);
            } else if (values && parseInt(values[idPropertyField]) === 0) {
                record.id = 0;
                record.set('id', 0);
                if (values[serverKeyName].length === 0) {
                    me.enableActionGroup();
                    myMask.hide();
                    return abp.notify.warn(app.localize('DetailGridValidationLineCountMessage'), app.localize('DetailGridValidation'));
                }
                operation = Ext.data.Operation({
                    params: record.data,
                    parentGrid: parentGrid,
                    controller: me,
                    operationMask: myMask,
                    saveContinue: saveContinue,
                    saveClone: saveClone,
                    autoSave: autoSave,
                    callback: me.onOperationCompleteCallBack
                });
                gridStore.create(values, operation);
            } else {
                myMask.hide();
            }
        } else me.enableActionGroup();
    },
    disableActionGroup:function() {
        var me = this,
            view = me.getView(),
            actionGroup = view.defaultActionGroup;
        if (actionGroup) {
            actionGroup.setDisabled(true);
        }
    },
    enableActionGroup:function() {
        var me = this,
           view = me.getView(),
           actionGroup = view.defaultActionGroup;
        if (actionGroup) {
            actionGroup.setDisabled(false);
        }
    },
    doPreSaveOperation: function (record, values, idPropertyField) { return record; },
    onOperationCompleteCallBack: function (records, operation, success) {
        var controller = operation.controller,
                view = controller.getView();
        if (success) {
            if (operation.getAction() === "create") {
                var response = Ext.decode(operation.getResponse().responseText);
                if (response && response.result)
                    view.getForm().findField('accountingDocumentId').setValue(response.result.id);
            }
            var promise = controller.doPostSaveOperations(records, operation, success);
            var runner = new Ext.util.TaskRunner(),
                task = undefined;

            task = runner.newTask({
                run: function() {
                    if (promise && promise.owner.completed) {
                        task.stop();
                        if (promise.owner.completionAction === "fulfill") {
                            controller.handleFulFillResponse(records, operation, success);
                        } else if (promise.owner.completionAction === "reject") {
                            controller.handleRejectResponse(records, operation, success, promise.owner.completionValue);
                        }
                    }
                },
                interval: 1000
            });

            task.start();
        } else {
            controller.handleFulFillResponse(records, operation, success);
        }
    },
    handleRejectResponse: function (records, operation, success, rejectResponseValue) {
        var controller = operation.controller;
        controller.enableActionGroup();
        var mask = operation.operationMask;
        if (mask) mask.hide();
        if (records && rejectResponseValue) {
            var record = records[0],
                rejectResponse = Ext.decode(rejectResponseValue);
            var message = '',
               title = 'Error';
            record.reject();
            if (rejectResponse && rejectResponse.error) {
                if (rejectResponse.error.message && rejectResponse.error.details) {
                    title = rejectResponse.error.message;
                    message = rejectResponse.error.details;
                    abp.message.warn(message, title);
                    return;
                }
                title = rejectResponse.error.message;
                message = rejectResponse.error.details ? rejectResponse.error.details : title;
            }
            abp.message.warn(message, title);
        }
    },
    handleFulFillResponse: function (records, operation, success) {
        var controller = operation.controller,
            view = controller.getView(),
            saveContinue = operation.saveContinue,
            saveClone = operation.saveClone,
            autoSave = operation.autoSave;
        controller.enableActionGroup();
        var mask = operation.operationMask;
        if (mask) mask.hide();
        if (success) {
            var gridController = operation.parentGrid.getController();
            gridController.doReloadGrid();

           
            var detailGrid = view.down('gridpanel[isTransactionDetailGrid=true]'),
                detailsStore = detailGrid.getStore(),
                form = view.getForm();
            if (saveContinue) {
                detailsStore.getProxy().setExtraParam('accountingDocumentId', 0);
                detailsStore.load();
                form.reset(true);
                controller.changeViewTitle(view);
            } else if (saveClone) {
                form.findField('accountingDocumentId').setValue(0);
                var detailsRecords = detailsStore.getRange();
                for (var i = 0; i < detailsRecords.length; i++) {
                    var rec = detailsRecords[i];
                    rec.set('accountingDocumentId', 0);
                    rec.set('accountingItemId', 0);
                }
                controller.changeViewTitle(view);
            }

            var action = operation.getAction();
            if ((action === "create" || action === "destroy" || action === "update") && !saveContinue && !saveClone && !autoSave) {
                if (view && view.openInPopupWindow) {
                    var wnd = view.up('window');
                    Ext.destroy(wnd);
                } else if (view) {
                    Ext.destroy(view);
                }
            }
            if (!autoSave)
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
    changeViewTitle: function (view) {
        var parentGrid = view.parentGrid;
        if (view.openInPopupWindow) {
            var wnd = view.up('window');
            wnd.setTitle(parentGrid.createWndTitleConfig.title);
            wnd.setIconCls(parentGrid.createWndTitleConfig.iconCls);
        } else {
            view.setTitle(parentGrid.createWndTitleConfig.title);
            view.setIconCls(parentGrid.createWndTitleConfig.iconCls);
        }
    },
    doPostSaveOperations:function(records, operation, success) {
        var deferred = new Ext.Deferred();
        deferred.resolve('{success:true}');
        return deferred.promise;
    },
   
    getDetailsModifiedRecords: function(controller, view, detailGrid, detailsStore) {
        var modifiedRecords = detailsStore.getModifiedRecords(),
            records = [],
            data = [],
            modifiedRecs={records:records,data:data},
            transactionId = view.getForm().findField('accountingDocumentId').getValue();
        if (modifiedRecords&&modifiedRecords.length>0) {
            var rowLength = modifiedRecords.length;
            for (var i = 0; i < rowLength; i++) {
                var rec = modifiedRecords[i];
                if (rec.dirty) {
                    if (rec.get('accountingDocumentId') === 0 || !rec.get('accountingDocumentId')) rec.set('accountingDocumentId', transactionId);
                    rec.set('parentRec', null);
                    records.push(rec);
                    data.push(rec.data);
                }
            }
        }
        return modifiedRecs;
    },
    validateDetails: function (controller, view, detailGrid, detailsStore,myMask) {
        var detailColumns = detailGrid.getColumns(),
            modifiedRecords = detailsStore.getModifiedRecords(),
            isValid = true;
        if (modifiedRecords && modifiedRecords.length > 0) {
            var rowLength = modifiedRecords.length;
            for (var i = 0; i < rowLength; i++) {
                var record = modifiedRecords[i],
                    columnCount = detailColumns.length;
                if (record.dirty) {
                    for (var j = 0; j < columnCount; j++) {
                        var column=detailColumns[j],
                        dataIndex = column.dataIndex;
                        if (!dataIndex) dataIndex = column.name;
                        if (column.isMandatory) {
                            var columnValue = record.get(dataIndex);
                            if (dataIndex === "amount" && columnValue === 0) columnValue = null;
                            if (columnValue === null || columnValue === undefined || columnValue === "") {
                                var cell = detailGrid.getView().getCell(record, column);
                                if (cell) controller.invalidateCell(cell, column.text);
                                isValid = false;
                                myMask.hide();
                                break;
                            }
                        }
                    }
                }
                if (!isValid)break;
            }
            return isValid;
        } else return true;
    },
    invalidateCell: function (invalidCell, dataIndex) {
        invalidCell.removeCls("x-invalid-cell-value");//
        invalidCell.removeCls("x-mandatory-cell-value");
        invalidCell.set({ 'data-errorqtip': '' });

        //add again back
        invalidCell.addCls("x-mandatory-cell-value");
        invalidCell.set({ 'data-errorqtip': dataIndex.initCap()+': '+app.localize('MandatoryField').initCap() });
    },
    onFormResize:function(formPanel, width, height, oldWidth, oldHeight, eOpts) {
        if (formPanel) {
            var fieldSets = formPanel.query('fieldset');
            if (fieldSets && fieldSets.length > 1) {
                var allFieldSetsHeight = 0,
                    length = fieldSets.length,
                    transactionDetailContainer = undefined;
                for (var i = 0; i < length; i++) {
                    var fieldSet = fieldSets[i];
                    if (!fieldSet.isTransactionDetailContainer) {
                        allFieldSetsHeight += fieldSet.getHeight();
                    } else transactionDetailContainer = fieldSet;
                }
                if (allFieldSetsHeight > 0 && transactionDetailContainer) {
                    var heightForDetailGrid = height - (allFieldSetsHeight + 85);
                    transactionDetailContainer.down('gridpanel').setHeight(heightForDetailGrid);
                }
            }
            formPanel.updateLayout();
        }
    },
    onAttachmentClick: function () {
        var me = this,
            view = me.getView(),
            attForm = view.getForm(),
            attachmentCfg = view.attachmentConfig,
            primaryKeyField = attachmentCfg.objectIdField,
            idValue = attForm.findField(primaryKeyField).getValue();


        if (idValue) {
            var attachmentWnd = Ext.create('Chaching.view.attachments.AttachmentsView');
            var rec = {
                objectId: idValue,
                typeOfObjectId: ChachingGlobals.getTypeOfObjectId(attachmentCfg.objectType)
            };
            var attachmentGrid = attachmentWnd.down('gridpanel'),
                attachmentStore = attachmentGrid.getStore();
            attachmentStore.getProxy().setExtraParams(rec);
            attachmentStore.load();
            var form = attachmentWnd.down('form').getForm();
            form.setValues(rec);
            attachmentWnd.show();
        }
    }
    
});
