(() => {
  const root=document.getElementById("menu"), tabs=document.querySelector(".tabs");
  const presentationOpenAt = Date.UTC(2026, 9, 4, 16, 0, 0); // 18:00 Europe/Rome
  const menuData=(window.MENU||[]).filter(c=>c.items?.some(i=>i.available!==false));
  const presentation={id:"presentazione",label:"Presentazione"};
  const data=Date.now()>=presentationOpenAt ? [...menuData,presentation] : menuData;
  let active=data[0]?.id;
  const money=p=>p===0?'<span class="free">GRATIS</span>':`${p} <small>E¢</small>`;
  function render(){
    tabs.innerHTML=data.map(c=>`<button class="${c.id===active?'active ':''}${c.id==='presentazione'?'presentation-tab':''}" data-id="${c.id}">${c.label}</button>`).join("");
    const c=data.find(x=>x.id===active); if(!c){root.innerHTML="";return}
    if(c.id==="presentazione"){
      root.innerHTML='<section class="presentation-launch"><p class="kicker">MATERIALE ACCADEMICO NON REVISIONATO</p><h2>Presentazione al buio</h2><p>Segui le slide. Capirle resta facoltativo.</p><a href="anteprima_presentazione_menu.html">ENTRA NELLA PRESENTAZIONE ›</a></section>';
    } else {
      root.innerHTML=`<div class="section-head"><p>${c.kicker}</p><h2>${c.label}</h2></div><div class="list">${c.items.filter(i=>i.available!==false).map(i=>`<article class="item ${i.premium?'premium':''}"><div class="copy">${i.badge?`<span class="badge">${i.badge}</span>`:''}<h3>${i.name}</h3><p>${i.description||''}</p>${i.note?`<p class="availability">${i.note}</p>`:''}</div><div class="price">${money(i.price)}</div></article>`).join("")}</div>`;
    }
    tabs.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.id;render()}));
  } render();
})();

// Conto alla rovescia — apertura della festa, 4 ottobre 2026 ore 17:00 (Milano)
(() => {
  const box = document.querySelector(".countdown");
  const note = document.getElementById("countdown-note");
  const hoursEl = document.getElementById("cd-hours");
  const minutesEl = document.getElementById("cd-minutes");
  const secondsEl = document.getElementById("cd-seconds");
  if (!box || !note || !hoursEl || !minutesEl || !secondsEl) return;

  // Costruiamo il timestamp esplicitamente: 17:00 a Milano il 4/10/2026 = 15:00 UTC.
  // Così il timer non dipende dal parsing della data o dal fuso del telefono.
  const target = Date.UTC(2026, 9, 4, 15, 0, 0);
  const pad = n => String(n).padStart(2, "0");

  function tick() {
    const left = target - Date.now();
    if (left <= 0) {
      box.classList.add("started");
      note.textContent = "I MERCATI SONO APERTI. INVESTITE MALE.";
      return;
    }
    const totalSeconds = Math.floor(left / 1000);
    const totalHours = Math.floor(totalSeconds / 3600);
    hoursEl.textContent = pad(totalHours);
    minutesEl.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    secondsEl.textContent = pad(totalSeconds % 60);
  }

  tick();
  window.setInterval(tick, 1000);
})();
