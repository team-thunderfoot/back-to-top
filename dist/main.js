(()=>{var e={226:(e,t,s)=>{e.exports=s(687)},687:(e,t,s)=>{"use strict";s.d(t,{default:()=>n});const n=class{_getElements(e){return"object"==typeof e?[e]:document.querySelectorAll(e)}hide(e){this._hideElements(this._getElements(e))}_hideElements(e){var t,s=e.length;for(t=0;t<s;t++)this._hideElement(e[t])}_hideElement(e){this._styleElement(e,"display","none")}show(e,t){var s=this._getElements(e);t&&this._hideElements(s),this._showElements(s)}_showElements(e){var t,s=e.length;for(t=0;t<s;t++)this._showElement(e[t])}_showElement(e){this._styleElement(e,"display","block")}addStyle(e,t,s){this._styleElements(this._getElements(e),t,s)}_styleElements(e,t,s){var n,l=e.length;for(n=0;n<l;n++)this._styleElement(e[n],t,s)}_styleElement(e,t,s){e.style.setProperty(t,s)}toggleShow(e){var t,s=this._getElements(e),n=s.length;for(t=0;t<n;t++)"none"==s[t].style.display?this._styleElement(s[t],"display","block"):this._styleElement(s[t],"display","none")}addClass(e,t){this._addClassElements(this._getElements(e),t)}_addClassElements(e,t){var s,n=e.length;for(s=0;s<n;s++)this._addClassElement(e[s],t)}_addClassElement(e,t){var s,n,l;for(n=e.className.split(" "),l=t.split(" "),s=0;s<l.length;s++)-1==n.indexOf(l[s])&&(e.className+=" "+l[s])}removeClass(e,t){this._removeClassElements(this._getElements(e),t)}_removeClassElements(e,t){var s,n=e.length;for(s=0;s<n;s++)this._removeClassElement(e[s],t)}_removeClassElement(e,t){var s,n,l;for(n=e.className.split(" "),l=t.split(" "),s=0;s<l.length;s++)for(;n.indexOf(l[s])>-1;)n.splice(n.indexOf(l[s]),1);e.className=n.join(" ")}toggleClass(e,t,s){this._toggleClassElements(this._getElements(e),t,s)}_toggleClassElements(e,t,s){var n,l=e.length;for(n=0;n<l;n++)this._toggleClassElement(e[n],t,s)}_toggleClassElement(e,t,s){var n,l,i,a,r,o,h;if(l=s||"",i=(n=t||"").split(" "),a=l.split(" "),o=e.className.split(" "),0==a.length){for(h=!0,r=0;r<i.length;r++)-1==o.indexOf(i[r])&&(h=!1);h?this._removeClassElement(e,n):this._addClassElement(e,n)}else{for(h=!0,r=0;r<i.length;r++)-1==o.indexOf(i[r])&&(h=!1);h?(this._removeClassElement(e,n),this._addClassElement(e,l)):(this._removeClassElement(e,l),this._addClassElement(e,n))}}getBrowser(e){switch(e){case"chrome":return-1!=navigator.userAgent.indexOf("Chrome")&&!navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("CriOS")>=0;case"safari":return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!(navigator.userAgent.indexOf("CriOS")>=0);case"firefox":return"undefined"!=typeof InstallTrigger;case"ie":return!!document.documentMode;case"edge":return!(!navigator.userAgent.match(/edg/i)&&-1==navigator.userAgent.indexOf("Edge/"));default:return null}}getTypeDevice(e){var t=navigator.userAgent||navigator.vendor||window.opera;switch(e){case"touch":return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;case"android":return/android/i.test(t);case"ios":return"boolean"==typeof navigator.standalone;default:return null}}}}},t={};function s(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=s(226);new class{constructor(){this.init(),this.events()}init(){new class{constructor(t){this.DOM={activeClass:t.activeClass,links:document.querySelectorAll("."+t.linkClass)??[],distanceTrigger:t.distanceTrigger},this.JSUTIL=new e.default,this.events()}init(){}events(){this.DOM.links.length&&(this.DOM.links.forEach((e=>{this.clickEvent=e.addEventListener("click",this.goBackToTop.bind(this))})),window.addEventListener("scroll",function(e,t){let s;return(...t)=>{const n=this;clearTimeout(s),s=setTimeout((()=>e.apply(n,t)),void 0)}}((()=>{this.checkScroll()}))))}checkScroll(){this.DOM.links.forEach((e=>{window.pageYOffset<=e.getAttribute(this.DOM.distanceTrigger)?this.JSUTIL.removeClass(e,this.DOM.activeClass):this.JSUTIL.addClass(e,this.DOM.activeClass)}))}goBackToTop(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}destroy(){this.clickEvent={}}}({linkClass:"js--back-top",activeClass:"js--back-top--is-active",distanceTrigger:"tf-data-distance"})}events(){}}})()})();