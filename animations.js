(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll reveals */
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* Career plot draws itself when it scrolls into view */
  const careerSvg = document.getElementById('career-svg');
  if (careerSvg) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      careerSvg.classList.add('drawn');
    } else {
      const plotObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              careerSvg.classList.add('drawn');
              plotObserver.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );
      plotObserver.observe(careerSvg);
    }
  }
})();
