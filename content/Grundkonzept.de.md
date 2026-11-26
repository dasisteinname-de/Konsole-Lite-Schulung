# Das Grundkonzept von ConsoleLite

**Ein Workspace. Mehrere Module. Mehrere Seiten. Frei gestaltbare Elemente.**
Der Bediener wählt eine Aufgabe und sieht die passende Maske im selben vertrauten Rahmen.

<div id="concept-lab"></div>

Modul und Seite mit Auswahlfeldern oder Pfeilen wechseln: Der Projektbaum zeigt
sofort die zugehörigen QML- und Python-Dateinamen. Die Ordner können unabhängig
davon geöffnet und geschlossen werden. **Vollbild** vergrößert den Baum für die Präsentation.

## Die vier Ebenen

1. **Workspace** ist der Arbeitsbereich der Maschinenoberfläche. Darin liegt die **ConsoleLite** mit ihrem gemeinsamen Rahmen: Modulnavigation links, Seitenwahl rechts, Meldungen, Zoom und die festen Positionen F1–F8.
2. **Module** gliedern die Maschine nach Aufgaben, etwa Magazin, Vakuum oder
   Schulung. Jedes Modul besitzt seine eigenen Seiten.
3. **Seiten** sind die einzelnen Masken innerhalb eines Moduls: Übersicht,
   Bedienung, Parameter oder Diagnose. Die Seitennavigation wechselt den Inhalt.
4. **Elemente** machen eine Seite verständlich und bedienbar: Text, Button,
   RadioButton, Slider, ProgressBar, Trend und weitere Anzeigen. Im QML-Editor
   werden sie platziert, ausgerichtet, vergrößert und über Eigenschaften eingestellt.

**Die Bedeutung bleibt sichtbar:** Ein Text erklärt, ein Indikator zeigt den
Zustand, ein Button führt eine definierte Aktion aus, ein Trend zeigt den Verlauf.
Daten und Aktionen werden über ausdrücklich ausgewählte Variablen bzw. Funktionen
angebunden. Ein LOCAL-Schulungswert hat keine PLC-Adresse.

## Vom Entwurf zur Bedienung

Im Editor die Maske gestalten, speichern und in der lokalen Vorschau prüfen.
Auf der Konsole erscheint dieselbe Seite im gemeinsamen Workspace.
Ein Modulwechsel wählt einen anderen Aufgabenbereich, ein Seitenwechsel eine
andere Ansicht. F1–F8 behalten ihre Position; Beschriftung und Aktion werden für
die jeweilige Seite projektiert.

Die schematische Darstellung zeigt den Aufbau, keine echte Steuerungsverbindung. Dateiinhalte werden nicht geöffnet.

[Navigation selbst ausprobieren →](#/navigation-lab)

[Module, Seiten und F1–F8 selbst projektieren →](#/project)

[PLC–Python-Schnittstelle: Datenwege, Interface Editor und Dateien →](#/plc-interface)
