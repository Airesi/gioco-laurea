(() => {
  const root=document.getElementById("menu"), tabs=document.querySelector(".tabs");
  const data=(window.MENU||[]).filter(c=>c.items?.some(i=>i.available!==false));
  let active=data[0]?.id;
  const money=p=>p===0?'<span class="free">GRATIS</span>':`${p} <small>E¢</small>`;
  function render(){
    tabs.innerHTML=data.map(c=>`<button class="${c.id===active?'active':''}" data-id="${c.id}">${c.label}</button>`).join("");
    const c=data.find(x=>x.id===active); if(!c){root.innerHTML="";return}
    root.innerHTML=`<div class="section-head"><p>${c.kicker}</p><h2>${c.label}</h2></div><div class="list">${c.items.filter(i=>i.available!==false).map(i=>`<article class="item ${i.premium?'premium':''}"><div class="copy">${i.badge?`<span class="badge">${i.badge}</span>`:''}<h3>${i.name}</h3><p>${i.description||''}</p>${i.note?`<p class="availability">${i.note}</p>`:''}</div><div class="price">${money(i.price)}</div></article>`).join("")}</div>`;
    tabs.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.id;render()}));
  } render();
})();

// Conto alla rovescia — apertura della festa, 4 ottobre 2026 ore 17:00 (Milano)
(() => {
  const target = new Date("2026-10-04T17:00:00+02:00").getTime();
  const box = document.querySelector(".countdown");
  const note = document.getElementById("countdown-note");
  if (!box || !note) return;

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    minutes: document.getElementById("cd-minutes"),
    seconds: document.getElementById("cd-seconds")
  };
  const pad = n => String(n).padStart(2, "0");

  function tick() {
    const left = target - Date.now();
    if (left <= 0) {
      box.classList.add("started");
      note.textContent = "I MERCATI SONO APERTI. INVESTITE MALE.";
      return;
    }
    const totalSeconds = Math.floor(left / 1000);
    els.days.textContent = pad(Math.floor(totalSeconds / 86400));
    els.hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    els.minutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
    els.seconds.textContent = pad(totalSeconds % 60);
    setTimeout(tick, 250);
  }
  tick();
})();
