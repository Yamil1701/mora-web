import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function preparePath(selector: string) {
  const path = document.querySelector<SVGPathElement>(selector);
  if (!path) return null;
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  return path;
}

export function addSofitMotion(mm: gsap.MatchMedia) {
  mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    const releasePath = preparePath('[data-release-path]');
    const openingPath = preparePath('[data-sofit-path]');
    const bodyPath = preparePath('[data-sofit-body-path]');

    const transition = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-sofit-transition]',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.75,
      },
    });
    transition
      .to('.compression-layer-one', { yPercent: 166, rotate: 0, ease: 'power1.in' }, 0)
      .to('.compression-layer-two', { yPercent: 54, rotate: 0, ease: 'power1.in' }, 0)
      .to('.compression-layer-three', { yPercent: -58, rotate: 0, ease: 'power1.in' }, 0)
      .to('.compression-layer-four', { yPercent: -170, rotate: 0, ease: 'power1.in' }, 0)
      .to('.compression-field', { scaleX: .76, scaleY: .76, filter: 'saturate(.7)', ease: 'power1.in' }, 0)
      .to('.compression-copy span:nth-child(1)', { opacity: .2 }, .12)
      .to('.compression-copy span:nth-child(2)', { color: '#f2eee9' }, .3)
      .to('.compression-layer', { scaleX: .08, opacity: .35, ease: 'power2.in' }, .48)
      .to('.compression-axis', { scaleY: .1, opacity: .2, ease: 'power2.in' }, .48)
      .to('.compression-field', { scale: 1.7, opacity: 0, ease: 'power3.out' }, .63)
      .to('.compression-copy span:nth-child(2)', { opacity: .2 }, .64)
      .to('.compression-copy span:nth-child(3)', { color: '#a3b7bf' }, .66)
      .to(releasePath, { strokeDashoffset: 0, ease: 'power2.out' }, .6)
      .fromTo('.transition-destination', { opacity: 0, y: 24 }, { opacity: 1, y: 0, ease: 'power2.out' }, .76);

    if (openingPath) {
      gsap.to(openingPath, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: { trigger: '[data-sofit-intro]', start: 'top 72%', end: 'bottom 52%', scrub: .75 },
      });
    }
    if (bodyPath) {
      gsap.to(bodyPath, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: { trigger: '[data-sofit-moment="one"]', start: 'top 72%', end: 'bottom 55%', scrub: .7 },
      });
    }

    gsap.from('.sofit-opening-copy', {
      opacity: 0,
      y: 48,
      duration: 1,
      scrollTrigger: { trigger: '.sofit-opening-copy', start: 'top 78%', once: true },
    });
    gsap.to('.sofit-slot-main .slot-surface', {
      yPercent: -5,
      scrollTrigger: { trigger: '[data-sofit-moment="one"]', start: 'top bottom', end: 'bottom top', scrub: .8 },
    });
    gsap.to('.sofit-slot-companion .slot-surface', {
      yPercent: -7,
      scrollTrigger: { trigger: '[data-sofit-moment="two"]', start: 'top bottom', end: 'bottom top', scrub: .8 },
    });

    const exit = gsap.timeline({
      scrollTrigger: { trigger: '[data-sofit-resolution]', start: 'top 72%', end: 'bottom bottom', scrub: .85 },
    });
    exit
      .from('.resolution-paths span', { scaleX: .08, opacity: .8, stagger: .06, ease: 'power2.out' }, 0)
      .to('.resolution-paths span', { xPercent: 34, opacity: .08, stagger: .05, ease: 'power1.out' }, .42)
      .from('.resolution-copy', { y: 40, opacity: 0, ease: 'power2.out' }, .08)
      .to('.resolution-copy', { y: -12, ease: 'none' }, .58);

    gsap.from('.mora-signature-copy, .mora-presence', {
      opacity: 0,
      y: 22,
      duration: 1.1,
      stagger: .12,
      scrollTrigger: { trigger: '[data-mora-signature]', start: 'top 70%', once: true },
    });
    gsap.from('.intent-list a', {
      opacity: 0,
      y: 14,
      duration: .65,
      stagger: .07,
      scrollTrigger: { trigger: '[data-contact-intent]', start: 'top 70%', once: true },
    });
  });

  mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
    const releasePath = preparePath('[data-release-path]');
    const openingPath = preparePath('[data-sofit-path]');
    const bodyPath = preparePath('[data-sofit-body-path]');

    const compression = gsap.timeline({
      scrollTrigger: { trigger: '[data-sofit-transition]', start: 'top 64%', once: true },
    });
    compression
      .to('.compression-layer-one', { yPercent: 144, duration: .6, ease: 'power2.inOut' }, 0)
      .to('.compression-layer-two', { yPercent: 46, duration: .6, ease: 'power2.inOut' }, 0)
      .to('.compression-layer-three', { yPercent: -50, duration: .6, ease: 'power2.inOut' }, 0)
      .to('.compression-layer-four', { yPercent: -148, duration: .6, ease: 'power2.inOut' }, 0)
      .to('.compression-layer', { scaleX: .12, opacity: .25, duration: .45, ease: 'power2.in' }, .46)
      .to(releasePath, { strokeDashoffset: 0, duration: .78, ease: 'power2.out' }, .66)
      .from('.transition-destination', { opacity: 0, y: 18, duration: .5 }, .82);

    [
      { path: openingPath, trigger: '[data-sofit-intro]' },
      { path: bodyPath, trigger: '[data-sofit-moment="one"]' },
    ].forEach(({ path, trigger }) => {
      if (!path) return;
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: .9,
        ease: 'power2.out',
        scrollTrigger: { trigger, start: 'top 72%', once: true },
      });
    });

    gsap.from('.sofit-opening-copy', {
      opacity: 0,
      y: 24,
      duration: .8,
      scrollTrigger: { trigger: '.sofit-opening-copy', start: 'top 78%', once: true },
    });
    gsap.from('.mora-signature-copy, .mora-presence', {
      opacity: 0,
      y: 16,
      duration: .72,
      stagger: .08,
      scrollTrigger: { trigger: '[data-mora-signature]', start: 'top 76%', once: true },
    });
    gsap.from('.resolution-copy', {
      opacity: 0,
      y: 20,
      duration: .72,
      scrollTrigger: { trigger: '[data-sofit-resolution]', start: 'top 72%', once: true },
    });
    gsap.from('.intent-list a', {
      opacity: 0,
      y: 16,
      duration: .55,
      stagger: .06,
      scrollTrigger: { trigger: '[data-contact-intent]', start: 'top 78%', once: true },
    });
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('[data-release-path], [data-sofit-path], [data-sofit-body-path]', { clearProps: 'all' });
  });
}
