﻿Ext.define('Chaching.view.banking.banksetup.BankSetupForm', {
    extend: 'Chaching.view.common.form.ChachingFormPanel',
    alias: ['widget.banking.banksetup.create', 'widget.banking.banksetup.edit'],
    requires: [
        'Chaching.view.banking.banksetup.BankSetupFormController'
    ],
    controller: 'banking-banksetup-banksetupform',
    modulePermissions: {
        read: abp.auth.isGranted('Pages.Banking.BankSetup'),
        create: abp.auth.isGranted('Pages.Banking.BankSetup.Create'),
        edit: abp.auth.isGranted('Pages.Banking.BankSetup.Edit'),
        destroy: abp.auth.isGranted('Pages.Banking.BankSetup.Delete'),
        attach: abp.auth.isGranted('Pages.Banking.BankSetup.Attach')
    },
    name: 'banksetup',
    openInPopupWindow: false,
    hideDefaultButtons: false,
    autoScroll: true,
    border: false,
    showFormTitle: false,
    titleConfig: {
        title: abp.localization.localize("CreateBank").initCap()
    },
    attachmentConfig: {
        objectType: 'BankAccountUnit',
        objectIdField: 'bankAccountId'
    },
    items: {
        xtype: 'tabpanel',
        //tabPosition : 'left',
        ui: 'formTabPanels',
        items: [
        {
            title: abp.localization.localize("BankSetup").initCap(),
            iconCls: 'fa fa-gear',
            items: [{
                xtype: 'fieldset',
                ui: 'transparentFieldSet',
                title: abp.localization.localize("BankingInformation").initCap(),
                collapsible: true,
                layout: 'column',
                items: [{
                    columnWidth: .33,
                    padding: '20 10 0 20',
                    defaults: {
                        // labelAlign: 'top',
                        labelWidth: 120,
                        blankText: app.localize('MandatoryToolTipText')
                    },
                    items: [{
                        xtype: 'hiddenfield',
                        name: 'bankAccountId',
                        value: 0
                    }, {
                        xtype: 'textfield',
                        name: 'description',
                        allowBlank: false,
                        fieldLabel: app.localize('BankName').initCap(),
                        width: '100%',
                        ui: 'fieldLabelTop',
                        emptyText: app.localize('MandatoryField')
                    },
                    {
                        xtype: 'textfield',
                        name: 'bankAccountName',
                        fieldLabel: app.localize('AccountName').initCap(),
                        width: '100%',
                        allowBlank: false,
                        emptyText: app.localize('MandatoryField'),
                        ui: 'fieldLabelTop'
                    },{
                        xtype: 'combobox',
                        name: 'typeOfBankAccountId',
                        fieldLabel: app.localize('AccountType').initCap(),
                        width: '100%',
                        ui: 'fieldLabelTop',
                        displayField: 'typeOfBankAccount',
                        valueField: 'typeOfBankAccountId',
                        emptyText: app.localize('SelectOption'),
                        queryMode: 'local',
                        store: 'utilities.AccountTypeListStore'
                       
                        }, {
                            xtype: 'textfield',
                            name: 'bankAccountNumber',
                            allowBlank: false,
                            emptyText: app.localize('MandatoryField'),
                            fieldLabel: app.localize('AccountNumber').initCap(),
                            width: '100%',
                            ui: 'fieldLabelTop'
                        }
                    ]
                },
                {
                    columnWidth: .33,
                    padding: '20 10 0 20',
                    defaults: {
                        // labelAlign: 'top',
                        labelWidth: 140,
                        blankText: app.localize('MandatoryToolTipText')
                    },
                    items: [{
                        xtype: 'textfield',
                        name: 'routingNumber',
                        fieldLabel: app.localize('RoutingNumber').initCap(),
                        width: '100%',
                        ui: 'fieldLabelTop'
                    }, {
                        xtype: 'textfield',
                        name: 'positivePayTransmitterInfo',
                        fieldLabel: app.localize('PositivePayBankNumber').initCap(),
                        width: '100%',
                        ui: 'fieldLabelTop'
                    }, {
                        xtype: 'chachingcombobox',
                        store: new Chaching.store.utilities.autofill.AccountListStore(),
                        fieldLabel: app.localize('LedgerAccount'),
                        ui: 'fieldLabelTop',
                        width: '100%',
                        name: 'accountId',
                        valueField: 'accountId',
                        displayField: 'accountNumber',
                        queryMode: 'remote',
                        minChars: 2,
                        modulePermissions: {
                            read: abp.auth.isGranted('Pages.Financials.Accounts.Accounts'),
                            create: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Create'),
                            edit: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Edit'),
                            destroy: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Delete')
                        },
                        primaryEntityCrudApi: {
                            read: abp.appPath + 'api/services/app/bankAccountUnit/GetCorporateAccountList',
                            create: abp.appPath + 'api/services/app/accountUnit/CreateAccountUnit',
                            update: abp.appPath + 'api/services/app/accountUnit/UpdateAccountUnit',
                            destroy: abp.appPath + 'api/services/app/accountUnit/DeleteAccountUnit'
                        },
                        createEditEntityType: 'financials.accounts.accounts',
                        createEditEntityGridController: 'financials-accounts-accountsgrid',
                        entityType: 'Account'
                    }, {
                        xtype: 'chachingcombobox',
                        store: new Chaching.store.utilities.autofill.DivisionListStore(),
                        fieldLabel: app.localize('Divisions'),
                        ui: 'fieldLabelTop',
                        width: '100%',
                        name: 'jobId',
                        valueField: 'jobId',
                        displayField: 'jobNumber',
                        queryMode: 'remote',
                        minChars: 2,
                        modulePermissions: {
                            read: abp.auth.isGranted('Pages.Financials.Accounts.Divisions'),
                            create: abp.auth.isGranted('Pages.Financials.Accounts.Divisions.Create'),
                            edit: abp.auth.isGranted('Pages.Financials.Accounts.Divisions.Edit'),
                            destroy: abp.auth.isGranted('Pages.Financials.Accounts.Divisions.Delete')
                        },
                        primaryEntityCrudApi: {
                            read: abp.appPath + 'api/services/app/jobUnit/GetDivisionList',
                            create: abp.appPath + 'api/services/app/divisionUnit/CreateDivisionUnit',
                            update: abp.appPath + 'api/services/app/divisionUnit/UpdateDivisionUnit',
                            destroy: abp.appPath + 'api/services/app/divisionUnit/DeleteDivisionUnit'
                        },
                        createEditEntityType: 'financials.accounts.divisions', 
                        createEditEntityGridController: 'financials-accounts-divisionsgrid',
                        entityType: 'Division'
                    }]
                },
                            {
                                columnWidth: .33,
                                padding: '20 10 0 20',
                                defaults: {
                                    // labelAlign: 'top',
                                    labelWidth: 180,
                                    blankText: app.localize('MandatoryToolTipText')
                                },
                                items: [{
                                    xtype: 'combobox',
                                    name: 'typeOfCheckStockId',
                                    fieldLabel: app.localize('CheckStock').initCap(),
                                    width: '100%',
                                    ui: 'fieldLabelTop',
                                    displayField: 'typeOfCheckStock',
                                    valueField: 'typeOfCheckStockId',
                                    emptyText: app.localize('SelectOption'),
                                    store: 'utilities.CheckStockListStore'
                                }, {
                                    xtype: 'textfield',
                                    name: 'lastCheckNumberGenerated',
                                    fieldLabel: app.localize('LastCheckNumber').initCap(),
                                    width: '100%',
                                    ui: 'fieldLabelTop'
                                }, {
                                    xtype: 'combobox',
                                    name: 'typeOfUploadFileId',
                                    fieldLabel: app.localize('UploadMethod').initCap(),
                                    width: '100%',
                                    ui: 'fieldLabelTop',
                                    displayField: 'uploadFileName',
                                    valueField: 'typeOfUploadFileId',
                                    emptyText: app.localize('SelectOption'),
                                    store: 'utilities.UploadMethodListStore'
                                }, {
                                    xtype: 'combobox',
                                    name: 'positivePayTypeOfUploadFileId',
                                    fieldLabel: app.localize('PositivePayFile').initCap(),
                                    width: '100%',
                                    ui: 'fieldLabelTop',
                                    displayField: 'positivePayTypeOfUploadFile',
                                    valueField: 'positivePayTypeOfUploadFileId',
                                    emptyText: app.localize('SelectOption'),
                                    store: 'utilities.PositivePayFileListStore'
                                }, {
                                    xtype: 'checkbox',
                                    name: 'isClosed',
                                    labelAlign: 'right',
                                    inputValue: true,
                                    checked: true,
                                    width: '100%',
                                    ui: 'default',
                                    boxLabelCls: 'checkboxLabel',
                                    boxLabel: app.localize('ClosedBankAccount')
                                }]
                            }]
            }, {
                //padding: '20 10 0 20',
                items: [{
                    xtype: 'banking.banksetup.checknumbergrid',
                    itemId: 'checkNumberGrid',
                    width:'100%',
                    autoScroll: true
                }]
            }]
        },
        {
            title: abp.localization.localize("ACHDirectDepositTitle"),
            iconCls: 'fa fa-gear',
            items: [
              {
                  xtype: 'fieldset',
                  ui: 'transparentFieldSet',
                  collapsible: true,
                  title: abp.localization.localize("ACHDirectDeposit"),
                  layout: 'column',
                  items: [
        {
            columnWidth: .4,
            padding: '20 10 0 20',
            defaults: {
                // labelAlign: 'top',
                labelWidth: 150//,
                //blankText: app.localize('MandatoryToolTipText')
            },
            items: [
                 {
                        xtype: 'checkbox',
                        name: 'isachEnabled',
                        boxLabelAlign: 'before',
                        inputValue: true,
                        checked: false,
                        width: '100%',
                        maxWidth: 200,
                        //labelStyle : 'padding-left : 0px !important;',
                        ui: 'default',
                        boxLabelCls: 'checkboxLabelLeftAlign',
                        boxLabel: app.localize('EnableACHDirectDeposit')
                 },
                  {
                      xtype: 'textfield',
                      name: 'achDestinationCode',
                     // allowBlank: false,
                      fieldLabel: app.localize('ACHDestinationCodeLabel'),
                      width: '100%',
                      ui: 'fieldLabelTop'
                  }
                    ]
        },
                  {
                      columnWidth: .3,
                      padding: '20 10 0 20',
                      defaults: {
                          // labelAlign: 'top',
                          labelWidth: 150//,
                          //blankText: app.localize('MandatoryToolTipText')
                      },
                      items: [
                {
                    xtype: 'textfield',
                    name: 'achDestinationName',
                   // allowBlank: false,
                    fieldLabel: app.localize('ACHDestinationNameLabel'),
                    width: '100%',
                    ui: 'fieldLabelTop'
                },
                    {
                        xtype: 'textfield',
                        name: 'achOriginCode',
                       // allowBlank: false,
                        fieldLabel: app.localize('ACHOriginCodeLabel'),
                        width: '100%',
                        ui: 'fieldLabelTop'
                    }]
                  },
                  {
                      columnWidth: .3,
                      padding: '20 10 0 20',
                      defaults: {
                          // labelAlign: 'top',
                          labelWidth: 120//,
                          //blankText: app.localize('MandatoryToolTipText')
                      },
                      items: [{
                          xtype: 'textfield',
                          name: 'achOriginName',
                         // allowBlank: false,
                          fieldLabel: app.localize('ACHOriginNameLabel'),
                          width: '100%',
                          ui: 'fieldLabelTop'
                      }]
                  }]
              }]
        }]

    }
});