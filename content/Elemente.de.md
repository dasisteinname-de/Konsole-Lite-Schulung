# Grundelemente mit Bildern aufbauen

Beginne beim Ergebnis: Die **Live-Ansicht** zeigt die vollständige Konsole mit
Navigation und F1 bis F8, ohne Editorleisten. Darunter folgt dieselbe Übungsseite
in der **Entwurfsansicht** mit den Eigenschaften zum Nachbauen. Die Werte sind
lokale Kursdaten, keine PLC-Rückmeldungen. Zum Vergrößern das Bild öffnen.
Änderungen immer in der eigenen Kurskopie speichern und nach dem Wiederöffnen
kontrollieren. Für 16 Elemente stehen beide Ansichten bereit; die 3D-Szene
benötigt zusätzlich eine funktionierende Qt3D-Grafikumgebung.

**Gemeinsamer Bedienweg:** Element links doppelklicken, auf der Fläche
positionieren, am Griff vergrößern und rechts seine Eigenschaften einstellen.
Zusätzliche Eigenschaftengruppen bei Bedarf aufklappen. Eine vorhandene Variable
wird über ihre Auswahl zugeordnet, nicht durch eine neue QML-Programmzeile.
Schreibtests und Maschinenaktionen gehören nicht zu diesen Layoutübungen.

## Text und Wert

### Live Ansicht

![Text und Wert in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-text.png)

### Entwurfsansicht

![Text Element im Editor mit Beschriftung, Geometrie und Schriftgröße](images/design-element-text.png)

1. **Text / Wert** einfügen und eine eindeutige `id` behalten.
2. `text` auf **Beladestation 1** setzen; Breite, Schriftgröße und Ausrichtung
   so einstellen, dass die Überschrift ohne Abschneiden lesbar ist.
3. Für eine Wertanzeige `plcVariable` über die Variablenauswahl zuordnen.
   Beschriftung und Datenquelle nicht verwechseln.

**Kontrolle:** Ein statischer Text bleibt nach dem Wiederöffnen unverändert.
Eine gelesene Wertanzeige benötigt eine passende Datenquelle; eine Zahl als
Beschriftung ist noch keine Rückmeldung. Eine TextDB-ID ergänzt die Übersetzung,
der lesbare Ersatztext bleibt erhalten.

## Bild

### Live Ansicht

![Bild in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-image.png)

### Entwurfsansicht

![Bild Element auf der Layoutfläche und seine Quelle in den Eigenschaften](images/design-element-image.png)

1. **Bild** einfügen und markieren.
2. Über **Menü → Bearbeiten → Bild / Icon auswählen …** das Übersichtsbild wählen.
   Für die HGM-Vorlage liegt es unter **KonsoleLite / Icons / 3D Übersicht**
   und heißt **dunkel_HGM.png**.
3. Position und Größe einstellen. Für die Übersicht sind ungefähr x 250,
   y 20, Breite 780 und Höhe 510 ein sinnvoller Ausgangspunkt.
4. Speichern und wieder öffnen: Das Bild muss aus der Projektkopie wieder
   erreichbar sein. Keinen nur auf dem eigenen Desktop vorhandenen Pfad voraussetzen.

