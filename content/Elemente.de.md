# Grundelemente mit Bildern aufbauen

Beginne beim Ergebnis: Die **Live-Ansicht** zeigt die vollständige Konsole mit
Navigation und F1 bis F8, ohne Editorleisten. Darunter folgt dieselbe Übungsseite
in der **Entwurfsansicht** mit den Eigenschaften zum Nachbauen. Die Werte sind
lokale Kursdaten, keine PLC-Rückmeldungen. Zum Vergrößern das Bild öffnen.
Änderungen immer in der eigenen Kurskopie speichern und nach dem Wiederöffnen
kontrollieren. Alle 17 Grundelemente zeigen beide Ansichten. Die 3D-Szene benötigt
auf dem Schulungs-PC eine funktionierende Qt3D-Grafikumgebung.

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

![BMK Karte mit Beschreibung und zugehörigem Zielkreis im Editor](images/design-element-bmkled.png)

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

### Live Ansicht

![3D Szene in der echten lokalen Live-Ansicht mit Konsolennavigation und F1 bis F8](images/live-element-shape3d.png)

### Entwurfsansicht

![3D Szene als eigenes Layoutobjekt mit Größe und Darstellungseigenschaften](images/design-element-shape3d.png)

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
4. Speichern und die Zeilen in der lokalen Vorschau prüfen.

**Kontrolle:** In der Live-Ansicht stehen drei lokale Beispielzeilen unter
**Sensor** und **Zustand**. Bei dateibasierten Tabellen die Datei nicht durch ein leeres
lokales Modell ersetzen; Änderungen an PLC-Daten sind hier nicht vorgesehen.

## Struktur als Baum (1.52.1)

![Lehrseite Strukturbaum mit Hauptknoten, Ebenen und Listen](images/structure-tree-1523.png)

**Struktur** zeigt ein vollständiges Objekt mit Eltern und Kindern,
Verbindungslinien und Einzügen. Listen erhalten Indexknoten, rechts steht der Wert. Containerzähler sind entfallen. **Name: Wert** schaltet zwischen kompakter Schlüssel/Wert-Schreibweise und Spalten um. Zweige lassen sich durch Klick
auf die Zeile oder **+ / −** öffnen und schließen. Tiefe Bäume können auch
horizontal verschoben werden. Die Ansicht liest; sie schreibt nichts zurück.

1. **Struktur** einfügen und ausreichend Platz vorsehen.
2. Eine der drei Quellen festlegen: **Statische Daten → JSON bearbeiten …**,
   **Datenmodell → …** für ein vorhandenes Objekt/eine Liste oder
   **Tabellendatei → …** für eine vorhandene JSON- bzw. Tabellendatei.
3. Für ein Datenmodell beispielsweise `controller.parameterTree` auf der
   Lehrseite Page9 verwenden. Die Auswahl zeigt tatsächliche Containerdeklarationen;
   einzelne BOOL-/Integer-Signale passen hier nicht. Der Pfad erzeugt keine Daten.
4. Einrückung, anfangs geöffnete Ebenen und Verbindungslinien einstellen,
   speichern und in der Vorschau die Eltern-/Kindzuordnung prüfen.

Eine Datei hat Vorrang, danach gilt das gebundene Modell, zuletzt der statische
JSON-Inhalt. Nicht mehr gewünschte Quellen beim Wechsel leeren. Dateien im
Projekt werden relativ referenziert; ein absoluter Pfad muss auch am Ziel
vorhanden und lesbar sein. **Neu lesen** liest eine Datei erneut ein.
JSON muss ein Objekt oder eine Liste sein; ungültige Eingaben bleiben im
Dialog zur Korrektur offen. Es werden keine Daten durch Programmcode ausgeführt.

**Kontrolle:** **05 Schulungszentrum → Page9 Struktur: Baumansicht** zeigt
verschachtelte Spracheinstellungen und Achsenlisten. Aufklappen verändert nur
die Darstellung. Ganze Zweige bleiben als zusammengehörige Struktur erkennbar.
Eine begrenzte Tiefe oder Zeilenzahl wird ausdrücklich gemeldet.

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


## Elemente bequem platzieren und gemeinsam gestalten (1.52.0)

