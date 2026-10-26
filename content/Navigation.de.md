# Konsole Lite kennenlernen und bedienen

Bevor du eine Seite gestaltest, lerne die Konsole aus Sicht des Bedieners kennen.
Du findest den Weg von MAIN zu einem Modul und einer Seite, vergrößerst eine
Ansicht und unterscheidest Meldungen, Dokumente und seitenabhängige Funktionstasten.
In diesem Kapitel wird nichts programmiert und keine Maschinenaktion gestartet.

Beginne mit dem [klickbaren Navigationsmodell](#/navigation-lab). Die folgenden
Bilder zeigen die echte QML-Konsolenoberfläche in einer isolierten Qt-Ansicht
ohne Maschinenmodell und ohne PLC. Nicht geladene Versions- oder Dokumentwerte
sind deshalb leer. Diese Lernaufnahmen sind keine Prüfung auf der Maschine.

## 1 Die feste Bedienleiste erkennen

![Echte Konsole mit MAIN, Modulwahl, Meldungsbereich, Zoom und Seitenwahl in der oberen Leiste](images/navigation-01-main.png)

Lies die obere Leiste von links nach rechts:

| Bereich | Aufgabe |
| --- | --- |
| MAIN | Zur gemeinsamen Hauptübersicht zurückkehren |
| Pfeile neben dem Modulnamen | Zum vorherigen oder nächsten verfügbaren Modul wechseln |
| Modulname | Modulauswahl öffnen und einen Bereich direkt auswählen |
| Meldungsbereich | Letzte Hinweise lesen und die Meldungsliste öffnen |
| Lupe mit Prozentzahl | Vergrößerung der Arbeitsfläche auswählen |
| Pfeile neben dem Seitennamen | Innerhalb des aktuellen Moduls die Seite wechseln |
| Seitenname mit Zähler | Seitenliste des aktuellen Moduls öffnen |

**Merke:** Die Konsolenleiste gehört zum festen Rahmen. Der Inhalt darunter
gehört zur gewählten Seite. Die Werkzeugleiste des QML Editors ist etwas anderes:
Mit ihr bearbeitest du die Maske, statt die fertige Konsole zu bedienen.

## 2 Von MAIN in ein Modul wechseln

MAIN zeigt die verfügbaren Bereiche als Kacheln. Ein Modul fasst zusammengehörige
Seiten zusammen, zum Beispiel die Übersichts- und Diagnoseseiten eines Magazins.

1. **MAIN** anklicken. Die gemeinsame Übersicht erscheint.
2. Eine Modulkachel wählen. Der Arbeitsbereich zeigt eine Seite dieses Moduls.
3. Oben den Modulnamen kontrollieren. Er benennt den gewählten Bereich.
4. Wieder **MAIN** drücken. Du bist auf der Übersicht, nicht in einem neuen Modul.

![Geöffnete Modulliste unter dem Modulnamen in der echten Konsole](images/navigation-02-module.png)

Alternativ direkt auf den **Modulnamen** klicken. Die Liste klappt auf; einen
Eintrag wählen. Die Modulpfeile blättern durch verfügbare Module, ohne die Liste
zu öffnen. Beim Wiederaufruf eines Moduls kann dessen zuletzt benutzte Seite
wieder erscheinen. MAIN ist daher nicht gleichbedeutend mit „Seite 1“.

**Bedienprobe:** Im Lernmodell von MAIN nach Hintergrundmagazin wechseln,
anschließend über die Modulliste INFO wählen und wieder nach MAIN zurückkehren.

## 3 Innerhalb eines Moduls Seiten wechseln

![Geöffnete Seitenliste des INFO-Moduls mit Dokumenten, Protokollen, Log-Dateien und Tabellen](images/navigation-06-seiten.png)

1. Ein Modul wählen, beispielsweise **INFO**.
2. Auf den **Seitennamen** klicken. Die Liste enthält die verfügbaren Seiten
   dieses Moduls, nicht die Seiten aller Module.
3. Eine andere Seite auswählen und Namen sowie Zähler prüfen.
4. Mit den **Seitenpfeilen** vor- und zurückblättern.

Die Pfeile beim Modulnamen wechseln den Bereich; die Pfeile beim Seitennamen
wechseln innerhalb dieses Bereichs. Ausgeblendete oder nicht verfügbare Seiten
können in der Liste fehlen. Der sichtbare Zähler ist daher nicht zwingend die
technische Nummer einer Datei.

**Bedienprobe:** In INFO von Dokumente nach Log-Dateien wechseln. Danach nur mit
dem Seitenpfeil eine Seite weiterblättern. Erkläre, warum INFO dabei aktiv bleibt.

## 4 Die Arbeitsfläche vergrößern

![Zoomauswahl der echten Konsole mit 100, 150 und 200 Prozent](images/navigation-03-zoom.png)

1. Auf die **Lupe mit Prozentzahl** klicken.
2. **150 %** wählen und die größere Darstellung betrachten.
3. Bei Bedarf im Arbeitsbereich scrollen, um außerhalb liegende Inhalte zu sehen.
4. **200 %** ausprobieren und anschließend auf **100 %** zurückstellen.

Der Konsolenzoom vergrößert die Darstellung der Arbeitsfläche. Er ändert weder
eine PLC-Variable noch die im Editor gespeicherten Elementkoordinaten. Bei großer
Vergrößerung passt nicht jede Seite vollständig in den sichtbaren Ausschnitt.

**Bedienprobe:** Das gleiche Element bei 100 und 200 Prozent finden. Benenne,
welcher Teil der Ansicht größer wird und welche Navigation erreichbar bleibt.

## 5 Meldungen lesen und schließen

![Meldungsfenster der echten Konsole mit einer ausdrücklich erzeugten Lerninformation und Schließen-Taste](images/navigation-04-meldungen.png)

Der obere Meldungsbereich zeigt die letzten Hinweise. Ein Klick darauf öffnet
die ausführlichere Liste. Dort lassen sich Meldungstext und Meldungsklasse lesen.

1. Den **Meldungsbereich** anklicken.
2. Die Liste lesen und Information, Warnung und Fehler unterscheiden.
3. **Schließen** drücken, um wieder die Seite zu sehen.

**Wichtig:** Schließen beendet nur die Anzeige der Liste. Es repariert keine
Ursache und quittiert keinen Maschinenfehler. Im Lernmodell sind alle Meldungen
ausdrücklich Beispiele; sie haben keinen Bezug zum Zustand einer Anlage.

## 6 Informationen und Dokumente finden

![INFO-Dokumentseite der echten Konsole ohne angeschlossenen Dokumentcontroller, mit festen F1-bis-F8-Plätzen rechts](images/navigation-05-info.png)

Das Modul **INFO** ist nicht dieselbe Ansicht wie die Meldungsliste. Es bündelt
Dokumente, Protokolle, Log-Dateien und Tabellen. Welche Dateien und Funktionen
tatsächlich verfügbar sind, hängt vom bereitgestellten Projekt ab.

1. Über die Modulauswahl **INFO** öffnen.
2. Über die Seitenliste beispielsweise **Dokumente** oder **Log-Dateien** wählen.
3. Die angebotenen Seitenfunktionen und deren Beschriftung lesen.
4. Mit **MAIN** zur Übersicht zurückkehren.

Das Browsermodell enthält hierfür einen kleinen Beispieltext, keinen vollständigen
Dokumentenviewer. Es öffnet keine Dateien von deiner Festplatte.

## 7 F1 bis F8 gehören zur aktuellen Seite

Die festen Funktionstasten liegen im Seitenbetrieb rechts neben dem Arbeitsbereich.
Ihre Bedeutung ist seitenabhängig. Auf einer Dokumentseite kann eine Taste eine
Dateiauswahl betreffen; auf einer anderen Seite besitzt dieselbe F-Nummer eine
andere Aufgabe. Zuerst den Text lesen, dann bedienen. Eine unbelegte oder gesperrte
Taste ist kein Auftrag, zufällig eine andere Taste auszuprobieren.

Im Lernmodell erzeugen die F-Tasten nur eine Erklärung. Keine davon startet eine
Maschinenfunktion. Ihre Beschriftung und die Grenzen der visuellen Konfiguration
folgen im Kapitel [Module Seiten und Funktionstasten projektieren](#/project).

## 8 Abschluss der Bedienprobe

- [ ] Ich finde von einer beliebigen Beispielseite nach MAIN zurück.
- [ ] Ich kann Modulwechsel und Seitenwechsel unterscheiden.
- [ ] Ich öffne und schließe die Auswahlmenüs gezielt.
- [ ] Ich stelle 100, 150 und 200 Prozent ein und finde wieder die Gesamtansicht.
- [ ] Ich unterscheide Meldungsliste und INFO-Dokumentseite.
- [ ] Ich weiß, dass F1 bis F8 ihre Bedeutung mit der Seite ändern können.

Erst danach folgt die eigene Projektierung: [Module Seiten und Funktionstasten](#/project).
