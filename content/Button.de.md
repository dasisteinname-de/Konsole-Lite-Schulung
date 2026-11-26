# Button Schritt für Schritt

**Zuerst festlegen, was die Taste tut. Danach festlegen, wann sie es tut.**
Diese zwei Entscheidungen erklären die meisten Eigenschaften einer Taste.
Die Beispiele stehen fertig auf **Schulungszentrum / Page4** und verwenden
LOCAL-Werte im RAM.

![Die aktuelle Button-Lehrseite mit einmaligem Set, Rechnen und verschiedenen Tastenverhalten](images/buttons-lesson-1524.png)

## 1. Zwei Fragen statt einer langen Eigenschaftsliste

| Frage | Eigenschaft | Beispiel |
| --- | --- | --- |
| Was soll geschehen? | **Aktionsart** | Variable ändern, Seite wechseln oder Python aufrufen |
| Wann und wie oft? | **Tastenverhalten** | Einmal klicken, solange gedrückt, Impuls oder Wiederholung |

Eine Beschriftung wie „+5“ beschreibt die Absicht für den Bediener. Sie erzeugt
noch keine Rechenaktion. Erst **Aktionsart = variable**, **Variablenoperation = add**
und **Aktionswert = 5** stellen diese Wirkung ein.

## 2. Die Aktionsart bewusst wählen

| Aktionsart | Bedeutung | Was zusätzlich nötig ist |
| --- | --- | --- |
| `none` | Keine ausführbare Aktion | Für eine reine Beschriftung oder noch nicht belegte Taste |
| `variable` | Eine gebundene Variable ändern | Variable, Operation und gegebenenfalls Aktionswert |
| `navigate` | Eine andere Seite oder Modulansicht öffnen | Navigationsziel und Zielart |
| `python` | Eine Seitenfunktion aufrufen | Vorhandene Python-Funktion, Name ohne Klammern |
| `unit` | Einen projektierten Unit-Aufruf verwenden | Passende Unit-/Aktionszuordnung; siehe Fortgeschrittene |
| `recipe` | Eine projektierte Rezepturaktion kennzeichnen | Der ausdrücklich eingerichtete Funktions-/Controllerweg |
| `sequence` | Eine projektierte Kettenaktion kennzeichnen | Der eingerichtete Funktions-/Controllerweg, nicht nur ein Kettenname |
| `dialog` | Einen projektierten Dialogweg verwenden | Die zugehörige Funktion |
| `message` | Einen projektierten Meldungsweg verwenden | Die zugehörige Funktion und Meldungsprojektierung |
| `acknowledge` / `reset` | Einen projektierten Quittier-/Rücksetzweg verwenden | Die ausdrücklich vorgesehene Funktion |

Die Auswahl eines Namens richtet noch keinen fehlenden Controller ein.
Für die ersten Übungen genügen **variable**, **navigate** und **python**.
Die anderen Aktionsarten gehören zu einem bereits vorbereiteten Projektablauf.
Der Editor zeigt die zur gewählten Aufgabe passenden Felder.

## 3. Eine Zahl einmal setzen

1. Eine **Button**-Taste auf einer LOCAL-Übungsseite platzieren.
2. **Anzeigetext** auf `Set 100` setzen.
3. **Aktionsart = variable** wählen.
4. Unter **Variable / Signal** über **…** die LOCAL-Integer-Variable `iTaste`
   aus `Schulungszentrum / bedienbeispiele` auswählen.
5. **Variablenoperation = set**, **Aktionswert = 100** einstellen.
   Der Wert ist eine Zahl, kein Text in Anführungszeichen.
6. **Tastenverhalten = command** wählen. Für die direkte Variablenaktion
   bleibt **Python-Funktion** leer.
7. Speichern, Live öffnen und einmal drücken. `iTaste` zeigt 100.
8. Loslassen. Der Wert bleibt 100; es gibt keinen automatischen Rücksetzschritt.

**Die fertige Page4 macht genau diesen Ablauf sichtbar.** Sie enthält außerdem
eine Wertanzeige, sodass die Aktion nicht nur am Tastentext beurteilt wird.

## 4. set, add und subtract unterscheiden

Ausgangswert für die folgende Tabelle: **20**.

| Operation | Aktionswert | Ergebnis eines Klicks | Bedeutung |
| --- | ---: | ---: | --- |
| `set` | 5 | 5 | Den festen Zielwert schreiben |
| `add` | 5 | 25 | Zum aktuell gelesenen Wert addieren |
| `subtract` | 5 | 15 | Vom aktuell gelesenen Wert abziehen |
| `set` | −777 | −777 | Auch ein negativer Festwert ist eine Zahl |

Bei add/subtract müssen aktueller Eingang und Betrag numerisch sein.
Ein unbekannter Eingang ist keine Null. Bei einer BOOL-Variable ist Rechnen
nicht die passende Operation; dort sind Set und Umschalten die normalen Fälle.

