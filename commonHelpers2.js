import"./assets/styles-7d0301ca.js";import{i as t}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form"),r={delay:s.elements.delay,state:s.elements.state};s.addEventListener("submit",o=>{o.preventDefault();function m(e,i){return new Promise((l,n)=>{setTimeout(()=>{i==="fulfilled"?l(e):n(e)},e)})}m(r.delay.value,r.state.value).then(e=>{t.success({color:"green",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{t.error({color:"red",message:`❌ Rejected promise in ${e}ms`})}),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
