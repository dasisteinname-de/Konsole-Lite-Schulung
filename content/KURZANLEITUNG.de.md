# KonsoleLite 1.44 CALL SK im lokalen Simulator

Für vorhandene Units wie Ax51 und Ax52. **Nur PC/LOCAL: keine PLC-Verbindung,
keine Maschinenbewegung.**

## Aufruf einfügen und übernehmen

1. Simulation **stoppen**, Hauptkette öffnen und gewünschten Schritt auswählen.
2. **CALL SK** öffnen: **Unit**, **Aktion** und **Überwachung** auswählen.
   Nur zusätzlich angezeigte Aktionsparameter ausfüllen.
3. **Aktion im Schritt einfügen** drücken. Weitere Aufrufe ebenso hinzufügen;
   danach das Fenster schließen.
4. Prüfen und **im Stillstand speichern**. Oben müssen **Aktiv** und **Entwurf**
   übereinstimmen. Prüfen allein aktiviert nichts; während des Laufs eingefügte
   Unit-Aufrufe werden nicht übernommen.

## Lokale Testfreigaben einstellen

Vor dem Start unten die passende Spalte einstellen. Nicht im laufenden
Unit-Aufruf die Betriebsart wechseln.

| Testeingang | Automatiktest | Handtest |
| --- | --- | --- |
| `UnitOperationPermit` | TRUE | TRUE |
| `UnitAutoMode` | TRUE | FALSE |
| `UnitAutoRunActive` | TRUE | FALSE |
| `UnitHandMode` | FALSE | TRUE |
| `UnitNCStart` | FALSE | zunächst FALSE |

Beim Ampelbeispiel zusätzlich `KonsoleAuto`, `AmpelCycleEnable` und `DemoPermit`
auf TRUE setzen. Das ersetzt nicht die Unit-Freigaben.

## Zielrückmeldung testen

**Simulation starten.** Im Handtest am wartenden Aufruf `UnitNCStart` von FALSE
auf TRUE setzen und halten. Loslassen vor Zielbestätigung pausiert den Aufruf.
Für den nächsten geordneten Aufruf wieder loslassen und neu betätigen.
Neben der ComboBox steht dafür **NC Start · halten**: Drücken setzt TRUE,
Loslassen oder Fokusverlust setzt FALSE. Die ComboBox bedient denselben lokalen Eingang.

Das zum aktiven Aufruf gehörende **Positionsfeld** unten bedienen. Im gelieferten
Zylinderbeispiel bedeutet **1 Grundstellung**, **2 Arbeitsstellung**.
Zahl eingeben und mit **Enter oder Tab übernehmen**.

Bei angeforderter Arbeitsstellung bestätigt 1 das Ziel nicht; 2 bestätigt es.
Für einen Wechseltest zuerst 1 setzen und innerhalb der Überwachungszeit auf 2
ändern. Steht die Rückmeldung schon vorher auf 2, wird nur „Ziel schon erreicht“
geprüft. Der Hauptschritt wartet auf alle Aufrufe und seine Übergangsbedingung.

## Anzeige und Fehler verstehen

**Plus oben rechts im Aufrufkasten** öffnet Erwartung, Istwert und Ursache.
Minus schließt an derselben Stelle. UNKNOWN bedeutet fehlende Daten.
Rot kennzeichnet einen Fehler. Bei gemeinsamem Kanal wartet der zweite Aufruf
auf den ersten. Technische JSON-Details sind optional und schreibgeschützt.

Nach Timeout genügt ein nachträglich richtiger Sensorwert nicht:
**NC Start loslassen → Ursache prüfen → unten „Timeout quittieren“.**
Der lokale Ablauf behält den Fehlerschritt und die bereits erledigten Aufrufe;
der betroffene Timeout beginnt für einen bewussten neuen Versuch erneut.
Im Handbetrieb NC Start anschließend frisch betätigen und halten.
Schlägt auch dieser Versuch fehl, bleibt der Ablauf erneut rot stehen.
Fehlende Freigaben, unbekannte Rückmeldungen und ein Betriebsartenkonflikt
werden nicht übergangen. Andere Fehler benötigen weiterhin ihre passende
Wiederherstellung. **Ablauf zurücksetzen** ist getrennt und beendet den Ablauf;
ein anschließender Start beginnt am Initialschritt.

Ausführliche Definitionen: [Units und Grundtypen](README.de.md).
