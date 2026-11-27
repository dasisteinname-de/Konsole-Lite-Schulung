// Rebuild the public chapters from this repository's own Markdown files.
// This tool needs no private software repository and copies no machine sources.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const chapters = [
  ['overview', 'Kurs & Vorbereitung', 'README.de.md'],
  ['concept', 'Das Grundkonzept · Workspace bis Element', 'Grundkonzept.de.md', '1.52.4', 'Infografik'],
  ['interface-editor', 'Interface Editor Schritt für Schritt', 'Interface-Editor.de.md', '1.52.4', 'LOCAL-Kurskopie'],
  ['plc-interface', 'PLC–Python-Schnittstelle', 'PLC-Python-Schnittstelle.de.md', '26.11.2026', 'Konzeptgrafik · Entwurf'],
  ['basic', 'Einstieg & Tagesplan', 'Basic.de.md', '1.44'],
  ['orientation', 'ConsoleLite kennenlernen', 'Navigation.de.md', '1.44'],
  ['project', 'Module Seiten und F1–F8', 'Projektaufbau.de.md', '1.44'],
  ['bmk', 'BMK LED Schritt für Schritt', 'BMK-LED.de.md', '1.44'],
  ['elements', 'Die Grundelemente', 'Elemente.de.md', '1.44'],
  ['button', 'Button Schritt für Schritt', 'Button.de.md', '1.52.4'],
  ['radio-button', 'RadioButton Schritt für Schritt', 'RadioButton.de.md', '1.52.4'],
  ['recipes', 'Rezepturen Schritt für Schritt', 'Rezepturen.de.md', '1.52.4'],
  ['advanced', 'Fortgeschrittene · Tagesplan', 'Fortgeschrittene.de.md', '1.44'],
  ['advanced-units', 'Grundtyp & Unit', 'Fortgeschrittene-Units.de.md', '1.44'],
  ['advanced-chain', 'Eine Schrittkette aufbauen', 'Fortgeschrittene-Kette.de.md', '1.44'],
  ['advanced-call', 'CALL SK · AUTO & HAND', 'Fortgeschrittene-CALL.de.md', '1.44'],
  ['advanced-diagnostics', 'Diagnose & Wiederanlauf', 'Fortgeschrittene-Diagnose.de.md', '1.44'],
  ['advanced-station', 'Verbindung & Transfer prüfen', 'Fortgeschrittene-Station.de.md', '1.52.4'],
  ['advanced-visualizers', 'Unit-Taste & Ablaufanzeigen', 'Fortgeschrittene-Anzeigen.de.md', '1.44'],
  ['access-1500', '1.50.0 · Konsolen & Zugriffsrechte', 'Zugriff-1500.de.md'],
  ['transfer-1500', 'Vom Editor auf die TNC', 'Transfer-1500.de.md'],
  ['pool-1500', 'AppPool · veröffentlichen & importieren', 'Bausteinpool-1500.de.md', '1.50.0', 'LOCAL-Editoraufnahme'],
  ['cfg-1500', 'CFG · Vollkatalog & Rezepturvorlagen', 'CFG-1500.de.md'],
  ['trend-1500', 'Trend-/XY-Diagramm · Aufnahme & Ansicht', 'Trend-1500.de.md', '1.50.0', 'Anwenderaufnahme'],
  ['quickguide', 'CALL SK Kurzbedienung', 'KURZANLEITUNG.de.md'],
  ['manager-installation', 'Anhang A · Manager installieren und starten', 'Manager-Installation.de.md', '1.52.8', 'LOCAL-Dokumentation · Managerbilder 1.52.6'],
  ['manager-activation', 'Anhang B · Arbeitsplatz aktivieren', 'Manager-Aktivierung.de.md', '1.52.6', 'LOCAL-Dokumentationsaufnahme'],
  ['manager-project', 'Anhang C · Projekt wählen und beginnen', 'Manager-Projekt.de.md', '1.52.6', 'LOCAL-Dokumentationsaufnahme']
];
const slug = s => s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
// Diese Bilder stammen aus einer isolierten Qt-LOCAL-Kopie des aktuellen
// Editors. Die beiden Laufzeitbilder daneben bleiben Anwenderaufnahmen.
const localEditorImages = new Set(['kanaele', 'puffer', 'zonen', 'sollwert'].map(
  name => `trend-vakuum-parameter-detail-${name}-local-1500.png`));
