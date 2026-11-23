'use strict';

// Einstieg für die Präsentation: erst sehen und ausprobieren, dann nachlesen.
// Das Browsermodell verwendet nur Kursbilder und lokale Navigationszustände.
window.createWorkshopOverview = function ({ main, escape }) {
  const picture = (file, caption) => ({ file: `assets/images/${file}`, caption });
  const editors = [
    { id: 'console', title: 'Konsole · Übersicht', tag: 'Bedienen', number: '01' },
    { id: 'interface', title: 'Interface Editor', tag: 'Variablen verbinden', number: '02',
      heading: 'Die Verbindung zur Maschine',
      text: 'PLC-Symbole auswählen, Datentypen prüfen und als Interface bereitstellen. Dieselbe Variable lässt sich anschließend mit Anzeigen, Eingabefeldern und Slidern verbinden.',
      route: 'advanced-station', link: 'Interface und Stationsweg kennenlernen',
      images: [picture('overview/interface-signale.png', 'Interface Editor · typisierte Signale in der getrennten Kurskopie'), picture('overview/interface-quelle.png', 'Die zugehörige Python-Quelle bleibt im Editor sichtbar.')] },
    { id: 'qml', title: 'QML Editor', tag: 'Masken gestalten', number: '03',
      heading: 'Aus Elementen wird eine Bedienseite',
      text: 'Elemente platzieren, beschriften und mit Variablen verbinden. Entwurf und Live-Vorschau helfen beim Gestalten; 20 Elementtypen stehen für die Bedienoberfläche zur Verfügung.',
      route: 'elements', link: 'Die Elemente entdecken',
      images: [picture('00-editor-hintergrundmagazin.png', 'QML Editor · Hintergrundmagazin in der Kurskopie'), picture('07-bmk-variable-zugeordnet.png', 'Eine Variable direkt einem Element zuordnen.'), picture('trend-vakuum-anwender-1500.png', 'Das Ziel der heutigen Übung: eine Vakuumkurve sichtbar machen.')] },
    { id: 'config', title: 'KonsoleConfigurator', tag: 'Konsolen einrichten', number: '04',
      heading: 'Die passende Konsole für jede Aufgabe',
      text: 'Module und Seiten für Start, Manual und Run zusammenstellen. Die Auswahl bestimmt, welche Inhalte an welchem Konsolenplatz erscheinen.',
      route: 'access-1500', link: 'Konsolen konfigurieren',
      images: [picture('overview/config-module.png', 'KonsoleConfigurator · Module und Seiten auf Konsolen verteilen.'), picture('overview/config-ressourcen.png', 'Ressourcen und Zugriffsprofile übersichtlich zuordnen.')] },
    { id: 'access', title: 'Zugriffsprofile', tag: 'Zugriff nachvollziehbar machen', number: '05',
      heading: 'Sichtbar, lesbar, bedienbar',
      text: 'Benannte Profile legen fest, wer Inhalte sehen und bedienen darf. Die Zuordnung lässt sich an der Seite oder am einzelnen Element nachvollziehen.',
      route: 'access-1500', link: 'Zugriffsprofile verstehen',
      images: [picture('overview/access-profile.png', 'Zugriffsprofile im KonsoleConfigurator · getrennte Kurskopie.'), picture('overview/config-ressourcen.png', 'Profile werden den betreffenden Ressourcen ausdrücklich zugeordnet.')] },
    { id: 'types', title: 'Grundtypen Editor', tag: 'Bausteine beschreiben', number: '06',
      heading: 'Ein Gerät einmal verständlich beschreiben',
      text: 'Signalrollen, Werte und Aktionen zu einem wiederverwendbaren Grundtyp zusammenfassen. Ein Zylinder ist ein anschauliches erstes Beispiel.',
      route: 'advanced-units', link: 'Grundtyp und Unit kennenlernen',
      images: [picture('advanced-01-rollen.png', 'Grundtypen Editor · Rollen eines Beispielzylinders.'), picture('advanced-02-befehlswerte.png', 'Befehlswerte und Rückmeldungen benennen.'), picture('advanced-03-aktionen.png', 'Aktionen des Bausteins beschreiben.')] },
    { id: 'units', title: 'Units Editor', tag: 'Konkrete Geräte zuordnen', number: '07',
      heading: 'Vom Grundtyp zum konkreten Gerät',
      text: 'Einen veröffentlichten Typ wählen und seine Rollen mit den tatsächlichen Interface-Variablen verbinden. So wird aus dem allgemeinen Baustein eine bestimmte Unit im Projekt.',
      route: 'advanced-units', link: 'Gerätezuordnung ansehen',
      images: [picture('advanced-04-unit-zuordnung.png', 'Units Editor · konkrete Gerätezuordnung im Kursprojekt.'), picture('advanced-17-unit-button-entwurf.png', 'Die zugeordnete Unit anschließend auf der Bedienseite verwenden.')] },
    { id: 'sequence', title: 'Sequence Editor', tag: 'Abläufe sichtbar aufbauen', number: '08',
      heading: 'Schritt für Schritt zum Ablauf',
      text: 'Schritte, Bedingungen und Übergänge im Zusammenhang sehen. Ein Ablauf lässt sich aufbauen und mit der lokalen Simulation nachvollziehen.',
      route: 'advanced-chain', link: 'Eine Schrittkette aufbauen',
      images: [picture('advanced-05-hauptkette.png', 'Sequence Editor · die Hauptkette im Überblick.'), picture('advanced-06-uebergang.png', 'Die Bedingung eines Übergangs untersuchen.'), picture('advanced-10-auto-lauf.png', 'Den Ablauf in der lokalen Kurskopie beobachten.')] },
    { id: 'call', title: 'CALL Editor', tag: 'Funktionen anbinden', number: '09',
      heading: 'Funktionen mit klarer Schnittstelle',
      text: 'Funktionsaufrufe mit benannten Ein- und Ausgängen in einen Ablauf einbinden. Die Schnittstelle zeigt, welche Werte hineingehen und welches Ergebnis zurückkommt.',
      route: 'advanced-call', link: 'CALL SK kennenlernen',
      images: [picture('advanced-07-call-auswahl.png', 'Einen CALL im Sequence Editor auswählen.'), picture('advanced-08-call-interface.png', 'Ein- und Ausgänge des Aufrufs zuordnen.')] },
    { id: 'stations', title: 'Niederlassungen Editor', tag: 'Projekte und Stationen ordnen', number: '10',
      heading: 'Am richtigen Projekt arbeiten',
      text: 'Niederlassungen und ihre Projekte übersichtlich verwalten. Projektpfad und zugehörige Station bleiben erkennbar, bevor eine Verbindung oder ein Transfer beginnt.',
      route: 'advanced-station', link: 'Projekt und Stationsweg ansehen',
      images: [picture('overview/stationen-liste.png', 'Niederlassungen und Projektquellen in der lokalen Kurskopie.'), picture('advanced-16-verbindungswahl.png', 'Zum ausgewählten Projekt die passende Verbindung wählen.')] },
    { id: 'pool', title: 'AppPool', tag: 'Anwendungen weitergeben', number: '11',
      heading: 'Vorhandenes entdecken und wiederverwenden',
      text: 'Anwendungen mit Beschreibung und Bildern ansehen und in ein Projekt übernehmen. Eigene Bausteine lassen sich als nachvollziehbares Paket weitergeben.',
      route: 'pool-1500', link: 'Den AppPool kennenlernen',
      images: [picture('app-pool-liste-local-1500.png', 'AppPool · Anwendungen mit Beschreibung und Bildern.'), picture('app-pool-galerie-local-1500.png', 'Die Bildergalerie vor der Übernahme ansehen.'), picture('app-pool-eigentuemer-local-1500.png', 'Eigene Veröffentlichungen verwalten.')] }
  ];
  let selected = 'console';
  let slide = 0;
  let stopConsole = () => {};

  main.innerHTML = `
    <section class="workshop-overview" aria-label="Konsole Lite und ihre Werkzeuge">
      <header class="overview-heading"><div><span class="overview-kicker">KONSOLE LITE · LERNWERKSTATT</span><h1>Eine Idee. Viele Möglichkeiten.</h1></div><a href="#/basic" class="overview-course-link">Zur Schulung <span aria-hidden="true">↗</span></a></header>
      <div class="overview-layout">
        <section class="overview-presentation" aria-label="Ausgewähltes Werkzeug"><div id="overview-stage" class="overview-stage"></div><div id="overview-caption" class="overview-caption"></div></section>
        <nav class="overview-editors" aria-label="Konsole und Editoren"><div class="overview-list-heading">ENTDECKEN & GESTALTEN <span>11 Einblicke</span></div>${editors.map(editor => `<button type="button" data-editor="${editor.id}" aria-pressed="${editor.id === selected}"><span class="overview-editor-number">${editor.number}</span><span><strong>${escape(editor.title)}</strong><small>${escape(editor.tag)}</small></span><span class="overview-editor-arrow" aria-hidden="true">↗</span></button>`).join('')}<a class="overview-all-lessons" href="#/overview">Alle Unterlagen & Vorbereitung →</a></nav>
      </div>
    </section>`;
  const stage = main.querySelector('#overview-stage');
  const caption = main.querySelector('#overview-caption');

  function drawConsole() {
    stopConsole();
    stopConsole = window.createConsoleNavigationLab({
      main: stage,
      escape,
      compact: true,
      onModuleChange(module, isMain) {
        const isVacuum = module.id === 12 && !isMain;
        caption.innerHTML = `<div><span class="overview-caption-kicker">BEDIENUNG KENNENLERNEN</span><h2>${isVacuum ? 'Heute: eine Vakuumkurve sichtbar machen.' : 'Eine Konsole. Viele Aufgaben.'}</h2><p>${isVacuum ? 'Variable verbinden, Trend anzeigen und einen Slider ergänzen. Diese Seite ist unser Ausgangspunkt für die praktische Übung.' : 'Module und Seiten oben selbst durchblättern. Vom Hintergrundmagazin bis zum Vakuumdiagramm: Bedienbilder, Informationen und Werkzeuge teilen sich einen vertrauten Rahmen.'}</p></div><a href="#/${isVacuum ? 'trend-1500' : 'navigation-lab'}">${isVacuum ? 'Zur Trend-Übung' : 'Konsolenbedienung ausprobieren'} <span aria-hidden="true">→</span></a>`;
      }
    });
  }

  function drawEditor() {
    const editor = editors.find(item => item.id === selected);
    main.querySelectorAll('[data-editor]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.editor === selected)));
    if (selected === 'console') {
      drawConsole();
      return;
    }
    stopConsole();
    stopConsole = () => {};
    const image = editor.images[slide];
    stage.innerHTML = `<div class="overview-gallery"><div class="overview-gallery-bar"><span>${escape(editor.title)}</span><span>Echte Editor-Aufnahmen · Kurskopie</span></div><button class="overview-gallery-picture" data-enlarge aria-label="${escape(editor.title)} vergrößern"><img src="${image.file}" alt="${escape(image.caption)}"></button><div class="overview-gallery-navigation"><button data-slide="-1" aria-label="Vorheriges Bild">←</button><p>${escape(image.caption)}</p><span>${slide + 1} / ${editor.images.length}</span><button data-slide="1" aria-label="Nächstes Bild">→</button></div></div>`;
    caption.innerHTML = `<div><span class="overview-caption-kicker">${escape(editor.tag)}</span><h2>${escape(editor.heading)}</h2><p>${escape(editor.text)}</p></div><a href="#/${editor.route}">${escape(editor.link)} <span aria-hidden="true">→</span></a>`;
  }

  function click(event) {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.editor) {
      selected = button.dataset.editor;
      slide = 0;
      drawEditor();
    } else if (button.dataset.slide) {
      const editor = editors.find(item => item.id === selected);
      slide = (slide + Number(button.dataset.slide) + editor.images.length) % editor.images.length;
      drawEditor();
    } else if (button.hasAttribute('data-enlarge')) {
      const image = editors.find(item => item.id === selected).images[slide];
      document.querySelector('#image-large').src = image.file;
      document.querySelector('#image-large').alt = image.caption;
      document.querySelector('#image-caption').textContent = image.caption;
      document.querySelector('#image-dialog').showModal();
    }
  }
  main.addEventListener('click', click);
  drawEditor();
  return () => {
    main.removeEventListener('click', click);
    stopConsole();
  };
};
