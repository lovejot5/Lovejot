document.addEventListener("DOMContentLoaded", () => {
  if (window.DAISY_CONFIG) {
    const cfg = window.DAISY_CONFIG;

    // Desktop Nav
    const navHome = document.getElementById("navHome");
    const navCommands = document.getElementById("navCommands");
    const navDocs = document.getElementById("navDocs");
    const inviteBtn = document.getElementById("inviteBtn");

    // Mobile Nav
    const mNavHome = document.getElementById("mNavHome");
    const mNavCommands = document.getElementById("mNavCommands");
    const mNavDocs = document.getElementById("mNavDocs");
    const mInviteBtn = document.getElementById("mInviteBtn");

    // Hero / Footer
    const heroInvite = document.getElementById("heroInvite");
    const heroSupport = document.getElementById("heroSupport");
    const footerInvite = document.getElementById("footerInvite");
    const footerSupport = document.getElementById("footerSupport");

    if (navHome) navHome.href = cfg.links.home;
    if (navCommands) navCommands.href = cfg.links.commands;
    if (navDocs) navDocs.href = cfg.links.docs;
    if (inviteBtn) inviteBtn.href = cfg.links.invite;

    if (mNavHome) mNavHome.href = cfg.links.home;
    if (mNavCommands) mNavCommands.href = cfg.links.commands;
    if (mNavDocs) mNavDocs.href = cfg.links.docs;
    if (mInviteBtn) mInviteBtn.href = cfg.links.invite;

    if (heroInvite) heroInvite.href = cfg.links.invite;
    if (heroSupport) heroSupport.href = cfg.links.support;
    if (footerInvite) footerInvite.href = cfg.links.invite;
    if (footerSupport) footerSupport.href = cfg.links.support;
  }

/* ===============================
   MOBILE MENU TOGGLE
================================ */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.classList.contains("open");

    if (open) {
      gsap.to(mobileMenu, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          mobileMenu.style.display = "none";
          mobileMenu.classList.remove("open");
        }
      });
    } else {
      mobileMenu.style.display = "flex";
      mobileMenu.classList.add("open");

      gsap.fromTo(
        mobileMenu,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out"
        }
      );
    }
  });
}

  /* ---------------------------------------
     HERO LOAD ANIMATION
  ---------------------------------------- */
  const hero = document.querySelector(".hero");

  if (hero) {
    gsap.fromTo(
      hero,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      }
    );
  }

  /* ---------------------------------------
     BUTTON MICRO-INTERACTIONS
  ---------------------------------------- */
  const buttons = document.querySelectorAll(
    ".btn, .menu-btn-primary"
  );

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.04,
        duration: 0.15,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.15,
        ease: "power2.in",
      });
    });
  });

  /* ---------------------------------------
     HEADER SCROLL BEHAVIOR
  ---------------------------------------- */
  const header = document.querySelector(".header");
  let lastScroll = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 60 && currentScroll > lastScroll) {
        gsap.to(header, {
          y: -10,
          opacity: 0.95,
          duration: 0.25,
          ease: "power2.out",
        });
      } else {
        gsap.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      }

      lastScroll = currentScroll;
    });
  }
});
