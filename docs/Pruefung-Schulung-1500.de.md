# Abgleich der Schulung 1.50.0 · 21.11.2026

## Vergleichsbasis und Ergebnis

Verglichen wurden `main` bei `6b881e4960d2fb967b4775f731b80ba7ac0f5911`
(28.10.2026) und `codex/access-workspaces-1500` bei
`3925b5cbd83c4e864a8f941a67f80972d6b9d1bb` (20.11.2026).
Der neue Zweig liegt fünf Commits voraus, ohne Rückstand gegenüber `main`.
Der Abgleich der Bedienbegriffe erfolgte gegen die Implementierung und die
Prüfdokumentation des Softwarestands 1.50.0. Private Quellen bleiben außerhalb
dieses Repositorys; ein Quellenabgleich ersetzt keine native Bedienprüfung.

Die vier vorhandenen Ergänzungskapitel sind inhaltlich vorhanden, in Navigation
und Build registriert und werden nicht erneut angelegt. Diese Änderung ergänzt
genau ein Unterrichtskapitel: **Trend-/XY-Diagramm**.

| Material | Vorhandener Stand im Zweig 1.50.0 |
| --- | --- |
| Zugriff-1500 | Start / Manual / Run, Profile 0–5, KOP, Interface-Auswahl, Explorer-Rechte und Browser-Zugriffslabor |
| Transfer-1500 | Gespeicherte Pakete, Smart Compare, Status, Originalsicherung, QML-Reload und Restart Apps für Python/System |
| CFG-1500 | Ausdrücklicher VM-Vollscan, SQLite, Ressourcen/Teilstatus, frische Werte und Parameterlisten als Rezepturstruktur |
| Bausteinpool-1500 | Eigenen Pool anlegen, veröffentlichen, Import prüfen, Konflikte und separates Game Portal |
| Projektaufbau | Registrierte Zusatzmodule, Python-Wörterbuchpfade, Vorlagen und lokale Lesezeichen |
| Trend-1500, hier ergänzt | Numerischer LOCAL-Kanal, Zeit-/XY-Achse, Zonen, Sollwertlinie, Aufnahme/Ansicht, Qualitätslücken und optionaler Minutenring |

Die verwendeten Bezeichnungen der neuen Arbeitswege stimmen beim geprüften
Quellenstand mit den UI-Definitionen überein. Aus diesem Abgleich ergibt sich
kein weiterer belegter Fehler in den vier vorhandenen Ergänzungskapiteln.
Trend ist eine Ergänzung zur Schulung 1.50.0; damit wird keine erstmalige
Einführung des Softwareelements in dieser Version behauptet.

## Konkrete Befunde und begrenzte Korrekturen

1. **Gemischter Versionsstand:** „Begriffe & Grenzen“ ordnete die Bedienfolgen
   pauschal 1.44 zu, obwohl README und Ergänzungen bereits 1.50.0 nennen.
   Der Hinweis unterscheidet jetzt aktuelle Ergänzungen und historische LOCAL-
   Grundübungen. Die Startseite verlinkt die Ergänzung zum Trend.
2. **Bildkennzeichnung:** Die Herkunft 1.44 stand im Überblick, fehlte aber an
   den einzelnen Grundkursbildern unter der allgemeinen 1.50.0-Kopfzeile.
   Bildunterschriften, Alternativtexte und damit die Vergrößerung nennen jetzt
   ausdrücklich **LOCAL-Kurskopie 1.44**. Auch das Startseitenbild ist markiert.
   Der Kapitel-Build verlangt einen angegebenen Bildstand, sobald ein Kapitel
   Bilder enthält. Die Bilddateien selbst bleiben unverändert.
3. **Kopierbares Python-Beispiel:** Das Pfadbeispiel setzte unmittelbar einen
   `bStop`-Wert auf True. Für die Erklärung des Wörterbuchzugriffs genügt der
   reine Wertpfad; die Schreibanweisung wurde entfernt. Ein dauerhaftes True
   wäre außerdem kein wiederholbarer flankengetriggerter Recorderbefehl.

Der Grundkurs und die vier vorhandenen Ergänzungen wurden nicht umgeschrieben.
Die neue Trend-Übung verwendet LOCAL-Werte und rein visuelle Zonen. Sie
behauptet weder eine Maschinenaktion noch eine TNC-Abnahme.

## Welche Nachweise tatsächlich vorliegen

