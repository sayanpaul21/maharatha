﻿Ext.define('Chaching.model.coa.ChartOfAccountModel', {
    extend: 'Chaching.model.base.BaseModel',
    fields: [
            { name: 'coaId', type: 'int', isPrimaryKey: true },
            { name: 'caption', type: 'string' },
            { name: 'description', type: 'string' },
            { name: 'isApproved', type: 'boolean' },
            { name: 'isPrivate', type: 'boolean' },
            { name: 'isCorporate', type: 'boolean' },
            { name: 'isNumeric', type: 'boolean' },
            { name: 'standardGroupTotalId', type: 'int' },
            { name: 'linkChartOfAccountID', type: 'int' },
            { name: 'linkChartOfAccountName', type: 'string'},
            { name: 'standardGroupTotal', type: 'string' }
    ]
});
