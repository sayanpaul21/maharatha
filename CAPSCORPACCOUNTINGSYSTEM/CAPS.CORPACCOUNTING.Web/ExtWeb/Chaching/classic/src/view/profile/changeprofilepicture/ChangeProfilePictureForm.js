
Ext.define('Chaching.view.profile.changeprofilepicture.ChangeProfilePictureForm',{
    extend: 'Chaching.view.common.form.ChachingFormPanel',

    requires: [
        'Chaching.view.profile.changeprofilepicture.ChangeProfilePictureFormController',
        'Chaching.view.profile.changeprofilepicture.ChangeProfilePictureFormModel'
    ],

    controller: 'profile-changeprofilepicture-changeprofilepictureform',
    viewModel: {
        type: 'profile-changeprofilepicture-changeprofilepictureform'
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
    //  defaultFocus: 'textfield#tenancyName',

    items: [       
        {
            xtype: 'filefield',
            name: 'changeprofilepicture',            
            clearOnSubmit :false,
            anchor: '100%',
            width: '100%',
            listeners: {
                change: 'filechange'
            }
          

        },
         {
             xtype: 'label',             
             text: app.localize('ProfilePicture_Change_Info').initCap(),
             width: '100%'            
         },
        ]
});