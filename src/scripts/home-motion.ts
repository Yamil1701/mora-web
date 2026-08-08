import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isBrowser = typeof window !== 'undefined';

type InputMode = 'keyboard' | 'touch' | 'wheel' | null;

function prepareLine(path: SVGPathElement) {
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  return length;
}

function createNarrativeMagnet() {
  const targets = gsap.utils.toArray<HTMLElement>('[data-magnet]');
  if (!targets.length) return () => undefined;

  let inputMode: InputMode = null;
  let idleTimer = 0;
  let releaseTimer = 0;
  let lastY = window.scrollY;
  let lastTime = performance.now();
  let velocity = 0;
  let settling = false;

  const markInput = (mode: InputMode) => {
    inputMode = mode;
    window.clearTimeout(releaseTimer);
    releaseTimer = window.setTimeout(() => {
      inputMode = null;
    }, 700);
  };

  const settleNearComposition = () => {
    if (settling || (inputMode !== 'wheel' && inputMode !== 'touch')) return;

    const mobile = window.matchMedia('(max-width: 767px)').matches;
    const threshold = mobile ? 22 : Math.min(78, window.innerHeight * 0.09);
    const maxVelocity = mobile ? 0.34 : 0.58;
    if (velocity > maxVelocity) return;

    const scrollPadding = mobile ? 68 : 76;
    let closest: { element: HTMLElement; distance: number } | null = null;

    for (const element of targets) {
      const distance = element.getBoundingClientRect().top - scrollPadding;
      if (Math.abs(distance) > threshold) continue;
      if (!closest || Math.abs(distance) < Math.abs(closest.distance)) {
        closest = { element, distance };
      }
    }

    if (!closest || Math.abs(closest.distance) < 3) return;
    const destination = Math.max(0, window.scrollY + closest.distance);
    settling = true;
    inputMode = null;
    window.scrollTo({ top: destination, behavior: 'smooth' });
    releaseTimer = window.setTimeout(() => {
      settling = false;
    }, 520);
  };

  const onScroll = () => {
    const now = performance.now();
    const elapsed = Math.max(16, now - lastTime);
    const instantVelocity = Math.abs(window.scrollY - lastY) / elapsed;
    velocity = velocity * 0.68 + instantVelocity * 0.32;
    lastY = window.scrollY;
    lastTime = now;

    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(settleNearComposition, inputMode === 'touch' ? 240 : 185);
  };

  const onWheel = () => markInput('wheel');
  const onTouch = () => markInput('touch');
  const onKeydown = () => markInput('keyboard');

  window.addEventListener('wheel', onWheel, { passive: true });
  window.addEventListener('touchstart', onTouch, { passive: true });
  window.addEventListener('touchmove', onTouch, { passive: true });
  window.addEventListener('keydown', onKeydown);
  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.clearTimeout(idleTimer);
    window.clearTimeout(releaseTimer);
    window.removeEventListener('wheel', onWheel);
    window.removeEventListener('touchstart', onTouch);
    window.removeEventListener('touchmove', onTouch);
    window.removeEventListener('keydown', onKeydown);
    window.removeEventListener('scroll', onScroll);
  };
}

export function initHomeMotion() {
  if (!isBrowser) return;

  const mm = gsap.matchMedia();
  let cleanupMagnet: () => void = () => undefined;

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

    gsap.utils.toArray<HTMLElement>('[data-reveal]:not(.stage-copy):not(.pastry-copy)').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 54,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 84%', once: true },
      });
    });

    cleanupMagnet = createNarrativeMagnet();

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
    cleanupMagnet();
    mm.revert();
  };
  document.querySelectorAll<HTMLAnchorElement>('.mobile-menu nav a').forEach((link) => {
    link.addEventListener('click', () => link.closest('details')?.removeAttribute('open'));
  });
  window.addEventListener('pagehide', cleanup, { once: true });
}
