(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{138:function(e,t,n){},54:function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var o,u=[],s=!1,m=-1;function f(){s&&o&&(s=!1,o.length?u=o.concat(u):m=-1,u.length&&h())}function h(){if(!s){var e=l(f);s=!0;for(var t=u.length;t;){for(o=u,u=[];++m<t;)o&&o[m].run();m=-1,t=u.length}o=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||s||l(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=p,a.addListener=p,a.once=p,a.off=p,a.removeListener=p,a.removeAllListeners=p,a.emit=p,a.prependListener=p,a.prependOnceListener=p,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},544:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(12),i=n(14),c=n(13),l=n(15),o=n(0),u=n.n(o),s=(n(138),n(24)),m=n(62),f=n(59),h=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"whole-gallery"},u.a.createElement(m.a,null),u.a.createElement("div",{className:"container-fluid",style:{maxWidth:"700px",paddingTop:"200px"}},u.a.createElement("div",{className:"header66"},"Gallery"),u.a.createElement("div",{className:"gal-link"},u.a.createElement(s.b,{to:"gallery/E-Summit'18"},u.a.createElement("button",{className:"btn lgtabs lgback"},"GALLERY OF E-SUMMIT'18"))),u.a.createElement("div",{className:"gal-link"},u.a.createElement(s.b,{to:"gallery/E-Summit'17"},u.a.createElement("button",{className:"btn lgtabs lgback"},"GALLERY OF E-SUMMIT'17"))),u.a.createElement("div",{className:"gal-link"},u.a.createElement(s.b,{to:"gallery/E-Summit'16"},u.a.createElement("button",{className:"btn lgtabs lgback"},"GALLERY OF E-SUMMIT'16")))),u.a.createElement(f.a,null))}}]),t}(o.Component);t.default=h}}]);
//# sourceMappingURL=39.fa230ba1.chunk.js.map