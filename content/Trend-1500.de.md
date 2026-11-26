# Trend-/XY-Diagramm: Werte aufzeichnen und untersuchen

Ein einzelner Zahlenwert zeigt den Zustand jetzt. Ein **Trend-/XY-Diagramm**
macht zusätzlich den Verlauf sichtbar: Wie verändert sich ein Wert? Wann
durchläuft er einen farbigen Bereich? Welche Probe liegt am Cursor?
Dieses Kapitel zeigt das Element im QML Editor 1.50.0 an einer selbst
projektierten Vakuum-Spannstelle. Zum Nachbauen eine eigene LOCAL-Kurskopie
verwenden; die Übung enthält keine Maschinenbefehle.

## Das Ergebnis zuerst: Vakuum-Spannstelle

![Vakuum-Spannstelle mit türkisfarbigem Istwert, farbigen Zonen, Sollwertlinie und aktivem Cursor](images/trend-vakuum-anwender-1500.png)

Diese unveränderte Aufnahme hat ein Anwender aus seinem aktuellen Projekt
bereitgestellt. Sie zeigt einen **Zeittrend**: waagerecht Sekunden, senkrecht
den dargestellten Vakuumwert von **−1000 bis 0 mBar**. In dieser Beispielskala
bedeutet ein stärker negativer Wert einen größeren Unterdruck.

### So liest du die Aufnahme

| Bildbereich | Was du darin erkennst |
| --- | --- |
| Türkise Kurve | Der dargestellte Istwert fällt ungefähr bis −900 mBar und steigt anschließend wieder in Richtung 0. Kleine Schwankungen bleiben im Verlauf erkennbar. |
| Farbige Flächen | Die projektierten Bereiche heißen hier **OK**, **Warnung** und **Fehler**. Sie geben dem Verlauf einen sichtbaren Bezug. |
| Weiße Punktlinie | Der **Sollwert** liegt im Beispiel bei −800 mBar. Die Kurve lässt sich unmittelbar damit vergleichen. |
| Weiße senkrechte Linie | Der eingeschaltete **Cursor** steht bei 62,20 s; darunter wird für diese Probe **−2,00 mBar** angezeigt. |
| Legende rechts oben | **Istwert** benennt den Kanal und zeigt seinen angezeigten Wert. |
| Zwei Bedienzeilen | Oben werden Aufnahme und Aufnahmestatus bedient; darunter Live/Halten, Maßstab, Verschieben, Cursor und Vollbild. |

**Drei Dinge zum Ausprobieren:** Mit **Halten** einen auffälligen Abschnitt
festhalten, ihn mit **+ / −** vergrößern und mit dem **Cursor** einzelne
erfasste Proben untersuchen. Eine gestartete Aufnahme läuft bei Halten weiter.
**Pause** unterbricht dagegen die Erfassung. Die Aufnahme zeigt die Bedienung
und Darstellung; aus der Kurvenform allein lässt sich keine Fehlerursache an
einer realen Spannstelle ableiten.

## Einen Trend im QML Editor vorbereiten

Die Eigenschaften besitzen jetzt **sechs statt neun Abschnitte**. Legende,
Messcursor, Datenpuffer und Dateiprotokoll stehen gemeinsam unter
**Anzeige, Puffer und Protokoll**. Kanäle, Aufnahmebefehle, Achsen, Zonen und
Grenzlinien bleiben eigene Aufgaben. Das geöffnete Formular erhält die Höhe
seiner Felder; lange Eigenschaften werden in der äußeren Tabelle gescrollt.
Ein Abschnittswechsel übernimmt oder speichert keine Eingaben.

1. Den richtigen Projektordner und eine editierbare Übungsseite öffnen.
2. Eine numerische LOCAL-Übungsvariable im Interface Editor vorbereiten und
   speichern. Für diese Übung stellt sie einen **Vakuumwert in mBar**
   von −1000 bis 0 dar, passend zur Aufnahme. Das ist eine Übungsskala,
   keine Vorgabe für einen realen Sensor.
3. In der Elementbibliothek **Trend-/XY-Diagramm** einfügen, platzieren und
   genügend Raum für Kurve, Legende und Bedienleiste lassen.
4. Rechts **Trend-/XY-Eigenschaften → Kanäle → + Hinzufügen** öffnen. Den
   Kanal beispielsweise **Istwert** nennen, seine Farbe wählen und
   unter **Variable / Grenzlinie** über **…** die vorbereitete Zahl auswählen.
