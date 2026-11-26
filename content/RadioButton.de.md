# RadioButton Schritt für Schritt

**Ein Klick schreibt einmal. Das LED zeigt, was tatsächlich gelesen wird.**
Damit ist ein RadioButton gleichzeitig ein Auswahlfeld und eine kompakte Zustandsanzeige.
Die vorbereitete Übung steht auf **Schulungszentrum / Page5**.

![Die aktuelle RadioButton-Lehrseite: schaltbare Bereiche, zwei Grenzfelder, drei LED und ein gemeinsamer Slider](images/radio-range-1524.png)

## 1. Zuerst ohne Bereiche beginnen

Drei RadioButton verwenden dieselbe Integer-Variable `iAuswahl`, denselben
Gruppennamen und verschiedene Auswahlwerte: **100**, **200**, **300**.

| Gelesener Wert | Erwartete Markierung |
| ---: | --- |
| 100 | Nur die erste LED |
| 200 | Nur die zweite LED |
| 300 | Nur die dritte LED |
| 73 | Keine der drei LED |

1. Auf Page5 **Bereiche aktivieren** ausgeschaltet lassen.
2. `Wert 100` anklicken: Die Variable zeigt 100 und die erste LED leuchtet.
3. `Wert 200` anklicken: Der Wert wechselt auf 200, die zweite LED leuchtet.
4. Den Slider bewegen oder **Anderer Wert: 73** drücken: Die Markierung folgt
   dem Eingang, nicht dem letzten Mausklick.

Die Variable wird beim Klick einmal gesetzt. Loslassen und spätere
PLC-/Slider-Änderungen erzeugen keinen erneuten Set und keinen Force.

## 2. Dieselbe Funktion im Editor projektieren

| Feld | Erste Taste | Zweite Taste | Dritte Taste |
| --- | --- | --- | --- |
| Variable / Signal | dieselbe Integer-Variable | dieselbe | dieselbe |
| Auswahlwert (einmaliges Set) | 100 | 200 | 300 |
| Gruppe | z. B. `Betriebsart` | `Betriebsart` | `Betriebsart` |
| Rückschreiben | an | an | an |
| Aktiv nach Wertebereich | aus | aus | aus |

Eine Gruppe ohne gebundene Variable funktioniert als lokale Einzelauswahl.
Bei einer gebundenen Zahl entscheidet der tatsächliche Wert. Unterschiedliche
Gruppennamen bilden getrennte lokale Auswahlen.

**Nur anzeigen:** Rückschreiben ausschalten und keine Python-Funktion zuordnen.
Dann löst ein Klick keine Schreibaktion aus; das Lesen funktioniert weiter.
Bei einer BOOL-Quelle ohne Auswahlwert bedeutet die leere Auswahl **true**.
Ein ausdrücklich eingetragener false-Wert bleibt ein eigener Vergleichswert.

## 3. LED-Farbe und Beschriftung trennen

Unter **LED und Aktivbereich** die **LED-Aktivfarbe** einstellen, beispielsweise
HDH_GREEN, HDH_WARNING oder HDH_ERROR. Diese Farbe gilt unabhängig von Bereichen
und bleibt bei exaktem Vergleichen dieselbe. **Textfarbe** gehört zur Beschriftung.
**LED-Deckkraft** 1 bedeutet volle Deckkraft, 0,5 halbtransparent.

Unter **Blinken und Glättung → Blinkend** kann der aktive Punkt blinken.
**Blinkfrequenz · Hz** gibt vollständige Ein-/Aus-Zyklen pro Sekunde an:
1 Hz = ein Zyklus pro Sekunde. Projektierbar sind 0,1 bis 5 Hz.
Blinken ändert die Variable nicht. Auf Page5 demonstriert die rote LED 1 Hz.

## 4. Von einem Punktwert zu einem Bereich

