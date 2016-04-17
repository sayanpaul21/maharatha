
Ext.define('Chaching.view.manageView.ManageViewView',{
    extend: 'Chaching.view.common.window.ChachingWindowPanel',
    alias: ['widget.manageView.createView', 'widget.manageView.editView'],
    requires: [
        'Chaching.view.manageView.ManageViewViewController',
        'Chaching.view.manageView.ManageViewList'
    ],

    controller: 'manageview-manageviewview',
    height: 500,
    width: 750,
    layout: 'fit',
    title: app.localize("ManageUsersViewSetting"),
    iconCls: 'fa fa-gears',
    initComponent: function (config) {
        var me = this,
            controller = me.getController();
        var form = Ext.create('Chaching.view.manageView.ManageViewList', {
            height: '100%',
            width: '100%',
            name: 'Tenants'
        });
        var gridStore = form.getStore();
        gridStore.getProxy().setExtraParam('userId', Chaching.utilities.ChachingGlobals.loggedInUserInfo.userId);
        gridStore.getProxy().setExtraParam('gridId', me.parentGrid.gridId);
        form.getStore().load({
            callback: function(records, operation, success) {
                var activeUserViewId = me.parentGrid.activeUserViewId;
                var activeRecord = this.findRecord('userViewId', activeUserViewId);
                if (activeRecord) {
                    activeRecord.set('isActive', true);
                    activeRecord.commit();
                }
            }
        });
        me.items = [form];

        me.callParent(arguments);
    }
});
