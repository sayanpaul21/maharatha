Ext.define('Chaching.view.financials.accounts.ChartOfAccountsGridController', {
    extend: 'Chaching.view.common.grid.ChachingGridPanelController',
    alias: 'controller.financials-accounts-chartofaccountsgrid',
    onChartOfAccountClicked: function (tableView, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var me = this,
            view = me.getView(),
            tabPanel = view.up('tabpanel'),
            accountsGrid = undefined;

        if (e && e.target && tabPanel) {
            var horizontalTabPanel = tabPanel.up('tabpanel');
            var target = e.target,
                nodeName = target.nodeName;
            if (nodeName === "DIV" && target.attributes.isHyperLink) {
                nodeName = "A";
            }
            if (nodeName === "A" && horizontalTabPanel) {
                accountsGrid = horizontalTabPanel.child('component[routId=financials.accounts.accounts]');
                if (!accountsGrid) {
                    accountsGrid = Ext.create({
                        xtype: 'financials.accounts.accounts',
                        hideMode: 'offsets',
                        closable: true,
                        title: abp.localization.localize("FinancialAccounts"),
                        routId: 'financials.accounts.accounts',
                        coaId: record.get('coaId'),
                        linkChartOfAccountID: record.get('linkChartOfAccountID'),
                        iconCls: 'fa fa-book'
                    });
                }
                accountsGrid.coaId = record.get('coaId');
                var chartType = record.get('typeOfChartId');
                if (chartType === 1 || chartType === 4) {
                    accountsGrid.allowAccountMapping = true;
                } else accountsGrid.allowAccountMapping = false;
                var toolBar = accountsGrid.child("component[dock=top]");
                
                if (toolBar) {
                    var displayTitle = toolBar.child('component[ui=headerTitle]');
                    if (displayTitle)
                        displayTitle.setValue(record.get('caption').initCap());
                }
                var gridStore = accountsGrid.getStore(),
                    storeProxy = gridStore.getProxy();
                storeProxy.setExtraParam('coaId', record.get('coaId'));
                gridStore.load();
                var tabLayout = horizontalTabPanel.getLayout();
                if (tabLayout) {
                    tabLayout.setActiveItem(accountsGrid);
                }
            }
        }
    },
    doAfterCreateAction: function (ccreateMode, formView, isEdit, record) {
        var viewModel = formView.getViewModel();
        var standardGroupTotal = viewModel.getStore('StandardGroupTotalList');
        standardGroupTotal.load();
        var linkChartOfAccount = viewModel.getStore('linkChartOfAccountList');
        if (isEdit && record) {
            linkChartOfAccount.getProxy().setExtraParam('coaId', record.get('coaId'));
        }
        linkChartOfAccount.getProxy().setExtraParam('isProjectCoa', false);
        linkChartOfAccount.load();

        var typeOfChart = viewModel.getStore('TypeOfChartList');
        typeOfChart.load(function(records) {
            Ext.each(records,
                function(rec) {
                    if (rec.get('value') === "5" || rec.get('value') === "3") {
                        typeOfChart.remove(rec);
                    }
                });
        });
    }

});
