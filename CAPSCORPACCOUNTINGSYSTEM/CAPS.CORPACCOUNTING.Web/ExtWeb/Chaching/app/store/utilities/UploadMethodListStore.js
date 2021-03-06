﻿Ext.define('Chaching.store.utilities.UploadMethodListStore', {
    extend: 'Chaching.store.base.BaseStore',
    fields: [{ name: 'name' }, { name: 'value' }, {
        name: 'uploadFileName', convert: function (value, record) {
            return record.get('name');
        }
    }, {
        name: 'typeOfUploadFileId', convert: function (value, record) {
            return record.get('value');
        }
    }],
    proxy: {
        actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
        type: 'chachingProxy',
        url: abp.appPath + 'api/services/app/bankAccountUnit/GetUploadMethodList',
        reader: {
            type: 'json',
            rootProperty: 'result'
        }
    }
});
