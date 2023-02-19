const t=document.querySelectorAll("button"),n=t[0],e=t[1];let l=null;n.addEventListener("click",(function(){l||(l=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),e.addEventListener("click",(function(){clearInterval(l),l=null}));
//# sourceMappingURL=01-color-switcher.80acf086.js.map
