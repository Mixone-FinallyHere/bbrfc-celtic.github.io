!function(e,t){function n(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function r(e){var t=f[e[u]];return t||(t={},d++,e[u]=d,f[d]=t),t}function a(e,n,a){return n||(n=t),l?n.createElement(e):(a||(a=r(n)),n=a.cache[e]?a.cache[e].cloneNode():h.test(e)?(a.cache[e]=a.createElem(e)).cloneNode():a.createElem(e),n.canHaveChildren&&!s.test(e)?a.frag.appendChild(n):n)}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function o(e){e||(e=t);var n=r(e);if(v.shivCSS&&!i&&!n.hasCSS){var a,o=e;a=o.createElement("p"),o=o.getElementsByTagName("head")[0]||o.documentElement,a.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>",a=o.insertBefore(a.lastChild,o.firstChild),n.hasCSS=!!a}return l||c(e,n),e}var i,l,m=e.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,u="_html5shiv",d=0,f={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",i="hidden"in e;var n;if(!(n=1==e.childNodes.length)){t.createElement("a");var r=t.createDocumentFragment();n=void 0===r.cloneNode||void 0===r.createDocumentFragment||void 0===r.createElement}l=n}catch(a){l=i=!0}}();var v={elements:m.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==m.shivCSS,supportsUnknownElements:l,shivMethods:!1!==m.shivMethods,type:"default",shivDocument:o,createElement:a,createDocumentFragment:function(e,a){if(e||(e=t),l)return e.createDocumentFragment();for(var a=a||r(e),c=a.frag.cloneNode(),o=0,i=n(),m=i.length;m>o;o++)c.createElement(i[o]);return c}};e.html5=v,o(t)}(this,document);