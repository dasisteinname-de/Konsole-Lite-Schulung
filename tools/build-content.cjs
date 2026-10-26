// Rebuild the public chapters from this repository's own Markdown files.
// This tool needs no private software repository and copies no machine sources.
const fs = require('node:fs');
const path = require('node:path');
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
    let html = marked.parse(md, { gfm: true });
    html = html.replace(/<h([234])>(.*?)<\/h\1>/g, (all, level, text) => {
      const plain = text.replace(/<[^>]*>/g, '');
      const anchor = slug(plain);
      if (level === '2') headings.push({ text: plain, anchor });
      return `<h${level} id="${anchor}">${text}</h${level}>`;
    }).replace(/<img src="images\/([^"]+)" alt="([^"]*)">/g, (_, name, alt) =>
      `<figure><img src="assets/images/${name}" alt="${alt}" loading="lazy" tabindex="0"><figcaption>${alt} · Anklicken zum Vergrößern</figcaption></figure>`);
    data[id] = { title, html, headings, search: md.replace(/!\[[^\]]*\]\([^)]*\)/g, '') };
  }
  fs.writeFileSync(path.join(root, 'content.js'), `/* Compiled from the selected public course Markdown. */\nwindow.COURSE = ${JSON.stringify(data)};\n`);
  console.log(`Generated ${Object.keys(data).length} chapters.`);
}
build().catch(error => { console.error(error.message); process.exitCode = 1; });
