﻿Ext.define('Chaching.data.proxy.BaseProxy', {
    extend: 'Ext.data.proxy.Ajax',
    alias: 'proxy.chachingProxy',
    timeout: 6000000,
    limitParam: 'maxResultCount',
    startParam: 'skipCount',
    sortParam: 'sortList',
    filterParam: 'filters',
    pageParam: '',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    actionMethods: { create: 'POST', read: 'GET', update: 'POST', destroy: 'POST' },
    paramsAsJson: true,

    reader: {
        type: 'json',
        rootProperty: 'result.items',
        totalProperty: 'result.totalCount'
    },
    writer: {
        type: 'json'
    },
    encodeFilters: function(filters) {
        var filterArray = [];
        if (filters) {
            for (var i = 0; i < filters.length; i++) {
                var filterObject = {
                    Entity: filters[i].entity,
                    Property: filters[i].getProperty(),
                    SearchTerm: filters[i].searchTerm,
                    SearchTerm2: filters[i].searchTerm2,
                    Comparator: filters[i].comparator,
                    DataType: filters[i].dataType
                };
                filterArray.push(filterObject);
            }
            return filterArray;
        }
        return filters;
    },
    encodeSorters: function (sorters) {
        var me = this,
            model = me.getModel(),
            entityName = model.$config.values.searchEntityName;
        var sortersArray = [];
        if (sorters) {
            for (var i = 0; i < sorters.length; i++) {
                var sortObject = {
                    Entity: entityName,
                    Property: sorters[i].getProperty(),
                    Order: sorters[i].getDirection()
                };
                sortersArray.push(sortObject);
            }
            return sortersArray;
        }
        return sorters;
    },
    listeners:
    {
        exception: function(proxy, request, operation) {
            if (request.responseText != undefined) {
                // responseText was returned, decode it
                try {
                    var responseObj = Ext.decode(request.responseText, true);
                } catch (e) {
                    abp.message.warn('Unknown error: The server did not send any information about the error.', 'Error');
                    //Ext.Msg.alert('Error', 'Unknown error: The server did not send any information about the error.');
                }

            } else {
                abp.message.error('Unknown error: Unable to understand the response from the server', 'Error');
                // no responseText sent
                // Ext.Msg.alert('Error', 'Unknown error: Unable to understand the response from the server');
            }
        }
    }
});