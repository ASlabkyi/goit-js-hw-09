const t=document.querySelectorAll("button"),e=t[0],n=t[1];let o=null;e.addEventListener("click",(function(){o||(o=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),n.addEventListener("click",(function(){clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.04411a45.js.map
