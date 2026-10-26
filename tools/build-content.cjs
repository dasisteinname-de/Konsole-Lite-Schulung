// Rebuild the public chapters from this repository's own Markdown files.
// This tool needs no private software repository and copies no machine sources.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const chapters = [
  ['overview', 'Kurs & Vorbereitung', 'README.de.md'],
  ['basic', 'Einstieg & Tagesplan', 'Basic.de.md'],
  ['orientation', 'Konsole Lite kennenlernen', 'Navigation.de.md'],
  ['project', 'Module Seiten und F1–F8', 'Projektaufbau.de.md'],
  ['bmk', 'BMK LED Schritt für Schritt', 'BMK-LED.de.md'],
  ['elements', 'Die Grundelemente', 'Elemente.de.md'],
  ['advanced', 'Units & Schrittketten', 'Fortgeschrittene.de.md'],
  ['quickguide', 'CALL SK Kurzbedienung', 'KURZANLEITUNG.de.md']
];
const slug = s => s.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
async function build() {
  const { marked } = await import('marked');
  const data = {};
  for (const [id, title, file] of chapters) {
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
      const digest=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,'assets/images',name))).digest('hex').slice(0,12);
      return `<figure><img src="assets/images/${name}?v=${digest}" alt="${alt}" loading="lazy" tabindex="0"><figcaption>${alt} · Anklicken zum Vergrößern</figcaption></figure>`;
    });
    data[id] = { title, html, headings, search: md.replace(/!\[[^\]]*\]\([^)]*\)/g, '') };
  }
  fs.writeFileSync(path.join(root, 'content.js'), `/* Compiled from the selected public course Markdown. */\nwindow.COURSE = ${JSON.stringify(data)};\n`);
  // Changed assets get changed URLs, so an open browser cannot silently keep
  // the old router while displaying a new navigation menu after deployment.
  const indexPath = path.join(root, 'index.html');
  let index = fs.readFileSync(indexPath, 'utf8');
  for (const name of ['styles.css', 'console-lab.css', 'content.js', 'console-lab.js', 'app.js']) {
    const digest = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, name))).digest('hex').slice(0, 12);
    const pattern = new RegExp(`((?:src|href)=")${name.replace(/\./g, '\\.')}\\??[^"\\s]*(")`, 'g');
    index = index.replace(pattern, `$1${name}?v=${digest}$2`);
  }
  fs.writeFileSync(indexPath, index);
  console.log(`Generated ${Object.keys(data).length} chapters.`);
}
build().catch(error => { console.error(error.message); process.exitCode = 1; });
