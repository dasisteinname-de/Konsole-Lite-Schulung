# BMK LED Schritt für Schritt

Wir ergänzen die Sensorübersicht von Hintergrundmagazin Seite 1 um eine
BMK-Karte. Die Karte nennt den Sensor; eine Linie verbindet sie mit einem
verschiebbaren Zielkreis auf der Zeichnung. Danach wählen wir die gelesene
Variable, den aktiven Zustand und die Farbe aus. Alles geschieht im QML Editor,
ohne QML-, Python- oder Schrittkettencode einzugeben.

**Nur in einer eigenen Kurskopie arbeiten.** Die folgenden Aufnahmen stammen
aus dem echten Editor im Layoutmodus. Gelbe Auswahlrahmen und farbige Zielkreise
sind dort Bearbeitungshilfen, keine gemessenen PLC-Zustände.

## 1 Die Aufgabe auf der fertigen Seite erkennen

![Hintergrundmagazin Seite 1 mit Übersicht, BMK-Karten und Sensorzielpunkten](images/00-hintergrundmagazin-seite1.png)

**Schau hin:** Das Maschinenbild ist ein Bild-Element. Jede BMK-Karte ist ein
eigenes BMK-LED-Element. Karte und Zielkreis können unabhängig positioniert
werden. Der Linienverlauf folgt ihnen automatisch.

