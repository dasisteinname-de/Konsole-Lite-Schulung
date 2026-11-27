# Anhang B · Einen Arbeitsplatz aktivieren

**Der Empfänger speichert einen Antrag und importiert die darauf ausgestellte
Lizenz.** Die Dateien werden bewusst zwischen Empfänger und Herausgeber
übergeben; der Manager versendet nichts automatisch.

[Manager installieren](#/manager-installation) · [Projekt auswählen](#/manager-project)

## Aktivierung öffnen

Im ConsoleLite Manager unten links **Aktivierung …** wählen. Im Fenster
**Offline-Aktivierung** stehen zwei getrennte Aktionen:

![Offline-Aktivierung mit Antrag speichern links und Lizenz importieren rechts](images/manager/manager-activation-1526.png)

| Aktion | Ergebnis |
| --- | --- |
| **Anforderung speichern …** | Speichert den Antrag für genau diesen Arbeitsplatz als JSON-Datei. |
| **Lizenz importieren …** | Übernimmt die vom Herausgeber zurückgegebene, signierte JSON-Lizenz. |

Die lange Kennung gehört zum lokalen Arbeitsplatz. Es genügt, den gespeicherten
Antrag zu übergeben; die Kennung muss nicht von Hand abgeschrieben werden.

## Antrag speichern und übergeben

1. **Anforderung speichern …** anklicken.
2. Einen wieder auffindbaren eigenen Ordner wählen und beispielsweise
   **CL7.request.json** speichern.
3. Diese Antragsdatei an den zuständigen Herausgeber geben. Den gewünschten
   Lizenznehmer beziehungsweise Arbeitsplatznamen mitteilen.
4. Die signierte Arbeitsplatzlizenz vom Herausgeber erhalten und auf diesem PC
   speichern. Sie ist ebenfalls eine JSON-Datei.

Der Antrag alleine aktiviert die Werkzeuge noch nicht. Das Ausstellen übernimmt
der Herausgeber mit seinem eigenen Werkzeug. Der Empfänger benötigt dafür weder
einen privaten Ausstellerschlüssel noch eine Administratorfreigabe.

## Die erhaltene Lizenz importieren

1. Zurück zum **ConsoleLite Manager** gehen.
2. **Aktivierung … → Lizenz importieren …** öffnen.
3. Die **zurückerhaltene Lizenzdatei** wählen, zum Beispiel
   **Workstation-… .json**, und **Öffnen** drücken.
4. Bei erfolgreicher Prüfung schließt sich das Aktivierungsfenster. Im Manager
   erscheint **Aktiviert für …** mit dem ausgestellten Namen.

![Nach erfolgreichem Import zeigt der Manager Aktiviert für und farbige Editorikonen](images/manager/manager-active-1526.png)

Die Editoren sind jetzt freigegeben; ein Neustart ist für den Import nicht nötig.
Als Nächstes den [Projektordner auswählen](#/manager-project).

## Antrag und Lizenz auseinanderhalten

Beide Dateien enden auf **.json**. Entscheidend ist ihre Aufgabe:

```text
Dieser Arbeitsplatz
  → Antrag speichern
  → Antrag an den Herausgeber
  ← signierte Arbeitsplatzlizenz zurückerhalten
  → Lizenz im Manager importieren
  → Aktiviert für …
```

Eine Kopie des eigenen Antrags, ein Prüfbericht oder eine Administratorfreigabe
ist keine importierbare Arbeitsplatzlizenz. Die erhaltene JSON-Lizenz nicht
bearbeiten: Ihre Signatur schützt auch den Lizenznehmer und die Rechnerzuordnung.

## Wenn die Werkzeuge gesperrt bleiben

- **Noch nicht aktiviert:** prüfen, ob nach dem Ausstellen auch der Import im
  normalen Manager durchgeführt wurde.
- **Falscher Computer:** die Lizenz gehört zum PC oder zur VM, von dem der Antrag
  stammt. Für einen anderen Arbeitsplatz einen neuen Antrag speichern.
- **Signatur oder Dateiformat ungültig:** die unveränderte Lizenzdatei und die
  vollständige Meldung mit dem Herausgeber klären.
- **Fehlende Bibliothek zur Signaturprüfung:** den fertigen Manager aus dem
  vollständig entpackten Windows-Paket starten; der Anwender muss keine
  Python-Bibliotheken nachinstallieren.

Bestehende gültige Lizenzen bleiben bei einem abgewiesenen Import erhalten.
Normale Programmupdates auf demselben Arbeitsplatz benötigen keine neue Lizenz.
Zurück zur [Installation und Update-Anleitung](#/manager-installation).
