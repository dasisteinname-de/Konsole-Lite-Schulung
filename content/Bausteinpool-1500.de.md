# Apps über den AppPool austauschen

AppPool ist eine Bibliothek fertiger Anwendungen: erst ansehen und verstehen,
dann bewusst in ein eigenes Projekt übernehmen. Eine App bringt ihre Quellen,
Beschreibung und vorbereitete Vorgaben mit. Im Projekt werden ihre Seiten,
Rechte und gegebenenfalls Maschinenanschlüsse ausdrücklich eingerichtet.

## Apps finden und ihren Status erkennen

![AppPool mit gruppierter App-Liste, Versionen und Galerie](images/app-pool-liste-local-1500.png)

Links stehen die Apps mit Symbol, Name, Herausgeber und Kurzbeschreibung.
Die Suche findet Namen, Funktionen und Entwickler; Kategorie und
Installationsfilter grenzen die Auswahl weiter ein. Leere Gruppen verschwinden.
Rechts bleibt die vollständige Information zur ausgewählten App sichtbar.

| Gruppe | Bedeutung für das geöffnete Projekt |
| --- | --- |
| Installiert | Der Modulordner ist im Projekt registriert; die Version stammt aus dessen Manifest. |
| Updates verfügbar | Im gewählten lokalen Katalog liegt eine numerisch neuere Version. Projekt- und Katalogversion stehen nebeneinander. |
| Weitere Apps | Der Modulordner ist im Projekt noch nicht registriert. |

**Installiert** ist derzeit kein vollständiger Herkunftsnachweis. **Update
ausführen** bleibt bis zur sicheren Übernahme mit Prüfung eigener Änderungen
deaktiviert. Das Öffnen oder Aktualisieren des Katalogs ersetzt keinen
installierten Code. **Aktualisieren** liest den lokalen Ordner erneut, kein Git Pull.

Das Fenster startet ungefähr in Full-HD-Größe und merkt sich anschließend
die gewählte Größe. Auf einem UHD-Monitor muss es nicht den ganzen Bildschirm
belegen. Nach einem Update des Python-Editors offene Entwürfe speichern und
den PC-Editor vollständig neu starten; VS Code und Browser können offen bleiben.

## Bilder, Funktionen und Dokumentation ansehen

Die **Übersicht** zeigt Nutzen, Funktionen, Integrationsvoraussetzungen,
Herausgeber und beide Versionen. **Importprüfung · Dateien** zeigt den
technischen Umfang. **Dokumentation** öffnet die mitgelieferte Anleitung im
rechten Bereich; bei PDF startet der lokale PDF-Reader.

![Game-Portal-Galerie mit vergrößertem Bild und Blättertasten](images/app-pool-galerie-local-1500.png)

Mit den Pfeilen durch die Bilder blättern. Ein Klick auf das Vorschaubild
öffnet die große Ansicht; dort funktionieren ebenfalls die Pfeiltasten.
**An Fenster anpassen** passt das Bild ein; ausgeschaltet wird es in voller
Auflösung mit Bildlaufleisten gezeigt. Game Portal enthält echte LOCAL-Bilder
von Snake, Mines und Tic-Tac-Toe. Diese PC-Aufnahmen sind keine Maschinenprüfung.

## Vom eigenen Projekt in einen Pool

1. Projekt sichern und alle gewünschten QML-/Python-Änderungen speichern.
2. **KonsoleConfigurator → AppPool öffnen** oder im **Interface Editor → AppPool öffnen**.
3. Den eigenen bestehenden Pool öffnen oder **Neuen AppPool anlegen** und einen neuen Ordner wählen.
4. **App aus Projekt veröffentlichen** wählen und zum Beispiel **Rezepturen** auswählen.
5. Beschreibung, Funktionen, Herausgeber, Dokumentation und Bildpfade angeben.
   Bild- und Dokumentpfade gehören relativ zum Modulordner. Sie müssen im
   veröffentlichten Paket enthalten sein. Die ursprünglichen Moduldateien bleiben unverändert.
6. Veröffentlichung prüfen, danach den neuen Eintrag ansehen; bei Bedarf **Gewählte App als ZIP …** exportieren.

Veröffentlicht werden Modulquellen, Controller und vorbereitete Vorgaben.
Aktive Kundendatenbanken, Logs, Arbeitswerte und Maschinenbindings bleiben
außerhalb des Austauschs. Rezepturvorgaben werden als **MOCK** ohne aktive
Schreibfreigabe exportiert. Gleiche App-ID oder gleicher Modulordner wird als
Konflikt gemeldet; vorhandene Versionen werden nicht still ersetzt.

## Aus dem Pool ins eigene Projekt

