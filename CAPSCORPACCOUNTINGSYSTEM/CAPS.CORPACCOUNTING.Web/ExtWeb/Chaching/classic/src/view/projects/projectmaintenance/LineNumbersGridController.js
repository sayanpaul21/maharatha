Ext.define('Chaching.view.projects.projectmaintenance.LineNumbersGridController', {
    extend: 'Chaching.view.common.grid.ChachingGridPanelController',
    alias: 'controller.projects-projectmaintenance-linenumbersgrid',
    doAfterCreateAction: function (createMode, formView, isEdit) {      
        var viewModel = formView.getViewModel();
        var form = formView.getForm();
        form.findField("chartOfAccountId").setValue(formView.parentGrid.coaId);

        var typeOfCurrency = viewModel.getStore('typeOfCurrencyList');
        typeOfCurrency.load();
        var typeOfAccount = viewModel.getStore('typeOfAccountList');
        typeOfAccount.load();
        var typeofConsolidation = viewModel.getStore('typeofConsolidationList');
        typeofConsolidation.load();
        var rollupAccountList = form.findField('rollupAccountId').getStore();
        var coaId = form.findField('chartOfAccountId').value;
        rollupAccountList.getProxy().setExtraParam('Id', coaId);
        rollupAccountList.load();

        // load rollupDivisions
        var rollupDivisionCombo = form.findField('rollupJobId');
        var rollupDivisionStore = rollupDivisionCombo.getStore();
        rollupDivisionStore.load();

        //var rollupDivisionList = viewModel.getStore('rollupDivisionList');
        //rollupDivisionList.load();

        if (isEdit) {
            //var typeOfCurrency = viewModel.getStore('typeOfCurrencyList');
            //typeOfCurrency.load();
            //var typeOfAccount = viewModel.getStore('typeOfAccountList');
            //typeOfAccount.load();
            //var typeofConsolidation = viewModel.getStore('typeofConsolidationList');
            //typeofConsolidation.load();
            //var rollupAccountList = form.findField('rollupAccountId').getStore();
            //var coaId = form.findField('chartOfAccountId').value;
            //rollupAccountList.getProxy().setExtraParam('Id', coaId);
            //rollupAccountList.load();
            //var rollupDivisionList = viewModel.getStore('rollupDivisionList');
            //rollupDivisionList.load();
        }
    },
    doBeforeDataImportSaveOperation: function (data, parentViewObj) {
        var coaId = parentViewObj.coaId;
        for (var i = 0; i < data.length; i++) {
            data[i].chartOfAccountId = coaId;
        }
        return data;
    }

});
