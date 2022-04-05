(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),r=n(645),c=n.n(r)()(o());c.push([e.id,"#content {\n    width: 100%;\n}\n\nbody {\n    display:flex;\n    text-align: center;\n    margin: auto;\n    justify-content: center;\n} \n\n#navigation{\n    position: relative;\n    height: 50px;\n    justify-content: left;\n    width: 100%;\n}\n\nli{\n    color: whitesmoke;\n    font-family: 'Chalkduster';\n    font-size: 15px;\n    text-align: center;\n    margin: auto;\n}\n\n.header{\n    text-align: center;\n    align-content: center;\n    margin: auto;\n    justify-content: center;\n    position: relative; \n    height: 125px;\n}\n\nh1{\n    color: whitesmoke;\n    font-family: 'Chalkduster';\n    font-size: 75px;\n    text-align: center;\n    margin: auto;\n}\n\n.paragraph{\n    text-align: center;\n    align-content: center;\n    margin: auto;\n    justify-content: center;\n    position: relative;\n    width: 60%;\n}\n\np{\n    color: whitesmoke;\n    font-family: 'Chalkduster';\n    font-size: 20px;\n    text-align: center;\n    margin: auto;\n    line-height: 1.2;\n}\n\n#carousel{\n    position: relative;\n    height: 400px;\n    top: 50%;\n    width: 100%;\n    transform: translateY(-50%);\n    overflow: hidden;\n    justify-content: center;\n}\n\n\n.farLeftImage{\n    width: 150px;\n    opacity: .5;\n    left: 22%;\n    top:25%;\n    position: absolute;\n}\n\n.leftImage{\n    width: 200px;\n    opacity: .7;\n    left: 35%;\n    top:90%;\n}\n\n.centerImage{\n    width: 300px;\n    opacity: 1;\n    left: 50%;\n    top:100%;\n}\n\n.rightImage{\n    width: 200px;\n    opacity: .7;\n    left: 60%;\n    top: 90%;\n}\n\n.farRightImage{\n    width: 150px;\n    opacity: .5;\n    left: 68%;\n    top:88%;\n}\n\n.chalk-border-paragraph {\n    border: 25px solid rgba(255,255,255,.8);\n    border-image: url(\"https://www.unicefusa.org/sites/default/files/answer-box.png\") 20;\n    text-align: center;\n    align-content: center;\n    margin: auto;\n    justify-content: center;\n    position: fixed;\n    left: 30%;\n    bottom:10px;\n    width: 40%;\n  }\n\n  .tab-list > li{\n    margin-left: 20px;\n    padding-top: 8px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 8px;\n    border: 5px solid rgba(255,255,255,.8);\n    border-image: url(\"https://www.unicefusa.org/sites/default/files/answer-box.png\") 20;\n    border-image-width: 0.5rem;\n}\n\n.shake img:hover {\n    animation: shake 0.5s;\n    animation-iteration-count: infinite;\n  }\n  \n  @keyframes shake {\n    0% { transform: translate(1px, 1px) rotate(0deg); }\n    10% { transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { transform: translate(-3px, 0px) rotate(1deg); }\n    30% { transform: translate(3px, 2px) rotate(0deg); }\n    40% { transform: translate(1px, -1px) rotate(1deg); }\n    50% { transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { transform: translate(-3px, 1px) rotate(0deg); }\n    70% { transform: translate(3px, 1px) rotate(-1deg); }\n    80% { transform: translate(-1px, -1px) rotate(1deg); }\n    90% { transform: translate(1px, 2px) rotate(0deg); }\n    100% { transform: translate(1px, -2px) rotate(-1deg); }\n  }\n\n.grid2x2 {\nmin-height: 90%;\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: row;\n}\n\n.grid2x2 > div {\ndisplay: flex; \nflex-basis: calc(50% - 40px);  \njustify-content: center;\nflex-direction: column;\n}\n\n.grid2x2 > div > div {\ndisplay: flex;\njustify-content: center;\nflex-direction: row;\n}\n\nh3 {\ntext-decoration: underline overline;\ntext-underline-offset: 3px;\n}\n\n#bobaFett img {\nborder-radius: 50%;\nborder:5px solid black;\n}\n\n.card {\nwidth: 100%;\nheight: 100%; \njustify-content: right;\ndisplay: inline-block; \n}\n\n.card-body{\n    background-color: yellow;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n\n}\n\n#employeeInfoTitle {\n    color: black;\n}\n\n#employeeInfoParagraph {\ncolor: black;\n}\n\n.card-columns {\ncolumn-count: 1;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var d=e[i],l=a.base?d[0]+a.base:d[0],s=r[l]||0,m="".concat(l," ").concat(s);r[l]=s+1;var p=n(m),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var g=o(u,a);a.byIndex=i,t.splice(i,0,{identifier:m,updater:g,references:1})}c.push(m)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var d=a(e,o),l=0;l<r.length;l++){var s=n(r[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),c=n.n(r),i=n(565),d=n.n(i),l=n(216),s=n.n(l),m=n(589),p=n.n(m),u=n(426),g={};function h(e){console.log("carousel time!!!"),console.log("Element passed in:",e);let t=[];t.push(document.getElementsByClassName("farLeftImage")[0]),t.push(document.getElementsByClassName("leftImage")[0]),t.push(document.getElementsByClassName("centerImage")[0]),t.push(document.getElementsByClassName("rightImage")[0]),t.push(document.getElementsByClassName("farRightImage")[0]),console.log(t);const n=t.indexOf(e);if(console.log("index: ",n),2==n)console.log("no change, selected in center");else{console.log("selected element in array:",t[n]),console.log("class name to be removed: ",t[n].className),t[n].setAttribute("class","centerImage");let e=n-1;0==n&&(e=4),console.log("next selected element in array:",t[e]),t[e].setAttribute("class","leftImage");let a=n-2;a<0&&(a=n+3),console.log("3rd selected element in array:",t[a]),t[a].setAttribute("class","farLeftImage");let o=n-3;o<0&&(o=n+2),console.log("4th selected element in array:",t[o]),t[o].setAttribute("class","farRightImage");let r=o-1;r<0&&(r=4),console.log("5th selected element in array:",t[r]),t[r].setAttribute("class","rightImage"),console.log("Yay! You moved selected image to center")}return console.log("carousel moved!")}function f(){img1=document.getElementsByClassName("farLeftImage")[0],img2=document.getElementsByClassName("leftImage")[0],img3=document.getElementsByClassName("centerImage")[0],img4=document.getElementsByClassName("rightImage")[0],img5=document.getElementsByClassName("farRightImage")[0]}function y(){console.log("Running Create Homepage"),document.body.style.backgroundImage="url('../src/images/background.jpg')",console.log("lets get this party started"),document.getElementById("content").appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");return t.innerHTML="Boba F&ecirc;te",t.className="header",e.appendChild(t),e}()),console.log("header added"),document.getElementById("content").appendChild(function(){console.log("We made it to the intro function");const e=document.createElement("div");e.setAttribute("class","paragraph");const t=document.createElement("p"),n=document.createElement("br"),a=document.createTextNode("Join the party!"),o=document.createTextNode("Bubble tea was invented in Taiwan in the 1980's and it has been a party ever since.     From milk teas to fruit teas, and popping boba to tapioca pearls, there is a drink out there for everyone. Let's find yours!");return console.log("append to paragraph part"),t.appendChild(a),t.appendChild(n),t.appendChild(o),console.log("append to paragraph complete"),e.appendChild(t),console.log("append to paragraph div complete"),e}()),console.log("paragraph added"),document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.setAttribute("id","carousel");let t=document.createElement("img"),n=document.createElement("img"),a=document.createElement("img"),o=document.createElement("img"),r=document.createElement("img");return t.setAttribute("class","farLeftImage"),n.setAttribute("class","leftImage"),a.setAttribute("class","centerImage"),o.setAttribute("class","rightImage"),r.setAttribute("class","farRightImage"),t.src="../src/images/carousel1.jpeg",n.src="../src/images/carousel2.jpeg",a.src="../src/images/carousel3.jpeg",o.src="../src/images/carousel4.jpeg",r.src="../src/images/carousel5.jpeg",e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(r),e}()),console.log("carousel added"),document.getElementById("content").append(function(){const e=document.createElement("div");e.setAttribute("class","chalk-border-paragraph");const t=document.createElement("p"),n=document.createElement("br"),a=document.createTextNode("Sunday: Closed"),o=document.createTextNode("Monday-Friday: 10AM-9PM"),r=document.createTextNode("Saturday: 10AM-Midnight");return t.appendChild(a),t.appendChild(n.cloneNode(!0)),t.appendChild(o),t.appendChild(n.cloneNode(!0)),t.appendChild(r),e.appendChild(t),e}());let e=document.getElementsByClassName("farLeftImage")[0],t=document.getElementsByClassName("leftImage")[0],n=document.getElementsByClassName("centerImage")[0],a=document.getElementsByClassName("rightImage")[0],o=document.getElementsByClassName("farRightImage")[0];e.addEventListener("click",(function(){h(e),f()})),t.addEventListener("click",(function(){h(t),f()})),n.addEventListener("click",(function(){h(n),f()})),a.addEventListener("click",(function(){h(a),f()})),o.addEventListener("click",(function(){h(o),f()}))}function b(e,t,n,a){const o=document.createElement("div");o.classList.add("box"),o.style="clear: left;";const r=document.createElement("p");r.style="float: left;",r.classList.add("shake");const c=document.createElement("img");c.src=e;const i=document.createElement("p"),d=document.createElement("h3");d.innerHTML=t;const l=document.createElement("p"),s=document.createElement("br"),m=document.createTextNode(n),p=document.createTextNode(a);return l.appendChild(m),l.appendChild(s),l.appendChild(p),i.appendChild(d),i.appendChild(l),r.appendChild(c),o.appendChild(r),o.appendChild(i),o}function x(){document.body.style.backgroundImage="url('../src/images/background.jpg')",document.getElementById("content").appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");return t.innerHTML="Contact Us",t.className="header",e.appendChild(t),e}()),document.getElementById("content").appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");return e.classList.add("card-columns"),t.classList.add("card","p-3","col-2"),t.appendChild(function(e,t,n,a){const o=document.createElement("div");o.classList.add("card-body");const r=document.createElement("img");r.src="../src/images/bobafetthead.png",r.alt="Boba Fett Lego Head",r.id="bobaFett";const c=document.createElement("p");c.setAttribute("id","employeeInfoTitle");const i=document.createElement("h3");i.innerHTML="Boba Fett";const d=document.createElement("p");d.setAttribute("id","employeeInfoParagraph");const l=document.createElement("br"),s=document.createTextNode("Title: Manager"),m=document.createTextNode("Phone Number: A0050"),p=document.createTextNode("Email: bobaBoi@fake.com"),u=document.createTextNode("I'm hidden in 3 places in this website, you know what to do...");return d.appendChild(s),d.appendChild(l.cloneNode(!0)),d.appendChild(m),d.appendChild(l.cloneNode(!0)),d.appendChild(p),d.appendChild(l.cloneNode(!0)),d.appendChild(l.cloneNode(!0)),d.appendChild(u),c.appendChild(i),c.appendChild(d),o.appendChild(r),o.appendChild(c),o}()),e.appendChild(t),e}())}g.styleTagTransform=p(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),t()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals,console.log("Hello Cruel World"),function e(){document.getElementById("content").innerHTML="",document.getElementById("content").appendChild(function(){const e=document.createElement("div");e.setAttribute("id","navigation");const t=document.createElement("nav");t.setAttribute("class","navbar navbar-expand-lg");const n=document.createElement("ul");n.classList.add("nav","tab-list");const a=document.createElement("li");a.setAttribute("id","home"),a.setAttribute("class","nav-item"),a.innerHTML="Home";const o=document.createElement("li");o.setAttribute("id","menu"),o.setAttribute("class","nav-item"),o.innerHTML="Menu";const r=document.createElement("li");return r.setAttribute("id","contact"),r.setAttribute("class","nav-item"),r.innerHTML="Contact Us",n.appendChild(a),n.appendChild(o),n.appendChild(r),t.appendChild(n),e.appendChild(t),e}()),document.getElementById("home").addEventListener("click",(function(){e(),y()})),document.getElementById("menu").addEventListener("click",(function(){e(),document.body.style.backgroundImage="url('../src/images/background.jpg')",document.getElementById("content").appendChild(function(){const e=document.createElement("div"),t=document.createElement("h1");return t.innerHTML="Menu",t.className="header",e.appendChild(t),e}()),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.classList.add("grid2x2"),e.appendChild(b("../src/images/blacktea.png","Black Tea","A true classic and founder favorite","$4.95")),e.appendChild(b("../src/images/peachtea.png","Peach Tea","Surprise your SO with this drink to show them your ap-peach-iation <3","$4.95")),e.appendChild(b("../src/images/mangoTea.png","Mango Tea","Sunshine in a cup, need I say more?","$4.95")),e.appendChild(b("../src/images/strawberrytea.png","Strawberry Tea","Level up the strawberry milk of your childhood","$4.95")),e}())})),document.getElementById("contact").addEventListener("click",(function(){e(),x()}))}(),y(),console.log("Homepage created")})()})();