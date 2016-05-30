﻿Ext.define('Chaching.store.utilities.autofill.AccountsStore', {
    extend: 'Chaching.store.base.BaseStore',
    pageSize:1000,
    fields: [{ name: 'name' }, { name: 'value' }, {
        name: 'account', convert: function (value, record) {
            return record.get('name');
        }
    }, {
        name: 'accountId', convert: function (value, record) {
            return record.get('value');
        }
    }, {
        name: 'creditAccount', convert: function (value, record) {
            return record.get('name');
        }
    }, {
        name: 'creditAccountId', convert: function (value, record) {
            return record.get('value');
        }
    }],
    proxy: {
        actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
        type: 'chachingProxy',
        extraParams: {
            jobId:null
        },
        url: abp.appPath + 'api/services/app/list/GeAccountsList',
        reader: {
            type: 'json',
            rootProperty: 'result'
        }
    }
});
