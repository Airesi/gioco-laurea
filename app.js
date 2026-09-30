(() => {
  const root=document.getElementById("menu"), tabs=document.querySelector(".tabs");
  const data=(window.MENU||[]).filter(c=>c.items?.some(i=>i.available!==false));
  let active=data[0]?.id;
  const money=p=>p===0?'<span class="free">GRATIS</span>':`${p} <small>E¢</small>`;
  function render(){
    tabs.innerHTML=data.map(c=>`<button class="${c.id===active?'active':''}" data-id="${c.id}">${c.label}</button>`).join("");
    const c=data.find(x=>x.id===active); if(!c){root.innerHTML="";return}
    root.innerHTML=`<div class="section-head"><p>${c.kicker}</p><h2>${c.label}</h2></div><div class="list">${c.items.filter(i=>i.available!==false).map(i=>`<article class="item ${i.premium?'premium':''}"><div class="copy">${i.badge?`<span class="badge">${i.badge}</span>`:''}<h3>${i.name}</h3><p>${i.description||''}</p></div><div class="price">${money(i.price)}</div></article>`).join("")}</div>`;
    tabs.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{active=b.dataset.id;render()}));
  } render();
})();