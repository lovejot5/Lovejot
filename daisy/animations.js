/* =========================================
   Daisy – Animations & Interactions (FINAL)
   Floating Header • Mobile + Desktop
   GSAP Powered
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------
     PAGE LOAD BLUR → CLEAR ANIMATION
  ---------------------------------------- */
  gsap.set("body", {
    filter: "blur(12px)",
    opacity: 0
  });

  gsap.to("body", {
    filter: "blur(0px)",
    opacity: 1,
    duration: 0.8,
    ease: "power3.out"
  });

  /* ---------------------------------------
     CONFIG LINK BINDING
  ---------------------------------------- */
  if (window.DAISY_CONFIG) {
    const c = DAISY_CONFIG.links;

    const linksMap = {
      navHome: c.home,
      navCommands: c.commands,
      navDocs: c.docs,
      inviteBtn: c.invite,

      mNavHome: c.home,
      mNavCommands: c.commands,
      mNavDocs: c.docs,
      mInviteBtn: c.invite,

      heroInvite: c.invite,
      heroSupport: c.support,
      footerInvite: c.invite,
      footerSupport: c.support,
    };

    Object.keys(linksMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = linksMap[id];
    });
  }

  /* ---------------------------------------
     MOBILE MENU TOGGLE
  ---------------------------------------- */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");

      if (isOpen) {
        // CLOSE MENU
        gsap.to(mobileMenu, {
          opacity: 0,
          y: -12,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => {
            mobileMenu.classList.remove("open");
            mobileMenu.style.display = "none";

            /* 🔓 UNLOCK BACKGROUND SCROLL */
            document.body.style.overflow = "";
          }
        });
      } else {
        // OPEN MENU
        mobileMenu.style.display = "flex";
        mobileMenu.classList.add("open");

        /* 🔒 LOCK BACKGROUND SCROLL */
        document.body.style.overflow = "hidden";

        gsap.fromTo(
          mobileMenu,
          { opacity: 0, y: -14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out"
          }
        );
      }
    });
  }

  /* ---------------------------------------
     HERO FADE-IN
  ---------------------------------------- */
  const hero = document.querySelector(".hero");

  if (hero) {
    gsap.fromTo(
      hero,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out"
      }
    );
  }

  /* ---------------------------------------
     BUTTON MICRO INTERACTIONS
  ---------------------------------------- */
  document.querySelectorAll(".btn, .menu-btn-primary").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.15,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.15,
        ease: "power2.in"
      });
    });
  });

  /* ---------------------------------------
     HEADER FLOAT SCROLL EFFECT
  ---------------------------------------- */
  const header = document.querySelector(".header");
  let lastScroll = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        gsap.to(header, {
          y: -6,
          opacity: 0.95,
          duration: 0.25,
          ease: "power2.out"
        });
      } else {
        gsap.to(header, {
          y: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out"
        });
      }

      lastScroll = current;
    });
  }

});
