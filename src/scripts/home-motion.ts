import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createHomeScrollController, createNarrativeMagnet } from './home-scroll';
import { initRetractableHeader } from './home-header';
import { addSofitMotion } from './sofit-motion';

gsap.registerPlugin(ScrollTrigger);

const isBrowser = typeof window !== 'undefined';

function prepareLine(path: SVGPathElement) {
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  return length;
}

export function initHomeMotion() {
  if (!isBrowser) return;

  const mm = gsap.matchMedia();
  const scrollController = createHomeScrollController();
  const cleanupHeader = initRetractableHeader();
  let cleanupMagnet: () => void = () => undefined;

  addSofitMotion(mm);

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const matterScrolls: gsap.core.Tween[] = [];
    const intro = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        matterScrolls.push(
          gsap.to('[data-hero-matter="skin"]', {
            yPercent: 22,
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
          }),
          gsap.to('[data-hero-matter="flavour"]', {
            yPercent: -16,
            rotate: 3,
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 },
          }),
        );
        ScrollTrigger.refresh();
      },
    });

    intro
      .from('.hero-word span', { yPercent: 105, rotate: 3, duration: 1.15, stagger: 0.08 }, 0.04)
      .from('[data-hero-matter="skin"]', { xPercent: 42, yPercent: -28, rotate: 18, scale: 0.92, opacity: 0, duration: 1.08 }, 0.08)
      .from('[data-hero-matter="motion"]', { xPercent: -76, rotate: -13, scaleY: 0.72, opacity: 0, duration: 0.92 }, 0.44)
      .from('[data-hero-matter="flavour"]', { xPercent: 48, yPercent: 34, rotate: -16, scale: 0.9, opacity: 0, duration: 1.02 }, 0.84)
      .from('.hero-statement > *', { opacity: 0, y: 15, duration: 0.68, stagger: 0.07 }, 0.42)
      .from('.hero-acts a', { opacity: 0, y: 12, duration: 0.62, stagger: 0.055 }, 0.56)
      .from('.hero-kicker, .scroll-cue', { opacity: 0, duration: 0.55, stagger: 0.06 }, 0.64);

    gsap.utils.toArray<HTMLElement>('[data-reveal]:not(.stage-copy):not(.pastry-copy):not(.resolution-copy)').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 54,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 84%', once: true },
      });
    });

    cleanupMagnet = createNarrativeMagnet(scrollController);

    return () => {
      cleanupMagnet();
      cleanupMagnet = () => undefined;
      matterScrolls.forEach((tween) => tween.kill());
      intro.kill();
    };
  });

  mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
    const line = document.querySelector<SVGPathElement>('[data-draw-line]');
    if (line) {
      prepareLine(line);
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

    gsap.from('.stage-copy', {
      opacity: 0,
      y: 34,
      duration: 0.9,
      scrollTrigger: { trigger: '.stage-copy', start: 'top 82%', once: true },
    });
    gsap.from('.pastry-copy', {
      opacity: 0,
      y: 34,
      duration: 0.9,
      scrollTrigger: { trigger: '.pastry-copy', start: 'top 82%', once: true },
    });

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
    const line = document.querySelector<SVGPathElement>('[data-draw-line]');
    if (line) {
      prepareLine(line);
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 0.72,
        ease: 'power2.out',
        scrollTrigger: { trigger: '[data-tattoo-stage]', start: 'top 68%', once: true },
      });
    }

    gsap.from('.stage-copy', {
      opacity: 0,
      y: 24,
      duration: 0.72,
      scrollTrigger: { trigger: '.stage-copy', start: 'top 84%', once: true },
    });
    gsap.from('.pastry-copy', {
      opacity: 0,
      y: 24,
      duration: 0.72,
      scrollTrigger: { trigger: '.pastry-copy', start: 'top 84%', once: true },
    });

    const transition = gsap.timeline({
      scrollTrigger: { trigger: '.transition-frame', start: 'top 72%', once: true },
    });
    transition
      .fromTo('.plane-ink',
        { clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0 100%)' },
        { clipPath: 'polygon(0 0, 52% 0, 40% 100%, 0 100%)', duration: 0.78, ease: 'power2.inOut' }, 0)
      .fromTo('.plane-layer',
        { clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 76% 100%)', xPercent: 8 },
        { clipPath: 'polygon(52% 0, 100% 0, 100% 100%, 40% 100%)', xPercent: 0, duration: 0.78, ease: 'power2.inOut' }, 0)
      .fromTo('.shared-gesture',
        { scaleX: 0.18, opacity: 0.55 },
        { scaleX: 1, opacity: 1, duration: 0.68, ease: 'power2.out' }, 0.12)
      .from('.transition-words span:last-child', { opacity: 0, x: 10, duration: 0.36 }, 0.48);
  });

  mm.add('(prefers-reduced-motion: reduce)', () => {
    gsap.set('[data-reveal], .hero-word span, .hero-statement > *, .hero-acts a, .hero-kicker, .scroll-cue, .matter, [data-draw-line]', {
      clearProps: 'all',
      opacity: 1,
    });
  });

  const cleanup = () => {
    mobileMenuLinks.forEach((link) => link.removeEventListener('click', closeMobileMenu));
    document.removeEventListener('keydown', closeMobileMenuWithEscape);
    cleanupMagnet();
    cleanupHeader();
    scrollController.destroy();
    mm.revert();
  };

  const mobileMenu = document.querySelector<HTMLDetailsElement>('.mobile-menu');
  const mobileMenuSummary = mobileMenu?.querySelector<HTMLElement>('summary');
  const mobileMenuLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.mobile-menu nav a'));
  const closeMobileMenu = () => mobileMenu?.removeAttribute('open');
  const closeMobileMenuWithEscape = (event: KeyboardEvent) => {
    if (event.key !== 'Escape' || !mobileMenu?.open) return;
    closeMobileMenu();
    mobileMenuSummary?.focus();
  };

  mobileMenuLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', closeMobileMenuWithEscape);
  window.addEventListener('pagehide', cleanup, { once: true });
}
