# Schulungsunterlagen Basic

**Zwei Tage von der Konsolenbedienung zur eigenen Maske.** Zuerst lernst du
MAIN, Module, Seiten, Zoom, Meldungen, INFO und die festen Funktionstasten kennen.
Danach projektierst du eine eigene Seite und gestaltest sie mit den 17
Grundelementen. Units, CALL, CALL SK, Schrittkettenlogik sowie die Elemente
Sequence und Sequence Viewer gehören ausdrücklich erst zu Fortgeschrittene.

„Programmierung“ bedeutet in diesem Basic-Kurs visuelle Projektierung: Seiten
anlegen, Namen vergeben und Eigenschaften auswählen, nicht Python-, QML- oder
Ablaufcode schreiben.

Als gemeinsames Beispiel dient **Hintergrundmagazin Seite 1**: Das Maschinenbild
wird Schritt für Schritt um verständliche Sensoranzeigen ergänzt. Alles erfolgt
in einer eigenen OFFLINE-Projektkopie; Originalseiten und Maschinenwerte bleiben
unverändert. Vorbereitung: [Kursübersicht](#/overview).

![Der echte QML Editor mit Elementbibliothek links, HGM Maske in der Mitte und Eigenschaften rechts](images/00-editor-hintergrundmagazin.png)

## So arbeitest du mit den Bildkapiteln

Die Elementkapitel folgen derselben Reihenfolge:
zuerst der Elementname und das fertige Ergebnis in der **Live-Ansicht**,
danach die **Entwurfsansicht** und ihre Bedienfolge. Die Live-Aufnahme zeigt nur
die vollständige Konsole mit Navigation und F1–F8, ohne die Seitenleisten des
Editors. Sie stammt aus der lokalen Offline-Vorschau, nicht aus einer
PLC-Verbindung. Alle 17 Grundelemente zeigen das Ergebnis und die zugehörige
Entwurfsansicht. Für die 3D-Szene muss Qt3D auf dem Schulungs-PC verfügbar sein.

Nicht erst alles lesen. Einen Abschnitt öffnen, den gezeigten Schritt selbst
ausführen und das eigene Ergebnis mit dem Bild vergleichen. Ein Bild lässt sich
zum Lesen kleiner Eigenschaften vergrößert öffnen. Die Entwurfsaufnahmen
zeigen den Layoutmodus; Auswahlrahmen und Zielkreise sind
keine aktiven PLC-Rückmeldungen. Auch die Live-Bilder verwenden nur lokale Kurswerte.

| Arbeitsunterlage | Was du damit baust |
| --- | --- |
| [Konsole Lite kennenlernen](#/orientation) | Bedienleiste, MAIN, Module, Seiten, Meldungen, INFO und Zoom verstehen |
| [Navigation ausprobieren](#/navigation-lab) | Menüs und Fenster im Browser selbst öffnen und schließen |
| [Module Seiten und F1–F8](#/project) | Eigene Kursseite vorbereiten und Benennung von Funktionszuordnung unterscheiden |
| [BMK LED Schritt für Schritt](#/bmk) | Vollständige Bildfolge von Einfügen bis Speichern und Wiederöffnen |
| [Grundelemente mit Bildern](#/elements) | Einzelübungen für alle siebzehn Grundelemente der Maskengestaltung |

Das BMK-Kapitel ist die erste ausführliche Bildanleitung. Die anderen Elemente
haben bereits Bildkarten, konkrete Arbeitsschritte und Kontrollen; weitere
Detailaufnahmen können diese Karten schrittweise vertiefen. Die Unterlagen sind
weiterhin eine Arbeitsfassung, kein fertig abgenommener vollständiger Bildband.

## Tag 1 Konsole verstehen und die erste Sensorübersicht gestalten

**Tagesziel:** Du kannst die Konsole bedienen, deine Kursseite eindeutig öffnen
und anschließend Bild sowie BMK-LED-Karte mit erklärbarer Zuordnung gestalten.

### Erst die Konsole bedienen

Richtzeit 45 Minuten. Das [Bedienkapitel](#/orientation) lesen und die Aufgaben
im [Navigationsmodell](#/navigation-lab) selbst ausführen: MAIN, Modul- und
Seitenwechsel, Zoom auf 100/150/200 Prozent, Meldungsliste und INFO. Nicht die
Editor-Werkzeugleiste mit dem Bedienrahmen der fertigen Konsole verwechseln.

### Modulbereich Seite und Funktionstasten vorbereiten

Richtzeit 60 Minuten. Das [Projektkapitel](#/project) ausführen: freien
Modulbereich verwenden, Kursseite anlegen, Anzeigenamen und technische Namen
unterscheiden, bestehende Seite wiederfinden und F1–F8 auswählen. Die Grenzen
der heutigen visuellen Modulverwaltung und Tastenparametrierung berücksichtigen.

Über **Menü → Projekt → Neue Seite …** eine eigene Übungsseite in der Kurskopie
anlegen. Die HGM-Seite 1 als lesbare Vorlage ansehen, nicht durch Löschen der
vorhandenen Elemente zur leeren Übungsseite machen.

### Die Oberfläche mit der Maus bedienen

Richtzeit 30 Minuten. Ein Text-Element einfügen, anklicken, verschieben und über
seinen Griff vergrößern. Sichtbaren Text und technische ID unterscheiden.
Raster und Einrasten ausprobieren. Der Zoom verändert den Blick, nicht die
gespeicherte Lage des Elements.

**Kontrolle:** Nach Speichern und Wiederöffnen stehen Text und Element weiterhin
an derselben Stelle. Noch nicht zugeordnete Anzeigen als solche kennzeichnen.

### Das Maschinenbild einfügen

Richtzeit 45 Minuten. Das [Bild-Beispiel](#/elements/bild) ausführen:
Bild aus der Bibliothek einfügen, über die Bildauswahl eine Projektgrafik wählen,
Größe einstellen und freie Ränder für Beschriftungen lassen. Nicht auf eine
Datei verlassen, die nur auf dem eigenen Desktop liegt.

![Zielbild der Sensorübersicht mit Bild und getrennten BMK Karten](images/00-hintergrundmagazin-seite1.png)

### Die BMK LED Bildfolge selbst nachbauen

Richtzeit 90 Minuten. Das [vollständige Bildkapitel](#/bmk) gemeinsam
beginnen und anschließend selbst ausführen:

1. BMK LED doppelklicken und die Textkarte positionieren.
2. BMK und Beschreibung eintragen.
3. Den Zielkreis unabhängig von der Karte auf den Sensor ziehen.
4. Die gelesene Positionsvariable über Modul und Suchfeld auswählen.
5. Vergleichswert und aktive Farbe einstellen.
6. Speichern, wieder öffnen und mit dem gezeigten Ergebnis vergleichen.

**Partnerkontrolle:** Eine Person zeigt auf Karte, Kreis und Datenquelle; die
andere erklärt, welche Eigenschaft jeweils etwas verändert. Danach wechseln.

### Tageskontrolle

Richtzeit 30 Minuten.

- [ ] Meine Karte lässt sich unabhängig vom Zielkreis positionieren.
- [ ] Ich finde MAIN, Module, Seiten, Meldungen, INFO und Zoom.
- [ ] Ich unterscheide F-Tasten-Beschriftung und tatsächliche Funktion.
- [ ] BMK, Beschreibung und Verbindung zum richtigen Bildpunkt sind erkennbar.
- [ ] Ich finde Variable, Vergleichswert und Farbe in den Eigenschaften.
- [ ] Alle Angaben bleiben nach dem Wiederöffnen erhalten.

## Tag 2 Aus Grundelementen eine verständliche Maske bauen

**Tagesziel:** Du kannst passende Anzeige- und Bedienelemente auswählen, ihre
Darstellung konfigurieren und eine gespeicherte Maske nachvollziehbar übergeben.

### Die passenden Grundelemente auswählen

Richtzeit 120 Minuten. Mit den [Bildkarten](#/elements) zuerst Text, Button,
Edit-Feld und Progress-Bar selbst aufbauen. Danach Slider, Checkbox und
RadioButton vergleichen. Einen Button zunächst nur für eine vorhandene
Seitennavigation konfigurieren, nicht für eine Maschinenaktion.

Die übrigen Karten zeigen 2D-Fläche, 3D-Szene, Index-Liste, Tabelle, Struktur,
ImageList, TextList und die Platzierung einer vorhandenen Rezepturansicht.
Komplexe Datenmodelle stellt der Dozent bereit; Teilnehmer müssen kein JSON
oder QML von Hand schreiben. Geschützte Rezepturfunktionen bleiben unverändert.

### Vorhandene Variablen lesbar zuordnen

Richtzeit 75 Minuten. Die Variablenauswahl aus dem BMK-Beispiel wiederholen.
Für Text, Zahl, booleschen Zustand und Listenindex jeweils die passende
vorhandene Quelle unterscheiden. Statischen Beispielwert und gelesenen Wert
nicht verwechseln. `writeBack` bleibt in Basic ausgeschaltet.

Bei Listen die vorbereiteten Texte beziehungsweise Bilder gemeinsam mit ihren
Indizes lesen. Wo noch kein visueller Dateneditor vorhanden ist, wird diese
Grenze offen gezeigt statt den Teilnehmern verdeckte Programmierung abzuverlangen.

### Die HGM Übungsmaske zusammensetzen

Richtzeit 60 Minuten. Die Sensorübersicht um eine zweite BMK-Karte und einen
kleinen Informationsbereich ergänzen. Beide Positionskarten dürfen dieselbe
Integer-Variable lesen, aber unterschiedliche Vergleichswerte besitzen.
Eine klare Überschrift und bei Bedarf eine kleine Tabelle ergänzen.

Lesbare Abstände, ausreichende Klickflächen und nachvollziehbare Farben wählen.
Nicht jedes Bibliothekselement muss in dieselbe Maske. Die Maske soll ihre
Aufgabe erklären, nicht die Anzahl verfügbarer Elemente vorführen.

### Abschlussvorführung Basic

Richtzeit 45 Minuten. Ein Kollege öffnet deine gespeicherte Maske und findet
ohne Erklärung: Welcher Sensor ist gemeint? Wo liegt er auf der Zeichnung?
Welche Variable wird gelesen? Welcher Zustand ist der aktive Vergleich?

- [ ] Die nötigen Grundelemente sind sinnvoll platziert und lesbar beschriftet.
- [ ] Datenquellen sind ausdrücklich ausgewählt, nicht durch Text vorgetäuscht.
- [ ] Layout, Farben, Texte und Zuordnungen bleiben nach dem Wiederöffnen erhalten.
- [ ] Ich kann Layoutvorschau und reale Maschinenrückmeldung unterscheiden.

**Ergebnis:** eine selbst gestaltete, gespeicherte Bedienmaske mit erklärbaren
Anzeigezuordnungen. Ablaufsteuerung, Units und Programmierung folgen erst in
den [Schulungsunterlagen Fortgeschrittene](#/advanced).
