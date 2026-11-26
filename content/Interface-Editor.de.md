# Interface Editor · Schritt für Schritt

**Variablen vorbereiten, ihre Herkunft verstehen und mit der Maske verbinden.**
Der Interface Editor ist der Ort für die Daten einer Bedienseite. Er ordnet
Variablen einem Modul und einer Interface-Gruppe zu. Im QML Editor verwendest
du anschließend diese Variablen für Texte, LEDs, Eingabefelder oder Slider.

Die Aufnahmen zeigen den echten **Interface Editor 1.52.4** in einer getrennten
LOCAL-Kurskopie mit erfundenen Signalen. Es besteht keine PLC-Verbindung.
Das geplante zusätzliche PLC-Mapping erklären wir danach in
[PLC–Python-Schnittstelle](#/plc-interface).

## Das Fenster lesen

![Aktueller Interface Editor mit Modulbaum, Variablentabelle, Formular und sichtbarer Python-Quelle](images/interface-editor-1524-local.png)

- **Links: Physische Projektstruktur.** Modul, Ordner `interfaces` und Datei
  auswählen. Eine Gruppe gehört zu einem bestimmten Modul.
- **Oben rechts: Klasse und Filter.** Die Schnittstellenklasse der Datei wählen;
  über den Filter nach Namen, Typ, Quelle oder Kommentar suchen.
- **Mitte: Variablentabelle.** Eine Zeile wählen, um ihre Eigenschaften im
  Formular zu sehen. Der Identifier bezeichnet das zugeordnete PLC-Symbol.
- **Darunter: Eigenschaften.** Name, Anbindung, Datentyp, Identifier und lokaler
  Startwert bearbeiten. **Änderung übernehmen** überträgt die Eingabe in den Entwurf.
- **Unten: Python-Quelle.** Tabelle und Quelle beschreiben dieselben Deklarationen.
  Die Quelle bleibt einsehbar und bei einer freigegebenen Datei editierbar.

**Modul, Gruppe, Variable:** `Kursmodul / KursSignale / iTestwert` benennt drei
verschiedene Dinge. Das Modul bündelt eine Aufgabe, die Gruppe bündelt ihre
Variablen, `iTestwert` ist ein einzelner Wert. Der lesbare Anzeigename einer
Seite ersetzt keinen technischen Variablennamen.

## Öffnen und das richtige Ziel wählen

1. In der Editorenauswahl **Interface** öffnen und den richtigen Projektordner prüfen.
2. Im linken Baum ein freigegebenes Modul aufklappen.
3. Unter **interfaces** eine bestehende `.py`-Datei öffnen.
4. Für eine zusätzliche Gruppe **Zusatz-Interface anlegen …** wählen, das Modul
   und einen eindeutigen Python-Gruppennamen angeben.

Die Datei liegt beispielsweise unter
`KonsoleLite/MODULES/Kursmodul/interfaces/KursSignale.py`.
Eine neue Gruppe legt kein neues Modul an. Dafür gibt es separat
**+ Modul anlegen …**. Originale Maschinenmodule und freigegebene Kursmodule
bewusst auseinanderhalten.

## Mit einer LOCAL-Variablen beginnen

Für den Einstieg genügt ein Wert im Arbeitsspeicher. Dafür ist keine PLC-Adresse nötig.

1. Die eigene Interface-Gruppe öffnen und **Signal hinzufügen** wählen.
2. Im Dialog einen Namen und Datentyp wählen, beispielsweise **Testwert / int**.
   Der Editor ergänzt das Typpräfix: daraus wird **iTestwert**.
3. Die neue Zeile markieren. **Anbindung = LOCAL** lassen.
4. Als **Lokaler Startwert · Python-Literal** beispielsweise `50` eingeben.
5. **Änderung übernehmen** wählen. Tabelle und Python-Quelle kontrollieren.
6. **Speichern** wählen und die angekündigte Sicherung bzw. Registrierung lesen.

Der Startwert gilt beim Erzeugen des Modells. Er wird nicht fortlaufend auf den
Wert zurückgeschrieben. Ein Slider darf den LOCAL-Wert anschließend verändern.
Ein Neustart kann ihn erneut mit seinem projektierten Startwert erzeugen.

| Datentyp | Bedeutung | Beispiel für einen lokalen Startwert | Python-Namenspräfix |
| --- | --- | --- | --- |
| **bool** | wahr / falsch | `True` oder `False` | `b` |
| **int** | ganze Zahl | `50` | `i` |
| **number** | Zahl mit Nachkommastellen | `0.75` | `r` |
| **text** | Zeichenfolge | `"Bereit"` | `s` |

Der tatsächliche Datentyp ist maßgeblich. Ein Name oder ein momentan angezeigtes
0/1 beweist ihn nicht. Die Namen bereits vorhandener Variablen werden nicht
pauschal umgeschrieben.

## PLC-Variablen importieren · drei Schritte

Die Importfunktion liest Definitionen aus einem gewählten PLC-Projektordner.
Sie stellt keine DNC-Verbindung her und aktiviert kein PLC-Programm.

### 1. Python-Ziel festlegen

**PLC-Projekt / DEF importieren …** öffnen. Zielmodul und eine neue oder
vorhandene Python-Datei wählen. Bei einer bestehenden Datei die angebotene
Schnittstellenklasse prüfen. Neue Dateien entstehen unter `interfaces`.

![Erster Importschritt mit Zielmodul, Python-Datei und Schnittstellenklasse](images/interface-import-ziel-1524-local.png)

Eine bereits vorhandene Datei ausdrücklich auswählen. Einen neuen Dateinamen
zu verwenden ist keine Aufforderung, eine bestehende Datei zu überschreiben.
Die Auswahl unten rechts bestätigen und den vorgesehenen PLC-Projektordner öffnen.

### 2. DEF-Dateien auswählen

Die gefundenen DEF-Dateien werden als Liste angeboten. Nach Dateinamen oder
Unterordner filtern, die benötigten Dateien markieren und
die Dateiauswahl bestätigen. Ctrl markiert einzelne Dateien, Shift
einen Bereich. Ein Filter allein wählt keine Datei aus.

![Zweiter Importschritt mit ausdrücklich markierter DEF-Datei im erfundenen Kursprojekt](images/interface-import-def-1524-local.png)

DEV_DATA ist häufig der Ablageort der PLC-Definitionen. Entscheidend ist die
konkrete DEF-Deklaration. Eine Verwendung in MOD allein reicht nicht, um einen
Datentyp zu erraten. Die PLC-Quellen werden hier gelesen und bleiben unverändert.

### 3. Einzelne Signale übernehmen

Nach Namen, Typ, Identifier, Quelle oder Kommentar filtern. Die gewünschten
Zeilen markieren und die Auswahl unten rechts bestätigen. Die Signale werden
als Python-Entwurf übernommen.

![Dritter Importschritt mit Typ, unverändertem PLC-Identifier, DEF-Herkunft und Hinweis zu einem Array](images/interface-import-signale-1524-local.png)

Vor der Übernahme prüfen:

- **Python-Name:** erhält ein Typpräfix; er ist vom Originalnamen getrennt.
- **PLC-Identifier:** benennt weiterhin das ursprüngliche Symbol.
- **DEF-Quelle : Zeile:** zeigt, woher die Deklaration stammt.
- **Hinweis:** erklärt beispielsweise einen Alias oder eine Importsperre.

Mehrdeutige Namen, nicht aufgelöste Strukturinstanzen und Arrays ohne
vereinbarten Elementzugriff werden nicht still zu einzelnen Variablen gemacht.
Bei gleichen Namen aus mehreren Quellen genau die passende Quelle auswählen.
Bereits vorhandene Namen werden durch den Import nicht überschrieben.
Die Übernahme erzeugt zunächst einen Entwurf; danach kontrollieren und speichern.

## Anbindung und Schreibrichtung unterscheiden

In der **Python-Ansicht** heißt die Tabellenspalte **Anbindung**:

| Anbindung | Datenquelle |
| --- | --- |
| **LOCAL** | Wert im lokalen Modell, ohne PLC-Adresse. |
| **PLC** | Wert mit symbolischem PLC-Identifier. |

**PLC ist keine IN-/OUT-Freigabe.** Es beschreibt die Herkunft. Ein Import
beweist nicht, dass Python ein bestimmtes Maschinenziel schreiben darf.
Read-only-Eigenschaften der Deklaration, tatsächliche Zielzuordnung und die
vereinbarte Schreibzuständigkeit müssen zusammenpassen.

Bei einem ausdrücklich geöffneten Deklarationsentwurf können außerdem die
Richtungen IN, OUT und INOUT auftreten. Sie werden aus Python-Sicht gelesen:
IN liest aus der PLC, OUT schreibt zur PLC, INOUT benötigt beide Wege.
Diese fachliche Richtung nicht mit der Anbindungsart LOCAL/PLC verwechseln.

Das [neue PLC–Python-Konzept](#/plc-interface) sieht diese Richtungswahl
nicht mehr vor: Jede dort gebundene PLC-Variable wird gelesen, verarbeitet und
zurückgeschrieben. Die Beschreibung der aktuellen Editoransicht bleibt davon
unterschieden; die neue PLC-Dateierzeugung ist noch nicht implementiert.

## Bestehende Variablen bearbeiten und speichern

1. Eine Zeile wählen und den richtigen Namen sowie Identifier prüfen.
2. Das gewünschte Feld im Formular ändern.
3. **Änderung übernehmen** wählen. Die Python-Deklaration wird im sichtbaren
   Quelltext angepasst; die Datei ist damit noch nicht gespeichert.
4. Bei direkter Quellenbearbeitung **Tabelle aus Python aktualisieren** verwenden.
5. **Speichern** wählen, die Sicherung mit `.bak` und die Registrierungsinformation lesen.
6. Die Datei schließen und erneut öffnen; die gespeicherten Werte kontrollieren.

Tabelle und Python-Quelle sind keine zwei unabhängig zu speichernden Varianten.
Die vorhandene Python-Datei wird als Quelltext analysiert, nicht zum Anzeigen
als Maschinenprogramm ausgeführt. Syntaxprüfung und Registrierung ersetzen
keinen Modellstart und keinen Nachweis an einer Maschine.

Passende zusätzliche Gruppen werden für den **nächsten Modellstart** registriert.
Auf der Station bei Python-Änderungen nach dem bestätigten Transfer
**Restart Apps** ausführen. Speichern lädt keine laufenden Python-Objekte neu.

## Die Variable im QML Editor verwenden

1. Die eigene QML-Seite öffnen und ein Element wählen, etwa einen Slider.
2. Bei **Variable / Signal** über **…** den Variablendialog öffnen.
3. Modul, Interface-Gruppe und Variable wählen, beispielsweise **KursSignale / iTestwert**.
4. Ein zweites Element, etwa ein Edit-Feld, an dieselbe Variable binden.
5. Speichern und im lokalen Live-Betrieb prüfen: Eine Änderung muss in beiden
   Elementen sichtbar werden. Der kopierte Pfad allein verändert keine Bindung.

Die technische Form lautet sinngemäß
`mainModel_sh.modules["Kursmodul"].interfaces["KursSignale"].iTestwert.value`.
Den tatsächlichen Pfad aus der Auswahl übernehmen. Im Python-Seitencontroller
das übergebene Modell verwenden; ein QML-Kontextname ist kein Python-Global.

## Umbenennen, Entfernen und Module weitergeben

Ein Variablenname kann bereits in QML, Python oder Abläufen verwendet werden.
Der Editor prüft gespeicherte Referenzen vor dem Entfernen und Umbenennen;
blockierte Verweise zuerst bewusst auflösen. Löschdialoge nennen Ziel und Umfang.
**Rückgängig** hilft beim offenen Entwurf, ersetzt aber keine Prüfung gespeicherter
Verknüpfungen nach einer Änderung.

**Modul archivieren …** nimmt ein eigenes Modul wiederherstellbar aus dem
Projekt. **Modul wiederherstellen …** holt es aus dem lokalen Archiv zurück.
**Modul endgültig löschen …** ist eine andere Aktion. Ein zusätzliches Interface
zu entfernen bedeutet nicht, die Originalvariable der PLC zu löschen.

Über **AppPool öffnen …** können Module veröffentlicht oder importiert werden.
Den bestehenden Austauschweg erklärt [AppPool](#/pool-1500).
Die geplanten zusätzlichen PLC-Dateien behandeln wir im folgenden Kapitel.

## Ergebnis prüfen

Kannst du die Gruppe im richtigen Modul wiederfinden, den Datentyp erklären,
LOCAL und PLC unterscheiden und dieselbe Variable in zwei QML-Elementen sehen?
Sind die gespeicherte Quelle und der nächste notwendige Modellstart klar?
Dann ist der grundlegende Arbeitsweg des Interface Editors nachvollziehbar.

[Weiter: PLC–Python-Schnittstelle und das neue INPUT-/OUTPUT-Konzept →](#/plc-interface)
