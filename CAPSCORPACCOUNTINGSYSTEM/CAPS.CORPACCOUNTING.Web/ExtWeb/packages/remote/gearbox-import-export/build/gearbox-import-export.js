Ext.define("Gearbox.data.file.Packet",{mixins:{observable:"Ext.util.Observable"},config:{format:"binary",data:null,binary:null,name:"",extension:"",type:"",size:null},constructor:function(a){this.initConfig(a);if(this.hasData()){this.set(this.getData(),this.getFormat())}this.mixins.observable.constructor.call(this,a);return this.callParent(arguments)},reset:function(){this.setBinary(null);this.setType(null);this.setSize(0);this.setName("")},getReader:function(){var b=this,a=new FileReader();return a},read:function(b,a){return this.readBlob(b,a)},readBlob:function(c,b){this.reset();var d=this,a=this.getReader();a.onload=function(g){var f=g.target.result;d.setBinary(f);if(typeof b==="function"){b(f)}};a.readAsArrayBuffer(c)},setBinary:function(b){var a=0;if(b){if(!this.isBinary(b)){b=new Uint8Array(b)}a=b.length}this.setSize(a);this.binary=b;return this},setText:function(f,e){if(e){this.setType(e)}var d=0,a=f.length,c=new ArrayBuffer(a),b=new Uint8Array(c);for(;d<a;d++){b[d]=f.charCodeAt(d)}this.setBinary(b);return this},setBase64:function(g,f){if(f){this.setType(f)}var e=0,b=window.atob(g),a=b.length,d=new ArrayBuffer(a),c=new Uint8Array(d);for(;e<a;e++){c[e]=b.charCodeAt(e)}this.setBinary(c);return this},set:function(b,c,a){if(!c){c=this.guessFormat(b)}this.setFormat(c);if(a){this.setType(a)}switch(c){case"text":return this.setText(b);case"base64":return this.setBase64(b);default:return this.setBinary(b)}},getText:function(){var b=0,c=this.getBinary(),a=c.length,d="";for(;b<a;b++){d+=String.fromCharCode(c[b])}return d},getBase64:function(){return btoa(this.getText())},getBinary:function(){return this.binary},getBlob:function(a){a=a||this.getType();var b=this.getBinary();return new Blob([b.buffer],{type:a})},save:function(){this.saveAs(this.getName())},saveAs:function(a){saveAs(this.getBlob(),a)},get:function(d,a){var b=this,c=b.data;d=d||b.guessFormat(c);a=a||b.getType();switch(d){case"base64":return b.getBase64();case"binary":return b.getBinary(a);default:return b.getText()}},getType:function(){var a=this.type;if(a){return a}var b=this.extension;switch(b){case"csv":return"text/csv";case"xls":return"application/vnd.ms-excel";case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";default:return"text/plain"}},isText:function(a){return !this.isBinary(a)&&!this.isBase64(a)},isBinary:function(a){return(a instanceof Uint8Array||a instanceof Uint16Array)},isBase64:function(b){var a=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$");return a.test(b)},hasData:function(){return(this.data&&this.data.length)},guessFormat:function(a){if(this.isBinary(a)){return"binary"}else{if(this.isBase64(a)){return"base64"}}return"text"}});Ext.define("Gearbox.data.file.reader.Reader",{extend:"Ext.data.reader.Reader",alternateClassName:["Gearbox.data.file.Reader"],alias:"reader.file",idProperty:null,totalProperty:null,successProperty:null,format:"binary",mapping:null,rawData:null,rawHeaders:null,rawHeadersFuzzySet:null,matchScore:0.5,autoCreateModelFromHeader:false,autoGuessMapping:true,setModel:function(b,c,a){this.callParent(arguments);if(!a){this.setMapping(this.getRawMapping())}},getRawMapping:function(){var f=this,e=f.getModel()||{},b=e.prototype||{},c=b.fields||{},a=c.items||[],d={};Ext.Array.each(a,function(j,i){var g=j.name,h=j.importMapping||j.mapping||null;if(Ext.Array.indexOf(["id"],g)!==-1){return}if(Ext.Array.indexOf(["hasMany"],j.type.type)!==-1){return}if(!j.persist){return}d[g]=h});return d},getMapping:function(){return this.mapping},setMapping:function(d,b){var e=this,c=this.getModel(),g,f=e.mapping||(e.mapping={});if(Ext.Object.equals(d,f)){return}Ext.Object.each(d,function(h,i){g=e.findField(c,h);if(!g){throw new Error("Can't set mapping for unknown field: "+h)}if(typeof i==="string"){i={source:i}}else{if(i===null){i={source:g.mapping||g.name}}}f[h]=i});this.mapping=f;if(!b){var a=this.getMappedRecords();this.onMappingChange(d,a)}return this.mapping},onMappingChange:function(b,a){this.fireEvent("mappingchange",this,b,a)},findField:function(a,b){return a.getField(b)},guessMapping:function(h,a){var d=this,c=d.getRawMapping(),g={},b=d.getModel(),f=d.importStore,e=d.rawHeadersFuzzySet;Ext.Object.each(c,function(q,t){var o;if(t!==null&&typeof t==="object"&&t.value){o=t}else{var n;if(typeof t==="string"){n=t}else{if(t!==null&&typeof t==="object"&&t.source){n=t.source}}var r=Gearbox.l10n("node",b.entityName,"field",q);var i=d.findField(b,q),p=d.getModelHeader&&d.getModelHeader(q),m=Ext.Array.filter([r,q,n,p],function(u){return u!==null&&Ext.isDefined(u)}),l=[];if(e){Ext.each(m,function(v){if(v){var u=e.get(v);if(u){l=l.concat(u)}}})}Ext.Array.sort(l,function(w,v){var u=w[0],x=v[0];return u<x?-1:(x<u?1:0)});var k=l.pop();if(k&&k.length===2){var j=k[0],s=k[1];if(j>d.matchScore){o={source:s}}}if(!o&&i.defaultValue){o={value:i.defaultValue}}}g[q]=o});if(!h){g=d.setMapping(g,a)}return g},getMappedRecords:function(){var c=this,e=c.rawData,d=c.getData(e),a=c.getRoot(d),b=[];if(a){b=c.extractData(a)}return b},buildExtractors:Ext.emptyFn,getIdProperty:Ext.emptyFn,getId:Ext.emptyFn,buildRecordDataExtractor:Ext.emptyFn,createFieldAccessExpression:Ext.emptyFn,getSuccess:function(a){return a.length>0},getCount:function(a){return a.length},getTotal:function(a){return a.length},convertRecordData:function(c,e,b){var d=this,a=d.getModel().getFields();Ext.Array.each(a,function(h,f){var g=h.name;if(g==="id"){return}c[g]=this.readField(h,b,g)},this)},readRecords:function(f){var b=Ext.Array.from(f)[0]||{},e=this.proxy||{},c=e.store||{};this.rawData=f;this.rawHeaders=Ext.Object.getKeys(b);this.rawHeadersFuzzySet=new window.FuzzySet(this.rawHeaders);if(this.autoCreateModelFromHeader||e.autoCreateModelFromHeader){var a=Ext.Array.map(this.rawHeaders,function(g){return{name:g}});var d=Ext.define("Ext.data.Store.ImplicitModel-"+Ext.id(),{extend:"Ext.data.Model",fields:a});this.model=d;e.model=d;if(e.store){e.store.model=d}}if(this.autoGuessMapping||(typeof this.autoGuessMapping==="undefined"&&c.autoGuessMapping)){this.guessMapping()}return this.callParent(arguments)},readPacket:function(a){return this.read(a.getText(),{type:"binary"})},defaultRecordCreator:function(){var a=this.callParent(arguments);delete a.data.id;return a},extractModelData:function(d,b){var e=this,c=this.getMapping(),g=this.getModel(),a=g.getFields(),f={};Ext.Array.each(a,function(i){var h=i.name;f[h]=e.readField(i,d,h)});return f},readField:function(g,b,d){d=d||g.name;var c=this.getMapping(),e=c[d],f;if(e&&typeof e!=="object"){e={source:e}}var h=Ext.Object.getKeys(e)[0],a=Ext.Object.getValues(e)[0];if(h==="value"){f=a}else{f=b[a||d]}if(typeof f==="undefined"||f===null){if(g.defaultValue){f=g.defaultValue}}return f}});Ext.define("Gearbox.data.file.reader.Csv",{extend:"Gearbox.data.file.reader.Reader",alias:"reader.file.csv",format:"text",lineEnding:null,delimiter:null,lineEndings:["\r\n","\r","\n"],delimiters:[",",";","\t"],read:function(d){var c=this.lineEnding||this.guessLineEnding(d),a=this.delimiter||this.guessDelimiter(d,c),g,b;d=this.alwaysTrailingLineEnding(d,c);try{d=window.CSV.parse(d,{header:true,line:c,delimiter:a});return this.callParent(arguments)}catch(f){b=new Ext.data.ResultSet({total:0,count:0,records:[],success:false,message:f.message});this.fireEvent("exception",this,d,b);console.error("Unable to parse the provided CSV: "+f.message);return b}},guessLineEnding:function(g){var b=this.lineEndings,e=new RegExp("("+b.join("|")+")","g"),f=g.match(e),d=0,a=0,c=Ext.Array.map(b,function(j,h){var i=0;Ext.Array.forEach(f,function(k){if(j===k){i++}});if(i>a){d=h;a=i}return i});return b[d]},guessDelimiter:function(d,c){var e=this.delimiters,g=Ext.Array.map(e,function(j){return new RegExp(j,"g")}),h=[],i=d.split(c);Ext.each(i,function(j){var k=Ext.Array.map(g,function(l){return(j.match(l)||[]).length});if(Ext.Array.max(k)>0&&Ext.Array.equals(h,k)){return false}h=k});var f=Ext.Array.max(h),b=Ext.Array.indexOf(h,f),a=e[b];return a},alwaysTrailingLineEnding:function(c,b){var a=b.length;if(c.slice(-a)!==b){c+=b}return c}});Ext.define("Gearbox.data.file.reader.Xls",{extend:"Gearbox.data.file.reader.Reader",alias:"reader.file.xls",parserFnName:"XLS",read:function(e,b){Ext.applyIf(b||{},this.readerConfig||{});b=Ext.applyIf(b,{type:this.format||this.proxy.format||"binary"});var c=this,g=window[c.parserFnName],d=g.read(e,b),a=[],f=true;d.SheetNames.forEach(function(h){var i=g.utils.sheet_to_row_object_array(d.Sheets[h]);if(i.length>0){a=a.concat(i)}});return this.callParent([a])}});Ext.define("Gearbox.data.file.reader.Xlsx",{extend:"Gearbox.data.file.reader.Xls",alias:"reader.file.xlsx",parserFnName:"XLSX"});Ext.define("Gearbox.data.file.writer.Writer",{extend:"Ext.data.writer.Writer",alternateClassName:["Gearbox.data.file.Writer"],alias:"writer.file",config:{nameProperty:"mapping",writeAllFields:true,writeRecordId:false},model:null,title:null,setTitle:function(a){this.title=a.substring(0,a.lastIndexOf("."))},getTitle:function(){return this.title||""},getRawColumns:function(c){var b=Ext.isArray(c)&&c.length>0?c[0]:null,a=[];if(b){Ext.Array.each(b,function(e,d){a.push({dataIndex:d,text:d})})}return a},write:function(){return this.callParent(arguments)},getRecordData:function(a,b){var c=Ext.clone(a.data);delete c.id;return c}});Ext.define("Gearbox.data.file.writer.Csv",{extend:"Gearbox.data.file.writer.Writer",alias:"writer.file.csv",writeRecords:function(d,e){var b=d.operation||d.getOperation(),c=b.batch||b.getBatch(),f=c.packet,g=(c.title||"Data")+".csv",a=window.CSV.encode(e,{header:true});this.setTitle(g);c.packet.setText(a);c.packet.setName(g);return d},writeValue:function(b,c){var a=c[this.nameProperty];if(a===null){a=c.name}if(typeof b[a]==="undefined"||b[a]===null){b[a]=""}}});Ext.define("Gearbox.data.file.writer.Xlsx",{extend:"Gearbox.data.file.writer.Writer",alias:"writer.file.xlsx",writeRecords:function(d,f){var a=d.operation||d.getOperation(),b=a.batch||a.getBatch(),e,g=(b.title||"Data")+".xlsx",c=b.columns||this.getRawColumns(f);this.setTitle(g);e={SheetNames:[this.getTitle()],Sheets:{}};e.Sheets[this.getTitle()]=this.createSheet(c,f);var h=window.XLSX.write(e,{type:"binary"});b.packet.setText(h);b.packet.setName(g);return d},writeValue:function(h,c,e,b,d){var f=c.renderer;if(c.xtype!=="checkcolumn"&&f&&!Ext.isDate(h)){var a={tdClass:""},g=c.ownerCt.view;h=f.call(c,h,a,e,b,d,g?g.dataSource:null,g)}if(c.xtype==="templatecolumn"){h=String(h).replace(/<\/?[^>]+\>/g,"")}var i={v:h};if(typeof i.v==="number"){i.t="n"}else{if(typeof i.v==="boolean"){i.t="b"}else{if(Ext.isDate(h)){i.t="n";i.z=window.XLSX.SSF._table[14];i.v=this.convertDate(i.v)}else{i.t="s";if(i.v===null){i.v=""}else{i.v=String(i.v)}}}}return i},createSheet:function(c,e){var d=this,a={};var b=[];Ext.Array.each(c,function(f){if(!f.hidden&&f.dataIndex&&f.xtype!=="actioncolumn"&&f.xtype!=="widgetcolumn"&&f.xtype!=="rownumberer"){b[f.getVisibleIndex()]=f}});b=Ext.Object.getValues(b);Ext.Array.each(b,function(f,g){a[window.XLSX.utils.encode_cell({c:g,r:0})]={t:"s",v:f.text}});Ext.Array.each(e,function(f,g){Ext.Array.each(b,function(h,j){var i=f.get(h.dataIndex);a[window.XLSX.utils.encode_cell({c:j,r:g+1})]=d.writeValue(i,h,f,g,j)})});a["!ref"]=window.XLSX.utils.encode_range({s:{c:0,r:0},e:{c:b.length-1,r:e.length}});return a},convertDate:function(b,a){if(a){b+=1462}var c=Date.parse(b);return(c-new Date(Date.UTC(1899,11,30)))/(24*60*60*1000)},getRecordData:function(a,b){return a}});Ext.define("Gearbox.data.file.Proxy",{extend:"Ext.data.proxy.Memory",alias:"proxy.file",requires:["Gearbox.data.file.Packet","Gearbox.data.file.reader.Reader","Gearbox.data.file.reader.Csv","Gearbox.data.file.reader.Xls","Gearbox.data.file.reader.Xlsx","Gearbox.data.file.writer.Writer","Gearbox.data.file.writer.Csv","Gearbox.data.file.writer.Xlsx"],defaultReaderType:"file",defaultWriterType:"file",reader:"file",writer:"file",isSynchronous:false,binary:true,format:"binary",packet:null,autoCreateModelFromHeader:false,read:function(a,d,b){var c=this;a.packet=c.getPacket();if(a.config){if(a.config.blob){a.blob=a.config.blob}if(a.config.url){a.url=a.config.url}if(a.config.data){a.data=a.config.data}}if(a.blob){return c.readBlob.apply(c,arguments)}else{if(a.url){return c.readUrl.apply(c,arguments)}else{if(a.data){return c.readData.apply(c,arguments)}else{if(c.data){a.data=c.data;a.format=c.format||"binary";return c.readData.apply(c,arguments)}}}}console.error("Read operation without blob, url or data");return false},readBlob:function(b){var d=this,c=arguments,a=b.blob,e=b.packet;delete b.blob;e.readBlob(a,function(){d.readPacket.apply(d,c)})},readUrl:function(a){throw new Error("Not yet implemented.")},readData:function(a,h,c){var d=this,b=arguments,e=a.data,g=a.format,f=a.packet;delete a.data;delete a.format;f.set(e,g);return d.readPacket.apply(d,b)},readPacket:function(b,f,d){var e=this,a=e.getReader();var c=a.readPacket(b.packet);b.setResultSet(c);this.finishOperation(b);Ext.callback(f,d||e,[b])},create:function(a,d,b){var c=new Ext.data.Request({operation:a,callback:d,scope:b});this.getWriter().write(c);this.finishOperation(a);Ext.callback(d,b||this,[a])},batch:function(a){a.batch=new Ext.data.Batch({proxy:this});a.batch.packet=Ext.create("Gearbox.data.file.Packet");a.batch.title=a.title;a.batch.columns=a.columns;return this.callParent(arguments)},update:function(a){this.finishOperation(a)},erase:function(a){this.finishOperation(a)},updateModel:function(a){this.callParent(arguments);this.getReader().setModel(a);this.fireEvent("modelchange",this,this.model)},applyReader:function(a){a=this.callParent(arguments);a.setModel(this.getModel());return a},updateReader:function(a){this.callParent(arguments);if(a&&a.onMappingChange){a.onMappingChange=Ext.Function.createSequence(a.onMappingChange,this.onMappingChange,this)}},onMappingChange:function(b,a){this.fireEvent("mappingchange",this,b,a)},getPacket:function(){if(!this.packet){this.setPacket(Ext.create("Gearbox.data.file.Packet"))}return this.packet},setPacket:function(a){this.packet=a;return this},getMappedRecords:function(){return this.getReader().getMappedRecords()},getMapping:function(){return this.getReader().getMapping()},setMapping:function(b,a){return this.getReader().setMapping(b,a)},guessMapping:function(){return this.getReader().guessMapping()}});Ext.define("Gearbox.data.file.Store",{extend:"Ext.data.Store",alias:"store.file",mixins:["Ext.data.Store"],requires:["Gearbox.data.file.Proxy"],defaultProxyType:"file",proxy:"file",mapping:null,autoGuessMapping:true,constructor:function(a){a=a||{};this.callParent(arguments);if(a.mapping){this.getProxy().setMapping(a.model)}if(a.model){this.setModel(a.model)}if(a.data){this.loadRawData(a.data,false,a.format||"binary")}if(this.rawData){this.loadRawData(this.rawData,false,a.format||"binary")}},loadRawData:function(b,a,c){this.getProxy().getReader().format=c;this.rawData=b;return this.callParent(arguments)},getNewRecords:function(){return this.data.items},updateProxy:function(a){if(a){a.on("mappingchange",this.onMappingChange,this)}},updateModel:function(b,a){this.model=b;if(this.getProxy()){this.getProxy().setModel(b)}this.fireEvent("modelchange",this,b)},getMappedRecords:function(){return this.getProxy().getMappedRecords()},getMapping:function(){var a=this.getProxy();return a.getMapping.apply(a,arguments)},setMapping:function(c,b){var a=this.getProxy().setMapping(c,b);if(b){var d=this.getMappedRecords();this.loadData(d)}return a},guessMapping:function(){var a=this.getProxy();return a.guessMapping.apply(a,arguments)},onMappingChange:function(c,b,a){this.loadData(a);this.fireEvent("mappingchange",this,b,a)},bindDrop:function(b){var a=this,c=b.getEl().dom;c.ondrop=Ext.bind(function(e,d){d.preventDefault();a.onDrop(e,d.dataTransfer.files)},this,[b],0);this.onDragBind(b.getMaskTarget())},onDragBind:function(b){var a=null;document.ondragenter=function(c){a=c.toElement;return false}.bind(this);document.ondragleave=function(c){if(a!==null){a=null;return}if(b.isMasked()){b.unmask()}return false}.bind(this);document.ondragover=function(){if(!b.isMasked()){b.mask("Drag and drop files here to upload","")}return false}.bind(this);b.on("destroy",this.onDragUnbind,this)},onDragUnbind:function(){document.ondragenter=null;document.ondragleave=null;document.ondragover=null},destroy:function(){this.onDragUnbind()},onDrop:function(b,a){this.loadFiles(a);b.unmask()},loadFiles:function(a){if(a.length){this.loadFile(a[0])}},loadFile:function(b){var a=b.name,d="csv",c=a.lastIndexOf(".");if(c!==-1){d=a.substring(c+1)}this.getProxy().setReader("file."+d);this.load({blob:b,format:"binary"})},exportFile:function(b,a,c){if(typeof c!=="undefined"){c="file."+c}else{c=this.getProxy().getReader().type}a=a||b.title;this.getProxy().setWriter(c);this.sync({title:a,columns:b.columns,callback:function(d){d.packet.save()}})}});