Ein Element aus der Bibliothek auf die Layoutfläche ziehen. Unter der Maus
erscheint seine Vorschau; die linke obere Ecke folgt dem Zeiger. Loslassen
platziert es am Raster. Abbrechen oder außerhalb loslassen fügt nichts ein.
Doppelklick bleibt möglich. Größe anschließend an den Griffen ändern.

Markierte Elemente mit den **Pfeiltasten** zur nächsten Rasterlinie in der
gewählten Richtung bewegen, danach in Rastersprüngen (normal 10 Pixel).
**Alt + Pfeil** bewegt um einen Pixel ohne Einrasten. Ist beispielsweise x=23,
führt Rechts zu 30, Links zu 20. Eine Gruppe behält ihre relativen Abstände.
Ohne Auswahl scrollen die Pfeile weiterhin die Seite; im Textfeld bewegen sie
den Textcursor.

Mehrere gleiche Elementtypen mit Strg-Klick markieren. Gemeinsame
Ausrichtung, Schrift und Farben unter **Eigenschaften** wirken auf alle. Die
Auswahl bleibt bestehen; ein **Rückgängig** nimmt die Gruppenänderung zurück.
Kopien behalten eine eigene technische Identität und bleiben nach Speichern
und erneutem Öffnen neben ihrem Original erhalten.

## Vertiefung für komplexe Elemente

