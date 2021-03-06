/**
 * Grids are an excellent way of showing large amounts of tabular data on the client side.
 * Essentially a supercharged `<table>`, GridPanel makes it easy to fetch, sort and filter
 * large amounts of data.
 *
 * Grids are composed of two main pieces - a {@link Ext.data.Store Store} full of data and
 * a set of columns to render.
 *
 * ## Basic GridPanel
 *
 *     @example
 *     Ext.create('Ext.data.Store', {
 *         storeId: 'simpsonsStore',
 *         fields:[ 'name', 'email', 'phone'],
 *         data: [
 *             { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
 *             { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
 *             { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
 *             { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
 *         ]
 *     });
 *
 *     Ext.create('Chaching.view.common.grid.ChachingGridPanel', {
 *         title: 'Simpsons',
 *         store: Ext.data.StoreManager.lookup('simpsonsStore'),
 *         columns: [
 *             { text: 'Name', dataIndex: 'name' },
 *             { text: 'Email', dataIndex: 'email', flex: 1 },
 *             { text: 'Phone', dataIndex: 'phone' }
 *         ],
 *         height: 200,
 *         width: 400,
 *         renderTo: Ext.getBody()
 *     });
 *
 * The code above produces a simple grid with three columns. We specified a Store which
 * will load JSON data inline.
 * In most apps we would be placing the grid inside another container and wouldn't need to
 * use the {@link #height}, {@link #width} and {@link #renderTo} configurations but they
 * are included here to make it easy to get up and running.
 *
 * The grid we created above will contain a header bar with a title ('Simpsons'), a row of
 * column headers directly underneath and finally the grid rows under the headers.
 *
 * **Height config with bufferedRenderer: true**
 *
 * The {@link #height} config must be set when creating a grid using
 * {@link #bufferedRenderer bufferedRenderer}: true _and_ the grid's height is not managed
 * by an owning container layout.  In Ext JS 5.x bufferedRendering is true by default.
 *
 */
