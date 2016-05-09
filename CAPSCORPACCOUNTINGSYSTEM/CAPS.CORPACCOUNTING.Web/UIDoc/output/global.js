Ext.data.JsonP.global({"tagname":"class","name":"global","alternateClassNames":[],"members":[{"name":"","tagname":"property","owner":"global","id":"property-","meta":{}},{"name":"_manifest","tagname":"property","owner":"global","id":"property-_manifest","meta":{"private":true}},{"name":"_shortcuts","tagname":"property","owner":"global","id":"property-_shortcuts","meta":{"private":true}},{"name":"addManifest","tagname":"method","owner":"global","id":"method-addManifest","meta":{}},{"name":"addPrefix","tagname":"method","owner":"global","id":"method-addPrefix","meta":{"private":true}},{"name":"addShortcuts","tagname":"method","owner":"global","id":"method-addShortcuts","meta":{}},{"name":"addWidget","tagname":"method","owner":"global","id":"method-addWidget","meta":{"private":true}},{"name":"applyShortcut","tagname":"method","owner":"global","id":"method-applyShortcut","meta":{"private":true}},{"name":"copyProps","tagname":"method","owner":"global","id":"method-copyProps","meta":{"private":true}},{"name":"loadCss","tagname":"method","owner":"global","id":"method-loadCss","meta":{"private":true}},{"name":"render","tagname":"method","owner":"global","id":"method-render","meta":{"private":true}},{"name":"renderWidget","tagname":"method","owner":"global","id":"method-renderWidget","meta":{"private":true}},{"name":"run","tagname":"method","owner":"global","id":"method-run","meta":{"private":true}},{"name":"setData","tagname":"method","owner":"global","id":"method-setData","meta":{"private":true}}],"aliases":{},"files":[{"filename":"","href":""}],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>Global variables and functions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/Main.scss.html#global-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-' class='name expandable'></a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Generates a set of style rules for the \"navigation\" panel UI.</p>\n</div><div class='long'><p>Generates a set of style rules for the \"navigation\" panel UI.</p>\n</div></div></div><div id='property-_manifest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-property-_manifest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-_manifest' class='name expandable'>_manifest</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The array of all component manifests. ...</div><div class='long'><p>The array of all component manifests. These objects have the following set of\nproperties recognized by the slicer:</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-_shortcuts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-property-_shortcuts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-_shortcuts' class='name expandable'>_shortcuts</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The collection of shortcuts for a given alias (e.g., 'widget.panel'). ...</div><div class='long'><p>The collection of shortcuts for a given alias (e.g., 'widget.panel'). This is an\nobject keyed by alias whose values are arrays of shortcut definitions.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addManifest' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-addManifest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-addManifest' class='name expandable'>addManifest</a>( <span class='pre'>manifest</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds one ore more component entries to the theme manifest. ...</div><div class='long'><p>Adds one ore more component entries to the theme manifest. These entries will be\ninstantiated by the <code>Ext.theme.render</code> method when the page is ready.</p>\n\n<p>Usage:</p>\n\n<pre><code> Ext.theme.addManifest({\n         xtype: 'widget.menu',\n         folder: 'menu',\n         delegate: '.x-menu-item-link',\n         filename: 'menu-item-active',\n         config: {\n             floating: false,\n             width: 200,\n             items: [{\n                 text: 'test',\n                 cls: 'x-menu-item-active'\n             }]\n         }\n     },{\n         //...\n     });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>manifest</span> : Object<div class='sub-desc'><p>{Object} An object with type of component, slicing information and\ncomponent configuration. If this parameter is an array, each element is treated as\na manifest entry. Otherwise, each argument passed is treated as a manifest entry.</p>\n<ul><li><span class='pre'>xtype</span> : <div class='sub-desc'><p>{String} The xtype ('grid') or alias ('widget.grid'). This\nis used to specify the type of component to create as well as a potential key to\nany <code>shortcuts</code> defined for the xtype.</p>\n</div></li><li><span class='pre'>config</span> : <div class='sub-desc'><p>{Object} The component configuration object. The properties\nof this depend on the <code>xtype</code> of the component.</p>\n</div></li><li><span class='pre'>delegate</span> :  (optional)<div class='sub-desc'><p>{String} The DOM query to use to select the element to\nslice. The default is to slice the primary element of the component.</p>\n</div></li><li><span class='pre'>parentCls</span> :  (optional)<div class='sub-desc'><p>An optional CSS class to add to the parent of the\ncomponent.</p>\n</div></li><li><span class='pre'>setup</span> :  (optional)<div class='sub-desc'><p>{Function} An optional function to be called to initialize\nthe component.</p>\n<ul><li><span class='pre'>component</span> : <div class='sub-desc'><p>{<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>} The component instance</p>\n</div></li><li><span class='pre'>container</span> : <div class='sub-desc'><p>{Element} The component's container.</p>\n</div></li></ul></div></li><li><span class='pre'>folder</span> :  (optional)<div class='sub-desc'><p>{String} The folder in to which to produce image slices.\nOnly applies to Ext JS 4.1 (removed in 4.2).</p>\n</div></li><li><span class='pre'>filename</span> :  (optional)<div class='sub-desc'><p>{String} The base filename for slices.\nOnly applies to Ext JS 4.1 (removed in 4.2).</p>\n</div></li><li><span class='pre'>reverse</span> :  (optional)<div class='sub-desc'><p>{Boolean} True to position the slices for linear gradient\nbackground at then opposite \"end\" (right or bottom) and apply the stretch to the\narea before it (left or top). Only applies to Ext JS 4.1 (removed in 4.2).</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-addPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-addPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-addPrefix' class='name expandable'>addPrefix</a>( <span class='pre'>prefix, s</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method ensures that a given string has the specified prefix (e.g., \"widget.\"). ...</div><div class='long'><p>This method ensures that a given string has the specified prefix (e.g., \"widget.\").</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prefix</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>s</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-addShortcuts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-addShortcuts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-addShortcuts' class='name expandable'>addShortcuts</a>( <span class='pre'>shortcuts</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds one or more shortcuts to the rendering process. ...</div><div class='long'><p>Adds one or more shortcuts to the rendering process. A <code>shortcut</code> is an object that\nlooks the same as a <code>manifest</code> entry. These are combined by copying the properties\nfrom the shortcut over those of the manifest entry. In basic terms:</p>\n\n<pre><code> var config = Ext.apply(Ext.apply({}, manfiest.config), shortcut.config);\n var entry = Ext.apply(Ext.apply({}, manfiest), shortcut);\n entry.config = config;\n</code></pre>\n\n<p>This is not exactly the process, but the idea is the same. The difference is that\nthe <code>ui</code> of the manifest entry is used to replace any <code>\"{ui}\"</code> substrings found in\nany string properties of the shortcut or its <code>config</code> object.</p>\n\n<p>Usage:</p>\n\n<pre><code> Ext.theme.addShortcuts({\n     'widget.foo': [{\n             config: {\n             }\n         },{\n             config: {\n             }\n         }],\n\n     'widget.bar': [ ... ]\n });\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>shortcuts</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-addWidget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-addWidget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-addWidget' class='name expandable'>addWidget</a>( <span class='pre'>str</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method returns the given string with \"widget.\" added to the front if that is\nnot already present. ...</div><div class='long'><p>This method returns the given string with \"widget.\" added to the front if that is\nnot already present.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-applyShortcut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-applyShortcut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-applyShortcut' class='name expandable'>applyShortcut</a>( <span class='pre'>manifestEntry, shortcut</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method accepts an manifest entry and a shortcut entry and returns the merged\nversion. ...</div><div class='long'><p>This method accepts an manifest entry and a shortcut entry and returns the merged\nversion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>manifestEntry</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>shortcut</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-copyProps' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-copyProps' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-copyProps' class='name expandable'>copyProps</a>( <span class='pre'>dest, src, tpl</span> ) : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This method copies property from a src object to a dest object and reaplces\n\"{foo}\" fragments of any string propertie...</div><div class='long'><p>This method copies property from a <code>src</code> object to a <code>dest</code> object and reaplces\n<code>\"{foo}\"</code> fragments of any string properties as defined in the <code>tpl</code> object.</p>\n\n<pre><code> var obj = Ext.theme.copyProps({}, {\n                 foo: 'Hello-{ui}'\n             }, {\n                 ui: 'World'\n             });\n\n console.log('obj.foo: ' + obj.foo); // logs \"Hello-World\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dest</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>src</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>tpl</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The <code>dest</code> object or a new object (if <code>dest</code> was null).</p>\n</div></li></ul></div></div></div><div id='method-loadCss' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-loadCss' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-loadCss' class='name expandable'>loadCss</a>( <span class='pre'>src, callback</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>This used to be loadExtStylesheet. ...</div><div class='long'><p>This used to be <code>loadExtStylesheet</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-render' class='name expandable'>render</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Renders all of the components that have been added to the manifest. ...</div><div class='long'><p>Renders all of the components that have been added to the manifest.</p>\n</div></div></div><div id='method-renderWidget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-renderWidget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-renderWidget' class='name expandable'>renderWidget</a>( <span class='pre'>manifestEntry, shortcut</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Renders a component given its manifest and shortcut entries. ...</div><div class='long'><p>Renders a component given its manifest and shortcut entries.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>manifestEntry</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>shortcut</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-run' class='name expandable'>run</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Renders all components (see render) and notifies the Slicer that things are ready. ...</div><div class='long'><p>Renders all components (see <code>render</code>) and notifies the Slicer that things are ready.</p>\n</div></div></div><div id='method-setData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/render.html#global-method-setData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-setData' class='name expandable'>setData</a>( <span class='pre'>el, data</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Sets the data-slicer attribute to the JSON-encoded value of the provided data. ...</div><div class='long'><p>Sets the <code>data-slicer</code> attribute to the JSON-encoded value of the provided data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});