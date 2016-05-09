Ext.data.JsonP.Ext_fx_Manager({"tagname":"class","name":"Ext.fx.Manager","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Manager.js","href":"Manager2.html#Ext-fx-Manager"}],"private":true,"singleton":true,"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":["Ext.fx.Queue"],"requires":["Ext.fx.target.Component","Ext.fx.target.CompositeElement","Ext.fx.target.CompositeElementCSS","Ext.fx.target.CompositeSprite","Ext.fx.target.Element","Ext.fx.target.ElementCSS","Ext.fx.target.Sprite","Ext.util.MixedCollection","Ext.util.TaskRunner"],"uses":[],"members":[{"name":"forceJS","tagname":"cfg","owner":"Ext.fx.Manager","id":"cfg-forceJS","meta":{"protected":true}},{"name":"interval","tagname":"cfg","owner":"Ext.fx.Manager","id":"cfg-interval","meta":{}},{"name":"constructor","tagname":"method","owner":"Ext.fx.Manager","id":"method-constructor","meta":{"private":true}},{"name":"addAnim","tagname":"method","owner":"Ext.fx.Manager","id":"method-addAnim","meta":{}},{"name":"applyAnimAttrs","tagname":"method","owner":"Ext.fx.Manager","id":"method-applyAnimAttrs","meta":{"private":true}},{"name":"applyPendingAttrs","tagname":"method","owner":"Ext.fx.Manager","id":"method-applyPendingAttrs","meta":{"private":true}},{"name":"collectTargetData","tagname":"method","owner":"Ext.fx.Manager","id":"method-collectTargetData","meta":{"private":true}},{"name":"createTarget","tagname":"method","owner":"Ext.fx.Manager","id":"method-createTarget","meta":{"private":true}},{"name":"getActiveAnimation","tagname":"method","owner":"Ext.fx.Queue","id":"method-getActiveAnimation","meta":{"private":true}},{"name":"getFxDefaults","tagname":"method","owner":"Ext.fx.Queue","id":"method-getFxDefaults","meta":{"private":true}},{"name":"getFxQueue","tagname":"method","owner":"Ext.fx.Queue","id":"method-getFxQueue","meta":{"private":true}},{"name":"hasFxBlock","tagname":"method","owner":"Ext.fx.Queue","id":"method-hasFxBlock","meta":{"private":true}},{"name":"jumpToEnd","tagname":"method","owner":"Ext.fx.Manager","id":"method-jumpToEnd","meta":{"private":true}},{"name":"queueFx","tagname":"method","owner":"Ext.fx.Queue","id":"method-queueFx","meta":{"private":true}},{"name":"removeAnim","tagname":"method","owner":"Ext.fx.Manager","id":"method-removeAnim","meta":{}},{"name":"runAnim","tagname":"method","owner":"Ext.fx.Manager","id":"method-runAnim","meta":{"private":true}},{"name":"runner","tagname":"method","owner":"Ext.fx.Manager","id":"method-runner","meta":{"private":true}},{"name":"setFxDefaults","tagname":"method","owner":"Ext.fx.Queue","id":"method-setFxDefaults","meta":{"private":true}},{"name":"startAnim","tagname":"method","owner":"Ext.fx.Manager","id":"method-startAnim","meta":{"private":true}},{"name":"stopAnimation","tagname":"method","owner":"Ext.fx.Queue","id":"method-stopAnimation","meta":{"private":true}}],"code_type":"ext_define","id":"class-Ext.fx.Manager","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.fx.Manager</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='docClass'>Ext.fx.Queue</a></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.fx.target.Component' rel='Ext.fx.target.Component' class='docClass'>Ext.fx.target.Component</a></div><div class='dependency'><a href='#!/api/Ext.fx.target.CompositeElement' rel='Ext.fx.target.CompositeElement' class='docClass'>Ext.fx.target.CompositeElement</a></div><div class='dependency'><a href='#!/api/Ext.fx.target.CompositeElementCSS' rel='Ext.fx.target.CompositeElementCSS' class='docClass'>Ext.fx.target.CompositeElementCSS</a></div><div class='dependency'><a href='#!/api/Ext.fx.target.CompositeSprite' rel='Ext.fx.target.CompositeSprite' class='docClass'>Ext.fx.target.CompositeSprite</a></div><div class='dependency'><a href='#!/api/Ext.fx.target.Element' rel='Ext.fx.target.Element' class='docClass'>Ext.fx.target.Element</a></div><div class='dependency'><a href='#!/api/Ext.fx.target.ElementCSS' rel='Ext.fx.target.ElementCSS' class='docClass'>Ext.fx.target.ElementCSS</a></div><div class='dependency'><a href='#!/api/Ext.fx.target.Sprite' rel='Ext.fx.target.Sprite' class='docClass'>Ext.fx.target.Sprite</a></div><div class='dependency'>Ext.util.MixedCollection</div><div class='dependency'>Ext.util.TaskRunner</div><h4>Files</h4><div class='dependency'><a href='source/Manager2.html#Ext-fx-Manager' target='_blank'>Manager.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Animation Manager which keeps track of all current animations and manages them on a frame by frame basis.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-forceJS' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-cfg-forceJS' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-cfg-forceJS' class='name expandable'>forceJS</a> : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Force the use of JavaScript-based animation instead of CSS3 animation, even when CSS3\nanimation is supported by the b...</div><div class='long'><p>Force the use of JavaScript-based animation instead of CSS3 animation, even when CSS3\nanimation is supported by the browser. This defaults to true currently, as CSS3 animation support is still\nconsidered experimental at this time, and if used should be thouroughly tested across all targeted browsers.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-interval' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-cfg-interval' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-cfg-interval' class='name expandable'>interval</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Default interval in miliseconds to calculate each frame. ...</div><div class='long'><p>Default interval in miliseconds to calculate each frame.  Defaults to 16ms (~60fps)</p>\n<p>Defaults to: <code>16</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.fx.Manager-method-constructor' class='name expandable'>Ext.fx.Manager</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.fx.Manager\" rel=\"Ext.fx.Manager\" class=\"docClass\">Ext.fx.Manager</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.fx.Manager\" rel=\"Ext.fx.Manager\" class=\"docClass\">Ext.fx.Manager</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Ext.fx.Queue-method-constructor\" rel=\"Ext.fx.Queue-method-constructor\" class=\"docClass\">Ext.fx.Queue.constructor</a></p></div></div></div><div id='method-addAnim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-addAnim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-addAnim' class='name expandable'>addAnim</a>( <span class='pre'>anim</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an Anim to the manager. ...</div><div class='long'><p>Add an Anim to the manager. This is done automatically when an Anim instance is created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anim</span> : <a href=\"#!/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyAnimAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-applyAnimAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-applyAnimAttrs' class='name expandable'>applyAnimAttrs</a>( <span class='pre'>target, animWrap</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Duplicating this code for performance reasons. ...</div><div class='long'><p>Duplicating this code for performance reasons. We only want to apply the anims\nto a single animation because we're hitting the end. It may be out of sequence from\nthe runner timer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>animWrap</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-applyPendingAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-applyPendingAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-applyPendingAttrs' class='name expandable'>applyPendingAttrs</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Apply all pending attribute changes to their targets ...</div><div class='long'><p>Apply all pending attribute changes to their targets</p>\n</div></div></div><div id='method-collectTargetData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-collectTargetData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-collectTargetData' class='name expandable'>collectTargetData</a>( <span class='pre'>anim, timestamp, [useCSS3], [isLastFrame]</span> ) : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Collect target attributes for the given Anim object at the given timestamp ...</div><div class='long'><p>Collect target attributes for the given Anim object at the given timestamp</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anim</span> : <a href=\"#!/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a><div class='sub-desc'><p>The Anim instance</p>\n</div></li><li><span class='pre'>timestamp</span> : Number<div class='sub-desc'><p>Time after the anim's start time</p>\n</div></li><li><span class='pre'>useCSS3</span> : Boolean (optional)<div class='sub-desc'><p>True if using CSS3-based animation, else false</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>isLastFrame</span> : Boolean (optional)<div class='sub-desc'><p>True if this is the last frame of animation to be run, else false</p>\n<p>Defaults to: <code>false</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The animation target wrapper object containing the passed animation along with the\nnew attributes to set on the target's element in the next animation frame.</p>\n</div></li></ul></div></div></div><div id='method-createTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-createTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-createTarget' class='name expandable'>createTarget</a>( <span class='pre'>target</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Target Factory ...</div><div class='long'><p>Target Factory</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getActiveAnimation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='defined-in docClass'>Ext.fx.Queue</a><br/><a href='source/Queue.html#Ext-fx-Queue-method-getActiveAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Queue-method-getActiveAnimation' class='name expandable'>getActiveAnimation</a>( <span class='pre'>targetId</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Returns current animation object if the element has any effects actively running or queued, else returns false. ...</div><div class='long'><p>Returns current animation object if the element has any effects actively running or queued, else returns false.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetId</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getFxDefaults' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='defined-in docClass'>Ext.fx.Queue</a><br/><a href='source/Queue.html#Ext-fx-Queue-method-getFxDefaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Queue-method-getFxDefaults' class='name expandable'>getFxDefaults</a>( <span class='pre'>targetId</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetId</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getFxQueue' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='defined-in docClass'>Ext.fx.Queue</a><br/><a href='source/Queue.html#Ext-fx-Queue-method-getFxQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Queue-method-getFxQueue' class='name expandable'>getFxQueue</a>( <span class='pre'>targetId</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Get fx queue for passed target, create if needed. ...</div><div class='long'><p>Get fx queue for passed target, create if needed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetId</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-hasFxBlock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='defined-in docClass'>Ext.fx.Queue</a><br/><a href='source/Queue.html#Ext-fx-Queue-method-hasFxBlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Queue-method-hasFxBlock' class='name expandable'>hasFxBlock</a>( <span class='pre'>targetId</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetId</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-jumpToEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-jumpToEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-jumpToEnd' class='name expandable'>jumpToEnd</a>( <span class='pre'>anim</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anim</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-queueFx' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='defined-in docClass'>Ext.fx.Queue</a><br/><a href='source/Queue.html#Ext-fx-Queue-method-queueFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Queue-method-queueFx' class='name expandable'>queueFx</a>( <span class='pre'>anim</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anim</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-removeAnim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-removeAnim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-removeAnim' class='name expandable'>removeAnim</a>( <span class='pre'>anim</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an Anim from the manager. ...</div><div class='long'><p>Remove an Anim from the manager. This is done automatically when an Anim ends.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anim</span> : <a href=\"#!/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-runAnim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-runAnim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-runAnim' class='name expandable'>runAnim</a>( <span class='pre'>anim, forceEnd</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Run the individual animation for this frame ...</div><div class='long'><p>Run the individual animation for this frame</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anim</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>forceEnd</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-runner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-runner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-runner' class='name expandable'>runner</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Runner function being called each frame ...</div><div class='long'><p>Runner function being called each frame</p>\n</div></div></div><div id='method-setFxDefaults' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='defined-in docClass'>Ext.fx.Queue</a><br/><a href='source/Queue.html#Ext-fx-Queue-method-setFxDefaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Queue-method-setFxDefaults' class='name expandable'>setFxDefaults</a>( <span class='pre'>targetId, obj</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetId</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>obj</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-startAnim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.Manager'>Ext.fx.Manager</span><br/><a href='source/Manager2.html#Ext-fx-Manager-method-startAnim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Manager-method-startAnim' class='name expandable'>startAnim</a>( <span class='pre'>anim</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Start the individual animation (initialization) ...</div><div class='long'><p>Start the individual animation (initialization)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anim</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-stopAnimation' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.fx.Queue' rel='Ext.fx.Queue' class='defined-in docClass'>Ext.fx.Queue</a><br/><a href='source/Queue.html#Ext-fx-Queue-method-stopAnimation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.Queue-method-stopAnimation' class='name expandable'>stopAnimation</a>( <span class='pre'>targetId</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetId</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true}});