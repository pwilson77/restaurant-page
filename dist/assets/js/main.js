!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a=e=>{const t=document.createElement("div");return t.classList.add(e),t},o=(e,t,n)=>{const a=document.createElement(e);return a.classList.add(t),a.innerHTML=n,a},r=e=>{const t=document.createElement("p");return t.innerHTML=e,t},c=(e,t,n)=>{const a=document.createElement("button");return a.setAttribute("id",t),a.classList.add(n),a.innerHTML=e,a},i=(e,t,n)=>{const a=document.createElement("div");a.classList.add("ingredient-con");const o=document.createElement("h2");o.innerText=e;const r=document.createElement("h4");return r.innerText=t,document.createElement("p").innerText=n,a.append(o,r,n),a};var u=()=>{const e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active","")};var s=()=>{u(),document.getElementById("home").className+=" active",document.getElementsByClassName("headline-text")[0].innerText="Laughter is brightest in the place where the food is. ";const e=document.getElementsByClassName("copy-text")[0];e.innerHTML="";const t="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem velit consequatur eaque nobis! Natus quaerat eligendi ea minima aspernatur totam consequuntur deserunt placeat labore magnam?    Ut vero minus officia!",n=r(t),a=r(t);e.append(n,a)};var l=()=>{u(),document.getElementById("menu").className+=" active",document.getElementsByClassName("headline-text")[0].innerText="One cannot think well, love well, sleep well, if one has not dined well.";const e=document.getElementsByClassName("copy-text")[0];e.innerHTML="";const t=i("Roast daikon","Roast daikon served with tender vegetables","daikon | potatoes | parsnips | carrots | cabbage | cauliflower | swede | vegan stuffing | vegan yorkshire pudding"),n=i("Pineapple and pepper curry","Mild curry made with fresh pineapple and green pepper","onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | pineapple | pepper"),a=i("Spinach and coconut curry","Mild curry made with fresh spinach and coconut","onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | spinach | coconut"),o=i("Tofu and cauliflower curry","Mild curry made with marinaded tofu and fresh cauliflower","onion | peppers | garlic | ginger | tumeric | cumin | coriander | curry leaf | green chilli | tofu | cauliflower");e.append(t,n,a,o)};var d=()=>{u(),document.getElementById("contact").className+=" active",document.getElementsByClassName("headline-text")[0].innerText="People want honest, flavourful food, not some show-off meal that takes days to prepare.";const e=document.getElementsByClassName("copy-text")[0];e.innerHTML="";const t=r("Need to get in touch, We would love to hear from you!, You could contact us using the information below"),n=r("+233-55555555, bestrestaurant@gmail.com");e.append(t,n)};document.body.appendChild(function(){const e=document.getElementById("content"),t=a("hero-img"),n=a("search-box"),i=o("h1","cursive-text","perfectum");n.append(i);const u=a("bouncing-div");u.innerText="Scroll Down",t.append(n,u);const m=a("web-content"),p=o("h2","headline-text",'"Laughter is brightest in the place where the food is. "');m.append(p);const f=a("tabs"),g=c("Welcome","home","tab-button");g.classList.add("active");const h=c("Menu","menu","tab-button"),y=c("Contact","contact","tab-button");f.append(g,h,y);const b=a("copy-text"),v="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem velit consequatur eaque nobis! Natus quaerat eligendi ea minima aspernatur totam consequuntur deserunt placeat labore magnam?    Ut vero minus officia!",E=r(v),w=r(v);return b.append(E,w),m.append(b),e.append(t,f,m),document.getElementById("home").addEventListener("click",s),document.getElementById("menu").addEventListener("click",l),document.getElementById("contact").addEventListener("click",d),e}())}]);