Ext.data.JsonP.Ext_grid_feature_RowBody({"tagname":"class","name":"Ext.grid.feature.RowBody","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"RowBody.js","href":"RowBody.html#Ext-grid-feature-RowBody"}],"aliases":{"feature":["rowbody"]},"alternateClassNames":[],"extends":"Ext.grid.feature.Feature","mixins":[],"requires":[],"uses":[],"members":[{"name":"bodyBefore","tagname":"cfg","owner":"Ext.grid.feature.RowBody","id":"cfg-bodyBefore","meta":{}},{"name":"disabled","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-disabled","meta":{}},{"name":"eventPrefix","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-eventPrefix","meta":{}},{"name":"eventSelector","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-eventSelector","meta":{}},{"name":"extraRowTpl","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-extraRowTpl","meta":{"private":true}},{"name":"grid","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-grid","meta":{}},{"name":"hasFeatureEvent","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-hasFeatureEvent","meta":{}},{"name":"innerSelector","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-innerSelector","meta":{"private":true}},{"name":"isFeature","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-isFeature","meta":{}},{"name":"outerTpl","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-outerTpl","meta":{"private":true}},{"name":"rowBodyCls","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-rowBodyCls","meta":{"private":true}},{"name":"rowBodyHiddenCls","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-rowBodyHiddenCls","meta":{"private":true}},{"name":"rowBodyTdSelector","tagname":"property","owner":"Ext.grid.feature.RowBody","id":"property-rowBodyTdSelector","meta":{"private":true}},{"name":"view","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-view","meta":{}},{"name":"wrapsItem","tagname":"property","owner":"Ext.grid.feature.Feature","id":"property-wrapsItem","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-constructor","meta":{}},{"name":"clone","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-clone","meta":{"private":true}},{"name":"disable","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-disable","meta":{}},{"name":"enable","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-enable","meta":{}},{"name":"getAdditionalData","tagname":"method","owner":"Ext.grid.feature.RowBody","id":"method-getAdditionalData","meta":{"protected":true,"template":true}},{"name":"getFireEventArgs","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-getFireEventArgs","meta":{"template":true}},{"name":"getSelectedRow","tagname":"method","owner":"Ext.grid.feature.RowBody","id":"method-getSelectedRow","meta":{"private":true}},{"name":"init","tagname":"method","owner":"Ext.grid.feature.RowBody","id":"method-init","meta":{"protected":true}},{"name":"onColumnsChanged","tagname":"method","owner":"Ext.grid.feature.RowBody","id":"method-onColumnsChanged","meta":{"private":true}},{"name":"setupRowData","tagname":"method","owner":"Ext.grid.feature.RowBody","id":"method-setupRowData","meta":{"private":true}},{"name":"vetoEvent","tagname":"method","owner":"Ext.grid.feature.Feature","id":"method-vetoEvent","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.grid.feature.RowBody","short_doc":"The rowbody feature enhances the grid's markup to have an additional\ntr -> td -> div which spans the entire width of ...","component":false,"superclasses":["Ext.util.Observable","Ext.grid.feature.Feature"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.util.Observable<div class='subclass '><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='docClass'>Ext.grid.feature.Feature</a><div class='subclass '><strong>Ext.grid.feature.RowBody</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/RowBody.html#Ext-grid-feature-RowBody' target='_blank'>RowBody.js</a></div></pre><div class='doc-contents'><p>The rowbody feature enhances the grid's markup to have an additional\ntr -> td -> div which spans the entire width of the original row.</p>\n\n<p>This is useful to to associate additional information with a particular\nrecord in an Ext.grid.Grid.</p>\n\n<p>Rowbodies are initially hidden unless you override <a href=\"#!/api/Ext.grid.feature.RowBody-method-getAdditionalData\" rel=\"Ext.grid.feature.RowBody-method-getAdditionalData\" class=\"docClass\">getAdditionalData</a>.</p>\n\n<p>The events fired by RowBody are relayed to the owning\n<a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">grid view</a> (and subsequently the owning grid).</p>\n\n<h1>Example</h1>\n\n<pre class='inline-example '><code>Ext.define('Animal', {\n    extend: 'Ext.data.Model',\n    fields: ['name', 'latin', 'desc', 'lifespan']\n});\n\nExt.create('<a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a>', {\n    width: 400,\n    height: 300,\n    renderTo: Ext.getBody(),\n    store: {\n        model: 'Animal',\n        data: [{\n            name: 'Tiger',\n            latin: 'Panthera tigris',\n            desc: 'The largest cat species, weighing up to 306 kg (670 lb).',\n            lifespan: '20 - 26 years (in captivity)'\n        }, {\n            name: 'Roman snail',\n            latin: 'Helix pomatia',\n            desc: 'A species of large, edible, air-breathing land snail.',\n            lifespan: '20 - 35 years'\n        }, {\n            name: 'Yellow-winged darter',\n            latin: 'Sympetrum flaveolum',\n            desc: 'A dragonfly found in Europe and mid and Northern China.',\n            lifespan: '4 - 6 weeks'\n        }, {\n            name: 'Superb Fairy-wren',\n            latin: 'Malurus cyaneus',\n            desc: 'Common and familiar across south-eastern Australia.',\n            lifespan: '5 - 6 years'\n        }]\n    },\n    columns: [{\n        dataIndex: 'name',\n        text: 'Common name',\n        width: 125\n    }, {\n        dataIndex: 'latin',\n        text: 'Scientific name',\n        flex: 1\n    }],\n    features: [{\n        ftype: 'rowbody',\n        getAdditionalData: function (data, idx, record, orig) {\n            // Usually you would style the my-body-class in a CSS file\n            return {\n                rowBody: '&lt;div style=\"padding: 1em\"&gt;' + record.get(\"desc\") + '&lt;/div&gt;',\n                rowBodyCls: \"my-body-class\"\n            };\n        }\n    }],\n    listeners: {\n        rowbodyclick: function(view, rowEl, e, eOpts) {\n            var itemEl = Ext.get(rowEl).up(view.itemSelector),\n                rec = view.getRecord(itemEl);\n\n            <a href=\"#!/api/Ext.MessageBox-method-alert\" rel=\"Ext.MessageBox-method-alert\" class=\"docClass\">Ext.Msg.alert</a>(rec.get('name') + ' life span', rec.get('lifespan'));\n        }\n    }\n});\n</code></pre>\n\n<p> # Cell Editing and Cell Selection Model</p>\n\n<p>Note that if <a href=\"#!/api/Ext.grid.plugin.CellEditing\" rel=\"Ext.grid.plugin.CellEditing\" class=\"docClass\">cell editing</a> or the <a href=\"#!/api/Ext.selection.CellModel\" rel=\"Ext.selection.CellModel\" class=\"docClass\">cell selection model</a> are going\nto be used, then the <a href=\"#!/api/Ext.grid.feature.RowBody\" rel=\"Ext.grid.feature.RowBody\" class=\"docClass\">RowBody</a> feature, or <a href=\"#!/api/Ext.grid.plugin.RowExpander\" rel=\"Ext.grid.plugin.RowExpander\" class=\"docClass\">RowExpander</a> plugin MUST\nbe used for intra-cell navigation to be correct.</p>\n\n<p><strong>Note:</strong> The <a href=\"#!/api/Ext.grid.plugin.RowExpander\" rel=\"Ext.grid.plugin.RowExpander\" class=\"docClass\">rowexpander</a> plugin and the rowbody\nfeature are exclusive and cannot both be set on the same grid / tree.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-bodyBefore' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-cfg-bodyBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-cfg-bodyBefore' class='name expandable'>bodyBefore</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Configure as true to put the row expander body before the data row. ...</div><div class='long'><p>Configure as <code>true</code> to put the row expander body <em>before</em> the data row.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disabled' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-disabled' class='name expandable'>disabled</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>True when feature is disabled. ...</div><div class='long'><p>True when feature is disabled.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-eventPrefix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-eventPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-eventPrefix' class='name expandable'>eventPrefix</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Prefix to use when firing events on the view. ...</div><div class='long'><p>Prefix to use when firing events on the view.\nFor example a prefix of group would expose \"groupclick\", \"groupcontextmenu\", \"groupdblclick\".</p>\n<p>Defaults to: <code>&#39;rowbody&#39;</code></p><p>Overrides: <a href=\"#!/api/Ext.grid.feature.Feature-property-eventPrefix\" rel=\"Ext.grid.feature.Feature-property-eventPrefix\" class=\"docClass\">Ext.grid.feature.Feature.eventPrefix</a></p></div></div></div><div id='property-eventSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-eventSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-eventSelector' class='name expandable'>eventSelector</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Selector used to determine when to fire the event with the eventPrefix. ...</div><div class='long'><p>Selector used to determine when to fire the event with the eventPrefix.</p>\n<p>Defaults to: <code>&#39;tr.&#39; + Ext.baseCSSPrefix + &#39;grid-rowbody-tr&#39;</code></p><p>Overrides: <a href=\"#!/api/Ext.grid.feature.Feature-property-eventSelector\" rel=\"Ext.grid.feature.Feature-property-eventSelector\" class=\"docClass\">Ext.grid.feature.Feature.eventSelector</a></p></div></div></div><div id='property-extraRowTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-extraRowTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-extraRowTpl' class='name expandable'>extraRowTpl</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-grid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-grid' class='name expandable'>grid</a> : <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Ext.grid.Panel</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the grid panel</p>\n</div><div class='long'><p>Reference to the grid panel</p>\n</div></div></div><div id='property-hasFeatureEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-hasFeatureEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-hasFeatureEvent' class='name expandable'>hasFeatureEvent</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Most features will expose additional events, some may not and will\nneed to change this to false. ...</div><div class='long'><p>Most features will expose additional events, some may not and will\nneed to change this to false.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-innerSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-innerSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-innerSelector' class='name expandable'>innerSelector</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;.&#39; + Ext.baseCSSPrefix + &#39;grid-rowbody&#39;</code></p></div></div></div><div id='property-isFeature' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-isFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-isFeature' class='name expandable'>isFeature</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>true in this class to identify an object as an instantiated Feature, or subclass thereof. ...</div><div class='long'><p><code>true</code> in this class to identify an object as an instantiated Feature, or subclass thereof.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-outerTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-outerTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-outerTpl' class='name expandable'>outerTpl</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-rowBodyCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-rowBodyCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-rowBodyCls' class='name expandable'>rowBodyCls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + &#39;grid-row-body&#39;</code></p></div></div></div><div id='property-rowBodyHiddenCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-rowBodyHiddenCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-rowBodyHiddenCls' class='name expandable'>rowBodyHiddenCls</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + &#39;grid-row-body-hidden&#39;</code></p></div></div></div><div id='property-rowBodyTdSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-property-rowBodyTdSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-property-rowBodyTdSelector' class='name expandable'>rowBodyTdSelector</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;td.&#39; + Ext.baseCSSPrefix + &#39;grid-cell-rowbody&#39;</code></p></div></div></div><div id='property-view' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-view' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-view' class='name expandable'>view</a> : <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.view.Table</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>Reference to the TableView.</p>\n</div><div class='long'><p>Reference to the TableView.</p>\n</div></div></div><div id='property-wrapsItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-property-wrapsItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-property-wrapsItem' class='name expandable'>wrapsItem</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.feature.Feature-method-constructor' class='name expandable'>Ext.grid.feature.RowBody</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.feature.Feature\" rel=\"Ext.grid.feature.Feature\" class=\"docClass\">Ext.grid.feature.Feature</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.feature.Feature\" rel=\"Ext.grid.feature.Feature\" class=\"docClass\">Ext.grid.feature.Feature</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clone' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-disable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Disables the feature. ...</div><div class='long'><p>Disables the feature.</p>\n</div></div></div><div id='method-enable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Enables the feature. ...</div><div class='long'><p>Enables the feature.</p>\n</div></div></div><div id='method-getAdditionalData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-method-getAdditionalData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-method-getAdditionalData' class='name expandable'>getAdditionalData</a>( <span class='pre'>data, idx, record, orig</span> ) : Object<span class=\"signature\"><span class='protected' >protected</span><span class='template' >template</span></span></div><div class='description'><div class='short'>Provides additional data to the prepareData call within the grid view. ...</div><div class='long'><p>Provides additional data to the prepareData call within the grid view.\nThe rowbody feature adds 3 additional variables into the grid view's template.\nThese are <code>rowBody</code>, <code>rowBodyCls</code>, and <code>rowBodyColspan</code>.</p>\n\n<ul>\n<li><strong>rowBody:</strong> <em>{String}</em> The HTML to display in the row body element.  Defaults\nto <em>undefined</em>.</li>\n<li><strong>rowBodyCls:</strong> <em>{String}</em> An optional CSS class (or multiple classes\nseparated by spaces) to apply to the row body element.  Defaults to\n<a href=\"#!/api/Ext.grid.feature.RowBody-property-rowBodyCls\" rel=\"Ext.grid.feature.RowBody-property-rowBodyCls\" class=\"docClass\">rowBodyCls</a>.</li>\n<li><strong>rowBodyColspan:</strong> <em>{Number}</em> The number of columns that the row body element\nshould span.  Defaults to the number of visible columns.</li>\n</ul>\n\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data for this particular record.</p>\n</div></li><li><span class='pre'>idx</span> : Number<div class='sub-desc'><p>The row index for this record.</p>\n</div></li><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>The record instance</p>\n</div></li><li><span class='pre'>orig</span> : Object<div class='sub-desc'><p>The original result from the prepareData call to massage.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing additional variables for use in the grid\nview's template</p>\n</div></li></ul></div></div></div><div id='method-getFireEventArgs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-getFireEventArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-getFireEventArgs' class='name expandable'>getFireEventArgs</a>( <span class='pre'>eventName, view, featureTarget, e</span> )<span class=\"signature\"><span class='template' >template</span></span></div><div class='description'><div class='short'>Abstract method to be overriden when a feature should add additional\narguments to its event signature. ...</div><div class='long'><p>Abstract method to be overriden when a feature should add additional\narguments to its event signature. By default the event will fire:</p>\n\n<ul>\n<li>view - The underlying <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">Ext.view.Table</a></li>\n<li>featureTarget - The matched element by the defined <a href=\"#!/api/Ext.grid.feature.Feature-property-eventSelector\" rel=\"Ext.grid.feature.Feature-property-eventSelector\" class=\"docClass\">eventSelector</a></li>\n</ul>\n\n\n<p>The method must also return the eventName as the first index of the array\nto be passed to fireEvent.</p>\n      <div class='rounded-box template-box'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>featureTarget</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getSelectedRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-method-getSelectedRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-method-getSelectedRow' class='name expandable'>getSelectedRow</a>( <span class='pre'>view, rowIndex</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-method-init' class='name expandable'>init</a>( <span class='pre'>grid</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Protected method called during View construction. ...</div><div class='long'><p>Protected method called during <a href=\"#!/api/Ext.view.Table\" rel=\"Ext.view.Table\" class=\"docClass\">View</a> construction.  The\nowning <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Grid</a> is passed as a param.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grid</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.grid.feature.Feature-method-init\" rel=\"Ext.grid.feature.Feature-method-init\" class=\"docClass\">Ext.grid.feature.Feature.init</a></p></div></div></div><div id='method-onColumnsChanged' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-method-onColumnsChanged' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-method-onColumnsChanged' class='name expandable'>onColumnsChanged</a>( <span class='pre'>headerCt</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>When columns added/removed, keep row body colspan in sync with number of columns. ...</div><div class='long'><p>When columns added/removed, keep row body colspan in sync with number of columns.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>headerCt</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setupRowData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.feature.RowBody'>Ext.grid.feature.RowBody</span><br/><a href='source/RowBody.html#Ext-grid-feature-RowBody-method-setupRowData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.RowBody-method-setupRowData' class='name expandable'>setupRowData</a>( <span class='pre'>record, rowIndex, rowValues</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>rowValues</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-vetoEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.feature.Feature' rel='Ext.grid.feature.Feature' class='defined-in docClass'>Ext.grid.feature.Feature</a><br/><a href='source/Feature.html#Ext-grid-feature-Feature-method-vetoEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.feature.Feature-method-vetoEvent' class='name expandable'>vetoEvent</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>","meta":{}});