// Neue Anwenderaufnahmen behalten ihren eigenen Stand, auch wenn sie eine
// ältere Grundübung illustrieren. Historische Schrittbilder bleiben datiert.
const suppliedEditorImages = new Set([
  'overview/qml-layout-anwender-1510.png',
  'overview/config-anwender-1510.png',
  'overview/app-pool-anwender-1510.png'
]);
const suppliedManagerImages = new Set([
  'manager/project-folder-choice-1525.png',
  'manager/interface-project-loaded-1525.png'
]);
async function build() {
  const { marked } = await import('marked');
  const data = {};
  for (const [id, title, file, imageVersion, imageOrigin = 'LOCAL-Kurskopie'] of chapters) {
    const md = fs.readFileSync(path.join(root, 'content', file), 'utf8');
    const headings = [];
    const usedAnchors = new Map();
    let html = marked.parse(md, { gfm: true });
    html = html.replace(/<h([234])>(.*?)<\/h\1>/g, (all, level, text) => {
      const plain = text.replace(/<[^>]*>/g, '');
      const base = slug(plain);
      const occurrence = (usedAnchors.get(base) || 0) + 1;
      usedAnchors.set(base, occurrence);
      const anchor = base + (occurrence === 1 ? '' : '-' + occurrence);
      if (level === '2') headings.push({ text: plain, anchor });
      return `<h${level} id="${anchor}">${text}</h${level}>`;
    }).replace(/<img src="images\/([^"]+)" alt="([^"]*)">/g, (_, name, alt) => {
      let version = suppliedManagerImages.has(name) ? '1.52.5' : name === 'radio-range-1524.png' ? '1.52.4' : ['structure-tree-1523.png','progress-1523.png','slider-1523.png'].includes(name) ? '1.52.3' : name === 'structure-tree-1521.png' ? '1.52.1' : suppliedEditorImages.has(name) ? '1.51.0' : imageVersion;
      if (name === 'app-pool-publish-form-local-1527.png') version = '1.52.7';
      if (!version) throw new Error(`Bildstand für ${file} fehlt`);
      const digest=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'assets/images',name))).digest('hex').slice(0,12);
      const origin = suppliedManagerImages.has(name) || suppliedEditorImages.has(name) ? 'Anwenderaufnahme' : name === 'app-pool-publish-form-local-1527.png' || localEditorImages.has(name) ? 'LOCAL-Editoraufnahme' : imageOrigin;
      return `<figure><img src="assets/images/${name}?v=${digest}" alt="${alt} · ${origin} ${version}" loading="lazy" tabindex="0"><figcaption>${alt} · ${origin} ${version} · Anklicken zum Vergrößern</figcaption></figure>`;
    });
    data[id] = { title, html, headings, search: md.replace(/!\[[^\]]*\]\([^)]*\)/g, '') };
  }
  fs.writeFileSync(path.join(root, 'content.js'), `/* Compiled from the selected public course Markdown. */\nwindow.COURSE = ${JSON.stringify(data)};\n`);
  // Changed assets get changed URLs, so an open browser cannot silently keep
  // the old router while displaying a new navigation menu after deployment.
  const indexPath = path.join(root, 'index.html');
  let index = fs.readFileSync(indexPath, 'utf8');
  for (const name of ['styles.css', 'console-lab.css', 'overview.css', 'overview.js', 'content.js', 'console-lab.js', 'concept-lab.js', 'app.js']) {
    const digest = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, name))).digest('hex').slice(0, 12);
    const pattern = new RegExp(`((?:src|href)=")${name.replace(/\./g, '\\.')}\\??[^"\\s]*(")`, 'g');
    index = index.replace(pattern, `$1${name}?v=${digest}$2`);
  }
  fs.writeFileSync(indexPath, index);
  console.log(`Generated ${Object.keys(data).length} chapters.`);
}
build().catch(error => { console.error(error.message); process.exitCode = 1; });
