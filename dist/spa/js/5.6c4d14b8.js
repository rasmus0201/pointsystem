(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 q-mb-sm"},[a("q-badge",{staticClass:"q-mr-sm",attrs:{color:"positive",align:"middle"}},[t._v("\n                Accepteret: "+t._s(t.acceptedCount)+"\n            ")]),a("q-badge",{attrs:{color:"negative",align:"middle"}},[t._v("\n                Ikke-accepteret: "+t._s(t.deniedCount)+"\n            ")])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("calendar",{staticClass:"full-width",attrs:{date:t.currentDate},on:{updated:t.changeDate}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-card",{staticClass:" full-width"},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v(t._s(t.item.title))]),a("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.item.description))])]),a("q-separator"),a("q-card-actions",[a("q-btn",{attrs:{push:"",color:"accepted"===t.item.state?"positive":"white"},on:{click:function(e){return t.updateItem("accepted")}}},[t._v("👍")]),a("q-btn",{attrs:{push:"",color:"denied"===t.item.state?"negative":"white"},on:{click:function(e){return t.updateItem("denied")}}},[t._v("👎")])],1)],1)],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 q-mt-lg"},[a("q-btn",{attrs:{color:"warning"},on:{click:function(e){return t.resetItems()}}},[t._v("Nulstil alt")])],1)])])},n=[],i=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),s=a.n(i),c=a("bd4c"),o=a("2f62"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-date",{staticClass:"q-mb-md",attrs:{minimal:"","first-day-of-week":"1"},model:{value:t.modelDate,callback:function(e){t.modelDate=e},expression:"modelDate"}})},d=[],l=(a("c5f6"),{props:{date:{type:[String,Number,Date],required:!0}},data:function(){return{modelDate:null}},mounted:function(){this.modelDate=c["b"].formatDate(this.date,"YYYY/MM/DD")},watch:{modelDate:function(t){this.$emit("updated",t)}}}),m=l,p=a("2877"),f=a("eebe"),h=a.n(f),b=a("52ee"),D=Object(p["a"])(m,u,d,!1,null,null,null),v=D.exports;function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function w(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){s()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}h()(D,"components",{QDate:b["a"]});var C={name:"PageIndex",components:{calendar:v},data:function(){return{currentDate:c["b"].formatDate(Date.now(),"YYYY-MM-DD"),recompute:Math.random()}},computed:w({},Object(o["c"])("items",{items:function(t){return t.items}}),{item:function(){this.recompute;return this.items.hasOwnProperty(this.currentDate)?this.items[this.currentDate]:this.getDefaultItem(this.currentDate)},acceptedCount:function(){this.recompute;var t=0;for(var e in this.items)"accepted"===this.items[e].state&&t++;return t},deniedCount:function(){this.recompute;var t=0;for(var e in this.items)"denied"===this.items[e].state&&t++;return t}}),methods:w({},Object(o["b"])("items",["update","reset"]),{getDefaultItem:function(t){var e=c["b"].extractDate(t,"YYYY-MM-DD");return{title:"Point for "+c["b"].formatDate(e,"DD/MM-YYYY"),description:"Point ikke givet endnu",state:null,key:t}},changeDate:function(t){this.currentDate=c["b"].formatDate(t,"YYYY-MM-DD")},refresh:function(){this.recompute=Math.random()},resetItems:function(){this.reset(),this.refresh()},updateItem:function(t){var e={};e.title=this.item.title,e.description="accepted"===t?"Point accepteret":"Point ikke accepteret",e.state=t,e.key=this.currentDate,this.update(e),this.refresh()}})},O=C,Y=a("9989"),q=a("58a8"),k=a("f09f"),y=a("a370"),j=a("eb85"),P=a("4b7e"),_=a("9c40"),M=Object(p["a"])(O,r,n,!1,null,null,null);e["default"]=M.exports;h()(M,"components",{QPage:Y["a"],QBadge:q["a"],QCard:k["a"],QCardSection:y["a"],QSeparator:j["a"],QCardActions:P["a"],QBtn:_["a"]})}}]);