'use strict';
// Bewusst kleine, gepflegte Strukturauswahl. Keine Datei-Inhalte, kein Zugriff
// auf ein Dateisystem oder eine Steuerung. Namen entsprechen dem Beispielprojekt.
window.createConceptLab = function ({ main, escape }) {
  const host = main.querySelector('#concept-lab');
  if (!host) return () => {};
  const modules = [
    { directory: 'Hintergrundmagazin', name: 'Magazin' },
    { directory: 'Clamping', name: 'Spannen' },
    { directory: 'Schulungszentrum', name: 'Schulung' }
  ];
  let moduleIndex = 0;
  let pageNumber = 1;
  const files = (module, python) => [1, 2, 3].map(number => {
    const name = python ? `page${number}.py` : `Page${number}.qml`;
    return `<li data-concept-path="${python ? 'CTRL' : 'MODULES'}/${module.directory}/${name}"><span class="concept-file-kind">${python ? 'PY' : 'QML'}</span><span>${name}</span></li>`;
  }).join('');
  const moduleFolders = python => modules.map(module => `<details data-concept-module="${module.directory}"><summary>${module.directory}/</summary><ul>${files(module, python)}</ul></details>`).join('');
  host.innerHTML = `
    <section class="concept-workspace" aria-label="Interaktives Schema der Konsole">
      <div class="concept-level"><b>1 · WORKSPACE</b><span>Arbeitsbereich der Maschinenoberfläche</span></div>
      <div class="concept-console">
        <div class="concept-console-title">2 · CONSOLELITE <span>derselbe Rahmen für alle Module</span></div>
        <div class="concept-navigation">
          <div><label for="concept-module">Modulnavigation</label><div class="concept-nav-controls"><button data-concept-step="module:-1" aria-label="Vorheriges Modul">‹</button><select id="concept-module">${modules.map((m, i) => `<option value="${i}">${escape(m.name)}</option>`).join('')}</select><button data-concept-step="module:1" aria-label="Nächstes Modul">›</button></div></div>
          <span class="concept-status">Meldungen · Status · Zoom</span>
          <div><label for="concept-page">Seiten im aktiven Modul</label><div class="concept-nav-controls"><button data-concept-step="page:-1" aria-label="Vorherige Seite">‹</button><select id="concept-page">${[1, 2, 3].map(n => `<option value="${n}">Seite ${n}</option>`).join('')}</select><button data-concept-step="page:1" aria-label="Nächste Seite">›</button></div></div>
        </div>
        <div class="concept-content">
          <div class="concept-deck"><div class="concept-sheet"><header><b id="concept-active-module"></b><span>3 · aktives Modul</span></header><div class="concept-page"><div class="concept-page-heading"><b id="concept-active-page"></b><span>4 · aktive Seite</span></div><div class="concept-elements"><div><small>TEXT / ANZEIGE</small><strong id="concept-example-value">Wert</strong><span>Information erklären</span></div><div><small>LED / BUTTON</small><strong><i class="concept-led"></i> Zustand</strong><span>Anzeigen oder bedienen</span></div><div><small>TREND / SLIDER</small><svg viewBox="0 0 180 42" aria-label="Schematische Verlaufslinie"><path d="M2 34L30 30L55 12L80 20L110 7L135 17L178 10" fill="none" stroke="currentColor" stroke-width="3"/></svg><span>Wert und Verlauf verstehen</span></div></div><p>Die Seite wird mit frei platzierten Elementen gestaltet.</p></div></div><div class="concept-back-label">Weitere Module liegen im Hintergrund.</div></div>
          <div class="concept-function-keys" aria-label="Feste Positionen der Funktionstasten">${[1,2,3,4,5,6,7,8].map(n=>`<span>F${n}</span>`).join('')}</div>
        </div>
      </div>
    </section>
    <div class="concept-pair" aria-live="polite"><div><span>Maske / Darstellung</span><code id="concept-qml-path"></code></div><b>↔</b><div><span>Seitenlogik / Aktionen</span><code id="concept-python-path"></code></div></div>
    <section class="concept-file-tree" aria-label="Interaktiver Projektbaum">
      <header class="concept-tree-toolbar"><div><h2>So liegt das Projekt auf der Maschine</h2><p>Ordner aufklappen. Dateinamen bleiben reine Beschriftungen.</p></div><button id="concept-tree-reset">Startansicht</button><button id="concept-tree-fullscreen">Vollbild</button></header>
      <div class="concept-tree-columns"><div class="concept-tree-project"><details open data-concept-default><summary><b>KonsoleLite/</b><span>Projekt</span></summary><div class="concept-tree-children">
        <details><summary>CONFIG/ <small>Struktur und Einstellungen</small></summary><ul><li>modules.json</li><li>project-profile.json</li><li>access.json</li></ul></details>
        <details open data-concept-default><summary>CTRL/ <small>Python-Logik je Modul</small></summary><div class="concept-tree-children">${moduleFolders(true)}</div></details>
        <details><summary>DATA/ <small>Projektdaten</small></summary><p>Projektbezogene Laufzeitdaten. Hier werden keine Inhalte geladen.</p></details>
        <details><summary>DOCS/ <small>Dokumentation</small></summary><ul><li>KonsoleLite-Handbuch.de.pdf</li></ul></details>
        <details open data-concept-default><summary>MODULES/ <small>QML-Seiten je Modul</small></summary><div class="concept-tree-children">${moduleFolders(false)}</div></details>
        <details><summary>SEQUENCE/ <small>Schrittketten</small></summary><ul><li>Hintergrundmagazin/</li><li>LOCAL_EXAMPLES/</li></ul></details>
        <details><summary>UNITS/ <small>Bausteine und Typen</small></summary><ul><li>TYPES/</li><li>README.de.md</li></ul></details>
      </div></details></div>
      <aside class="concept-tree-explanation"><span class="concept-kicker">EINE SEITE · ZWEI AUFGABEN</span><h3>QML beschreibt die Maske.</h3><p>Elemente, Texte, Positionen, Größen und Bindungen gehören zur Darstellung.</p><h3>Python beschreibt die Aktion.</h3><p>Die eigene Seitenlogik und Funktionen stehen im passenden Controller. Reine Anzeigeseiten benötigen nicht immer eine eigene Python-Aktion.</p><div class="concept-active-pair">Die zwei hervorgehobenen Dateinamen gehören zur oben gewählten Seite.</div><p>Gleicher Modulordner und gleiche Seitennummer verbinden die Zuordnung. <code>Page1.qml</code> und <code>page1.py</code> unterscheiden sich bewusst in der Schreibweise.</p></aside></div>
      <div class="concept-system"><details><summary><b>KonsoleLiteSystem/</b><span>separater Systemblock</span></summary><ul><li>QML/ · gemeinsame Elemente und Konsolenrahmen</li><li>CTRL/ · gemeinsame Laufzeitdienste</li><li>EDITOR/ · gemeinsame Prüfungen und Speicherung</li></ul><p>Liegt neben dem Projektordner. In Python als <code>System</code> eingebunden; eigene Masken gehören in das Projekt.</p></details></div>
      <p class="concept-tree-note">Auszug der echten Verzeichnisstruktur. Diese Lernansicht zeigt Namen und Zuordnungen, keine Dateiinhalte und keine Live-Verbindung. Im Vollbild beendet Esc die Präsentationsansicht.</p>
    </section>`;
  const moduleChoice = host.querySelector('#concept-module');
  const pageChoice = host.querySelector('#concept-page');
  const tree = host.querySelector('.concept-file-tree');
  const fullscreen = host.querySelector('#concept-tree-fullscreen');
  function draw() {
    const module = modules[moduleIndex];
    moduleChoice.value = String(moduleIndex);
    pageChoice.value = String(pageNumber);
    host.querySelector('#concept-active-module').textContent = module.name;
    host.querySelector('#concept-active-page').textContent = `Seite ${pageNumber}`;
    host.querySelector('#concept-example-value').textContent = `${module.name} · ${pageNumber}`;
    const qml = `MODULES/${module.directory}/Page${pageNumber}.qml`;
    const python = `CTRL/${module.directory}/page${pageNumber}.py`;
    host.querySelector('#concept-qml-path').textContent = qml;
    host.querySelector('#concept-python-path').textContent = python;
    tree.querySelectorAll('[data-concept-path]').forEach(row => row.classList.toggle('is-active', [qml, python].includes(row.dataset.conceptPath)));
    tree.querySelectorAll('[data-concept-module]').forEach(folder => { if (folder.dataset.conceptModule === module.directory) folder.open = true; });
  }
  function resetTree() {
    tree.querySelectorAll('details').forEach(folder => { folder.open = folder.hasAttribute('data-concept-default'); });
    draw();
  }
  moduleChoice.addEventListener('change', () => { moduleIndex = Number(moduleChoice.value); pageNumber = 1; draw(); });
  pageChoice.addEventListener('change', () => { pageNumber = Number(pageChoice.value); draw(); });
  host.querySelectorAll('[data-concept-step]').forEach(button => button.addEventListener('click', () => {
    const [kind, step] = button.dataset.conceptStep.split(':');
    if (kind === 'module') { moduleIndex = (moduleIndex + Number(step) + modules.length) % modules.length; pageNumber = 1; }
    else pageNumber = ((pageNumber - 1 + Number(step) + 3) % 3) + 1;
    draw();
  }));
  host.querySelector('#concept-tree-reset').addEventListener('click', resetTree);
  fullscreen.hidden = !tree.requestFullscreen;
  fullscreen.addEventListener('click', async () => {
    try { if (document.fullscreenElement === tree) await document.exitFullscreen(); else await tree.requestFullscreen(); }
    catch { host.querySelector('.concept-tree-note').textContent = 'Vollbild ist im Browser nicht verfügbar. Der Baum bleibt hier bedienbar; alternativ F11 verwenden.'; }
  });
  const fullscreenChanged = () => { fullscreen.textContent = document.fullscreenElement === tree ? 'Vollbild beenden' : 'Vollbild'; };
  document.addEventListener('fullscreenchange', fullscreenChanged);
  resetTree();
  return () => { document.removeEventListener('fullscreenchange', fullscreenChanged); if (document.fullscreenElement === tree) document.exitFullscreen().catch(() => {}); };
};
