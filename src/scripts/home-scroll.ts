import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export type InputMode = 'keyboard' | 'touch' | 'wheel' | null;

export interface HomeScrollController {
  isLenisActive: () => boolean;
  scrollToPosition: (y: number) => void;
  destroy: () => void;
}

export function createHomeScrollController(): HomeScrollController {
  const lenisQuery = window.matchMedia(
    '(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
  );
  const touchDevice = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  const anchorLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
  let lenis: Lenis | null = null;

  const ticker = (time: number) => lenis?.raf(time * 1000);

  const stopLenis = () => {
    if (!lenis) return;
    gsap.ticker.remove(ticker);
    lenis.destroy();
    lenis = null;
  };

  const startLenis = () => {
    if (lenis || touchDevice || !lenisQuery.matches) return;
    lenis = new Lenis({
      duration: 0.78,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
      autoRaf: false,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(ticker);
    ScrollTrigger.refresh();
  };

  const syncLenisMode = () => {
    if (lenisQuery.matches) startLenis();
    else stopLenis();
  };

  const scrollToPosition = (y: number) => {
    const destination = Math.max(0, y);
    if (lenis) {
      lenis.scrollTo(destination, { duration: 0.68, lock: false });
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: destination, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const handleAnchor = (event: MouseEvent) => {
    if (!lenis) return;
    const link = event.currentTarget as HTMLAnchorElement;
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const target = document.querySelector<HTMLElement>(id);
    if (!target) return;

    event.preventDefault();
    const headerOffset = window.innerWidth < 768 ? 68 : 76;
    scrollToPosition(window.scrollY + target.getBoundingClientRect().top - headerOffset);
    window.history.pushState(null, '', id);
  };

  anchorLinks.forEach((link) => link.addEventListener('click', handleAnchor));
  lenisQuery.addEventListener('change', syncLenisMode);
  startLenis();

  return {
    isLenisActive: () => Boolean(lenis),
    scrollToPosition,
    destroy: () => {
      anchorLinks.forEach((link) => link.removeEventListener('click', handleAnchor));
      lenisQuery.removeEventListener('change', syncLenisMode);
      stopLenis();
    },
  };
}

export function createNarrativeMagnet(controller: HomeScrollController) {
  const targets = gsap.utils.toArray<HTMLElement>('[data-magnet]');
  if (!targets.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => undefined;
  }

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
    let closest: { distance: number } | null = null;

    for (const element of targets) {
      const distance = element.getBoundingClientRect().top - scrollPadding;
      if (Math.abs(distance) > threshold) continue;
      if (!closest || Math.abs(distance) < Math.abs(closest.distance)) closest = { distance };
    }

    if (!closest || Math.abs(closest.distance) < 3) return;
    settling = true;
    inputMode = null;
    controller.scrollToPosition(window.scrollY + closest.distance);
    releaseTimer = window.setTimeout(() => {
      settling = false;
    }, controller.isLenisActive() ? 760 : 520);
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