5. **Gültigkeit BOOL (optional)** zunächst leer lassen. Ohne Qualitätsquelle
   bleibt ein numerischer Wert **ungeprüft**. Eine projektierte Qualitätsquelle
   muss bekannt und wahr sein; sonst entsteht eine Datenlücke.
6. Unter **Achsen und Zeitfenster** die Darstellung **Trend**, **Einheit Y**
   `mBar`, **Minimum Y** −1000, **Maximum Y** 0 und **Zeitfenster [s], bis 72000**
   auf 60 einstellen. **Y automatisch** für die feste Übungsskala ausschalten.
   Die X-Achse kommt aus der internen Uhr; eine X-Variable ist nicht nötig.
7. Unter **Anzeige, Puffer und Protokoll** mit **Erfassung [ms]** 100, **Zeichentakt [ms]** 250
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

### Kanal und Messquelle auswählen

![Aktuelle Kanal-Eigenschaften: Name, Messquelle, optionale Qualität und X-Variable sowie Farbe und Linienbild](images/trend-vakuum-parameter-detail-kanaele-local-1500.png)

Diese und die folgenden Eigenschaftenausschnitte stammen aus dem aktuellen
Editor in einer isolierten LOCAL-Übungskopie. Die vorbereitete Quelle kann in
deinem Projekt anders heißen; wähle deine eigene numerische Übungsvariable.
Im Zeittrend bleibt **Variable X (XY)** unbenutzt. Alle Felder des Kanals sind
ohne zusätzliche innere Vertikalrolle sichtbar.

### Anzeige und Aufzeichnung an einem Ort

![Gemeinsamer Abschnitt für Legende, Messcursor, Abtastung, RAM und optionales Dateiprotokoll](images/trend-vakuum-parameter-detail-puffer-local-1500.png)

**Legende** und **Messcursor verfügbar** steuern die Anzeige. **RAM-Ring [MiB]**
begrenzt den flüchtigen Speicher; **Protokolldauer [h]** begrenzt dagegen die
optionale Dateiablage. Das sind unterschiedliche Einstellungen. Für den ersten
Versuch **Dateiprotokoll aktiv** ausgeschaltet lassen.

## Farbige Zonen und eine Sollwertlinie

Unter **Zonen und Grenzwerte** über **+ Hinzufügen** drei feste Übungszonen
anlegen. Die Signalbindungen ihrer Grenzen bleiben leer.

| Name | Untergrenze | Obergrenze | Farbe |
| --- | ---: | ---: | --- |
| Fehler · Beispiel | −500 | 0 | Rot |
| Warnung · Beispiel | −600 | −500 | Gelb |
| OK · Beispiel | −1000 | −600 | Grün |

![Zonenformular mit Obergrenze über Untergrenze sowie Farbe und Deckkraft](images/trend-vakuum-parameter-detail-zonen-local-1500.png)

Die räumliche Reihenfolge hilft beim Nachbauen: **Obergrenze** steht im Formular
über **Untergrenze**. Eine ausdrücklich gewählte Signalbindung liefert die
jeweilige Grenze dynamisch; für die feste Übung bleiben diese Bindungen leer.

Unter **Grenzlinien · nur Anzeige** eine Linie **Sollwert** mit **Wert**
−800 hinzufügen. Name, Farbe und **Deckkraft 0…1** der Zonen so wählen, dass
die Kurve lesbar bleibt. Speichern und die Darstellung erneut prüfen.

![Sollwertlinie mit festem Beispielwert −800 mBar, optionaler Signalbindung und punktierter Linienart](images/trend-vakuum-parameter-detail-sollwert-local-1500.png)

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

**Übung:** LOCAL-Werte 0 → −250 → −500 → −600 → −800 → −900 → −600 → −250 → 0
jeweils einige Sekunden halten. Während **Halten** den Wert weiter ändern,
danach **Live** wählen und die weiter erfasste Historie prüfen. **Pause**,
einige Sekunden warten, **Start**: Die Lücke muss sichtbar bleiben.
Eine nicht lesbare Quelle ergibt **KEINE DATEN**, keinen erfundenen Nullwert.

## Einen Ausschnitt mit dem Cursor untersuchen

![Vergrößerter Zeittrend mit Cursorprobe bei 44,03 s und −736 mBar; die Legende zeigt −848 mBar](images/trend-vakuum-cursor-anwender-1500.png)

Im zweiten Anwenderbild ist der Zeitbereich **33,8 bis 56,3 Sekunden**
sichtbar. Die Kurve lässt sich dadurch genauer untersuchen als im großen
Überblick. Besonders wichtig sind die beiden unterschiedlichen Zahlen:

