(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da6f7"],{"6c1e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-record-data-table",{attrs:{headers:t.headers,items:t.records}})},s=[],n=(a("d81d"),a("2b28")),o={name:"AppDataRecordDataTable",components:{baseRecordDataTable:n["a"]},props:{items:{default:function(){return[]},type:Array}},computed:{records:function(){return this.items.map((function(t){var e=t.record,a=t.row;return{row:a,dataPartition:e.substr(0,1),destinationBankNumber:e.substr(1,4),destinationBankName:e.substr(5,15),destinationBranchNumber:e.substr(20,3),destinationBranchName:e.substr(23,15),clearingHouseNumber:e.substr(38,4),depositItem:e.substr(42,1),accountNumber:e.substr(43,7),beneficiaryName:e.substr(50,30),transferAmountOfMoney:e.substr(80,10),newCode:e.substr(90,1),EDIInformation:e.substr(91,20),transferDesignationCategory:e.substr(111,1),identificationdisplay:e.substr(112,1),dummy:e.substr(113,7)}}))}},data:function(){return{headers:[{text:"行",value:"row",sortable:!1,width:"2rem"},{text:"データ区分",value:"dataPartition",sortable:!1,width:"4.5rem"},{text:"被仕向銀行番号",value:"destinationBankNumber",sortable:!1},{text:"被仕向銀行名",value:"destinationBankName",sortable:!1},{text:"被仕向支店番号",value:"destinationBranchNumber",sortable:!1},{text:"被仕向支店名",value:"destinationBranchName",sortable:!1},{text:"手形交換所番号 ",value:"clearingHouseNumber",sortable:!1},{text:"預金種目",value:"depositItem",sortable:!1},{text:"口座番号",value:"accountNumber",sortable:!1},{text:"受取人名",value:"beneficiaryName",sortable:!1},{text:"振込金額",value:"transferAmountOfMoney",sortable:!1},{text:"新規コード",value:"newCode",sortable:!1},{text:"EDI情報",value:"EDIInformation",sortable:!1},{text:"振込指定区分",value:"transferDesignationCategory",sortable:!1},{text:"識別表示",value:"identificationdisplay",sortable:!1},{text:"ダミー",value:"dummy",sortable:!1}]}}},u=o,i=a("2877"),b=Object(i["a"])(u,r,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0da6f7.92717876.js.map