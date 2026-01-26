gsap.registerPlugin(ScrollTrigger);

const DAISY_CONFIG={
  links:{
    home:"index.html",
    commands:"commands.html",
    docs:"docs.html",
    invite:"https://discord.com/oauth2/authorize?client_id=1128750014613704754&permissions=8836764482928609&scope=bot%20applications.commands",
    support:"https://discord.gg/RqQsbNE7G4"
  },
  stats:{servers:"450+",users:"200K+",uptime:"99.9%"},
  footer:{copyright:"© 2026 Daisy Music. All rights reserved."}
};
window.DAISY_CONFIG=DAISY_CONFIG;

document.addEventListener("DOMContentLoaded",()=>{

/* Bind links */
const b=(i,u)=>{const e=document.getElementById(i);if(e)e.href=u};
Object.entries({
  navHome:"home",navCommands:"commands",navDocs:"docs",navInvite:"invite",
  mNavHome:"home",mNavCommands:"commands",mNavDocs:"docs",mNavInvite:"invite",
  heroInvite:"invite",heroSupport:"support",
  fHome:"home",fCommands:"commands",fDocs:"docs",fInvite:"invite",fSupport:"support"
}).forEach(([id,key])=>b(id,DAISY_CONFIG.links[key]));

/* Stats */
["Servers","Users","Uptime"].forEach(k=>{
  const el=document.getElementById("stat"+k);
  if(el)el.textContent=DAISY_CONFIG.stats[k.toLowerCase()];
});
document.getElementById("footerCopy").textContent=DAISY_CONFIG.footer.copyright;

/* Page load delay */
gsap.from("main",{opacity:0,y:40,filter:"blur(12px)",duration:1.2});

/* Scroll reveal */
gsap.utils.toArray(".section").forEach(sec=>{
  gsap.from(sec,{
    opacity:0,
    y:80,
    filter:"blur(10px)",
    duration:1.2,
    scrollTrigger:{trigger:sec,start:"top 80%"}
  });
});

/* Feature cards stagger */
gsap.from(".feature-card",{opacity:0,y:50,stagger:.15,duration:.9,scrollTrigger:{trigger:".features-grid"}});

/* Hover exaggeration */
document.querySelectorAll(".btn,.feature-card").forEach(el=>{
  el.onmouseenter=()=>gsap.to(el,{scale:1.08,boxShadow:"0 25px 80px rgba(0,198,255,.35)",duration:.35});
  el.onmouseleave=()=>gsap.to(el,{scale:1,boxShadow:"none",duration:.25});
});

/* Mobile menu */
const m=document.getElementById("mobileMenu"),bbtn=document.getElementById("menuBtn");
let o=false;
bbtn.onclick=e=>{e.stopPropagation();o=!o;m.style.display=o?"flex":"none"};
document.onclick=()=>{o=false;m.style.display="none"};

});
