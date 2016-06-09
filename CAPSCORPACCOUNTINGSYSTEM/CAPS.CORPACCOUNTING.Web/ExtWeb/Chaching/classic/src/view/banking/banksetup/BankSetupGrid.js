﻿/**
 * The class is created to provide main UI to access Bank Set Up .
 * Author: kamal
 * Date: 26/05/2016
 */
/**
 * @class Chaching.view.banking.BankSetupGrid
 * UI design for preference.
 * @alias widget.financialsbanking.banksetup
 */
Ext.define('Chaching.view.banking.banksetup.BankSetupGrid', {
    extend: 'Chaching.view.common.grid.ChachingGridPanel',

    requires: [
        'Chaching.view.banking.banksetup.BankSetupGridController'
    ],
    xtype: 'banking.banksetup',
    name: 'Banking.BankSetup',
    controller: 'banking.banksetupgrid',
    modulePermissions: {
        read: abp.auth.isGranted('Pages.Banking.BankSetup'),
        create: abp.auth.isGranted('Pages.Banking.BankSetup.Create'),
        edit: abp.auth.isGranted('Pages.Banking.BankSetup.Edit'),
        destroy: abp.auth.isGranted('Pages.Banking.BankSetup.Delete')
    },
    padding: 5,
    gridId: 21,
    store: 'banking.banksetup.BankSetupStore',
    headerButtonsConfig: [
      {
          xtype: 'displayfield',
          value: abp.localization.localize("BankSetup"),
          ui: 'headerTitle'
      }, '->', {
          xtype: 'button',
          scale: 'small',
          ui: 'actionButton',
          action: 'create',
          text: abp.localization.localize("Add").toUpperCase(),
          tooltip: app.localize('CreateBank'),
          checkPermission: true,
          iconCls: 'fa fa-plus',
          routeName: 'banking.banksetup.create',
          iconAlign: 'left'
      }],
    requireExport: true,
    requireMultiSearch: true,
    requireMultisort: true,
    isEditable: true,
    editingMode: 'row',
    columnLines: true,
    multiColumnSort: true,
    editWndTitleConfig: {
        title: app.localize('EditBank').initCap(),
        iconCls: 'fa fa-pencil'
    },
    createWndTitleConfig: {
        title: app.localize('CreateBank').initCap(),
        iconCls: 'fa fa-plus'
    },
    viewWndTitleConfig: {
        title: app.localize('ViewBank'),
        iconCls: 'fa fa-th'
    },
    createNewMode: 'tab',
    isSubMenuItemTab: true,
    //listeners: {
    //    cellclick: 'onProjectsCellClick'
    //},
    columns: [
         {
             xtype: 'gridcolumn',
             text: app.localize('BankName').initCap(),
             dataIndex: 'description',
             sortable: true,
             groupable: true,
             width: '17%',
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 emptyText: app.localize('ToolTipBankName')
             }, editor: {
                 xtype: 'textfield',
                 allowBlank: false
             }
         }, {
             xtype: 'gridcolumn',
             text: app.localize('AccountName').initCap(),
             dataIndex: 'bankAccountName',
             sortable: true,
             groupable: true,
             width: '17%',
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 emptyText: app.localize('ToolTipAccountName')
             }, editor: {
                 xtype: 'textfield',
                 allowBlank: false
             }
         }, {
             xtype: 'gridcolumn',
             text: app.localize('AccountType').initCap(),
             dataIndex: 'typeOfBankAccount',
             sortable: true,
             groupable: true,
             width: '15%',
             filterField: {
                 xtype: 'combobox',
                 width: '100%',
                 ui: 'fieldLabelTop',
                 forceSelection: true,
                 searchProperty: 'typeOfBankAccountId',
                 isEnum: true,
                 displayField: 'typeOfBankAccount',
                 valueField: 'typeOfBankAccountId',
                 emptyText: app.localize('SelectOption'),
                 store: 'utilities.AccountTypeListStore'

             }, editor: {
                 xtype: 'combobox',
                 width: '100%',
                 ui: 'fieldLabelTop',
                 displayField: 'typeOfBankAccount',
                 valueField: 'typeOfBankAccountId',
                 emptyText: app.localize('SelectOption'),
                 store: 'utilities.AccountTypeListStore'
             }
         }, {
             xtype: 'gridcolumn',
             text: app.localize('AccountNumber').initCap(),
             dataIndex: 'bankAccountNumber',
             sortable: true,
             groupable: true,
             width: '17%',
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 emptyText: app.localize('ToolTipAccountNumber')
             }, editor: {
                 xtype: 'textfield',
                 allowBlank: false
             }
         }, {
             xtype: 'gridcolumn',
             text: app.localize('LedgerAccount').initCap(),
             dataIndex: 'ledgerAccount',
             sortable: true,
             groupable: true,
             width: '15%',
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 entityName: 'LedgerAccount',
                 emptyText: app.localize('SelectOption')
             }, editor: {
                 xtype: 'textfield'
             }
         }, {
             xtype: 'gridcolumn',
             text: app.localize('ClosedAccount').initCap(),
             dataIndex: 'isClosed',
             sortable: false,
             groupable: false,
             renderer: Chaching.utilities.ChachingRenderers.statusRenderer,
             width: '10%',
             filterField: {
                 xtype: 'combobox',
                 valueField: 'value',
                 displayField: 'text',
                 store: {
                     fields: [{ name: 'text' }, { name: 'value' }],
                     data: [{ text: 'YES', value: 'true' }, { text: 'NO', value: 'false' }]
                 }
             },
             editor: {
                xtype: 'checkbox'
             }
         }, {
             xtype: 'gridcolumn',
             text: app.localize('DirectDeposit').initCap(),
             dataIndex: 'isachEnabled',
             sortable: false,
             groupable: false,
             hidden: true,
             renderer: Chaching.utilities.ChachingRenderers.statusRenderer,
             filterField: {
                 xtype: 'combobox',
                 valueField: 'value',
                 displayField: 'text',
                 store: {
                     fields: [{ name: 'text' }, { name: 'value' }],
                     data: [{ text: 'YES', value: 'true' }, { text: 'NO', value: 'false' }]
                 }
             },
             editor: {
                 xtype: 'checkbox'
             },
             width: '13%'
         }, {
             xtype: 'gridcolumn',
             text: app.localize('ACHDestinationCode').initCap(),
             dataIndex: 'achDestinationCode',
             sortable: true,
             groupable: true,
             hidden:true,
             width: '15%',
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 emptyText: app.localize('ToolTipACHDestinationCode')
             }, editor: {
                 xtype: 'textfield'
             }
         },
         {
             xtype: 'gridcolumn',
             text: app.localize('ACHDestinationName').initCap(),
             dataIndex: 'achDestinationName',
             sortable: true,
             groupable: true,
             width: '15%',
             hidden: true,
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 emptyText: app.localize('ToolTipACHDestinationName')
             }, editor: {
                 xtype: 'textfield'
             }
         },
         {
             xtype: 'gridcolumn',
             text: app.localize('ACHOriginCode').initCap(),
             dataIndex: 'achOriginCode',
             sortable: true,
             groupable: true,
             width: '15%',
             hidden: true,
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 emptyText: app.localize('ToolTipACHOriginCode')
             }, editor: {
                 xtype: 'textfield'
             }
         },
         {
             xtype: 'gridcolumn',
             text: app.localize('ACHOriginName').initCap(),
             dataIndex: 'achOriginName',
             sortable: true,
             groupable: true,
             width: '15%',
             hidden: true,
             filterField: {
                 xtype: 'textfield',
                 width: '100%',
                 emptyText: app.localize('ToolTipACHOriginName')
             }, editor: {
                 xtype: 'textfield'
             }
         }

    ]
});