**Kontrolle:** Die Maschine bleibt erkennbar, die freien Randflächen bieten
Platz für BMK-Karten. Die gemeinsame [BMK-Bildfolge](#/bmk) baut darauf auf.

## BMK LED

### Live Ansicht

![BMK LED in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-bmkled.png)

### Entwurfsansicht

![Zwei BMK Karten sind mit den zugehörigen Sensorpunkten verbunden](images/design-element-bmkled.png)

Das vollständige [BMK-LED-Kapitel](#/bmk) zeigt jeden Schritt mit eigenem
Bild: Einfügen, Karte verschieben, Text ändern, Kreis ziehen, Variable wählen,
Vergleichswert und Farbe einstellen, speichern und wieder öffnen.

## Button

### Live Ansicht

![Button in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-button.png)

### Entwurfsansicht

![Button mit Navigation als Aktion und editierbarer Beschriftung](images/design-element-button.png)

1. **Button** einfügen, `text` auf **Sensorübersicht** setzen und ausreichend
   groß für eine sichere Betätigung zeichnen.
2. Für eine harmlose erste Aktion `actionType` **navigate** wählen.
3. Zum ersten Test den Zielmodus **main** wählen. Danach **page**, Zielmodul
   und eine vorhandene Zielseite ausprobieren.
4. Speichern und die Navigation in der lokalen Vorschau prüfen.

**Kontrolle:** Der sichtbare Text erklärt das Ziel. Eine Navigation muss keine
PLC-Variable schreiben. Unit-Aktionen, CALL und Python-Funktionen werden erst
im Fortgeschrittenenteil behandelt.

## Edit Feld

### Live Ansicht

![Edit Feld in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-edit.png)

### Entwurfsansicht

![Edit Feld mit Übungswert und Eigenschaften für die Eingabe](images/design-element-edit.png)

1. **Edit-Feld** einfügen und Größe sowie Textdarstellung wählen.
2. Einen statischen Übungswert einstellen und unter **Eingabe und Prüfung**
   Eingabemodus, zulässigen Bereich und Dezimaldarstellung festlegen.
3. Für eine vorhandene Wertquelle die Variablenauswahl nutzen.
4. `writeBack` in dieser Übung ausgeschaltet lassen. Keine vorhandene
   Maschinenvariable allein zum Ausprobieren beschreibbar machen.

**Kontrolle:** Zahl, Textformat und Grenzen sind verständlich. Eine reine
Darstellungs-/Eingabeprüfung ersetzt keine angeschlossene Speicherfunktion.

## Progress Bar

### Live Ansicht

![Progress Bar in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-progress.png)

### Entwurfsansicht

![Fortschrittsanzeige mit Beispielwert und Zahlenbereich](images/design-element-progress.png)

1. **Progress-Bar** einfügen; `minimum` 0 und `maximum` 100 wählen.
2. Den lokalen Beispielwert `value` auf 65 setzen.
3. Breite, Höhe und Farben einstellen. Danach bei Bedarf eine passende
   numerische `plcVariable` auswählen.

**Kontrolle:** 65 ist innerhalb des Bereichs. Eine andere Skalierung der Anzeige
verändert keinen physikalischen PLC-Wert. In der Vorschau statischen Beispielwert
und echte Datenquelle unterscheiden.

## Slider

### Live Ansicht

![Slider in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-slider.png)

### Entwurfsansicht

![Slider mit lokalem Übungswert und einstellbarer Skala](images/design-element-slider.png)

1. **Slider** einfügen; Minimum, Maximum und Schrittweite passend wählen.
2. Mit einem statischen Übungswert beginnen, beispielsweise 35 von 100.
3. Aussehen und Bedienfläche prüfen. Ein Datenpfad wird wie bei anderen
   Wertfeldern ausdrücklich ausgewählt.

**Kontrolle:** `writeBack` bleibt aus. Verschieben im Layout verändert die Lage
des Elements, nicht seinen Sollwert. Einen realen Achssollwert damit zu schreiben
ist kein Bestandteil von Basic.

## Checkbox

### Live Ansicht

![Checkbox in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-checkbox.png)

### Entwurfsansicht

![Checkbox mit verständlicher Beschriftung in der Layoutfläche](images/design-element-checkbox.png)

1. **Checkbox** einfügen und eindeutig beschriften, etwa **Übungsauswahl**.
2. Für eine Zustandsanzeige eine boolesche Datenquelle auswählen.
3. Größe und Textabstand so einstellen, dass das ganze Feld sicher bedienbar ist.

**Kontrolle:** Wahr/falsch hat eine klare Bedeutung. Anzeige, gespeicherter
Startwert und Rückschreiben sind verschiedene Dinge; `writeBack` bleibt aus.

## RadioButton

### Live Ansicht

![RadioButton in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-radiobutton.png)

### Entwurfsansicht

![RadioButton mit eigener Beschriftung und Gruppenzuordnung](images/design-element-radiobutton.png)

1. Einen **RadioButton** für **Variante A** einfügen.
2. Einen zweiten für **Variante B** ergänzen. Technische IDs müssen verschieden
   sein; für eine gemeinsame Auswahl erhalten beide dieselbe `group`.
3. Beschriftung, Abstand und gegebenenfalls die gelesene Datenquelle einstellen.
   Bei derselben numerischen Quelle unterschiedliche Auswahlwerte vorsehen,
   beispielsweise `value` 0 für A und 1 für B.

**Kontrolle:** Zusammengehörige Alternativen sind erkennbar. Unterschiedliche
Gruppen beschreiben voneinander unabhängige Auswahlen. Keine Maschinenfreigabe
allein durch eine grafische Auswahl behaupten.

## 2D Fläche

### Live Ansicht

![2D Fläche in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-shape2d.png)

### Entwurfsansicht

![2D Fläche als ruhiger Bereich mit anpassbarer Füllung und Rahmen](images/design-element-shape2d.png)

1. **2D-Fläche** einfügen und als optischen Bereich um mehrere Elemente zeichnen.
2. `fillColor`, `borderColor`, Rahmenbreite und gegebenenfalls `radius` einstellen.
3. Kontrollieren, dass eine darüberliegende Fläche keine Bedienobjekte verdeckt.

**Kontrolle:** Die Fläche gliedert die Maske. Ihre Position und Farbe enthalten
keine Ablauf- oder Freigabelogik.

## 3D Szene

![3D Szene als eigenes Layoutobjekt mit Größe und Darstellungseigenschaften](images/element-shape3d.png)

1. **3D-Szene** einfügen und eine ausreichend große Darstellungsfläche vorsehen.
2. Die vorhandene Beispielszene und ihre Darstellungsparameter untersuchen,
   etwa den Drehwinkel `rotation`.
3. In der lokalen Vorschau prüfen; der Layoutplatzhalter ist keine Live-Achse.

**Kontrolle:** Eine dargestellte Lage beweist keine gemessene Maschinenposition.
Für den statischen HGM-Übersichtsplan genügt das Bild-Element.

## Index Liste

### Live Ansicht

![Index Liste in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-list.png)

### Entwurfsansicht

![Index Liste mit auswählbaren Einträgen als Layoutobjekt](images/design-element-list.png)

1. **Index-Liste** einfügen und ihre sichtbare Größe einstellen.
2. Einträge mit eindeutigen Indizes und verständlichen Texten definieren;
   die passende Eigenschaftengruppe für Listen öffnen.
3. Bei Bedarf eine Quelle mit passendem Index zuordnen und Indexbasis prüfen.

**Kontrolle:** Der Index ist nicht der Zeilentext. Der Dozent verwendet eine
vorbereitete lokale Liste; komplexe Datenmodelle werden in Basic nicht als
JSON-Programmierung von Hand nachgebaut.

## Tabelle

### Live Ansicht

![Tabelle in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-table.png)

### Entwurfsansicht

![Tabellen Element mit Spalten und vorbereitetem lokalen Datenmodell](images/design-element-table.png)

1. **Tabelle** einfügen und über **Menü → Bearbeiten → Tabelle bearbeiten …** öffnen.
2. Spalten **Sensor** und **Zustand** sowie zwei vorbereitete lokale Beispielzeilen
   wählen. Sichtbare Überschriften von technischen Datenpfaden unterscheiden.
3. Breiten, Zeilenhöhe, Kopfzeile und Scrollverhalten einstellen.
4. Layout speichern und die Zeilen in der lokalen Vorschau prüfen.

**Kontrolle:** In der Live-Ansicht stehen drei lokale Beispielzeilen unter
**Sensor** und **Zustand**. Bei dateibasierten Tabellen die Datei nicht durch ein leeres
lokales Modell ersetzen; Änderungen an PLC-Daten sind hier nicht vorgesehen.

## Struktur

### Live Ansicht

![Struktur in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-structure.png)

### Entwurfsansicht

![Struktur Element mit Platz für eine gegliederte Anzeige](images/design-element-structure.png)

1. **Struktur** einfügen und ausreichend Platz für benannte Werte lassen.
2. Das vom Dozenten vorbereitete Strukturmodell auswählen beziehungsweise die
   vorhandene `modelBinding`-Zuordnung lesen.
3. Schrift, Zeilen und Bildlauf anpassen und die Namen/Werte in der Vorschau prüfen.

**Kontrolle:** Die vorhandene Strukturansicht zeigt benannte Werte als Tabelle;
sie ist kein hier angenommener aufklappbarer Baum. Ein angezeigter Eintrag ist
weder ein zusätzlicher Unit-Aufruf noch eine Maschinenaktion.

## ImageList

### Live Ansicht

![ImageList in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-imagelist.png)

### Entwurfsansicht

![ImageList als eigenes Element mit einer vorbereiteten Bildzuordnung](images/design-element-imagelist.png)

1. **ImageList** einfügen und einen vorbereiteten Satz aus Index und Bildquelle
   verwenden. Für diese Liste zählt die `source`-Zuordnung des jeweiligen
   `entries`-Eintrags, nicht nur die allgemeine Bildquelle des Elements.
2. Anzeigefläche und Quellen in der Projektkopie prüfen.
3. Bei einer dynamischen Darstellung die passende Indexquelle bewusst auswählen.

**Kontrolle:** Jeder gelehrte Index führt zum vorgesehenen Bild. Fehlende Dateien
oder nicht vorhandene Indizes sind kein gültiger Sensorzustand.

## TextList

### Live Ansicht

![TextList in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-textlist.png)

### Entwurfsansicht

![TextList mit vorbereiteten Positionsmeldungen und Anzeigeeigenschaften](images/design-element-textlist.png)

1. **TextList** einfügen und einen vorbereiteten Meldungssatz verwenden,
   etwa **Position unbekannt**, **Grundstellung**, **Arbeitsstellung**.
2. Texte, Indizes und gegebenenfalls TextDB-IDs gemeinsam prüfen.
3. Bei einer dynamischen Liste die zugehörige Indexquelle auswählen.

**Kontrolle:** Ein schöner Meldungstext allein bestätigt keine Position.
Index und tatsächlicher Eingang müssen zur definierten Zuordnung passen.

## Rezeptur Ansicht

### Live Ansicht

![Rezeptur Ansicht in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-recipe.png)

### Entwurfsansicht

![Rezeptur Element als große eingebettete Ansicht im Layout](images/design-element-recipe.png)

1. **Rezeptur** nur als vorhandene Ansicht im Layout untersuchen beziehungsweise
   in der Kurskopie platzieren.
2. Genügend Breite und Höhe für Listen, Schaltflächen und Rückmeldungen vorsehen.
3. Eine freigegebene Beispielkonfiguration lesen; keine Originaldefinitionen,
   geschützten Rezepturkomponenten oder Maschinendaten verändern.

**Kontrolle:** Basic behandelt hier die Platzierung der Ansicht, keine
Parameterübertragung oder Wiederherstellung an der Maschine.

## Aus den Elementen eine Maske zusammenstellen

Die HGM-Seite 1 ist das gemeinsame Zielbild: ein Übersichtsbild, lesbare
Beschriftungen, zugeordnete BMK-Karten und eine klar getrennte Informationsfläche.
Die übrigen Elemente ergänzen einen kleinen lokalen Servicebereich dort, wo sie
eine echte Aufgabe haben. Nicht jedes Bibliothekselement muss in dieselbe Seite.

Abschlussprüfung: Kann ein Kollege Quelle, Bedeutung, Beschriftung und
Bearbeitungspunkt jedes eingebauten Elements erkennen? Nach dem Wiederöffnen
müssen Layout und Zuordnungen erhalten bleiben. Nicht angebundene Anzeigen
bleiben ausdrücklich nicht angebunden; kein PLC-Test wird vorgetäuscht.

Zurück zur [Basic-Unterlage](#/basic).
