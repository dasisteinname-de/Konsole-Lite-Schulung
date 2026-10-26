'use strict';
(() => {
  const main = document.querySelector('#main');
  const sidebar = document.querySelector('#sidebar');
  const menu = document.querySelector('#menu-toggle');
  const dialog = document.querySelector('#image-dialog');
  const chapters = window.COURSE || {};
  const titles = { start: 'Dein Lernweg', 'navigation-lab': 'Navigation ausprobieren', 'bmk-lab': 'BMK selbst ausprobieren', 'sequence-lab': 'Eine Schrittkette verstehen', reference: 'Begriffe & Grenzen' };
  const ordered = ['basic', 'orientation', 'project', 'bmk', 'elements', 'advanced', 'quickguide'];
  let cleanup = () => {};
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const readProgress = () => { try { return JSON.parse(localStorage.getItem('konsole-training-read') || '{}'); } catch { return {}; } };
  const home = () => `
    <div class="eyebrow">Schulung für Servicetechniker</div>
    <section class="hero"><div><h1>Oberflächen gestalten.<br><em>Abläufe verstehen.</em></h1><p>Vom ersten Anzeigeelement zur nachvollziehbaren Anwendung. Lerne die Werkzeuge mit echten Editor-Aufnahmen, klaren Klickfolgen und kleinen Übungen kennen.</p><div class="button-row"><a class="button primary" href="#/basic">Mit Basic beginnen <span aria-hidden="true">→</span></a><a class="button" href="#/navigation-lab">Navigation ausprobieren</a><a class="button" href="#/bmk-lab">BMK-Modell ausprobieren</a></div></div><figure class="hero-visual"><img src="assets/images/00-hintergrundmagazin-seite1.png" alt="Hintergrundmagazin: Maschinenbild, BMK-Karten und Sensorzuordnungen im QML Editor" tabindex="0"><figcaption>Unser gemeinsames Maskenbeispiel: Hintergrundmagazin, Seite 1.</figcaption></figure></section>
    <div class="intro-strip"><div><b>Vom Einfachen zum Komplexen</b><span>Einfügen → zuordnen → prüfen</span></div><div><b>Mit dem echten Werkzeug</b><span>Bilder aus dem QML Editor</span></div><div><b>In eigener Projektkopie</b><span>OFFLINE lernen, Originale erhalten</span></div></div>
    <section aria-labelledby="courses"><div class="section-title"><h2 id="courses">Wähle deinen Lernweg</h2><span>Zwei Teile. Klar getrennte Aufgaben.</span></div><div class="course-grid"><article class="course-card basic"><div class="course-heading"><span class="course-label">BASIC</span><span class="day">2 Tage</span></div><h3>Eine verständliche Maske bauen</h3><p>Du gestaltest die Oberfläche im QML Editor. Ohne Programmierung und ohne Ablaufsteuerung.</p><ul><li>Bilder, Texte und BMK LED einfügen</li><li>Karte und Sensorpunkt positionieren</li><li>Variablen, Vergleichswerte und Farben zuordnen</li><li>Speichern und wieder öffnen</li></ul><a class="button" href="#/basic">Basic öffnen →</a></article><article class="course-card advanced"><div class="course-heading"><span class="course-label">FORTGESCHRITTENE</span><span class="day">2 Tage</span></div><h3>Geräte und Abläufe verbinden</h3><p>Du beschreibst Units, ordnest Schnittstellen zu und prüfst Aufrufe im lokalen Simulator.</p><ul><li>Grundtyp, Unit und Mapping unterscheiden</li><li>Aktion und Überwachung auswählen</li><li>AUTO und HAND nachvollziehen</li><li>Fehlende Rückmeldungen gezielt erkennen</li></ul><a class="button" href="#/advanced">Fortgeschrittene öffnen →</a></article></div></section>
    <a class="feature-link" href="#/bmk"><span class="feature-icon" aria-hidden="true">◎</span><span><strong>Ein vollständiger Bedienweg: BMK LED</strong><small>Neun Schritte mit Editor-Bildern, Eingabebeispielen und Ergebniskontrolle.</small></span><span aria-hidden="true">→</span></a>
    <aside class="notice"><strong>Arbeitsfassung, kein fertiger Gesamtkurs.</strong> Die BMK-Bildfolge ist ausgearbeitet. Die übrigen Grundelemente haben Bildkarten; Fortgeschrittene ist noch ein Kursentwurf. Browsermodelle erklären Zusammenhänge, sie ersetzen weder den Editor noch eine Maschinenprüfung.</aside>`;
  const reference = () => `<article class="prose"><div class="eyebrow">Nachschlagen</div><h1>Begriffe & Grenzen</h1><h2>Welches Werkzeug für welche Aufgabe?</h2><table><thead><tr><th>Werkzeug</th><th>Aufgabe</th><th>Ergebnis</th></tr></thead><tbody><tr><td>QML Editor</td><td>Bedienoberfläche gestalten</td><td>Gespeicherte Maske mit expliziten Anzeigezuordnungen</td></tr><tr><td>Units Editor</td><td>Grundtyp definieren und konkrete Geräte zuordnen</td><td>Schnittstelle, Aktionen und Geräte-Mapping</td></tr><tr><td>Sequence Editor</td><td>Schritte, Bedingungen und Unit-Aufrufe gestalten</td><td>Nachvollziehbarer, lokal prüfbarer Ablauf</td></tr></tbody></table><h2>Variable, Wert und Darstellung</h2><p>Eine Beschriftung benennt das Element. Die ausgewählte Variable liefert seinen Wert. Ein Vergleich legt fest, welcher Zustand als aktiv gilt. Eine Farbe macht diesen Zustand erkennbar, ist aber selbst keine Rückmeldung.</p><p>Beim BMK-Beispiel lesen beide Karten dieselbe Integer-Variable. Die Grundstellungskarte vergleicht mit <code>1</code>, die Arbeitsstellungskarte mit <code>2</code>. Die Position des Zielkreises auf dem Bild legt keine PLC-Adresse fest.</p><h2>Grundtyp, Unit und CALL SK</h2><p>Der <strong>Grundtyp</strong> beschreibt wiederverwendbare Rollen und Aktionen. Die <strong>Unit</strong> ordnet diese Rollen einem konkreten Gerät zu und hält dessen Neutralwerte. <strong>CALL SK</strong> wählt die Unit, eine erlaubte Aktion und eine Überwachungszeit; zusätzliche deklarierte Parameter werden bei Bedarf abgefragt.</p><h2>Was ist hier interaktiv?</h2><p>Die Browsermodelle verwenden ausschließlich selbst gewählte Übungswerte im Browser. Sie lesen und schreiben keine Maschinenwerte, öffnen keine PLC-Verbindung und führen keinen produktiven Editor- oder Steuerungscode aus. Sie bilden bewusst nur einzelne Zusammenhänge ab.</p><h2>Softwarestand und offene Arbeiten</h2><p>Die Bedienfolgen beziehen sich auf <strong>Software 1.43</strong>. Geplante Verbesserungen für die nächste Version werden nicht als bereits vorhanden gelehrt.</p><ul><li>Quittieren nach einem Simulatorfehler setzt derzeit den Ablauf zurück. Ein neuer Start beginnt am Initialschritt; Wiederholen direkt am Fehlerschritt ist vorgemerkt.</li><li>NC Start wird in der lokalen 1.43-Simulation noch mit einer ComboBox bedient. Der Taster im Browser ist nur eine Lernhilfe.</li><li>Unit-Buttons können projektiert werden. Ihre durchgängige native Ausführung in der Maschinenkonsole ist noch nicht vollständig eingebunden.</li><li>Weitere detaillierte Bildfolgen pro Grundelement und die bebilderte Fortgeschrittenen-Schulung sind noch auszuarbeiten.</li></ul><h2>Was wird gespeichert?</h2><p>Nur die Markierung „gelesen“ wird lokal in diesem Browser gespeichert, wenn dessen Einstellungen es erlauben. Es gibt hier keine Anmeldung, kein Lernkonto und keine Übertragung des Lernfortschritts. GitHub Pages liefert die Dateien aus; für diesen Hostingdienst gelten dessen eigene Datenschutzbedingungen.</p><h2>Schulung und Software bleiben getrennt</h2><p>Dieses öffentliche Repository enthält ausgewählte Schulungsunterlagen, Bilder und die Lernwebsite. Das Softwareprojekt bleibt separat. Die drei vorgesehenen Sandkasten-Seiten im fünften Konsolenmodul sind nicht die Website und beschränken deren Umfang nicht.</p></article>`;
  function renderChapter(id) {
    const item = chapters[id];
    const read = !!readProgress()[id];
    const next = ordered[ordered.indexOf(id) + 1];
    const group = ['advanced', 'quickguide'].includes(id) ? 'Fortgeschrittene' : id === 'overview' ? 'Nachschlagen' : 'Basic';
    main.innerHTML = `<div class="chapter-toolbar"><span>${group} / ${escape(item.title)}</span><button class="complete-button" aria-pressed="${read}" id="mark-read">${read ? '✓ Als gelesen markiert' : 'Kapitel als gelesen markieren'}</button></div><article class="prose">${item.html}</article><div class="chapter-next"><a href="#/start">← Zum Lernweg</a>${next ? `<a class="button" href="#/${next}">Weiter: ${escape(chapters[next].title)} →</a>` : '<a href="#/sequence-lab">Zum Ablauf-Lernmodell →</a>'}</div>`;
    const h1 = main.querySelector('h1');
    if (item.headings.length > 2 && h1) {
      const toc = document.createElement('details'); toc.className = 'contents';
      toc.innerHTML = `<summary>In diesem Kapitel</summary><ul>${item.headings.map(h => `<li><a href="#/${id}/${h.anchor}">${escape(h.text)}</a></li>`).join('')}</ul>`;
      h1.after(toc);
    }
    main.querySelector('#mark-read').addEventListener('click', e => {
      const progress = readProgress(); progress[id] = !progress[id];
      try { localStorage.setItem('konsole-training-read', JSON.stringify(progress)); } catch { /* Reading remains available without storage. */ }
      e.currentTarget.setAttribute('aria-pressed', String(progress[id]));
      e.currentTarget.textContent = progress[id] ? '✓ Als gelesen markiert' : 'Kapitel als gelesen markieren';
    });
  }
  function bmkLab() {
    main.innerHTML = `<div class="eyebrow">Basic · Interaktives Lernmodell</div><h1 class="lab-title">Karte, Zielpunkt und Variable</h1><p class="lab-lead">Verschiebe Karte und Zielkreis unabhängig voneinander. Ändere danach den Übungswert und beobachte den Vergleich. Die Zeichnung ist ein vereinfachtes Lernmodell, keine echte Editor-Vorschau.</p><div class="lab-grid"><div><div class="lab-stage"><div class="lab-stage-head"><span>Beladeplatz · schematische Darstellung</span><span>NUR BROWSER</span></div><svg id="bmk-svg" viewBox="0 0 720 390" role="group" aria-label="Verschiebbare BMK-Karte und Sensorzielpunkt"><defs><pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#323d40" stroke-width=".7"/></pattern></defs><rect width="720" height="390" fill="url(#grid)"/><path d="M65 299H405M100 299V165H367V299M130 165V118H336V165" fill="none" stroke="#86968c" stroke-width="3"/><rect x="137" y="185" width="200" height="66" rx="5" fill="#45544b" stroke="#94a68e"/><path d="M167 197V239M306 197V239" stroke="#c1cfb5" stroke-width="4"/><text x="134" y="339" fill="#bdcdb7" font-size="13">Beladeplatz 1</text><text x="117" y="103" fill="#99ac9b" font-size="11">Sensorpunkt in der Zeichnung</text><line id="bmk-line" x1="450" y1="128" x2="170" y2="220" stroke="#d3dfbd" stroke-width="1.5"/><g id="bmk-target" tabindex="0" role="button" aria-label="Sensorzielpunkt verschieben: ziehen oder Pfeiltasten" style="cursor:move"><circle r="20" fill="transparent"/><circle id="bmk-dot" r="9" fill="#8d9b90" stroke="#eff6de" stroke-width="2"/><path d="M-15 0H-10M10 0H15M0-15V-10M0 10V15" stroke="#c7d8b8"/></g><g id="bmk-card" tabindex="0" role="button" aria-label="BMK-Karte verschieben: ziehen oder Pfeiltasten" style="cursor:move"><rect width="230" height="75" rx="5" fill="#313d3e" stroke="#b2c899"/><circle id="bmk-indicator" cx="19" cy="23" r="6" fill="#8d9b90"/><text x="35" y="28" fill="#edf5e6" font-size="15">F9-120BG1</text><text id="bmk-card-description" x="15" y="53" fill="#c0ceba" font-size="12">Beladeplatz 1 · Grundstellung</text></g></svg><div class="lab-state" id="bmk-state" role="status"></div></div><div class="comparison" id="bmk-comparison"><b>Expliziter Vergleich im Lernmodell</b><span></span></div></div><form class="lab-form" id="bmk-form"><label>Datenquelle<select id="bmk-source"><option value="position">Positionsrückmeldung · Übungsvariable</option><option value="none">Keine Quelle zugeordnet</option></select><small>Eine Beschriftung allein ist noch keine Datenquelle.</small></label><label>Aktiver Vergleichswert<select id="bmk-expected"><option value="1">1 · Grundstellung</option><option value="2">2 · Arbeitsstellung</option></select></label><label>Aktueller Übungswert<select id="bmk-actual"><option value="1">1 · Grundstellung</option><option value="2">2 · Arbeitsstellung</option><option value="unknown">UNKNOWN · keine Rückmeldung</option></select></label><label>Aktive Farbe<select id="bmk-color"><option value="#d7b35c">Gelb · Hinweis</option><option value="#76be8b">Grün · bestätigt</option><option value="#6aacc6">Blau · Information</option></select><small>Farbe stellt das Ergebnis dar, sie erzeugt keine Rückmeldung.</small></label><button type="button" class="button form-full" id="bmk-reset">Anordnung zurücksetzen</button></form></div><section class="task-box"><h2>Probiere es in dieser Reihenfolge</h2><ol><li>Karte ziehen: Der Zielpunkt bleibt an seiner Stelle. Alternativ Karte fokussieren und Pfeiltasten verwenden.</li><li>Zielkreis ziehen: Die Karte bleibt stehen, nur die Verbindung folgt.</li><li>Übungswert auf <strong>2</strong> setzen, Vergleichswert auf <strong>1</strong> lassen. Die Anzeige ist nicht aktiv.</li><li>Vergleichswert ebenfalls auf <strong>2</strong> setzen. Jetzt stimmt der gelesene Wert mit der Erwartung überein.</li><li>Datenquelle entfernen: Es wird <strong>UNKNOWN</strong> gezeigt, nicht fälschlich „inaktiv“.</li></ol><a href="#/bmk">Den Bedienweg im echten Editor ansehen →</a></section>`;
    const svg = main.querySelector('#bmk-svg');
    const card = main.querySelector('#bmk-card'), target = main.querySelector('#bmk-target');
    const pos = { card: { x: 450, y: 90 }, target: { x: 167, y: 220 } };
    const q = id => main.querySelector('#' + id);
    function draw() {
      card.setAttribute('transform', `translate(${pos.card.x} ${pos.card.y})`);
      target.setAttribute('transform', `translate(${pos.target.x} ${pos.target.y})`);
      const line = q('bmk-line');
      line.setAttribute('x1', pos.card.x); line.setAttribute('y1', pos.card.y + 37);
      line.setAttribute('x2', pos.target.x); line.setAttribute('y2', pos.target.y);
      const expected = q('bmk-expected').value, actual = q('bmk-actual').value;
      const known = q('bmk-source').value !== 'none' && actual !== 'unknown';
      const match = known && actual === expected;
      const color = match ? q('bmk-color').value : '#8d9b90';
      q('bmk-dot').setAttribute('fill', color); q('bmk-indicator').setAttribute('fill', color);
      q('bmk-card-description').textContent = `Beladeplatz 1 · ${expected === '1' ? 'Grundstellung' : 'Arbeitsstellung'}`;
      q('bmk-state').textContent = !known ? 'UNKNOWN · Datenquelle oder aktueller Wert fehlt.' : match ? 'Aktiv · Rückmeldung und Vergleichswert stimmen überein.' : 'Nicht aktiv · Rückmeldung entspricht noch nicht dem Vergleichswert.';
      q('bmk-comparison').dataset.state = match ? 'matched' : 'waiting';
      q('bmk-comparison span').textContent = `position (${known ? actual : 'UNKNOWN'}) = activeValue (${expected}) → ${known ? String(match).toUpperCase() : 'UNKNOWN'}`;
    }
    const handlers = [];
    for (const [name, node] of [['card', card], ['target', target]]) {
      let drag = null;
      const clamp = () => { pos[name].x = Math.max(22, Math.min(name === 'card' ? 468 : 698, pos[name].x)); pos[name].y = Math.max(22, Math.min(name === 'card' ? 293 : 368, pos[name].y)); };
      const point = e => { const p = new DOMPoint(e.clientX, e.clientY); return p.matrixTransform(svg.getScreenCTM().inverse()); };
      const down = e => { if (e.button !== 0) return; const p = point(e); drag = { x: p.x - pos[name].x, y: p.y - pos[name].y }; node.setPointerCapture(e.pointerId); e.preventDefault(); node.focus(); };
      const move = e => { if (!drag) return; const p = point(e); pos[name] = { x: p.x - drag.x, y: p.y - drag.y }; clamp(); draw(); };
      const up = () => { drag = null; };
      const key = e => { const d = { ArrowLeft: [-5, 0], ArrowRight: [5, 0], ArrowUp: [0, -5], ArrowDown: [0, 5] }[e.key]; if (!d) return; e.preventDefault(); pos[name].x += d[0]; pos[name].y += d[1]; clamp(); draw(); };
      for (const [event, fn] of [['pointerdown', down], ['pointermove', move], ['pointerup', up], ['pointercancel', up], ['lostpointercapture', up], ['keydown', key]]) { node.addEventListener(event, fn); handlers.push([node, event, fn]); }
    }
    q('bmk-form').addEventListener('submit', e => e.preventDefault());
    q('bmk-form').addEventListener('change', draw);
    q('bmk-reset').addEventListener('click', () => { pos.card = { x: 450, y: 90 }; pos.target = { x: 167, y: 220 }; draw(); });
    draw();
    cleanup = () => handlers.forEach(([node, event, fn]) => node.removeEventListener(event, fn));
  }
  function sequenceLab() {
    main.innerHTML = `<div class="eyebrow">Fortgeschrittene · Interaktives Lernmodell</div><h1 class="lab-title">Warum wartet der Schritt?</h1><p class="lab-lead">Ein vereinfachter Unit-Aufruf fordert Arbeitsstellung an. Du lieferst die Rückmeldung selbst und siehst, welche Bedingung fehlt. Das ist eine didaktische Darstellung, keine vollständige Nachbildung des Sequence Editors.</p><div class="notice blue">Der Taster und die sichtbare Vergleichsformel sind Lernhilfen auf dieser Website. In der Software 1.43 wird NC Start noch über eine ComboBox bedient.</div><div class="lab-grid"><div><div class="lab-stage"><div class="lab-stage-head"><span>Unit · Arbeitsstellung</span><span>KEINE PLC</span></div><svg viewBox="0 0 650 380" role="img" aria-label="Drei Schritte: bereit, Ziel anfordern, Ziel bestätigt"><path d="M130 73V307" fill="none" stroke="#87998a" stroke-width="2"/><path d="M130 151H190V231H130" fill="none" stroke="#738575" stroke-width="1.5"/><g id="seq-0"><rect class="sequence-node" x="108" y="52" width="44" height="36" rx="2"/><text x="122" y="76" fill="#edf3e6" font-size="15">S1</text><text x="180" y="76" fill="#d5e1ce" font-size="16">Bereit</text></g><g id="seq-1"><rect class="sequence-node" x="108" y="173" width="44" height="36" rx="2"/><text x="122" y="197" fill="#edf3e6" font-size="15">S2</text><text x="218" y="179" fill="#d5e1ce" font-size="16">Arbeitsstellung anfordern</text><text id="seq-request" x="218" y="205" fill="#b9ceac" font-size="13">command = Neutral (0)</text><text id="seq-timer" x="218" y="230" fill="#b9ceac" font-size="12">Überwachung: 0,0 / 3,0 s</text></g><g id="seq-2"><rect class="sequence-node" x="108" y="289" width="44" height="36" rx="2"/><text x="122" y="313" fill="#edf3e6" font-size="15">S3</text><text x="180" y="313" fill="#d5e1ce" font-size="16">Ziel bestätigt</text></g></svg><div class="lab-state" id="seq-status" role="status"></div><ol class="lab-log" id="seq-log" aria-label="Letzte Modellereignisse"></ol></div><div class="comparison" id="seq-comparison"><b>Zielprüfung im Lernmodell · gespeicherter Aufruf-Zielwert</b><span></span></div><div class="button-row"><button class="button primary" id="seq-start">Modell starten</button><button class="button" id="seq-ack">Quittieren / zurücksetzen</button><button class="button" id="seq-tick">Zeittakt + 0,5 s</button></div><p style="font-size:11px;color:var(--muted)">Die Modellzeit läuft nur beim Drücken auf „Zeittakt“. So kannst du jeden Zustand in Ruhe untersuchen.</p></div><form class="lab-form" id="seq-form"><label>Betriebsart<select id="seq-mode"><option value="auto">AUTO · Lauf freigegeben</option><option value="hand">HAND · mit NC Start</option></select></label><label><input type="checkbox" id="seq-permit" checked> Unit-Betriebsfreigabe<small>Im Modell eine Voraussetzung, keine echte Maschinenfreigabe.</small></label><label>Positionsrückmeldung<select id="seq-actual"><option value="1">1 · Grundstellung</option><option value="2">2 · Arbeitsstellung</option><option value="unknown">UNKNOWN · keine Rückmeldung</option></select></label><div class="form-full"><button type="button" class="nc-button" id="seq-nc" aria-pressed="false">NC Start · halten</button><p style="font-size:11px;color:var(--muted)">Gedrückt halten mit Maus, Touch oder Leertaste. Loslassen pausiert einen noch nicht bestätigten HAND-Aufruf.</p></div><table class="lab-data-table form-full"><tr><th>Signal</th><th>Wert</th></tr><tr><td>Aufruf-Zielwert</td><td>2 · Arbeitsstellung</td></tr><tr><td>position</td><td id="seq-position-cell">1</td></tr><tr><td>command · Anforderung</td><td id="seq-command-cell">0 · Neutral</td></tr></table></form></div><section class="task-box"><h2>Drei kleine Versuche</h2><ol><li><strong>Erfolgreich:</strong> Modell starten, einen Zeittakt geben, Position auf 2 setzen. Das Ziel wird bestätigt, die Anforderung geht wieder auf Neutral.</li><li><strong>Timeout:</strong> Zurücksetzen, Position 1 wählen, starten und sechs Zeittakte geben. Ein späterer Wert 2 löscht den gespeicherten Fehler nicht. Quittieren setzt hier wie in Software 1.43 auf den Anfang zurück.</li><li><strong>HAND:</strong> Zurücksetzen, HAND wählen, Position 1 setzen und starten. NC Start halten und einen Zeittakt geben; loslassen und die neutrale Anforderung beobachten. Erneut halten und Position 2 wählen.</li></ol><p>Im echten Ablauf kommen weitere Prüfungen hinzu, etwa Auftragsbesitz, gemeinsame Kanäle, vollständige Betriebsartensignale und weitere Schrittbedingungen. Dieses Modell ist dafür kein Nachweis.</p><a href="#/quickguide">Zur tatsächlichen Bedienfolge im lokalen Simulator →</a></section>`;
    const q = id => main.querySelector('#' + id);
    let state = 'idle', elapsed = 0, held = false, command = 0, events = [];
    const add = message => { events.unshift(message); events = events.slice(0, 3); };
    function evaluate() {
      const permit = q('seq-permit').checked;
      const hand = q('seq-mode').value === 'hand';
      if (state === 'running' && permit && (!hand || held) && q('seq-actual').value === '2') { state = 'done'; add('Zielrückmeldung 2 bestätigt · Anforderung neutralisiert.'); }
      command = state === 'running' && permit && (!hand || held) ? 2 : 0;
      const status = state === 'idle' ? 'Bereit · Modell starten.' : state === 'fault' ? 'Timeout gespeichert · Quittieren setzt dieses Modell auf den Anfang zurück.' : state === 'done' ? 'Ziel bestätigt · Aufruf abgeschlossen.' : !permit ? 'Wartet auf Unit-Betriebsfreigabe.' : hand && !held ? 'HAND · Wartet auf NC Start, Anforderung neutral.' : 'Aufruf läuft · Wartet auf Positionsrückmeldung 2.';
      q('seq-status').textContent = status;
      q('seq-status').style.color = state === 'fault' ? '#a12f35' : '#3d5333';
      const actual = q('seq-actual').value;
      q('seq-position-cell').textContent = actual === 'unknown' ? 'UNKNOWN' : actual;
      q('seq-command-cell').textContent = command ? '2 · Arbeitsstellung' : '0 · Neutral';
      q('seq-request').textContent = command ? 'command = 2 · Arbeitsstellung' : 'command = Neutral (0)';
      q('seq-timer').textContent = `Überwachung: ${(elapsed / 1000).toFixed(1).replace('.', ',')} / 3,0 s`;
      const comp = q('seq-comparison'); comp.dataset.state = state === 'fault' ? 'error' : actual === '2' ? 'matched' : 'waiting';
      comp.querySelector('span').textContent = `position (${actual === 'unknown' ? 'UNKNOWN' : actual}) = Zielwert (2) → ${actual === 'unknown' ? 'UNKNOWN' : String(actual === '2').toUpperCase()}`;
      for (let i = 0; i < 3; i++) {
        const node = q(`seq-${i}`).querySelector('rect'); node.setAttribute('class', 'sequence-node');
        if (i === 0 && state === 'idle' || i === 1 && state === 'running') node.classList.add('is-active');
        if (i === 1 && state === 'fault') node.classList.add('is-error');
        if (state === 'done') node.classList.add('is-done');
      }
      q('seq-start').disabled = state !== 'idle';
      q('seq-tick').disabled = state !== 'running';
      q('seq-log').innerHTML = events.map(e => `<li>${escape(e)}</li>`).join('');
      q('seq-nc').setAttribute('aria-pressed', String(held));
      q('seq-nc').disabled = state !== 'running' || !hand;
    }
    q('seq-start').addEventListener('click', () => { state = 'running'; elapsed = 0; held = false; add('Modell gestartet · Ziel Arbeitsstellung (2).'); evaluate(); });
    q('seq-ack').addEventListener('click', () => { state = 'idle'; elapsed = 0; held = false; add('Zurückgesetzt · nächster Start beginnt bei S1.'); evaluate(); });
    const tick = () => {
      if (state !== 'running') return;
      evaluate();
      if (command) elapsed += 500;
      if (elapsed >= 3000 && state === 'running') { state = 'fault'; held = false; add('Überwachungszeit überschritten · Fehler bleibt gespeichert.'); }
      evaluate();
    };
    q('seq-tick').addEventListener('click', tick);
    q('seq-tick').textContent = 'Zeittakt + 0,5 s · Taste T';
    q('seq-tick').setAttribute('aria-keyshortcuts', 't');
    const shortcut = e => {
      if (e.key.toLowerCase() !== 't' || e.repeat || e.ctrlKey || e.metaKey || e.altKey || ['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;
      e.preventDefault(); tick();
    };
    window.addEventListener('keydown', shortcut);
    const hint = document.createElement('p');
    hint.textContent = 'HAND am PC: NC Start mit der Maus halten und mit Taste T die Modellzeit weiterschalten. Zum Ändern der Rückmeldung kannst du erst loslassen, Position 2 wählen und anschließend NC Start erneut betätigen.';
    main.querySelector('.task-box').append(hint);
    q('seq-form').addEventListener('submit', e => e.preventDefault());
    q('seq-form').addEventListener('change', e => {
      if (state === 'running' && e.target.id === 'seq-mode') { state = 'fault'; held = false; add('Betriebsart im aktiven Auftrag gewechselt · neu aufsetzen.'); }
      evaluate();
    });
    const nc = q('seq-nc');
    const release = () => { if (!held) return; held = false; evaluate(); };
    nc.addEventListener('pointerdown', e => { if (e.button !== 0 || nc.disabled) return; e.preventDefault(); nc.focus(); nc.setPointerCapture(e.pointerId); held = true; evaluate(); });
    nc.addEventListener('pointerup', release); nc.addEventListener('pointercancel', release); nc.addEventListener('lostpointercapture', release);
    nc.addEventListener('keydown', e => { if (![' ', 'Enter'].includes(e.key) || nc.disabled) return; e.preventDefault(); if (!e.repeat) { held = true; evaluate(); } });
    nc.addEventListener('keyup', e => { if ([' ', 'Enter'].includes(e.key)) { e.preventDefault(); release(); } });
    nc.addEventListener('blur', release); window.addEventListener('blur', release);
    const visibility = () => { if (document.hidden) release(); }; document.addEventListener('visibilitychange', visibility);
    cleanup = () => { window.removeEventListener('blur', release); window.removeEventListener('keydown', shortcut); document.removeEventListener('visibilitychange', visibility); held = false; };
    evaluate();
  }
  function setupImages() {
    main.querySelectorAll('img').forEach(img => {
      const open = () => { document.querySelector('#image-large').src = img.src; document.querySelector('#image-large').alt = img.alt; document.querySelector('#image-caption').textContent = img.alt; dialog.showModal(); };
      img.addEventListener('click', open);
      img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
    });
  }
  function render() {
    cleanup(); cleanup = () => {};
    const [requested, anchor] = (location.hash.replace(/^#\/?/, '') || 'start').split('/');
    const id = chapters[requested] || titles[requested] ? requested : 'start';
    sidebar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
    if (chapters[id]) renderChapter(id);
    else if (id === 'navigation-lab') cleanup = window.createConsoleNavigationLab({ main, escape });
    else if (id === 'bmk-lab') bmkLab();
    else if (id === 'sequence-lab') sequenceLab();
    else main.innerHTML = id === 'reference' ? reference() : home();
    const title = chapters[id]?.title || titles[id];
    document.title = `${title} · Konsole Lite Lernwerkstatt`;
    document.querySelector('#breadcrumb').textContent = `Lernwerkstatt / ${title}`;
    document.querySelectorAll('nav a').forEach(a => { const active = a.dataset.page === id; a.classList.toggle('active', active); if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    setupImages();
    if (anchor) requestAnimationFrame(() => document.getElementById(decodeURIComponent(anchor))?.scrollIntoView());
    else { window.scrollTo(0, 0); main.focus({ preventScroll: true }); }
  }
  menu.addEventListener('click', () => { const open = sidebar.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  document.addEventListener('click', e => { if (!sidebar.contains(e.target) && !menu.contains(e.target)) { sidebar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { sidebar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); } });
  document.querySelector('#search').addEventListener('input', e => {
    const term = e.target.value.trim().toLocaleLowerCase('de'); let visible = 0;
    document.querySelectorAll('nav a').forEach(a => { const text = `${a.textContent} ${chapters[a.dataset.page]?.search || ''}`.toLocaleLowerCase('de'); a.hidden = !!term && !text.includes(term); if (!a.hidden) visible++; });
    document.querySelector('#search-empty').hidden = visible !== 0;
  });
  document.querySelector('#image-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  document.querySelector('#print').addEventListener('click', () => window.print());
  window.addEventListener('hashchange', render);
  render();
})();
