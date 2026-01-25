/* =========================================
   Daisy – Animations & Interactions (FINAL)
   Mobile + Desktop
   Floating Header Safe
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* ---------------------------------------
     PAGE LOAD BLUR ANIMATION
  ---------------------------------------- */
  gsap.set("body", { opacity: 0, filter: "blur(14px)" });

  gsap.to("body", {
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out",
  });

  /* ---------------------------------------
     CONFIG LINK BINDING
  ---------------------------------------- */
  if (window.DAISY_CONFIG) {
    const c = window.DAISY_CONFIG.links;

    const bind = (id, link) => {
      const el = document.getElementById(id);
      if (el) el.href = link;
    };

    bind("navHome", c.home);
    bind("navCommands", c.commands);
    bind("navDocs", c.docs);
    bind("inviteBtn", c.invite);

    bind("mNavHome", c.home);
    bind("mNavCommands", c.commands);
    bind("mNavDocs", c.docs);
    bind("mInviteBtn", c.invite);

    bind("heroInvite", c.invite);
    bind("heroSupport", c.support);
    bind("footerInvite", c.invite);
    bind("footerSupport", c.support);
  }

  /* ---------------------------------------
     MOBILE MENU TOGGLE
  ---------------------------------------- */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  let menuOpen = false;

  const openMenu = () => {
    menuOpen = true;
    document.body.style.overflow = "hidden";

    mobileMenu.style.display = "flex";

    gsap.fromTo(
      mobileMenu,
      { opacity: 0, y: -12, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      }
    );
  };

  const closeMenu = () => {
    menuOpen = false;
    document.body.style.overflow = "";

    gsap.to(mobileMenu, {
      opacity: 0,
      y: -12,
      scale: 0.98,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        mobileMenu.style.display = "none";
      },
    });
  };

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuOpen ? closeMenu() : openMenu();
    });
  }

  /* ---------------------------------------
     CLICK OUTSIDE TO CLOSE
  ---------------------------------------- */
  document.addEventListener("click", (e) => {
    if (!menuOpen) return;
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      closeMenu();
    }
  });

  /* ---------------------------------------
     ESC KEY TO CLOSE
  ---------------------------------------- */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuOpen) {
      closeMenu();
    }
  });

  /* ---------------------------------------
     HERO FADE-IN
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
        delay: 0.2,
      }
    );
  }

  /* ---------------------------------------
     BUTTON MICRO INTERACTION
  ---------------------------------------- */
  document.querySelectorAll(".btn, .menu-btn-primary").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.05,
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
     HEADER SCROLL SOFT EFFECT
  ---------------------------------------- */
  const header = document.querySelector(".header");
  let lastScroll = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 60) {
        gsap.to(header, {
          y: -6,
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

      lastScroll = current;
    });
  }
});
