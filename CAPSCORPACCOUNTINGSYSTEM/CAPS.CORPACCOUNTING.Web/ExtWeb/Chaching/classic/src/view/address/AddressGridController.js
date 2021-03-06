﻿Ext.define('Chaching.view.address.AddressGridController', {
    extend: 'Chaching.view.common.grid.ChachingGridPanelController',
    alias: 'controller.address-addressgrid',
    //doBeforeInlineAddUpdate: function (record) {
    //    var me = this,
    //        view = me.getView(),
    //        parentGrid = view.up('window').parentGrid;
    //    var gridStore = parentGrid.getStore(),
    //        isGrouped = gridStore.isGrouped(),
    //        groupField = gridStore.getGroupField(),
    //        groupDir = gridStore.getGroupDir(),
    //        idPropertyField = view.getStore().idPropertyField;

    //    if (record.get(idPropertyField) > 0 && !record.get('isActive')) {
    //        return true;
    //    }
    //    if (parentGrid) {
    //        var parentGridColumns = parentGrid.getColumns();
    //        if (parentGridColumns && parentGridColumns.length > 0) {
    //            var userViewSetting = {};
    //            var viewColumns = [];
    //            for (var i = 0; i < parentGridColumns.length; i++) {
    //                var gridCol = parentGridColumns[i];
    //                if (gridCol.name !== "ActionColumn" && gridCol.xtype !== "actioncolumn") {
    //                    var column = {
    //                        hidden: gridCol.hidden,
    //                        width: gridCol.width,
    //                        dataIndex: gridCol.dataIndex
    //                    };
    //                    viewColumns.push(column);
    //                }
    //            }
    //            userViewSetting.column = viewColumns;
    //            userViewSetting.groupInfo = {
    //                isGrouped: isGrouped,
    //                groupField: groupField,
    //                groupDir: groupDir
    //            };
    //            if (record.get(idPropertyField) > 0) {
    //                record.set('viewSettings', Ext.encode(userViewSetting));
    //            } else {
    //                record.set('userId', Chaching.utilities.ChachingGlobals.loggedInUserInfo.userId);
    //                record.set('gridId', parentGrid.gridId);
    //                record.set('id', 0);
    //                record.set('viewSettings', Ext.encode(userViewSetting));
    //            }
    //        }
    //        return true;
    //    }
    //    return false;
    //}

    doAfterCreateAction: function(createMode, formPanel, isEdit, record) {
        var me = this,
            view = me.getView(),
            formView = formPanel.down('form'),
            form = formView.getForm();

        var addressType = form.findField('addressTypeId').getStore();
        addressType.load();

        var country = form.findField('country').getStore();
        country.load();

        var state = form.findField('state').getStore();
        state.load();
        if(isEdit) {
            formView.getController().isEditAddress = true;
        }
        

    }
});
