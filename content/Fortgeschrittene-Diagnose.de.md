# 4 · Warten, Timeout und bewusster neuer Versuch

Lernziel: Einen erwarteten Wartezustand von einem Fehler unterscheiden und
nach einem Timeout am gehaltenen Schritt weiterprüfen. Alle Versuche bleiben
in der lokalen Kurskopie. Ein Fehler an einer realen Anlage wird nicht durch
dieses Übungsschema pauschal freigegeben.

## Erst die Ursache lesen

![9. Die erste Unit wartet auf betriebliche Freigabe, die zweite auf den Kanal; kein Aufruf ist als erfolgreich bestätigt](images/advanced-09-freigabe-fehlt.png)

Den betroffenen CALL über **+** öffnen. Vergleiche Name, erwarteten Wert,
aktuellen Wert, Zustand und Quelle. Das Fenster darf geschlossen werden,
ohne den Auftrag zu quittieren oder neu zu starten.

| Anzeige | Fachliche Bedeutung | Nächster Prüfschritt |
| --- | --- | --- |
| Betriebliche Freigabe fehlt | Auftrag wartet | Freigabe und Betriebsart ansehen |
| Wartet auf freien Kanal | Anderer Auftrag besitzt den Kanal | Den vorherigen CALL prüfen |
| UNKNOWN / Rückmeldung fehlt | Kein belastbarer Istwert | Quelle und Aktualität prüfen |
| Zielbestätigung fehlt | Bekannter Wert passt nicht zum Ziel | Richtige Rückmeldung und Aktion vergleichen |
| Gewählte Aktion bestätigt | Zielbedingungen dieses Aufrufs erfüllt | Weitere CALLs und Übergang ansehen |

## Einen Timeout absichtlich erzeugen

1. Stoppen und AUTO wie im [vorigen Kapitel](#/advanced-call) vorbereiten.
2. Rückmeldung des ersten Aufrufs auf **1** lassen, obwohl Arbeitsstellung
   **2** angefordert wird. Überwachung des Aufrufs: **3000 ms**.
3. Starten und den Ablauf nicht mehr ändern. Nach Ablauf der Überwachung
   muss der Fehler sichtbar bleiben.

![11. Timeout: Der erste CALL ist rot, die fehlende Zielbestätigung ist markiert; der Folgeauftrag wurde zurückgenommen](images/advanced-11-timeout.png)

Jetzt die Rückmeldung auf 2 ändern und mit Enter übernehmen. Das behebt den
lokalen Testwert, löscht aber **nicht** den gespeicherten Fehler. Enter ist
Wertübernahme, keine Fehlerquittierung.

## Am gehaltenen Schritt quittieren

In der Simulatorleiste **Timeout quittieren** wählen; den Tooltip der
Symboltaste beachten. Die Funktion ist von **Ablauf zurücksetzen** getrennt.

![12. Nach Timeout-Quittierung bleibt S10 erhalten; der Aufruf prüft Freigaben und Rückmeldung mit neuer Überwachungszeit erneut](images/advanced-12-quittieren.png)

Die wiederholbare Übung hat zwei Varianten:

1. **Rückmeldung bleibt falsch:** Quittieren, erneut warten. Der Versuch
   endet wieder rot. Es gibt keine automatische Endlosschleife.
2. **Ziel inzwischen erreicht:** Rückmeldung 2 übernehmen, bewusst quittieren.
   Der Aufruf kann das Ziel neu bestätigen; danach ist der Folgeauftrag dran.

Bereits abgeschlossene Aufrufe bleiben bei diesem Timeout-Wiederanlauf
erhalten. Im HAND-Betrieb wird erneut eine frische NC-Start-Betätigung
benötigt. Fehlende Freigaben, unbekannte Werte oder andere Fehler werden
durch Quittieren nicht übergangen.

**Ablauf zurücksetzen** ist für einen anderen Zweck: Es beendet den
gehaltenen Ablaufzustand. Ein anschließender Start beginnt wieder am
Initialschritt. Vor der Bedienung entscheiden, welcher Vorgang beabsichtigt ist.

## Das Prüfblatt ausfüllen

Nicht nur „geht“ notieren. Jeder Versuch bekommt Ausgangslage, Handlung,
erwartetes Ergebnis und beobachtetes Ergebnis.

| Versuch | Ausgangslage und Handlung | Erwartung |
| --- | --- | --- |
| Fehlende Freigabe | UnitOperationPermit FALSE | Kein regulärer Aktionsstart |
| Moduskonflikt | AUTO und HAND zugleich | Fehler statt unbemerkter Wahl einer Betriebsart |
| Falsches Ziel | Position 1 bis Zeitablauf | Timeout, danach nur bewusster Wiederanlauf |
| Fehlender Wert | Rückmeldung unbekannt | UNKNOWN, kein erfundener Abschluss |
| HAND loslassen | Offener Aufruf, NC Start FALSE | Warten und neutrale Anforderung |
| Folgeauftrag stoppen | Zweiter CALL wartet noch | Kein verspäteter Start nach Stop |

Für eine Übergabe die vorhandene Aufzeichnung beziehungsweise den Trace
exportieren. Ein Trace beschreibt die aufgezeichnete Ausführung; er ist kein
Nachweis, dass ein Sensor physisch geschaltet hat. Zeitpunkt, Softwarestand,
LOCAL/Station und geänderte Kursdatei auf dem Prüfblatt festhalten.

## Partnerübung

Eine Person baut einen der Fehler ein, die andere liest nur Anzeige und
Werte. Sie muss Ursache und nächsten sinnvollen Prüfschritt erklären können,
ohne wahllos Freigaben zu setzen oder die ganze Kette neu zu starten.

<details><summary>Kontrollfrage: Position ist jetzt 2. Warum bleibt es rot?</summary><p>Die spätere Rückmeldung löscht den verriegelten Timeout nicht. Erst die bewusste Timeout-Quittierung startet den zulässigen neuen Versuch mit erneuter Prüfung; Enter übernimmt nur den Wert.</p></details>

[Den Timeout im Browser ohne Zeitdruck üben →](#/sequence-lab)

[Weiter: Interface und Stationsverbindung unterscheiden →](#/advanced-station)
