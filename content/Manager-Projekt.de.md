# Anhang C · Projektordner wählen und den ersten Editor öffnen

**Die Programme liegen im Programmordner. Module, Masken und eigene Daten liegen
im Projektordner.** Die Wahl eines Projekts verbindet diese beiden Orte für
die Arbeit am PC; sie startet keine Maschinenverbindung.

[Manager starten](#/manager-installation) · [Arbeitsplatz aktivieren](#/manager-activation)

## Ein vorhandenes Projekt öffnen

1. Im Manager **Projektordner wählen …** anklicken.
2. Den **äußeren Projektordner** wählen, der den Unterordner **KonsoleLite**
   enthält. Darin befindet sich **MODULES**.
3. **Ordner auswählen** bestätigen. Der gewählte vollständige Pfad erscheint
   oben im Manager.

![Projektordner br_sh auswählen, in dem KonsoleLite und weitere Projektordner liegen](images/manager/project-folder-choice-1525.png)

```text
MeinProjekt/                    ← diesen Ordner auswählen
└─ KonsoleLite/
   ├─ MODULES/
   └─ CONFIG/
```

Im gezeigten Anwenderbeispiel heißt der äußere Ordner **br_sh**. Er enthält auch
andere Projektteile. Nicht den tieferen Ordner **MODULES** oder den Programmordner
**ConsoleLiteEditors** auswählen. Ein vorhandener Nachbar **KonsoleLiteSystem**
ist für sich kein auswählbares Standortprojekt.

## Wann die Ordnerfrage erscheint

Steht im Projektfeld **Noch kein Projekt gewählt**, fragt der erste Start eines
Editors zunächst nach einem Projektordner. Nach der Auswahl wird der Editor
mit diesem Projekt geöffnet.

**Ist im Manager bereits ein gültiger Projektpfad eingetragen, übernimmt der
gestartete Editor genau diesen Pfad. Eine zweite Auswahl ist dann nicht erforderlich.**
Interface, QML und Sequence verwenden beim Wechsel dieselbe bewusste Zuordnung.
Bei einem verschobenen oder nicht mehr verfügbaren Projektpfad die Auswahl
korrigieren. Mehrere gleichzeitig geöffnete Managerfenster können unterschiedliche
Projekte gewählt haben; maßgeblich ist das Fenster, aus dem das Werkzeug gestartet wird.

## Der Interface Editor zeigt die vorhandenen Module

Im aktivierten Manager **Interface Editor** doppelt anklicken. Der Editor öffnet
ein eigenes Fenster und liest die Module aus dem gewählten Projekt.

![Interface Editor nach dem Öffnen des bestehenden Projekts mit vorhandenen Modulen und Interface-Dateien](images/manager/interface-project-loaded-1525.png)

Links ist die **physische Projektstruktur** sichtbar. Der Fenstertitel nennt den
Projektpfad. Vor einer Änderung diesen Pfad prüfen, dann Modul und Interface-Gruppe
auswählen. Weiter im Kapitel [Interface Editor Schritt für Schritt](#/interface-editor).

## Ohne vorhandenes Projekt beginnen

Im aktualisierten **Manager 1.52.6** kann ein vollständig leerer eigener Ordner
als neues Projekt vorbereitet werden:

1. Außerhalb der Programmmappe einen eigenen leeren Projektordner anlegen.
2. Im Manager **Projektordner wählen …** öffnen und diesen leeren Ordner auswählen.
3. Die Frage **Neues ConsoleLite-Projekt** und den angezeigten Zielpfad prüfen.
4. Die Anlage bestätigen. **Abbrechen** lässt den Ordner leer.
5. **Interface Editor** öffnen und über **+ Modul anlegen …** das erste Modul
   erstellen. Anschließend Interface-Gruppe und Variablen vorbereiten.

![Bestätigung vor der Anlage eines neuen Projekts im gewählten leeren Ordner](images/manager/manager-new-project-1526.png)

Es entsteht eine kleine Projektstruktur mit **KonsoleLite/MODULES** und den
erforderlichen Projektkonfigurationen. Eigene Module werden nicht aus einem
fremden Projekt kopiert. Ein nichtleerer Ordner ohne gültige Projektstruktur
wird nicht überschrieben oder stillschweigend umgewandelt.

## DNC erst als eigenen Schritt einrichten

Zum Gestalten, Speichern und lokalen Prüfen ist keine DNC-Verbindung erforderlich.
Der QML Editor zeigt **Hilfe** direkt neben **Menü**. Unter **DNC / RPC erklärt …**
erläutert er gespeicherte Herstellerprofile und die getrennte Aktion **Verbinden**.

![Hilfe steht direkt neben Menü in der Werkzeugleiste des QML Editors](images/manager/qml-help-toolbar-1526.png)

![DNC-Erklärung im QML Editor mit direktem Knopf zum bebilderten PDF-Leitfaden](images/manager/qml-dnc-help-1526.png)

[Bebilderten DNC-Serviceleitfaden als PDF öffnen](assets/docs/KonsoleLite_DNC_Kommunikation_Serviceleitfaden_DE.pdf).
Das PDF hat **24 Seiten**, Dokumentstand **17.10.2026, Revision 2**, und zeigt den
früheren Pilotaufbau. Profilnamen und Adressen darin sind Beispiele. Für den
aktuellen Arbeitsplatz gilt das bewusst ausgewählte und freigegebene gespeicherte
DNC-Profil. Siehe auch [Verbindung und Transfer prüfen](#/advanced-station).
