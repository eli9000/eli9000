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

  /* Career plot draws itself when it scrolls into view. On narrow screens the
     plot overflows sideways, so after the draw we pan along the x-axis to
     "you are here" — otherwise phones only ever see the 2009 flat years. */
  const careerSvg = document.getElementById('career-svg');
  const plotScroll = document.querySelector('.plot-scroll');
  const panToNow = () => {
    if (!plotScroll) return;
    const overflow = plotScroll.scrollWidth - plotScroll.clientWidth;
    if (overflow > 40) {
      setTimeout(() => plotScroll.scrollTo({ left: overflow, behavior: 'smooth' }), 1700);
    }
  };
  if (careerSvg) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      careerSvg.classList.add('drawn');
    } else {
      const plotObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              careerSvg.classList.add('drawn');
              panToNow();
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
