(function () {
  const ARTIFACTS = [
    { id: '1', code: 'AI-001', type: 'chapter', title: 'Chapter 001', meta: 'Documented event', date: '2024', link: '#' },
    { id: '2', code: 'AI-002', type: 'chapter', title: 'Chapter 002', meta: 'Documented event', date: '2024', link: '#' },
    { id: '3', code: 'AI-003', type: 'chapter', title: 'Chapter 003', meta: 'Documented event', date: '2024', link: '#' },
    { id: '4', code: 'AI-004', type: 'chapter', title: 'Chapter 004', meta: 'Documented event', date: '2025', link: '#' },
    { id: '5', code: 'AI-005', type: 'chapter', title: 'Chapter 005', meta: 'Documented event', date: '2025', link: '#' },
    { id: '6', code: 'AI-006', type: 'content', title: 'ENTER · Substack', meta: 'Monthly archive', date: '—', link: '#' },
    { id: '7', code: 'AI-007', type: 'content', title: 'Sights: Science // Fiction', meta: 'Event documentation', date: '2025', link: '#' },
    { id: '8', code: 'AI-008', type: 'production', title: 'Lighthouse Brand Sprint', meta: 'Client · Brand', date: '2026', link: '#' },
    { id: '9', code: 'AI-009', type: 'production', title: 'Studio project archive', meta: 'Client work', date: '—', link: '#' },
    { id: '10', code: 'AI-010', type: 'cultural', title: 'Object catalog', meta: 'Provenance & attribution', date: 'Building', link: '#' },
    { id: '11', code: 'AI-011', type: 'chapter', title: 'Lab + Stage', meta: 'WhiteBox · BlackBox', date: '—', link: '#' },
    { id: '12', code: 'AI-012', type: 'content', title: 'Press & social', meta: 'Content pipeline', date: '—', link: '#' },
  ];

  const typeLabels = {
    chapter: 'Chapters',
    content: 'Content',
    production: 'Production',
    cultural: 'Cultural',
  };

  let currentType = 'all';
  let currentQuery = '';
  let viewMode = 'grid'; // 'list' | 'grid'
  let focusedIndex = 0;

  const $list = document.getElementById('artifact-list');
  const $grid = document.getElementById('artifact-grid');
  const $meta = document.getElementById('result-meta');
  const $empty = document.getElementById('empty-state');
  const $search = document.getElementById('search-input');
  const $clear = document.getElementById('search-clear');
  const $viewLabel = document.getElementById('view-label');
  const $overview = document.getElementById('overview-header');
  const $overviewCount = document.getElementById('overview-count');

  function matchesQuery(artifact) {
    if (!currentQuery.trim()) return true;
    const q = currentQuery.toLowerCase();
    const str = [artifact.code, artifact.title, artifact.meta, artifact.date, typeLabels[artifact.type]].join(' ').toLowerCase();
    return str.includes(q);
  }

  function matchesType(artifact) {
    if (currentType === 'all') return true;
    return artifact.type === currentType;
  }

  function getFiltered() {
    return ARTIFACTS.filter(function (a) {
      return matchesQuery(a) && matchesType(a);
    });
  }

  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderListItem(artifact) {
    const li = document.createElement('li');
    const href = artifact.link || '#';
    li.innerHTML =
      '<a class="artifact-list-link" href="' + href + '" data-index="-1" data-code="' + escapeHtml(artifact.code) + '">' +
        '<span class="artifact-list-code">' + escapeHtml(artifact.code) + '</span>' +
        '<span class="artifact-list-title">' + escapeHtml(artifact.title) + '</span>' +
      '</a>';
    return li;
  }

  function renderCard(artifact) {
    const li = document.createElement('li');
    const typeLabel = typeLabels[artifact.type] || artifact.type;
    const href = artifact.link || '#';
    const fileCode = artifact.code.replace(/-/, '_');
    const dateLabel = (artifact.date && artifact.date !== '—') ? artifact.date : typeLabel;
    li.innerHTML =
      '<div class="artifact-card" data-id="' + artifact.id + '">' +
        '<span class="artifact-aux-circle" aria-hidden="true"><span class="artifact-aux">' + escapeHtml(dateLabel) + '</span></span>' +
        '<a class="artifact-thumb-link" href="' + href + '" data-index="-1" title="' + escapeHtml(artifact.title) + '">' +
          '<div class="artifact-thumb">' +
            '<div class="artifact-thumb-inner">' + escapeHtml(typeLabel) + '</div>' +
            '<div class="artifact-actions">' +
              '<span class="btn btn-view">View</span>' +
              '<button type="button" class="btn btn-copy" title="Copy link">Copy link</button>' +
            '</div>' +
          '</div>' +
        '</a>' +
        '<div class="artifact-body">' +
          '<a class="artifact-filename" href="' + href + '" data-index="-1">' + escapeHtml(fileCode) + '</a>' +
          '<div class="artifact-meta">' + escapeHtml(artifact.title) + '</div>' +
        '</div>' +
      '</div>';
    const card = li.firstElementChild;
    const copyBtn = card.querySelector('.btn-copy');
    if (copyBtn) {
      copyBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var url = window.location.origin + window.location.pathname + '?id=' + artifact.id;
        if (artifact.link && artifact.link !== '#') url = artifact.link;
        navigator.clipboard.writeText(url).then(function () {
          copyBtn.textContent = 'Copied';
          setTimeout(function () { copyBtn.textContent = 'Copy link'; }, 1500);
        });
      });
    }
    return li;
  }

  function getFocusableLinks() {
    if (viewMode === 'list') {
      return Array.from(document.querySelectorAll('.artifact-list-link'));
    }
    return Array.from(document.querySelectorAll('.artifact-thumb-link'));
  }

  function setFocusIndex(index) {
    const links = getFocusableLinks();
    if (links.length === 0) return;
    focusedIndex = Math.max(0, Math.min(index, links.length - 1));
    links[focusedIndex].focus();
  }

  function updateFocusableIndices() {
    const links = getFocusableLinks();
    links.forEach(function (link, i) {
      link.setAttribute('data-index', i);
    });
  }

  function render() {
    const list = getFiltered();
    $list.innerHTML = '';
    $grid.innerHTML = '';
    list.forEach(function (artifact) {
      $list.appendChild(renderListItem(artifact));
      $grid.appendChild(renderCard(artifact));
    });
    $meta.textContent = list.length + ' artifact' + (list.length !== 1 ? 's' : '');
    if ($overviewCount) $overviewCount.textContent = list.length;
    $empty.hidden = list.length > 0;
    updateFocusableIndices();
    focusedIndex = 0;
    if (list.length > 0) setFocusIndex(0);
  }

  function setView(mode) {
    viewMode = mode;
    var listBtn = document.getElementById('view-list');
    var gridBtn = document.getElementById('view-grid');
    listBtn.setAttribute('aria-pressed', mode === 'list');
    gridBtn.setAttribute('aria-pressed', mode === 'grid');
    listBtn.classList.toggle('chip--active', mode === 'list');
    gridBtn.classList.toggle('chip--active', mode === 'grid');
    $list.classList.toggle('artifact-list--hidden', mode !== 'list');
    $grid.classList.toggle('artifact-grid--hidden', mode !== 'grid');
    if ($overview) $overview.classList.toggle('overview-header--hidden', mode !== 'grid');
    updateFocusableIndices();
    setFocusIndex(Math.min(focusedIndex, getFocusableLinks().length - 1));
  }

  document.addEventListener('keydown', function (e) {
    const links = getFocusableLinks();
    if (links.length === 0) return;
    if (document.activeElement.closest('.search-input')) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setFocusIndex(focusedIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setFocusIndex(focusedIndex - 1);
    }
  });

  $search.addEventListener('input', function () {
    currentQuery = $search.value;
    $clear.hidden = !currentQuery.length;
    render();
  });

  $search.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      $search.value = '';
      currentQuery = '';
      $clear.hidden = true;
      $search.blur();
      render();
    }
  });

  $clear.addEventListener('click', function () {
    $search.value = '';
    currentQuery = '';
    $clear.hidden = true;
    $search.focus();
    render();
  });

  document.getElementById('filter-type').addEventListener('click', function (e) {
    const chip = e.target.closest('.chip--filter');
    if (!chip || chip.id) return;
    const type = chip.getAttribute('data-type');
    if (!type) return;
    currentType = type;
    document.querySelectorAll('#filter-type .chip--filter').forEach(function (c) {
      c.classList.toggle('chip--active', c.getAttribute('data-type') === type);
    });
    render();
  });

  document.getElementById('view-list').addEventListener('click', function () { setView('list'); });
  document.getElementById('view-grid').addEventListener('click', function () { setView('grid'); });

  document.addEventListener('focusin', function (e) {
    const link = e.target.closest('.artifact-list-link, .artifact-thumb-link, .artifact-title');
    if (link && link.hasAttribute('data-index')) {
      focusedIndex = parseInt(link.getAttribute('data-index'), 10);
    }
  });

  render();
  setView('grid');
})();
