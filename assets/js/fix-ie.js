!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){return c||(c=b),l?c.createElement(a):(d||(d=e(c)),c=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),c.canHaveChildren&&!n.test(a)?d.frag.appendChild(c):c)}function g(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function h(a){a||(a=b);var d=e(a);return!s.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||g(a,d),a}function i(a){for(var b,c=a.attributes,d=c.length,e=a.ownerDocument.createElement(u+":"+a.nodeName);d--;)b=c[d],b.specified&&e.setAttribute(b.nodeName,b.nodeValue);return e.style.cssText=a.style.cssText,e}function j(a){function b(){clearTimeout(h._removeSheetTimer),f&&f.removeNode(!0),f=null}var f,g,h=e(a),j=a.namespaces,k=a.parentWindow;return!v||a.printShived?a:("undefined"==typeof j[u]&&j.add(u),k.attachEvent("onbeforeprint",function(){b();var e,h,j;j=a.styleSheets;for(var k=[],l=j.length,m=Array(l);l--;)m[l]=j[l];for(;j=m.pop();)if(!j.disabled&&t.test(j.media)){try{e=j.imports,h=e.length}catch(n){h=0}for(l=0;h>l;l++)m.push(e[l]);try{k.push(j.cssText)}catch(o){}}for(e=k.reverse().join("").split("{"),h=e.length,l=RegExp("(^|[\\s,>+~])("+d().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),m="$1"+u+"\\:$2";h--;)k=e[h]=e[h].split("}"),k[k.length-1]=k[k.length-1].replace(l,m),e[h]=k.join("}");for(k=e.join("{"),h=a.getElementsByTagName("*"),l=h.length,m=RegExp("^(?:"+d().join("|")+")$","i"),j=[];l--;)e=h[l],m.test(e.nodeName)&&j.push(e.applyElement(i(e)));g=j,f=c(a,k)}),k.attachEvent("onafterprint",function(){for(var a=g,c=a.length;c--;)a[c].removeNode();clearTimeout(h._removeSheetTimer),h._removeSheetTimer=setTimeout(b,500)}),a.printShived=!0,a)}var k,l,m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a;var c;if(!(c=1==a.childNodes.length)){b.createElement("a");var d=b.createDocumentFragment();c="undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement}l=c}catch(e){l=k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==m.shivCSS,supportsUnknownElements:l,shivMethods:!1!==m.shivMethods,type:"default",shivDocument:h,createElement:f,createDocumentFragment:function(a,c){if(a||(a=b),l)return a.createDocumentFragment();for(var c=c||e(a),f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}};a.html5=s,h(b);var t=/^$|\b(?:all|print)\b/,u="html5shiv",v=!l&&function(){var c=b.documentElement;return!("undefined"==typeof b.namespaces||"undefined"==typeof b.parentWindow||"undefined"==typeof c.applyElement||"undefined"==typeof c.removeNode||"undefined"==typeof a.attachEvent)}();s.type+=" print",s.shivPrint=j,j(b)}(this,document),window.matchMedia=window.matchMedia||function(a){"use strict";var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(document),function(a){"use strict";function b(){v(!0)}var c={};if(a.respond=c,c.update=function(){},c.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var d,e,f,g=a.document,h=g.documentElement,i=[],j=[],k=[],l={},m=30,n=g.getElementsByTagName("head")[0]||h,o=g.getElementsByTagName("base")[0],p=n.getElementsByTagName("link"),q=[],r=function(){for(var b=0;b<p.length;b++){var c=p[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!l[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(t(c.styleSheet.rawCssText,d,e),l[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!o||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&q.push({href:d,media:e}))}s()},s=function(){if(q.length){var b=q.shift();w(b.href,function(c){t(c,b.href,b.media),l[b.href]=!0,a.setTimeout(function(){s()},0)})}},t=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),e=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var f=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},g=!e&&c;b.length&&(b+="/"),g&&(e=1);for(var h=0;e>h;h++){var k,l,m,n;g?(k=c,j.push(f(a))):(k=d[h].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,j.push(RegExp.$2&&f(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],i.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:j.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},u=function(){var a,b=g.createElement("div"),c=g.body,d=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=d=g.createElement("body"),c.style.background="none"),c.appendChild(b),h.insertBefore(c,h.firstChild),a=b.offsetWidth,d?h.removeChild(c):c.removeChild(b),a=f=parseFloat(a)},v=function(b){var c="clientWidth",l=h[c],o="CSS1Compat"===g.compatMode&&l||g.body[c]||l,q={},r=p[p.length-1],s=(new Date).getTime();if(b&&d&&m>s-d)return a.clearTimeout(e),e=a.setTimeout(v,m),void 0;d=s;for(var t in i)if(i.hasOwnProperty(t)){var w=i[t],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?f||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?f||u():1)),w.hasquery&&(z&&A||!(z||o>=x)||!(A||y>=o))||(q[w.media]||(q[w.media]=[]),q[w.media].push(j[w.rules]))}for(var C in k)k.hasOwnProperty(C)&&k[C]&&k[C].parentNode===n&&n.removeChild(k[C]);for(var D in q)if(q.hasOwnProperty(D)){var E=g.createElement("style"),F=q[D].join("\n");E.type="text/css",E.media=D,n.insertBefore(E,r.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(g.createTextNode(F)),k.push(E)}},w=function(a,b){var c=x();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},x=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();r(),c.update=r,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);