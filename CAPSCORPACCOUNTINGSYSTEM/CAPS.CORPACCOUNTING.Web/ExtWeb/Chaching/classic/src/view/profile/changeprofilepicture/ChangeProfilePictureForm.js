
Ext.define('Chaching.view.profile.changeprofilepicture.ChangeProfilePictureForm',{
    extend: 'Chaching.view.common.form.ChachingFormPanel',

    requires: [
        'Chaching.view.profile.changeprofilepicture.ChangeProfilePictureFormController'
    ],

    controller: 'profile-changeprofilepicture-changeprofilepictureform',
    modulePermissions: {
        //read: abp.auth.isGranted('Pages.Administration.Users'),
        create: true,//abp.auth.isGranted('Pages.Administration.Users.Create'),
        edit: true//abp.auth.isGranted('Pages.Administration.Users.Edit'),
        // destroy: abp.auth.isGranted('Pages.Administration.Users.Delete')
    },
    name: 'ChangeProfilePicture',
    openInPopupWindow: true,
    hideDefaultButtons: false,
    layout: 'vbox',
    dataobject:null,
    defaults: {
        bodyStyle: { 'background-color': 'trasparent' },
        labelAlign: 'top',
        blankText: app.localize('MandatoryToolTipText')
    },

    listeners:{
        'afterrender': 'disableSaveButton'
    },
    //  defaultFocus: 'textfield#tenancyName',

    items: [       
        {
            xtype: 'filefield',
            name: 'changeProfilePicture',            
            clearOnSubmit :false,
            anchor: '100%',
            width: '100%',
            listeners: {
                change: 'filechange'
            }
        },
         {
             xtype: 'label',             
             text: app.localize('ProfilePicture_Change_Info'),
             width: '100%'            
         }
        ]
});