## 5. Das Tastenverhalten verstehen

| Verhalten | Beim Bedienen | Nach Loslassen / Ablauf |
| --- | --- | --- |
| `command` | Ein angenommener Klick führt die Aktion einmal aus | Kein zusätzliches Set |
| `repeat` | Beim Drücken ausführen; nach **Wiederholverzögerung** regelmäßig wiederholen | Loslassen beendet die Wiederholung |
| `toggle` | Den aktuellen BOOL-Zustand umschalten | Der neue Zustand bleibt, bis ein anderer Schreiber ändert |
| `momentary` | Eine BOOL-Anforderung gilt während des Drückens | Loslassen / Abbruch nimmt die eigene Anforderung zurück |
| `pulse` | Eine BOOL-Anforderung starten | Nach **Impulsdauer** zurücknehmen |
| `longPress` | Erst nach der projektierten Haltezeit einmal ausführen | Ein kurzer Klick führt die Aktion nicht aus |
| `radio` | In der gleichnamigen lokalen Tastengruppe eine Taste markieren | Eine andere angenommene Taste löst diese Markierung ab |

Für eine **normale Zahlenaktion mit Wiederholung**: `variable`, `add`, Betrag 1,
`repeat`. Verzögerung 1500 ms und Intervall 500 ms bedeuten: sofort +1, danach
nach 1,5 s weiter alle 0,5 s +1. Loslassen beendet den Repeat und setzt die Zahl
nicht zurück. Repeat und set sind ebenfalls möglich: derselbe Festwert wird
wiederholt geschrieben.

**Momentary und Pulse** verwenden beim direkten Variablenweg BOOL-Anforderungen.
Sie sind nicht das richtige Verhalten, um eine Zahl 100 einmal zu setzen.
Dafür `command` verwenden. Ein einmaliges Set ist kein Force.

Auf Page4 sind die Zeiten absichtlich anders: Repeat startet nach **600 ms**
und wiederholt alle **150 ms**, der Puls dauert **300 ms**, LongPress **800 ms**.
Die Kommentare neben den Tasten beschreiben die erwartete Wirkung vollständig.

## 6. Navigation: die Taste wechselt die Ansicht

1. **Aktionsart = navigate** wählen.
2. Zielmodul und Zielseite bzw. die angebotene Zielart einstellen.
3. Die Beschriftung so wählen, dass das Ziel erkennbar ist, z. B. `Zur Diagnose`.
4. Speichern und in Live prüfen: Die gewünschte Seite öffnet sich.

Dafür ist keine zusätzliche Python-Seitenfunktion erforderlich. Eine
Navigationsaktion ändert die Ansicht, keine Prozessvariable. Ein ausgeblendetes
oder nicht freigegebenes Ziel wird dadurch nicht zugänglich.

## 7. Python: eine vorhandene Funktion aufrufen

**Aktionsart = python** wählen und den Methodennamen der vorgesehenen Seitenfunktion
ohne Klammern eintragen. Die Funktion muss in der zur Seite gehörenden Python-Datei
vorhanden und ausführbar sein. Die Taste beschreibt den Aufruf, Python enthält
seine tatsächliche Logik. Das [Grundkonzept](#/concept) zeigt die beiden Dateien.

Eine eingetragene Python-Funktion kann auch einen eigenen Eingabeweg übernehmen.
Für die einfache direkte Variablenaktion aus Abschnitt 3 bleibt das Funktionsfeld
deshalb leer. Nicht vorsorglich mehrere Wege gleichzeitig eintragen.

## 8. Radio bei Button ist nicht dieselbe Rückmeldung wie RadioButton

Normale Buttons mit `radio` behalten je ihre Aktion und markieren die zuletzt
angenommene Taste derselben Gruppe. **RadioButton** kann dagegen seine Markierung
aus dem tatsächlich gelesenen Zahlenwert oder Bereich ableiten. Soll ein später
bewegter Slider die Markierung bestimmen, den [RadioButton-Lehrgang](#/radio-button) verwenden.

## 9. Prüfen, bevor man es als fertige Maske zeigt

- Erst Set 100, danach +5, danach −10: die Anzeige muss 95 ergeben.
- Repeat drücken und loslassen: nach Loslassen darf die Zahl nicht weiterlaufen.
- Andere Quelle ändern: die Wertanzeige muss deren tatsächlichen Wert zeigen.
- Speichern, Seite wechseln und erneut öffnen: Variable, Operation und Zeiten vergleichen.
- Bei abgewiesener Aktion die Rückmeldung lesen: Datentyp, Quelle, Funktion und Rechte prüfen.

Farbe, Text, Position, Größe und **Sichtbar ab / Bedienbar ab** bleiben eigene
Projektierungsaufgaben. Die Farbe einer Taste bestätigt noch keinen Maschinenzustand.
