﻿Ext.define('Chaching.utilities.ChachingRenderers', {
    alternateClassName: ['ChachingRenderers'],
    singleton: true,
    dateSearchFieldRenderer: function (value) {
        return Ext.Date.format(value, 'm/d/Y');
    },
    rendererDateHyperLink: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (val) {
            var a = '<a style="padding-left:2px;text-decoration:underline !important;cursor:pointer;">' + Ext.Date.format(val, 'm/d/Y') + '</a>';
            return a;
        }
        return val;
    },
    statusRenderer: function (val) {
        if (val) return 'YES';
        else return 'NO';
    },
    viewUsersRole: function (value, cell) {
        var view = this.up('form'),
            gridController = view.getController(),
            id = Ext.id(),
            widgetRec = cell.record,
            widgetCol = cell.column;
        Ext.Function.defer(function () {
            var button = Ext.create('Ext.button.Button', {
                ui: 'actionMenuButton',
                pressed: false,
                scale: 'small',
                width: '100%',
                height: 25,
                text: app.localize('View'),
                widgetRec: widgetRec,
                widgetCol: widgetCol,
                currentView: view,
                listeners: {
                    click: (widgetCol.itemId === 'rolesViewButtonId') ? gridController.reloadPermissionsTree : gridController.reloadPermissionsTreeLinkCompany
                }
            });
            if (Ext.get(id)) {
                button.render(Ext.get(id));
            }
        }, 1);
        return '<div id="' + id + '"></div>';

    },
    unlinkedaccount: function (value, cell) {
        var gridController = this.getController(),
            view = gridController.getView();
        var id = Ext.id();
        var widgetRec = cell.record;
        var widgetCol = cell.column;
        Ext.Function.defer(function () {
            var button = Ext.create('Ext.button.Button', {
                scale: 'small',
                width: '100%',
                height: 22,
                iconCls: 'fa fa-trash',
                iconAlign: 'left',
                widgetRec: widgetRec,
                widgetCol: widgetCol,
                gridControl: view,
                listeners: {
                    click: gridController.unlinkUser
                }
            });
            if (Ext.get(id)) {
                button.render(Ext.get(id));
            }
        }, 1);
        return '<div id="' + id + '"></div>';

    },
    loginaccount: function (value, cell) {
        var gridController = this.getController(),
           view = gridController.getView();
        var id = Ext.id();
        var widgetRec = cell.record;
        var widgetCol = cell.column;
        Ext.Function.defer(function () {
            var button = Ext.create('Ext.button.Button', {
                ui: 'actionMenuButton',
                scale: 'small',
                height : 22,
                width: '100%',
                text: app.localize('Login'),
                iconCls: 'fa fa-sign-in',
                iconAlign: 'left',
                widgetRec: widgetRec,
                widgetCol: widgetCol,
                listeners: {
                    click: gridController.login
                }
            });
            if (Ext.get(id)) {
                button.render(Ext.get(id));
            }
        }, 1);
        return '<div id="' + id + '"></div>';

    },
    renderInMiliSeconds: function (value, cell) {
        if (value) {
            return value + " ms";
        }
        return '0 ms';
    },
    auditLogView: function (value, cell) {
        var gridController = this.getController(),
            view = gridController.getView();
        var id = Ext.id();
        var widgetRec = cell.record;
        var widgetCol = cell.column;
        Ext.Function.defer(function () {
            var button = Ext.create('Ext.button.Button', {
                scale: 'small',
                width: 20,
                height : 20,
                padding: '3px 7px 3px 7px;',
                iconCls: 'fa fa-search',
                iconAlign: 'left',
                widgetRec: widgetRec,
                widgetCol: widgetCol,
                gridControl: view
            });
            if (Ext.get(id)) {
                button.render(Ext.get(id));
            }
        }, 1);
        return '<div id="' + id + '"></div>';

    },
    auditLogExceptionIcon: function (val, meta, record, rowIndex) {
        if (Ext.isEmpty(Ext.util.Format.trim(record.get('exception'))))
            return '<i class="fa fa-check-circle font-green"  style="color:#32c5d2" ></i>';
        else
            return '<i class="fa fa-warning font-yellow-gold"  style="color:#32c5d2"></i>';
    },// hh:mm:ss
    renderDateOnly: function (value) {
        if (value) {
            return moment(value).format(Chaching.utilities.ChachingGlobals.defaultDateFormat);
        }
        return '';
    },
    renderTenant: function (value, metaData, record, rowIndex, colIndex) {
         if (record.get('connectionString') != undefined && record.get('connectionString') != null && record.get('connectionString') != "") {
             return '<div class= "fa fa-database" title ="'+ app.localize('HasOwnDatabase')+'"></div>' + " " + value;
        } 
        return value;
    },
    renderRole: function (value, metaData, record, rowIndex, colIndex) {
        return value + (record.get('isStatic') == true ?
                '<span class="staticRoleLabel" title ="' + app.localize('StaticRole_Tooltip') + '">' + app.localize('Static') + '</span>' : '')
                + (record.get('isDefault') == true ? '<span class="defaultRoleLabel" title ="' + app.localize('DefaultRole_Description') + '">' + app.localize('Default') + '</span>' : '');
    },
    renderUserName: function (value, metaData, record, rowIndex, colIndex) {
        return (record.get('profilePictureId') != null ? 
            '<span> <img alt="" width="22" height="22" class="img-rounded img-profile-picture-in-grid" src="'+ abp.appPath + 'Profile/GetProfilePictureById?id='+record.get('profilePictureId')+'" /></span>' : 
            '<span> <img alt="" src="' + abp.appPath + 'Common/Images/default-profile-picture.png" width="22" height="22" class="img-rounded" /></span>'
           
            ) + value;
    },
    renderDateTime: function (value) {
        if (value) {
            return moment(value).format(Chaching.utilities.ChachingGlobals.defaultDateTimeFormat);
        }
        return '';
    },
    renderDateTimeSeconds: function (value) {
        if (value) {
            return moment(value).format(Chaching.utilities.ChachingGlobals.defaultDateTimeSecFormat);
        }
        return '';
    },
    renderDateTimeSecondsWithoutAmPm: function (value) {
        if (value) {
            return moment(value).format(Chaching.utilities.ChachingGlobals.defaultDateTimeSecFormatWithoutAmPm);
        }
        return '';
    },
    renderDateTimeWithFromNow: function (value) {
        if (value) {
            return moment(value).fromNow() + ' (' + moment(value).format(Chaching.utilities.ChachingGlobals.defaultDateTimeSecFormat) + ')';
        }
        return '';
    },
    rightWrongMarkRenderer: function (val, meta, record, rowIndex) {
        if (val)
            return '<i class="fa fa-check font-green"  style="color:#32c5d2" ></i>';
        else
            return '<i class="fa fa-close font-yellow-gold"  style="color:#E00353"></i>';
    },
    splitColumnMarkRenderer: function (val, meta, record, rowIndex) {
        if (val || record.get('isAccountingItemSplit'))
            return '<i class="fa fa-check font-green"  style="color:#32c5d2;" ></i>';
        else
            return '<i class="fa fa-unlink"  style="color:#2403a7;font-weight:600;"></i>';
    },
    languagesTextsEditIcon: function (val, meta, record, rowIndex) {
        return '<i class="fa fa-edit" ></i>';
    },
    languageIconRenderer: function (val, meta, record, rowIndex) {
        return '<i class="famfamfam-flag ' + record.get('icon') + '" style="display: inline-block;margin-right: 10px; !important" ></i><span>' + val + '</span>';
    },
    rendererHyperLink: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (val) {
            var a = '<a style="padding-left:2px;text-decoration:underline !important;cursor:pointer;">' + val + '</a>';
            return a;
            ///var div = '<div class="fa fa-th" isHyperLink="true" style="overflow:hidden; text-overflow:ellipsis; color:white; cursor:pointer; width:98%; color:#3598DC !important;" title="' + val + '">' + a + '</div>';
            // return div;
        }
        return val;
    },
    renderFullAddress: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('line1') + ' ' + address.get('line2') + ' ' + address.get('line3');
            }
        }
        return val;
    },
    renderContactNumber: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('contactNumber');
            }
        }
        return val;
    },
    renderEmail: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('email');
            }
        }
        return val;
    },
    renderFirstAddress: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('line1');
            }
        }
        return val;
    },
    renderSecondAddress: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('line2');
            }
        }
        return val;
    },
    renderThirdAddress: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('line3');
            }
        }
        return val;
    },
    renderFourthAddress: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('line4');
            }
        }
        return val;
    },
    renderPhone1: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('phone1');
            }
        }
        return val;
    },
    renderCity: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
            var address = record.getAddress();
            if (address) {
                return address.get('city');
            }
        }
        return val;
    },
    renderState: function (val, meta, record, rowIndex, colIndex, store, view) {
        if (record && record._address) {
                var address = record.getAddress();
                if (address) {
                    return address.get('state');
                }
            }
            return val;
        },
        renderPostalCode: function (val, meta, record, rowIndex, colIndex, store, view) {
            if (record && record._address) {
                var address = record.getAddress();
                if (address) {
                    return address.get('postalCode');
            }
        }
        return val;
    },
    renderEmployeeInnerTpl: function () {
        return '{employeeName}';
    },
    renderEmployeeDispalyTpl: function () {
        var xtemplate = Ext.create('Ext.XTemplate', [
            '<tpl for=".">',
            '{employeeName}',
            '</tpl>'
        ]);
        return xtemplate;
    },
    renderCustomerInnerTpl: function() {
        return '{name}}';
    },
    renderCustomerDispalyTpl: function () {
        var xtemplate = Ext.create('Ext.XTemplate', [
            '<tpl for=".">',
            '{name}}',
            '</tpl>'
        ]);
        return xtemplate;
    },
    renderMailToTag:function(email) {
        return '<a href="mailto:' + email + '" style="text-decoration:underline !important;color:#477EBF !important;font-size:15px;">' + email + '</a>';
    },
    amountsRenderer:function(value, meta, record, rowIndex, colIndex, store, view) {
        var isANegativeValue = false, newValue = "";
        var me = this;
        if (value) {
            value = Chaching.utilities.ChachingRenderers.unformattedNumber(value);
            if (Chaching.utilities.ChachingGlobals.displayNegAmtInBrackets === true && value < 0) {
                newValue = Math.abs(value);
                isANegativeValue = true;
                newValue = $.trim(Ext.util.Format.currency(newValue, ' '));
            } else {
                newValue = $.trim(Ext.util.Format.currency(value, ' '));
            }

            if (isANegativeValue === true) {
                newValue = Ext.String.format("(" + newValue + ")");
            }
        }
        newValue = newValue.replace(' ', '');
        return newValue;
    },
    unformattedNumber:function(value) {
        var newValue = "0.00";
        var close = ")";
        if (value != undefined) {
            value = value.toString();
            if (value !== null && value !== '') {
                newValue = value.replace("(", '-');
                newValue = newValue.replace(close, '');
                newValue = newValue.replace(/,/g, "");
            }
        }
        return newValue;
    },
    amountSummaryRenderer: function (value, summaryData, dataIndex) {
        var me = this.getView();
        var val = 0;
        var store = me.getStore();
        val = store.sum('amount');
        return '<b>' + Chaching.utilities.ChachingRenderers.amountsRenderer(val, null, null) + '</b>';
    },
    summaryTotalTextRenderer:function(value, summaryData, dataIndex) {
        return '<b>TOTAL</b>';
    },
    splitColumnRenderer: function (value, cellValues, record, rowIndex, colIndex, store, view) {
        var cssPrefix = Ext.baseCSSPrefix,
            cls = cssPrefix + 'grid-checkcolumn';

        if (this.disabled) {
            cellValues.tdCls += ' ' + this.disabledCls;
        }
        if (value) {
            cls += ' ' + cssPrefix + 'grid-checkcolumn-checked';
        }
        var splitAccountingItemId = record.get('splitAccountingItemId'),
            isSplited = record.get('isAccountingItemSplit');
        if ((splitAccountingItemId > 0 && isSplited) || record.get('accountingItemId') === 0) return null;
        return '<div class="' + cls + '" role="button" tabIndex="0"></div>';
    },
    errorMessageColumnRenderer:function(value, cellValues, record, rowIndex, colIndex, store, view) {
        if (value) {
            cellValues.tdCls += ' errorMessageColumn';
        }
        return value;
    },
    attachmentsRenderer: function(value, metadata, record, rowIndex, colIndex, store, view) {
        var itemRendered = this.items[0];
        if (value) {
            itemRendered.iconCls = 'btn-attach';
        } else {
            itemRendered.iconCls = '';
        }
        return '';
    },
    genericAttachment:function(value, metadata, record, rowIndex, colIndex, store, view) {
        var itemRendered = this.items[0],
            renderIcon = '';
        if (record && !record.get('typeOfAttachedObjectId')) {
            itemRendered.iconCls = 'invalidUploadFileType';
            itemRendered.tooltip = app.localize('Error');
            return '';
        }
        switch (value) {
        case "txt":
            renderIcon = "txt";
            break;
            case "doc":
            case "docx":
                renderIcon = 'doc';
                break;
            case "xls":
            case "xlsx":
                renderIcon = 'xls';
                break;
            case "zip":
            case "rar":
                renderIcon = "zip";
                break;
            case "png":
            case "jpg":
            case "jpeg":
            case "gif":
                renderIcon = "png";
                break;
            case "pdf":
                renderIcon = "pdf";
                break;
            case "ppt":
                renderIcon = "ppt";
                break;
            case "mpeg":
            case "mp3":
            case "mp4":
                renderIcon = "videoFile";
                break;
            case "web":
            case "html":
            case "htm":
                renderIcon = "htmlFile";
                break;
            default:
                renderIcon = "defaultFile";
                break;
        }
        itemRendered.iconCls = renderIcon;
        return '';
    },
    fileStatusRenderer: function (value, metadata, record, rowIndex, colIndex, store, view) {
        var itemRendered = this.items[0];
        if (record && !record.get('typeOfAttachedObjectId')) {
            itemRendered.iconCls = 'fileStatusInvalidUploadError';
            itemRendered.tooltip = app.localize('Error');
            return '';
        }
        switch (value) {
        case "-1":
        case -1:
            itemRendered.iconCls = 'fileStatusUploadError';
            itemRendered.tooltip = app.localize('Error');
            break;
        case "0":
        case 0:
            itemRendered.iconCls = 'fileStatusNew';
            itemRendered.tooltip = app.localize('Uploading');
            break;
        default:
            itemRendered.iconCls = 'fileStatusUploaded';
            itemRendered.tooltip = app.localize('Uploaded');
            break;
        }
        return '';
    },
    attachmentColumnRenderer: function (value, metadata, record, rowIndex, colIndex, store, view) {
        var itemRendered = this.items[0];
        if (record.get('accountingItemId')) {
            itemRendered.iconCls = 'btn-attach';
            itemRendered.tooltip = app.localize('Attach');
        } else {
            itemRendered.iconCls = '';
            itemRendered.tooltip = '';
        }
        return '<div role="button" tabIndex="-1"></div>';
    }

});