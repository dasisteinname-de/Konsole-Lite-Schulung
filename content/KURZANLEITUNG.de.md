# KonsoleLite 1.43 CALL SK im lokalen Simulator

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
In 1.43 erfolgt das noch über die ComboBox.

Das zum aktiven Aufruf gehörende **Positionsfeld** unten bedienen. Im gelieferten
Zylinderbeispiel bedeutet **1 Grundstellung**, **2 Arbeitsstellung**.
Zahl eingeben und mit **Enter oder Tab übernehmen**.

Bei angeforderter Arbeitsstellung bestätigt 1 das Ziel nicht; 2 bestätigt es.
Für einen Wechseltest zuerst 1 setzen und innerhalb der Überwachungszeit auf 2
ändern. Steht die Rückmeldung schon vorher auf 2, wird nur „Ziel schon erreicht“
geprüft. Der Hauptschritt wartet auf alle Aufrufe und seine Übergangsbedingung.

## Anzeige und Fehler verstehen

**Plus** öffnet Erwartung, Istwert und Ursache. UNKNOWN bedeutet fehlende Daten.
Rot kennzeichnet einen Fehler. Bei gemeinsamem Kanal wartet der zweite Aufruf
auf den ersten. Technische JSON-Details sind optional und schreibgeschützt.

Nach Timeout genügt ein nachträglich richtiger Sensorwert nicht:
**NC Start loslassen → unten „Quittieren“ → neu starten.** Gemeint ist das
Häkchen rechts neben „Fortsetzen“, nicht die Syntaxprüfung oben.
**In 1.43 beginnt dieser Neustart am Initialschritt.** Quittieren und am
Fehlerschritt erneut versuchen ist erst für die nächste Version vorgemerkt.

Weiterführende Begriffe: [Units, Grundtypen und Grenzen dieser Kursfassung](#/reference).
