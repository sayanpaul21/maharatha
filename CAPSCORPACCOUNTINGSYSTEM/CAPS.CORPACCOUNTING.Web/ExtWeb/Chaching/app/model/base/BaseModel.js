Ext.define('Chaching.model.base.BaseModel', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'Chaching.model'
    },
    config: {
        searchEntityName:''
    },
    fields: [
        //common fields in all entities
        { name: 'tenantId', type: 'int' },
        { name: 'organizationUnitId', type: 'int' },
        { name: 'isDeleted', type: 'boolean' },
        { name: 'deletionTime', type: 'date' },
        { name: 'deleterUserId', type: 'int' },
        { name: 'lastModificationTime', type: 'date', dateFormat: 'c' },
        { name: 'lastModifierUserId', type: 'int' },
        { name: 'creationTime', type: 'date',dateFormat:'c'},
        { name: 'creatorUserId', type: 'int' },

        //custom fields required for all entities
        { name: 'allowEdit', type: 'boolean', defaultValue: true },
        { name: 'allowDelete', type: 'boolean', defaultValue: true },
        { name: 'isRestricted', type: 'boolean', defaultValue: true },

        //local pass edit/delete action
        { name: 'passEdit', type: 'boolean', defaultValue: false },
        { name: 'passDelete', type: 'boolean', defaultValue: false }

    ]
});