1. Das gewünschte **Zielprojekt** öffnen und im AppPool die App auswählen.
2. Beschreibung und Anforderungen lesen, dann **Import prüfen** beziehungsweise
   **Importprüfung · Dateien** ansehen: Quellen, Zielzuordnung, Hashes,
   Plattformvertrag und erhaltene Einstellungen. Die Prüfung erfolgt auch bei
   der Auswahl automatisch. Prüfsummen ersetzen keine vertrauenswürdige Herkunft.
3. **Installieren** wählen. Vorhandene Zielquellen werden nicht ersetzt.
   Der Import führt den App-Code nicht aus.
4. KonsoleConfigurator neu öffnen. Modul **und Seiten** zum Laden aktivieren.
   Start / Manual / Run und Rechte bewusst setzen und speichern.
5. Fehlende Profilverweise und benötigte Maschinenanschlüsse im Zielprojekt
   zuordnen. Fremde Profilnamen werden nicht automatisch zu lokalen PLC-Freigaben.
6. Erst PC Live testen, dann den geprüften Stand übertragen. Neue Python-
   Controller auf der Station benötigen **Restart Apps**.

**Game Portal** braucht keine PLC-Signale und kein Mapping. Snake bietet
Tempo − / +, neun Stufen und Pause. Stufe 3 startet mit 0,51 Sekunden pro
Schritt; die Länge der Schlange erhöht das Tempo nicht automatisch.
Mines und Tic-Tac-Toe bleiben unabhängige Spiele mit lokalem Zustand.

## Aus dem Projekt oder aus der Bibliothek entfernen

| Ziel | Bedienweg und Wiederherstellung |
| --- | --- |
| App aus dem Projekt nehmen | Im Interface Editor das Modul wählen → **Modul archivieren …**. Nach Bestätigung bleiben Dateien und eigene Einstellungen im Projektarchiv wiederherstellbar. Der Pool bleibt erhalten. |
| Veröffentlichung aus dem lokalen Pool nehmen | App links auswählen → **Aus lokalem AppPool entfernen …** → benannte Veröffentlichung bestätigen. Installierte Projektkopien bleiben erhalten. |
| Lokale Veröffentlichung zurückholen | **Entfernte Apps …** → Archiv wählen → Wiederherstellung bestätigen. Das funktioniert auch nach einem Editorneustart; neue Veröffentlichungen werden nicht überschrieben. |

Nach Projektarchivierung darf die App erneut aus dem Pool importiert werden.
Das Wiederherstellen der alten Projektfassung und der neue Import sind zwei
Alternativen; ein gleichnamiges bereits vorhandenes Modul wird nicht überschrieben.

## Gemeinsamer AppPool: heutiger Stand und nächster Schritt

Die gemeinsame Bibliothek liegt in einem **separaten privaten GitHub-
Repository AppPool** mit Game Portal und veröffentlichten Rezepturen.
Zugriff erhalten berechtigte GitHub-Nutzer. Bis zur Dienstanbindung wird
diese Bibliothek ausdrücklich per Git geklont beziehungsweise aktualisiert;
im Editor wird deren lokaler Katalogordner geöffnet. Im br_sh-Repository liegt
weiterhin ein kleiner Game-Portal-Beispielpool für unabhängige Übungen.

Gemeinsame Bewertungen, Kommentare, Eigentümerrechte und Updatehinweise sind
vereinbart und noch nicht angeschlossen. Die freie Herausgeberangabe ist
kein Berechtigungsnachweis. Später prüft der gemeinsame Dienst: Nur Eigentümer
oder beauftragtes Pflegeteam dürfen eine neue Version veröffentlichen oder
die gemeinsame Veröffentlichung zurückziehen. Die jetzige Taste entfernt
ausdrücklich nur eine **lokale** Poolkopie.

Abonnenten mit einer älteren installierten App sollen einen Hinweis erhalten
und das Update selbst im AppPool prüfen und starten. Bewertungen werden erst
mit gemeinsamer Ablage als gemeinsame Bewertungen gezeigt. Für den späteren
Firmenumzug bleiben App-IDs und Beziehungen erhalten; Quellen, Medien und
die zukünftigen Community-Daten werden zusammen übertragen.

**Übung:** Eine App in eine eigene Übungskopie importieren, nur für Manual
aktivieren und im Live-Modus testen. Danach das Modul archivieren und erneut
importieren. Das Entfernen und Wiederherstellen einer lokalen Veröffentlichung
nur in einer eigenen Poolkopie ausprobieren.

**Prüffrage:** Warum sind Projektarchiv, lokale Poolentfernung und spätere
gemeinsame Veröffentlichung drei unterschiedliche Vorgänge?
