Ext.define('Chaching.view.header.ChachingHeaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.header-chachingheader',

    onToggleClick: function (btn) {
        var me = this,
            view = me.getView();
        var westPanel = view.up('viewport').down('panel[region=west]');
        if (westPanel) {
            var treeList = westPanel.down('treelist[itemId=navigationTreeList]');
            var micro = treeList.getMicro();
            treeList.setMicro(!micro);
            //westPanel.setWidth(micro ? 250 : 85);
            westPanel.setWidth(micro ? 250 : 60);
            var logo = view.down('image[itemId=companyLogoImage]');
            logo.setWidth(micro ? 110 : 0);
        }
    },
    onBeforeLocalizationRender: function (btn) {
        var currentCulture = abp.localization.currentCulture;
        if (currentCulture) {
            var locale = abp.localization.languages;
            for (var i = 0; i < locale.length; i++) {
                var item = locale[i];
                if (item.name === currentCulture.name) {
                    btn.text = currentCulture.displayName + ' &#xf107;';
                    btn.iconCls = 'famfamfam-flag ' + item.icon;
                    break;
                }
            }
        }
    },
    onLocalizationHover: function (btn, e, eOpts) {
        var me = this,
            view = me.getView();
        var contextMenu = btn.contextMenu;
        var position = btn.getPosition();

        //var notificationBtn = view.down('button[itemId=NotificationBtn]');
        //if (notificationBtn) {
        //    me.hideContextMenu(notificationBtn);
        //}
        //var accountsBtn = view.down('button[itemId=AccountBtn]');
        //if (accountsBtn) {
        //    me.hideContextMenu(accountsBtn);
        //}
        if (contextMenu) {
            contextMenu.showAt(position[0] - 50, position[1] + 30, true);
        } else {
            var items = [];
            var locale = abp.localization.languages;
            for (var i = 0; i < locale.length; i++) {
                var item = locale[i];
                var menuItem = {
                    text: item.displayName,
                    iconCls: 'famfamfam-flag '+item.icon,
                    name: item.name,
                    isDefault: item.isDefault
                };
                items.push(menuItem);
            }
            contextMenu = Ext.create({
                xtype: 'menu',
                ui: 'countryMenu',
                width: 150,
                items: items,
                ownerElement: btn,
                listeners: {
                    click: me.onLocalizationItemClick
                }
            });
            btn.contextMenu = contextMenu;
            contextMenu.showAt(position[0] - 50, position[1] + 30, true);
        }
    },
    hideContextMenu: function (overedBtn) {
        if (overedBtn && overedBtn.contextMenu) {
            overedBtn.contextMenu.hide();
        }
    },
    onLocalizationItemClick: function (menu, item, e, eOpts) {
        var ownerElement = menu.ownerElement;
        if (ownerElement) {
            ownerElement.setText(item.text + ' &#xf107;');
            ownerElement.setIconCls(item.iconCls);
            location.href = abp.appPath + 'AbpLocalization/ChangeCulture?cultureName=' + item.name + '&returnUrl=' + window.location.href;
        }
    },
    onNotificationReady: function (btn) {
        ///TODO: Populate with unread count of notification
        btn.btnIconEl.dom.textContent = 1;
    },
    onNotificationHover: function (btn) {
        var me = this,
            view = me.getView();
        var contextMenu = btn.contextMenu;
        var position = btn.getPosition();
        //var localizationBtn = view.down('button[itemId=LocalizationBtn]');
        //if (localizationBtn) {
        //    me.hideContextMenu(localizationBtn);
        //}
        //var accountsBtn = view.down('button[itemId=AccountBtn]');
        //if (accountsBtn) {
        //    me.hideContextMenu(accountsBtn);
        //}
        if (contextMenu) {
            contextMenu.showAt(position[0] - 250, position[1] + 30, true);
        } else {
            ///TODO: Store To be populated with real time data as service does not return data.
            var dataview = new Ext.view.View({
                ui: 'balck',
                store: {
                    fields: ['name'],
                    data: [
                        { name: 'Notification one' },
                        { name: 'This is long notification message wraps to second line' }
                    ]
                },
                tpl: [
                    '<div class="menuHeaderTextRight">Settings</div>',
                    '<tpl for=".">',
                    '<ul>',
                    '<li>{name}</li>',
                    '</ul>',
                    '</tpl>', {
                        userRenderer: function (user) {
                            //.. return a name instead of id
                            return user;
                        }
                    }, {
                        timeRenderer: function (timeStamp) {
                            //.. return time in some format
                            return timeStamp;
                        }
                    }
                ],
                // Match the li, since each one maps to a record
                itemSelector: 'li'
            });
            contextMenu = Ext.create({
                xtype: 'menu',
                ui: 'balck',
                width: 300,
                items: [dataview],
                ownerElement: btn
            });
            btn.contextMenu = contextMenu;
            btn.menu = contextMenu;
            contextMenu.showAt(position[0] - 250, position[1] + 30, true);
        }
    },
    onAccountsReady: function (btn) {
        var me = this,
            view = me.getView(),
            userName = '';
        if (ChachingGlobals.loggedInUserInfo) {
            var loggedInUserInfo = ChachingGlobals.loggedInUserInfo;
            userName = loggedInUserInfo.userName;
            if (loggedInUserInfo.gotoMyAccount) {
                btn.gotoMyAccount = true;
                btn.setTooltip(abp.localization.localize("YouCanBackToYourAccount"));
            }
            var profilePicImage = view.down('image[itemId=AccountPic]');
            var ticks = new Date().getTime();
            var profilePic = abp.appPath + 'Profile/GetProfilePicture?t=' + ticks;
            if (loggedInUserInfo.profilePictureId) {
                profilePicImage.show();
                profilePicImage.setSrc(profilePic);
            } else {
                profilePicImage.show();
                profilePicImage.setSrc(profilePic);
            }
            btn.setText(userName);
        }
        //set company logo
        me.getCompanyLogo();
    },
    getCompanyLogo : function() {
        Ext.Ajax.request({
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            url: abp.appPath + 'api/services/app/tenant/GetCompanyLogo',
            success: function (response, opts) {
                var res = Ext.decode(response.responseText);
                if (res && res.success) {
                    var headerView = Ext.ComponentQuery.query('chachingheader')[0];
                    if (headerView && res.result.companyLogo) {
                        var headerCompanyLogo = headerView.down('image[itemId=companyLogoImage]');
                        var src = 'data:image/jpeg;base64,' + res.result.companyLogo;
                        headerCompanyLogo.setSrc(src);
                    }
                } else {
                    abp.message.error(res.error.message);
                }
            },
            failure: function (response, opts) {
                var res = Ext.decode(response.responseText);
                Ext.toast(res.exceptionMessage);
                console.log(response);
            }
        });
    },
    backToMyAccountClick: function (menu, item, e, eOpts) {
        Ext.Ajax.request({
            url: abp.appPath + 'Account/BackToImpersonatorUser',
            success: function (response) {
                var res = Ext.decode(response.responseText);
                if (res.success) {
                    window.location.href = res.targetUrl;
                } else {
                    abp.message.error(res.error.message, 'Error');
                }
            },
            failure: function (response) {
                var res = Ext.decode(response.responseText);
                Ext.toast(res.statusText);
                console.log(response);
            }
        });
    },
    manageActionClicked: function (menu, item, e, eOpts) {
        var manageAction = Ext.create('Chaching.view.profile.linkedaccounts.LinkedAccountsView');
        var grid = manageAction.down('grid'),
        gridStore = grid.getStore();
        gridStore.load();
        manageAction.show();
    },
    changePasswordClick: function (menu, item, e, eOpts) {
        var changepasswordAction = Ext.create('Chaching.view.profile.changepassword.ChangePasswordView');       
        changepasswordAction.show();
    },
    mySettings: function (menu, item, e, eOpts) {
        var headerView = Ext.ComponentQuery.query('chachingheader')[0];
        var me = headerView != undefined ? headerView.getController() : null;
        var mySettingView = Ext.create('Chaching.view.profile.settings.SettingsView');
        Ext.Ajax.request({
            url: abp.appPath + 'api/services/app/profile/GetCurrentUserProfileForEdit',
            jsonData: {},
            success: function (response, opts) {
                var res = Ext.decode(response.responseText);
                if (res.success && me) {
                    me.loadTimeZones(mySettingView, res.result);
                }
            },
            failure: function (response, opts) {
                var res = Ext.decode(response.responseText);
                Ext.toast(res.exceptionMessage);
                console.log(response);
            }
        });

    },

    loadTimeZones: function (mySettingView, settingDetail) {
        var mySettingForm = mySettingView.down('form'),
         timezoneCombo = mySettingForm.down('combobox[itemId=timezone]'),
         timezoneStore = timezoneCombo.getStore();
        timezoneStore.getProxy().setExtraParams({ defaultTimezoneScope: ChachingGlobals.settingsScope.user });
        timezoneStore.load(function (records, operation, success) {
            if (success && mySettingForm && mySettingView && settingDetail) {
                // show/hide user my settings
                var mySettingFormController = mySettingForm.getController();
                mySettingFormController.initialTimezone = settingDetail.timezone;
                var canChangeUserName = settingDetail.userName != app.consts.userManagement.defaultAdminUserName;
                mySettingFormController.lookupReference('userName').setReadOnly(!canChangeUserName);
                mySettingFormController.lookupReference('infoLabel').setHidden(canChangeUserName);
                var showTimezoneSelection = abp.clock.provider.supportsMultipleTimezone;
                if (showTimezoneSelection) {
                    mySettingFormController.lookupReference('timezone').setHidden(false);
                } else {
                    mySettingFormController.lookupReference('timezone').setHidden(true);
                }
                //End
                //load user setting details
                mySettingForm.getForm().setValues(settingDetail);
                mySettingView.show();
            } else {
                abp.message.error(app.localize('Failed'));
            }
        });
    },

    changeProfilePicture: function (menu, item, e, eOpts) {
        var changeProfilePicture = Ext.create('Chaching.view.profile.changeprofilepicture.ChangeProfilePictureView');
        changeProfilePicture.show();
    },
    onAccountsHover: function (btn) {
        var me = this,
           view = me.getView(),
           btn = view.down('#AccountBtn');
        var contextMenu = btn.contextMenu;
        var position = btn.getPosition();

        if (contextMenu) {
            contextMenu.showAt(position[0] - 50, position[1] + btn.gotoMyAccount ? 60 : 30, true);
        } else {
            me.getRecentlyUsedLinkedUsers(btn, contextMenu, position);
        }
    },
    getRecentlyUsedLinkedUsers: function (btn, contextMenu, position) {
        var headerView = Ext.ComponentQuery.query('chachingheader')[0];
        var me = headerView != undefined ? headerView.getController() : null;
        if (ChachingGlobals.userLinkedAccounts) {
            me.loadLinkedUsersInMenu(me, btn, contextMenu, position,ChachingGlobals.userLinkedAccounts);
        }
    },

    loadLinkedUsersInMenu: function (headerController, btn, contextMenu, position, linkedUsers) {
        var me = headerController;
        var submenuItems = [];
        Ext.each(linkedUsers,
            function(linkedUser) {
                var userName = me.getShownLinkedUserName(linkedUser);
                submenuItems.push({
                    text: userName,
                    name: userName,
                    isLinkedItem:true,
                    listeners: {
                        click: function() {
                            me.switchToUser(linkedUser);
                        }
                    }
                });
            });

        if (submenuItems.length > 0) {
            submenuItems.push('-');
        }
        submenuItems.push({
            text: abp.localization.localize("ManageAccounts"),
            iconCls: 'icon-settings',
            name: 'ManageAccount',
            listeners: {
                click: me.manageActionClicked
            }
        });
        var menuItems = [
               {
                   text: abp.localization.localize("BackToMyAccount"),
                   hidden: !btn.gotoMyAccount,
                   name: 'BackToAccount',
                   iconCls: 'icon-action-undo',
                   listeners: {
                       click: me.backToMyAccountClick
                   }
               },
               {
                   text: abp.localization.localize("LinkedAccounts"),
                   iconCls: 'icon-link',
                   listeners: {
                       focusenter: function(menu, item, e, eOpts) {
                           me.verifyLinkedAccounts(me, menu, item, e);
                       }
                   },
                   menu: {
                       ui: 'accounts',
                       width: 170,
                       items: submenuItems
                   }
               }, {
                   text: abp.localization.localize("LoginAttempts"),
                   iconCls: 'icon-shield',
                   name: 'LoginAttempts',
                   leaf: true,
                   listeners: {
                       click: me.loginAttemptsClicked
                   }
               }, {
                   text: abp.localization.localize("ChangePassword"),
                   iconCls: 'icon-key',
                   name: 'ChangePassword',
                   listeners: {
                       click: me.changePasswordClick
                   }
               }, {
                   text: abp.localization.localize("ChangeProfilePicture"),
                   iconCls: 'icon-user',
                   name: 'ChangeProfilePicture',
                   listeners: {
                       click: me.changeProfilePicture
                   }
               }, {
                   text: abp.localization.localize("MySettings"),
                   iconCls: 'icon-settings',
                   name: 'MySettings',
                   listeners: {
                       click: me.mySettings
                   }
               }, '-',
               {
                   text: abp.localization.localize("Logout"),
                   iconCls: 'icon-logout',
                   name: 'Logout',
                   listeners: {
                       click: me.logoutClick
                   }
               }
        ];
        if (btn.gotoMyAccount) {
            menuItems.splice(1, 0, "-");
        }
        contextMenu = Ext.create({
            xtype: 'menu',
            ui: 'accounts',
            width: 200,
            items: menuItems,
            ownerElement: btn
        });
        btn.contextMenu = contextMenu;
        contextMenu.showAt(position[0] - 50, position[1] + btn.gotoMyAccount ? 60 : 30, true);
        
    },
    verifyLinkedAccounts: function(me, menu, item, e) {
        //show only active linked accounts
        if (me && menu) {
            var existingItems = menu.getMenu().items.items;
            if (existingItems && existingItems.length > 2) {
                for (var i = 0; i < existingItems.length; i++) {
                    var itemExist = existingItems[i];
                    if (itemExist.isLinkedItem) {
                        var hidden = me.checkSateOfItem(me, itemExist);
                        if (hidden) itemExist.hide();
                        else if (!hidden && itemExist.hidden) itemExist.show();
                    }
                }
            } else if (existingItems) {
                me.crossVerifyLinkedAccounts(me, menu, existingItems);
            }
        }
    },
    crossVerifyLinkedAccounts:function(me, menu, existingItems) {
        var linkedAccounts = ChachingGlobals.userLinkedAccounts,
            length = linkedAccounts.length;
        if (length>0) {
            for (var i = 0; i < length; i++) {
                var linkAccount = linkedAccounts[i],
                    name = me.getShownLinkedUserName(linkAccount),
                    exists = me.checkExistance(name, existingItems);
                if (!exists) {
                    if (i === 0) {
                        var seperator = Ext.create('Ext.menu.Separator',
                        {
                            plain: true
                        });
                        menu.getMenu().insert(0, seperator);
                    }
                    var newItem = Ext.create('Ext.menu.Item',
                    {
                        text: name,
                        name: name,
                        isLinkedItem: true,
                        listeners: {
                            click: function () {
                                me.switchToUser(linkAccount);
                            }
                        }
                    });
                    menu.getMenu().insert(0, newItem);
                }
            }
        }
    },
    checkExistance:function(name, existingItems) {
        var existingLength = existingItems.length,
            exists = false;
        for (var j = 0; j < existingLength; j++) {
            var item = existingItems[j];
            if (item.name===name) {
                exists = true;
                item.show(true);
                break;
            }
        }
        return exists;
    },
    checkSateOfItem: function (me,item) {
        var hidden = true,
            linkedAccounts = ChachingGlobals.userLinkedAccounts,
            length = linkedAccounts.length;
        for (var i = 0; i < length; i++) {
            var linked = linkedAccounts[i],
                name = me.getShownLinkedUserName(linked);
            if (item.name===name) {
                hidden = false;
                break;
            }
        }
        return hidden;
    },
    switchToUser : function(linkedUser) {
        var model = new Object();
        model.TargetUserId = linkedUser.id;
        model.TargetTenantId = linkedUser.tenantId == 0 ? null : linkedUser.tenantId;
        Ext.Ajax.request({
            url: abp.appPath + 'Account/SwitchToLinkedAccount',
            jsonData: Ext.encode(model),
            success: function (response) {                  
                var res = Ext.decode(response.responseText);
                if (res.success) {
                    document.location = res.targetUrl;
                }                    
            },
            failure: function (response, opts) {
                var res = Ext.decode(response.responseText);
                abp.message.error(res.error.message);
                console.log(response);
            }

        });
    },
    getShownLinkedUserName : function (linkedUser) {
        if (!abp.multiTenancy.isEnabled) {
            return linkedUser.userName;
        } else {
            if (linkedUser.tenancyName) {
                return linkedUser.tenancyName + '\\' + linkedUser.username;
            } else {
                return '.\\' + linkedUser.username;
            }
        }
    },

    logoutClick: function (menu, item, e, eOpts) {
        Ext.Ajax.request({
            url: abp.appPath + 'Account/Logout',
            success: function (response) {
                document.location.href = abp.appPath + "Account/Login";
            },
            failure: function (response) {
                document.location.href = abp.appPath + "Account/Login";
            }
        });
    },
    loginAttemptsClicked: function (menu, item, e, eOpts) {
        var loginAttemptView = Ext.create('Chaching.view.profile.loginAttempts.LoginAttemptView');
        var listStore = loginAttemptView.down('dataview').getStore();
        var ticks = new Date().valueOf();
        listStore.load(function () {
            listStore.each(function (record) {
                    record.set('profileImageUrl', (record.get('result') === 'Success' ?
                                                (abp.appPath + 'Profile/GetProfilePicture?v=' + ticks) : ChachingGlobals.defaultProfilePictureImage));
                    record.commit();
            });

            if (listStore.getCount() == 0) {
                loginAttemptView.setHeight(300);
                loginAttemptView.setWidth(400);
            }
        });
        loginAttemptView.show();
    }

});
