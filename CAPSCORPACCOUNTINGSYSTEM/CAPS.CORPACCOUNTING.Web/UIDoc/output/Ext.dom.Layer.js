Ext.data.JsonP.Ext_dom_Layer({"tagname":"class","name":"Ext.dom.Layer","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Layer.js","href":"Layer.html#Ext-dom-Layer"}],"deprecated":{"text":"<p>Ext.dom.Element now includes support for shadow and shim\nsee enableShadow and\nenableShim</p>\n","version":"5.1.0"},"aliases":{},"alternateClassNames":["Ext.Layer"],"extends":"Ext.Element","mixins":[],"requires":[],"uses":[],"members":[{"name":"cls","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-cls","meta":{}},{"name":"constrain","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-constrain","meta":{}},{"name":"dh","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-dh","meta":{}},{"name":"hideMode","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-hideMode","meta":{}},{"name":"shadow","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-shadow","meta":{}},{"name":"shadowOffset","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-shadowOffset","meta":{}},{"name":"shim","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-shim","meta":{}},{"name":"useDisplay","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-useDisplay","meta":{}},{"name":"visibilityCls","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-visibilityCls","meta":{}},{"name":"zindex","tagname":"cfg","owner":"Ext.dom.Layer","id":"cfg-zindex","meta":{}},{"name":"constructor","tagname":"method","owner":"Ext.dom.Layer","id":"method-constructor","meta":{}}],"code_type":"ext_define","id":"class-Ext.dom.Layer","short_doc":"An extended Ext.dom.Element object that supports a shadow and shim ...","component":false,"superclasses":["Ext.Element"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.Layer</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Element<div class='subclass '><strong>Ext.dom.Layer</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Layer.html#Ext-dom-Layer' target='_blank'>Layer.js</a></div></pre><div class='doc-contents'><p>An extended Ext.dom.Element object that supports a shadow and shim</p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This class has been <strong>deprected</strong> since 5.1.0</p>\n        <p>Ext.dom.Element now includes support for shadow and shim\nsee enableShadow and\nenableShim</p>\n\n        </div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-cls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-cls' class='name expandable'>cls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>CSS class to add to the element</p>\n</div><div class='long'><p>CSS class to add to the element</p>\n</div></div></div><div id='cfg-constrain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-constrain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-constrain' class='name expandable'>constrain</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>False to disable constrain to viewport. ...</div><div class='long'><p>False to disable constrain to viewport.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-dh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-dh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-dh' class='name expandable'>dh</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>DomHelper object config to create element with. ...</div><div class='long'><p>DomHelper object config to create element with.</p>\n<p>Defaults to: <code>{tag: &#39;div&#39;, cls: &#39;x-layer&#39;}</code></p></div></div></div><div id='cfg-hideMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-hideMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-hideMode' class='name expandable'>hideMode</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>A String which specifies how this Layer will be hidden. ...</div><div class='long'><p>A String which specifies how this Layer will be hidden.\nValues may be:</p>\n\n<ul>\n<li><code>'display'</code> : The Component will be hidden using the <code>display: none</code> style.</li>\n<li><code>'visibility'</code> : The Component will be hidden using the <code>visibility: hidden</code> style.</li>\n<li><code>'offsets'</code> : The Component will be hidden by absolutely positioning it out of the visible area\nof the document. This is useful when a hidden Component must maintain measurable dimensions.\nHiding using <code>display</code> results in a Component having zero dimensions.</li>\n</ul>\n\n</div></div></div><div id='cfg-shadow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-shadow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-shadow' class='name expandable'>shadow</a> : String/Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to automatically create an Ext.Shadow, or a string indicating the\nshadow's display Ext.Shadow.mode. ...</div><div class='long'><p>True to automatically create an Ext.Shadow, or a string indicating the\nshadow's display Ext.Shadow.mode. False to disable the shadow.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-shadowOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-shadowOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-shadowOffset' class='name expandable'>shadowOffset</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Number of pixels to offset the shadow ...</div><div class='long'><p>Number of pixels to offset the shadow</p>\n<p>Defaults to: <code>4</code></p></div></div></div><div id='cfg-shim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-shim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-shim' class='name expandable'>shim</a> : String/Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True to automatically create a Ext.dom.Shim. ...</div><div class='long'><p>True to automatically create a Ext.dom.Shim.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-useDisplay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-useDisplay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-useDisplay' class='name expandable'>useDisplay</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Defaults to use css offsets to hide the Layer. ...</div><div class='long'><p>Defaults to use css offsets to hide the Layer. Specify <tt>true</tt>\nto use css style <tt>'display:none;'</tt> to hide the Layer.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-visibilityCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-visibilityCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-visibilityCls' class='name expandable'>visibilityCls</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The CSS class name to add in order to hide this Layer if this layer\nis configured with <code><a href=\"#!/api/Ext.dom.Layer-cfg-hideMode\" rel=\"Ext.dom.Layer-cfg-hideMode\" class=\"docClass\">hideMode</a>: 'asclass'</code></p>\n</div><div class='long'><p>The CSS class name to add in order to hide this Layer if this layer\nis configured with <code><a href=\"#!/api/Ext.dom.Layer-cfg-hideMode\" rel=\"Ext.dom.Layer-cfg-hideMode\" class=\"docClass\">hideMode</a>: 'asclass'</code></p>\n</div></div></div><div id='cfg-zindex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-cfg-zindex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dom.Layer-cfg-zindex' class='name expandable'>zindex</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Starting z-index. ...</div><div class='long'><p>Starting z-index.</p>\n<p>Defaults to: <code>11000</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dom.Layer'>Ext.dom.Layer</span><br/><a href='source/Layer.html#Ext-dom-Layer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.dom.Layer-method-constructor' class='name expandable'>Ext.dom.Layer</a>( <span class='pre'>[config], [existingEl]</span> ) : <a href=\"#!/api/Ext.dom.Layer\" rel=\"Ext.dom.Layer\" class=\"docClass\">Ext.dom.Layer</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new Layer. ...</div><div class='long'><p>Creates new Layer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>An object with config options.</p>\n</div></li><li><span class='pre'>existingEl</span> : String/HTMLElement (optional)<div class='sub-desc'><p>Uses an existing DOM element.\nIf the element is not found it creates it.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dom.Layer\" rel=\"Ext.dom.Layer\" class=\"docClass\">Ext.dom.Layer</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"deprecated":{"text":"<p>Ext.dom.Element now includes support for shadow and shim\nsee enableShadow and\nenableShim</p>\n","version":"5.1.0"}}});