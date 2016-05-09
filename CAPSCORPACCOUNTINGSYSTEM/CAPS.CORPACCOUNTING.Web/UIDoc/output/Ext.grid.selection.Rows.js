Ext.data.JsonP.Ext_grid_selection_Rows({"tagname":"class","name":"Ext.grid.selection.Rows","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Rows.js","href":"Rows.html#Ext-grid-selection-Rows"}],"since":"5.1.0","aliases":{},"alternateClassNames":[],"extends":"Ext.grid.selection.Selection","mixins":[],"requires":["Ext.util.Collection"],"uses":[],"members":[{"name":"isRows","tagname":"property","owner":"Ext.grid.selection.Rows","id":"property-isRows","meta":{"readonly":true}},{"name":"privates","tagname":"property","owner":"Ext.grid.selection.Rows","id":"property-privates","meta":{"private":true}},{"name":"type","tagname":"property","owner":"Ext.grid.selection.Rows","id":"property-type","meta":{"private":true}},{"name":"constructor","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-constructor","meta":{}},{"name":"add","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-add","meta":{"private":true}},{"name":"addRange","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-addRange","meta":{"private":true}},{"name":"beginUpdate","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-beginUpdate","meta":{}},{"name":"clear","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-clear","meta":{"private":true}},{"name":"clone","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-clone","meta":{}},{"name":"contains","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-contains","meta":{}},{"name":"createRecordCollection","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-createRecordCollection","meta":{"private":true}},{"name":"destroy","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-destroy","meta":{"private":true}},{"name":"eachCell","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-eachCell","meta":{}},{"name":"eachColumn","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-eachColumn","meta":{}},{"name":"eachRow","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-eachRow","meta":{}},{"name":"endUpdate","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-endUpdate","meta":{}},{"name":"getContiguousSelection","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getContiguousSelection","meta":{"private":true}},{"name":"getCount","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getCount","meta":{}},{"name":"getFirstRowIndex","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getFirstRowIndex","meta":{}},{"name":"getLastRowIndex","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getLastRowIndex","meta":{}},{"name":"getLastSelected","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getLastSelected","meta":{"private":true}},{"name":"getRange","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getRange","meta":{"private":true}},{"name":"getRangeSize","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getRangeSize","meta":{"private":true}},{"name":"getRecords","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-getRecords","meta":{}},{"name":"isAllSelected","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-isAllSelected","meta":{"private":true}},{"name":"onSelectionFinish","tagname":"method","owner":"Ext.grid.selection.Selection","id":"method-onSelectionFinish","meta":{"private":true}},{"name":"remove","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-remove","meta":{"private":true}},{"name":"selectAll","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-selectAll","meta":{"private":true}},{"name":"setRangeEnd","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-setRangeEnd","meta":{"private":true}},{"name":"setRangeStart","tagname":"method","owner":"Ext.grid.selection.Rows","id":"method-setRangeStart","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.grid.selection.Rows","component":false,"superclasses":["Ext.Base","Ext.grid.selection.Selection"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.grid.selection.Selection' rel='Ext.grid.selection.Selection' class='docClass'>Ext.grid.selection.Selection</a><div class='subclass '><strong>Ext.grid.selection.Rows</strong></div></div></div><h4>Requires</h4><div class='dependency'>Ext.util.Collection</div><h4>Files</h4><div class='dependency'><a href='source/Rows.html#Ext-grid-selection-Rows' target='_blank'>Rows.js</a></div></pre><div class='doc-contents'><p>A class which encapsulates a range of rows defining a selection in a grid.</p>\n        <p>Available since: <b>5.1.0</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isRows' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-property-isRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-property-isRows' class='name expandable'>isRows</a> : Boolean<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>This property indicates the this selection represents selected rows. ...</div><div class='long'><p>This property indicates the this selection represents selected rows.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-privates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-property-privates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-property-privates' class='name expandable'>privates</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><hr />\n</div><div class='long'><hr />\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-property-type' class='name expandable'>type</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;rows&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.selection.Selection' rel='Ext.grid.selection.Selection' class='defined-in docClass'>Ext.grid.selection.Selection</a><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.selection.Selection-method-constructor' class='name expandable'>Ext.grid.selection.Rows</a>( <span class='pre'>view</span> ) : <a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-add' class='name expandable'>add</a>( <span class='pre'>record</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Methods unique to this type of Selection ...</div><div class='long'><hr />\n\n<p> Methods unique to this type of Selection</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-addRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-addRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-addRange' class='name expandable'>addRange</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called at the end of a drag, or shift+downarrow row range select. ...</div><div class='long'><p>Called at the end of a drag, or shift+downarrow row range select.\nThe record range delineated by the start and end row indices is added to the selected Collection.</p>\n</div></div></div><div id='method-beginUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-beginUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-beginUpdate' class='name expandable'>beginUpdate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called to indicate the start of multiple changes to the selected row set. ...</div><div class='long'><p>This method is called to indicate the start of multiple changes to the selected row set.</p>\n\n<p>Internally this method increments a counter that is decremented by <code><a href=\"#!/api/Ext.grid.selection.Rows-method-endUpdate\" rel=\"Ext.grid.selection.Rows-method-endUpdate\" class=\"docClass\">endUpdate</a></code>. It\nis important, therefore, that if you call <code>beginUpdate</code> directly you match that\ncall with a call to <code>endUpdate</code> or you will prevent the collection from updating\nproperly.</p>\n</div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Ext.grid.selection.Selection-method-clear\" rel=\"Ext.grid.selection.Selection-method-clear\" class=\"docClass\">Ext.grid.selection.Selection.clear</a></p></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Base Selection API ...</div><div class='long'><hr />\n\n<p> Base Selection API</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.selection.Selection\" rel=\"Ext.grid.selection.Selection\" class=\"docClass\">Ext.grid.selection.Selection</a></span><div class='sub-desc'><p>A clone of this instance.</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.grid.selection.Selection-method-clone\" rel=\"Ext.grid.selection.Selection-method-clone\" class=\"docClass\">Ext.grid.selection.Selection.clone</a></p></div></div></div><div id='method-contains' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-contains' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-contains' class='name expandable'>contains</a>( <span class='pre'>record</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns true if the passed record is selected. ...</div><div class='long'><p>Returns <code>true</code> if the passed record is selected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Ext.data.Model<div class='sub-desc'><p>The record to test.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the passed record is selected.</p>\n</div></li></ul></div></div></div><div id='method-createRecordCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-createRecordCollection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-createRecordCollection' class='name expandable'>createRecordCollection</a>( <span class='pre'></span> ) : Ext.util.Collection<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.util.Collection</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-eachCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-eachCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-eachCell' class='name expandable'>eachCell</a>( <span class='pre'>fn, scope</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the passed function for each selected cell from top left to bottom right\niterating over columns within each row. ...</div><div class='long'><p>Calls the passed function for each selected cell from top left to bottom right\niterating over columns within each row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.grid.selection.Selection-method-eachCell\" rel=\"Ext.grid.selection.Selection-method-eachCell\" class=\"docClass\">Ext.grid.selection.Selection.eachCell</a></p></div></div></div><div id='method-eachColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-eachColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-eachColumn' class='name expandable'>eachColumn</a>( <span class='pre'>fn, scope</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the passed function for each selected column from left to right. ...</div><div class='long'><p>Calls the passed function for each selected column from left to right.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.grid.selection.Selection-method-eachColumn\" rel=\"Ext.grid.selection.Selection-method-eachColumn\" class=\"docClass\">Ext.grid.selection.Selection.eachColumn</a></p></div></div></div><div id='method-eachRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-eachRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-eachRow' class='name expandable'>eachRow</a>( <span class='pre'>fn, scope</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls the passed function for each selected record. ...</div><div class='long'><p>Calls the passed function for each selected record.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Ext.grid.selection.Selection-method-eachRow\" rel=\"Ext.grid.selection.Selection-method-eachRow\" class=\"docClass\">Ext.grid.selection.Selection.eachRow</a></p></div></div></div><div id='method-endUpdate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-endUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-endUpdate' class='name expandable'>endUpdate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method is called after modifications are complete on a selected row set. ...</div><div class='long'><p>This method is called after modifications are complete on a selected row set. For details\nsee <code><a href=\"#!/api/Ext.grid.selection.Rows-method-beginUpdate\" rel=\"Ext.grid.selection.Rows-method-beginUpdate\" class=\"docClass\">beginUpdate</a></code>.</p>\n</div></div></div><div id='method-getContiguousSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getContiguousSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getContiguousSelection' class='name expandable'>getContiguousSelection</a>( <span class='pre'></span> ) : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p><code>[startRowIndex, endRowIndex]</code> if the selection represents a visually contiguous set of rows.\nThe SelectionReplicator is only enabled if there is a contiguous block.</p>\n</div></li></ul></div></div></div><div id='method-getCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getCount' class='name expandable'>getCount</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the number of records selected ...</div><div class='long'><p>Returns the number of records selected</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of records selected.</p>\n</div></li></ul></div></div></div><div id='method-getFirstRowIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getFirstRowIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getFirstRowIndex' class='name expandable'>getFirstRowIndex</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The row index of the first row in the range or zero if no range.</p>\n</div></li></ul></div></div></div><div id='method-getLastRowIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getLastRowIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getLastRowIndex' class='name expandable'>getLastRowIndex</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The row index of the last row in the range or -1 if no range.</p>\n</div></li></ul></div></div></div><div id='method-getLastSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getLastSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getLastSelected' class='name expandable'>getLastSelected</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called through Ext.grid.selection.SpreadsheetModel.getLastSelected by Ext.panel.Table.updateBindSelection when publis...</div><div class='long'><p>Called through <a href=\"#!/api/Ext.grid.selection.SpreadsheetModel-method-getLastSelected\" rel=\"Ext.grid.selection.SpreadsheetModel-method-getLastSelected\" class=\"docClass\">Ext.grid.selection.SpreadsheetModel.getLastSelected</a> by <a href=\"#!/api/Ext.panel.Table-method-updateBindSelection\" rel=\"Ext.panel.Table-method-updateBindSelection\" class=\"docClass\">Ext.panel.Table.updateBindSelection</a> when publishing the <code>selection</code> property.\nIt should yield the last record selected.</p>\n</div></div></div><div id='method-getRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getRange' class='name expandable'>getRange</a>( <span class='pre'></span> ) : Number[]<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRangeSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getRangeSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getRangeSize' class='name expandable'>getRangeSize</a>( <span class='pre'></span> ) : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns the size of the mousedown+drag, or SHIFT+arrow selection range. ...</div><div class='long'><p>Returns the size of the mousedown+drag, or SHIFT+arrow selection range.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-getRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-getRecords' class='name expandable'>getRecords</a>( <span class='pre'></span> ) : Ext.data.Model[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the records selected. ...</div><div class='long'><p>Returns the records selected.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.data.Model[]</span><div class='sub-desc'><p>The records selected.</p>\n</div></li></ul></div></div></div><div id='method-isAllSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-isAllSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-isAllSelected' class='name expandable'>isAllSelected</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onSelectionFinish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.selection.Selection' rel='Ext.grid.selection.Selection' class='defined-in docClass'>Ext.grid.selection.Selection</a><br/><a href='source/Selection.html#Ext-grid-selection-Selection-method-onSelectionFinish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Selection-method-onSelectionFinish' class='name expandable'>onSelectionFinish</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Called when selection is completed. ...</div><div class='long'><p>Called when selection is completed.</p>\n</div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-remove' class='name expandable'>remove</a>( <span class='pre'>record</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-selectAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-selectAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-selectAll' class='name expandable'>selectAll</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setRangeEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-setRangeEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-setRangeEnd' class='name expandable'>setRangeEnd</a>( <span class='pre'>end</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Used during drag/shift+downarrow range selection on change of row. ...</div><div class='long'><p>Used during drag/shift+downarrow range selection on change of row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>end</span> : Number<div class='sub-desc'><p>The end row index of the row drag selection.</p>\n</div></li></ul></div></div></div><div id='method-setRangeStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.selection.Rows'>Ext.grid.selection.Rows</span><br/><a href='source/Rows.html#Ext-grid-selection-Rows-method-setRangeStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.selection.Rows-method-setRangeStart' class='name expandable'>setRangeStart</a>( <span class='pre'>start</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Used during drag/shift+downarrow range selection on start. ...</div><div class='long'><p>Used during drag/shift+downarrow range selection on start.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : Number<div class='sub-desc'><p>The start row index of the row drag selection.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});