Ext.define('Chaching.view.common.grid.ChachingGridPanel', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Chaching.view.common.grid.ChachingGridPanelController',
        'Chaching.view.common.grid.ChachingGridPanelModel',
        'Chaching.components.plugins.RowEditing',
        'Chaching.components.plugins.CellEditing',
        'Chaching.components.feature.ChachingGrouping'
    ],

    controller: 'common-grid-chachinggridpanel',
    viewModel: {
        type: 'common-grid-chachinggridpanel'
    },
    viewConfig: {
        emptyText: '<div class="emptyTextClass">' + app.localize('NoRecordsToDiplay') + '</div>'
    },
    /**
    * @cfg {boolean} requireMultiSearch
    */
    requireMultiSearch: true,
    /**
    * @cfg {boolean} requireMultisort
    */
    requireMultisort: true,
    /**
    * @cfg {boolean} requireGrouping
    */
    requireGrouping: true,
    groupingConfig:null,
    /**
    * @cfg {object} headerButtonsConfig
    */
    headerButtonsConfig: null,
    /**
    * @cfg {boolean} requireExport
    */
    requireExport: false,
    /**
   * @cfg {object} importConfig
   */
    importConfig: {
        title : '',
        entity: '',
        isRequireImport: false,
        importStoreClass: null,
        targetGrid: null,
        targetUrl: null,
        bulkListInputName: null
    },
    /**
    * @cfg {object} selModelConfig
    */
    selModelConfig: null,
    /**
    * @cfg {boolean} isEditable
    */
    isEditable: false,
    /**
    * @cfg {string} editingMode
    * values are cell and row.
    */
    editingMode: null,
    /**
    * @cfg {string} createNewMode
    * values are inline(default based on editing mode), popup and tab
    */
    createNewMode:'inline',
    columnLines: true,
    padding: 5,
    frame: false,
    layout: {
        type: 'fit'
    },
    /**
    * @cfg {boolean} showPagingToolbar
    * show paging toolbar for grid. Defaults to 'true'
    */
    showPagingToolbar: true,
    ignoreCellDblClick: false,
    cls: 'chaching-grid',
    /**
    * @cfg {object[]} actionColumnMenuItemsConfig
    */
    actionColumnMenuItemsConfig: null,//grid related action columns menu items
    /**
    * @cfg {boolean} requireActionColumn
    */
    requireActionColumn: true,
    name: '',
    enableLocking:false,
    syncRowHeight: false,
    editingModel: null,
    /**
    * @cfg {object} editWndTitleConfig
    * when editing record title and iconCls for window/tab
    * ##Usage { 
     * title:'Editing'
     * iconCls:'fa fa-edit-o'
    * }
    */
    editWndTitleConfig: null,
    /**
    * @cfg {object} createWndTitleConfig
    * when creating new record title and iconCls for window/tab
    * ##Usage { 
    * title:'Creating'
    * iconCls:'fa fa-edit-o'
    * }
    */
    createWndTitleConfig: null,
    /**
   * @cfg {object} viewWndTitleConfig
   * when record is opnened in view mode title and iconCls for tab/window
   * ##Usage { 
   * title:'View'
   * iconCls:'fa fa-edit-o'
   * }
   */
    viewWndTitleConfig:null,
    /**
    * @cfg {object} modulePermissions
    * Override this config in child grid if has additional permissions
    */
    modulePermissions: undefined,
    manageViewSetting: true,
    activeUserViewId: null,
    isSubMenuItemTab: false,
    hideClearFilter: true,
    /**
   * @cfg {boolean} requireSummary
   * Set to true if summary row is required at bottom
   */
    requireSummary: false,
    /**
  * @cfg {boolean} isInViewMode
  * Set to true if need in view mode.
  */
    isInViewMode: false,
    /**
 * @cfg {boolean} isInViewMode
 * Set to true if need in view mode.
 */
    isImportDataGrid: false,
    /**
     * 
     * @cfg {object} attachmentConfig
     */
    attachmentConfig: null,
    /**
    * 
    * @cfg {object} notesConfig
    */
    notesConfig: null,
    initComponent: function () {
        var me = this,
            controller = me.getController(),
            headerTbButtons = [],
            plugins = [],
            dockedItems = [],
            gridColumns = me.columns,
            features = [];
        var gridStore = me.store;
        if (typeof(gridStore)==="string") {
            me.store = Ext.create('Chaching.store.'+gridStore);
        }

        if (!me.modulePermissions) {
            me.modulePermissions = {
                read: abp.auth.isGranted('Pages.' + me.name),
                create: abp.auth.isGranted('Pages.' + me.name + '.Create'),
                edit: abp.auth.isGranted('Pages.' + me.name + '.Edit'),
                destroy: abp.auth.isGranted('Pages.' + me.name + '.Delete')
            };
        }
        //validate grid config
        if (me.isEditable && (me.editingMode === null || me.editingMode === undefined || me.editingMode === "")) {
            Ext.Error.raise('Please specify Editing mode for the grid');
        }
        if (me.headerButtonsConfig) {
            for (var i = 0; i < me.headerButtonsConfig.length; i++) {
                var btn = me.headerButtonsConfig[i];
                if (btn.action==="create") {
                    btn.handler = "onCreateNewBtnClicked";
                }
                if (btn.checkPermission) {
                    if (me.modulePermissions.create)
                        headerTbButtons.push(btn);
                } else headerTbButtons.push(btn);
            }
        }
        if (me.requireExport) {
            var exportBtn = {
                xtype: 'splitbutton',
                ui: 'actionButton',
                //text: abp.localization.localize("Export").toUpperCase(),
                iconCls: 'fa fa-download',
                iconAlign: 'left',
                tooltip: app.localize('Export'),
                menu: new Ext.menu.Menu({
                    ui: 'accounts',
                    items: [
                        { text: abp.localization.localize("DownloadTemplate").toUpperCase(), iconCls: 'fa fa-table', itemId: 'downloadTemplate', handler: 'onDownloadTemplateClick', hidden: !me.importConfig.isRequireImport },
                        { text: abp.localization.localize("ExportToExcel").toUpperCase(), iconCls: 'fa fa-file-excel-o', itemId: 'ExportExcel', handler: 'onExportToExcelClick' },
                        { text: abp.localization.localize("ExportToPDF").toUpperCase(), iconCls: 'fa fa-file-pdf-o', itemId: 'ExportPDF', handler: 'onExportToPDFClick' }
                    ]
                })
            };
            headerTbButtons.push(exportBtn);
        }
        if (me.importConfig.isRequireImport&&me.modulePermissions.imports) {
            var importBtn = {
                xtype: 'splitbutton',
                ui: 'actionButton',
                iconCls: 'fa fa-upload',
                iconAlign: 'left',
                tooltip: app.localize('Import'),
                menu: new Ext.menu.Menu({
                    ui: 'accounts',
                    items: [
                        {
                            text: abp.localization.localize("ImportTemplateFile").toUpperCase(),
                            iconCls: 'fa fa-file-archive-o',
                            itemId: 'importTemplateFile',
                            handler: 'onImportTemplateFileClick',
                            hidden: !me.modulePermissions.create
                        }
                    ]
                })
            };
            headerTbButtons.push(importBtn);
        }
        //add clear filter button regardless of multisearch
        var clearFilterBtn = {
            iconCls: 'fa fa-filter',
            width: 20,
            tooltip: app.localize('ClearFilter'),
            ui: 'actionButton',
            hidden:me.hideClearFilter,
            listeners: {
                click:'clearGridFilters'
            }
        }
        headerTbButtons.push(clearFilterBtn);

        if (headerTbButtons.length > 0) {
            var topBar =
            {
                xtype: 'toolbar',
                ui: 'plain',
                dock: 'top',
                isActionToolBar:true,
                layout: {
                    type: 'hbox',
                    pack: 'left'
                },
                //width: '100%',
                items: []
            };
            for (var j = 0; j < headerTbButtons.length; j++) {
                var item = headerTbButtons[j];
                topBar.items.push(item);
            }
            dockedItems.push(topBar);

        }

        //add requireMultisort plugin if required requireMultisort functionality
        if (me.requireMultisort) {
            var multiSortFeature= {
                ftype: 'ux-gmsrt',
                displaySortOrder: true
            }
            //features.push(multiSortFeature);
        }
        //add grouping if required
        if (me.requireGrouping) {
            var groupingFeature = undefined;
            if (me.groupingConfig) {
                groupingFeature = me.groupingConfig;              
                
            } else {
                groupingFeature = {
                    ftype: 'chachingGrouping',
                    hideGroupedHeader: true,
                    startCollapsed: false
                };
            }
            features.push(groupingFeature);
        }
        //add summary feature
        if (me.requireSummary) {
            var summaryFeature = {
                ftype: 'summary',
                dock: 'bottom'
            };
            features.push(summaryFeature);
        }
        if (me.requireMultiSearch) {
            var mutisearch = {
                ptype: 'saki-gms',
                iconColumn: false,
                clearItemIconCls: 'icon-settings',
                pluginId: 'gms',
                height: 32,
                filterOnEnter: false,
                viewModel: {
                    type: 'common-grid-chachinggridpanel'
                }
            };
            plugins.push(mutisearch);
        }

        if (me.showPagingToolbar) {
            var manageViewSettingsItem = [];
            if (me.manageViewSetting) {
                if (!me.gridId) {
                    Ext.Error.raise('Please provide gridId');
                }
                manageViewSettingsItem.push({
                    xtype: 'button',
                    scale: 'small',
                    text: app.localize('ManageUsersViewSetting'),
                    iconCls: 'fa fa-gears',
                    iconAlign: 'left',
                    ui: 'actionButton',
                    handler: 'onManageViewClicked'
                });
            }
            //items per page combo
            manageViewSettingsItem.push({
                xtype: 'combobox',
                fieldLabel: app.localize('GridItemsPerPage'),
                labelAlign: 'right',
                // ui: 'fieldLabelTop',
                displayField: 'pageSize',
                valueField: 'pageSize',
                forceSelection: true,
                editable: false,
                //value: me.store.pageSize == null ? ChachingGlobals.defaultGridPageSize : me.store.pageSize,
                queryMode: 'local',
                allowBlank: false,
                maxWidth: 200,
                store: Ext.create('Chaching.store.ItemsPerPageStore'),
                listeners: {
                    select: 'onGridItemsPerPageChange',
                    afterrender: 'onGridItemsPerPageComboRender'
                }
            });
            var pagingToolBar = {
                xtype: 'pagingtoolbar',
                store: me.store,
                displayInfo: true,
                //inputItemWidth: 50,
                dock: 'bottom',
                width: '100%',
                tabIndex: -1,
                ui: 'plainBottom',
                items: manageViewSettingsItem

            };
            dockedItems.push(pagingToolBar);
        }
        
        if (!me.isImportDataGrid)
            me.columns = me.applyGridViewSetting(gridColumns);
        else {
            me.columns = me.getColumnsForImportDataGrid(gridColumns);
        }
        //add editing plugin
        if (me.isEditable && (me.modulePermissions.edit)) {
            var editingModel;
            switch (me.editingMode) {
                case "cell":
                    editingModel = {
                        ptype: 'chachingCellediting',
                        pluginId: 'editingPlugin',
                        clicksToEdit: 2,
                        listeners: {
                            beforeedit: 'onBeforeGridEdit'
                        }
                    }
                    plugins.push(editingModel);
                    if (!me.selModelConfig)
                        me.selModel = 'cellmodel';
                    break;
                case "row":
                    editingModel = {
                        ptype: 'chachingRowediting',
                        pluginId: 'editingPlugin',
                        clicksToEdit: 2,
                        listeners: {
                            beforeedit: 'onBeforeGridEdit',
                            edit:'onEditComplete'
                        }
                    }
                    plugins.push(editingModel);
                    if (!me.selModelConfig)
                        me.selModel = 'rowmodel';
                    break;
                default:
                    break;
            }
            me.editingModel = editingModel;
        }
        if (me.selModelConfig) {
            me.selModel = me.selModelConfig;
        }
        me.plugins = plugins;
        me.features = features;
        if (dockedItems.length > 0) {
            me.dockedItems = dockedItems;
        }
        me.callParent(arguments);
    },
    applyGridViewSetting:function(defaultSetting,apply,settingsToApply) {
        var me = this,
            controller = me.getController();
        var actCol = me.getActionMenuColumn();
        ///TODO change according to userViewSetting if any else continue with default columns
        var columns = [];
        //add actionColumn if required
        if (me.requireActionColumn && actCol) {
            columns.push(actCol);
        }

        ///Check for usersDefaultGridViewSetting
        var usersDefaultGridViewSettings = undefined;
        if (settingsToApply) {
            usersDefaultGridViewSettings = settingsToApply;
        } else
            usersDefaultGridViewSettings = Chaching.utilities.ChachingGlobals.usersDefaultGridViewSettings;

        if (usersDefaultGridViewSettings && usersDefaultGridViewSettings.length > 0) {
            var usersDefaultSettingForMe = me.getDefaultSettingForMe(usersDefaultGridViewSettings);
            if (usersDefaultSettingForMe) {
                if (apply) {
                    //Fires when user apply selected view/when user reloads page with #tag
                    var newInitialConfigs = [];
                    for (var j = 0; j < defaultSetting.length; j++) {
                        var configCol = defaultSetting[j];
                        if (configCol && typeof (configCol.getInitialConfig) === 'function') {
                            var colCfg = configCol.initialConfig;
                            if (colCfg.xtype === "actioncolumn") {
                                colCfg.items = configCol.items;
                            }
                            newInitialConfigs.push(colCfg);
                        }
                    }
                    var newColumns = [];
                    if (me.requireActionColumn && actCol) {
                        newColumns.push(actCol);
                    }
                    newColumns = me.applySettings(newInitialConfigs, Ext.decode(usersDefaultSettingForMe.viewSettings), newColumns);
                    me.reconfigure(me.getStore(), newColumns);
                    me.updateLayout();
                    return;
                } else {
                    //fires when node/menuitem is clicked
                    columns = me.applySettings(defaultSetting, Ext.decode(usersDefaultSettingForMe.viewSettings), columns);
                    return columns;
                }
            }
        }
        //add columns to columns array
        for (var i = 0; i < defaultSetting.length; i++) {
            var col = defaultSetting[i];
            columns.push(col);
        }
        return columns;
    },
    getActionMenuColumn: function () {
        var me = this, controller = me.getController();
        var menuItems = [];
        var defaultMenuItems = me.getDefaultActionColumnMenuItems();
        var userMenuItems = me.actionColumnMenuItemsConfig;

        if (defaultMenuItems && defaultMenuItems.length > 0) {
            for (var k = 0; k < defaultMenuItems.length; k++) {
                menuItems.push(defaultMenuItems[k]);
            }
        }      
        if (userMenuItems && userMenuItems.length > 0) {
            if (menuItems.length > 0) {
                //menuItems.push('-');
                menuItems.push({ xtype: 'menuseparator', itemId : 'actionMenuSeparator' });
            }
            for (var l = 0; l < userMenuItems.length; l++) {
                var userItem = {
                    text: userMenuItems[l].text,
                    iconCls: userMenuItems[l].iconCls,
                    itemId:userMenuItems[l].itemId?userMenuItems[l].itemId:'userMenuItem'+l,
                    listeners: {
                        click: controller[userMenuItems[l].clickActionName]
                    }
                }               
                menuItems.push(userItem);
            }
        }
        var actionCol = {
            text: app.localize('Actions'),
            width: '5%',
            minWidth: 70,
            maxWidth:70,
            hidden: false,
            sortable: false,
            name: 'ActionColumn',
            hideable: false,
            menuDisabled: true,
            resizable: false,
            //maxWidth:100,
            renderer: function (value, cell) {
                var id = Ext.id();
                var widgetRec = cell.record;
                var widgetCol = cell.column;
                Ext.Function.defer(function () {
                    var button = Ext.create('Ext.button.Button', {
                        ui: 'actionMenuButton',
                        scale: 'small',
                        height: 22,
                        width: 50,
                        //text: app.localize('Actions'),
                        iconCls: 'icon-settings',
                        iconAlign: 'left',
                        widgetRec: widgetRec,
                        widgetCol: widgetCol,
                        menu: new Ext.menu.Menu({
                            ui: 'accounts',
                            items: menuItems
                        }),
                        listeners: {
                            menushow: function (btn,menu) {
                                btn.menu.widgetRecord = btn.widgetRec;
                                btn.menu.widgetColumn = btn.widgetCol;
                            }
                        }
                    });
                    if (button.widgetCol) {
                        var grid = button.widgetCol.up('gridpanel');
                        if (grid) {
                            if (grid.getController()) {
                                button.on('click', grid.getController().doRowSpecificEditDelete, button, grid);
                            }
                        }
                    }
                    if (Ext.get(id)) {
                        button.render(Ext.get(id));
                    }
                }, 1);
                return '<div id="' + id + '"></div>';

            },
            editor: {
                xtype:'label'
            }
        }

        return actionCol;
    },
    doRowSpecificEditDelete:function(button,grid) {
    },
    applySettings: function (definedColumns, usersDefaultSetting, outValue) {
        var me = this,
            myStore = me.getStore();
        var defaultSettingColumns = usersDefaultSetting.column;
        //loop setting object to get in order
        for (var i = 0; i < defaultSettingColumns.length; i++) {
            var settingCol = defaultSettingColumns[i];
            for (var j = 0; j < definedColumns.length; j++) {
                var definedCol = definedColumns[j];
                if (settingCol.dataIndex === definedCol.dataIndex) {
                    if (settingCol.width) { // when column is resized 
                        definedCol.flex = null;
                    }
                    if (!settingCol.width && settingCol.flex == null) { // when column is resized and switch to different manage view, resized column view settings is applied
                        definedCol.flex = 1;
                    }
                    definedCol.width = settingCol.width;
                    definedCol.hidden = settingCol.hidden;
                    outValue.push(definedCol);
                    break;
                }
            }
        }
        var groupInfo = usersDefaultSetting.groupInfo;
        if (typeof (myStore) === 'string') {
            myStore = Ext.getStore(myStore);
        }
        if (groupInfo && groupInfo.isGrouped) {
            myStore.group(groupInfo.groupField, groupInfo.groupDir);
        } else if (myStore.isGrouped()) {
            myStore.group(null);
        }
        return outValue;
    },
    getDefaultSettingForMe: function (usersDefaultGridViewSettings) {
        var me = this,
            returnVal = undefined,
            gridId = me.gridId;
        for (var i = 0; i < usersDefaultGridViewSettings.length; i++) {
            var defaultSetting = usersDefaultGridViewSettings[i];
            if (defaultSetting.gridId === gridId) {
                returnVal = defaultSetting;
                me.activeUserViewId = defaultSetting.userViewId;
                break;
            }
        }
        return returnVal;
    },
    getDefaultActionColumnMenuItems: function () {
        var me = this, controller = me.getController();
        var defaultMenuItems = [];
        //check for permission from abp
        if (me.modulePermissions.read && (me.createNewMode === "popup" || me.createNewMode === "tab")) {
            var viewMenuItem = {
                text: app.localize('View'),
                itemId : 'viewActionMenu',
                iconCls: 'fa fa-th',
                eventListenerName: 'editActionClicked',
                listeners: {
                    click: function (menu, item, e, eOpts) {
                        return controller.editActionClicked(menu, item, e, eOpts, true);
                    }
                }
            };
            defaultMenuItems.push(viewMenuItem);
        }
        if (me.modulePermissions.edit) {
            //full editing is required only when create mode is popup/tab
            if (me.createNewMode === "popup" || me.createNewMode === "tab") {
                var editMenuItem = {
                    text: app.localize('Edit'),
                    itemId: 'editActionMenu',
                    iconCls: 'fa fa-pencil',
                    eventListenerName: 'editActionClicked',
                    listeners: {
                        click: function(menu, item, e, eOpts) {
                            return controller.editActionClicked(menu, item, e, eOpts, false);
                        }
                    }
                };
                defaultMenuItems.push(editMenuItem);
            }

            if (me.isEditable) {
                var quickEditMenuItem= {
                    text: app.localize('QuickEdit'), iconCls: 'fa fa-pencil-square-o ',
                    itemId: 'quickEditActionMenu',
                    eventListenerName: 'quickEditActionClicked',
                    listeners: {
                        click: function (menu, item, e, eOpts) {
                            return controller.quickEditActionClicked(menu, item, e, eOpts);
                        }
                    }
                }
                defaultMenuItems.push(quickEditMenuItem);
            }
        }
        if (me.modulePermissions.destroy) {
            var deleteMenuItem = {
                text: app.localize('Delete'), iconCls: 'fa fa-recycle',
                itemId: 'deleteActionMenu',
                eventListenerName: 'deleteActionClicked',
                listeners: {
                    click: function (menu, item, e, eOpts) {
                        return controller.deleteActionClicked(menu, item, e, eOpts);
                    }
                }
            };
            defaultMenuItems.push(deleteMenuItem);
        }
        //add attachments menu item
        if (me.modulePermissions.attach && me.attachmentConfig) {
            if (defaultMenuItems.length > 0) {
                defaultMenuItems.push('-');
            }
            var attachmentMenu= {
                text: app.localize('Attach'),
                iconCls: 'fa fa-paperclip',
                itemId: 'attachmentActionMenu',
                eventListenerName: 'attachmentActionClicked',
                listeners: {
                    click:function(menu, item, e, eOpts) {
                        return controller.attachmentActionClicked(menu, item, e, eOpts);
                    }
                }
            }
            defaultMenuItems.push(attachmentMenu);
        }
        if (me.modulePermissions.edit && me.notesConfig) {
            if (defaultMenuItems.length > 0) {
                defaultMenuItems.push('-');
            }
            var notesMenu = {
                text: app.localize('Notes'),
                iconCls: 'fa fa-sticky-note-o',
                itemId: 'notesActionMenu',
                eventListenerName: 'notesActionClicked',
                listeners: {
                    click: function (menu, item, e, eOpts) {
                        return controller.notesActionClicked(menu, item, e, eOpts);
                    }
                }
            }
            defaultMenuItems.push(notesMenu);
        }
        return defaultMenuItems;
    },
    getColumnsForImportDataGrid:function(columns) {
        var newColumns = [];
        var errorMessageColumn = {
            xtype: 'gridcolumn',
            text: app.localize('Message'),
            dataIndex: 'errorMessage',
            hideable: false,
            movable: false,
            sortable: true,
            groupable: false,
            menuDisabled: true,
            renderer: Chaching.utilities.ChachingRenderers.errorMessageColumnRenderer,
            flex: 1
        };
        var rowNumbererColumn = {
            xtype: 'rownumberer',
            name: 'RowNumber',
            maxWidth: 100,
            minWidth: 30
        };
        newColumns.push(rowNumbererColumn);
        newColumns.push(errorMessageColumn);

        var deleteColumn= {
            xtype: 'actioncolumn',
            name: 'Delete',
            dataIndex: 'Delete',
            scale: 'small',
            iconCls: 'deleteCls',
            tooltip: app.localize('Delete'),
            flex: 1,
            maxWidth:30,
            minWidth:30,
            hideable: false,
            movable: false,
            resizable: false,
            sortable: false,
            groupable: false,
            menuDisabled: true,
            handler: 'onImportedDeleteClicked'
        }
        for (var i = 0; i < columns.length; i++) {
            newColumns.push(columns[i]);
        }
        newColumns.push(deleteColumn);
        return newColumns;
    }


});
