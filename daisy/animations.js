/* =========================================
   Daisy – Animations & Interactions
   Mobile + Desktop Safe
========================================= */

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   Page Load – Header Entrance
========================================= */
gsap.from(".header", {
  opacity: 0,
  y: -20,
  duration: 0.6,
  ease: "power2.out",
});

/* =========================================
   Scroll Fade-In Animations
========================================= */
gsap.utils.toArray(".fade").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
});

/* =========================================
   Mobile Menu Toggle (Header)
========================================= */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.style.display === "flex";

    mobileMenu.style.display = isOpen ? "none" : "flex";

    if (!isOpen) {
      gsap.fromTo(
        mobileMenu,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  });

  // Close mobile menu after clicking a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
}

/* =========================================
   Daisy Config → Link Binding
========================================= */
document.addEventListener("DOMContentLoaded", () => {
  if (!window.DAISY_CONFIG) return;

  const linkMap = {
    navHome: DAISY_CONFIG.links.home,
    navCommands: DAISY_CONFIG.links.commands,
    navDocs: DAISY_CONFIG.links.docs,

    mNavHome: DAISY_CONFIG.links.home,
    mNavCommands: DAISY_CONFIG.links.commands,
    mNavDocs: DAISY_CONFIG.links.docs,

    inviteBtn: DAISY_CONFIG.links.invite,
    mInviteBtn: DAISY_CONFIG.links.invite,
  };

  Object.keys(linkMap).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = linkMap[id];
  });

  // Footer text
  const footerText = document.getElementById("footerText");
  if (footerText && DAISY_CONFIG.footer?.text) {
    footerText.textContent = DAISY_CONFIG.footer.text;
  }
});
