
Ext.define('Chaching.view.users.UsersView', {
    extend: 'Chaching.view.common.window.ChachingWindowPanel',
    alias: ['widget.users.createView', 'widget.users.editView'],
    requires: [
        //'Chaching.view.users.UsersViewController',
        'Chaching.view.users.UsersForm'
    ],

    //controller: 'users-usersview',
    height: 600,
    width: 600,
    layout: 'fit',
    title: app.localize("Users"),
    //defaultFocus: 'tenancyName',
    initComponent: function (config) {
       
        var me = this,
            controller = me.getController();
        var form = Ext.create('Chaching.view.users.UsersForm', {
            height: '100%',
            width: '100%',
            name: 'Administration.Users'
        });
        me.items = [form];

        me.callParent(arguments);
    }
});
