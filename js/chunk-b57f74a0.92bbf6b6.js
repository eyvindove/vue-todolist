(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b57f74a0"],{"25f0":function(t,e,n){"use strict";var i=n("6eeb"),r=n("825a"),o=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=s;(l||f)&&i(RegExp.prototype,s,(function(){var t=r(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("69f3"),o=n("7dd0"),a="String Iterator",s=r.set,c=r.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"498a":function(t,e,n){"use strict";var i=n("23e7"),r=n("58a8").trim,o=n("c8d2");i({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},"4df4":function(t,e,n){"use strict";var i=n("0366"),r=n("7b0b"),o=n("9bdd"),a=n("e95a"),s=n("50c4"),c=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,f,d,v,h=r(t),m="function"==typeof this?this:Array,p=arguments.length,_=p>1?arguments[1]:void 0,g=void 0!==_,b=u(h),y=0;if(g&&(_=i(_,p>2?arguments[2]:void 0,2)),void 0==b||m==Array&&a(b))for(e=s(h.length),n=new m(e);e>y;y++)v=g?_(h[y],y):h[y],c(n,y,v);else for(f=b.call(h),d=f.next,n=new m;!(l=d.call(f)).done;y++)v=g?o(f,_,[l.value,y],!0):l.value,c(n,y,v);return n.length=y,n}},5033:function(t,e,n){"use strict";var i=n("60a5"),r=n.n(i);r.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),r=n("5899"),o="["+r+"]",a=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"60a5":function(t,e,n){},6547:function(t,e,n){var i=n("a691"),r=n("1d80"),o=function(t){return function(e,n){var o,a,s=String(r(e)),c=i(n),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"6b75":function(t,e,n){},"7abe":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"title"},[t._v(t._s(t.upperCaseTitle))]),n("main",{staticClass:"main"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputNewTask,expression:"inputNewTask"},{name:"focus",rawName:"v-focus"}],staticClass:"input__input",attrs:{type:"text",placeholder:"Add new todo task..."},domProps:{value:t.inputNewTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNewTask()},input:function(e){e.target.composing||(t.inputNewTask=e.target.value)}}})]),n("div",{staticClass:"tab"},t._l(t.tabList,(function(e){return n("div",{key:e.id,staticClass:"tab__item",class:{active:t.activeTab===e.id},on:{click:function(n){return t.toggleActiveTab(e.id)}}},[n("div",{staticClass:"tab__item__label"},[t._v(t._s(e.label))])])})),0),n("div",{ref:"refList",staticClass:"list",style:{"max-height":t.listMaxHeight+"px"}},[t.showContentListLength?[n("transition-group",{attrs:{name:"flip-list",tag:"div"}},t._l(t.showContentList,(function(e){return n("div",{key:e.id,staticClass:"list__item",class:{completed:e.status},on:{click:function(n){return t.toggleStatus(e.id)}}},[n("div",{staticClass:"list__item__check"},[n("div",{staticClass:"list__item__check__box"})]),n("div",{staticClass:"list__item__text"},[t._v(t._s(e.text))]),n("div",{staticClass:"list__item__edit",on:{click:function(n){return n.stopPropagation(),t.editItemById(e.id)}}},[n("div",{staticClass:"list__item__edit__icon"})]),n("div",{staticClass:"list__item__delete",on:{click:function(n){return n.stopPropagation(),t.deleteContent(e.id)}}},[n("div",{staticClass:"list__item__delete__icon"})])])})),0),n("transition",{attrs:{name:"fade-in-down"}},[t.showRemoveCompleted?n("div",{staticClass:"list__completed--remove",on:{click:t.removeCompletedItems}},[t._v("Remove Completed Items")]):t._e()])]:n("div",{staticClass:"list__empty"},[n("div",{staticClass:"list__empty__icon"}),n("div",{staticClass:"list__empty__text"},[t._v("This "+t._s(t.emptyText)+" list is empty...")])])],2)]),n("div",{staticClass:"nav"},[n("router-link",{staticClass:"nav__button",attrs:{to:"/about"}},[t._v("About TodoList")])],1),n("home-footer")],1)},r=[];n("99af"),n("4de4"),n("7db0"),n("498a");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t){if(Array.isArray(t))return o(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0"),n("25f0");function c(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||s(t)||c(t)||u()}function f(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=c(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,o=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){a=!0,r=t},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(a)throw r}}}}var d=n("5530"),v=n("2f62"),h=n("4360"),m=n("9fe9"),p={name:"home",components:{HomeFooter:m["a"]},data:function(){return{title:"No work, no leisure",tabList:[{id:2,label:"All"},{id:0,label:"To Do"},{id:1,label:"Completed"}],activeTab:2,inputNewTask:"",nextId:0,listMaxHeight:0}},computed:Object(d["a"])({},Object(v["c"])(["contentList"]),{},Object(v["b"])(["filterAllList","filterTodoList","filterCompletedList"]),{upperCaseTitle:function(){return this.title.toUpperCase()},emptyText:function(){var t=this;return this.tabList.find((function(e){return e.id===t.activeTab})).label},showContentList:function(){return 0===this.activeTab?this.filterTodoList:1===this.activeTab?this.filterCompletedList:this.filterAllList},showContentListLength:function(){return this.showContentList.length},showRemoveCompleted:function(){return 1===this.activeTab&&this.showContentListLength}}),watch:{contentList:"setItemToLocalStorage"},created:function(){this.checkLocalStorage(),this.setItemToLocalStorage(),this.checkNextId()},mounted:function(){var t=this;this.computeListMaxHeight(),window.onresize=function(){t.computeListMaxHeight()}},methods:{checkLocalStorage:function(){var t=JSON.parse(window.localStorage.getItem("vue-todo-list:content"));t&&h["a"].commit("SET_CONTENT_LIST",t)},checkNextId:function(){if(this.contentList.length){var t,e=f(this.contentList);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.nextId=this.nextId<n.id&&n.id||this.nextId}}catch(i){e.e(i)}finally{e.f()}this.nextId++}},toggleActiveTab:function(t){this.activeTab=t},setItemToLocalStorage:function(){window.localStorage.setItem("vue-todo-list:content",JSON.stringify(this.contentList))},editItemById:function(t){var e=this.contentList.find((function(e){return e.id===t}));h["a"].commit("SET_EDIT_ITEM",e),h["a"].commit("TOGGLE_POPUP_EDIT",!0)},deleteContent:function(t){h["a"].commit("SET_CONTENT_LIST",this.contentList.filter((function(e){return e.id!==t}))),this.setItemToLocalStorage()},toggleStatus:function(t){var e,n=f(this.contentList);try{for(n.s();!(e=n.n()).done;){var i=e.value;i.id===t&&(i.status=i.status?0:1)}}catch(r){n.e(r)}finally{n.f()}h["a"].commit("SET_CONTENT_LIST",this.contentList),this.setItemToLocalStorage()},addNewTask:function(){if(!this.inputNewTask.trim())return this.inputNewTask="";var t={id:this.nextId,status:0,text:this.inputNewTask};h["a"].commit("SET_CONTENT_LIST",[t].concat(l(this.contentList))),this.inputNewTask="",this.nextId++},computeListMaxHeight:function(){var t=this.$refs.refList.offsetTop,e=document.body.clientHeight;this.listMaxHeight=parseInt(e-t-122)},removeCompletedItems:function(){h["a"].commit("SET_CONTENT_LIST",this.contentList.filter((function(t){return 1!==t.status})))}}},_=p,g=(n("5033"),n("2877")),b=Object(g["a"])(_,i,r,!1,null,"55828cc4",null);e["default"]=b.exports},"7db0":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").find,o=n("44d2"),a=n("ae40"),s="find",c=!0,u=a(s);s in[]&&Array(1)[s]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},8155:function(t,e,n){"use strict";var i=n("6b75"),r=n.n(i);r.a},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),v=n("2d00"),h=d("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",_=v>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=f("concat"),b=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},y=!_||!g;i({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,i,r,o,a=s(this),f=l(a,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?a:arguments[e],b(o)){if(r=c(o.length),d+r>m)throw TypeError(p);for(n=0;n<r;n++,d++)n in o&&u(f,d,o[n])}else{if(d>=m)throw TypeError(p);u(f,d++,o)}return f.length=d,f}})},"9fe9":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer__content"},[n("div",{staticClass:"footer__content__about"}),n("div",{staticClass:"footer__content__text"},[t._v("Copyright © "+t._s(t.currentYear)+" Eyvindove Reserved")])])},r=[],o={name:"home-footer",computed:{currentYear:function(){return(new Date).getFullYear()}}},a=o,s=(n("8155"),n("2877")),c=Object(s["a"])(a,i,r,!1,null,"77bca435",null);e["a"]=c.exports},a630:function(t,e,n){var i=n("23e7"),r=n("4df4"),o=n("1c7e"),a=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:r})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var i=n("83ab"),r=n("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";i&&!(c in o)&&r(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},c8d2:function(t,e,n){var i=n("d039"),r=n("5899"),o="​᠎";t.exports=function(t){return i((function(){return!!r[t]()||o[t]()!=o||r[t].name!==t}))}},d28b:function(t,e,n){var i=n("746f");i("iterator")},ddb0:function(t,e,n){var i=n("da84"),r=n("fdbc"),o=n("e260"),a=n("9112"),s=n("b622"),c=s("iterator"),u=s("toStringTag"),l=o.values;for(var f in r){var d=i[f],v=d&&d.prototype;if(v){if(v[c]!==l)try{a(v,c,l)}catch(m){v[c]=l}if(v[u]||a(v,u,f),r[f])for(var h in o)if(v[h]!==o[h])try{a(v,h,o[h])}catch(m){v[h]=o[h]}}}},e01a:function(t,e,n){"use strict";var i=n("23e7"),r=n("83ab"),o=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),l=o.Symbol;if(r&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var v=d.prototype=l.prototype;v.constructor=d;var h=v.toString,m="Symbol(test)"==String(l("test")),p=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=h.call(t);if(a(f,t))return"";var n=m?e.slice(7,-1):e.replace(p,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("861d"),o=n("e8b5"),a=n("23cb"),s=n("50c4"),c=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),d=n("ae40"),v=f("slice"),h=d("slice",{ACCESSORS:!0,0:0,1:2}),m=l("species"),p=[].slice,_=Math.max;i({target:"Array",proto:!0,forced:!v||!h},{slice:function(t,e){var n,i,l,f=c(this),d=s(f.length),v=a(t,d),h=a(void 0===e?d:e,d);if(o(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return p.call(f,v,h);for(i=new(void 0===n?Array:n)(_(h-v,0)),l=0;v<h;v++,l++)v in f&&u(i,l,f[v]);return i.length=l,i}})}}]);
//# sourceMappingURL=chunk-b57f74a0.92bbf6b6.js.map