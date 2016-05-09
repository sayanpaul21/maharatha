Ext.data.JsonP.Ext_util_StoreHolder({"tagname":"class","name":"Ext.util.StoreHolder","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"StoreHolder.js","href":"StoreHolder.html#Ext-util-StoreHolder"}],"private":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":["Ext.data.StoreManager"],"uses":[],"members":[{"name":"mixinId","tagname":"property","owner":"Ext.util.StoreHolder","id":"property-mixinId","meta":{"private":true}},{"name":"bindStore","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-bindStore","meta":{}},{"name":"bindStoreListeners","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-bindStoreListeners","meta":{"protected":true}},{"name":"getStore","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-getStore","meta":{}},{"name":"getStoreListeners","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-getStoreListeners","meta":{"protected":true}},{"name":"onBindStore","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-onBindStore","meta":{"protected":true}},{"name":"onUnbindStore","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-onUnbindStore","meta":{"protected":true}},{"name":"setStore","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-setStore","meta":{}},{"name":"unbindStoreListeners","tagname":"method","owner":"Ext.util.StoreHolder","id":"method-unbindStoreListeners","meta":{"protected":true}}],"code_type":"ext_define","id":"class-Ext.util.StoreHolder","short_doc":"This class is used as a mixin. ...","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":["Ext.LoadMask","Ext.form.field.ComboBox","Ext.grid.filters.Filters","Ext.grid.locking.View","Ext.selection.Model","Ext.toolbar.Paging","Ext.view.AbstractView","Ext.view.NavigationModel"],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.util.StoreHolder</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.data.StoreManager</div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Ext.LoadMask' rel='Ext.LoadMask' class='docClass'>Ext.LoadMask</a></div><div class='dependency'><a href='#!/api/Ext.form.field.ComboBox' rel='Ext.form.field.ComboBox' class='docClass'>Ext.form.field.ComboBox</a></div><div class='dependency'><a href='#!/api/Ext.grid.filters.Filters' rel='Ext.grid.filters.Filters' class='docClass'>Ext.grid.filters.Filters</a></div><div class='dependency'><a href='#!/api/Ext.grid.locking.View' rel='Ext.grid.locking.View' class='docClass'>Ext.grid.locking.View</a></div><div class='dependency'><a href='#!/api/Ext.selection.Model' rel='Ext.selection.Model' class='docClass'>Ext.selection.Model</a></div><div class='dependency'><a href='#!/api/Ext.toolbar.Paging' rel='Ext.toolbar.Paging' class='docClass'>Ext.toolbar.Paging</a></div><div class='dependency'><a href='#!/api/Ext.view.AbstractView' rel='Ext.view.AbstractView' class='docClass'>Ext.view.AbstractView</a></div><div class='dependency'><a href='#!/api/Ext.view.NavigationModel' rel='Ext.view.NavigationModel' class='docClass'>Ext.view.NavigationModel</a></div><h4>Files</h4><div class='dependency'><a href='source/StoreHolder.html#Ext-util-StoreHolder' target='_blank'>StoreHolder.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>This class is used as a mixin.</p>\n\n<p>This class is to be used to provide basic methods for binding/unbinding stores to other\nclasses.</p>\n\n<p>This class is not intended for direct use but rather internally by those classes that\nmanage a Store.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-mixinId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-property-mixinId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-property-mixinId' class='name expandable'>mixinId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;storeholder&#39;</code></p><p>Overrides: <a href=\"#!/api/Ext.form.field.Field-property-mixinId\" rel=\"Ext.form.field.Field-property-mixinId\" class=\"docClass\">Ext.form.field.Field.mixinId</a>, <a href=\"#!/api/Ext.util.Focusable-property-mixinId\" rel=\"Ext.util.Focusable-property-mixinId\" class=\"docClass\">Ext.util.Focusable.mixinId</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-bindStore' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-bindStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-bindStore' class='name expandable'>bindStore</a>( <span class='pre'>[store]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Binds a store to this instance. ...</div><div class='long'><p>Binds a store to this instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.AbstractStore/String (optional)<div class='sub-desc'><p>The store to bind or ID of the store.\nWhen no store given (or when <code>null</code> or <code>undefined</code> passed), unbinds the existing store.</p>\n</div></li></ul></div></div></div><div id='method-bindStoreListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-bindStoreListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-bindStoreListeners' class='name expandable'>bindStoreListeners</a>( <span class='pre'>store</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Binds listeners for this component to the store. ...</div><div class='long'><p>Binds listeners for this component to the store. By default it will add\nanything bound by the getStoreListeners method, however it can be overridden\nin a subclass to provide any more complicated handling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to bind to</p>\n</div></li></ul></div></div></div><div id='method-getStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-getStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-getStore' class='name expandable'>getStore</a>( <span class='pre'></span> ) : Ext.data.AbstractStore<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the current store instance. ...</div><div class='long'><p>Gets the current store instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.data.AbstractStore</span><div class='sub-desc'><p>The store, null if one does not exist.</p>\n\n</div></li></ul></div></div></div><div id='method-getStoreListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-getStoreListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-getStoreListeners' class='name expandable'>getStoreListeners</a>( <span class='pre'>store</span> ) : Object<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Gets the listeners to bind to a new store. ...</div><div class='long'><p>Gets the listeners to bind to a new store.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The Store which is being bound to for which a listeners object should be returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The listeners to be bound to the store in object literal form. The scope\nmay be omitted, it is assumed to be the current instance.</p>\n\n\n\n</div></li></ul></div></div></div><div id='method-onBindStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-onBindStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-onBindStore' class='name expandable'>onBindStore</a>( <span class='pre'>store, initial</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method, it is called when a new store is bound\nto the current instance. ...</div><div class='long'><p>Template method, it is called when a new store is bound\nto the current instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store being bound</p>\n</div></li><li><span class='pre'>initial</span> : Boolean<div class='sub-desc'><p>True if this store is being bound as initialization of the instance.</p>\n</div></li></ul></div></div></div><div id='method-onUnbindStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-onUnbindStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-onUnbindStore' class='name expandable'>onUnbindStore</a>( <span class='pre'>store, initial</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Template method, it is called when an existing store is unbound\nfrom the current instance. ...</div><div class='long'><p>Template method, it is called when an existing store is unbound\nfrom the current instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store being unbound</p>\n</div></li><li><span class='pre'>initial</span> : Boolean<div class='sub-desc'><p>True if this store is being bound as initialization of the instance.</p>\n</div></li></ul></div></div></div><div id='method-setStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-setStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-setStore' class='name expandable'>setStore</a>( <span class='pre'>store</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the store to the specified store. ...</div><div class='long'><p>Sets the store to the specified store.</p>\n        <p>Available since: <b>5.0.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li>autosize</li><li>change</li><li>dirtychange</li><li>errorchange</li><li>validitychange</li></ul></div></div></div><div id='method-unbindStoreListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.StoreHolder'>Ext.util.StoreHolder</span><br/><a href='source/StoreHolder.html#Ext-util-StoreHolder-method-unbindStoreListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.StoreHolder-method-unbindStoreListeners' class='name expandable'>unbindStoreListeners</a>( <span class='pre'>store</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Unbinds listeners from this component to the store. ...</div><div class='long'><p>Unbinds listeners from this component to the store. By default it will remove\nanything bound by the bindStoreListeners method, however it can be overridden\nin a subclass to provide any more complicated handling.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.AbstractStore<div class='sub-desc'><p>The store to unbind from</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});