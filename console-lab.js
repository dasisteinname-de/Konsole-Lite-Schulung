'use strict';
// Browser-only teaching model. No controller code, machine API or file access.
window.createConsoleNavigationLab = function ({ main, escape }) {
  const modules = [
    { id: 1, name: 'Hintergrundmagazin', pages: ['Übersicht', 'Elektrische Bewegungen', 'Pneumatische Bewegungen', 'Positionen & Teach', 'Achspositionen', 'Safety Monitor', 'Parameter & Datensicherung', 'Ablaufmonitor', 'Meldungen & Antriebe', 'Reserve'] },
    { id: 6, name: 'Bereich 06', pages: ['Page 1', 'Page 2', 'Page 3'] },
    { id: 9, name: 'INFO', pages: ['Dokumente', 'Protokolle', 'Log-Dateien', 'Tabellen'] }
  ];
  const tasks = ['MAIN öffnen', 'Modulliste öffnen', 'Seitenliste öffnen', '150 % wählen', '200 % wählen', '100 % wiederherstellen', 'Meldungen öffnen und schließen', 'INFO besuchen', 'F-Taste untersuchen'];
  const completed = new Set();
  const remembered = new Map();
  let moduleIndex = 0, pageIndex = 0, isMain = true, zoom = 1, menu = '', messageVisited = false;
  let opener = null;
  let disposed = false;
  main.innerHTML = `
    <div class="eyebrow">Basic · Konsolenbedienung ausprobieren</div>
    <h1 class="lab-title">Erst orientieren, dann gestalten</h1>
    <p class="lab-lead">Öffne Menüs, wechsle Module und Seiten und probiere die Lupe. Die Anordnung folgt dem Konsolenrahmen. Das vereinfachte Modell zeigt drei Beispielmodule und keine Maschinenfunktionen.</p>
    <div class="console-training" aria-label="Interaktives Konsolen-Lernmodell">
      <div class="console-training-label">KONSOLE LITE · NAVIGATIONS-LERNMODELL <span>OFFLINE · KEINE PLC</span></div>
      <div class="console-toolbar">
        <button id="console-main" class="console-control">MAIN</button>
        <div class="console-picker console-module-picker">
          <button id="console-module-prev" class="console-control console-arrow" aria-label="Vorheriges Beispielmodul">‹</button>
          <button id="console-module" class="console-control console-picker-name" aria-expanded="false" aria-controls="console-module-list"></button>
          <button id="console-module-next" class="console-control console-arrow" aria-label="Nächstes Beispielmodul">›</button>
          <div class="console-dropdown" id="console-module-list" hidden></div>
        </div>
        <button id="console-message-open" class="console-message-preview" aria-expanded="false" aria-controls="console-message-panel"><span>INFO · Lernbereich bereit</span><small>Keine Meldung einer realen Maschine</small><small>Anklicken: Meldungen öffnen</small></button>
        <div class="console-zoom-picker">
          <button id="console-zoom" class="console-control" aria-expanded="false" aria-controls="console-zoom-list" aria-label="Vergrößerung auswählen">⌕<small id="console-zoom-label">100 %</small></button>
          <div id="console-zoom-list" class="console-dropdown" hidden><button data-zoom="1">100 %</button><button data-zoom="1.5">150 %</button><button data-zoom="2">200 %</button></div>
        </div>
        <div class="console-picker console-page-picker">
          <button id="console-page-prev" class="console-control console-arrow" aria-label="Vorherige Seite">‹</button>
          <button id="console-page" class="console-control console-picker-name" aria-expanded="false" aria-controls="console-page-list"></button>
          <button id="console-page-next" class="console-control console-arrow" aria-label="Nächste Seite">›</button>
          <div class="console-dropdown" id="console-page-list" hidden></div>
        </div>
      </div>
      <div class="console-working-area">
        <div class="console-viewport" id="console-viewport" tabindex="0" aria-label="Vergrößerbare Arbeitsfläche"><div id="console-space"><div id="console-sheet" class="console-sheet"></div></div></div>
        <aside class="console-function-bar" id="console-functions" aria-label="Seitenabhängige feste Funktionstasten"></aside>
        <section id="console-message-panel" class="console-message-panel" role="region" aria-labelledby="console-message-title" hidden>
          <div class="console-dialog-heading"><h2 id="console-message-title">Meldungen · Lernbeispiele</h2><button id="console-message-close">Schließen ×</button></div>
          <div class="console-message-list" tabindex="0" aria-label="Meldungsliste mit Beispielzeiten">
            <p class="console-message-row info"><time>00:00:03</time> [INFO] Die Lernansicht ist bereit. Es besteht keine Maschinenverbindung.</p>
            <p class="console-message-row warning"><time>00:00:02</time> [WARNUNG] Beispiel: Eine Rückmeldung fehlt. Diese Zeile meldet keinen Anlagenfehler.</p>
            <p class="console-message-row info"><time>00:00:01</time> [INFO] Schließen beendet nur die Liste, nicht die Ursache einer Meldung.</p>
          </div>
        </section>
      </div>
      <div class="console-location" id="console-location"></div>
    </div>
    <p class="console-explanation" id="console-explanation" role="status">Beginne auf MAIN. Wähle eine Kachel oder öffne die Modulliste oben.</p>
    <section class="task-box"><h2>Deine Bedienprobe <span id="console-progress">0 / 9</span></h2><p>Die Häkchen erscheinen durch deine Bedienung. Es gibt keine Verbindung zu einer Konsole oder PLC.</p><ul class="console-tasks" id="console-tasks"></ul><div class="button-row"><button id="console-reset" class="button">Bedienprobe zurücksetzen</button><a class="button" href="#/orientation">Bedienung mit echten Konsolenbildern →</a></div></section>
    <div class="notice blue">Das Modell bildet ausgewählte Navigationswege nach, nicht die vollständige Konsole. F1–F8 erzeugen hier nur Lernhinweise. Dokumenttexte und Meldungen sind Beispiele; Meldungsfenster schließen bedeutet nicht Fehler quittieren.</div>
    `;
  const q = id => main.querySelector('#' + id);
  const describe = text => { if (!disposed) q('console-explanation').textContent = text; };
  function task(name) { completed.add(name); drawTasks(); }
  function drawTasks() {
    if (disposed) return;
    q('console-tasks').innerHTML = tasks.map(name => `<li class="${completed.has(name) ? 'done' : ''}"><span aria-hidden="true">${completed.has(name) ? '✓' : '○'}</span> ${escape(name)}</li>`).join('');
    q('console-progress').textContent = `${completed.size} / ${tasks.length}`;
  }
  function drawMenu() {
    for (const name of ['module', 'page', 'zoom']) {
      q(`console-${name}-list`).hidden = menu !== name;
      q(`console-${name}`).setAttribute('aria-expanded', String(menu === name));
    }
  }
  function toggleMenu(name) {
    menu = menu === name ? '' : name; drawMenu();
    if (menu === 'module') task('Modulliste öffnen');
    if (menu === 'page') task('Seitenliste öffnen');
    describe(menu ? `${{ module: 'Modulliste', page: 'Seitenliste des aktuellen Moduls', zoom: 'Zoomauswahl' }[name]} geöffnet. Wähle einen Eintrag.` : 'Auswahl geschlossen. Modul und Seite sind unverändert.');
  }
  function selectModule(index) {
    remembered.set(modules[moduleIndex].id, pageIndex);
    moduleIndex = (index + modules.length) % modules.length;
    pageIndex = remembered.get(modules[moduleIndex].id) || 0;
    isMain = false; menu = '';
    if (modules[moduleIndex].id === 9) task('INFO besuchen');
    draw(); describe(`Modul ${modules[moduleIndex].name} geöffnet. Eine zuvor gewählte Seite dieses Moduls wird wiederhergestellt.`);
  }
  function selectPage(index) {
    const pages = modules[moduleIndex].pages;
    pageIndex = (index + pages.length) % pages.length;
    remembered.set(modules[moduleIndex].id, pageIndex);
    isMain = false; menu = ''; draw();
    describe(`Seite „${pages[pageIndex]}“ gewählt. Das Modul bleibt ${modules[moduleIndex].name}.`);
  }
  function drawScale() {
    if (disposed) return;
    const viewport = q('console-viewport');
    const baseWidth = Math.max(240, viewport.clientWidth);
    q('console-space').style.width = `${baseWidth * zoom}px`;
    q('console-sheet').style.width = `${baseWidth}px`;
    q('console-sheet').style.height = 'auto';
    q('console-sheet').style.minHeight = '360px';
    q('console-space').style.height = `${Math.max(360, q('console-sheet').scrollHeight) * zoom}px`;
    q('console-sheet').style.transform = `scale(${zoom})`;
  }
  function draw() {
    const module = modules[moduleIndex];
    q('console-main').classList.toggle('selected', isMain);
    q('console-module').textContent = `${String(module.id).padStart(2, '0')} ${module.name}`;
    q('console-page').textContent = `${pageIndex + 1} / ${module.pages.length} ${module.pages[pageIndex]}`;
    q('console-zoom-label').textContent = `${zoom * 100} %`;
    q('console-module-list').innerHTML = modules.map((m, i) => `<button data-module="${i}">${String(m.id).padStart(2, '0')} ${escape(m.name)}</button>`).join('');
    q('console-page-list').innerHTML = module.pages.map((name, i) => `<button data-page="${i}">${i + 1} / ${module.pages.length} ${escape(name)}</button>`).join('');
    q('console-functions').hidden = isMain;
    main.querySelector('.console-working-area').classList.toggle('has-functions', !isMain);
    q('console-functions').innerHTML = Array.from({ length: 8 }, (_, i) => `<button data-fkey="${i + 1}"><b>F${i + 1}</b><small>Lernhinweis</small></button>`).join('');
    const sheet = q('console-sheet');
    if (isMain) sheet.innerHTML = `<h2>KonsoleLite</h2><p>Bereich auswählen · drei Beispielmodule</p><div class="console-module-tiles">${modules.map((m, i) => `<button data-module="${i}"><span>${String(m.id).padStart(2, '0')}</span><strong>${escape(m.name)}</strong></button>`).join('')}</div>`;
    else if (module.id === 9) sheet.innerHTML = `<h2>INFO · ${escape(module.pages[pageIndex])}</h2><p>Vereinfachte Informationsansicht im Lernmodell.</p><div class="console-document"><h3>Hinweise zur Kurskopie</h3><p>Die Kursunterlagen erklären Bedienung und Projektierung. Originalseiten bleiben erhalten. Eine Information zu öffnen startet keine Maschinenaktion.</p><p>In der echten Konsole können hier bereitgestellte Dokumente, Protokolle oder Tabellen erscheinen. Dieses Modell liest keine Dateien von deinem PC.</p></div>`;
    else if (module.id === 1 && pageIndex === 0) sheet.innerHTML = `<h2>Hintergrundmagazin · Übersicht</h2><p>Referenzbild aus der Layoutansicht · keine aktuellen Sensorwerte</p><img class="console-reference-image" src="assets/images/00-hintergrundmagazin-seite1.png" alt="Hintergrundmagazin-Maskenbeispiel aus dem Editor">`;
    else sheet.innerHTML = `<h2>${escape(module.name)}</h2><div class="console-sample-page"><span>SEITE ${pageIndex + 1}</span><h3>${escape(module.pages[pageIndex])}</h3><p>Du hast die Seite innerhalb des Moduls gewechselt. Ihr Inhalt ist hier ein Platzhalter; Maschinen- und Servicefunktionen werden nicht ausgeführt.</p></div>`;
    q('console-location').textContent = isMain ? 'MAIN · gemeinsame Übersicht' : `${module.name} → ${module.pages[pageIndex]} · F1–F8 gehören zu dieser Seite`;
    drawMenu(); drawTasks(); requestAnimationFrame(drawScale);
  }
  q('console-main').addEventListener('click', () => { isMain = true; menu = ''; task('MAIN öffnen'); draw(); describe('MAIN zeigt die gemeinsame Übersicht. Es ist nicht automatisch die erste Seite eines Moduls.'); });
  q('console-module').addEventListener('click', () => toggleMenu('module'));
  q('console-page').addEventListener('click', () => toggleMenu('page'));
  q('console-zoom').addEventListener('click', () => toggleMenu('zoom'));
  q('console-module-prev').addEventListener('click', () => selectModule(moduleIndex - 1));
  q('console-module-next').addEventListener('click', () => selectModule(moduleIndex + 1));
  q('console-page-prev').addEventListener('click', () => selectPage(pageIndex - 1));
  q('console-page-next').addEventListener('click', () => selectPage(pageIndex + 1));
  const region = main.querySelector('.console-training');
  const click = e => {
    const button = e.target.closest('button'); if (!button) return;
    if (button.dataset.module !== undefined) selectModule(Number(button.dataset.module));
    if (button.dataset.page !== undefined) selectPage(Number(button.dataset.page));
    if (button.dataset.zoom) {
      zoom = Number(button.dataset.zoom); menu = '';
      if (zoom === 1.5) task('150 % wählen'); if (zoom === 2) task('200 % wählen');
      if (zoom === 1 && completed.has('200 % wählen')) task('100 % wiederherstellen');
      draw(); describe(`${zoom * 100} Prozent: Nur die Arbeitsfläche wird vergrößert. Bei Bedarf darin scrollen; gespeicherte Elementkoordinaten bleiben unverändert.`);
    }
    if (button.dataset.fkey) { task('F-Taste untersuchen'); describe(`F${button.dataset.fkey} gehört zur Seite „${modules[moduleIndex].pages[pageIndex]}“. Dieses Modell zeigt nur diesen Hinweis und führt keine projektierte Funktion aus.`); }
  };
  region.addEventListener('click', click);
  const messagePanel = q('console-message-panel');
  function closeMessages() {
    messagePanel.hidden = true;
    q('console-message-open').setAttribute('aria-expanded', 'false');
    if (messageVisited) task('Meldungen öffnen und schließen');
    describe('Meldungsliste geschlossen. Eine Meldungsursache wurde dadurch nicht behoben oder quittiert.');
    opener?.focus();
  }
  q('console-message-open').addEventListener('click', () => {
    if (!messagePanel.hidden) { closeMessages(); return; }
    menu = ''; drawMenu(); opener = document.activeElement; messageVisited = true;
    messagePanel.hidden = false;
    q('console-message-open').setAttribute('aria-expanded', 'true');
    q('console-message-close').focus();
    describe('Meldungsliste innerhalb der Konsole geöffnet. Konsolenleiste und Kursnavigation bleiben bedienbar.');
  });
  q('console-message-close').addEventListener('click', closeMessages);
  q('console-reset').addEventListener('click', () => { completed.clear(); remembered.clear(); moduleIndex = 0; pageIndex = 0; isMain = true; zoom = 1; menu = ''; messageVisited = false; messagePanel.hidden = true; q('console-message-open').setAttribute('aria-expanded', 'false'); draw(); describe('Bedienprobe zurückgesetzt. Beginne auf MAIN.'); });
  const outside = e => { if (menu && !e.target.closest('.console-picker, .console-zoom-picker')) { menu = ''; drawMenu(); } };
  const key = e => { if (e.key !== 'Escape') return; if (menu) { const previous = menu; menu = ''; drawMenu(); q(`console-${previous}`).focus(); } else if (!messagePanel.hidden) closeMessages(); };
  document.addEventListener('click', outside); document.addEventListener('keydown', key);
  const resize = new ResizeObserver(drawScale); resize.observe(q('console-viewport'));
  draw();
  return () => { disposed = true; resize.disconnect(); document.removeEventListener('click', outside); document.removeEventListener('keydown', key); };
};
