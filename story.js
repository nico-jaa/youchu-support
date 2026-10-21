// Local carousel: five seconds to read, 600ms eased transitions, no network or storage.
(() => {
  const gallery = document.querySelector('.story-gallery');
  const viewport = document.getElementById('story-viewport');
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const panels = [...viewport.querySelectorAll('[role="tabpanel"]')];
  const previous = document.getElementById('previous-story');
  const next = document.getElementById('next-story');
  const announcement = document.getElementById('story-announcement');
  const dots = [...document.querySelectorAll('.story-dots i')];
  const titles = tabs.map(tab => tab.getAttribute('aria-label'));
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const dwell = 5000;
  const duration = 600;
  const wrap = value => (value % panels.length + panels.length) % panels.length;
  let index = 0;
  let requestedIndex = 0;
  let previousWidth = viewport.clientWidth;
  let userPaused = reducedMotion.matches;
  let keyboardPaused = false;
  let hovering = finePointer.matches && gallery.matches(':hover');
  let touching = false;
  let pointerFocus = false;
  let inView = false;
  let lockedScroll = false;
  let rotationTimer, settleTimer, animationFrame, jumpFrame, animation, drag;

  // Identical end frames allow 03 -> 01 to continue forward without a rewind.
  // Copies are decorative and never receive focus or duplicate accessible IDs.
  function copyPanel(panel) {
    const copy = panel.cloneNode(true);
    copy.removeAttribute('id');
    copy.removeAttribute('role');
    copy.removeAttribute('aria-labelledby');
    copy.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
    copy.setAttribute('aria-hidden', 'true');
    copy.inert = true;
    copy.tabIndex = -1;
    copy.classList.add('story-copy-frame');
    return copy;
  }
  viewport.prepend(copyPanel(panels[panels.length - 1]));
  viewport.append(copyPanel(panels[0]));

  const widthChanged = () => Math.abs(viewport.clientWidth - previousWidth) >= .5;
  const pageAtOffset = () => wrap(Math.round(viewport.scrollLeft / Math.max(1, viewport.clientWidth)) - 1);
  const canRotate = () => !userPaused && !keyboardPaused && !hovering && !touching && inView && !document.hidden;
  const clearRotation = () => clearTimeout(rotationTimer);

  function syncRotation() {
    gallery.dataset.rotation = canRotate() ? 'playing' : 'paused';
    announcement.setAttribute('aria-live', userPaused || keyboardPaused ? 'polite' : 'off');
  }

  function scheduleRotation() {
    clearRotation();
    syncRotation();
    if (!canRotate() || animation || drag) return;
    rotationTimer = setTimeout(() => {
      if (canRotate()) select(requestedIndex + 1, {automatic: true});
    }, dwell);
  }

  function render(value) {
    index = wrap(value);
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].inert = i !== index;
      panels[i].setAttribute('aria-hidden', String(i !== index));
      panels[i].tabIndex = i === index ? 0 : -1;
      dots[i].classList.toggle('active', i === index);
    });
    announcement.textContent = document.documentElement.lang.startsWith('en') ? `Scene ${index + 1} of ${panels.length}: ${titles[index]}.` : '第 ' + (index + 1) + ' 个，共 ' + panels.length + ' 个场景：' + titles[index] + '。';
  }

  function stopAnimation() {
    cancelAnimationFrame(animationFrame);
    animation = undefined;
  }

  function jumpTo(slot) {
    cancelAnimationFrame(jumpFrame);
    lockedScroll = true;
    viewport.classList.add('is-animating');
    viewport.scrollLeft = slot * viewport.clientWidth;
    jumpFrame = requestAnimationFrame(() => {
      lockedScroll = false;
      if (!animation) viewport.classList.remove('is-animating');
    });
  }

  function settle() {
    if (animation || lockedScroll || drag || widthChanged()) return;
    requestedIndex = pageAtOffset();
    jumpTo(requestedIndex + 1);
    render(requestedIndex);
    scheduleRotation();
  }

  function select(value, {focusTab = false, focusPanel = false, instant = false, automatic = false} = {}) {
    clearRotation();
    clearTimeout(settleTimer);
    stopAnimation();
    requestedIndex = wrap(value);
    const from = viewport.scrollLeft;
    const slots = [requestedIndex + 1];
    if (requestedIndex === 0) slots.push(panels.length + 1);
    if (requestedIndex === panels.length - 1) slots.push(0);
    const slot = slots.reduce((best, candidate) =>
      Math.abs(candidate * viewport.clientWidth - from) < Math.abs(best * viewport.clientWidth - from) ? candidate : best);
    const to = slot * viewport.clientWidth;
    if (!automatic) render(requestedIndex);
    if (focusTab) tabs[requestedIndex].focus({preventScroll: true});
    if (focusPanel) panels[requestedIndex].focus({preventScroll: true});
    if (instant || reducedMotion.matches || Math.abs(to - from) < .5) {
      jumpTo(requestedIndex + 1);
      render(requestedIndex);
      scheduleRotation();
      return;
    }
    const motion = {from, to, target: requestedIndex, started: performance.now()};
    animation = motion;
    viewport.classList.add('is-animating');
    function frame(now) {
      if (animation !== motion) return;
      const progress = Math.min(1, (now - motion.started) / duration);
      // A cosine curve has zero velocity at both ends, with mild acceleration.
      const eased = (1 - Math.cos(Math.PI * progress)) / 2;
      viewport.scrollLeft = motion.from + (motion.to - motion.from) * eased;
      if (progress < 1) animationFrame = requestAnimationFrame(frame);
      else {
        animation = undefined;
        jumpTo(motion.target + 1);
        render(motion.target);
        scheduleRotation();
      }
    }
    animationFrame = requestAnimationFrame(frame);
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => select(i));
    tab.addEventListener('keydown', event => {
      const destinations = {ArrowLeft: wrap(i - 1), ArrowRight: wrap(i + 1), Home: 0, End: panels.length - 1};
      if (!(event.key in destinations)) return;
      event.preventDefault();
      select(destinations[event.key], {focusTab: true});
    });
  });
  previous.addEventListener('click', () => select(requestedIndex - 1));
  next.addEventListener('click', () => select(requestedIndex + 1));
  viewport.addEventListener('keydown', event => {
    if (event.key === ' ' && (event.target === viewport || panels.includes(event.target))) {
      event.preventDefault();
      userPaused = !(userPaused || keyboardPaused);
      keyboardPaused = false;
      scheduleRotation();
      return;
    }
    const destinations = {ArrowLeft: wrap(index - 1), ArrowRight: wrap(index + 1), Home: 0, End: panels.length - 1};
    if (!(event.key in destinations)) return;
    event.preventDefault();
    select(destinations[event.key], {focusPanel: true});
  });
  viewport.addEventListener('scroll', () => {
    if (animation || lockedScroll || drag || widthChanged()) return;
    clearRotation();
    clearTimeout(settleTimer);
    settleTimer = setTimeout(settle, 130);
  }, {passive: true});
  viewport.addEventListener('scrollend', settle);

  gallery.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse' || !finePointer.matches) return;
    hovering = true;
    scheduleRotation();
  });
  gallery.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'mouse') return;
    hovering = false;
    scheduleRotation();
  });
  gallery.addEventListener('pointerdown', event => {
    pointerFocus = true;
    keyboardPaused = false;
    if (event.pointerType !== 'mouse') touching = true;
    clearRotation();
    syncRotation();
  });
  // Keep a focused story still; Space offers keyboard pause/resume without a button.
  gallery.addEventListener('focusin', () => {
    if (pointerFocus) return;
    keyboardPaused = true;
    scheduleRotation();
  });
  gallery.addEventListener('focusout', event => {
    if (gallery.contains(event.relatedTarget)) return;
    keyboardPaused = false;
    scheduleRotation();
  });
  document.addEventListener('pointerup', () => {
    pointerFocus = false;
    touching = false;
    scheduleRotation();
  });
  document.addEventListener('pointercancel', () => {
    pointerFocus = false;
    touching = false;
    scheduleRotation();
  });

  // Touch keeps native horizontal scrolling. Mouse dragging uses the same track.
  viewport.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse') {
      stopAnimation();
      viewport.classList.remove('is-animating');
      return;
    }
    if (event.button !== 0 || !event.target.closest('.comic')) return;
    const interrupted = Boolean(animation);
    stopAnimation();
    drag = {id: event.pointerId, x: event.clientX, offset: viewport.scrollLeft, moved: false, interrupted};
  });
  viewport.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId || (event.buttons & 1) === 0) return;
    const distance = event.clientX - drag.x;
    if (!drag.moved && Math.abs(distance) < 7) return;
    if (!drag.moved) {
      drag.moved = true;
      viewport.classList.add('is-dragging');
      viewport.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    viewport.scrollLeft = drag.offset - distance;
  });
  function endDrag(event) {
    if (!drag || event.pointerId !== drag.id) return;
    const shouldSettle = drag.moved || drag.interrupted;
    drag = undefined;
    viewport.classList.remove('is-dragging');
    if (shouldSettle) select(pageAtOffset());
    else scheduleRotation();
  }
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);
  viewport.addEventListener('lostpointercapture', endDrag);

  function restorePosition() {
    clearTimeout(settleTimer);
    stopAnimation();
    drag = undefined;
    touching = false;
    pointerFocus = false;
    viewport.classList.remove('is-dragging');
    hovering = finePointer.matches && gallery.matches(':hover');
    jumpTo(requestedIndex + 1);
    render(requestedIndex);
    scheduleRotation();
  }
  new ResizeObserver(() => {
    if (!widthChanged()) return;
    previousWidth = viewport.clientWidth;
    restorePosition();
  }).observe(viewport);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      const entry = entries[entries.length - 1];
      inView = entry.isIntersecting && entry.intersectionRatio >= .35;
      scheduleRotation();
    }, {threshold: [0, .35]}).observe(viewport);
  } else inView = true;
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) userPaused = true;
    restorePosition();
  });
  finePointer.addEventListener('change', () => {
    hovering = finePointer.matches && gallery.matches(':hover');
    scheduleRotation();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) restorePosition();
    else scheduleRotation();
  });
  window.addEventListener('pagehide', () => {
    clearRotation();
    clearTimeout(settleTimer);
    stopAnimation();
  });
  window.addEventListener('pageshow', restorePosition);
  jumpTo(1);
  render(0);
  scheduleRotation();
})();
