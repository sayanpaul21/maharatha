﻿Ext.define('Chaching.view.financials.accounts.AccountsGrid',
{
    extend: 'Chaching.view.common.grid.ChachingGridPanel',
    requires: [
        'Chaching.view.financials.accounts.AccountsGridController'
    ],
    controller: 'financials-accounts-accountsgrid',

    xtype: 'financials.accounts.accounts',
    store: 'financials.accounts.AccountsStore',
    name: 'Financials.Accounts.Accounts',
    modulePermissions: {
        read: abp.auth.isGranted('Pages.Financials.Accounts.Accounts'),
        create: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Create'),
        edit: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Edit'),
        destroy: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Delete'),
        attach: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Attach'),
        imports: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Import')
    },
    attachmentConfig: {
        objectType: 'Accounts',
        objectIdField: 'accountId'
    },
    padding: 5,
    gridId: 11,
    headerButtonsConfig: [
        {
            xtype: 'displayfield',
            value: abp.localization.localize("FinancialAccounts"),
            ui: 'headerTitle'
        }, '->', {
            xtype: 'button',
            scale: 'small',
            ui: 'actionButton',
            action: 'create',
            text: abp.localization.localize("Add").toUpperCase(),
            checkPermission: true,
            iconCls: 'fa fa-plus',
            iconAlign: 'left'
        }
    ],
    importConfig: {
        title: app.localize('FinancialAccounts'),
        entity: 'FinancialAccounts',
        isRequireImport: true,
        importStoreClass: 'imports.AccountsImportStore',
        targetGrid: null,
        targetUrl: abp.appPath + 'api/services/app/accountUnit/BulkAccountInsert',
        bulkListInputName: 'accountList' //server inputDto variable name
    },
    requireExport: true,
    requireMultiSearch: true,
    requireMultisort: true,
    isEditable: true,
    editingMode: 'row',
    columnLines: true,
    multiColumnSort: true,
    editWndTitleConfig: {
        title: app.localize('EditAccount'),
        iconCls: 'fa fa-pencil'
    },
    createWndTitleConfig: {
        title: app.localize('CreateNewAccount'),
        iconCls: 'fa fa-plus'
    },
    viewWndTitleConfig: {
        title: app.localize('ViewAccount'),
        iconCls: 'fa fa-th'
    },
    createNewMode: 'tab',
    isSubMenuItemTab: true,
    columns: [
        {
            xtype: 'gridcolumn',
            text: app.localize('AccountNumber'),
            dataIndex: 'accountNumber',
            sortable: true,
            groupable: true,
            //width: '10%',
            flex: 1,
            filterField: {
                xtype: 'textfield',
                width: '15%',
                emptyText: app.localize('AccountSearch')
            },
            editor: {
                xtype: 'textfield'
            }
        }, {
            xtype: 'gridcolumn',
            text: app.localize('Description'),
            dataIndex: 'caption',
            sortable: true,
            groupable: true,
            //width: '10%',
            flex: 1,
            filterField: {
                xtype: 'textfield',
                width: '100%',
                emptyText: app.localize('DescriptionSearch')
            },
            editor: {
                xtype: 'textfield'
            }
        }, {
            xtype: 'gridcolumn',
            text: app.localize('Classification'),
            dataIndex: 'typeOfAccount',
            itemId: 'typeOfAccountId',
            sortable: true,
            groupable: true,
            sorter: {
                property: 'typeOfAccount',
                sortOnEntity: ''
            },
            //width: '8%',
            flex: 1,
            filterField: {
                xtype: 'combobox',
                queryMode: 'local',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                searchProperty: 'typeOfAccountId',
                valueField: 'typeOfAccountId',
                displayField: 'typeOfAccount',
                listConfig: {
                    minWidth: 300
                },
                bind: {
                    store: '{typeOfAccountList}'
                }
            },
            editor: {
                xtype: 'combobox',
                queryMode: 'local',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                valueField: 'typeOfAccountId',
                displayField: 'typeOfAccount',
                listConfig: {
                    minWidth: 300
                },
                bind: {
                    store: '{typeOfAccountList}'
                }
            }
        }, {
            xtype: 'gridcolumn',
            text: app.localize('Consolidation'),
            dataIndex: 'typeofConsolidation',
            sortable: true,
            groupable: true,
            sorter: {
                property: 'typeofConsolidation',
                sortOnEntity: ''
            },
            //width: '10%',
            flex: 1,
            filterField: {
                xtype: 'combobox',
                valueField: 'typeofConsolidationId',
                displayField: 'typeofConsolidation',
                queryMode: 'local',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                isEnum: true,
                searchProperty: 'typeofConsolidationId',
                bind: {
                    store: '{typeofConsolidationList}'
                }
            },
            editor: {
                xtype: 'combobox',
                valueField: 'typeofConsolidationId',
                displayField: 'typeofConsolidation',
                queryMode: 'local',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                bind: {
                    store: '{typeofConsolidationList}'
                }
            }
        },
        {
            xtype: 'gridcolumn',
            text: app.localize('JournalsAllowed'),
            dataIndex: 'isEnterable',
            sortable: true,
            groupable: true,
            //width: '8%',
            flex: 1,
            renderer: Chaching.utilities.ChachingRenderers.rightWrongMarkRenderer,
            filterField: {
                xtype: 'combobox',
                forceSelection: true,
                valueField: 'value',
                displayField: 'text',
                store: {
                    fields: [{ name: 'text' }, { name: 'value' }],
                    data: [{ text: 'YES', value: 'true' }, { text: 'NO', value: 'false' }]
                }
            },
            editor: {
                xtype: 'checkbox',
                inputValue: 'true',
                uncheckedValue: 'false'
            }
        },
        {
            xtype: 'gridcolumn',
            text: app.localize('RollUpAccount'),
            dataIndex: 'isRollupAccount',
            sortable: true,
            groupable: true,
            flex: 1,
            //width: '8%',
            renderer: Chaching.utilities.ChachingRenderers.rightWrongMarkRenderer,
            filterField: {
                xtype: 'combobox',
                forceSelection: true,
                valueField: 'value',
                displayField: 'text',
                store: {
                    fields: [{ name: 'text' }, { name: 'value' }],
                    data: [{ text: 'YES', value: 'true' }, { text: 'NO', value: 'false' }]
                }
            },
            editor: {
                xtype: 'checkbox',
                inputValue: 'true',
                uncheckedValue: 'false'
            }
        },
        {
            xtype: 'gridcolumn',
            text: app.localize('EliminationAccount'),
            dataIndex: 'isElimination',
            sortable: true,
            groupable: true,
            flex: 1,
            //width: '8%',
            renderer: Chaching.utilities.ChachingRenderers.rightWrongMarkRenderer,
            filterField: {
                xtype: 'combobox',
                forceSelection: true,
                valueField: 'value',
                displayField: 'text',
                store: {
                    fields: [{ name: 'text' }, { name: 'value' }],
                    data: [{ text: 'YES', value: 'true' }, { text: 'NO', value: 'false' }]
                }
            },
            editor: {
                xtype: 'checkbox',
                inputValue: 'true',
                uncheckedValue: 'false'
            }
        }, {
            xtype: 'gridcolumn',
            text: app.localize('Currency'),
            dataIndex: 'typeOfCurrency',
            itemId: 'typeOfCurrencyId',
            sortable: true,
            groupable: true,
            flex: 1,
            sorter: {
                property: 'typeOfCurrency',
                sortOnEntity: ''
            },
            //width: '8%',
            filterField: {
                xtype: 'combobox',
                valueField: 'typeOfCurrencyId',
                displayField: 'typeOfCurrency',
                queryMode: 'local',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                searchProperty: 'typeOfCurrencyId',
                bind: {
                    store: '{typeOfCurrencyList}'
                }
            },
            editor: {
                xtype: 'combobox',
                valueField: 'typeOfCurrencyId',
                displayField: 'typeOfCurrency',
                queryMode: 'local',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                bind: {
                    store: '{typeOfCurrencyList}'
                }
            }
        }, {
            xtype: 'gridcolumn',
            text: app.localize('RateTypeOverride'),
            dataIndex: 'typeOfCurrencyRate',
            sortable: true,
            groupable: true,
            flex: 1,
            sorter: {
                property: 'typeOfAccountRate',
                sortOnEntity: ''
            },
            //width: '8%',
            filterField: {
                xtype: 'combobox',
                valueField: 'typeOfCurrencyRateId',
                displayField: 'typeOfCurrencyRate',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                searchProperty: 'typeOfCurrencyRateId',
                bind: {
                    store: '{typeOfCurrencyRateList}'
                }
            },
            editor: {
                xtype: 'combobox',
                valueField: 'typeOfCurrencyRateId',
                displayField: 'typeOfCurrencyRate',
                loadStoreOnCreate: true,
                isViewmodelStore: true,
                forceSelection: true,
                searchProperty: 'typeOfCurrencyRateId',
                bind: {
                    store: '{typeOfCurrencyRateList}'
                }
            }
        },
        {
            xtype: 'gridcolumn',
            text: app.localize('Multi-CurrencyReval'),
            dataIndex: 'isAccountRevalued',
            sortable: true,
            groupable: true,
            flex: 1,
            //width: '8%',
            renderer: Chaching.utilities.ChachingRenderers.rightWrongMarkRenderer,
            filterField: {
                xtype: 'combobox',
                forceSelection: true,
                valueField: 'value',
                displayField: 'text',
                store: {
                    fields: [{ name: 'text' }, { name: 'value' }],
                    data: [{ text: 'YES', value: 'true' }, { text: 'NO', value: 'false' }]
                }
            },
            editor: {
                xtype: 'checkbox',
                inputValue: 'true',
                uncheckedValue: 'false'
            }
        }, {
            xtype: 'gridcolumn',
            text: app.localize('NewAccount'),
            dataIndex: 'linkAccount',
            sortable: true,
            groupable: true,
            hidden: true,
            flex: 1,
            sorter: {
                property: 'linkAccount',
                sortOnEntity: ''
            },
            //width: '8%',
            filterField: {
                xtype: 'chachingcombobox',
                store: new Chaching.store.utilities.autofill.MappingAccountStore(),
                width: '100%',
                valueField: 'linkAccountId',
                displayField: 'linkAccount',
                queryMode: 'remote',
                minChars: 2,
                searchProperty: 'linkAccountId',
                modulePermissions: {
                    read: abp.auth.isGranted('Pages.Financials.Accounts.Accounts'),
                    create: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Create'),
                    edit: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Edit'),
                    destroy: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Delete')
                },
                primaryEntityCrudApi: {
                    read: abp.appPath + 'api/services/app/accountUnit/GetAccountsForMapping',
                    create: abp.appPath + 'api/services/app/accountUnit/CreateAccountUnit',
                    update: abp.appPath + 'api/services/app/accountUnit/UpdateAccountUnit',
                    destroy: abp.appPath + 'api/services/app/accountUnit/DeleteAccountUnit'
                },
                createEditEntityType: 'financials.accounts.accounts',
                createEditEntityGridController: 'financials-accounts-accountsgrid',
                entityType: 'Account',
                isTwoEntityPicker: false,
                listeners: {
                    beforequery: function(query, eOpts) {
                        var grid = this.up().grid;
                        if (grid) {
                            var coaId = grid.coaId;
                            var myStore = this.getStore();
                            myStore.getProxy().setExtraParam('id', coaId);
                        }
                    }
                }
            },
            editor: {
                xtype: 'chachingcombobox',
                store: new Chaching.store.utilities.autofill.MappingAccountStore(),
                width: '100%',
                valueField: 'linkAccountId',
                displayField: 'linkAccount',
                queryMode: 'remote',
                minChars: 2,
                hidden:true,
                modulePermissions: {
                    read: abp.auth.isGranted('Pages.Financials.Accounts.Accounts'),
                    create: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Create'),
                    edit: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Edit'),
                    destroy: abp.auth.isGranted('Pages.Financials.Accounts.Accounts.Delete')
                },
                primaryEntityCrudApi: {
                    read: abp.appPath + 'api/services/app/accountUnit/GetAccountsForMapping',
                    create: abp.appPath + 'api/services/app/accountUnit/CreateAccountUnit',
                    update: abp.appPath + 'api/services/app/accountUnit/UpdateAccountUnit',
                    destroy: abp.appPath + 'api/services/app/accountUnit/DeleteAccountUnit'
                },
                createEditEntityType: 'financials.accounts.accounts',
                createEditEntityGridController: 'financials-accounts-accountsgrid',
                entityType: 'Account',
                isTwoEntityPicker: false,
                listeners: {
                    beforequery: function(query, eOpts) {
                        var grid = this.up('grid');
                        if (grid) {
                            var coaId = grid.coaId;
                            var myStore = query.combo.getStore();
                            myStore.getProxy().setExtraParam('id', coaId);
                        }
                    }
                }
            }
        }
    ]
});