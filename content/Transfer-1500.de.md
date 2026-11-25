# Änderungen mit Speichern + Transfer auf die TNC übertragen

Ziel dieser Übung ist eine nachvollziehbare sichtbare Änderung an einer
freigegebenen Teststation. Die Schulungswebsite selbst verbindet sich mit
keiner Maschine. Die Übertragung und erneutes Verbinden wurden auf einem
Teststand für 1.49.10 bestätigt; neue 1.50.0-Rechte getrennt prüfen.

## Vorbereiten und vergleichen

1. Den richtigen **Projektordner**, DNC-Profil und Maschinenpfad wählen.
   Ein Klick auf die DNC-Auswahl liest die Profilliste neu. Währenddessen zeigen
   Meldung und Fortschrittsbalken die laufende Abfrage; anschließend öffnet sich
   die Liste. Die separate Lesetaste bleibt verfügbar.
2. Änderungen in den geöffneten Seiten vorbereiten. **Speichern / Strg+S**
   speichert weiterhin nur die aktive Seite; **Speichern + Transfer** prüft und
   speichert alle geänderten offenen Seiten vor der Übertragung.
3. **Verbinden**. PC Live bleibt offline und ist kein Verbindungstest.
4. **Smart Compare** öffnen. Dateistände und Quellen ansehen.

„Unbekannt“ bedeutet fehlende Information, keine bewiesene Inhaltsabweichung.
„VERALTET“ bedeutet, dass eine aktuelle Stationsbestätigung fehlt.
Smart Compare ist weder Installation noch PLC-Befehl.

## Das konkrete Paket übernehmen

1. Auf der verbundenen autorisierten Teststation **Speichern + Transfer** klicken.
   Zuerst werden Eigenschaften, QML und Python aller geänderten offenen Seiten
   geprüft. Ist eine Seite ungültig, wird keine dieser Seiten gespeichert und
   kein Transfer gestartet; die Meldung nennt Seite und Ursache.
2. Nach erfolgreichem Speichern folgt automatisch der Dateivergleich und die
   Übertragung abweichender gespeicherter Projektdateien. **Abbrechen** ist bis
   zur Paketübernahme möglich; bereits gespeicherte Seiten bleiben gespeichert.
   Der aktive Empfänger prüft
   Eingangszuordnung, Hashes, Originaldateien, Zielpfade, QML und Stationsrechte.
3. Den Ergebnisdialog lesen. Vorige Dateien bleiben unter
   `DATA/editor-transfer/versions/<id>/previous` erhalten.
4. Eine reine QML-Änderung der aktiven Seite wird nach bestätigter Installation
   automatisch neu geladen.
5. Bei Python-/System-/Startänderungen den angezeigten **Restart Apps** ausführen:
   **Start / Home → Hauptmenü → DMG MORI Service → Restart Apps** nach Anmeldung.
   Ein QML-Reload startet Python nicht neu.
6. Änderung auf dem Stationsbildschirm prüfen. Danach **Trennen → Verbinden**
   als eigenen Wiederanlauf testen.

Bei unbekanntem Ausgang zuerst **Transferstatus prüfen**. Einen ungeklärten
Vorgang nicht durch blindes Wiederholen überdecken.

## Fehler verständlich eingrenzen

Auf der TNC **INFO → Parameter → Transferdiagnose** öffnen.
„Stationsempfänger gestartet“ mit steigendem Empfangszähler beweist den lokalen
Qt-Dienst. Der DNC-Dateizugriff vom PC ist ein zusätzlicher Prüfpunkt.
Mit **Diagnose-ZIP erstellen** Startzustand, Build und Transferbelege sichern.
Das CFG-Protokoll ist ein anderes Archiv und ersetzt diese Diagnose nicht.

Die Stationsregel schützt Transferannahme und Änderungen der Zugriffsdatei.
Ein neues Paket kann seine eigene noch nicht aktive Regel nicht zur Freigabe
seines Commits benutzen. Kontakte und notwendige Mindeststufen zuerst an der
Station projektieren; frei veränderter Python-/QML-Code bleibt eine
vertrauensgebundene Engineering-Aufgabe.

## Kurze Videodemonstration

1. Python- und Systemstand vorab aktualisieren und Restart Apps ausführen.
2. Eine gut erkennbare Beschriftung der eigenen Übungsseite ändern und speichern.
3. Smart Compare und die gespeicherten Dateistände zeigen.
4. Noch eine Beschriftung ändern, **Speichern + Transfer** klicken und die
   neue Beschriftung auf der TNC zeigen.
5. Status und gegebenenfalls Trennen / Wiederverbinden zeigen.

Die Aufnahme zeigt eine HMI-Änderung. Sie behauptet keine neue PLC-/Safety-Freigabe.
