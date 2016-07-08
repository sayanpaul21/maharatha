
Ext.define('Chaching.view.tenants.TenantsForm',{
    extend: 'Chaching.view.common.form.ChachingFormPanel',
    alias: ['host.tenants.create', 'host.tenants.edit'],
    requires: [
        'Chaching.view.tenants.TenantsFormController'
    ],

    controller: 'tenants-tenantsform',
    name: 'Tenants',
    openInPopupWindow: true,
    hideDefaultButtons: false,
    scrollable: true,
    border: false,
    showFormTitle: false,
    displayDefaultButtonsCenter: true,
    defaults: {
        bodyStyle: { 'background-color': 'trasparent' },
      //  labelAlign: 'top',
        blankText: app.localize('MandatoryToolTipText')
    },
    defaultFocus: 'textfield#tenancyName',
    items: [{
        xtype: 'tabpanel',
        ui: 'formTabPanels',
        items : [{
            title: abp.localization.localize("GeneralInformation").initCap(),
            scrollable: true,
            iconCls: 'fa fa-gear',
            defaults: {
                labelWidth: 140
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'id',
                value: 0
            },
            {
                xtype: 'combobox',
                name: 'organizationId',
                itemId : 'organizationId',
                fieldLabel: app.localize('Organization').initCap(),
                width: '100%',
                ui: 'fieldLabelTop',
                emptyText: app.localize('SelectOption'),
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                allowBlank: false,
                forceSelection : true,
                store: Ext.create('Chaching.store.administration.organization.UserOrganizationListStore'),
                listeners: {
                    select : 'onOrganizationSelect'
                }
            },
            {
                xtype: 'textfield',
                name: 'tenancyName',
                itemId: 'tenancyName',
                allowBlank: false,
                fieldLabel: app.localize('TenancyName').initCap(),
                width: '100%',
                ui: 'fieldLabelTop',
                emptyText: app.localize('TTenancyCodeName'),
                listeners: {
                    blur : 'onTenancyNameEnter'
                }
            }, {
                xtype: 'textfield',
                name: 'name',
                allowBlank: false,
                fieldLabel: app.localize('Name').initCap(),
                width: '100%',
                ui: 'fieldLabelTop',
                emptyText: app.localize('TName')
            }, {
                xtype: 'checkbox',
                boxLabel: app.localize('UseHostDatabase'),
                name: 'isUseHostDatabase',
                reference: 'isUseHostDatabase',
                labelAlign: 'right',
                inputValue: true,
                checked: true,
                boxLabelCls: 'checkboxLabel'
            }, {
                xtype: 'textfield',
                name: 'connectionString',
                fieldLabel: app.localize('ConnectionString').initCap(),
                width: '100%',
                ui: 'fieldLabelTop',
                bind: {
                    hidden: '{isUseHostDatabase.checked}'
                },
                emptyText: app.localize('DatabaseConnectionString')
            }, {
                xtype: 'textfield',
                name: 'adminEmailAddress',
                fieldLabel: app.localize('AdminEmailAddress').initCap(),
                width: '100%',
                allowBlank: false,
                ui: 'fieldLabelTop',
                emptyText: app.localize('TAdminEmailAddress')
            }, {
                xtype: 'checkbox',
                boxLabel: app.localize('SetRandomPassword'),
                name: 'isSetRandomPassword',
                reference: 'isSetRandomPassword',
                labelAlign: 'right',
                inputValue: true,
                checked: true,
                boxLabelCls: 'checkboxLabel'
            }, {
                xtype: 'textfield',
                name: 'adminPassword',
                fieldLabel: app.localize('AdminPassword').initCap(),
                width: '100%',
                // allowBlank: false,
                ui: 'fieldLabelTop',
                inputType: 'password',
                bind: {
                    hidden: '{isSetRandomPassword.checked}'
                },
                emptyText: app.localize('AdminPassword')
            }, {
                xtype: 'textfield',
                name: 'adminPasswordRepeat',
                submitValue: false,
                fieldLabel: app.localize('AdminPasswordRepeat').initCap(),
                width: '100%',
                // allowBlank: false,
                ui: 'fieldLabelTop',
                inputType: 'password',
                bind: {
                    hidden: '{isSetRandomPassword.checked}'
                },
                emptyText: app.localize('AdminPasswordRepeat'),
                /*
                * Custom validator implementation - checks that the value matches what was entered into
                * the password1 field.
                */
                validator: function (value) {
                    var password1 = this.previousSibling('[name=adminPassword]');
                    return (value === password1.getValue()) ? true : 'Passwords do not match.'
                }
            }, {
                xtype: 'combobox',
                name: 'editionId',
                fieldLabel: app.localize('Edition').initCap(),
                width: '100%',
                ui: 'fieldLabelTop',
                emptyText: app.localize('TEdition'),
                displayField: 'editionDisplayName',
                valueField: 'editionId',
                bind: {
                    store: '{editionsForComboBox}'
                }
            }, {
                xtype: 'checkbox',
                boxLabel: app.localize('ShouldChangePasswordOnNextLogin'),
                name: 'shouldChangePasswordOnNextLogin',
                labelAlign: 'right',
                inputValue: true,
                checked: true,
                boxLabelCls: 'checkboxLabel'
            }, {
                xtype: 'checkbox',
                boxLabel: app.localize('SendActivationEmail'),
                name: 'sendActivationEmail',
                labelAlign: 'right',
                inputValue: true,
                checked: true,
                boxLabelCls: 'checkboxLabel'
            }, {
                xtype: 'checkbox',
                boxLabel: app.localize('Active'),
                name: 'isActive',
                labelAlign: 'right',
                inputValue: true,
                checked: true,
                boxLabelCls: 'checkboxLabel'
            }]
        }, {
            title: abp.localization.localize("CopyFromTenants"),
            iconCls: 'fa fa-gear',
            disabled : true,
            xtype: 'grid',
            cls: 'chaching-grid',
            itemId : 'moduleListGridItemId',
            height : 400,
            scrollable: true,
            selType: 'checkboxmodel',
            columns: [
               { text: app.localize('ModuleName'), dataIndex: 'name', flex: 1 }
            ],
            store: {
                fields: ['name'],
                data : []
                //data: [
                //    { name: 'Vendors'},
                //    { name: 'Users' },
                //    { name: 'Customers' },
                //    { name: 'Roles'},
                //    { name: 'ChartofAccounts' },
                //    { name: 'ProjectChartofAccounts' }
                //]
            }
        }]
    }]

    
    
});
