# 6 · Unit-Taste, Sequence und Sequence Viewer

Jetzt kommen die Ablaufanzeigen in die Maske. Sie gehören ans Ende von
Fortgeschrittene: Erst verstehst und prüfst du den Ablauf, dann projektierst
du seine Darstellung. Basic bleibt bei Konsolenbedienung und 17 Grundelementen.

## Unit-Aktion: zuerst die Live-Ansicht

![17a. Live-Offline: Eine Unit-Taste in der vollständigen Konsole mit Navigation und acht festen F-Tasten](images/advanced-17-unit-button-live.png)

Diese Taste ist ein normales Button-Element mit einer gespeicherten
Unit-Aktionsauswahl. Die festen F1–F8 am rechten Rand sind andere Elemente;
deren vollständige Aktionsprojektierung wird hier nicht als fertig dargestellt.

### Danach im Editor zuordnen

![17b. Entwurf: Rechts sind ActionType Unit sowie Gerät, Aktion und Überwachung direkt in den Eigenschaften sichtbar](images/advanced-17-unit-button-entwurf.png)

1. In deiner freien Kursseite einen **Button** aus der Bibliothek einsetzen.
2. Auswählen, verständlich beschriften und unter den Aktionseigenschaften
   **ActionType: Unit** wählen.
3. In der eingeblendeten Auswahl Unit, Aktion und Überwachung festlegen.
   Zusätzliche deklarierte Parameter erscheinen nur bei Bedarf.
4. **Zuordnung übernehmen (kein Start)** wählen, speichern und wieder öffnen.
5. Gespeicherte Unit und Aktion erneut kontrollieren; kein QML- oder Python-
   Skript in ein Freitextfeld eintragen.

**Erwartung:** Die Konfiguration bleibt erhalten. Ohne angeschlossenen
Ausführungsowner meldet die Taste beim Betätigen eine Sperre, keinen
angeblichen Erfolg. Diese Übung prüft die Projektierung, nicht die native
Maschinenausführung. Die Kette wurde im Sequence Editor separat LOCAL geprüft.

## Sequence: eine feste Kette anzeigen

![18a. Live-Offline: Die fest gewählte Kurskette wird mit Schritten und Bedingungen dargestellt; fehlende Live-Daten bleiben ausdrücklich unbekannt](images/advanced-18-sequence-live.png)

Sequence passt, wenn diese Seite einen fest zugeordneten Ablauf zeigen soll.
Auf dem Bild fehlen angeschlossene Live-Daten. Deshalb sind UNKNOWN und der
Hinweis auf die fehlende Verbindung richtig, nicht ein scheinbar aktiver
grüner Schritt. Das Öffnen der Anzeige startet die Kette nicht.

### So entsteht diese Ansicht

![18b. Entwurf: Sequence auswählen und rechts die feste sequenceFile der eigenen Kurskette einstellen](images/advanced-18-sequence-entwurf.png)

1. **Sequence** aus der Bibliothek einsetzen und die Fläche passend groß ziehen.
2. Unter **sequenceFile** die eigene gespeicherte Kette auswählen. Die
   Kursaufnahme verwendet KursUnits; bei dir den tatsächlich gespeicherten
   Dateinamen benutzen, nicht den Bildtext abschreiben.
3. Kompakt-/Detaildarstellung und gewünschte Ansichtseigenschaften prüfen.
4. Speichern, Live-Vorschau öffnen und Namen sowie Schrittstruktur vergleichen.
5. Ohne Live-Backend ausdrücklich den Hinweis auf fehlende Daten zeigen.

Die F1–F8 **innerhalb** der Ablaufdarstellung sind deren Ansichtsbedienung.
Sie sind von den festen Konsolentasten ganz rechts zu unterscheiden. Ansicht
wechseln oder den aktiven Schritt verfolgen ist kein Start-/Stop-Befehl.

## Sequence Viewer: den Ablauf auswählen

![19a. Live-Offline: Der Viewer bietet Modul- und Kettenauswahl über der Beobachtungsfläche](images/advanced-19-viewer-auswahl.png)

Beim Viewer wählt der Bediener den Ablauf aus einem lesenden Katalog. Zuerst
**Modul wählen**, dann **Kette wählen**. Wenn mehrere Aufrufinstanzen relevant
sind, muss auch die konkrete Instanz eindeutig ausgewählt werden. Eine
gemeinsame Definition bedeutet nicht einen gemeinsamen Zustand aller Aufrufe.

![19b. Nach der Auswahl erscheint die konkrete Kurskette; ohne frische Laufzeitdaten wird weiterhin kein aktiver Anlagenzustand behauptet](images/advanced-19-viewer-live.png)

### Den Katalog projektieren

![19c. Entwurf: Sequence Viewer verwenden und sequenceFolder auf den gewünschten lesenden Katalogbereich setzen](images/advanced-19-viewer-entwurf.png)

1. Das eigene Element **Sequence Viewer · Modul / Kette** einsetzen.
2. **sequenceFolder** auf den vorgesehenen Projektbereich einstellen, im
   Kurs beispielsweise LOCAL_EXAMPLES. Keine fremden Maschinenpfade raten.
3. Speichern und Live-Vorschau öffnen. Der Viewer beginnt ohne willkürlich
   vorausgewählte laufende Kette.
4. Modul und Kurskette auswählen. Titel und Struktur mit dem Sequence Editor
   vergleichen. Mit **Neu lesen** den Katalog bewusst aktualisieren.
5. Auswahl wechseln und prüfen, dass kein Zustand der vorherigen Auswahl als
   angeblich aktueller Zustand der neuen Kette stehen bleibt.

Die Auswahl beobachtet nur. Sie installiert keine Laufzeit, startet keine
Kette und erzeugt keine PLC-Verbindung.

## Welches Element passt?

| Bedarf | Element |
| --- | --- |
| Diese Seite gehört zu genau einer gespeicherten Kette | Sequence mit fester Datei |
| Bediener soll Modul und Kette selbst auswählen | Sequence Viewer mit Katalog |
| Bediener soll eine erlaubte Geräteaktion anfordern | Unit-Button mit getrennt geprüftem Ausführungsowner |

## Abschlusskontrolle

- [ ] Erst das Live-Zielbild erklären, dann die gespeicherten Eigenschaften zeigen.
- [ ] Unit und Aktion über die Auswahl wiederfinden, ohne Skriptwissen.
- [ ] Feste Datei und wählbaren Katalog auseinanderhalten.
- [ ] Keine Verbindung als UNKNOWN zeigen, nicht als „alles bereit“.
- [ ] Anzeigenavigation von einer tatsächlich wirksamen Bedienhandlung unterscheiden.

[Zum Abschlussauftrag und Prüfblatt →](#/advanced/abschlussaufgabe)
