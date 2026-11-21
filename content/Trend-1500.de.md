# Trend-/XY-Diagramm: Werte aufzeichnen und untersuchen

Diese Ergänzung beschreibt das Element **Trend-/XY-Diagramm** im QML Editor
1.50.0. Lernziel: einen lokalen Messwert mit Zeitachse darstellen, Aufnahme
und Ansicht getrennt bedienen und ungültige Daten erkennen. Die Übung verwendet
eine eigene LOCAL-Kurskopie. Sie enthält keine Maschinenbefehle.

## Einen Trend im QML Editor vorbereiten

1. Den richtigen Projektordner und eine editierbare Übungsseite öffnen.
2. Eine numerische LOCAL-Übungsvariable im Interface Editor vorbereiten und
   speichern. Für diese Übung stellt sie einen **Unterdruckbetrag in mbar**
   von 0 bis 300 dar: 0 bedeutet kein Unterdruck, größere Zahlen stärkeren
   Unterdruck. Das ist eine Übungsskala, keine Vorgabe für einen realen Sensor.
3. In der Elementbibliothek **Trend-/XY-Diagramm** einfügen, platzieren und
   genügend Raum für Kurve, Legende und Bedienleiste lassen.
4. Rechts **Trend-/XY-Eigenschaften → Kanäle → + Hinzufügen** öffnen. Den
   Kanal beispielsweise **Unterdruckbetrag** nennen, seine Farbe wählen und
   unter **Variable / Grenzlinie** über **…** die vorbereitete Zahl auswählen.
5. **Gültigkeit BOOL (optional)** zunächst leer lassen. Ohne Qualitätsquelle
   bleibt ein numerischer Wert **ungeprüft**. Eine projektierte Qualitätsquelle
   muss bekannt und wahr sein; sonst entsteht eine Datenlücke.
6. Unter **Achsen und Zeitfenster** die Darstellung **Trend**, **Einheit Y**
   `mbar`, **Minimum Y** 0, **Maximum Y** 300 und **Zeitfenster [s], bis 72000**
   auf 60 einstellen. **Y automatisch** für die feste Übungsskala ausschalten.
   Die X-Achse kommt aus der internen Uhr; eine X-Variable ist nicht nötig.
7. Unter **Datenpuffer** mit **Erfassung [ms]** 100, **Zeichentakt [ms]** 250
   und **RAM-Ring [MiB]** 8 beginnen. Das sind lokale Ausgangswerte, keine
   zugesicherte PLC-Abtastrate.
8. Unter **Aufnahme · Start / Pause / Stop → Aufnahmebeginn** bewusst
   **Auf Start warten (manuell / BOOL)** wählen. Die drei BOOL-Bindungen leer
   lassen. **Dateiprotokoll aktiv** bleibt für den ersten Versuch aus.
9. **Speichern / Strg+S**, Seite wieder öffnen und Kanal, Quelle und Skalen
   vergleichen. Speichern übernimmt auch die offenen Trend-Felder.
   **Trend-Eigenschaften übernehmen** übernimmt nur in den Seitenentwurf.
10. **PC Live** öffnen und **Start** drücken. Den LOCAL-Wert verändern und
    prüfen, ob Legende und Kurve dieselbe Quelle zeigen.

## Farbige Zonen und eine Sollwertlinie

Unter **Zonen und Grenzwerte** über **+ Hinzufügen** drei feste Übungszonen
anlegen. Die Signalbindungen ihrer Grenzen bleiben leer.

| Name | Untergrenze | Obergrenze | Farbe |
| --- | ---: | ---: | --- |
| Niedriger Übungswert | 0 | 150 | Rot |
| Warnbereich der Übung | 150 | 200 | Gelb |
| Oberer Übungsbereich | 200 | 300 | Grün |

Unter **Grenzlinien · nur Anzeige** eine Linie **Übungssollwert** mit **Wert**
250 hinzufügen. Name, Farbe und **Deckkraft 0…1** der Zonen so wählen, dass
die Kurve lesbar bleibt. Speichern und die Darstellung erneut prüfen.

Diese Grenzen färben die Anzeige. Sie lösen weder beim Hochlauf noch bei
fallendem Wert einen Maschinenstopp aus. Die Laufzeit kennzeichnet das als
**Maschinengrenze NICHT ANGEWENDET**. Eine reale Warn-/Stopplogik gehört in
die dafür zuständige PLC-/NC-Ebene und wird hier nicht projektiert.

