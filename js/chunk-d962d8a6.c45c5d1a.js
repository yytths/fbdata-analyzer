(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d962d8a6"],{9734:function(t,e,a){},d4ab:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("span",t._g({},n),[t._v(t._s(t.name))])]}}])},[[a("span",{staticStyle:{"margin-right":"0.5rem"}},[t._v("文字種："+t._s(t.charCode))]),a("span",[t._v("文字長："+t._s(t.charLength))]),a("br"),t.isRequired?a("span",[t._v("必須項目")]):a("span",[t._v("任意項目")]),a("br"),a("span",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(t.hint))])]],2)},i=[],o=(a("a9e3"),{name:"AppTooltipColumnHint",props:{name:{default:function(){return""},type:String},charCode:{default:function(){return"-"},type:String},charLength:{default:function(){return 0},type:Number},hint:{default:function(){return""},type:String},isRequired:{default:function(){return!0},type:Boolean}}}),r=o,s=a("2877"),p=a("6544"),u=a.n(p),h=a("ade3"),c=(a("9734"),a("4ad4")),l=a("a9ad"),d=a("16b7"),f=a("b848"),b=a("75eb"),v=a("f573"),m=a("f2e7"),C=a("80d2"),g=a("d9bd"),y=a("58df"),x=Object(y["a"])(l["a"],d["a"],f["a"],b["a"],v["a"],m["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||n?o=i+e.width/2-a.width/2:(this.left||this.right)&&(o=i+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,n=!1!==this.attach?e.offsetTop:e.top,i=0;return this.top||this.bottom?i=n+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=n+e.height/2-a.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(i+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(C["e"])(this.maxWidth),minWidth:Object(C["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(C["o"])(this,"activator",!0)&&Object(g["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=c["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===C["s"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(h["a"])(t,this.contentClass,!0),Object(h["a"])(t,"menuable__content__active",this.isActive),Object(h["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),w=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=w.exports;u()(w,{VTooltip:x})},d745:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-record-data-table",{attrs:{headers:t.headers,items:t.records},scopedSlots:t._u([t._l(t.slots,(function(t){return{key:t,fn:function(e){var n=e.header,i=n.text,o=n.appCharCode,r=n.appCharLen,s=n.appHint,p=n.appRequired;return[a("app-tooltip-column-hint",{key:t,attrs:{name:i,charCode:o,charLength:r,hint:s,isRequired:p}})]}}}))],null,!0)})},i=[],o=(a("a15b"),a("d81d"),a("2b28")),r=a("d4ab"),s={name:"AppHeaderRecordDataTable",components:{baseRecordDataTable:o["a"],appTooltipColumnHint:r["a"]},props:{items:{default:function(){return[]},type:Array}},computed:{slots:function(){return this.headers.map((function(t){var e=t.value;return"header.".concat(e)}))},records:function(){return this.items.map((function(t){var e=t.record,a=t.row;return{row:a,dataPartition:e.substr(0,1),typeCode:e.substr(1,2),codePartition:e.substr(3,1),transferRequesterCode:e.substr(4,10),transferRequesterName:e.substr(14,40),tradingDay:e.substr(54,4),destinationBankNumber:e.substr(58,4),destinationBankName:e.substr(62,15),destinationBranchNumber:e.substr(77,3),destinationBranchName:e.substr(80,15),depositItemClient:e.substr(95,1),accountNumberClient:e.substr(96,7),dummy:e.substr(103,17)}}))}},data:function(){return{headers:[{text:"行",value:"row",sortable:!1,width:"2rem",appHint:"FBデータには登場しない"},{text:"データ区分",value:"dataPartition",sortable:!1,width:"4.5rem",appCharCode:"N",appCharLen:1,appHint:["「1」（ヘッダレコード）固定値","「2」（データレコード）","「8」（トレーラレコード）","「9」（エンドレコード）"].join("\n")},{text:"種別コード",value:"typeCode",sortable:!1,appCharCode:"N",appCharLen:2,appHint:"「21」(総合振込) 固定値"},{text:"コード区分",value:"codePartition",sortable:!1,appCharCode:"N",appCharLen:1,appHint:["「0」（JIS）","「1」（EBCDIC）"].join("\n")},{text:"振込依頼人コード",value:"transferRequesterCode",sortable:!1,appCharCode:"N",appCharLen:10,appHint:"取引企業コード"},{text:"振込依頼人名",value:"transferRequesterName",sortable:!1,appCharCode:"C",appCharLen:40,appHint:""},{text:"取組日",value:"tradingDay",sortable:!1,appCharCode:"N",appCharLen:4,appHint:["振込日を表す","MMDD（月-日）"].join("\n")},{text:"仕向銀行番号",value:"destinationBankNumber",sortable:!1,appCharCode:"N",appCharLen:4,appHint:"統一金融機関番号"},{text:"仕向銀行名",value:"destinationBankName",sortable:!1,appCharCode:"C",appCharLen:15,appHint:"",appRequired:!1},{text:"仕向支店番号",value:"destinationBranchNumber",sortable:!1,appCharCode:"N",appCharLen:3,appHint:"統一店番号"},{text:"仕向支店名",value:"destinationBranchName",sortable:!1,appCharCode:"C",appCharLen:15,appHint:"",appRequired:!1},{text:"預金種目（依頼人）",value:"depositItemClient",sortable:!1,appCharCode:"N",appCharLen:1,appHint:["「1」(普通預金)","「2」(当座預金)","「9」(その他)"].join("\n"),appRequired:!1},{text:"口座番号（依頼人）",value:"accountNumberClient",sortable:!1,appCharCode:"N",appCharLen:7,appHint:"",appRequired:!1},{text:"ダミー",value:"dummy",sortable:!1,appCharCode:"C",appCharLen:17,appHint:"スペースを設定"}]}}},p=s,u=a("2877"),h=Object(u["a"])(p,n,i,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-d962d8a6.c45c5d1a.js.map