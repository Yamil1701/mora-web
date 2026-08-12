export function initRetractableHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const dock = document.querySelector<HTMLButtonElement>('[data-header-dock]');
  const mobileMenu = header?.querySelector<HTMLDetailsElement>('.mobile-menu');
  const mobileMenuSummary = mobileMenu?.querySelector<HTMLElement>('summary');
  const desktopFirstLink = header?.querySelector<HTMLAnchorElement>('.desktop-nav a');

  if (!header || !dock) return () => undefined;

  let lastY = window.scrollY;
  let direction: 'down' | 'up' | null = null;
  let directionDistance = 0;
  let frame = 0;

  const setCollapsed = (collapsed: boolean) => {
    const canCollapse = collapsed
      && window.scrollY > 96
      && !mobileMenu?.open
      && !header.contains(document.activeElement);

    header.classList.toggle('is-collapsed', canCollapse);
    dock.classList.toggle('is-visible', canCollapse);
    dock.tabIndex = canCollapse ? 0 : -1;
    dock.setAttribute('aria-hidden', String(!canCollapse));
    dock.setAttribute('aria-expanded', String(!canCollapse));
  };

  const showHeader = () => setCollapsed(false);
  const hideHeader = () => setCollapsed(true);

  const updateFromScroll = () => {
    frame = 0;
    const currentY = window.scrollY;
    const delta = currentY - lastY;
    const nextDirection = delta > 0 ? 'down' : delta < 0 ? 'up' : direction;

    if (currentY <= 32) {
      direction = null;
      directionDistance = 0;
      showHeader();
    } else if (nextDirection) {
      if (nextDirection !== direction) {
        direction = nextDirection;
        directionDistance = 0;
      }
      directionDistance += Math.abs(delta);

      if (direction === 'down' && directionDistance >= 48) hideHeader();
      if (direction === 'up' && directionDistance >= 16) showHeader();
    }

    lastY = currentY;
  };

  const onScroll = () => {
    if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
  };

  const openFromDock = () => {
    showHeader();

    if (window.matchMedia('(max-width: 767px)').matches && mobileMenu) {
      mobileMenu.open = true;
      mobileMenuSummary?.focus();
      return;
    }

    desktopFirstLink?.focus();
  };

  const keepVisibleForFocus = () => showHeader();
  const onMenuToggle = () => {
    if (mobileMenu?.open) showHeader();
  };
  const onNavigation = (event: Event) => {
    const link = event.currentTarget as HTMLAnchorElement;
    if (event instanceof MouseEvent && event.detail > 0) link.blur();
    if (!link.hash || window.scrollY <= 96) return;
    window.setTimeout(hideHeader, 80);
  };
  const releasePointerFocus = () => {
    const activeElement = document.activeElement;
    if (activeElement instanceof HTMLElement && header.contains(activeElement) && !mobileMenu?.open) {
      activeElement.blur();
    }
  };

  const navigationLinks = Array.from(header.querySelectorAll<HTMLAnchorElement>('nav a'));
  dock.addEventListener('click', openFromDock);
  header.addEventListener('focusin', keepVisibleForFocus);
  mobileMenu?.addEventListener('toggle', onMenuToggle);
  navigationLinks.forEach((link) => link.addEventListener('click', onNavigation));
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('wheel', releasePointerFocus, { passive: true });
  window.addEventListener('touchstart', releasePointerFocus, { passive: true });

  updateFromScroll();

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    dock.removeEventListener('click', openFromDock);
    header.removeEventListener('focusin', keepVisibleForFocus);
    mobileMenu?.removeEventListener('toggle', onMenuToggle);
    navigationLinks.forEach((link) => link.removeEventListener('click', onNavigation));
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('wheel', releasePointerFocus);
    window.removeEventListener('touchstart', releasePointerFocus);
  };
}