| Anzeige | Bedeutung im Bild |
| --- | --- |
| Legende oben rechts: **−848,00 mBar** | Der dort angezeigte Kanalwert. |
| Cursor unten: **44,03 s · −736,00 mBar** | Die ausgewählte historische Probe an der weißen senkrechten Linie. |

Die Zahlen müssen nicht übereinstimmen: Der Cursor untersucht einen bestimmten
Zeitpunkt im Verlauf. **100%** setzt den Maßstab zurück; mit **◀ / ▶** lässt
sich der sichtbare Ausschnitt verschieben. **Vollbild** vergrößert die Ansicht
desselben Diagramms. Die zweite Aufnahme zeigt ebenfalls einen **Zeittrend**,
keine XY-Darstellung.

**Selbst ausprobieren:** Einen bereits erfassten RAM-Verlauf mit **Halten** in
Ruhe betrachten, mit **+** vergrößern und **Cursor** einschalten. Zwei
unterschiedliche erfasste Zeitpunkte auswählen und die Probe unten ablesen.
Danach **100%** und **Live** wählen. Bei laufender Aufnahme wird während
Halten weiter erfasst; mit Pause wäre die Erfassung unterbrochen.

## XY und optionale Aufnahmebefehle

**XY** verwendet unter **Kanäle → Variable X (XY)** ein zweites numerisches
Signal je Kanal. Unter **Achsen und Zeitfenster** dann X-Grenzen und Einheit X
einstellen. XY benötigt keine Uhrvariable. Der Cursor zeigt eine tatsächlich
erfasste Probe samt Zeitpunkt; er erfindet keine Zwischenwerte.

Ein mögliches **zusätzliches LOCAL-Beispiel** ist **Sollwert / Istwert · Vakuum**:
X erhält die vorbereitete numerische Sollwertvariable, Y den Istwert. Beide
Achsen können für diese Übung −1000 bis 0 mBar zeigen. Ein Punkt beschreibt
dann die beiden Werte derselben erfassten Probe, nicht den Zeitverlauf.
Bei konstantem Sollwert liegen die Punkte senkrecht übereinander. Für eine
sichtbare Abhängigkeit beide LOCAL-Werte bewusst verändern. Die Aufnahme oben
bleibt ein Zeittrend und ist kein XY-Beleg.

Optionale **Start / Fortsetzen · BOOL**, **Pause · BOOL (optional)** und
**Stop · BOOL** sind Lesebindungen für den Recorder. Ein beobachteter Übergang
`False → True` löst den Befehl aus. Dauerhaftes HIGH wiederholt ihn nicht;
anfängliches HIGH und eine unbekannte Quelle starten nicht selbsttätig.
Bei gleichzeitigen Flanken gilt **Stop vor Pause vor Start**. Der unabhängige
Aufnahmebeginn **Beim ersten Öffnen starten** bleibt eine eigene Auswahl.
Für den ersten Versuch genügen die eingebauten Aufnahmetasten.

## Optional: Dateiprotokoll als Minutenring

Erst nach dem RAM-Versuch unter **Anzeige, Puffer und Protokoll** das Feld
**Dateiprotokoll aktiv** einschalten.
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


## Lesbare QML-Konfiguration (1.52.0)

Die literale `trendConfig` wird beim Speichern als eingerücktes JSON-Objekt
ausgegeben: eine Schlüssel-Wert-Zuordnung pro Zeile, verschachtelte Objekte
und Arrays mit eigenen Zeilen und passenden Klammern. Erneutes Speichern
ändert die Werte nicht. Berechnete QML-Ausdrücke werden nicht umgedeutet.

## Kurze Sensoraussetzer bewusst überbrücken · 1.52.4

**Glättung aktivieren** ist eine zusätzliche Projektierungsoption, Standard aus.
**Glättungszeit [ms]** ist von 100 bis 5000 ms einstellbar, Standard 500 ms.
Bei aktivierter Option wird der letzte echte Wert bei fehlendem Eingang noch
für diese Zeit aufgenommen. Linie, Cursor und CSV bleiben dabei durchgehend;
Qualitätscode **3** und „Glättung“ kennzeichnen gehaltene Werte. Neue echte Werte
werden sofort übernommen. Nach Ablauf gilt „keine Daten“, niemals ein erfundener
Nullwert. Ohne vorangegangene Probe und nach Pause wird nichts gehalten.

Der Servicetechniker entscheidet bei der Maskenerstellung: langsamer Sensor mit
kurzen Aussetzern, z. B. 1200 ms; zeitkritischer Istwert ohne zusätzliches Halten,
Häkchen aus. Dies ist eine Ausfallverzögerung, kein Mittelwert und kein Force.
