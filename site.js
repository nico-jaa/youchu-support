// Browser-local reading tools. No network requests, analytics or persisted state.
(() => {
  const english = document.documentElement.lang.startsWith('en');
  const query = document.getElementById('help-query');
  if (query) {
    const topics = [...document.querySelectorAll('.help-topic')];
    const groups = [...document.querySelectorAll('.help-group')];
    const status = document.getElementById('search-status');
    const clear = document.getElementById('clear-search');
    let previousOpen = null;
    const normalize = value => value.normalize('NFKC').toLocaleLowerCase(english ? 'en' : 'zh-CN');
    const update = () => {
      const term = normalize(query.value.trim());
      if (term && previousOpen === null) previousOpen = new Set(topics.filter(topic => topic.open).map(topic => topic.id));
      let count = 0;
      topics.forEach(topic => {
        const category = topic.closest('.help-group').querySelector('h2').textContent;
        const matches = !term || normalize(category + ' ' + topic.textContent).includes(term);
        topic.hidden = !matches;
        if (term) topic.open = matches;
        else if (previousOpen !== null) topic.open = previousOpen.has(topic.id);
        if (matches) count += 1;
      });
      if (!term) previousOpen = null;
      groups.forEach(group => { group.hidden = ![...group.querySelectorAll('.help-topic')].some(topic => !topic.hidden); });
      document.getElementById('no-results').hidden = count !== 0;
      clear.hidden = !query.value;
      status.textContent = english ? (term ? `${count} related articles` : `${topics.length} articles, grouped by topic`) : (term ? `找到 ${count} 条相关帮助` : `共 ${topics.length} 条帮助，可按分类阅读`);
    };
    const reset = () => { query.value = ''; update(); query.focus(); };
    query.addEventListener('input', update);
    clear.addEventListener('click', reset);
    document.getElementById('reset-search').addEventListener('click', reset);
    const openHash = () => {
      let id;
      try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (target && target.classList.contains('help-topic')) {
        query.value = ''; update(); target.open = true;
      }
    };
    document.querySelectorAll('.category-links a,.quick-links a,.support-aside a').forEach(link => link.addEventListener('click', () => {
      query.value = ''; update();
      const target = document.getElementById(link.hash.slice(1));
      if (target?.tagName === 'DETAILS') target.open = true;
    }));
    window.addEventListener('hashchange', openHash);
    document.getElementById('help-search').hidden = false;
    update(); openHash();
  }
  const dialog = document.getElementById('screen-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    let opener;
    document.querySelectorAll('[data-zoom]').forEach(button => {
      button.addEventListener('click', () => {
        opener = button;
        const slot = dialog.querySelector('.dialog-slot');
        slot.replaceChildren(button.querySelector('.shot-frame').cloneNode(true));
        dialog.querySelector('#screen-caption').textContent = button.dataset.caption;
        dialog.showModal();
      });
    });
    dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));
  } else document.querySelectorAll('[data-zoom]').forEach(button => { button.disabled = true; });
})();
