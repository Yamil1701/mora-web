import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isBrowser = typeof window !== 'undefined';

export function initHomeMotion() {
  if (!isBrowser) return;

  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .from('.hero-word span', { yPercent: 105, rotate: 3, duration: 1.15, stagger: 0.08 })
      .from('.hero-statement > *, .hero-acts a, .hero-kicker', { opacity: 0, y: 18, duration: 0.75, stagger: 0.06 }, '-=.7');

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 54,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 84%', once: true },
      });
    });

    gsap.to('[data-hero-matter="skin"]', {
      yPercent: 22,
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
    });
    gsap.to('[data-hero-matter="flavour"]', {
      yPercent: -16,
      rotate: 3,
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
    });

    return () => {
      intro.kill();
    };
  });

  mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    const line = document.querySelector<SVGPathElement>('[data-draw-line]');
    if (line) {
      const length = line.getTotalLength();
      gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(line, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-tattoo-stage]',
          start: 'top 70%',
          end: 'bottom 45%',
          scrub: 0.7,
        },
      });
    }

    gsap.to('[data-pastry-visual] .layer-one', {
      xPercent: 7,
      scrollTrigger: { trigger: '[data-pastry-visual]', start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    });
    gsap.to('[data-pastry-visual] .layer-three', {
      xPercent: -8,
      scrollTrigger: { trigger: '[data-pastry-visual]', start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    });

    const transition = gsap.timeline({
      scrollTrigger: {
        trigger: '[data-transition]',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.7,
      },
    });
    transition
      .to('.plane-ink', { xPercent: -38, clipPath: 'inset(0 78% 0 0)', ease: 'none' }, 0)
      .fromTo('.plane-layer', { xPercent: 24, clipPath: 'inset(0 0 0 100%)' }, { xPercent: 0, clipPath: 'inset(0 0 0 0%)', ease: 'none' }, 0)
      .to('.shared-gesture', { xPercent: 54, rotate: -8, ease: 'none' }, 0)
      .fromTo('.transition-words span:last-child', { opacity: 0 }, { opacity: 1 }, 0.55);
  });

  mm.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
    gsap.from('.stage-copy, .pastry-copy', {
      opacity: 0,
      y: 26,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: { trigger: '.tattoo-act', start: 'top 72%' },
    });

    gsap.from('.shared-gesture', {
      scaleX: 0.2,
      transformOrigin: 'left center',
      duration: 0.85,
      ease: 'power2.out',
      scrollTrigger: { trigger: '[data-transition]', start: 'top 68%', once: true },
    });
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('[data-reveal], .hero-word span, .hero-statement > *, .hero-acts a, .hero-kicker', {
      clearProps: 'all',
      opacity: 1,
    });
  });

  const cleanup = () => mm.revert();
  document.querySelectorAll<HTMLAnchorElement>('.mobile-menu nav a').forEach((link) => {
    link.addEventListener('click', () => link.closest('details')?.removeAttribute('open'));
  });
  window.addEventListener('pagehide', cleanup, { once: true });
}