Für die Übung eine neue Seite in der Kurskopie anlegen und zunächst nur das
Übersichtsbild einfügen, wie im [Bild-Beispiel](#/elements/bild) beschrieben.
Die vorhandene Originalübersicht dient als Vorlage und wird nicht leergeräumt.
Die nächsten Bilder zeigen diesen Zwischenstand mit einer neuen Karte.

## 2 Das Element einfügen

![Die Elementbibliothek links mit ausgewähltem BMK LED Eintrag](images/01-bmk-bibliothek.png)

1. Oben **Ansicht Layout** wählen.
2. Links die **Elementbibliothek** öffnen.
3. Auf **BMK LED** doppelklicken.

![Neu eingefügte BMK-Karte mit Standardbeschriftung und zugehörigem Zielkreis](images/02-bmk-eingefuegt.png)

**Ergebnis:** Eine Karte mit Standardtext und ein Zielkreis erscheinen. Rechts
stehen die Eigenschaften des ausgewählten Elements. Falls ein anderes Objekt
markiert ist, zuerst die neue Karte anklicken.

## 3 Die Textkarte passend positionieren

![BMK-Karte rechts neben dem Maschinenbild und ausgewählte x Eigenschaft](images/03-bmk-karte-positioniert.png)

1. Die **Karte**, nicht den Kreis, an eine freie Stelle neben dem Bild ziehen.
2. Am unteren rechten Griff ihre Größe anpassen. Beschriftungen nicht überdecken.
3. Bei Bedarf rechts **x**, **y**, **width** und **height** einstellen.

Die Aufnahme verwendet ungefähr x 1090, y 50, Breite 220 und Höhe 50 auf einer
1320 × 700 großen Seite. Diese Koordinaten sind ein Beispiel, keine Pflicht.
**Prüfung:** Der Zielkreis darf an seiner bisherigen Position bleiben, wenn
nur die Karte verschoben wird.

## 4 Kennzeichnung und Beschreibung eintragen

![Eigenschaften der BMK-Karte mit lesbarer Kennzeichnung und Beschreibung](images/04-bmk-beschriftung.png)

| Eigenschaft | Übungswert | Bedeutung |
| --- | --- | --- |
| `id` | vorhandene eindeutige ID behalten | Technische Identität des Elements |
| `text` | F9-120BG1 | Sichtbares Betriebsmittelkennzeichen |
| `description` | Beladeplatz 1 · Grundstellung | Verständliche Erklärung |
| `fontSize` | 11 | Lesbare Schriftgröße für diese Karte |

Den Wert rechts bearbeiten und mit Enter übernehmen. Eine mehrzeilige
Beschreibung lässt sich über Doppelklick auf `description` bearbeiten.
**Prüfung:** BMK und Beschreibung erscheinen vollständig auf der Karte.

## 5 Den Zielkreis auf den Sensor ziehen

![Der Zielkreis liegt am Beladeplatz und die Verbindung zur Karte folgt automatisch](images/05-bmk-zielkreis.png)

1. Den **kleinen Zielkreis** greifen und zum Sensor auf der Zeichnung ziehen.
2. Loslassen und den Linienverlauf prüfen.
3. Bei Bedarf über `targetX` und `targetY` fein positionieren. Im Beispiel sind
   das 909 und 299; sie beziehen sich auf die gesamte Seitenfläche.

**Ergebnis:** Nur der Zielpunkt wandert; die Karte bleibt neben dem Bild stehen.
Der Kreis legt eine Zeichnungsposition fest, nicht die Adresse der PLC-Variable.

## 6 Die passende Variable auswählen

![Variablenauswahl mit Modul, Suchfeld, Sensorvariable und vollständigen Pfaden](images/06-bmk-variable-auswahl.png)

1. Rechts die Eigenschaft **plcVariable** markieren.
2. Doppelklicken oder **Variable auswählen / Pfad kopieren …** drücken.
3. Das Modul **Hintergrundmagazin** wählen und nach
   **iVerriegelungBeladestation1Pos** suchen.
4. Die Zeile auswählen. Namen, Integer-Typ und vollständigen Binding-Pfad prüfen.
5. **Pfad übernehmen** drücken. Nicht bloß einen ähnlich klingenden Namen wählen.

Der vollständige Binding-Pfad des Beispiels lautet:
`mainModel_sh.hgm.interface.iVerriegelungBeladestation1Pos`.
Im `plcVariable`-Feld den **Binding-Pfad** verwenden, nicht eigenmächtig `.value`
anhängen. Das zweite Feld im Dialog bezeichnet den direkten QML-Wertpfad und
wird für diese Mausbedienung nicht benötigt.

![Sensorvariable ist der BMK-Karte zugeordnet und aktiver Wert ist eingestellt](images/07-bmk-variable-zugeordnet.png)

Die Variable ist hier ein Integer: 1 bedeutet Grundstellung, 2 Arbeitsstellung.
Deshalb für diese Grundstellungskarte **activeValue = 1** festlegen. Ohne diesen
Vergleich wäre die Bedeutung der leuchtenden LED nicht eindeutig beschrieben.
Die Auswahl ordnet nur eine gelesene Quelle zu; sie schreibt keinen PLC-Wert.

## 7 Farben einstellen

![Ausgewählte aktive Farbe und geänderte Eigenschaften in der rechten Tabelle](images/08-bmk-farben.png)

1. **activeColor** markieren. Falls nötig die Gruppe Darstellung öffnen.
2. Links in der Farbpalette **HDH_WARNING** auswählen.
3. Für `lineColor` **HDH_TEXT**, für `frameColor` **HDH_BORDER** verwenden.

![Nahansicht der echten Eigenschaftentabelle mit Variable, Vergleichswert und Farben](images/08-bmk-parameter-detail.png)

**Prüfung:** Variable, Vergleichswert und aktive Farbe sind gemeinsam lesbar.
Die Farbe erklärt einen Zustand, sie ersetzt nicht dessen Text oder Rückmeldung.
In der OFFLINE-Vorschau beweist ein farbiger Bearbeitungskreis keine aktive PLC.

## 8 Speichern und wieder öffnen

![Nach Speichern und erneutem Öffnen bleiben Beschriftung und Variablenzuordnung erhalten](images/09-bmk-gespeichert.png)

**Layout speichern**, Seite wechseln und wieder öffnen. Kontrollieren:

- Karte und Zielkreis befinden sich weiterhin an den gewählten Stellen.
- BMK und Beschreibung stimmen.
- `plcVariable`, `activeValue` und Farben sind erhalten.

Eine nicht verbundene Vorschau liefert keinen realen Sensorzustand. Eine
Funktionsprüfung mit echten Rückmeldungen ist eine getrennte, freizugebende Aufgabe.

## 9 Eine zweite Positionskarte ergänzen

![Grundstellung und Arbeitsstellung haben getrennte Karten und Zielkreise](images/10-bmk-zwei-positionen.png)

Ein weiteres BMK-LED-Element einfügen und eine **eigene technische ID** behalten.
`text` auf **F9-120BG2**, Beschreibung auf **Beladeplatz 1 · Arbeitsstellung**
setzen. Dieselbe Positionsvariable auswählen, aber **activeValue = 2** und
**activeColor = HDH_SUCCESS** verwenden. Den zweiten Kreis auf den passenden
Sensorpunkt setzen; seine Beispielkoordinaten sind 942 und 289.

**Erkläre dem Partner:** Warum verwenden beide Karten dieselbe Variable,
aber unterschiedliche Vergleichswerte? Welche Eigenschaft verschiebt die
Karte, welche den Zielkreis und welche bestimmt die Datenquelle?

Zurück zu [Basic](#/basic) oder weiter zu den
[bebilderten Elementbeispielen](#/elements).