[Button Schritt für Schritt](#/button) · [RadioButton Schritt für Schritt](#/radio-button) · [Trend / XY](#/trend-1500) · [Rezepturen Schritt für Schritt](#/recipes)

## RadioButton: einen festen Wert einmal schreiben

Drei RadioButton-Elemente an dieselbe Integer-Variable binden und denselben
**Gruppennamen** vergeben. Unter **Auswahlwert (einmaliges Set)** nacheinander
100, 200 und 300 eintragen und **Rückschreiben** aktivieren. Jeder Klick schreibt
genau einmal. Loslassen, spätere PLC-Änderungen und die Markierung selbst
schreiben nichts. Die Markierung folgt dem gelesenen Wert; ist er z. B. 73,
ist keiner dieser drei Einträge ausgewählt. Dies ist keine PLC-Quittierung.

Normale Buttons können unter **Tastenverhalten = radio** denselben Gruppennamen
erhalten. Jeder behält seine Aktion, etwa **variable / set / 100**. Ein
angenommener Klick markiert ihn und hebt die Markierung der anderen auf; diese
bleiben anklickbar. Andere Gruppen sind unabhängig. Für Plus/Minus stattdessen
**add/subtract** und einen Zahlenwert verwenden; **repeat** wiederholt diesen
Aktionswert und endet beim Loslassen.


## Neue Lehrseiten direkt in der Console

Unter **05 Schulungszentrum** bleiben die drei bisherigen Sandkastenseiten
erhalten. **Page4 Buttons**, **Page5 RadioButton**, **Page6 Checkbox**,
**Page7 Slider** und **Page8 ProgressBar** ergänzen bedienbare LOCAL-Beispiele.
**Page9 Struktur: Baumansicht** ergänzt ein verschachteltes LOCAL-Objekt.
Ab 1.52.1 verwendet auch die echte Console-Navigation diesen vollständigen
Lehrkatalog. Die eigene Modulbezeichnung und Start-/Manual-/Run-Einstellungen
bleiben erhalten; erneutes Aktivieren bereits aktiver Seiten ist nicht nötig.
Neben jedem Element steht die erwartete Reaktion. Im QML Editor zeigt derselbe
Baustein seine Eigenschaften; die QML-Quelle enthält unmittelbar am Element
die Erklärung des Ziels, des Werts und des Tastenverhaltens.

Bei Checkbox können **Wert bei true**, **Wert bei false** und **Wert bei false
schreiben** konfiguriert werden. Beispielsweise 100/200 mit aktiviertem
Abwahlschreiben oder nur 500 mit deaktivierter Abwahl. Ohne Abwahlschreiben
bleibt der aktuelle Wert erhalten. Passt er weiterhin zum true-Wert, bleibt
auch die Markierung gesetzt. Links steht der gelesene Zahlenwert, rechts
die eigene Beschriftung. Externe Änderungen aktualisieren die Anzeige.
Auch zwei konfigurierte Werte aktivieren keinen dauernden Force.

Die Lehrwerte von Page4–Page8 liegen im zusätzlichen Interface **Schulungszentrum /
bedienbeispiele** als LOCAL-Werte im RAM. Keine PLC-Adresse und keine
automatische Schreibaktion beim Öffnen. Seiten, Interfacequelle und
Startregister gehören gemeinsam zur Lieferung; nach Installation Restart Apps.
Page9 definiert sein reines LOCAL-Beispiel direkt als `controller.parameterTree`
in der QML-Quelle; auch dort wird keine PLC-Adresse beschrieben.


![RadioButton-Lehrseite mit drei Auswahlwerten und zweitem LOCAL-Schreiber](images/lehrseite-radio-1520.png)

![Checkbox-Lehrseite mit gelesenen Zahlen und optionalem Abwahlschreiben](images/lehrseite-checkbox-1520.png)


## Zwei gemeinsame Zugriffsbedingungen

Für alle Elemente und F1–F8 gelten nur **Sichtbar ab** (Element und Wert sehen)
und **Bedienbar ab** (bedienen, schreiben, ausführen). Es gibt keine eigenen
zusätzlichen Lesbar-/Schreibbar-Felder. Die Modul-/Seitenrechte gelten zusätzlich.


## Anzeigeverbesserungen in 1.52.3

**ProgressBar:** Die konfigurierte Elementhöhe ist auf PC und Maschine dieselbe
Balkenhöhe. Unter **Balken und Hintergrund** lassen sich Balkenfarbe, Hintergrund,
Rahmen und Rundung wählen. Beispiele: HDH_GREEN, white oder #285ac4.

![ProgressBar als voller Balken mit unabhängigem LOCAL-Geber](images/progress-1523.png)

**Textwerte:** Anzeige-Nachkommastellen auf 2, 4 oder 5 setzen. Optional Nullen
auffüllen und Komma/Punkt wählen. Binäre Rechenreste wie 0.9400000000000001
werden nur für die Anzeige formatiert; die Variable wird nicht zurückgeschrieben.

![Slider mit kurzer REAL-Anzeige und unabhängigem Integer-Wert](images/slider-1523.png)

**Page9 / CFG:** CFG-Zweig lesen für `\CFG\CfgDisplayLanguage`; Einzelwert lesen
für `\CFG\CfgDisplayLanguage\plcErrorLanguage`. Ein tieferer vorhandener Pfad
kann eingegeben werden. Der bestehende ParameterBrowser prüft die Leserechte.
Öffnen, Aufklappen und Umschalten führen keinen Get aus. Offline meldet die
Ansicht fehlende native CFG-Livewerte. **LOCAL-Beispiel** führt zum RAM-Objekt zurück.

## Radio-LED und Bereiche · 1.52.4

Auf **Schulungszentrum / Page5** bleiben 100, 200 und 300 als einmalige Set-Werte
erhalten. **Bereiche aktivieren** schaltet von exaktem Vergleich auf die drei
benachbarten Bereiche. Die beiden Eingabefelder ändern LOCAL-Integer-Grenzen.
Bereich links, LED in der Mitte, Bedeutung rechts; die Bereichsbeschriftung kann
bei der Projektierung ausgeblendet werden. LED-Farbe, Deckkraft und Blinken
werden unabhängig vom Text und vom Klickwert eingestellt.

![LOCAL-Übung: Bereiche aus Variablen und drei verschiedenfarbige Radio-LED](images/radio-range-1524.png)

Die optionale BOOL-Freigabe bedeutet **true = Bereich**, **false = exakter Wert**.
Ohne Signal reicht die Hauptoption. Bei fehlenden gebundenen Daten wird keine
Aktivität bestätigt. Ein Klick schreibt einmal; der PLC bzw. ein Slider darf
danach jederzeit ändern. Ein Bereich je RadioButton genügt; Nachbarbereiche
ohne Überlappung projektieren, oben normalerweise exklusiv.

**Glättung aktivieren** ist standardmäßig aus. **Glättungszeit [ms]**, z. B.
500 oder 1200, verzögert beim LED das Ausschalten. Aktivierung bleibt sofort.
Die Anzeige erzwingt keinen Wert und schreibt nicht per Timer in die Variable.