## Aufnahme und Ansicht unterscheiden

| Bedienung | Beobachtbares Ergebnis |
| --- | --- |
| **Start** | Beginnt eine Sitzung oder setzt eine pausierte Aufnahme fort. |
| **Pause** | Unterbricht die Erfassung; die Fortsetzung hinterlässt eine Lücke. |
| **Stop** | Beendet die Aufnahme, auch aus Pause; ein aktives Dateiprotokoll sichert den Restpuffer. |
| **Live / Halten** | Ändert nur die Ansicht. Bei Halten läuft eine gestartete Aufnahme weiter. |
| **+ / − / 100% / ◀ / ▶** | Vergrößert, setzt zurück oder verschiebt den Zeitausschnitt. |
| **Cursor / Vollbild** | Untersucht erfasste Proben oder vergrößert die Ansicht desselben Diagramms. |

Die Seite muss einmal geöffnet werden, damit ihr Recorder registriert ist.
Danach laufen Aufnahme und Befehlsbeobachtung auch beim Seiten-/Modulwechsel
weiter. Wiederöffnen erzeugt keinen zweiten Recorder. Der RAM-Verlauf bleibt
flüchtig und ist auf höchstens 20 Stunden begrenzt.

**Übung:** LOCAL-Werte 0 → 50 → 150 → 250 → 300 → 250 → 200 → 150 → 100
jeweils einige Sekunden halten. Während **Halten** den Wert weiter ändern,
danach **Live** wählen und die weiter erfasste Historie prüfen. **Pause**,
einige Sekunden warten, **Start**: Die Lücke muss sichtbar bleiben.
Eine nicht lesbare Quelle ergibt **KEINE DATEN**, keinen erfundenen Nullwert.

## XY und optionale Aufnahmebefehle

**XY** verwendet unter **Kanäle → Variable X (XY)** ein zweites numerisches
Signal je Kanal. Unter **Achsen und Zeitfenster** dann X-Grenzen und Einheit X
einstellen. XY benötigt keine Uhrvariable. Der Cursor zeigt eine tatsächlich
erfasste Probe samt Zeitpunkt; er erfindet keine Zwischenwerte.

Optionale **Start / Fortsetzen · BOOL**, **Pause · BOOL (optional)** und
**Stop · BOOL** sind Lesebindungen für den Recorder. Ein beobachteter Übergang
`False → True` löst den Befehl aus. Dauerhaftes HIGH wiederholt ihn nicht;
anfängliches HIGH und eine unbekannte Quelle starten nicht selbsttätig.
Bei gleichzeitigen Flanken gilt **Stop vor Pause vor Start**. Der unabhängige
Aufnahmebeginn **Beim ersten Öffnen starten** bleibt eine eigene Auswahl.
Für den ersten Versuch genügen die eingebauten Aufnahmetasten.

## Optional: Dateiprotokoll als Minutenring

Erst nach dem RAM-Versuch unter **Dateiprotokoll · Minutenring** einschalten.
Einen eigenen Übungsordner auf dem Zielgerät wählen; die relative Vorgabe
`KonsoleLite/DATA/Trend` bezieht sich auf den gewählten Projektordner.
**Protokollname** und **Protokolldauer [h]** prüfen; Standard sind 20 Stunden.
Dateiaufbewahrung und RAM-Zeitfenster sind unabhängig.

Es entstehen CSV-Minutenblöcke und Sitzungsmetadaten, kein einzelnes Groß-CSV.
Nach **Stop** bei aktivem Protokoll erst **Restpuffer wird gesichert…**, dann
**Aufnahme gestoppt** und den angezeigten Ordner prüfen. Leere ungültige
Zahlenfelder dürfen nicht als 0 ausgewertet werden. Bei einem Datei-/Platzfehler
die sichtbare Diagnose prüfen; keine lückenlose Aufzeichnung behaupten.
Ein mehrtägiger Lauf auf dem Zielgerät ist durch diese kurze Übung nicht belegt.

**Abschlussprüfung:** Bleiben Quellen und Eigenschaften nach Speichern und
Wiederöffnen erhalten? Kann ein Kollege Halten, Pause und Stop unterscheiden?
Erklärt er, warum eine rote Zone keine Maschinenfreigabe und kein Stoppsignal ist?

Für die Übernahme gespeicherter Seiten gilt das vorhandene Kapitel
[Vom Editor auf die TNC](#/transfer-1500).
