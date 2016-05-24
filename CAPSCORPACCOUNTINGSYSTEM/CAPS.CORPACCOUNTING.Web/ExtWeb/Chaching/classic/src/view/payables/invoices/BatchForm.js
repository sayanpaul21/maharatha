﻿
Ext.define('Chaching.view.payables.invoices.BatchForm', {
    extend: 'Chaching.view.common.form.ChachingFormPanel',
    alias: ['widget.payables.invoices.batch.create', 'widget.payables.invoices.batch.edit'],
    requires: [
        'Chaching.view.payables.invoices.BatchFormController'
    ],

    controller: 'payables-invoices-batchform',
    name: 'batch',
    openInPopupWindow: false,
    hideDefaultButtons: false,
    layout: 'column',
    autoScroll: true,
    border: false,
    showFormTitle: true,
    displayDefaultButtonsCenter: true,
    titleConfig: {
        title: abp.localization.localize("CreatingNewBatch").initCap()
    },
    //bodyStyle: { 'background-color': '#F3F5F9' },   
    items: [{
        xtype: 'hiddenfield',
        name: 'batchId',
        value: 0
    }, {
        columnWidth: .5,
        padding: '20 10 0 20',
        //bodyStyle: { 'background-color': '#F3F5F9' },
        defaults: {
            labelAlign: 'top',
            blankText: app.localize('MandatoryToolTipText')
        },
        items: [{
            xtype: 'textfield',
            name: 'description',
            itemId: 'batchName',
            allowBlank: false,
            fieldLabel: app.localize('BatchName').initCap(),
            width: '100%',
            ui: 'fieldLabelTop',
            emptyText: app.localize('MandatoryField')
        }, {
            xtype: 'textfield',
            name: 'batchOwner',
            itemId: 'batchOwner',
            readOnly: true,
            fieldLabel: app.localize('BatchOwner').initCap(),
            width: '100%',
            ui: 'fieldLabelTop',
            emptyText: app.localize('MandatoryField')
        }, {
            xtype: 'datefield',
            name: 'postingDate',
            itemId: 'postingDate',
            fieldLabel: app.localize('PostingDate').initCap(),
            width: '100%',
            ui: 'fieldLabelTop',
            emptyText: app.localize('MandatoryField')
        }, {
            xtype: 'textfield',
            name: 'controlTotal',
            itemId: 'controlTotal',
            fieldLabel: app.localize('ControlTotal').initCap(),
            width: '100%',
            ui: 'fieldLabelTop',
            emptyText: app.localize('MandatoryField')
        }]
    }, {
        columnWidth: .5,
        padding: '20 10 0 20',
        //bodyStyle: { 'background-color': '#F3F5F9' },
        defaults: {
            labelAlign: 'top',
            blankText: app.localize('MandatoryToolTipText')
        },
        items: [ {
            xtype: 'textfield',
            name: 'batchAmount',
            itemId: 'batchAmount',
            readOnly : true,
            fieldLabel: app.localize('BatchAmount').initCap(),
            width: '100%',
            ui: 'fieldLabelTop',
            emptyText: app.localize('MandatoryField')
        }, {
            xtype: 'combobox',
            name: 'typeOfBatchId',
            fieldLabel: app.localize('Module').initCap(),
            width: '100%',
            ui: 'fieldLabelTop',
            emptyText: app.localize('SelectModule'),
            displayField: 'typeOfBatch',
            valueField: 'typeOfBatchId',
            queryMode : 'local',
            store: Ext.create('Chaching.store.utilities.TypeOfBatchStore'),
        }, {
            xtype: 'checkbox',
            boxLabel: app.localize('RetainBatch'),
            name: 'isRetained',
            labelAlign: 'right',
            inputValue: false,
            checked: false,
            boxLabelCls: 'checkboxLabel'
        }, {
            xtype: 'checkbox',
            boxLabel: app.localize('CommunityBatch'),
            name: 'isUniversal',
            labelAlign: 'right',
            inputValue: false,
            checked: false,
            boxLabelCls: 'checkboxLabel'
        }, {
            xtype: 'checkbox',
            boxLabel: app.localize('FinalizedtoPost'),
            name: 'isBatchFinalized',
            labelAlign: 'right',
            inputValue: false,
            checked: false,
            boxLabelCls: 'checkboxLabel'
        }]
    }]
});
