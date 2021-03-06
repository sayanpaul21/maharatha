﻿Ext.define('Chaching.store.utilities.CheckStockListStore', {
    extend: 'Chaching.store.base.BaseStore',
    fields: [{ name: 'name' }, { name: 'value' }, {
        name: 'typeOfCheckStock', convert: function (value, record) {
            return record.get('name');
        }
    }, {
        name: 'typeOfCheckStockId', convert: function (value, record) {
            return record.get('value');
        }
    }],
    proxy: {
        actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
        type: 'chachingProxy',
        url: abp.appPath + 'api/services/app/bankAccountUnit/GetCheckStockList',
        reader: {
            type: 'json',
            rootProperty: 'result'
        }
    }
});
