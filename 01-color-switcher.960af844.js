const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;d.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}));let a=null;
//# sourceMappingURL=01-color-switcher.960af844.js.map