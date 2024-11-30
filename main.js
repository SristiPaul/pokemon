import messages from './messages.js';


const htmx = `
(function(e,t){if(typeof define===\"function\"&&define.amd){define([],t)}else if(typeof module===\"object\"&&module.exports){module.exports=t()}else{e.htmx=e.htmx||t()}})(typeof self!==\"undefined\"?self:this,function(){return function(){\"use strict\";var Q={onLoad:B,process:zt,on:de,off:ge,trigger:ce,ajax:Nr,find:C,findAll:f,closest:v,values:function(e,t){var r=dr(e,t||\"post\");return r.values},remove:_,addClass:z,removeClass:n,toggleClass:$,takeClass:W,defineExtension:Ur,removeExtension:Fr,logAll:V,logNone:j,logger:null,config:{historyEnabled:true,historyCacheSize:10,refreshOnHistoryMiss:false,defaultSwapStyle:\"innerHTML\",defaultSwapDelay:0,defaultSettleDelay:20,includeIndicatorStyles:true,indicatorClass:\"htmx-indicator\",requestClass:\"htmx-request\",addedClass:\"htmx-added\",settlingClass:\"htmx-settling\",swappingClass:\"htmx-swapping\",allowEval:true,allowScriptTags:true,inlineScriptNonce:\"\",attributesToSettle:[\"class\",\"style\",\"width\",\"height\"],withCredentials:false,timeout:0,wsReconnectDelay:\"full-jitter\",wsBinaryType:\"blob\",disableSelector:\"[hx-disable], [data-hx-disable]\",useTemplateFragments:false,scrollBehavior:\"smooth\",defaultFocusScroll:false,getCacheBusterParam:false,globalViewTransitions:false,methodsThatUseUrlParams:[\"get\"],selfRequestsOnly:false,ignoreTitle:false,scrollIntoViewOnBoost:true,triggerSpecsCache:null},parseInterval:d,_:t,createEventSource:function(e){return new EventSource(e,{withCredentials:true})},createWebSocket:function(e){var t=new WebSocket(e,[]);t.binaryType=Q.config.wsBinaryType;return t},version:\"1.9.11\"};var r={addTriggerHandler:Lt,bodyContains:se,canAccessLocalStorage:U,findThisElement:xe,filterValues:yr,hasAttribute:o,getAttributeValue:te,getClosestAttributeValue:ne,getClosestMatch:c,getExpressionVars:Hr,getHeaders:xr,getInputValues:dr,getInternalData:ae,getSwapSpecification:wr,getTriggerSpecs:it,getTarget:ye,makeFragment:l,mergeObjects:le,makeSettleInfo:T,oobSwap:Ee,querySelectorExt:ue,selectAndSwap:je,settleImmediately:nr,shouldCancel:ut,triggerEvent:ce,triggerErrorEvent:fe,withExtensions:R};var w=[\"get\",\"post\",\"put\",\"delete\",\"patch\"];var i=w.map(function(e){return\"[hx-\"+e+\"], [data-hx-\"+e+\"]\"}).join(\", \");var S=e(\"head\"),q=e(\"title\"),H=e(\"svg\",true);function e(e,t=false){return new RegExp(\`<\${e}(\\\\s[^>]*>|>)([\\\\s\\\\S]*?)<\\\\\/\${e}>\`,t?\"gim\":\"im\")}function d(e){if(e==undefined){return undefined}let t=NaN;if(e.slice(-2)==\"ms\"){t=parseFloat(e.slice(0,-2))}else if(e.slice(-1)==\"s\"){t=parseFloat(e.slice(0,-1))*1e3}else if(e.slice(-1)==\"m\"){t=parseFloat(e.slice(0,-1))*1e3*60}else{t=parseFloat(e)}return isNaN(t)?undefined:t}function ee(e,t){return e.getAttribute&&e.getAttribute(t)}function o(e,t){return e.hasAttribute&&(e.hasAttribute(t)||e.hasAttribute(\"data-\"+t))}function te(e,t){return ee(e,t)||ee(e,\"data-\"+t)}function u(e){return e.parentElement}function re(){return document}function c(e,t){while(e&&!t(e)){e=u(e)}return e?e:null}function L(e,t,r){var n=te(t,r);var i=te(t,\"hx-disinherit\");if(e!==t&&i&&(i===\"*\"||i.split(\" \").indexOf(r)>=0)){return\"unset\"}else{return n}}function ne(t,r){var n=null;c(t,function(e){return n=L(t,e,r)});if(n!==\"unset\"){return n}}function h(e,t){var r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector;return r&&r.call(e,t)}function A(e){var t=\/<([a-z][^\\\/\\0>\\x20\\t\\r\\n\\f]*)\/i;var r=t.exec(e);if(r){return r[1].toLowerCase()}else{return\"\"}}function s(e,t){var r=new DOMParser;var n=r.parseFromString(e,\"text\/html\");var i=n.body;while(t>0){t--;i=i.firstChild}if(i==null){i=re().createDocumentFragment()}return i}function N(e){return\/<body\/.test(e)}function l(e){var t=!N(e);var r=A(e);var n=e;if(r===\"head\"){n=n.replace(S,\"\")}if(Q.config.useTemplateFragments&&t){var i=s(\"<body><template>\"+n+\"<\/template><\/body>\",0);var a=i.querySelector(\"template\").content;if(Q.config.allowScriptTags){oe(a.querySelectorAll(\"script\"),function(e){if(Q.config.inlineScriptNonce){e.nonce=Q.config.inlineScriptNonce}e.htmxExecuted=navigator.userAgent.indexOf(\"Firefox\")===-1})}else{oe(a.querySelectorAll(\"script\"),function(e){_(e)})}return a}switch(r){case\"thead\":case\"tbody\":case\"tfoot\":case\"colgroup\":case\"caption\":return s(\"<table>\"+n+\"<\/table>\",1);case\"col\":return s(\"<table><colgroup>\"+n+\"<\/colgroup><\/table>\",2);case\"tr\":return s(\"<table><tbody>\"+n+\"<\/tbody><\/table>\",2);case\"td\":case\"th\":return s(\"<table><tbody><tr>\"+n+\"<\/tr><\/tbody><\/table>\",3);case\"script\":case\"style\":return s(\"<div>\"+n+\"<\/div>\",1);default:return s(n,0)}}function ie(e){if(e){e()}}function I(e,t){return Object.prototype.toString.call(e)===\"[object \"+t+\"]\"}function k(e){return I(e,\"Function\")}function P(e){return I(e,\"Object\")}function ae(e){var t=\"htmx-internal-data\";var r=e[t];if(!r){r=e[t]={}}return r}function M(e){var t=[];if(e){for(var r=0;r<e.length;r++){t.push(e[r])}}return t}function oe(e,t){if(e){for(var r=0;r<e.length;r++){t(e[r])}}}function X(e){var t=e.getBoundingClientRect();var r=t.top;var n=t.bottom;return r<window.innerHeight&&n>=0}function se(e){if(e.getRootNode&&e.getRootNode()instanceof window.ShadowRoot){return re().body.contains(e.getRootNode().host)}else{return re().body.contains(e)}}function D(e){return e.trim().split(\/\\s+\/)}function le(e,t){for(var r in t){if(t.hasOwnProperty(r)){e[r]=t[r]}}return e}function E(e){try{return JSON.parse(e)}catch(e){b(e);return null}}function U(){var e=\"htmx:localStorageTest\";try{localStorage.setItem(e,e);localStorage.removeItem(e);return true}catch(e){return false}}function F(t){try{var e=new URL(t);if(e){t=e.pathname+e.search}if(!\/^\\\/$\/.test(t)){t=t.replace(\/\\\/+$\/,\"\")}return t}catch(e){return t}}function t(e){return Tr(re().body,function(){return eval(e)})}function B(t){var e=Q.on(\"htmx:load\",function(e){t(e.detail.elt)});return e}function V(){Q.logger=function(e,t,r){if(console){console.log(t,e,r)}}}function j(){Q.logger=null}function C(e,t){if(t){return e.querySelector(t)}else{return C(re(),e)}}function f(e,t){if(t){return e.querySelectorAll(t)}else{return f(re(),e)}}function _(e,t){e=p(e);if(t){setTimeout(function(){_(e);e=null},t)}else{e.parentElement.removeChild(e)}}function z(e,t,r){e=p(e);if(r){setTimeout(function(){z(e,t);e=null},r)}else{e.classList&&e.classList.add(t)}}function n(e,t,r){e=p(e);if(r){setTimeout(function(){n(e,t);e=null},r)}else{if(e.classList){e.classList.remove(t);if(e.classList.length===0){e.removeAttribute(\"class\")}}}}function $(e,t){e=p(e);e.classList.toggle(t)}function W(e,t){e=p(e);oe(e.parentElement.children,function(e){n(e,t)});z(e,t)}function v(e,t){e=p(e);if(e.closest){return e.closest(t)}else{do{if(e==null||h(e,t)){return e}}while(e=e&&u(e));return null}}function g(e,t){return e.substring(0,t.length)===t}function G(e,t){return e.substring(e.length-t.length)===t}function J(e){var t=e.trim();if(g(t,\"<\")&&G(t,\"\/>\")){return t.substring(1,t.length-2)}else{return t}}function Z(e,t){if(t.indexOf(\"closest \")===0){return[v(e,J(t.substr(8)))]}else if(t.indexOf(\"find \")===0){return[C(e,J(t.substr(5)))]}else if(t===\"next\"){return[e.nextElementSibling]}else if(t.indexOf(\"next \")===0){return[K(e,J(t.substr(5)))]}else if(t===\"previous\"){return[e.previousElementSibling]}else if(t.indexOf(\"previous \")===0){return[Y(e,J(t.substr(9)))]}else if(t===\"document\"){return[document]}else if(t===\"window\"){return[window]}else if(t===\"body\"){return[document.body]}else{return re().querySelectorAll(J(t))}}var K=function(e,t){var r=re().querySelectorAll(t);for(var n=0;n<r.length;n++){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING){return i}}};var Y=function(e,t){var r=re().querySelectorAll(t);for(var n=r.length-1;n>=0;n--){var i=r[n];if(i.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_FOLLOWING){return i}}};function ue(e,t){if(t){return Z(e,t)[0]}else{return Z(re().body,e)[0]}}function p(e){if(I(e,\"String\")){return C(e)}else{return e}}function ve(e,t,r){if(k(t)){return{target:re().body,event:e,listener:t}}else{return{target:p(e),event:t,listener:r}}}function de(t,r,n){jr(function(){var e=ve(t,r,n);e.target.addEventListener(e.event,e.listener)});var e=k(r);return e?r:n}function ge(t,r,n){jr(function(){var e=ve(t,r,n);e.target.removeEventListener(e.event,e.listener)});return k(r)?r:n}var pe=re().createElement(\"output\");function me(e,t){var r=ne(e,t);if(r){if(r===\"this\"){return[xe(e,t)]}else{var n=Z(e,r);if(n.length===0){b(\'The selector \"\'+r+\'\" on \'+t+\" returned no matches!\");return[pe]}else{return n}}}}function xe(e,t){return c(e,function(e){return te(e,t)!=null})}function ye(e){var t=ne(e,\"hx-target\");if(t){if(t===\"this\"){return xe(e,\"hx-target\")}else{return ue(e,t)}}else{var r=ae(e);if(r.boosted){return re().body}else{return e}}}function be(e){var t=Q.config.attributesToSettle;for(var r=0;r<t.length;r++){if(e===t[r]){return true}}return false}function we(t,r){oe(t.attributes,function(e){if(!r.hasAttribute(e.name)&&be(e.name)){t.removeAttribute(e.name)}});oe(r.attributes,function(e){if(be(e.name)){t.setAttribute(e.name,e.value)}})}function Se(e,t){var r=Br(t);for(var n=0;n<r.length;n++){var i=r[n];try{if(i.isInlineSwap(e)){return true}}catch(e){b(e)}}return e===\"outerHTML\"}function Ee(e,i,a){var t=\"#\"+ee(i,\"id\");var o=\"outerHTML\";if(e===\"true\"){}else if(e.indexOf(\":\")>0){o=e.substr(0,e.indexOf(\":\"));t=e.substr(e.indexOf(\":\")+1,e.length)}else{o=e}var r=re().querySelectorAll(t);if(r){oe(r,function(e){var t;var r=i.cloneNode(true);t=re().createDocumentFragment();t.appendChild(r);if(!Se(o,e)){t=r}var n={shouldSwap:true,target:e,fragment:t};if(!ce(e,\"htmx:oobBeforeSwap\",n))return;e=n.target;if(n[\"shouldSwap\"]){Be(o,e,e,t,a)}oe(a.elts,function(e){ce(e,\"htmx:oobAfterSwap\",n)})});i.parentNode.removeChild(i)}else{i.parentNode.removeChild(i);fe(re().body,\"htmx:oobErrorNoTarget\",{content:i})}return e}function Ce(e,t,r){var n=ne(e,\"hx-select-oob\");if(n){var i=n.split(\",\");for(var a=0;a<i.length;a++){var o=i[a].split(\":\",2);var s=o[0].trim();if(s.indexOf(\"#\")===0){s=s.substring(1)}var l=o[1]||\"true\";var u=t.querySelector(\"#\"+s);if(u){Ee(l,u,r)}}}oe(f(t,\"[hx-swap-oob], [data-hx-swap-oob]\"),function(e){var t=te(e,\"hx-swap-oob\");if(t!=null){Ee(t,e,r)}})}function Re(e){oe(f(e,\"[hx-preserve], [data-hx-preserve]\"),function(e){var t=te(e,\"id\");var r=re().getElementById(t);if(r!=null){e.parentNode.replaceChild(r,e)}})}function Te(o,e,s){oe(e.querySelectorAll(\"[id]\"),function(e){var t=ee(e,\"id\");if(t&&t.length>0){var r=t.replace(\"\'\",\"\\\\\'\");var n=e.tagName.replace(\":\",\"\\\\:\");var i=o.querySelector(n+\"[id=\'\"+r+\"\']\");if(i&&i!==o){var a=e.cloneNode();we(e,i);s.tasks.push(function(){we(e,a)})}}})}function Oe(e){return function(){n(e,Q.config.addedClass);zt(e);Nt(e);qe(e);ce(e,\"htmx:load\")}}function qe(e){var t=\"[autofocus]\";var r=h(e,t)?e:e.querySelector(t);if(r!=null){r.focus()}}function a(e,t,r,n){Te(e,r,n);while(r.childNodes.length>0){var i=r.firstChild;z(i,Q.config.addedClass);e.insertBefore(i,t);if(i.nodeType!==Node.TEXT_NODE&&i.nodeType!==Node.COMMENT_NODE){n.tasks.push(Oe(i))}}}function He(e,t){var r=0;while(r<e.length){t=(t<<5)-t+e.charCodeAt(r++)|0}return t}function Le(e){var t=0;if(e.attributes){for(var r=0;r<e.attributes.length;r++){var n=e.attributes[r];if(n.value){t=He(n.name,t);t=He(n.value,t)}}}return t}function Ae(e){var t=ae(e);if(t.onHandlers){for(var r=0;r<t.onHandlers.length;r++){const n=t.onHandlers[r];e.removeEventListener(n.event,n.listener)}delete t.onHandlers}}function Ne(e){var t=ae(e);if(t.timeout){clearTimeout(t.timeout)}if(t.webSocket){t.webSocket.close()}if(t.sseEventSource){t.sseEventSource.close()}if(t.listenerInfos){oe(t.listenerInfos,function(e){if(e.on){e.on.removeEventListener(e.trigger,e.listener)}})}Ae(e);oe(Object.keys(t),function(e){delete t[e]})}function m(e){ce(e,\"htmx:beforeCleanupElement\");Ne(e);if(e.children){oe(e.children,function(e){m(e)})}}function Ie(t,e,r){if(t.tagName===\"BODY\"){return Ue(t,e,r)}else{var n;var i=t.previousSibling;a(u(t),t,e,r);if(i==null){n=u(t).firstChild}else{n=i.nextSibling}r.elts=r.elts.filter(function(e){return e!=t});while(n&&n!==t){if(n.nodeType===Node.ELEMENT_NODE){r.elts.push(n)}n=n.nextElementSibling}m(t);u(t).removeChild(t)}}function ke(e,t,r){return a(e,e.firstChild,t,r)}function Pe(e,t,r){return a(u(e),e,t,r)}function Me(e,t,r){return a(e,null,t,r)}function Xe(e,t,r){return a(u(e),e.nextSibling,t,r)}function De(e,t,r){m(e);return u(e).removeChild(e)}function Ue(e,t,r){var n=e.firstChild;a(e,n,t,r);if(n){while(n.nextSibling){m(n.nextSibling);e.removeChild(n.nextSibling)}m(n);e.removeChild(n)}}function Fe(e,t,r){var n=r||ne(e,\"hx-select\");if(n){var i=re().createDocumentFragment();oe(t.querySelectorAll(n),function(e){i.appendChild(e)});t=i}return t}function Be(e,t,r,n,i){switch(e){case\"none\":return;case\"outerHTML\":Ie(r,n,i);return;case\"afterbegin\":ke(r,n,i);return;case\"beforebegin\":Pe(r,n,i);return;case\"beforeend\":Me(r,n,i);return;case\"afterend\":Xe(r,n,i);return;case\"delete\":De(r,n,i);return;default:var a=Br(t);for(var o=0;o<a.length;o++){var s=a[o];try{var l=s.handleSwap(e,r,n,i);if(l){if(typeof l.length!==\"undefined\"){for(var u=0;u<l.length;u++){var f=l[u];if(f.nodeType!==Node.TEXT_NODE&&f.nodeType!==Node.COMMENT_NODE){i.tasks.push(Oe(f))}}}return}}catch(e){b(e)}}if(e===\"innerHTML\"){Ue(r,n,i)}else{Be(Q.config.defaultSwapStyle,t,r,n,i)}}}function Ve(e){if(e.indexOf(\"<title\")>-1){var t=e.replace(H,\"\");var r=t.match(q);if(r){return r[2]}}}function je(e,t,r,n,i,a){i.title=Ve(n);var o=l(n);if(o){Ce(r,o,i);o=Fe(r,o,a);Re(o);return Be(e,r,t,o,i)}}function _e(e,t,r){var n=e.getResponseHeader(t);if(n.indexOf(\"{\")===0){var i=E(n);for(var a in i){if(i.hasOwnProperty(a)){var o=i[a];if(!P(o)){o={value:o}}ce(r,a,o)}}}else{var s=n.split(\",\");for(var l=0;l<s.length;l++){ce(r,s[l].trim(),[])}}}var ze=\/\\s\/;var x=\/[\\s,]\/;var $e=\/[_$a-zA-Z]\/;var We=\/[_$a-zA-Z0-9]\/;var Ge=[\'\"\',\"\'\",\"\/\"];var Je=\/[^\\s]\/;var Ze=\/[{(]\/;var Ke=\/[})]\/;function Ye(e){var t=[];var r=0;while(r<e.length){if($e.exec(e.charAt(r))){var n=r;while(We.exec(e.charAt(r+1))){r++}t.push(e.substr(n,r-n+1))}else if(Ge.indexOf(e.charAt(r))!==-1){var i=e.charAt(r);var n=r;r++;while(r<e.length&&e.charAt(r)!==i){if(e.charAt(r)===\"\\\\\"){r++}r++}t.push(e.substr(n,r-n+1))}else{var a=e.charAt(r);t.push(a)}r++}return t}function Qe(e,t,r){return $e.exec(e.charAt(0))&&e!==\"true\"&&e!==\"false\"&&e!==\"this\"&&e!==r&&t!==\".\"}function et(e,t,r){if(t[0]===\"[\"){t.shift();var n=1;var i=\" return (function(\"+r+\"){ return (\";var a=null;while(t.length>0){var o=t[0];if(o===\"]\"){n--;if(n===0){if(a===null){i=i+\"true\"}t.shift();i+=\")})\";try{var s=Tr(e,function(){return Function(i)()},function(){return true});s.source=i;return s}catch(e){fe(re().body,\"htmx:syntax:error\",{error:e,source:i});return null}}}else if(o===\"[\"){n++}if(Qe(o,a,r)){i+=\"((\"+r+\".\"+o+\") ? (\"+r+\".\"+o+\") : (window.\"+o+\"))\"}else{i=i+o}a=t.shift()}}}function y(e,t){var r=\"\";while(e.length>0&&!t.test(e[0])){r+=e.shift()}return r}function tt(e){var t;if(e.length>0&&Ze.test(e[0])){e.shift();t=y(e,Ke).trim();e.shift()}else{t=y(e,x)}return t}var rt=\"input, textarea, select\";function nt(e,t,r){var n=[];var i=Ye(t);do{y(i,Je);var a=i.length;var o=y(i,\/[,\\[\\s]\/);if(o!==\"\"){if(o===\"every\"){var s={trigger:\"every\"};y(i,Je);s.pollInterval=d(y(i,\/[,\\[\\s]\/));y(i,Je);var l=et(e,i,\"event\");if(l){s.eventFilter=l}n.push(s)}else if(o.indexOf(\"sse:\")===0){n.push({trigger:\"sse\",sseEvent:o.substr(4)})}else{var u={trigger:o};var l=et(e,i,\"event\");if(l){u.eventFilter=l}while(i.length>0&&i[0]!==\",\"){y(i,Je);var f=i.shift();if(f===\"changed\"){u.changed=true}else if(f===\"once\"){u.once=true}else if(f===\"consume\"){u.consume=true}else if(f===\"delay\"&&i[0]===\":\"){i.shift();u.delay=d(y(i,x))}else if(f===\"from\"&&i[0]===\":\"){i.shift();if(Ze.test(i[0])){var c=tt(i)}else{var c=y(i,x);if(c===\"closest\"||c===\"find\"||c===\"next\"||c===\"previous\"){i.shift();var h=tt(i);if(h.length>0){c+=\" \"+h}}}u.from=c}else if(f===\"target\"&&i[0]===\":\"){i.shift();u.target=tt(i)}else if(f===\"throttle\"&&i[0]===\":\"){i.shift();u.throttle=d(y(i,x))}else if(f===\"queue\"&&i[0]===\":\"){i.shift();u.queue=y(i,x)}else if(f===\"root\"&&i[0]===\":\"){i.shift();u[f]=tt(i)}else if(f===\"threshold\"&&i[0]===\":\"){i.shift();u[f]=y(i,x)}else{fe(e,\"htmx:syntax:error\",{token:i.shift()})}}n.push(u)}}if(i.length===a){fe(e,\"htmx:syntax:error\",{token:i.shift()})}y(i,Je)}while(i[0]===\",\"&&i.shift());if(r){r[t]=n}return n}function it(e){var t=te(e,\"hx-trigger\");var r=[];if(t){var n=Q.config.triggerSpecsCache;r=n&&n[t]||nt(e,t,n)}if(r.length>0){return r}else if(h(e,\"form\")){return[{trigger:\"submit\"}]}else if(h(e,\'input[type=\"button\"], input[type=\"submit\"]\')){return[{trigger:\"click\"}]}else if(h(e,rt)){return[{trigger:\"change\"}]}else{return[{trigger:\"click\"}]}}function at(e){ae(e).cancelled=true}function ot(e,t,r){var n=ae(e);n.timeout=setTimeout(function(){if(se(e)&&n.cancelled!==true){if(!ct(r,e,Wt(\"hx:poll:trigger\",{triggerSpec:r,target:e}))){t(e)}ot(e,t,r)}},r.pollInterval)}function st(e){return location.hostname===e.hostname&&ee(e,\"href\")&&ee(e,\"href\").indexOf(\"#\")!==0}function lt(t,r,e){if(t.tagName===\"A\"&&st(t)&&(t.target===\"\"||t.target===\"_self\")||t.tagName===\"FORM\"){r.boosted=true;var n,i;if(t.tagName===\"A\"){n=\"get\";i=ee(t,\"href\")}else{var a=ee(t,\"method\");n=a?a.toLowerCase():\"get\";if(n===\"get\"){}i=ee(t,\"action\")}e.forEach(function(e){ht(t,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(n,i,e,t)},r,e,true)})}}function ut(e,t){if(e.type===\"submit\"||e.type===\"click\"){if(t.tagName===\"FORM\"){return true}if(h(t,\'input[type=\"submit\"], button\')&&v(t,\"form\")!==null){return true}if(t.tagName===\"A\"&&t.href&&(t.getAttribute(\"href\")===\"#\"||t.getAttribute(\"href\").indexOf(\"#\")!==0)){return true}}return false}function ft(e,t){return ae(e).boosted&&e.tagName===\"A\"&&t.type===\"click\"&&(t.ctrlKey||t.metaKey)}function ct(e,t,r){var n=e.eventFilter;if(n){try{return n.call(t,r)!==true}catch(e){fe(re().body,\"htmx:eventFilter:error\",{error:e,source:n.source});return true}}return false}function ht(a,o,e,s,l){var u=ae(a);var t;if(s.from){t=Z(a,s.from)}else{t=[a]}if(s.changed){t.forEach(function(e){var t=ae(e);t.lastValue=e.value})}oe(t,function(n){var i=function(e){if(!se(a)){n.removeEventListener(s.trigger,i);return}if(ft(a,e)){return}if(l||ut(e,a)){e.preventDefault()}if(ct(s,a,e)){return}var t=ae(e);t.triggerSpec=s;if(t.handledFor==null){t.handledFor=[]}if(t.handledFor.indexOf(a)<0){t.handledFor.push(a);if(s.consume){e.stopPropagation()}if(s.target&&e.target){if(!h(e.target,s.target)){return}}if(s.once){if(u.triggeredOnce){return}else{u.triggeredOnce=true}}if(s.changed){var r=ae(n);if(r.lastValue===n.value){return}r.lastValue=n.value}if(u.delayed){clearTimeout(u.delayed)}if(u.throttle){return}if(s.throttle>0){if(!u.throttle){o(a,e);u.throttle=setTimeout(function(){u.throttle=null},s.throttle)}}else if(s.delay>0){u.delayed=setTimeout(function(){o(a,e)},s.delay)}else{ce(a,\"htmx:trigger\");o(a,e)}}};if(e.listenerInfos==null){e.listenerInfos=[]}e.listenerInfos.push({trigger:s.trigger,listener:i,on:n});n.addEventListener(s.trigger,i)})}var vt=false;var dt=null;function gt(){if(!dt){dt=function(){vt=true};window.addEventListener(\"scroll\",dt);setInterval(function(){if(vt){vt=false;oe(re().querySelectorAll(\"[hx-trigger=\'revealed\'],[data-hx-trigger=\'revealed\']\"),function(e){pt(e)})}},200)}}function pt(t){if(!o(t,\"data-hx-revealed\")&&X(t)){t.setAttribute(\"data-hx-revealed\",\"true\");var e=ae(t);if(e.initHash){ce(t,\"revealed\")}else{t.addEventListener(\"htmx:afterProcessNode\",function(e){ce(t,\"revealed\")},{once:true})}}}function mt(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(\/:(.+)\/);if(a[0]===\"connect\"){xt(e,a[1],0)}if(a[0]===\"send\"){bt(e)}}}function xt(s,r,n){if(!se(s)){return}if(r.indexOf(\"\/\")==0){var e=location.hostname+(location.port?\":\"+location.port:\"\");if(location.protocol==\"https:\"){r=\"wss:\/\/\"+e+r}else if(location.protocol==\"http:\"){r=\"ws:\/\/\"+e+r}}var t=Q.createWebSocket(r);t.onerror=function(e){fe(s,\"htmx:wsError\",{error:e,socket:t});yt(s)};t.onclose=function(e){if([1006,1012,1013].indexOf(e.code)>=0){var t=wt(n);setTimeout(function(){xt(s,r,n+1)},t)}};t.onopen=function(e){n=0};ae(s).webSocket=t;t.addEventListener(\"message\",function(e){if(yt(s)){return}var t=e.data;R(s,function(e){t=e.transformResponse(t,null,s)});var r=T(s);var n=l(t);var i=M(n.children);for(var a=0;a<i.length;a++){var o=i[a];Ee(te(o,\"hx-swap-oob\")||\"true\",o,r)}nr(r.tasks)})}function yt(e){if(!se(e)){ae(e).webSocket.close();return true}}function bt(u){var f=c(u,function(e){return ae(e).webSocket!=null});if(f){u.addEventListener(it(u)[0].trigger,function(e){var t=ae(f).webSocket;var r=xr(u,f);var n=dr(u,\"post\");var i=n.errors;var a=n.values;var o=Hr(u);var s=le(a,o);var l=yr(s,u);l[\"HEADERS\"]=r;if(i&&i.length>0){ce(u,\"htmx:validation:halted\",i);return}t.send(JSON.stringify(l));if(ut(e,u)){e.preventDefault()}})}else{fe(u,\"htmx:noWebSocketSourceError\")}}function wt(e){var t=Q.config.wsReconnectDelay;if(typeof t===\"function\"){return t(e)}if(t===\"full-jitter\"){var r=Math.min(e,6);var n=1e3*Math.pow(2,r);return n*Math.random()}b(\'htmx.config.wsReconnectDelay must either be a function or the string \"full-jitter\"\')}function St(e,t,r){var n=D(r);for(var i=0;i<n.length;i++){var a=n[i].split(\/:(.+)\/);if(a[0]===\"connect\"){Et(e,a[1])}if(a[0]===\"swap\"){Ct(e,a[1])}}}function Et(t,e){var r=Q.createEventSource(e);r.onerror=function(e){fe(t,\"htmx:sseError\",{error:e,source:r});Tt(t)};ae(t).sseEventSource=r}function Ct(a,o){var s=c(a,Ot);if(s){var l=ae(s).sseEventSource;var u=function(e){if(Tt(s)){return}if(!se(a)){l.removeEventListener(o,u);return}var t=e.data;R(a,function(e){t=e.transformResponse(t,null,a)});var r=wr(a);var n=ye(a);var i=T(a);je(r.swapStyle,n,a,t,i);nr(i.tasks);ce(a,\"htmx:sseMessage\",e)};ae(a).sseListener=u;l.addEventListener(o,u)}else{fe(a,\"htmx:noSSESourceError\")}}function Rt(e,t,r){var n=c(e,Ot);if(n){var i=ae(n).sseEventSource;var a=function(){if(!Tt(n)){if(se(e)){t(e)}else{i.removeEventListener(r,a)}}};ae(e).sseListener=a;i.addEventListener(r,a)}else{fe(e,\"htmx:noSSESourceError\")}}function Tt(e){if(!se(e)){ae(e).sseEventSource.close();return true}}function Ot(e){return ae(e).sseEventSource!=null}function qt(e,t,r,n){var i=function(){if(!r.loaded){r.loaded=true;t(e)}};if(n>0){setTimeout(i,n)}else{i()}}function Ht(t,i,e){var a=false;oe(w,function(r){if(o(t,\"hx-\"+r)){var n=te(t,\"hx-\"+r);a=true;i.path=n;i.verb=r;e.forEach(function(e){Lt(t,e,i,function(e,t){if(v(e,Q.config.disableSelector)){m(e);return}he(r,n,e,t)})})}});return a}function Lt(n,e,t,r){if(e.sseEvent){Rt(n,r,e.sseEvent)}else if(e.trigger===\"revealed\"){gt();ht(n,r,t,e);pt(n)}else if(e.trigger===\"intersect\"){var i={};if(e.root){i.root=ue(n,e.root)}if(e.threshold){i.threshold=parseFloat(e.threshold)}var a=new IntersectionObserver(function(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.isIntersecting){ce(n,\"intersect\");break}}},i);a.observe(n);ht(n,r,t,e)}else if(e.trigger===\"load\"){if(!ct(e,n,Wt(\"load\",{elt:n}))){qt(n,r,t,e.delay)}}else if(e.pollInterval>0){t.polling=true;ot(n,r,e)}else{ht(n,r,t,e)}}function At(e){if(!e.htmxExecuted&&Q.config.allowScriptTags&&(e.type===\"text\/javascript\"||e.type===\"module\"||e.type===\"\")){var t=re().createElement(\"script\");oe(e.attributes,function(e){t.setAttribute(e.name,e.value)});t.textContent=e.textContent;t.async=false;if(Q.config.inlineScriptNonce){t.nonce=Q.config.inlineScriptNonce}var r=e.parentElement;try{r.insertBefore(t,e)}catch(e){b(e)}finally{if(e.parentElement){e.parentElement.removeChild(e)}}}}function Nt(e){if(h(e,\"script\")){At(e)}oe(f(e,\"script\"),function(e){At(e)})}function It(e){var t=e.attributes;for(var r=0;r<t.length;r++){var n=t[r].name;if(g(n,\"hx-on:\")||g(n,\"data-hx-on:\")||g(n,\"hx-on-\")||g(n,\"data-hx-on-\")){return true}}return false}function kt(e){var t=null;var r=[];if(It(e)){r.push(e)}if(document.evaluate){var n=document.evaluate(\'.\/\/*[@*[ starts-with(name(), \"hx-on:\") or starts-with(name(), \"data-hx-on:\") or\'+\' starts-with(name(), \"hx-on-\") or starts-with(name(), \"data-hx-on-\") ]]\',e);while(t=n.iterateNext())r.push(t)}else{var i=e.getElementsByTagName(\"*\");for(var a=0;a<i.length;a++){if(It(i[a])){r.push(i[a])}}}return r}function Pt(e){if(e.querySelectorAll){var t=\", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]\";var r=e.querySelectorAll(i+t+\", form, [type=\'submit\'], [hx-sse], [data-hx-sse], [hx-ws],\"+\" [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]\");return r}else{return[]}}function Mt(e){var t=v(e.target,\"button, input[type=\'submit\']\");var r=Dt(e);if(r){r.lastButtonClicked=t}}function Xt(e){var t=Dt(e);if(t){t.lastButtonClicked=null}}function Dt(e){var t=v(e.target,\"button, input[type=\'submit\']\");if(!t){return}var r=p(\"#\"+ee(t,\"form\"))||v(t,\"form\");if(!r){return}return ae(r)}function Ut(e){e.addEventListener(\"click\",Mt);e.addEventListener(\"focusin\",Mt);e.addEventListener(\"focusout\",Xt)}function Ft(e){var t=Ye(e);var r=0;for(var n=0;n<t.length;n++){const i=t[n];if(i===\"{\"){r++}else if(i===\"}\"){r--}}return r}function Bt(t,e,r){var n=ae(t);if(!Array.isArray(n.onHandlers)){n.onHandlers=[]}var i;var a=function(e){return Tr(t,function(){if(!i){i=new Function(\"event\",r)}i.call(t,e)})};t.addEventListener(e,a);n.onHandlers.push({event:e,listener:a})}function Vt(e){var t=te(e,\"hx-on\");if(t){var r={};var n=t.split(\"\\n\");var i=null;var a=0;while(n.length>0){var o=n.shift();var s=o.match(\/^\\s*([a-zA-Z:\\-\\.]+:)(.*)\/);if(a===0&&s){o.split(\":\");i=s[1].slice(0,-1);r[i]=s[2]}else{r[i]+=o}a+=Ft(o)}for(var l in r){Bt(e,l,r[l])}}}function jt(e){Ae(e);for(var t=0;t<e.attributes.length;t++){var r=e.attributes[t].name;var n=e.attributes[t].value;if(g(r,\"hx-on\")||g(r,\"data-hx-on\")){var i=r.indexOf(\"-on\")+3;var a=r.slice(i,i+1);if(a===\"-\"||a===\":\"){var o=r.slice(i+1);if(g(o,\":\")){o=\"htmx\"+o}else if(g(o,\"-\")){o=\"htmx:\"+o.slice(1)}else if(g(o,\"htmx-\")){o=\"htmx:\"+o.slice(5)}Bt(e,o,n)}}}}function _t(t){if(v(t,Q.config.disableSelector)){m(t);return}var r=ae(t);if(r.initHash!==Le(t)){Ne(t);r.initHash=Le(t);Vt(t);ce(t,\"htmx:beforeProcessNode\");if(t.value){r.lastValue=t.value}var e=it(t);var n=Ht(t,r,e);if(!n){if(ne(t,\"hx-boost\")===\"true\"){lt(t,r,e)}else if(o(t,\"hx-trigger\")){e.forEach(function(e){Lt(t,e,r,function(){})})}}if(t.tagName===\"FORM\"||ee(t,\"type\")===\"submit\"&&o(t,\"form\")){Ut(t)}var i=te(t,\"hx-sse\");if(i){St(t,r,i)}var a=te(t,\"hx-ws\");if(a){mt(t,r,a)}ce(t,\"htmx:afterProcessNode\")}}function zt(e){e=p(e);if(v(e,Q.config.disableSelector)){m(e);return}_t(e);oe(Pt(e),function(e){_t(e)});oe(kt(e),jt)}function $t(e){return e.replace(\/([a-z0-9])([A-Z])\/g,\"$1-$2\").toLowerCase()}function Wt(e,t){var r;if(window.CustomEvent&&typeof window.CustomEvent===\"function\"){r=new CustomEvent(e,{bubbles:true,cancelable:true,detail:t})}else{r=re().createEvent(\"CustomEvent\");r.initCustomEvent(e,true,true,t)}return r}function fe(e,t,r){ce(e,t,le({error:t},r))}function Gt(e){return e===\"htmx:afterProcessNode\"}function R(e,t){oe(Br(e),function(e){try{t(e)}catch(e){b(e)}})}function b(e){if(console.error){console.error(e)}else if(console.log){console.log(\"ERROR: \",e)}}function ce(e,t,r){e=p(e);if(r==null){r={}}r[\"elt\"]=e;var n=Wt(t,r);if(Q.logger&&!Gt(t)){Q.logger(e,t,r)}if(r.error){b(r.error);ce(e,\"htmx:error\",{errorInfo:r})}var i=e.dispatchEvent(n);var a=$t(t);if(i&&a!==t){var o=Wt(a,n.detail);i=i&&e.dispatchEvent(o)}R(e,function(e){i=i&&(e.onEvent(t,n)!==false&&!n.defaultPrevented)});return i}var Jt=location.pathname+location.search;function Zt(){var e=re().querySelector(\"[hx-history-elt],[data-hx-history-elt]\");return e||re().body}function Kt(e,t,r,n){if(!U()){return}if(Q.config.historyCacheSize<=0){localStorage.removeItem(\"htmx-history-cache\");return}e=F(e);var i=E(localStorage.getItem(\"htmx-history-cache\"))||[];for(var a=0;a<i.length;a++){if(i[a].url===e){i.splice(a,1);break}}var o={url:e,content:t,title:r,scroll:n};ce(re().body,\"htmx:historyItemCreated\",{item:o,cache:i});i.push(o);while(i.length>Q.config.historyCacheSize){i.shift()}while(i.length>0){try{localStorage.setItem(\"htmx-history-cache\",JSON.stringify(i));break}catch(e){fe(re().body,\"htmx:historyCacheError\",{cause:e,cache:i});i.shift()}}}function Yt(e){if(!U()){return null}e=F(e);var t=E(localStorage.getItem(\"htmx-history-cache\"))||[];for(var r=0;r<t.length;r++){if(t[r].url===e){return t[r]}}return null}function Qt(e){var t=Q.config.requestClass;var r=e.cloneNode(true);oe(f(r,\".\"+t),function(e){n(e,t)});return r.innerHTML}function er(){var e=Zt();var t=Jt||location.pathname+location.search;var r;try{r=re().querySelector(\'[hx-history=\"false\" i],[data-hx-history=\"false\" i]\')}catch(e){r=re().querySelector(\'[hx-history=\"false\"],[data-hx-history=\"false\"]\')}if(!r){ce(re().body,\"htmx:beforeHistorySave\",{path:t,historyElt:e});Kt(t,Qt(e),re().title,window.scrollY)}if(Q.config.historyEnabled)history.replaceState({htmx:true},re().title,window.location.href)}function tr(e){if(Q.config.getCacheBusterParam){e=e.replace(\/org\\.htmx\\.cache-buster=[^&]*&?\/,\"\");if(G(e,\"&\")||G(e,\"?\")){e=e.slice(0,-1)}}if(Q.config.historyEnabled){history.pushState({htmx:true},\"\",e)}Jt=e}function rr(e){if(Q.config.historyEnabled)history.replaceState({htmx:true},\"\",e);Jt=e}function nr(e){oe(e,function(e){e.call()})}function ir(a){var e=new XMLHttpRequest;var o={path:a,xhr:e};ce(re().body,\"htmx:historyCacheMiss\",o);e.open(\"GET\",a,true);e.setRequestHeader(\"HX-Request\",\"true\");e.setRequestHeader(\"HX-History-Restore-Request\",\"true\");e.setRequestHeader(\"HX-Current-URL\",re().location.href);e.onload=function(){if(this.status>=200&&this.status<400){ce(re().body,\"htmx:historyCacheMissLoad\",o);var e=l(this.response);e=e.querySelector(\"[hx-history-elt],[data-hx-history-elt]\")||e;var t=Zt();var r=T(t);var n=Ve(this.response);if(n){var i=C(\"title\");if(i){i.innerHTML=n}else{window.document.title=n}}Ue(t,e,r);nr(r.tasks);Jt=a;ce(re().body,\"htmx:historyRestore\",{path:a,cacheMiss:true,serverResponse:this.response})}else{fe(re().body,\"htmx:historyCacheMissLoadError\",o)}};e.send()}function ar(e){er();e=e||location.pathname+location.search;var t=Yt(e);if(t){var r=l(t.content);var n=Zt();var i=T(n);Ue(n,r,i);nr(i.tasks);document.title=t.title;setTimeout(function(){window.scrollTo(0,t.scroll)},0);Jt=e;ce(re().body,\"htmx:historyRestore\",{path:e,item:t})}else{if(Q.config.refreshOnHistoryMiss){window.location.reload(true)}else{ir(e)}}}function or(e){var t=me(e,\"hx-indicator\");if(t==null){t=[e]}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.classList[\"add\"].call(e.classList,Q.config.requestClass)});return t}function sr(e){var t=me(e,\"hx-disabled-elt\");if(t==null){t=[]}oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)+1;e.setAttribute(\"disabled\",\"\")});return t}function lr(e,t){oe(e,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.classList[\"remove\"].call(e.classList,Q.config.requestClass)}});oe(t,function(e){var t=ae(e);t.requestCount=(t.requestCount||0)-1;if(t.requestCount===0){e.removeAttribute(\"disabled\")}})}function ur(e,t){for(var r=0;r<e.length;r++){var n=e[r];if(n.isSameNode(t)){return true}}return false}function fr(e){if(e.name===\"\"||e.name==null||e.disabled||v(e,\"fieldset[disabled]\")){return false}if(e.type===\"button\"||e.type===\"submit\"||e.tagName===\"image\"||e.tagName===\"reset\"||e.tagName===\"file\"){return false}if(e.type===\"checkbox\"||e.type===\"radio\"){return e.checked}return true}function cr(e,t,r){if(e!=null&&t!=null){var n=r[e];if(n===undefined){r[e]=t}else if(Array.isArray(n)){if(Array.isArray(t)){r[e]=n.concat(t)}else{n.push(t)}}else{if(Array.isArray(t)){r[e]=[n].concat(t)}else{r[e]=[n,t]}}}}function hr(t,r,n,e,i){if(e==null||ur(t,e)){return}else{t.push(e)}if(fr(e)){var a=ee(e,\"name\");var o=e.value;if(e.multiple&&e.tagName===\"SELECT\"){o=M(e.querySelectorAll(\"option:checked\")).map(function(e){return e.value})}if(e.files){o=M(e.files)}cr(a,o,r);if(i){vr(e,n)}}if(h(e,\"form\")){var s=e.elements;oe(s,function(e){hr(t,r,n,e,i)})}}function vr(e,t){if(e.willValidate){ce(e,\"htmx:validation:validate\");if(!e.checkValidity()){t.push({elt:e,message:e.validationMessage,validity:e.validity});ce(e,\"htmx:validation:failed\",{message:e.validationMessage,validity:e.validity})}}}function dr(e,t){var r=[];var n={};var i={};var a=[];var o=ae(e);if(o.lastButtonClicked&&!se(o.lastButtonClicked)){o.lastButtonClicked=null}var s=h(e,\"form\")&&e.noValidate!==true||te(e,\"hx-validate\")===\"true\";if(o.lastButtonClicked){s=s&&o.lastButtonClicked.formNoValidate!==true}if(t!==\"get\"){hr(r,i,a,v(e,\"form\"),s)}hr(r,n,a,e,s);if(o.lastButtonClicked||e.tagName===\"BUTTON\"||e.tagName===\"INPUT\"&&ee(e,\"type\")===\"submit\"){var l=o.lastButtonClicked||e;var u=ee(l,\"name\");cr(u,l.value,i)}var f=me(e,\"hx-include\");oe(f,function(e){hr(r,n,a,e,s);if(!h(e,\"form\")){oe(e.querySelectorAll(rt),function(e){hr(r,n,a,e,s)})}});n=le(n,i);return{errors:a,values:n}}function gr(e,t,r){if(e!==\"\"){e+=\"&\"}if(String(r)===\"[object Object]\"){r=JSON.stringify(r)}var n=encodeURIComponent(r);e+=encodeURIComponent(t)+\"=\"+n;return e}function pr(e){var t=\"\";for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t=gr(t,r,e)})}else{t=gr(t,r,n)}}}return t}function mr(e){var t=new FormData;for(var r in e){if(e.hasOwnProperty(r)){var n=e[r];if(Array.isArray(n)){oe(n,function(e){t.append(r,e)})}else{t.append(r,n)}}}return t}function xr(e,t,r){var n={\"HX-Request\":\"true\",\"HX-Trigger\":ee(e,\"id\"),\"HX-Trigger-Name\":ee(e,\"name\"),\"HX-Target\":te(t,\"id\"),\"HX-Current-URL\":re().location.href};Rr(e,\"hx-headers\",false,n);if(r!==undefined){n[\"HX-Prompt\"]=r}if(ae(e).boosted){n[\"HX-Boosted\"]=\"true\"}return n}function yr(t,e){var r=ne(e,\"hx-params\");if(r){if(r===\"none\"){return{}}else if(r===\"*\"){return t}else if(r.indexOf(\"not \")===0){oe(r.substr(4).split(\",\"),function(e){e=e.trim();delete t[e]});return t}else{var n={};oe(r.split(\",\"),function(e){e=e.trim();n[e]=t[e]});return n}}else{return t}}function br(e){return ee(e,\"href\")&&ee(e,\"href\").indexOf(\"#\")>=0}function wr(e,t){var r=t?t:ne(e,\"hx-swap\");var n={swapStyle:ae(e).boosted?\"innerHTML\":Q.config.defaultSwapStyle,swapDelay:Q.config.defaultSwapDelay,settleDelay:Q.config.defaultSettleDelay};if(Q.config.scrollIntoViewOnBoost&&ae(e).boosted&&!br(e)){n[\"show\"]=\"top\"}if(r){var i=D(r);if(i.length>0){for(var a=0;a<i.length;a++){var o=i[a];if(o.indexOf(\"swap:\")===0){n[\"swapDelay\"]=d(o.substr(5))}else if(o.indexOf(\"settle:\")===0){n[\"settleDelay\"]=d(o.substr(7))}else if(o.indexOf(\"transition:\")===0){n[\"transition\"]=o.substr(11)===\"true\"}else if(o.indexOf(\"ignoreTitle:\")===0){n[\"ignoreTitle\"]=o.substr(12)===\"true\"}else if(o.indexOf(\"scroll:\")===0){var s=o.substr(7);var l=s.split(\":\");var u=l.pop();var f=l.length>0?l.join(\":\"):null;n[\"scroll\"]=u;n[\"scrollTarget\"]=f}else if(o.indexOf(\"show:\")===0){var c=o.substr(5);var l=c.split(\":\");var h=l.pop();var f=l.length>0?l.join(\":\"):null;n[\"show\"]=h;n[\"showTarget\"]=f}else if(o.indexOf(\"focus-scroll:\")===0){var v=o.substr(\"focus-scroll:\".length);n[\"focusScroll\"]=v==\"true\"}else if(a==0){n[\"swapStyle\"]=o}else{b(\"Unknown modifier in hx-swap: \"+o)}}}}return n}function Sr(e){return ne(e,\"hx-encoding\")===\"multipart\/form-data\"||h(e,\"form\")&&ee(e,\"enctype\")===\"multipart\/form-data\"}function Er(t,r,n){var i=null;R(r,function(e){if(i==null){i=e.encodeParameters(t,n,r)}});if(i!=null){return i}else{if(Sr(r)){return mr(n)}else{return pr(n)}}}function T(e){return{tasks:[],elts:[e]}}function Cr(e,t){var r=e[0];var n=e[e.length-1];if(t.scroll){var i=null;if(t.scrollTarget){i=ue(r,t.scrollTarget)}if(t.scroll===\"top\"&&(r||i)){i=i||r;i.scrollTop=0}if(t.scroll===\"bottom\"&&(n||i)){i=i||n;i.scrollTop=i.scrollHeight}}if(t.show){var i=null;if(t.showTarget){var a=t.showTarget;if(t.showTarget===\"window\"){a=\"body\"}i=ue(r,a)}if(t.show===\"top\"&&(r||i)){i=i||r;i.scrollIntoView({block:\"start\",behavior:Q.config.scrollBehavior})}if(t.show===\"bottom\"&&(n||i)){i=i||n;i.scrollIntoView({block:\"end\",behavior:Q.config.scrollBehavior})}}}function Rr(e,t,r,n){if(n==null){n={}}if(e==null){return n}var i=te(e,t);if(i){var a=i.trim();var o=r;if(a===\"unset\"){return null}if(a.indexOf(\"javascript:\")===0){a=a.substr(11);o=true}else if(a.indexOf(\"js:\")===0){a=a.substr(3);o=true}if(a.indexOf(\"{\")!==0){a=\"{\"+a+\"}\"}var s;if(o){s=Tr(e,function(){return Function(\"return (\"+a+\")\")()},{})}else{s=E(a)}for(var l in s){if(s.hasOwnProperty(l)){if(n[l]==null){n[l]=s[l]}}}}return Rr(u(e),t,r,n)}function Tr(e,t,r){if(Q.config.allowEval){return t()}else{fe(e,\"htmx:evalDisallowedError\");return r}}function Or(e,t){return Rr(e,\"hx-vars\",true,t)}function qr(e,t){return Rr(e,\"hx-vals\",false,t)}function Hr(e){return le(Or(e),qr(e))}function Lr(t,r,n){if(n!==null){try{t.setRequestHeader(r,n)}catch(e){t.setRequestHeader(r,encodeURIComponent(n));t.setRequestHeader(r+\"-URI-AutoEncoded\",\"true\")}}}function Ar(t){if(t.responseURL&&typeof URL!==\"undefined\"){try{var e=new URL(t.responseURL);return e.pathname+e.search}catch(e){fe(re().body,\"htmx:badResponseUrl\",{url:t.responseURL})}}}function O(e,t){return t.test(e.getAllResponseHeaders())}function Nr(e,t,r){e=e.toLowerCase();if(r){if(r instanceof Element||I(r,\"String\")){return he(e,t,null,null,{targetOverride:p(r),returnPromise:true})}else{return he(e,t,p(r.source),r.event,{handler:r.handler,headers:r.headers,values:r.values,targetOverride:p(r.target),swapOverride:r.swap,select:r.select,returnPromise:true})}}else{return he(e,t,null,null,{returnPromise:true})}}function Ir(e){var t=[];while(e){t.push(e);e=e.parentElement}return t}function kr(e,t,r){var n;var i;if(typeof URL===\"function\"){i=new URL(t,document.location.href);var a=document.location.origin;n=a===i.origin}else{i=t;n=g(t,document.location.origin)}if(Q.config.selfRequestsOnly){if(!n){return false}}return ce(e,\"htmx:validateUrl\",le({url:i,sameHost:n},r))}function he(t,r,n,i,a,e){var o=null;var s=null;a=a!=null?a:{};if(a.returnPromise&&typeof Promise!==\"undefined\"){var l=new Promise(function(e,t){o=e;s=t})}if(n==null){n=re().body}var M=a.handler||Mr;var X=a.select||null;if(!se(n)){ie(o);return l}var u=a.targetOverride||ye(n);if(u==null||u==pe){fe(n,\"htmx:targetError\",{target:te(n,\"hx-target\")});ie(s);return l}var f=ae(n);var c=f.lastButtonClicked;if(c){var h=ee(c,\"formaction\");if(h!=null){r=h}var v=ee(c,\"formmethod\");if(v!=null){if(v.toLowerCase()!==\"dialog\"){t=v}}}var d=ne(n,\"hx-confirm\");if(e===undefined){var D=function(e){return he(t,r,n,i,a,!!e)};var U={target:u,elt:n,path:r,verb:t,triggeringEvent:i,etc:a,issueRequest:D,question:d};if(ce(n,\"htmx:confirm\",U)===false){ie(o);return l}}var g=n;var p=ne(n,\"hx-sync\");var m=null;var x=false;if(p){var F=p.split(\":\");var B=F[0].trim();if(B===\"this\"){g=xe(n,\"hx-sync\")}else{g=ue(n,B)}p=(F[1]||\"drop\").trim();f=ae(g);if(p===\"drop\"&&f.xhr&&f.abortable!==true){ie(o);return l}else if(p===\"abort\"){if(f.xhr){ie(o);return l}else{x=true}}else if(p===\"replace\"){ce(g,\"htmx:abort\")}else if(p.indexOf(\"queue\")===0){var V=p.split(\" \");m=(V[1]||\"last\").trim()}}if(f.xhr){if(f.abortable){ce(g,\"htmx:abort\")}else{if(m==null){if(i){var y=ae(i);if(y&&y.triggerSpec&&y.triggerSpec.queue){m=y.triggerSpec.queue}}if(m==null){m=\"last\"}}if(f.queuedRequests==null){f.queuedRequests=[]}if(m===\"first\"&&f.queuedRequests.length===0){f.queuedRequests.push(function(){he(t,r,n,i,a)})}else if(m===\"all\"){f.queuedRequests.push(function(){he(t,r,n,i,a)})}else if(m===\"last\"){f.queuedRequests=[];f.queuedRequests.push(function(){he(t,r,n,i,a)})}ie(o);return l}}var b=new XMLHttpRequest;f.xhr=b;f.abortable=x;var w=function(){f.xhr=null;f.abortable=false;if(f.queuedRequests!=null&&f.queuedRequests.length>0){var e=f.queuedRequests.shift();e()}};var j=ne(n,\"hx-prompt\");if(j){var S=prompt(j);if(S===null||!ce(n,\"htmx:prompt\",{prompt:S,target:u})){ie(o);w();return l}}if(d&&!e){if(!confirm(d)){ie(o);w();return l}}var E=xr(n,u,S);if(t!==\"get\"&&!Sr(n)){E[\"Content-Type\"]=\"application\/x-www-form-urlencoded\"}if(a.headers){E=le(E,a.headers)}var _=dr(n,t);var C=_.errors;var R=_.values;if(a.values){R=le(R,a.values)}var z=Hr(n);var $=le(R,z);var T=yr($,n);if(Q.config.getCacheBusterParam&&t===\"get\"){T[\"org.htmx.cache-buster\"]=ee(u,\"id\")||\"true\"}if(r==null||r===\"\"){r=re().location.href}var O=Rr(n,\"hx-request\");var W=ae(n).boosted;var q=Q.config.methodsThatUseUrlParams.indexOf(t)>=0;var H={boosted:W,useUrlParams:q,parameters:T,unfilteredParameters:$,headers:E,target:u,verb:t,errors:C,withCredentials:a.credentials||O.credentials||Q.config.withCredentials,timeout:a.timeout||O.timeout||Q.config.timeout,path:r,triggeringEvent:i};if(!ce(n,\"htmx:configRequest\",H)){ie(o);w();return l}r=H.path;t=H.verb;E=H.headers;T=H.parameters;C=H.errors;q=H.useUrlParams;if(C&&C.length>0){ce(n,\"htmx:validation:halted\",H);ie(o);w();return l}var G=r.split(\"#\");var J=G[0];var L=G[1];var A=r;if(q){A=J;var Z=Object.keys(T).length!==0;if(Z){if(A.indexOf(\"?\")<0){A+=\"?\"}else{A+=\"&\"}A+=pr(T);if(L){A+=\"#\"+L}}}if(!kr(n,A,H)){fe(n,\"htmx:invalidPath\",H);ie(s);return l}b.open(t.toUpperCase(),A,true);b.overrideMimeType(\"text\/html\");b.withCredentials=H.withCredentials;b.timeout=H.timeout;if(O.noHeaders){}else{for(var N in E){if(E.hasOwnProperty(N)){var K=E[N];Lr(b,N,K)}}}var I={xhr:b,target:u,requestConfig:H,etc:a,boosted:W,select:X,pathInfo:{requestPath:r,finalRequestPath:A,anchor:L}};b.onload=function(){try{var e=Ir(n);I.pathInfo.responsePath=Ar(b);M(n,I);lr(k,P);ce(n,\"htmx:afterRequest\",I);ce(n,\"htmx:afterOnLoad\",I);if(!se(n)){var t=null;while(e.length>0&&t==null){var r=e.shift();if(se(r)){t=r}}if(t){ce(t,\"htmx:afterRequest\",I);ce(t,\"htmx:afterOnLoad\",I)}}ie(o);w()}catch(e){fe(n,\"htmx:onLoadError\",le({error:e},I));throw e}};b.onerror=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:sendError\",I);ie(s);w()};b.onabort=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:sendAbort\",I);ie(s);w()};b.ontimeout=function(){lr(k,P);fe(n,\"htmx:afterRequest\",I);fe(n,\"htmx:timeout\",I);ie(s);w()};if(!ce(n,\"htmx:beforeRequest\",I)){ie(o);w();return l}var k=or(n);var P=sr(n);oe([\"loadstart\",\"loadend\",\"progress\",\"abort\"],function(t){oe([b,b.upload],function(e){e.addEventListener(t,function(e){ce(n,\"htmx:xhr:\"+t,{lengthComputable:e.lengthComputable,loaded:e.loaded,total:e.total})})})});ce(n,\"htmx:beforeSend\",I);var Y=q?null:Er(b,n,T);b.send(Y);return l}function Pr(e,t){var r=t.xhr;var n=null;var i=null;if(O(r,\/HX-Push:\/i)){n=r.getResponseHeader(\"HX-Push\");i=\"push\"}else if(O(r,\/HX-Push-Url:\/i)){n=r.getResponseHeader(\"HX-Push-Url\");i=\"push\"}else if(O(r,\/HX-Replace-Url:\/i)){n=r.getResponseHeader(\"HX-Replace-Url\");i=\"replace\"}if(n){if(n===\"false\"){return{}}else{return{type:i,path:n}}}var a=t.pathInfo.finalRequestPath;var o=t.pathInfo.responsePath;var s=ne(e,\"hx-push-url\");var l=ne(e,\"hx-replace-url\");var u=ae(e).boosted;var f=null;var c=null;if(s){f=\"push\";c=s}else if(l){f=\"replace\";c=l}else if(u){f=\"push\";c=o||a}if(c){if(c===\"false\"){return{}}if(c===\"true\"){c=o||a}if(t.pathInfo.anchor&&c.indexOf(\"#\")===-1){c=c+\"#\"+t.pathInfo.anchor}return{type:f,path:c}}else{return{}}}function Mr(l,u){var f=u.xhr;var c=u.target;var e=u.etc;var t=u.requestConfig;var h=u.select;if(!ce(l,\"htmx:beforeOnLoad\",u))return;if(O(f,\/HX-Trigger:\/i)){_e(f,\"HX-Trigger\",l)}if(O(f,\/HX-Location:\/i)){er();var r=f.getResponseHeader(\"HX-Location\");var v;if(r.indexOf(\"{\")===0){v=E(r);r=v[\"path\"];delete v[\"path\"]}Nr(\"GET\",r,v).then(function(){tr(r)});return}var n=O(f,\/HX-Refresh:\/i)&&\"true\"===f.getResponseHeader(\"HX-Refresh\");if(O(f,\/HX-Redirect:\/i)){location.href=f.getResponseHeader(\"HX-Redirect\");n&&location.reload();return}if(n){location.reload();return}if(O(f,\/HX-Retarget:\/i)){if(f.getResponseHeader(\"HX-Retarget\")===\"this\"){u.target=l}else{u.target=ue(l,f.getResponseHeader(\"HX-Retarget\"))}}var d=Pr(l,u);var i=f.status>=200&&f.status<400&&f.status!==204;var g=f.response;var a=f.status>=400;var p=Q.config.ignoreTitle;var o=le({shouldSwap:i,serverResponse:g,isError:a,ignoreTitle:p},u);if(!ce(c,\"htmx:beforeSwap\",o))return;c=o.target;g=o.serverResponse;a=o.isError;p=o.ignoreTitle;u.target=c;u.failed=a;u.successful=!a;if(o.shouldSwap){if(f.status===286){at(l)}R(l,function(e){g=e.transformResponse(g,f,l)});if(d.type){er()}var s=e.swapOverride;if(O(f,\/HX-Reswap:\/i)){s=f.getResponseHeader(\"HX-Reswap\")}var v=wr(l,s);if(v.hasOwnProperty(\"ignoreTitle\")){p=v.ignoreTitle}c.classList.add(Q.config.swappingClass);var m=null;var x=null;var y=function(){try{var e=document.activeElement;var t={};try{t={elt:e,start:e?e.selectionStart:null,end:e?e.selectionEnd:null}}catch(e){}var r;if(h){r=h}if(O(f,\/HX-Reselect:\/i)){r=f.getResponseHeader(\"HX-Reselect\")}if(d.type){ce(re().body,\"htmx:beforeHistoryUpdate\",le({history:d},u));if(d.type===\"push\"){tr(d.path);ce(re().body,\"htmx:pushedIntoHistory\",{path:d.path})}else{rr(d.path);ce(re().body,\"htmx:replacedInHistory\",{path:d.path})}}var n=T(c);je(v.swapStyle,c,l,g,n,r);if(t.elt&&!se(t.elt)&&ee(t.elt,\"id\")){var i=document.getElementById(ee(t.elt,\"id\"));var a={preventScroll:v.focusScroll!==undefined?!v.focusScroll:!Q.config.defaultFocusScroll};if(i){if(t.start&&i.setSelectionRange){try{i.setSelectionRange(t.start,t.end)}catch(e){}}i.focus(a)}}c.classList.remove(Q.config.swappingClass);oe(n.elts,function(e){if(e.classList){e.classList.add(Q.config.settlingClass)}ce(e,\"htmx:afterSwap\",u)});if(O(f,\/HX-Trigger-After-Swap:\/i)){var o=l;if(!se(l)){o=re().body}_e(f,\"HX-Trigger-After-Swap\",o)}var s=function(){oe(n.tasks,function(e){e.call()});oe(n.elts,function(e){if(e.classList){e.classList.remove(Q.config.settlingClass)}ce(e,\"htmx:afterSettle\",u)});if(u.pathInfo.anchor){var e=re().getElementById(u.pathInfo.anchor);if(e){e.scrollIntoView({block:\"start\",behavior:\"auto\"})}}if(n.title&&!p){var t=C(\"title\");if(t){t.innerHTML=n.title}else{window.document.title=n.title}}Cr(n.elts,v);if(O(f,\/HX-Trigger-After-Settle:\/i)){var r=l;if(!se(l)){r=re().body}_e(f,\"HX-Trigger-After-Settle\",r)}ie(m)};if(v.settleDelay>0){setTimeout(s,v.settleDelay)}else{s()}}catch(e){fe(l,\"htmx:swapError\",u);ie(x);throw e}};var b=Q.config.globalViewTransitions;if(v.hasOwnProperty(\"transition\")){b=v.transition}if(b&&ce(l,\"htmx:beforeTransition\",u)&&typeof Promise!==\"undefined\"&&document.startViewTransition){var w=new Promise(function(e,t){m=e;x=t});var S=y;y=function(){document.startViewTransition(function(){S();return w})}}if(v.swapDelay>0){setTimeout(y,v.swapDelay)}else{y()}}if(a){fe(l,\"htmx:responseError\",le({error:\"Response Status Error Code \"+f.status+\" from \"+u.pathInfo.requestPath},u))}}var Xr={};function Dr(){return{init:function(e){return null},onEvent:function(e,t){return true},transformResponse:function(e,t,r){return e},isInlineSwap:function(e){return false},handleSwap:function(e,t,r,n){return false},encodeParameters:function(e,t,r){return null}}}function Ur(e,t){if(t.init){t.init(r)}Xr[e]=le(Dr(),t)}function Fr(e){delete Xr[e]}function Br(e,r,n){if(e==undefined){return r}if(r==undefined){r=[]}if(n==undefined){n=[]}var t=te(e,\"hx-ext\");if(t){oe(t.split(\",\"),function(e){e=e.replace(\/ \/g,\"\");if(e.slice(0,7)==\"ignore:\"){n.push(e.slice(7));return}if(n.indexOf(e)<0){var t=Xr[e];if(t&&r.indexOf(t)<0){r.push(t)}}})}return Br(u(e),r,n)}var Vr=false;re().addEventListener(\"DOMContentLoaded\",function(){Vr=true});function jr(e){if(Vr||re().readyState===\"complete\"){e()}else{re().addEventListener(\"DOMContentLoaded\",e)}}function _r(){if(Q.config.includeIndicatorStyles!==false){re().head.insertAdjacentHTML(\"beforeend\",\"<style>                      .\"+Q.config.indicatorClass+\"{opacity:0}                      .\"+Q.config.requestClass+\" .\"+Q.config.indicatorClass+\"{opacity:1; transition: opacity 200ms ease-in;}                      .\"+Q.config.requestClass+\".\"+Q.config.indicatorClass+\"{opacity:1; transition: opacity 200ms ease-in;}                    <\/style>\")}}function zr(){var e=re().querySelector(\'meta[name=\"htmx-config\"]\');if(e){return E(e.content)}else{return null}}function $r(){var e=zr();if(e){Q.config=le(Q.config,e)}}jr(function(){$r();_r();var e=re().body;zt(e);var t=re().querySelectorAll(\"[hx-trigger=\'restored\'],[data-hx-trigger=\'restored\']\");e.addEventListener(\"htmx:abort\",function(e){var t=e.target;var r=ae(t);if(r&&r.xhr){r.xhr.abort()}});const r=window.onpopstate?window.onpopstate.bind(window):null;window.onpopstate=function(e){if(e.state&&e.state.htmx){ar();oe(t,function(e){ce(e,\"htmx:restored\",{document:re(),triggerEvent:ce})})}else{if(r){r(e)}}};setTimeout(function(){ce(e,\"htmx:load\",{});e=null},0)});return Q}()});
`;

