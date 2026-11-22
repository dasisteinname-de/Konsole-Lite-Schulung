# Konsole Lite · Lernwerkstatt

Öffentliche Schulungswebsite für Servicetechniker: bebilderte Bedienfolgen und
kleine interaktive Browser-Lernmodelle. Das Softwareprojekt bleibt separat und
privat. Dieses Repository enthält keine produktiven Editor-, PLC- oder
Maschinensteuerungsquellen.

## Schnellzugriff

| Ziel | Öffnen |
| --- | --- |
| Lernen und ausprobieren | [Lernwerkstatt](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/) |
| Aktuelle Bedienwege | [Zugriff](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/access-1500), [Transfer](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/transfer-1500), [CFG](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/cfg-1500), [AppPool](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/pool-1500), [AppPool](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/pool-1500) |
| Nachschlagen | [Grundelemente](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/elements), [Trend / XY](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/trend-1500), [Begriffe](https://dasisteinname-de.github.io/Konsole-Lite-Schulung/#/reference) |

## Aktueller Stand in main

Die gepflegte Schulung liegt in **main**. Neue Softwarestände werden hier
eingearbeitet, ohne dafür dauerhaft eigene Versionsbranches anzulegen.
Die Kapitel nennen den jeweils behandelten Softwarestand; ältere Kursbilder
bleiben ausdrücklich als solche gekennzeichnet.

Die Website bietet Lernfolgen und öffentliche Nachschlageseiten. Eine
integrierte Hilfe im INFO-Portal der Konsole und im QML Editor bleibt ein eigener
Integrationsschritt; diese Veröffentlichung behauptet diese Anbindung nicht.

## Lernweg

- **Basic · zwei Tage:** zuerst Konsolenbedienung mit MAIN, Modulen, Seiten,
  Meldungen, INFO, Zoom und F1–F8. Danach Projektaufbau und Oberflächengestaltung
  im QML Editor, mit BMK-LED-Bildfolge und Übungen für 17 Grundelemente.
  Bei allen 17 Elementen steht die echte lokale Live-Ansicht vor dem zugehörigen
  Editorbild; die 3D-Szene setzt eine funktionierende Qt3D-Grafikumgebung voraus.
- **Fortgeschrittene · zwei Tage:** sechs bebilderte Lektionen zu Grundtypen,
  Units, Schrittketten, CALL SK, AUTO/HAND, LOCAL-Diagnose und Stationsgrenzen.
  Zum Abschluss Unit-Button projektieren, Sequence und Sequence Viewer zeigen:
  jeweils zuerst die echte Live-Offline-Ansicht, dann der Entwurf.
  23 zusätzliche Aufnahmen, Übungen und ein Abschluss-Prüfblatt.
- **Lernmodelle:** Konsolennavigation mit aufklappbaren Menüs und Meldungen,
  Karte/Zielpunkt/Variablenvergleich sowie ein bewusst
  vereinfachter Unit-Aufruf mit HAND, NC Start, Rückmeldung und Timeout.

Die Unterlagen sind eine **Arbeitsfassung mit aktuellem Arbeitsweg für Software 1.50.0**, keine
Maschinenfreigabe. Die vorhandenen Grundkursbilder stammen aus der LOCAL-Übungskopie 1.44; die neuen Kapitel kennzeichnen den aktuellen Bedienweg. Browsermodelle sind keine vollständige Nachbildung der
Editoren. Geplante Funktionen werden nicht als fertig dargestellt.

## Ergänzungen 1.50.0

Das zusätzliche Kapitel **Trend-/XY-Diagramm** erklärt Kanäle, Zonen, Aufnahme,
Ansicht und den optionalen Minutenring anhand einer LOCAL-Übung.

Konsolenverteilung Start / Manual / Run, benannte Zugriffsprofile 0–5 mit KOP, ein lokales Zugriffslabor, geprüfter Projekttransfer, Veröffentlichung und Import im AppPool (Game Portal als separates Beispiel) sowie vollständiger CFG-VM-Katalog und Parameterlisten für Rezepturen. Die Website enthält nur Schulungsinhalte, keinen importierten Produktcode.

## GitHub Pages einmalig aktivieren

Im Repository **Settings → Pages → Build and deployment** wählen:

1. **Source: Deploy from a branch**
2. **Branch: main**, Ordner **/ (root)**
3. **Save**

Die vorgesehene Adresse lautet nach erfolgreicher Bereitstellung:
<https://dasisteinname-de.github.io/Konsole-Lite-Schulung/>.
Ein gespeichertes Repository allein bedeutet noch nicht, dass Pages aktiv ist.
Der Status steht unter Settings → Pages beziehungsweise Actions.

## Aufbau und Pflege

- `index.html`: Seitengerüst und Kursnavigation.
- `styles.css`: zurückhaltende, responsive Darstellung.
- `app.js`: Navigation, Bildvergrößerung und lokale Lernmodelle.
- `console-lab.js` und `console-lab.css`: abgegrenztes Browsermodell der
  Konsolenbedienung; kein importierter Konsolen- oder PLC-Code.
- `content/*.de.md`: ausgewählte Schulungsinhalte als lesbarer Text.
- `content.js`: daraus erzeugte HTML-Kapitel für die Website.
- `tools/build-content.cjs`: Kapitel aus den öffentlichen Markdown-Dateien neu
  erzeugen; kein Zugriff auf das private Softwareprojekt erforderlich.
- `assets/images/`: echte Editor-Aufnahmen aus einer getrennten Übungskopie.
- `.nojekyll`: statische Auslieferung ohne Jekyll.

Alle Website-Dateien werden direkt ausgeliefert; kein Paketmanager, Backend,
API-Schlüssel oder Laufzeit-Build erforderlich. Pfade sind relativ und passen
zum GitHub-Pages-Unterverzeichnis. Nur zur Pflege der Kapitel wird Node benötigt:
einmal `npm install`, nach Änderungen an `content/*.de.md` dann
`npm run build:content` ausführen und die aktualisierte `content.js` mit speichern.
Der Browser benötigt diese Entwicklungsabhängigkeit nicht. Den Bedienweg gegen
den angegebenen Softwarestand prüfen. `private: true` in `package.json`
verhindert nur eine versehentliche Veröffentlichung als npm-Paket; die Website
und dieses GitHub-Repository bleiben öffentlich.

Der [Schulungsabgleich 1.50.0](docs/Pruefung-Schulung-1500.de.md) nennt bestätigte
Nachweise und die noch offenen Prüfungen vor Veröffentlichung.

## Daten und Sicherheit

Die Website verbindet sich nicht mit einer PLC. Übungswerte bleiben im Browser.
Die optionale Markierung „gelesen“ wird nur lokal gespeichert; kein Konto,
kein Tracking-Skript und keine Übermittlung des Lernfortschritts. GitHub Pages
stellt die Dateien bereit; dessen Hosting-Datenschutzbedingungen gelten separat.

Die Screenshots zeigen sowohl Layout-/Bearbeitungszustände als auch die echte
Live-Offline-Ansicht mit lokalen Kurswerten. Sie stammen aus einer isolierten
Übungskopie, nicht von einer verbundenen Maschine. Beispielvariablen erklären die Zuordnung und sind kein
Anschlussprofil. Für reale Anlagen sind deren Vorgaben und Freigaben maßgeblich.
