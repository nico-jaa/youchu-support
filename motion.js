// Reveal below-the-fold chapters once. Content is readable without this script.
(() => {
  const chapters = [...document.querySelectorAll('[data-reveal]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const reveal = element => {
    if (!element || element.dataset.revealState === 'visible') return;
    element.dataset.revealState = 'visible';
    if (element.classList.contains('reveal-pending')) {
      element.dataset.revealCount = '1';
      element.classList.add('is-revealed');
    }
    if (observer) observer.unobserve(element);
  };
  const showImmediately = element => {
    reveal(element);
    if (element) element.classList.remove('reveal-pending', 'is-revealed');
  };
  const revealTarget = target => {
    for (let element = target; element; element = element.parentElement) {
      if (element.hasAttribute('data-reveal')) showImmediately(element);
    }
  };
  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
    chapters.forEach(reveal);
    return;
  }
  try {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target); });
    }, {rootMargin: '0px 0px -36px 0px', threshold: 0});
    chapters.forEach(chapter => {
      // Do not animate the content already visible on arrival or hash navigation.
      if (chapter.getBoundingClientRect().top < innerHeight - 36) reveal(chapter);
      else {
        chapter.dataset.revealState = 'pending';
        chapter.classList.add('reveal-pending');
        observer.observe(chapter);
      }
    });
    const revealHash = () => {
      let id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      revealTarget(document.getElementById(id));
    };
    revealHash();
    window.addEventListener('hashchange', revealHash);
    document.addEventListener('focusin', event => revealTarget(event.target));
    document.addEventListener('click', event => {
      const link = event.target.closest('a[href^="#"]');
      if (link) {
        let id;
        try { id = decodeURIComponent(link.hash.slice(1)); } catch { return; }
        revealTarget(document.getElementById(id));
      }
    });
    document.addEventListener('input', event => {
      if (event.target.id === 'help-query') {
        chapters.filter(chapter => chapter.classList.contains('help-group') && !chapter.hidden).forEach(showImmediately);
      }
    });
    reducedMotion.addEventListener('change', event => {
      if (event.matches) {
        chapters.forEach(reveal);
        observer.disconnect();
      }
    });
  } catch {
    chapters.forEach(chapter => {
      chapter.classList.remove('reveal-pending');
      chapter.dataset.revealState = 'visible';
    });
    if (observer) observer.disconnect();
  }
})();
