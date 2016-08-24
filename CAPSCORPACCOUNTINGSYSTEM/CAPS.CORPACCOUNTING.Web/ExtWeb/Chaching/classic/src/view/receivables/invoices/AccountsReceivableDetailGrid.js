﻿/**
 * Child grid in Accounts Receivable Invoices entry form.
 */
Ext.define('Chaching.view.receivables.invoices.AccountsReceivableDetailGrid', {
    extend: 'Chaching.view.common.grid.ChachingTransactionDetailGrid',
    xtype: 'receivables.invoices.transactionDetails',
    requires: [
        'Chaching.view.receivables.invoices.AccountsReceivableDetailGridController'
    ],
    controller: 'receivables-invoices-accountsreceivabledetailgrid',
    modulePermissions: {
        read: abp.auth.isGranted('Pages.Receivables.Invoices'),
        create: abp.auth.isGranted('Pages.Receivables.Invoices.Entry.Create'),
        edit: abp.auth.isGranted('Pages.Receivables.Invoices.Entry.Edit'),
        destroy: abp.auth.isGranted('Pages.Receivables.Invoices.Entry.Delete')
    },
    store: 'receivables.invoices.AccountsReceivableDetailsStore',
    moduleColumns: [
    {
        xtype: 'gridcolumn',
        text: app.localize('PO#'),
        dataIndex: 'referenceNumber',
        name: 'referenceNumber'
    }],
    columnOrder: ['amount', 'jobNumber', 'accountNumber', 'subAccountNumber1', 'typeOf1099T4', 'itemMemo', 'taxRebateNumber', 'referenceNumber', 'isAsset']
});