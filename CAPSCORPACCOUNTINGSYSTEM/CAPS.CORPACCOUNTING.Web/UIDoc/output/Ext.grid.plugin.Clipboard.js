Ext.data.JsonP.Ext_grid_plugin_Clipboard({"tagname":"class","name":"Ext.grid.plugin.Clipboard","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Clipboard.js","href":"Clipboard.html#Ext-grid-plugin-Clipboard"}],"aliases":{"plugin":["clipboard"]},"alternateClassNames":[],"extends":"Ext.plugin.AbstractClipboard","mixins":[],"requires":["Ext.util.Format","Ext.util.TSV"],"uses":[],"members":[{"name":"formats","tagname":"cfg","owner":"Ext.grid.plugin.Clipboard","id":"cfg-formats","meta":{"protected":true}},{"name":"memory","tagname":"cfg","owner":"Ext.plugin.AbstractClipboard","id":"cfg-memory","meta":{}},{"name":"source","tagname":"cfg","owner":"Ext.plugin.AbstractClipboard","id":"cfg-source","meta":{}},{"name":"system","tagname":"cfg","owner":"Ext.plugin.AbstractClipboard","id":"cfg-system","meta":{}},{"name":"privates","tagname":"property","owner":"Ext.grid.plugin.Clipboard","id":"property-privates","meta":{"private":true}},{"name":"shared","tagname":"property","owner":"Ext.plugin.AbstractClipboard","id":"property-shared","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-destroy","meta":{"private":true}},{"name":"getCellData","tagname":"method","owner":"Ext.grid.plugin.Clipboard","id":"method-getCellData","meta":{"private":true}},{"name":"getCells","tagname":"method","owner":"Ext.grid.plugin.Clipboard","id":"method-getCells","meta":{"private":true}},{"name":"getFormats","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-getFormats","meta":{"protected":true}},{"name":"getHiddenTextArea","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-getHiddenTextArea","meta":{"private":true}},{"name":"getMemory","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-getMemory","meta":{}},{"name":"getSource","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-getSource","meta":{}},{"name":"getSystem","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-getSystem","meta":{}},{"name":"getTarget","tagname":"method","owner":"Ext.grid.plugin.Clipboard","id":"method-getTarget","meta":{}},{"name":"getTextData","tagname":"method","owner":"Ext.grid.plugin.Clipboard","id":"method-getTextData","meta":{}},{"name":"init","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-init","meta":{"private":true}},{"name":"putCellData","tagname":"method","owner":"Ext.grid.plugin.Clipboard","id":"method-putCellData","meta":{"private":true}},{"name":"putTextData","tagname":"method","owner":"Ext.grid.plugin.Clipboard","id":"method-putTextData","meta":{}},{"name":"setFormats","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-setFormats","meta":{"protected":true}},{"name":"setMemory","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-setMemory","meta":{}},{"name":"setSource","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-setSource","meta":{}},{"name":"setSystem","tagname":"method","owner":"Ext.plugin.AbstractClipboard","id":"method-setSystem","meta":{}}],"code_type":"ext_define","id":"class-Ext.grid.plugin.Clipboard","short_doc":"This grid plugin adds clipboard support to a grid. ...","component":false,"superclasses":["Ext.plugin.Abstract","Ext.plugin.AbstractClipboard"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.plugin.Abstract<div class='subclass '><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='docClass'>Ext.plugin.AbstractClipboard</a><div class='subclass '><strong>Ext.grid.plugin.Clipboard</strong></div></div></div><h4>Requires</h4><div class='dependency'>Ext.util.Format</div><div class='dependency'>Ext.util.TSV</div><h4>Files</h4><div class='dependency'><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard' target='_blank'>Clipboard.js</a></div></pre><div class='doc-contents'><p>This <a href=\"#!/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">grid</a> plugin adds clipboard support to a grid.</p>\n\n<p><em>Note that the grid must use the <a href=\"#!/api/Ext.grid.selection.SpreadsheetModel\" rel=\"Ext.grid.selection.SpreadsheetModel\" class=\"docClass\">spreadsheet selection model</a> to utilize this plugin.</em></p>\n\n<p>This class supports the following <code><a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-formats\" rel=\"Ext.plugin.AbstractClipboard-cfg-formats\" class=\"docClass\">formats</a></code>\nfor grid data:</p>\n\n<ul>\n<li><code>cell</code> - Complete field data that can be matched to other grids using the same\nmodel regardless of column order.</li>\n<li><code>text</code> - Cell content stripped of HTML tags.</li>\n<li><code>html</code> - Complete cell content, including any rendered HTML tags.</li>\n<li><code>raw</code> - Underlying field values based on <code>dataIndex</code>.</li>\n</ul>\n\n\n<p>The <code>cell</code> format is not valid for the <code><a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-system\" rel=\"Ext.plugin.AbstractClipboard-cfg-system\" class=\"docClass\">system</a></code>\nclipboard format.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-formats' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-cfg-formats' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-cfg-formats' class='name expandable'>formats</a> : Object<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>This object is keyed by the names of the data formats supported by this plugin. ...</div><div class='long'><p>This object is keyed by the names of the data formats supported by this plugin.\nThe property values of this object are objects with <code>get</code> and <code>put</code> properties\nthat name the methods for getting data from (copy) and putting to into (paste)\nthe associated component.</p>\n\n<p>For example:</p>\n\n<pre><code> formats: {\n     html: {\n         get: 'getHtmlData',\n         put: 'putHtmlData'\n     }\n }\n</code></pre>\n\n<p>This declares support for the \"html\" data format and indicates that the\n<code>getHtmlData</code> method should be called to copy HTML data from the component,\nwhile the <code>putHtmlData</code> should be called to paste HTML data into the component.</p>\n\n<p>By default, all derived classes must support a \"text\" format:</p>\n\n<pre><code> formats: {\n     text: {\n         get: 'getTextData',\n         put: 'putTextData'\n     }\n }\n</code></pre>\n\n<p>To understand the method signatures required to implement a data format, see the\ndocumentation for <code><a href=\"#!/api/Ext.grid.plugin.Clipboard-method-getTextData\" rel=\"Ext.grid.plugin.Clipboard-method-getTextData\" class=\"docClass\">getTextData</a></code> and  <code><a href=\"#!/api/Ext.grid.plugin.Clipboard-method-putTextData\" rel=\"Ext.grid.plugin.Clipboard-method-putTextData\" class=\"docClass\">putTextData</a></code>.</p>\n\n<p>The format name \"system\" is not allowed.</p>\n<p>Defaults to: <code>{cell: {get: &#39;getCells&#39;}, html: {get: &#39;getCellData&#39;}, raw: {get: &#39;getCellData&#39;, put: &#39;putCellData&#39;}}</code></p><p>Overrides: <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-formats\" rel=\"Ext.plugin.AbstractClipboard-cfg-formats\" class=\"docClass\">Ext.plugin.AbstractClipboard.formats</a></p></div></div></div><div id='cfg-memory' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-memory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-cfg-memory' class='name expandable'>memory</a> : String/String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>The data format(s) to copy to the private, memory clipboard. ...</div><div class='long'><p>The data format(s) to copy to the private, memory clipboard. By default, data\nis not saved to the memory clipboard. Specify <code>true</code> to include all formats\nof data, or a string to copy a single format, or an array of strings to copy\nmultiple formats.</p>\n</div></div></div><div id='cfg-source' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-source' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-cfg-source' class='name expandable'>source</a> : String/String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>The format or formats in order of preference when pasting data. ...</div><div class='long'><p>The format or formats in order of preference when pasting data. This list can\nbe any of the valid formats, plus the name \"system\". When a paste occurs, this\nconfig is consulted. The first format specified by this config that has data\navailable in the private memory space is used. If \"system\" is encountered in\nthe list, whatever data is available on the system clipboard is chosen. At\nthat point, no further source formats will be considered.</p>\n<p>Defaults to: <code>&quot;system&quot;</code></p></div></div></div><div id='cfg-system' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-system' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-cfg-system' class='name expandable'>system</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The data format to set in the system clipboard. ...</div><div class='long'><p>The data format to set in the system clipboard. By default, the \"text\"\nformat is used. Based on the type of derived class, other formats may be\npossible.</p>\n<p>Defaults to: <code>&quot;text&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-privates' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-property-privates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-property-privates' class='name expandable'>privates</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-shared' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-property-shared' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-property-shared' class='name expandable'>shared</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>The shared state for all clipboard-enabled components. ...</div><div class='long'><p>The shared state for all clipboard-enabled components.</p>\n<p>Defaults to: <code>{counter: 0, data: null, textArea: null}</code></p><ul><li><span class='pre'>counter</span> : Number<div class='sub-desc'><p>The number of clipboard-enabled components\ncurrently using this object.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The clipboard data for intra-page copy/paste. The\nproperties of the object are keyed by format.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getCellData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-method-getCellData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-method-getCellData' class='name expandable'>getCellData</a>( <span class='pre'>format, erase</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>erase</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getCells' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-method-getCells' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-method-getCells' class='name expandable'>getCells</a>( <span class='pre'>format, erase</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>erase</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getFormats' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-formats' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-getFormats' class='name expandable'>getFormats</a>( <span class='pre'></span> ) : Object<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Returns the value of formats. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-formats\" rel=\"Ext.plugin.AbstractClipboard-cfg-formats\" class=\"docClass\">formats</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHiddenTextArea' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-method-getHiddenTextArea' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-getHiddenTextArea' class='name expandable'>getHiddenTextArea</a>( <span class='pre'></span> ) : Ext.dom.Element<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.dom.Element</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMemory' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-memory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-getMemory' class='name expandable'>getMemory</a>( <span class='pre'></span> ) : String/String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of memory. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-memory\" rel=\"Ext.plugin.AbstractClipboard-cfg-memory\" class=\"docClass\">memory</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSource' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-source' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-getSource' class='name expandable'>getSource</a>( <span class='pre'></span> ) : String/String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of source. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-source\" rel=\"Ext.plugin.AbstractClipboard-cfg-source\" class=\"docClass\">source</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/String[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSystem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-system' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-getSystem' class='name expandable'>getSystem</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of system. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-system\" rel=\"Ext.plugin.AbstractClipboard-cfg-system\" class=\"docClass\">system</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'>comp</span> ) : Ext.dom.Element<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the element target to listen to copy/paste. ...</div><div class='long'><p>Returns the element target to listen to copy/paste.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comp</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.dom.Element</span><div class='sub-desc'><p>The element target.</p>\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.plugin.AbstractClipboard-method-getTarget\" rel=\"Ext.plugin.AbstractClipboard-method-getTarget\" class=\"docClass\">Ext.plugin.AbstractClipboard.getTarget</a></p></div></div></div><div id='method-getTextData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-method-getTextData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-method-getTextData' class='name expandable'>getTextData</a>( <span class='pre'>format, erase</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns the selected data in text format. ...</div><div class='long'><p>This method returns the selected data in text format.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>erase</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The data in text format.</p>\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.plugin.AbstractClipboard-method-getTextData\" rel=\"Ext.plugin.AbstractClipboard-method-getTextData\" class=\"docClass\">Ext.plugin.AbstractClipboard.getTextData</a></p></div></div></div><div id='method-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-init' class='name expandable'>init</a>( <span class='pre'>comp</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comp</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-putCellData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-method-putCellData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-method-putCellData' class='name expandable'>putCellData</a>( <span class='pre'>data, format</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>format</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-putTextData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.plugin.Clipboard'>Ext.grid.plugin.Clipboard</span><br/><a href='source/Clipboard.html#Ext-grid-plugin-Clipboard-method-putTextData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.plugin.Clipboard-method-putTextData' class='name expandable'>putTextData</a>( <span class='pre'>data, format</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method pastes the given text data. ...</div><div class='long'><p>This method pastes the given text data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>format</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.plugin.AbstractClipboard-method-putTextData\" rel=\"Ext.plugin.AbstractClipboard-method-putTextData\" class=\"docClass\">Ext.plugin.AbstractClipboard.putTextData</a></p></div></div></div><div id='method-setFormats' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-formats' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-setFormats' class='name expandable'>setFormats</a>( <span class='pre'>formats</span> )<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Sets the value of formats. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-formats\" rel=\"Ext.plugin.AbstractClipboard-cfg-formats\" class=\"docClass\">formats</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formats</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setMemory' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-memory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-setMemory' class='name expandable'>setMemory</a>( <span class='pre'>memory</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of memory. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-memory\" rel=\"Ext.plugin.AbstractClipboard-cfg-memory\" class=\"docClass\">memory</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>memory</span> : String/String[]<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setSource' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-source' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-setSource' class='name expandable'>setSource</a>( <span class='pre'>source</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of source. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-source\" rel=\"Ext.plugin.AbstractClipboard-cfg-source\" class=\"docClass\">source</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : String/String[]<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setSystem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.plugin.AbstractClipboard' rel='Ext.plugin.AbstractClipboard' class='defined-in docClass'>Ext.plugin.AbstractClipboard</a><br/><a href='source/AbstractClipboard.html#Ext-plugin-AbstractClipboard-cfg-system' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.plugin.AbstractClipboard-method-setSystem' class='name expandable'>setSystem</a>( <span class='pre'>system</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of system. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.plugin.AbstractClipboard-cfg-system\" rel=\"Ext.plugin.AbstractClipboard-cfg-system\" class=\"docClass\">system</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>system</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});