**Aktiv nach Wertebereich** aktivieren. Ein RadioButton besitzt genau einen Bereich.
Der Auswahlwert für den Klick bleibt davon unabhängig: etwa **Set 80**, aktiv
bei **70 ≤ x < 90**.

- **Aktiv ab** ist einschließlich: 70 gehört dazu.
- **Aktiv bis** ist standardmäßig ausgeschlossen: 90 gehört zur nächsten Zone.
- **Obergrenze einschließen** nur dann setzen, wenn die letzte Grenze dazugehören soll.
- **Bereich anzeigen** blendet die linke Beschriftung aus, ohne den Vergleich auszuschalten.

Die Anordnung lautet **Bereich · LED · Bedeutung**. Ohne Bereichstext nimmt der
Indikator weniger Platz ein. Mehrere benachbarte RadioButton können zusammen
eine grüne, gelbe und rote Zone zeigen.

## 5. Grenzen und Modus über Variablen steuern

Jede Grenze kann ein Festwert oder ein numerisches Signal sein. Ein gesetztes
Grenzsignal muss lesbar sein; bei Ausfall wird nicht still der Festwert benutzt.

Die optionale **Bereichsfreigabe · BOOL-Signal** ergänzt die Hauptoption:

| Hauptoption | Zusatzsignal | Vergleich |
| --- | --- | --- |
| aus | beliebig | Exakter Auswahlwert |
| an | leer | Bereich |
| an | true | Bereich |
| an | false | Exakter Auswahlwert |
| an | angegeben, aber nicht lesbar | Kein bestätigter Aktivzustand |

Auf Page5 steuert die Checkbox den LOCAL-BOOL. Die beiden Edit-Felder schreiben
die LOCAL-Integer-Grenzen 150 und 250. Nach Bestätigung z. B. auf 140 und 260
umstellen und den Slider über beide Grenzen bewegen. Das Umschalten bzw. Ändern
der Grenzen schreibt nicht zusätzlich in die Auswahlvariable.

## 6. Kurze Deaktivierung glätten

**Glättung aktivieren** ist standardmäßig aus. Mit Häkchen bleibt die LED nach
Deaktivierung oder nicht lesbarem Eingang noch für **Glättungszeit [ms]** aktiv.
Standard 500 ms; möglich 100 bis 5000 ms, beispielsweise 1200 ms.
Aktivierung und Wiederkehr erscheinen sofort.

Das ist ein Nachlauf der Anzeige, kein Halten oder Erzwingen der Variable.
Beim Wechsel zwischen Bereichen können durch den Nachlauf vorübergehend zwei
LED leuchten. Ohne Glättung gelten die tatsächlich gelesenen Bedingungen sofort.
Beim [Trend](#/trend-1500) übernimmt dieselbe bewusste Option gehaltene Werte auch
in die Aufnahme und kennzeichnet sie mit eigener Qualität.

## 7. Wenn das Ergebnis überrascht

| Beobachtung | Zuerst prüfen |
| --- | --- |
| Zwei Bereichs-LED leuchten | Grenzen überlappen, beide Obergrenzen eingeschlossen oder Glättungs-Nachlauf aktiv? |
| Bei 73 ist nichts markiert | Im exakten Modus mit 100/200/300 ist das richtig. |
| Die Checkbox ist an, aber es gilt ein exakter Wert | Zusatz-BOOL false? |
| Ein Grenzsignal fehlt | Der Bereich ist nicht bestätigt; keine Rückkehr auf den Festwert. |
| Ein Klick ändert keinen Wert | Rückschreiben, Typ, Zugriff und Rückmeldung prüfen. Reine Anzeige schreibt absichtlich nichts. |
| Nach PLC-Änderung eine andere LED | Erwartet: Die Markierung folgt dem Eingang. |

Speichern und wieder öffnen. Klickwert, Gruppennamen, Grenzen, Bindings,
LED-Farbe, Blinken und Glättungszeit müssen erhalten bleiben.
