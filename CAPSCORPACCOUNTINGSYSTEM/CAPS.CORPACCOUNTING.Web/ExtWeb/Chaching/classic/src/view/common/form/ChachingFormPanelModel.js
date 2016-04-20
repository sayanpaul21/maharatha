Ext.define('Chaching.view.common.form.ChachingFormPanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.common-form-chachingformpanel',
    data: {
        name: 'Chaching'
    },
    stores: {
        StandardGroupTotalList: {
            fields: [{ name: 'name' }, { name: 'value' }, {
                name: 'standardGroupTotal', convert: function (value, record) {
                    return record.get('name');
                }
            }, {
                name: 'standardGroupTotalId', convert: function (value, record) {
                    return record.get('value');
                }
            }],
            xtype: 'ajax',
            autoLoad: true,
            proxy: {
                actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
                type: 'chachingProxy',
                url: abp.appPath + 'api/services/app/coaUnit/StandardGroupTotalList',
                reader: {
                    type: 'json',
                    rootProperty: 'result',
                    totalProperty: 'result.totalCount'
                }
            }
        },

        linkChartOfAccountList: {
            fields: [{ name: 'name' }, { name: 'value' }, {
                name: 'linkChartOfAccount', convert: function (value, record) {
                    return record.get('name');
                }
            }, {
                name: 'linkChartOfAccountID', convert: function (value, record) {
                    return record.get('value');
                }
            }],
            xtype: 'ajax',
            autoLoad: true,
            proxy: {
                actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
                type: 'chachingProxy',
                url: abp.appPath + 'api/services/app/coaUnit/GetCoaList',
                reader: {
                    type: 'json',
                    rootProperty: 'result',
                    totalProperty: 'result.totalCount'
                }
            }
        },
        editionsForComboBox: {
            fields: [{ name: 'displayText' }, { name: 'value' }, {
                name: 'editionDisplayName', convert: function (value, record) {
                    return record.get('displayText');
                }
            }, {
                name: 'editionId', convert: function (value, record) {
                    return record.get('value');
                }
            }],
            xtype: 'ajax',
            autoLoad: true,
            proxy: {
                actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
                type: 'chachingProxy',
                url: abp.appPath + 'api/services/app/edition/GetEditionComboboxItems',
                reader: {
                    type: 'json',
                    rootProperty: 'result',
                    totalProperty: 'result.totalCount'
                }
            }
        },
        rolesForCheckBox: {

            fields: [{ name: 'displayName' }, { name: 'name' }, {
                name: 'displayName', convert: function (value, record) {
                    return record.get('displayName');
                }
            }, {
                name: 'name', convert: function (value, record) {
                    return record.get('name');
                }
            }],
            xtype: 'ajax',
            autoLoad: true,
            proxy: {
                actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
                type: 'chachingProxy',
                url: abp.appPath + 'api/services/app/role/GetRoles',
                reader: {
                    type: 'json',
                    rootProperty: 'result',
                    totalProperty: 'result.totalCount'
                }
            }
        }
    }

});
