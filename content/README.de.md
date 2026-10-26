# Schulungsunterlagen für Servicetechniker

Mit KonsoleLite eine verständliche Bedienmaske gestalten, Geräte als Units
zuordnen und Schrittketten lokal prüfen. Der Kurs beginnt ohne vorausgesetzte
QML-, Python- oder JSON-Programmierkenntnisse. Maschinenkenntnisse der Teilnehmer
sind ausdrücklich erwünscht: Sie bestimmen, welche Rückmeldung ein Ziel
wirklich bestätigt und welche Bedingungen vor einer Aktion gelten müssen.

**Arbeitsfassung vom 26.10.2026, Softwarestand 1.44.** Zwei Teile mit
je zwei Tagen; Richtwert fünf Stunden Arbeitszeit pro Tag zuzüglich Pausen.
Kurze Erklärung, gemeinsames Vormachen, selbst ausführen und gegenseitig
erklären wechseln sich ab. Die Unterlagen begleiten die Übungen, nicht umgekehrt.

## Ablage und Trennung von der Konsole

Der vorgesehene Lernort ist die eigenständige Schulungswebsite aus dem
[öffentlichen Schulungs-Repository](https://github.com/dasisteinname-de/Konsole-Lite-Schulung).
Hierhin gehören Kurse, Bildfolgen und Browser-Lernmodelle, nicht die privaten
Softwarequellen. Die eigentliche Konsole bleibt auf Bedienung und Diagnose
konzentriert. Im fünften Modul bleiben genau drei
Sandkasten-Seiten: Seite 1 mit den vorhandenen Schrittketten, Seiten 2 und 3
zunächst leer und frei projektierbar.
Die übrigen integrierten Trainingsseiten entfallen; die Website ist nicht auf
drei Seiten begrenzt.
Website und Übungen benötigen keine Verbindung zu einer PLC.

## Lernweg über vier Tage

| Teil | Tag | Schwerpunkt | Eigenes Ergebnis |
| --- | --- | --- | --- |
| [Basic](#/basic) | 1 | Konsole bedienen, Kursseite vorbereiten, Bild und BMK LED | Verstandene Navigation und gespeicherte Sensorübersicht |
| Basic | 2 | Grundelemente, Anzeigevariablen und Maskenaufbau | Selbst gestaltete, verständliche Bedienmaske |
| [Fortgeschrittene](#/advanced) | 1 | Definitionen, Zuordnung und Wertrevisionen | Eigene Gerätezuordnung und geprüfte Änderungsübung |
| Fortgeschrittene | 2 | Anwendung zusammensetzen und Fehler eingrenzen | Maske, Hauptkette und dokumentierter LOCAL-Test |

Nach dem Kurs können Teilnehmer eine Anwendung projektieren, ihre gespeicherten
Verknüpfungen erklären und die Schrittkette offline prüfen. Eine Freigabe für
reale Bewegung ist ein gesonderter Schritt, nicht das Ergebnis des Kurses.

**Die Teile bleiben getrennt:** Basic beginnt mit Konsolenbedienung und Navigation,
danach folgen Modul-/Seitenprojektierung, F1–F8 und die 17 Grundelemente im QML
Editor. Units, CALL, CALL SK und Schrittkettenlogik beginnen erst bei
Fortgeschrittene. Dort kommen Sequence und Sequence Viewer zum Abschluss hinzu,
nachdem die Teilnehmer die dargestellten Abläufe selbst aufgebaut haben.

## Bildunterlagen für Basic

Die [BMK-LED-Bildfolge](#/bmk) zeigt den Bedienweg vollständig vom
Einfügen bis zum Wiederöffnen. Die [Bildkarten der Grundelemente](#/elements)
enthalten für alle siebzehn Grundelemente Aufnahme, Arbeitsschritte und Kontrolle.
Hintergrundmagazin Seite 1 dient als gemeinsames Maskenbeispiel. Es gibt bewusst
keine feste Seitengrenze: Ein Bild mit erklärtem Bedienziel ist wichtiger als
ein möglichst kurzes Inhaltsverzeichnis.

Weitere detaillierte Bildfolgen je Element und ein separat geprüftes komplettes
Übungsprojekt bleiben Ausbauaufgaben. Fortgeschrittene ist weiterhin ein
Kursentwurf mit Übungen, noch keine vollständig bebilderte Teilnehmerfassung.

## Die Werkzeuge in einem Blick

| Werkzeug | Aufgabe | Was bleibt gespeichert |
| --- | --- | --- |
| QML Editor | Maske mit der Maus gestalten und Aktionen auswählen | Seite und Eigenschaften ihrer Elemente |
| Interface und Units Editor | Grundtyp beschreiben und konkrete Geräte zuordnen | Rollen, Aktionen, Unit-Parameter und explizites Mapping |
| Sequence Editor | Schritte, Bedingungen und Unit-Aufrufe gestalten | Bibliothekskette und Hauptkette |

**Grundtyp** beschreibt die wiederverwendbare Schnittstelle und erlaubte Aktionen.
**Unit** bezeichnet ein konkretes Gerät mit Nummer und Zuordnung. Die passende
**Bibliothekskette** beschreibt den Ablauf für diesen Typ. Ein **CALL SK** wählt
die konkrete Unit und eine Aktion in der Hauptkette. Ein Button kann dieselbe
Unit-Aktion projektieren; er enthält nicht noch einmal deren Befehlslogik.

## Kurs vorbereiten

- Pro Teilnehmer eine eigene Projektkopie und einen funktionsfähigen PC-Arbeitsplatz
  bereitstellen. Nur OFFLINE/LOCAL verwenden; keine Maschinenverbindung einrichten.
- Der Dozent prüft vor Kursbeginn QML-Vorschau, Speichern/Wiederöffnen und die
  gelieferten Beispiele CylinderCoded, CylinderBool, ServoAxis sowie UnitActions.
- Für Basic eine eigene Kursseite in der Projektkopie vorbereiten. Die HGM-Seite 1
  als Vorlage verwenden; ihre Originalelemente nicht löschen. Die Übungen
  benötigen kein integriertes Schulungszentrum. Vor dem Kopieren einer
  Übung eigene Arbeit sichern. Geschützte Seiten bleiben unverändert.
  Beispielketten erst im Fortgeschrittenenteil unter eigenem Namen speichern.
- Die [CALL SK Kurzbedienung](#/quickguide) bereitlegen.
  Begriffe und Grenzen der aktuellen Kursfassung stehen unter [Begriffe & Grenzen](#/reference). Die vollständigen technischen Projekt-Handbücher sind nicht Bestandteil dieser öffentlichen Erstfassung.

## Was in dieser Kursfassung noch nicht als fertig gelehrt wird

Im lokalen Simulator 1.44 bleibt **Timeout quittieren** am gehaltenen Schritt
und beginnt einen bewussten neuen Versuch. Erledigte Aufrufe werden nicht
wiederholt; **Ablauf zurücksetzen** ist davon getrennt. Ein Taster ergänzt die
NC-Start-ComboBox. Die [Kurzbedienung](#/quickguide) zeigt die Reihenfolge.
Die vollständige Aktionsparametrierung der festen F1–F8-Tasten ist zurückgestellt;
Basic unterscheidet deren Beschriftung von der vorhandenen Funktion.

Unit-Buttons lassen sich projektieren, aber die native gemeinsame Ausführung
von Button und CALL ist noch nicht vollständig in die Maschinenkonsole eingebunden.
Ohne angeschlossenen Ausführungsowner muss die Unit-Taste eine Sperre melden.
Deshalb wird im Kurs die Maske projektiert und die Kette separat LOCAL geprüft;
ein vollständiger Maske-bis-Maschine-Funktionstest ist kein zugesagtes Kursziel.

Vor einer späteren Maschinenschulung müssen Softwarestand, reale Freigaben,
Schreibbesitz und Wiederanlaufregeln geprüft und diese Unterlagen angepasst werden.
