﻿Ext.define('Chaching.store.utilities.AccountTypeListStore', {
    extend: 'Chaching.store.base.BaseStore',
    fields: [{ name: 'name' }, { name: 'value' }, {
        name: 'typeOfBankAccount', convert: function (value, record) {
            return record.get('name');
        }
    }, {
        name: 'typeOfBankAccountId', convert: function (value, record) {
            return record.get('value');
        }
    }],
    proxy: {
        actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
        type: 'chachingProxy',
        url: abp.appPath + 'api/services/app/bankAccountUnit/GetBankAccountTypeList',
        reader: {
            type: 'json',
            rootProperty: 'result'
        }
    }
});