| Nachweis | Aussage und Grenze |
| --- | --- |
| Software-Prüfbericht vom 20.11.2026 | Meldet 415 Qt-6- und 409 Qt-5-Prüfungen sowie zusätzlich je 14 Recorder-/Protokolltests als bestanden. In dieser Schulungsprüfung nicht erneut ausgeführt. |
| Schulung im Bericht vom 20.11.2026 | 18 Kapitel gebaut; vier neue Kapitel im Browser, Zugriffslabor 0/3/5/0 und 390 px ohne JavaScript-Ausnahmen geprüft. Gilt für den damaligen Stand. |
| Reale Übertragung | Im Software-Prüfbericht sind Anwenderbestätigungen für 1.49.10 sowie die 1.50.0-Wiederherstellung mit Verbindung, Transfer und sichtbarer Änderung dokumentiert. Das ist keine vollständige Prüfung der neuen Stationsrechte. |
| Aktuelle Schulungsänderung | `npm ci --ignore-scripts`, Build mit **19 Kapiteln**, JavaScript-Syntax und `git diff --check` bestanden. |
| Aktueller DOM-Prüflauf | 19 Kapitel, interne Kapitel-/Abschnittslinks, Bilddateien und Cache-Hashes, Bildstand, Suche nach Minutenring, Gelesen-Markierung bei Navigation und Zugriffslabor 0/3/5/0 geprüft. Keine Skriptausnahme. jsdom prüft keine Darstellung und keine Bildschirmbreite. |
| Abgrenzung des öffentlichen Bestands | Keine produktiven Python-/QML-/PLC-Quellen, Datenbanken oder Diagnose-ZIPs hinzugefügt. Der Build liest nur öffentliche Kapitel und Assets; die Laufzeit benötigt keinen privaten Checkout. Keine neuen Netz-/Maschinenschnittstellen im Lernmodell. |

Eine erneute Browserprüfung der geänderten Endfassung konnte in dieser
Ausführungsumgebung nicht durchgeführt werden. Der frühere Browsernachweis
wird deshalb nicht auf das neue Trend-Kapitel oder die neuen Bildunterschriften
ausgedehnt.

## Veröffentlichung und gezielt offene Prüfungen

GitHub Pages ist für den alten Stand belegt: Der letzte erfolgreiche Lauf
[40652718025](https://github.com/dasisteinname-de/Konsole-Lite-Schulung/actions/runs/40652718025)
lief für `main` bei `6b881e4` am 28.10.2026. Die öffentliche Startseite lieferte
am 21.11.2026 HTTP 200 mit dem 1.44-Hinweis und ohne die neue Zugriffsnavigation.
Die neue Lehrfassung ist damit noch nicht als veröffentlichte Pages-Fassung
bestätigt. In dieser Änderung werden weder Branches zusammengeführt noch
Pages-Einstellungen oder Deployments verändert.

Vor Veröffentlichung dieser Endfassung sind zwei konkrete Nachweise offen:

1. **Browser:** Die erzeugten 19 Kapitel im Pages-Unterpfad bei breiter Ansicht
   und 390 px öffnen. Besonders die neuen Bildunterschriften, Trend-Tabellen,
   Menü, Suche, Bildvergrößerung und Zugriffslabor 0/3/5/0 prüfen; JavaScript-
   Konsole und fehlende Assets kontrollieren. Die DOM-Prüfung ersetzt das nicht.
2. **Neuer Unterrichtsweg im echten QML Editor 1.50.0:** Das Trend-Kapitel in
   einer LOCAL-Kopie durchgehen: Zahlenquelle wählen, Zonen setzen, Strg+S,
   Wiederöffnen, PC Live, Start, Halten, Pause, Fortsetzen und Stop. Dabei
   fortlaufende Aufnahme bei Halten sowie die Lücke nach Pause beobachten.
   Für den optionalen Dateiteil einen eigenen Testordner verwenden und nach
   Stop den gesicherten Restblock prüfen. Falls externe BOOL-Befehle gezeigt
   werden, zwei getrennte False→True-Flanken und dauerhaftes HIGH vergleichen.

Danach ist eine Veröffentlichung als **gekennzeichnete Arbeitsfassung**
vertretbar. Als bereits abgeschlossene Maschinenprüfungen dürfen weiterhin
nicht erscheinen: neue TNC-Rechte mit realen Kontakten 0/3/5/0 einschließlich
Rechteentzug, tatsächliche Stationsregel beim Transfer, kompletter Hersteller-
CFG-Scan samt Zeit/CPU/RAM/SDK-Nachweis in der VM und die noch offene native
Slider-Reaktionszeit. Ein mehrtägiger Recorder-Dateilauf ist ebenfalls nicht
durch eine kurze LOCAL-Übung belegt. Diese Grenzen bleiben im jeweiligen
technischen Nachweis erhalten; sie erfordern kein Umschreiben des Grundkurses.
