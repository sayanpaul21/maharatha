Ext.data.JsonP.Chaching_model_base_TransactionHeaderModel({"tagname":"class","name":"Chaching.model.base.TransactionHeaderModel","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"TransactionHeaderModel.js","href":"TransactionHeaderModel.html#Chaching-model-base-TransactionHeaderModel"}],"aliases":{},"alternateClassNames":[],"extends":"Chaching.model.base.BaseModel","mixins":[],"requires":[],"uses":[],"members":[{"name":"searchEntityName","tagname":"cfg","owner":"Chaching.model.base.TransactionHeaderModel","id":"cfg-searchEntityName","meta":{"private":true}},{"name":"fields","tagname":"property","owner":"Chaching.model.base.TransactionHeaderModel","id":"property-fields","meta":{"private":true}},{"name":"schema","tagname":"property","owner":"Chaching.model.base.BaseModel","id":"property-schema","meta":{"private":true}},{"name":"getSearchEntityName","tagname":"method","owner":"Chaching.model.base.TransactionHeaderModel","id":"method-getSearchEntityName","meta":{}},{"name":"setSearchEntityName","tagname":"method","owner":"Chaching.model.base.TransactionHeaderModel","id":"method-setSearchEntityName","meta":{}}],"code_type":"ext_define","id":"class-Chaching.model.base.TransactionHeaderModel","component":false,"superclasses":["Ext.data.Model","Chaching.model.base.BaseModel"],"subclasses":["Chaching.model.financials.journals.JournalModel","Chaching.model.payables.invoices.AccountsPayableModel","Chaching.model.purchaseorders.entry.PurchaseOrderModel"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><a href='#!/api/Chaching.model.base.BaseModel' rel='Chaching.model.base.BaseModel' class='docClass'>Chaching.model.base.BaseModel</a><div class='subclass '><strong>Chaching.model.base.TransactionHeaderModel</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Chaching.model.financials.journals.JournalModel' rel='Chaching.model.financials.journals.JournalModel' class='docClass'>Chaching.model.financials.journals.JournalModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.payables.invoices.AccountsPayableModel' rel='Chaching.model.payables.invoices.AccountsPayableModel' class='docClass'>Chaching.model.payables.invoices.AccountsPayableModel</a></div><div class='dependency'><a href='#!/api/Chaching.model.purchaseorders.entry.PurchaseOrderModel' rel='Chaching.model.purchaseorders.entry.PurchaseOrderModel' class='docClass'>Chaching.model.purchaseorders.entry.PurchaseOrderModel</a></div><h4>Files</h4><div class='dependency'><a href='source/TransactionHeaderModel.html#Chaching-model-base-TransactionHeaderModel' target='_blank'>TransactionHeaderModel.js</a></div></pre><div class='doc-contents'><p>DataModel to represent entity schema for Transaction Headers.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-searchEntityName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.TransactionHeaderModel'>Chaching.model.base.TransactionHeaderModel</span><br/><a href='source/TransactionHeaderModel.html#Chaching-model-base-TransactionHeaderModel-cfg-searchEntityName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.TransactionHeaderModel-cfg-searchEntityName' class='name expandable'>searchEntityName</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;&#39;</code></p><p>Overrides: <a href=\"#!/api/Chaching.model.base.BaseModel-cfg-searchEntityName\" rel=\"Chaching.model.base.BaseModel-cfg-searchEntityName\" class=\"docClass\">Chaching.model.base.BaseModel.searchEntityName</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fields' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.TransactionHeaderModel'>Chaching.model.base.TransactionHeaderModel</span><br/><a href='source/TransactionHeaderModel.html#Chaching-model-base-TransactionHeaderModel-property-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.TransactionHeaderModel-property-fields' class='name expandable'>fields</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href=\"#!/api/Chaching.model.base.BaseModel-property-fields\" rel=\"Chaching.model.base.BaseModel-property-fields\" class=\"docClass\">Chaching.model.base.BaseModel.fields</a></p></div></div></div><div id='property-schema' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Chaching.model.base.BaseModel' rel='Chaching.model.base.BaseModel' class='defined-in docClass'>Chaching.model.base.BaseModel</a><br/><a href='source/BaseModel.html#Chaching-model-base-BaseModel-property-schema' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.BaseModel-property-schema' class='name expandable'>schema</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{namespace: &#39;Chaching.model&#39;}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getSearchEntityName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.TransactionHeaderModel'>Chaching.model.base.TransactionHeaderModel</span><br/><a href='source/TransactionHeaderModel.html#Chaching-model-base-TransactionHeaderModel-cfg-searchEntityName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.TransactionHeaderModel-method-getSearchEntityName' class='name expandable'>getSearchEntityName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of searchEntityName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Chaching.model.base.TransactionHeaderModel-cfg-searchEntityName\" rel=\"Chaching.model.base.TransactionHeaderModel-cfg-searchEntityName\" class=\"docClass\">searchEntityName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Chaching.model.base.BaseModel-method-getSearchEntityName\" rel=\"Chaching.model.base.BaseModel-method-getSearchEntityName\" class=\"docClass\">Chaching.model.base.BaseModel.getSearchEntityName</a></p></div></div></div><div id='method-setSearchEntityName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Chaching.model.base.TransactionHeaderModel'>Chaching.model.base.TransactionHeaderModel</span><br/><a href='source/TransactionHeaderModel.html#Chaching-model-base-TransactionHeaderModel-cfg-searchEntityName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Chaching.model.base.TransactionHeaderModel-method-setSearchEntityName' class='name expandable'>setSearchEntityName</a>( <span class='pre'>searchEntityName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of searchEntityName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Chaching.model.base.TransactionHeaderModel-cfg-searchEntityName\" rel=\"Chaching.model.base.TransactionHeaderModel-cfg-searchEntityName\" class=\"docClass\">searchEntityName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>searchEntityName</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Chaching.model.base.BaseModel-method-setSearchEntityName\" rel=\"Chaching.model.base.BaseModel-method-setSearchEntityName\" class=\"docClass\">Chaching.model.base.BaseModel.setSearchEntityName</a></p></div></div></div></div></div></div></div>","meta":{}});