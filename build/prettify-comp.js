var h=this;var i=Array.prototype,l=i.indexOf?function(b,d,c){return i.indexOf.call(b,d,c)}:function(b,d,c){c=c==null?0:c<0?Math.max(0,b.length+c):c;if(typeof b=="string"){if(typeof d!="string"||d.length!=1)return-1;return b.indexOf(d,c)}for(c=c;c<b.length;c++)if(c in b&&b[c]===d)return c;return-1};function n(b,d){var c=0;b=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");d=String(d).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");for(var e=Math.max(b.length,d.length),f=0;c==0&&f<e;f++){var g=b[f]||"",m=d[f]||"",G=new RegExp("(\\d*)(\\D*)","g"),H=new RegExp("(\\d*)(\\D*)","g");do{var j=G.exec(g)||["","",""],k=H.exec(m)||["","",""];if(j[0].length==0&&k[0].length==0)break;c=o(j[1].length==0?0:parseInt(j[1],10),k[1].length==0?0:parseInt(k[1],10))||o(j[2].length==0,k[2].length==0)||o(j[2],
k[2])}while(c==0)}return c}function o(b,d){if(b<d)return-1;else if(b>d)return 1;return 0}(Date.now||function(){return+new Date})();var p,q,r,s;function t(){return h.navigator?h.navigator.userAgent:null}s=r=q=p=false;var u;if(u=t()){var v=h.navigator;p=u.indexOf("Opera")==0;q=!p&&u.indexOf("MSIE")!=-1;r=!p&&u.indexOf("WebKit")!=-1;s=!p&&!r&&v.product=="Gecko"}var w=q,x=s,y=r,z,A="",B;if(p&&h.opera){var C=h.opera.version;A=typeof C=="function"?C():C}else{if(x)B=/rv\:([^\);]+)(\)|;)/;else if(w)B=/MSIE\s+([^\);]+)(\)|;)/;else if(y)B=/WebKit\/(\S+)/;if(B){var D=B.exec(t());A=D?D[1]:""}}z=A;var E={};var F={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},I={IMG:" ",BR:"\n"};function J(b,d,c){if(!(b.nodeName in F))if(b.nodeType==3)c?d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g,"")):d.push(b.nodeValue);else if(b.nodeName in I)d.push(I[b.nodeName]);else for(b=b.firstChild;b;){J(b,d,c);b=b.nextSibling}};var window={};window.a={};
function K(b,d){var c=d||{},e=c.uglyTags||[],f=c.uglyClass||"";if(b==null)return null;c=b.cloneNode(true);if(b.nodeType==Node.TEXT_NODE){if(w&&"innerText"in c)d=c.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{d=[];J(c,d,true);d=d.join("")}d=d.replace(/\xAD/g,"");d=d.replace(/ +/g," ");if(d!=" ")d=d.replace(/^\s*/,"");d=d;b=[["\\.\\.\\.","\u2026"],["(^|[\\s\"])'","$1\u2018"],['(^|[\\s-])"',"$1\u201c"],["---","\u2014"],["--","\u2013"],["'($|[\\s\"])?","\u2019$1"],['"($|[\\s.,;:?!])',"\u201d$1"]];for(e=
0;e<b.length;e++){f=b[e];var g=f[1];d=d.replace(new RegExp(f[0],"g"),g)}d=d;if("textContent"in c)c.textContent=d;else if(c.firstChild&&c.firstChild.nodeType==3){for(;c.lastChild!=c.firstChild;)c.removeChild(c.lastChild);c.firstChild.data=d}else{for(;b=c.firstChild;)c.removeChild(b);c.appendChild((c.nodeType==9?c:c.ownerDocument||c.document).createTextNode(d))}}else if(!(l(e,b.nodeName.toLowerCase())>=0)&&!(b.className&&b.className==f)){b=c.childNodes;for(e=0;e<b.length;e++){f=K(b[e],d);g=b[e];var m=
g.parentNode;m&&m.replaceChild(f,g)}}return c}
window.prettify=function(){var b,d,c,e;b=document;if(b.querySelectorAll&&(!y||document.compatMode=="CSS1Compat"||E["528"]||(E["528"]=n(z,"528")>=0)))b=b.querySelectorAll(".prettify");else if(b.getElementsByClassName){var f=b.getElementsByClassName("prettify");b=f}else{f=b.getElementsByTagName("*");e={};for(d=c=0;b=f[d];d++){var g=b.className;if(typeof g.split=="function"&&l(g.split(/\s+/),"prettify")>=0)e[c++]=b}e.length=c;b=e}d={uglyTags:["code","pre"],uglyClass:"keepugly"};for(c=0;c<b.length;c++){e=
K(b[c],d);f=b[c];(g=f.parentNode)&&g.replaceChild(e,f)}};