/* eslint-disable */
/**
 *
 * @param {FetchEvent} event
 */
function main(event) {  
  if (event.request.url.endsWith('/messages')) {
    const message = messages[Math.floor(Math.random() * messages.length)];
    return new Response(message, {
      headers: {
        'Content-Type': 'plain/text'
      }
    });
  }
   
  return new Response(`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-6.jpg" type="image/png"> 
  <link rel="stylesheet" href="https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css">
  <!-- 
    - primary meta tag
  -->
  <title>Pokemon Center</title>
  <meta name="title" content="Pokemon Center">
  <meta name="description" content="This is an eCommerce">


  <!-- 
    - custom css link
  -->
  <style>
    

/*CUSTOM PROPERTY*/

:root {
  
  --bright-yellow-crayola: hsl(36, 94%, 57%);
  --portland-orange: hsl(15, 84%, 57%);
  --battleship-gray: hsl(0, 0%, 53%);
  --silver-chalice: hsl(0, 0%, 70%);
  --spanish-gray: hsl(0, 0%, 60%);
  --sonic-silver: hsl(208, 7%, 46%);
  --raisin-black: hsl(228, 6%, 17%);
  --eerie-black: hsl(210, 3%, 13%);
  --bittersweet: hsl(9, 96%, 69%);
  --light-gray: hsl(0, 0%, 80%);
  --platinum: hsl(0, 0%, 91%);
  --amber: hsl(45, 100%, 51%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --onyx: hsl(220, 2%, 24%);

  --ff-bangers: 'Bangers', cursive;
  --ff-carter_one: 'Carter One', cursive;
  --ff-nunito_sans: 'Nunito Sans', sans-serif;

  --fs-1: 6.5rem;
  --fs-2: 3.2rem;
  --fs-3: 2.4rem;
  --fs-4: 2rem;
  --fs-5: 1.8rem;
  --fs-6: 1.5rem;
  --fs-7: 1.4rem;
  --fs-8: 1rem;

  --fw-400: 400;
  --fw-700: 700;

  --section-padding: 40px;

  --shadow-1: 0 8px 16px hsla(0, 0%, 0%, 0.15);
  --shadow-2: 0 8px 8px hsla(0, 0%, 0%, 0.2);

  --radius-4: 4px;
  --radius-10: 10px;

  --transition-1: 0.25s ease;
  --transition-2: 0.5s ease;
  --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
  --cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);

}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li { list-style: none; }

a,
img,
span,
button,
ion-icon { display: block; }

a {
  color: inherit;
  text-decoration: none;
}

img { height: auto; }

button {
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

ion-icon { pointer-events: none; }

address { font-style: normal; }

html {
  font-family: var(--ff-nunito_sans);
  font-size: 10px;
  scroll-behavior: smooth;
}

body {
  background-color: var(--white);
  color: var(--black);
  font-size: 1.6rem;
  line-height: 1.5;
}

:focus-visible { outline-offset: 4px; }

::-webkit-scrollbar { width: 10px; }

::-webkit-scrollbar-track { background-color: hsl(0, 0%, 98%); }

::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }

::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }

.container { padding-inline: 15px; }

.section { padding-block: var(--section-padding); }

.has-bg-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: black; /* Fully opaque black */
  opacity: 5.5; /* 50% transparent */
}

.h1,
.h2,
.h3 { line-height: 1.1; }

.h1 {
  color: var(--white);
  -webkit-text-stroke: 2px #8aa2d9; /* Navy Blue border */    
  font-family: var(--ff-bangers);
  font-size: var(--fs-1);
  font-weight: var(--fw-400);
  letter-spacing: 1px;
}

.h2,
.h3 { color: var(--eerie-black); }

.h2 { font-size: var(--fs-2); }

.h3 { font-size: var(--fs-3); }

.btn {
  background-color: var(--black);
  color: var(--white);
  max-width: max-content;
  padding: 8px 25px;
  font-weight: var(--fw-700);
  border-radius: 50px;
  transition: var(--transition-1);
}

.section-title {
  text-align: center;
  margin-block-end: 30px;
}

.section-title .span {
  display: inline;
  color: var(--portland-orange);
}

.img-holder {
  aspect-ratio: var(--width) / var(--height);
  background-color: var(--light-gray);
  overflow: hidden;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.has-scrollbar {
  display: flex;
  align-items: center;
  gap: 30px;
  overflow-x: auto;
  scroll-snap-type: inline mandatory;
  padding-block-end: 20px;
  margin-block-end: -20px;
}

.scrollbar-item {
  min-width: 100%;
  scroll-snap-align: start;
}

.has-scrollbar::-webkit-scrollbar { height: 10px; }

.has-scrollbar::-webkit-scrollbar-track {
  outline: 2px solid var(--portland-orange);
  border-radius: var(--radius-10);
}

.has-scrollbar::-webkit-scrollbar-thumb {
  border-radius: var(--radius-10);
  background-color: var(--portland-orange);
  border: 2px solid var(--white);
}

.has-scrollbar::-webkit-scrollbar-button { width: calc(25% - 30px); }

.grid-list {
  display: grid;
  gap: 30px;
}

.w-100 { width: 100%; }

.action-btn.user { display: none; }

.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--white);
  padding-block: 20px;
  z-index: 4;
}

.header.active {
  position: fixed;
  box-shadow: var(--shadow-1);
}

.header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.nav-toggle-btn {
  font-size: 30px;
  transition: var(--transition-1);
}

.nav-toggle-btn.active .menu-icon,
.nav-toggle-btn .close-icon { display: none; }

.nav-toggle-btn .menu-icon,
.nav-toggle-btn.active .close-icon { display: block; }

.logo {
  font-family: var(--ff-carter_one);
  font-size: 3rem;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.header .action-btn {
  position: relative;
  font-size: 22px;
  transition: var(--transition-1);
}

.header .btn-badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: var(--portland-orange);
  color: var(--white);
  font-size: var(--fs-8);
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50px;
}

.nav-toggle-btn:is(:hover, :focus),
.header .action-btn:is(:hover, :focus) { transform: scale(1.1); }

.navbar {
  position: fixed;
  top: 85px;
  left: -320px;
  bottom: 0;
  background-color: var(--white);
  max-width: 320px;
  width: 100%;
  padding: 20px 10px;
  box-shadow: var(--shadow-2);
  transition: 0.25s var(--cubic-out);
  overflow-x: hidden;
  overflow-y: auto;
}

.navbar.active {
  transform: translateX(320px);
  transition-timing-function: var(--cubic-in);
}

.navbar-link {
  color: var(--eerie-black);
  font-size: var(--fs-6);
  padding: 10px 15px;
}

.navbar-action-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background-color: var(--sonic-silver);
  color: var(--white);
  font-weight: var(--fw-700);
  text-transform: uppercase;
  text-align: center;
}

.hero {
  margin-block-start: 85px;
  min-height: 360px;
  background-position: left;
  text-align: center;
}

.hero-title .span { font-size: 0.5em; }

.hero-text {
  color: var(--white);
  margin-block: 15px 25px;
}

.hero .btn { margin-inline: auto; }

.hero .btn:is(:hover, :focus) { background-color: var(--portland-orange); }



.category-card .card-banner { border-radius: var(--radius-10); }

.category-card .img-cover { transition: var(--transition-2); }

.category-card:is(:hover, :focus-within) .img-cover { transform: scale(1.08); }

.category-card .card-title {
  margin-block-start: 15px;
  text-align: center;
  transition: var(--transition-1);
}

.category-card .card-title:is(:hover, :focus) { color: var(--portland-orange); }

.offer-card {
  border-radius: var(--radius-10);
  padding: 20px;
  display: grid;
  align-content: center;
}

.offer-card .card-subtitle {
  font-size: var(--fs-7);
  text-transform: uppercase;
  font-weight: var(--fw-700);
}

.offer-card .card-title {
  color: var(--black);
  margin-block: 5px 24px;
}

.offer-card .btn { background-color: var(--portland-orange); }

.offer-card .btn:is(:hover, :focus) { background-color: var(--black); }


.product .img-cover.hover,
.product-card .card-action-btn { display: none; }

.product-card { text-align: center; }

.product-card .card-banner {
  border: 1px solid var(--platinum);
  border-radius: var(--radius-10);
  margin-block-end: 20px;
}

.product-card :is(.wrapper, .rating-wrapper) { display: flex; }

.product-card .wrapper {
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--silver-chalice);
  font-size: var(--fs-7);
}

.product-card .rating-wrapper {
  color: var(--amber);
  gap: 2px;
}

.product-card .rating-wrapper.gray { color: unset; }

.product-card .h3 {
  --fs-3: 1.8rem;
  margin-block: 8px 10px;
}

.product-card .card-title { transition: var(--transition-1); }

.product-card .card-title:is(:hover, :focus) { color: var(--portland-orange); }

.product-card .card-price {
  color: var(--portland-orange);
  font-size: var(--fs-4);
  font-weight: var(--fw-700);
}

.service .img {
  margin-inline: auto;
  margin-block-end: 30px;
}

.service .section-title { margin-block-end: 60px; }

.service-card { text-align: center; }

.service-card .card-icon {
  max-width: max-content;
  margin-inline: auto;
}

.service-card .card-title { margin-block: 10px; }

.service-card .card-text { color: var(--spanish-gray); }

.cta { background-position: 75%; }

.cta-banner { display: none; }

.cta-content { padding-block: 80px var(--section-padding); }

.cta .section-title {
  text-align: left;
  margin-block: 10px 20px;
}

.cta .section-text { margin-block-end: 30px; }

.cta .btn:is(:hover, :focus) {
  background-color: var(--white);
  color: var(--black);
}

.brand { --section-padding: 100px; }

.brand .has-scrollbar { gap: 0; }

.brand .scrollbar-item { min-width: 50%; }

.brand .scrollbar-item:not(:last-child) { border-inline-end: 1px solid var(--platinum); }

.brand-card {
  max-width: max-content;
  margin-inline: auto;
}


.footer {
  background-color: var(--raisin-black);
  color: var(--battleship-gray);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
}

.footer-top {
  padding-block-start: 100px;
  border-block-end: 1px solid var(--onyx);
}

.footer-top .container {
  display: grid;
  gap: 30px;
}

.footer .logo {
  color: var(--white);
  margin-block-end: 10px;
}

.footer-text {
  font-size: var(--fs-6);
  margin-block-end: 25px;
}

.footer-text .link {
  display: inline-block;
  color: var(--portland-orange);
}

.contact-item {
  margin-block-end: 15px;
  color: var(--white);
  font-weight: var(--fw-700);
  display: flex;
  align-items: center;
  gap: 15px;
}

.contact-item ion-icon {
  flex-shrink: 0;
  font-size: 22px;
  color: var(--portland-orange);
}

.social-list {
  display: flex;
  gap: 10px;
}

.social-link {
  background-color: var(--white);
  color: var(--black);
  padding: 12px;
  border-radius: 50%;
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus) {
  background-color: var(--portland-orange);
  color: var(--white);
}

.footer-list-title {
  color: var(--white);
  font-size: var(--fs-5);
  font-weight: var(--fw-700);
  padding-block: 10px;
}

.footer-link {
  padding-block: 4px;
  transition: var(--transition-1);
}

.footer-link:is(:hover, :focus) { color: var(--portland-orange); }

.footer-bottom { padding-block: 20px; }

.copyright { margin-block-end: 10px; }

.copyright-link { display: inline-block; }

.footer-bottom .img {
  width: 100%;
  max-width: max-content;
}




/*BACK TO TOP*/

.back-top-btn {
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: var(--portland-orange);
  color: var(--white);
  font-size: 25px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: var(--shadow-2);
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-1);
  z-index: 4;
}

.back-top-btn.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(-10px);
}





/*
  #MEDIA QUERIES
*/

/**
 * responsive for large than 575px screen
 */

@media (min-width: 575px) {

  /*
    CUSTOM PROPERTY
   */

  :root {

    /*
      typography
    */

    --fs-2: 4rem;
    --fs-3: 2.6rem;

  }



  /*
  REUSED STYLE
   */

  .scrollbar-item { min-width: calc(50% - 15px); }

  .grid-list { grid-template-columns: 1fr 1fr; }



  /**
   * HERO
   */

  .hero {
    display: grid;
    padding-inline-start: 20px;
    justify-content: flex-start;
    align-items: center;
  }



  /**
   * OFFER
   */

  .offer .grid-list { grid-template-columns: 1fr; }



  /**
   * PRODUCT
   */

  .product-card .card-banner { position: relative; }

  .product-card .card-action-btn,
  .product-card .card-banner .hover {
    display: block;
    position: absolute;
  }

  .product-card .card-banner .hover {
    top: 0;
    left: 0;
  }

  .product-card:is(:hover, :focus-within) .default,
  

  .product-card .default,
  .product-card:is(:hover, :focus-within) .hover { opacity: 1; }
/*---*/
  .product-card .card-action-btn {
    top: 15px;
    right: 15px;
    color: var(--eerie-black);
    font-size: 20px;
    background-color: var(--white);
    border: 1px solid var(--platinum);
    padding: 12px;
    border-radius: 50%;
    transition: var(--transition-1);
    opacity: 0;
  }

  .product-card .card-action-btn:is(:hover, :focus) {
    background-color: var(--portland-orange);
    border-color: var(--portland-orange);
    color: var(--white);
  }

  .product-card:is(:hover, :focus-within) .card-action-btn { opacity: 1; }



  /**
   * CTA
   */

  .cta .img { width: 250px; }

  .cta .h2 { --fs-2: 3.2rem; }



  /**
   * BRAND
   */

  .brand .scrollbar-item { min-width: 25%; }



  /**
   * FOOTER
   */

  .footer-top .container { grid-template-columns: 1fr 1fr; }

}





/**
 * responsive for large than 768px screen
 */

@media (min-width: 768px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 9rem;

  }



  /**
   * REUSED STYLE
   */

  .scrollbar-item { min-width: calc(33.33% - 20px); }

  .grid-list { grid-template-columns: repeat(3, 1fr); }



  /**
   * HERO
   */

  .hero {
    aspect-ratio: 1512 / 784;
    padding-inline-start: 10%;
  }

  .hero-text { font-size: 2.4rem; }



  /**
   * OFFER
   */

  .offer .grid-list { grid-template-columns: repeat(3, 1fr); }




  /**
   * FOOTER
   */

  .footer-bottom .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}





/**
 * responsive for large than 992px screen
 */

@media (min-width: 992px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 12rem;
    --fs-3: 3rem;

    /**
     * spacing
     */

    --section-padding: 50px;

  }



  /**
   * REUSED STYLE
   */

  .container { padding-inline: 30px; }

  .scrollbar-item { min-width: calc(20% - 24px); }



  /**
   * HEADER
   */

  .nav-toggle-btn,
  .navbar-action-btn { display: none; }

  .header {
    --color: var(--white);
    background: none;
  }

  .header.active {
    --color: var(--black);
    background-color: var(--white);
  }

  .header .logo,
  .header .action-btn { color: var(--color); }

  .header .action-btn.user { display: block; }

  .logo { font-size: 3.8rem; }

  .navbar,
  .navbar.active {
    all: unset;
    margin-inline-end: auto;
  }

  .navbar-list {
    display: flex;
    gap: 10px;
  }

  .navbar-link {
    color: var(--color);
    --fs-6: 1.7rem;
    font-weight: var(--fw-700);
    transition: var(--transition-1);
  }

  .header.active .navbar-link:is(:hover, :focus) { color: var(--portland-orange); }



  /**
   * HERO
   */

  .hero { margin-block-start: 0; }



  /**
   * CATEGORY
   */

  .category-card .h3 { --fs-3: 2rem; }



  /**
   * SERVICE
   */

  .service .grid-list { grid-template-columns: repeat(4, 1fr); }

  .service-card .h3 { --fs-3: 2.4rem; }



  /**
   * BRAND
   */

  .brand .scrollbar-item { min-width: 20%; }



  /**
   * FOOTER
   */

  .footer-top .container { grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr; }

}





/**
 * responsive for large than 1200px screen
 */

@media (min-width: 1200px) {

  /**
   * CUSTOM PROPERTY
   */

  :root {

    /**
     * typography
     */

    --fs-1: 15rem;
    --fs-3: 3.2rem;

  }



  /**
   * REUSED STYLE
   */

  .grid-list { grid-template-columns: repeat(4, 1fr); }



  /**
   * CTA
   */

 



  /**
   * BRAND, FOOTER
   */

  :is(.brand, .footer) .container {
    max-width: 1200px;
    width: 100%;
    margin-inline: auto;
  }

  .footer { padding-block-start: 40px; }

}
  </style>

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Bangers&family=Carter+One&family=Nunito+Sans:wght@400;700&display=swap"
    rel="stylesheet">

  <!-- 
    - preload images
  -->
  <link rel="preload" as="image" href="#.jpg">

</head>

<body id="top">

  <!-- 
    - #HEADER
  -->

  <header class="header" data-header>
    <div class="container">

      <button class="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
        <ion-icon name="close-outline" aria-label="true" class="close-icon"></ion-icon>
      </button>

      <a href="#" class="logo">Pokemon Center</a>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#shop" class="navbar-link" data-nav-link>Shop</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Collections</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Blogs</a>
          </li>

          <li class="navbar-item">
            <a href="#" class="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

        <a href="login.html" class="navbar-action-btn">Log In</a>
      </nav>

      <div class="header-actions">

        <button class="action-btn" aria-label="Search">
          <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
        </button>

        <a href="login.html" style="text-decoration: none;">
          <button style="background-color: rgb(255, 106, 0); color: white; border: none; padding: 5px 10px; cursor: pointer; font-size: 16px; border-radius: 5px;">
            Log In
        </button>
      </div>

    </div>
  </header>





  <main>
    <article>

      <!-- 
        - #HERO
      -->

      <section class="section hero has-bg-image" id="home" aria-label="home"
        style="background-image: url('https://i.pinimg.com/originals/a3/f7/20/a3f7208321d170bae649255a0845e5fe.jpg')">
        <div class="container">

          <h1 class="h1 hero-title">
            <span class="span">Journey Starts</span>Here
          </h1>

          <p class="hero-text">Find the perfect Pokémon gift for any occasion.</p>

          <a href="#" class="btn">Shop Now</a>

        </div>
      </section>





      <!-- 
        - #CATEGORY
      -->

      <section class="section category" aria-label="category">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Top</span> categories
          </h2>

          <ul class="has-scrollbar">

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="https://i.pinimg.com/originals/47/08/7f/47087fa174d25e5c0fde8cabb2e9ce42.jpg" width="330" height="300" loading="lazy" alt="plush"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Plush</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="https://i.pinimg.com/originals/8f/49/10/8f49106c36a26731dbf6e11b6a9fda10.jpg" width="330" height="300" loading="lazy" alt="Clothing"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Clothing</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="https://i.pinimg.com/originals/13/f8/53/13f853319f5fa45ccafbee4f5495de2a.png" width="330" height="300" loading="lazy" alt="Trading Card Game"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Trading Card Game</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="https://i.pinimg.com/originals/b4/a1/9d/b4a19dc80753e3f6cbc7bdcd52090c79.jpg" width="330" height="300" loading="lazy" alt="Stickers"
                    class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Stickers</a>
                </h3>

              </div>
            </li>

            <li class="scrollbar-item">
              <div class="category-card">

                <figure class="card-banner img-holder" style="--width: 330; --height: 300;">
                  <img src="https://i.pinimg.com/originals/0f/29/e5/0f29e5d759b338d166ce757d1a9412f4.jpg" width="330" height="300" loading="lazy"
                    alt="Holiday Special" class="img-cover">
                </figure>

                <h3 class="h3">
                  <a href="#" class="card-title">Holiday Special</a>
                </h3>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #OFFERS
      -->

      <section class="section offer" aria-label="offer">
        <div class="container">

          <ul class="grid-list">

            <li>
              <div class="offer-card has-bg-image img-holder" style="position: relative; --width: 540; --height: 374; background-image: url('https://wallpaperaccess.com/full/135120.png');">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.5); z-index: 1;"></div>
                
                <p class="card-subtitle" style="position: relative; z-index: 2;">Selected Items. Online Only.</p>
                
                <h3 class="h3 card-title" style="position: relative; z-index: 2;">
                  Winter Special <span class="span">Deals</span>
                </h3>
                
                <a href="#" class="btn" style="position: relative; z-index: 2;">Read More</a>
              </div>
            </li>
            
            <li>
              <div class="offer-card has-bg-image img-holder" style="position: relative; --width: 540; --height: 374; background-image: url('https://static1.thegamerimages.com/wordpress/wp-content/uploads/2023/12/wiglett-and-sleeping-cubone-pokemon-plushes.jpg');">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.5); z-index: 1;"></div>
                
                <p class="card-subtitle" style="position: relative; z-index: 2;">Original Squishmallows</p>
                
                <h3 class="h3 card-title" style="position: relative; z-index: 2;">
                  Shop new arrival<span class="span">plush</span>
                </h3>
                
                <a href="#" class="btn" style="position: relative; z-index: 2;">Read More</a>
              </div>
            </li>
            
            <li>
              <div class="offer-card has-bg-image img-holder" style="position: relative; --width: 540; --height: 374; background-image: url('https://gonintendo.com/attachments/image/10966/file/medium-c686678144421c784532a99e8cf7ffba.webp');">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.5); z-index: 1;"></div>
                
                <p class="card-subtitle" style="position: relative; z-index: 2;">Our Brand You Will Love</p>
                
                <h3 class="h3 card-title" style="position: relative; z-index: 2;">
                  New in this <span class="span">year</span>
                </h3>
                
                <a href="#" class="btn" style="position: relative; z-index: 2;">Read More</a>
              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #PRODUCT
      -->

      <section class="section product" id="shop" aria-label="product">
        <div class="container">

          <h2 class="h2 section-title">
            <span class="span">Best</span> Seller
          </h2>

          <ul class="grid-list">

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://www.wikihow.com/images/5/51/Sell-Your-Pokemon-Cards-Step-13.jpg" width="360" height="360" loading="lazy"
                    alt="Product" class="img-cover default">
                  <img src="https://www.wikihow.com/images/5/51/Sell-Your-Pokemon-Cards-Step-13.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Pokemon Cards</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Pokemon Season 1 Trading Cards</a>
                  </h3>

                  <data class="card-price" value="15">$35.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://www.asakura-japan.com/data/asakura-japan/product/20161104_6734dc.jpg" width="360" height="360" loading="lazy"
                    alt="Purus consequat congue sit" class="img-cover default">
                  <img src="https://www.asakura-japan.com/data/asakura-japan/product/20161104_6734dc.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper yellow">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Pokemon Plush</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Pikachu X Delibird</a>
                  </h3>

                  <data class="card-price" value="45">$55.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://i.pinimg.com/originals/5a/af/cd/5aafcdbaca9c94de33588acaffb0f7f5.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover default">
                  <img src="https://i.pinimg.com/originals/5a/af/cd/5aafcdbaca9c94de33588acaffb0f7f5.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper yellow">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Clothing</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">jigglypuff Hoodie</a>
                  </h3>

                  <data class="card-price" value="45">$250.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://www.yiassu.com/wp-content/uploads/2023/01/Genuine-Pikachu-Creative-Anime-Cartoon-Doll-Keychain-Pokemon-Cartoon-Doll-Keyring-Bag-Car-Key-Chain-Ring.jpg_640x640-768x768.png" width="360" height="360" loading="lazy"
                    alt="" class="img-cover default">
                  <img src="https://www.yiassu.com/wp-content/uploads/2023/01/Genuine-Pikachu-Creative-Anime-Cartoon-Doll-Keychain-Pokemon-Cartoon-Doll-Keyring-Bag-Car-Key-Chain-Ring.jpg_640x640-768x768.png" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper yellow">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Keychain</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Pichu Keychain</a>
                  </h3>

                  <data class="card-price" value="49">$15.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://images.bonanzastatic.com/afu/images/1146/e537/0728_5006176468/s-l1600.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover default">
                  <img src="https://images.bonanzastatic.com/afu/images/1146/e537/0728_5006176468/s-l1600.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper yellow">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Coffee Mug</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Pikachu Coffee Mug</a>
                  </h3>

                  <data class="card-price" value="85">$85.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://i.pinimg.com/originals/66/15/cf/6615cf02cdcfd75941c5ba5cc4c6ee8b.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover default">
                  <img src="https://i.pinimg.com/originals/66/15/cf/6615cf02cdcfd75941c5ba5cc4c6ee8b.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper yellow">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Games</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">NITENDO: Game boy</a>
                  </h3>

                  <data class="card-price" value="85">$65.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/_tiles/pokemon-center/08192021/slider/01.jpg" width="360" height="360" loading="lazy"
                    alt="">
                  <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/misc/_tiles/pokemon-center/08192021/slider/01.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper yellow">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Plush</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Piplup plush</a>
                  </h3>

                  <data class="card-price" value="85">$80.00</data>

                </div>

              </div>
            </li>

            <li>
              <div class="product-card">

                <div class="card-banner img-holder" style="--width: 360; --height: 360;">
                  <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/12/pokemon-furniture.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover default">
                  <img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/12/pokemon-furniture.jpg" width="360" height="360" loading="lazy"
                    alt="" class="img-cover hover">

                  <button class="card-action-btn" aria-label="add to card" title="Add To Card">
                    <ion-icon name="bag-add-outline" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <div class="card-content">

                  <div class="wrapper">
                    <div class="rating-wrapper yellow">
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                      <ion-icon name="star" aria-hidden="true"></ion-icon>
                    </div>

                    <span class="span">Furniture</span>
                  </div>

                  <h3 class="h3">
                    <a href="#" class="card-title">Ditto Sofa</a>
                  </h3>

                  <data class="card-price" value="55">$850.00</data>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>





      <!-- 
        - #SERVICE
      -->

      <section class="section service" aria-label="service">
        <div class="container">

          <img src="https://icon-library.com/images/pokeball-icon-transparent/pokeball-icon-transparent-6.jpg" width="122" height="136" loading="lazy" alt="" class="img">

          <h2 class="h2 section-title">
            <span class="span">Gotta Catch</span> 'Em All!
          </h2>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="https://www.clipartkey.com/mpngs/m/311-3114647_icon-delivery-services-free-clipart-png-download-same.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">Free Same-Day Delivery</h3>

                <p class="card-text">
                  Order by 2pm local time to get free delivery on orders $50+ today.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="https://muhancorporate.com.au/Userdefined/images/icons/30-days-icon.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">30 Day Return</h3>

                <p class="card-text">
                  30% off your first order.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="https://logowik.com/content/uploads/images/secure-payment2785.jpg" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">Security payment</h3>

                <p class="card-text">
                  25% off your online order of $50+. Available at most locations.
                </p>

              </div>
            </li>

            <li>
              <div class="service-card">

                <figure class="card-icon">
                  <img src="https://www.citypng.com/public/uploads/preview/transparent-call-customer-service-support-247-black-icon-21635328951o1xmqbeapm.png" width="70" height="70" loading="lazy"
                    alt="service icon">
                </figure>

                <h3 class="h3 card-title">24/7 Support</h3>

                <p class="card-text">
                  Having trouble? Consult with us.
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>




  <!-- 
    - #FOOTER
  -->

  <footer class="footer" style="background-image: url('https://cdn.wallpapersafari.com/7/85/dDBH5Q.jpg')">

    <div class="footer-top section">
      <div class="container">

        <div class="footer-brand">

          <a href="#" class="logo">Pokemon Center</a>

          <p class="footer-text">
            If you have any question, please contact us at <a href="mailto:pokemon@gmail.com"
              class="link">pokemon@gmail.com</a>
          </p>

          <ul class="contact-list">

            <li class="contact-item">
              <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

              <address class="address">
                AlpaSunshine City Mall in Ikebukuro, Tokyo, Japan
              </address>
            </li>

            <li class="contact-item">
              <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

              <a href="tel:+16234567891011" class="contact-link">(+1)-1234-50-678</a>
            </li>

          </ul>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Corporate</p>
          </li>

          <li>
            <a href="#" class="footer-link">Careers</a>
          </li>

          <li>
            <a href="#" class="footer-link">About Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact Us</a>
          </li>

          <li>
            <a href="#" class="footer-link">FAQs</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Information</p>
          </li>

          <li>
            <a href="#" class="footer-link">Online Store</a>
          </li>

          <li>
            <a href="#" class="footer-link">Privacy Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Refund Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Shipping Policy</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms of Service</a>
          </li>

          <li>
            <a href="#" class="footer-link">Track Order</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Services</p>
          </li>

          <li>
            <a href="#" class="footer-link">Shipping</a>
          </li>

          <li>
            <a href="#" class="footer-link">Help</a>
          </li>

          <li>
            <a href="#" class="footer-link">Resource Center</a>
          </li>

        </ul>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; 2024 Made by <a href="#" class="copyright-link">CodeCrafterSristi</a>
        </p>

      </div>
    </div>

  </footer>





  <!-- 
    - #BACK TO TOP
  -->

  <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>


'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>

</html>
  `, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}

export default main;
