(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6329ce5c"],{"7cb5":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-record-data-table",{attrs:{headers:t.headers,items:t.records},scopedSlots:t._u([t._l(t.slots,(function(t){return{key:t,fn:function(e){var i=e.header,a=i.text,o=i.appCharCode,s=i.appCharLen,r=i.appHint;return[n("app-tooltip-column-hint",{key:t,attrs:{name:a,charCode:o,charLength:s,hint:r}})]}}}))],null,!0)})},a=[],o=(n("a15b"),n("d81d"),n("2b28")),s=n("d4ab"),r={name:"AppTrailerRecordDataTable",components:{baseRecordDataTable:o["a"],appTooltipColumnHint:s["a"]},props:{items:{default:function(){return[]},type:Array}},computed:{slots:function(){return this.headers.map((function(t){var e=t.value;return"header.".concat(e)}))},records:function(){return this.items.map((function(t){var e=t.record,n=t.row;return{row:n,dataPartition:e.substr(0,1),totalNumber:e.substr(1,6),totalFee:e.substr(7,12),dummy:e.substr(19,101)}}))}},data:function(){return{headers:[{text:"行",value:"row",sortable:!1,width:"2rem",appHint:"FBデータには登場しない"},{text:"データ区分",value:"dataPartition",sortable:!1,width:"4.5rem",appCharCode:"N",appCharLen:1,appHint:["「1」（ヘッダレコード）","「2」（データレコード）","「8」（トレーラレコード）固定値","「9」（エンドレコード）"].join("\n")},{text:"合計件数",value:"totalNumber",sortable:!1,appCharCode:"N",appCharLen:6,appHint:"データ・レコードのレコード数を設定"},{text:"合計金額",value:"totalFee",sortable:!1,appCharCode:"N",appCharLen:12,appHint:"全てのデータ・レコードの振込金額の合計を設定"},{text:"ダミー",value:"dummy",sortable:!1,appCharCode:"N",appCharLen:101,appHint:"スペースを設定"}]}}},c=r,h=n("2877"),u=Object(h["a"])(c,i,a,!1,null,null,null);e["default"]=u.exports},9734:function(t,e,n){},d4ab:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("span",t._g({},i),[t._v(t._s(t.name))])]}}])},[[n("span",{staticStyle:{"margin-right":"0.5rem"}},[t._v("文字種："+t._s(t.charCode))]),n("span",[t._v("文字長："+t._s(t.charLength))]),n("br"),t.isRequired?n("span",[t._v("必須項目")]):n("span",[t._v("任意項目")]),n("br"),n("span",{staticStyle:{"white-space":"pre-wrap","word-wrap":"break-word"}},[t._v(t._s(t.hint))])]],2)},a=[],o=(n("a9e3"),{name:"AppTooltipColumnHint",props:{name:{default:function(){return""},type:String},charCode:{default:function(){return"-"},type:String},charLength:{default:function(){return 0},type:Number},hint:{default:function(){return""},type:String},isRequired:{default:function(){return!0},type:Boolean}}}),s=o,r=n("2877"),c=n("6544"),h=n.n(c),u=n("ade3"),l=(n("9734"),n("4ad4")),p=n("a9ad"),d=n("16b7"),f=n("b848"),v=n("75eb"),m=n("f573"),b=n("f2e7"),g=n("80d2"),y=n("d9bd"),C=n("58df"),w=Object(C["a"])(p["a"],d["a"],f["a"],v["a"],m["a"],b["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String,zIndex:{default:null}},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||i?o=a+e.width/2-n.width/2:(this.left||this.right)&&(o=a+(this.right?e.width:-n.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,n=t.content,i=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=i+(this.bottom?e.height:-n.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+e.height/2-n.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(a+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(g["e"])(this.maxWidth),minWidth:Object(g["e"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(g["o"])(this,"activator",!0)&&Object(y["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=l["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===g["s"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(u["a"])(t,this.contentClass,!0),Object(u["a"])(t,"menuable__content__active",this.isActive),Object(u["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),_=Object(r["a"])(s,i,a,!1,null,null,null);e["a"]=_.exports;h()(_,{VTooltip:w})}}]);
//# sourceMappingURL=chunk-6329ce5c.fb6a7e53.js.map