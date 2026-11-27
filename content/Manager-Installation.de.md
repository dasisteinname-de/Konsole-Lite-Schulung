# Anhang A · ConsoleLite Manager installieren und starten

**Ein Programmordner, ein gewähltes Projekt und alle Editoren an einem Ort.**
Der ConsoleLite Manager öffnet Interface, QML, Grundtypen, Units und Sequence
als eigene Fenster. Die benötigten Python-/Qt-Bibliotheken gehören zum fertigen
Windows-Paket. Auf dem Arbeitsplatz ist dafür keine Python- oder VS-Code-Installation
erforderlich. Dieser Bedienweg gilt für Windows 10/11 x64.

[Arbeitsplatz aktivieren](#/manager-activation) ·
[Projekt wählen und beginnen](#/manager-project)

## Das erhaltene Paket vollständig entpacken

1. Das Windows-Paket vom zuständigen Herausgeber erhalten und speichern.
2. Im Explorer **Alle extrahieren …** wählen. Die fertige Programmmappe an einen
   beschreibbaren Ort auf diesem PC legen.
3. Die entpackte Mappe öffnen und **CL7Manager.exe** starten.
4. Die benachbarten DLLs, Unterordner und Dokumente zusammenlassen. Ein einzelnes
   herauskopiertes EXE ist nicht der vollständige Programmordner.

```text
Eigene Programme/
└─ ConsoleLiteEditors/
   ├─ CL7Manager.exe       ← hier starten
   ├─ CL7Updater.exe
   ├─ System/
   ├─ Tools/
   └─ weitere Bibliotheken und Programmdateien
```

Der Anwender benötigt den **Manager mit den Editoren**. Der gesonderte License
Manager ist das Ausstellerwerkzeug; er gehört nicht zum normalen Aktivierungsweg
des Empfängers. Ein eventuell erhaltener gemeinsamer Download kann mehrere ZIPs
enthalten. Dann zuerst den äußeren Download und anschließend das darin enthaltene
Manager-Paket vollständig entpacken.

## Den ersten Start erkennen

![ConsoleLite Manager vor der Aktivierung mit noch gesperrten Werkzeugen](images/manager/manager-inactive-1526.png)

Oben stehen das CL7-Zeichen, **ConsoleLite Manager** und die Sprachauswahl.
Darunter zeigt das Projektfeld den gewählten Projektordner. **Noch kein Projekt
gewählt** ist beim ersten Start ein normaler Zustand.

Die erste Werkzeuggruppe enthält **Interface Editor** und **QML Editor**.
Die zweite enthält **Grundtypen**, **Units Editor** und **Sequence Editor**.
**Diagnostic Center** und **Schulung öffnen** stehen unten.

Vor der Aktivierung bleiben die Werkzeuge gesperrt. Die nächsten Schritte sind
im [Aktivierungsablauf](#/manager-activation) mit Bildern beschrieben.

## Nach der Aktivierung

![Aktivierter Manager mit farbigen, verfügbaren Werkzeugen](images/manager/manager-active-1526.png)

Die Statuszeile zeigt **Aktiviert für …**, und die Werkzeuge werden farbig.
Ein Doppelklick oder **Enter** öffnet das gewählte Werkzeug. Ist noch kein
Projekt zugeordnet, folgt zuerst die [bewusste Wahl des Projektordners](#/manager-project).
Bereits geöffnete Editoren bleiben eigenständige Fenster. Das Schließen des
Managers beendet diese Fenster nicht.

## Wenn das Fenster nicht erscheint

- Prüfen, ob die ZIP-Datei vollständig entpackt wurde und die EXE aus dieser
  entpackten Mappe gestartet wird.
- Im Taskbereich nach einem bereits geöffneten Fenster sehen; ein zweiter Start
  kann ein vorhandenes Editorfenster in den Vordergrund holen.
- Im Manager **Installation prüfen …** verwenden und die angezeigte Meldung dem
  Herausgeber geben. Für diesen lokalen Test ist keine Maschinenverbindung nötig.
- Bei **Systemordner enthält keinen vollständigen KonsoleLite-Motor** den
  geprüften aktuellen Programmstand verwenden. Der Fehler früherer nativer
  Piloten wird durch das vollständige Programmupdate behoben; Projektdateien
  und einzelne Python-Dateien müssen dafür nicht ausgetauscht werden.

## Programmupdate auf diesem Arbeitsplatz

1. Eigene Entwürfe speichern und alle Editoren schließen.
2. Den vom Herausgeber gelieferten **signierten Update-ZIP** speichern.
3. Im Manager **Programm → Signiertes Update installieren …** öffnen und den
   Update-ZIP wählen. Dieses Update wird nicht vorher wie ein normales
   Installationspaket entpackt.
4. Der Manager schließt sich. Der eigene Updatehelfer prüft die passende
   Ausgangsversion, die Signatur und die Programmdateien und zeigt die geplante
   Änderung. Erst nach Bestätigung wird sie übernommen.
5. Danach den Manager aus seinem bisherigen Programmordner erneut starten und
   Version, Aktivierungsstatus und gewählten Projektpfad kontrollieren.

Die Lizenz bleibt auf **demselben Computer und im selben Windows-Benutzerprofil**
erhalten. Sie liegt außerhalb des Programmordners. Projektordner und eigene
AppPools bleiben getrennt. Der Helfer behält die vorherige Programmmappe als
Rückkehrstand. Ein Update für eine andere Ausgangslieferung oder lokal veränderte
bekannte Programmdateien wird mit einer Meldung abgewiesen.

Eine neue oder andere VM beziehungsweise ein anderer Computer benötigt eine
eigene Arbeitsplatzlizenz. Die DNC-Komponenten des Herstellers werden getrennt
installiert; die Freigabe der Editoren allein richtet noch keine Maschinenverbindung ein.
