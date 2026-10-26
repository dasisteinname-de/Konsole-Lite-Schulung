# Konsole Lite · Lernwerkstatt

Öffentliche Schulungswebsite für Servicetechniker: bebilderte Bedienfolgen und
kleine interaktive Browser-Lernmodelle. Das Softwareprojekt bleibt separat und
privat. Dieses Repository enthält keine produktiven Editor-, PLC- oder
Maschinensteuerungsquellen.

## Lernweg

- **Basic · zwei Tage:** zuerst Konsolenbedienung mit MAIN, Modulen, Seiten,
  Meldungen, INFO, Zoom und F1–F8. Danach Projektaufbau und Oberflächengestaltung
  im QML Editor, mit BMK-LED-Bildfolge und Übungen für 17 Grundelemente.
  Bei 16 Elementen steht die echte lokale Live-Ansicht vor dem zugehörigen
  Editorbild; die 3D-Szene setzt eine funktionierende Qt3D-Grafikumgebung voraus.
- **Fortgeschrittene · zwei Tage:** Grundtypen, Units, Schnittstellenzuordnung,
  Schrittketten, CALL SK und LOCAL-Diagnose. Dieser Teil ist noch ein Kursentwurf.
- **Lernmodelle:** Konsolennavigation mit aufklappbaren Menüs und Meldungen,
  Karte/Zielpunkt/Variablenvergleich sowie ein bewusst
  vereinfachter Unit-Aufruf mit HAND, NC Start, Rückmeldung und Timeout.

Die Unterlagen sind eine **Arbeitsfassung für Software 1.43**, keine
Maschinenfreigabe. Browsermodelle sind keine vollständige Nachbildung der
Editoren. Geplante Funktionen werden nicht als fertig dargestellt.

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

## Daten und Sicherheit

Die Website verbindet sich nicht mit einer PLC. Übungswerte bleiben im Browser.
Die optionale Markierung „gelesen“ wird nur lokal gespeichert; kein Konto,
kein Tracking-Skript und keine Übermittlung des Lernfortschritts. GitHub Pages
stellt die Dateien bereit; dessen Hosting-Datenschutzbedingungen gelten separat.

Die Screenshots zeigen sowohl Layout-/Bearbeitungszustände als auch die echte
Live-Offline-Ansicht mit lokalen Kurswerten. Sie stammen aus einer isolierten
Übungskopie, nicht von einer verbundenen Maschine. Beispielvariablen erklären die Zuordnung und sind kein
Anschlussprofil. Für reale Anlagen sind deren Vorgaben und Freigaben maßgeblich.
