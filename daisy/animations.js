gsap.registerPlugin(ScrollTrigger);

// Hero entrance animation
gsap.to(".fade", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  stagger: 0.25,
  ease: "power3.out",
  delay: 0.3
});

// Floating background glow dots (soft motion effect)
gsap.to(".hero", {
  backgroundPosition: "200% 200%",
  duration: 30,
  repeat: -1,
  yoyo: true,
  ease: "linear"
});
