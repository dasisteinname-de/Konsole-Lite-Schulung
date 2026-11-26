# Rezepturen Schritt für Schritt

**Eine Definition beschreibt die Felder. Ein Datensatz enthält ihre Werte.**
Eine Arbeitskopie ist der gerade bearbeitete Stand. Diese drei Begriffe zuerst
trennen; dann werden die Bedienelemente der Rezepturansicht verständlich.

| Ebene | Beispiel | Aufgabe |
| --- | --- | --- |
| Definition | „Schmierung“ mit BOOLEAN-Freigabe, Menge, Zeit und Einheit | Namen, Datentypen, Defaults, Grenzen und Bindungen festlegen |
| Datensatz | „Produkt A“, „Produkt B“ | Je einen passenden Wertesatz speichern |
| Arbeitskopie | „Produkt A“ mit noch nicht gespeicherter Menge | Änderungen prüfen und bewusst speichern oder verwerfen |
| Maschinenwerte | Aktuell gelesene Werte des gewählten Ziels | Lesen und vergleichen; Übernahme ist eine getrennte Aktion |

## 1. Die beiden Rezepturenseiten finden

Im Modul **Rezepturen** gibt es **Rezepturen definieren** und **Rezeptur-Datensätze**.
Die erste Seite beschreibt die Struktur, die zweite bearbeitet konkrete Sätze.
Für das Nachbauen eine eigene LOCAL-Kurskopie verwenden; Bearbeiten setzt die
für das Projekt vorgesehenen Rechte voraus.

## 2. Eine kleine Definition anlegen

1. **Rezepturen definieren → + Neue Rezeptur** öffnen.
2. Eine eigene **Rezeptur-ID** und einen lesbaren **Text** angeben.
   Die ID ist eine technische Zuordnung; der Text ist die Beschriftung.
3. Zunächst ein einziges Feld mit **+** anlegen, z. B. eine Menge.
4. **Datentyp**, **Default**, Einheit und passende Grenzen festlegen.
   BOOLEAN ist true/false, eine Ganzzahl bleibt eine Ganzzahl.
5. Nur bei einem vorbereiteten Ziel die Adresse unter **PLC-Variable wählen …**
   oder **CFG-Parameter wählen …** übernehmen. Ein ganzes Struktur- oder Arrayobjekt
   ist kein einzelnes skalares Rezepturfeld.
6. **Struktur speichern** wählen. Die Definition ist nun gespeichert;
   dieser Schritt schreibt keine Werte in die Maschine.

Eine neue Definition kann auch **Aus Parameterliste erstellen** verwenden.
Das übernimmt die Feldstruktur, nicht automatisch aktuelle Maschinenwerte als
neue Defaults. Den Weg erklärt [CFG · Parameterlisten](#/cfg-1500).

## 3. Einen Datensatz in der Projektablage speichern

1. **Rezeptur-Datensätze** öffnen und die eigene Definition wählen.
2. **+ Neu** erzeugt einen Satz aus den Defaults.
3. Name und Nummer vergeben, Werte in der **Arbeitskopie** bearbeiten.
4. **Speichern** schreibt den Satz in die lokale SQLite-Ablage.
5. **Speichern unter …** erstellt bei Bedarf einen eigenen zweiten Datensatz.
6. Zwischen den beiden Sätzen wechseln und die Werte vergleichen.

**Speichern ist keine Maschinenübernahme.** Das ist eine der wichtigsten
Unterscheidungen dieses Elements. Die Auswahl in der Liste und eine noch
ungespeicherte Arbeitskopie sind ebenfalls getrennte Zustände.

## 4. Was die Schaltflächen bedeuten

| Schaltfläche | Wirkung |
| --- | --- |
| `+ Neu` | Neue Arbeitskopie mit Defaultwerten |
| `Speichern` | Arbeitskopie in der Datensatzablage speichern |
| `Speichern unter …` | Eigenen neuen Datensatz erstellen |
| `Umbenennen` | Den vorhandenen Datensatz umbenennen |
| `Neu laden` | Gespeicherten Stand erneut in die Arbeitskopie laden |
| `Vergleichen` | Maschine lesen, ohne die Arbeitskopie zu ersetzen |
| `↑ Aus Maschine` | Gelesene Maschinenwerte in die Arbeitskopie übernehmen |
| `↓ In Maschine` | Ausdrückliche Übernahme mit aktuellem Vergleich und anschließender Prüfung |
| `Historie` | Frühere gespeicherte Stände anzeigen bzw. als Arbeitskopie laden |
| `Import / Export` | Datensätze über CSV austauschen |
| `Löschen` | Den gewählten Datensatz nach Bestätigung entfernen |
| `?` | Die Bedeutung der Bedienung direkt in der Ansicht lesen |

Wenn ein Wechsel ungespeicherte Arbeit verlieren würde, erscheint eine
Bestätigung. Beim ersten Lernen reichen Anlegen, Bearbeiten, Speichern,
Speichern unter und erneutes Laden vollständig aus.

## 5. Eine Rezepturansicht in die eigene Maske einbetten

Im QML Editor das Element **Rezeptur** platzieren und genügend Fläche vorsehen
(mindestens 480 × 320 Pixel). **Rezeptur-ID** wählt eine vorhandene technische
Definition; leer bietet die vorhandenen Komponenten an. Das Einfügen der Ansicht
erzeugt weder eine Definition noch einen Datensatz.

Unter **Weitere: Rezepturbedienung → Rezeptur-Bedienung** können sichtbare
Funktionen begrenzt werden. Beispiel für eine lesende Ansicht:

```json
{"delete": false, "readOnly": true}
```

Diese Optionen beschreiben die Bedienoberfläche. Die tatsächlichen Rechte
und die Zielprüfung bleiben zusätzlich wirksam. Die frühere feste
Clamping-Spannstellenmaske und die allgemeine Komponentenrezeptur sind
unterschiedliche Ansichten; eine neue Rezeptur-ID ist kein neuer Clamping-Typ.

## 6. Häufige Fragen

| Frage | Erklärung |
| --- | --- |
| Warum ist die Ansicht leer? | Zuerst prüfen, ob eine passende Definition und Datensätze existieren. Das Element erfindet keine Daten. |
| Warum ändert Speichern die Maschine nicht? | Es speichert den Datensatz. „In Maschine“ ist ein eigener Weg. |
| Warum steht ein anderer Wert in „Maschine“ und „Arbeitskopie“? | Die beiden Spalten machen diesen Unterschied ausdrücklich sichtbar. |
| Warum verlangt die Übernahme einen aktuellen Vergleich? | Zwischenzeitliche Änderungen anderer Schreiber sollen erkannt werden. |
| Warum ist das Bearbeiten gesperrt? | readOnly-Option, Feldschutz, Rechte und Zustand der Definition prüfen. |

Beim Unterricht immer benennen: **Welche Definition? Welcher Datensatz?
Welche Arbeitskopie? Welches Ziel?** Damit bleibt auch ein umfangreicher
Rezeptursatz nachvollziehbar.
