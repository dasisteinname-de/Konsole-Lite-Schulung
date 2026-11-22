# Apps über den AppPool austauschen

Ein Pool enthält einen Katalog und geprüfte Modulquellen. Er ist noch kein
aktiviertes Projekt. Game Portal wird separat im Pool geliefert; es ist nicht
in die Referenzniederlassung eingebaut. Rezepturen sind absichtlich nicht
vorab im Pool: Diese Veröffentlichung führt der Teilnehmer selbst aus.

## Vom eigenen Projekt in einen Pool

1. Projekt sichern und alle gewünschten QML-/Python-Änderungen speichern.
2. **KonsoleConfigurator → AppPool öffnen**.
3. **Neuen AppPool anlegen** und einen neuen, noch nicht vorhandenen Ordner wählen.
   Einen bestehenden eigenen Pool kann man ausdrücklich öffnen.
4. **App aus Projekt veröffentlichen** wählen und zum Beispiel **Rezepturen** auswählen.
5. Veröffentlichung prüfen. Die ursprünglichen Moduldateien bleiben unverändert.
6. Den entstandenen Katalogeintrag ansehen; bei Bedarf **Gewählte App
   als ZIP** exportieren.

Es werden Modulquellen, Controller und vorbereitete Vorgaben veröffentlicht.
Aktive Kundendatenbanken, Logs, Arbeitswerte und Maschinenbindungen gehören
nicht in diesen Austausch. Rezepturvorgaben werden als MOCK ohne aktive
Schreibfreigabe und Bindings exportiert. Dieselbe App wird im Pool nicht
still überschrieben: gleiche ID oder gleicher Modulordner ergibt einen Konflikt.

## Aus einem fremden Pool ins eigene Projekt

1. Das gewünschte **Zielprojekt** öffnen.
2. Im Pooldialog **AppPool öffnen**, dann eine App auswählen.
3. **Import prüfen** lesen: Quellen, Zielzuordnung, Hashes, Plattformvertrag und
   erhaltene Einstellungen prüfen. Prüfsummen ersetzen keine vertrauenswürdige Herkunft.
4. **Geprüfte App importieren**. Vorhandene Zielquellen werden nicht ersetzt.
   Der Import führt den App-Code nicht aus.
5. KonsoleConfigurator neu öffnen. Modul **und Seiten** zum Laden aktivieren.
   Start / Manual / Run und Rechte bewusst setzen und speichern.
6. Fehlende Profilverweise im Zielprojekt zuordnen. Fremde Profilnamen werden
   nicht automatisch zu lokalen PLC-Freigaben.
7. Erst PC Live testen, dann den geprüften Stand übertragen. Neue Python-
   Controller benötigen Restart Apps.

## Game Portal als unabhängiges Beispiel

Im mitgelieferten AppPool den Eintrag **Game Portal** wählen. Er bietet
Snake, Mines und Tic-Tac-Toe. Die Spiele verwenden ausschließlich lokalen
Zustand; keine PLC-, Datei- oder Netzaktionen. Snake startet ausdrücklich und
pausiert beim Verlassen seiner Ansicht.

Übungsziel: Game Portal in eine **eigene Übungskopie** importieren, nur für
Manual aktivieren und im Live-Modus prüfen. Danach erklären, welche Dateien
zum Pool und welche zum Zielprojekt gehören. Kein Spiel wird automatisch in
eine Maschinenkonsole integriert.

**Prüffrage:** Warum bleiben Kundendatenbanken und aktive Maschinenbindings
beim Veröffentlichen einer Rezepturkomponente außerhalb des Pools?
