(()=>{var e={226:(e,t,s)=>{e.exports=s(687)},687:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});const i=class{_getElements(e){return"object"==typeof e?[e]:document.querySelectorAll(e)}hide(e){this._hideElements(this._getElements(e))}_hideElements(e){var t,s=e.length;for(t=0;t<s;t++)this._hideElement(e[t])}_hideElement(e){this._styleElement(e,"display","none")}show(e,t){var s=this._getElements(e);t&&this._hideElements(s),this._showElements(s)}_showElements(e){var t,s=e.length;for(t=0;t<s;t++)this._showElement(e[t])}_showElement(e){this._styleElement(e,"display","block")}addStyle(e,t,s){this._styleElements(this._getElements(e),t,s)}_styleElements(e,t,s){var i,n=e.length;for(i=0;i<n;i++)this._styleElement(e[i],t,s)}_styleElement(e,t,s){e.style.setProperty(t,s)}toggleShow(e){var t,s=this._getElements(e),i=s.length;for(t=0;t<i;t++)"none"==s[t].style.display?this._styleElement(s[t],"display","block"):this._styleElement(s[t],"display","none")}addClass(e,t){this._addClassElements(this._getElements(e),t)}_addClassElements(e,t){var s,i=e.length;for(s=0;s<i;s++)this._addClassElement(e[s],t)}_addClassElement(e,t){var s,i,n;for(i=e.className.split(" "),n=t.split(" "),s=0;s<n.length;s++)-1==i.indexOf(n[s])&&(e.className+=" "+n[s])}removeClass(e,t){this._removeClassElements(this._getElements(e),t)}_removeClassElements(e,t){var s,i=e.length;for(s=0;s<i;s++)this._removeClassElement(e[s],t)}_removeClassElement(e,t){var s,i,n;for(i=e.className.split(" "),n=t.split(" "),s=0;s<n.length;s++)for(;i.indexOf(n[s])>-1;)i.splice(i.indexOf(n[s]),1);e.className=i.join(" ")}toggleClass(e,t,s){this._toggleClassElements(this._getElements(e),t,s)}_toggleClassElements(e,t,s){var i,n=e.length;for(i=0;i<n;i++)this._toggleClassElement(e[i],t,s)}_toggleClassElement(e,t,s){var i,n,l,a,r,o,h;if(n=s||"",l=(i=t||"").split(" "),a=n.split(" "),o=e.className.split(" "),0==a.length){for(h=!0,r=0;r<l.length;r++)-1==o.indexOf(l[r])&&(h=!1);h?this._removeClassElement(e,i):this._addClassElement(e,i)}else{for(h=!0,r=0;r<l.length;r++)-1==o.indexOf(l[r])&&(h=!1);h?(this._removeClassElement(e,i),this._addClassElement(e,n)):(this._removeClassElement(e,n),this._addClassElement(e,i))}}getBrowser(e){switch(e){case"chrome":return-1!=navigator.userAgent.indexOf("Chrome")&&!navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("CriOS")>=0;case"safari":return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!(navigator.userAgent.indexOf("CriOS")>=0);case"firefox":return"undefined"!=typeof InstallTrigger;case"ie":return!!document.documentMode;case"edge":return!(!navigator.userAgent.match(/edg/i)&&-1==navigator.userAgent.indexOf("Edge/"));default:return null}}getTypeDevice(e){var t=navigator.userAgent||navigator.vendor||window.opera;switch(e){case"touch":return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;case"android":return/android/i.test(t);case"ios":return"boolean"==typeof navigator.standalone;default:return null}}}}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var l=t[i]={exports:{}};return e[i](l,l.exports,s),l.exports}s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=s(226);new class{constructor(){this.init(),this.events()}init(){new class{constructor(t){this.DOM={activeClass:t.activeClass,links:document.querySelectorAll(t.linkClass)??[],distanceTrigger:t.distanceTrigger},this.listDistances=[],this.JSUTIL=new e.default}init(){this.events()}events(){this.DOM.links.length&&(window.addEventListener("scroll",this.checkScroll.bind(this)),this.DOM.links.forEach((e=>{console.log(e.getAttribute(this.DOM.distanceTrigger)),this.listDistances.push(e.getAttribute(this.DOM.distanceTrigger)),this.clickEvent=e.addEventListener("click",this.goBackToTop.bind(this))})))}checkScroll(){this.DOM.links.forEach(((e,t)=>{window.pageYOffset<=this.listDistances[t]?this.JSUTIL.removeClass(e,this.DOM.activeClass):this.JSUTIL.addClass(e,this.DOM.activeClass)}))}goBackToTop(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})}destroy(){this.clickEvent={}}}({linkClass:".js--back-top",activeClass:"js--back-top--is-active",distanceTrigger:"tf-data-distance"}).init()}events(){}}})()})();