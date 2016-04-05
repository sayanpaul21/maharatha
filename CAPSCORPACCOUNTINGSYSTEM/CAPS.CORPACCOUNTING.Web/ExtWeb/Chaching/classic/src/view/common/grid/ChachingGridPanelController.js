Ext.define('Chaching.view.common.grid.ChachingGridPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.common-grid-chachinggridpanel',
    //Event Listeners
    quickEditActionClicked: function (menu, item, e, eOpts) {
        //do edit based on editMode of grid
        var parentMenu = menu.parentMenu,
            widgetRec = parentMenu.widgetRecord,
            widgetCol = parentMenu.widgetColumn,
            grid = widgetCol.up('grid');

        //TODO start edit by checking row allowEdit property
        if (widgetRec && grid) {
            var editingPlugin = grid.getPlugin('editingPlugin');
            if (editingPlugin) {
                widgetRec.set('passEdit', true);
                editingPlugin.startEdit(widgetRec);
            }
        }

    },
    editActionClicked:function(menu, item, e, eOpts) {
        var parentMenu = menu.parentMenu,
            widgetRec = parentMenu.widgetRecord,
            widgetCol = parentMenu.widgetColumn,
            grid = widgetCol.up('grid'),
            controller = grid.getController();
        //TODO start edit by checking row allowEdit property
        if (widgetRec && grid) {
            var formView = controller.createNewRecord(grid.xtype, grid.createNewMode,true);
            if (formView) {
                formView.down('form').getForm().setValues(widgetRec.data);
            }
        }
    },
    deleteActionClicked: function (menu, item, e, eOpts) {
        //do delete based on operation of grid store
        var parentMenu = menu.parentMenu,
            widgetRec = parentMenu.widgetRecord,
            widgetCol = parentMenu.widgetColumn,
            grid = widgetCol.up('grid'),
            controller = grid.getController,
            gridStore = grid.getStore();

        //Delete record
        if (widgetRec && grid) {
            gridStore.setAutoSync(true);
            gridStore.remove(widgetRec);
            gridStore.setAutoSync(false);
           
        }
    },
    onEditComplete:function(editor, e) {
        var me = this,
            view = this.getView();
        if (editor && editor.ptype === "chachingRowediting" && editor.context) {
            var context = editor.context,
                grid = context.grid,
                gridStore = grid.getStore(),
                record = context.record,
                idPropertyField = gridStore.idPropertyField;
            var operation;
            //if record.get(id)>0 then update else add
            if (record.get(idPropertyField) > 0) {
                operation = Ext.data.Operation({
                    params: record.data,
                    records:[record],
                    callback: me.onOperationCompleteCallBack
                });
                gridStore.update(operation);
            } else {
                record.id = 0;
                record.set('id', 0);
                operation = Ext.data.Operation({
                    params: record.data,
                    controller:me,
                    callback: me.onOperationCompleteCallBack
                });
                gridStore.create(record.data,operation);
            }

        }
    },
    doReloadGrid:function() {
        var me = this,
            view = me.getView(),
            gridStore = view.getStore();

        gridStore.reload();
    },
    onOperationCompleteCallBack:function(records, operation, success) {
        if (success) {
            Ext.toast('Operation completed successfully.');
            var action = operation.getAction();
            if (action === "create" || action === "destroy") {
                var controller = operation.controller;
                controller.doReloadGrid();
            }
        } else {
            var response = Ext.decode(operation.getResponse().responseText);
            var message = '',
                title = 'Error';
            if (response && response.error) {
                title = response.error.message;
                message = response.error.details ? response.error.details : title;
            }
            Ext.toast(message);
        }
    },

    //editing plugin listeners
    onBeforeGridEdit:function(editor, context, eOpts) {
        ///TODO cancel edit if restricted
        //cancel edit if is actioncolumn editing
        var record = context.record;
        if (context.column.name === "ActionColumn" && !record.get('passEdit')) return false;
    },
    onCreateNewBtnClicked:function(btn) {
        var me = this,
            view = me.getView(),
            gridStore = view.getStore(),
            model = gridStore.getModel(),
            className = model.$className,
            idPropertyField = gridStore.idPropertyField,
            editingPlugin = view.getPlugin('editingPlugin');
        
        var modelInstance;
        if (view && view.createNewMode) {
            switch (view.createNewMode) {
                case "inline":
                    modelInstance = Ext.create(className, {
                        idPropertyField: 0,
                        passEdit: true,
                        passDelete:true
                    });
                    gridStore.insert(0, modelInstance);
                    editingPlugin.startEdit(gridStore.getAt(0));
                    break;
                case "popup":
                    me.createNewRecord(view.xtype,'popup',false);
                    break;
                case "tab":
                    break;
                default:
                    break;
            }
            
        }
    },
    //Do module specific tasks 
    doBeforeCreateAction: function (createNewMode) { },
    doAfterCreateAction: function (createNewMode,form) { },
    createNewRecord:function(type,createMode,isEdit) {
        var me = this,
            view = me.getView(),
            formView,
            className;
        me.doBeforeCreateAction(createMode);
        if (createMode === "popup") {
            className = type + ".createView";
            formView = Ext.create({
                xtype: className
            });
            formView.show();
        }
        me.setParentControl(formView);
        me.doAfterCreateAction(createMode, formView,isEdit);
        return formView;

    },
    setParentControl: function (formView) {
        var me = this,
            view = me.getView();
        if (formView) {
            var form = formView.down('form');
            form.parentGrid = view;
        }
    }
    
});