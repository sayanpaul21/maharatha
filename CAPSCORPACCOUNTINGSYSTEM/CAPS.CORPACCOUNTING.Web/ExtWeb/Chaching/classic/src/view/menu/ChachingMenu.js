
Ext.define('Chaching.view.menu.ChachingMenu',{
    extend: 'Ext.list.Tree',

    requires: [
        'Chaching.view.menu.ChachingMenuController',
        'Chaching.view.menu.ChachingMenuModel'
    ],

    controller: 'menu-chachingmenu',
    viewModel: {
        type: 'menu-chachingmenu'
    },

    expanderFirst:false,
    micro: false,
    ui: 'nav',
    reference: 'treelist',
    bind: '{navItems}',
    alias: 'widget.chachingmenu',
    layout: {
        type:'fit'
    }
});
