# 5 · Verbindung und Transfer prüfen

**Stand 1.52.4 · Vom gespeicherten Projekt zur bestätigten Station.**
Die Variablenprojektierung steht jetzt im Basic-Kapitel
[Interface Editor · Schritt für Schritt](#/interface-editor).
Das geplante PLC-Mapping erklären wir unter
[PLC–Python-Schnittstelle](#/plc-interface).
Hier geht es um Profilwahl, Verbindung, Dateitransfer und den anschließenden Nachweis.

## Das richtige DNC-Profil wählen

1. Im QML Editor **Projekt / Maschine** öffnen.
2. Die ComboBox **DNC-Profil** öffnen. Dabei wird die lokal vorhandene
   Profilliste neu gelesen; Meldung und Fortschrittsanzeige zeigen die Abfrage.
3. Das vorgesehene Profil wählen und **Speichern** betätigen.
4. Den gespeicherten Profilnamen und Projekt-/Maschinenpfad prüfen.
5. **Verbinden** als eigenen Schritt ausführen und die Rückmeldung lesen.

Das zusätzliche Feld Maschinen-ID und die separate Lesetaste sind entfallen.
Ein Profilname ist keine automatische Netzwerkerkennung. Die Liste enthält
die auf dem Entwicklungsrechner eingerichteten DNC-Profile.
**RPC** bedeutet **Remote Procedure Call**. Im QML Editor hilft
**Menü → Hilfe → DNC / RPC erklärt …** beim Einordnen der Begriffe.

Die lokale Live-Ansicht des Editors bleibt offline. Sie bestätigt keine
Verbindung zur gewählten Maschine.

## Gespeicherten Stand übertragen

1. **Smart Compare** öffnen und Dateien sowie Zuordnung prüfen.
2. **Speichern + Transfer** prüft und speichert die geänderten offenen Seiten
   vor dem Paketvergleich. Bei einer ungültigen Seite zuerst deren Meldung bearbeiten.
3. Den Ergebnisdialog und den Stationsstatus lesen. Bei einem ungeklärten
   Vorgang **Transferstatus prüfen** verwenden.
4. Eine bestätigte reine QML-Änderung kann neu geladen werden.
   Bei Python-, System- oder Startänderungen den angezeigten **Restart Apps** ausführen.
5. Version und sichtbare Änderung auf dem tatsächlichen Stationsbildschirm prüfen.

Der vollständige Bedienweg und die Transferdiagnose stehen unter
[Vom Editor auf die TNC](#/transfer-1500). Ein QML-Reload startet Python nicht neu.

## Was ein Nachweis jeweils bedeutet

| Nachweis | Aussage |
| --- | --- |
| Profil gespeichert | Dieser DNC-Profilname wurde für die Verbindung ausgewählt. |
| Verbindung bestätigt | Der gewählte Kommunikationsweg ist erreichbar. |
| Transfer bestätigt | Das bezeichnete Dateipaket wurde von der Station übernommen. |
| Modell neu gestartet | Die neue Python-/Systemfassung kann geladen worden sein; Version und Meldungen prüfen. |
| Fachliche Funktion bestätigt | Der vereinbarte Wert oder Ablauf verhält sich am konkreten Ziel wie vorgesehen. |

Ein importiertes Symbol und eine erfolgreiche Dateiübertragung beweisen allein
keinen angeschlossenen physischen Ausgang. Die lokale Ampel-Pilotlaufzeit ist
MEMORY_ONLY; sie erhält durch ein DNC-Profil keinen physischen I/O-Adapter.

## Partnerkontrolle

Zeige Profilname, Verbindungsstatus, Transferergebnis und den geladenen
Versionsstand. Erkläre, welcher Nachweis noch fehlt, wenn die Dateien übertragen
wurden, die geänderte Python-Gruppe aber noch nicht im laufenden Modell erscheint.

[Weiter: Die geprüfte Kette in der Maske darstellen →](#/advanced-visualizers)
