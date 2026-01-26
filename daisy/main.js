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
  navHome:"home",
  navCommands:"commands",
  navDocs:"docs",
  navInvite:"invite",

  mNavHome:"home",
  mNavCommands:"commands",
  mNavDocs:"docs",
  mInviteBtn:"invite",

  heroInvite:"invite",
  heroSupport:"support",

  fHome:"home",
  fCommands:"commands",
  fDocs:"docs",
  fInvite:"invite",
  fSupport:"support"
}).forEach(([id,key])=>b(id,DAISY_CONFIG.links[key]));

/* Stats */
["Servers","Users","Uptime"].forEach(k=>{
  const el=document.getElementById("stat"+k);
  if(el)el.textContent=DAISY_CONFIG.stats[k.toLowerCase()];
});
/* ---------------------------------------
   ACTIVE PAGE HIGHLIGHT
---------------------------------------- */
const path = window.location.pathname;

const setActive = (id) => {
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
};

if (path.includes("commands")) {
  setActive("navCommands");
  setActive("mNavCommands");
} else if (path.includes("docs")) {
  setActive("navDocs");
  setActive("mNavDocs");
} else {
  setActive("navHome");
  setActive("mNavHome");
}
  
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

/* Matte hover interaction (NO glow) */
document.querySelectorAll(".btn, .feature-card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    gsap.to(el, {
      scale: 1.04,
      duration: 0.25,
      ease: "power2.out"
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(el, {
      scale: 1,
      duration: 0.2,
      ease: "power2.in"
    });
  });
});
/* Mobile menu */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuBackdrop = document.getElementById("menuBackdrop");

let menuOpen = false;

const openMenu = () => {
  menuOpen = true;
  menuBtn.classList.add("open");
  mobileMenu.classList.add("open");
  menuBackdrop.classList.add("open");

  menuBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  menuOpen = false;
  menuBtn.classList.remove("open");
  mobileMenu.classList.remove("open");
  menuBackdrop.classList.remove("open");

  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
};
menuBackdrop.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menuOpen ? closeMenu() : openMenu();
});

document.addEventListener("click", (e) => {
  if (menuOpen && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOpen) closeMenu();
});

document
  .querySelectorAll(".mobile-menu a")
  .forEach(link=>{
    link.addEventListener("click",()=>{
      if(menuOpen) closeMenu();
    });
  });
  
});
