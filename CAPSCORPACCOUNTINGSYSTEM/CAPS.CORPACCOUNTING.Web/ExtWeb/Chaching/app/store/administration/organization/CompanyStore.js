﻿/**
 * DataStore to perform CRUD operation on Company.
 */
Ext.define('Chaching.store.administration.organization.CompanyStore', {
    extend: 'Chaching.store.base.BaseStore',
    model: 'Chaching.model.administration.organization.CompanyModel',
    proxy: {
        type: 'chachingProxy',
        actionMethods: { create: 'POST', read: 'POST', update: 'POST', destroy: 'POST' },
        api: {
            create: abp.appPath + 'api/services/app/organizationUnit/CreateComapnyUnit',
            read: abp.appPath + 'api/services/app/organizationUnit/GetComapnySetUpUnits',
            update: abp.appPath + 'api/services/app/organizationUnit/UpdateComapnyUnit',
            destroy: abp.appPath + 'api/services/app/organizationUnit/DeleteOrganizationUnit'
        }
    },
    idPropertyField: 'id'//important to set for add/update of records
});