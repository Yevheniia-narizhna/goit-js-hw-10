import"./assets/styles-42a2e46d.js";import{f as m,i as l}from"./assets/vendor-77e16229.js";const t={btnTimer:document.querySelector("[data-start]"),timerDays:document.querySelector("[data-days]"),timerHours:document.querySelector("[data-hours]"),timerMinutes:document.querySelector("[data-minutes]"),timerSeconds:document.querySelector("[data-seconds]")};t.btnTimer.disabled=!0;let s=null;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=new Date;e[0]-n>0?t.btnTimer.disabled=!1:(t.btnTimer.disabled=!0,l.error({title:"Error",message:"Please choose a date in the future"}))}};function h(e){const i=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),d=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:i,hours:c,minutes:d,seconds:u}}function o(e){return String(e).padStart(2,0)}function y(){const e=b.selectedDates[0];s=setInterval(()=>{const r=e-new Date;if(t.btnTimer.disabled=!0,r<0){clearInterval(s);return}T(h(r))},1e3)}function T({days:e,hours:n,minutes:r,seconds:a}){t.timerDays.textContent=o(e),t.timerHours.textContent=o(n),t.timerMinutes.textContent=o(r),t.timerSeconds.textContent=o(a)}const b=m("#datetime-picker",f);t.btnTimer.addEventListener("click",y);
//# sourceMappingURL=commonHelpers.js.map
