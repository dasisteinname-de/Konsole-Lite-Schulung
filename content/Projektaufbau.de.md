# Module Seiten und Funktionstasten projektieren

Du kennst jetzt die Bedienung der Konsole. Als Nächstes bereitest du eine eigene
Seite im QML Editor vor: Modulbereich wählen, Seite anlegen, Namen vergeben und
die festen Funktionstasten erkennen. Arbeite ausschließlich in der Kurskopie.
Vorhandene Originalseiten bleiben erhalten.

Für Start / Manual / Run, Zugriffsrechte und Austausch siehe außerdem die Kapitel 1.50.0 im Kursmenü. Die allgemeinen Navigationsaufnahmen stammen aus der Kurskopie; die Konfigurationsaufnahmen zeigen den gemeinsamen Dialog von 1.52.0.

## Modul und Seite unterscheiden

Ein **Modul** ist ein Bereich der Konsole, eine **Seite** dessen einzelne Ansicht.
Ein **Anzeigename** ist der lesbare Text in der Navigation. Ein **technischer Name**
identifiziert die gespeicherte Seite; eine Änderung des Anzeigenamens benennt
nicht automatisch Dateien, Signalpfade oder Schnittstellen um.

Die Konsole besitzt feste Basismodule und ausdrücklich registrierte zusätzliche Module mit eigener stabiler Identität. Für die Kursübung wird ein Reserveplatz
wie Bereich 06 eingerichtet; Modulnummer und Verzeichnis bleiben stabil.

## Module und Seiten zentral konfigurieren

![Module und Seiten im gemeinsamen KonsoleConfigurator mit Start, Manual und Run](images/navigation-09-konfigurator.png)

1. **Menü → Projekt → KonsoleConfigurator · Module / Seiten …** öffnen.
2. Im Reiter **Module / Seiten · Start / Manual / Run** den vorhandenen
   Modulbereich oder seine Seite markieren.
3. Die Zelle **Anzeigename** doppelt anklicken und beispielsweise **Serviceanzeigen** eintragen.
   Das ändert den lesbaren Navigationstext, keine Verzeichnisse oder Signalpfade.
4. Die Seite mit den Checkboxen **Start, Manual, Run** auf die Konsolen verteilen.
   **Beim Start laden** wählt den Seitencontroller für den nächsten Modellstart.
5. **Konfiguration speichern · neu laden** wählen und den Namen im PC Live prüfen.

Der frühere separate Verwaltungsdialog entfällt. Namen, Verteilung, Rechte
und dynamische Bedingungen liegen jetzt im selben Konfigurator. Ein zusätzliches
Projektmodul wird im **Interface Editor → + Modul anlegen …** angelegt.
Das Benennen eines Reservebereichs erzeugt kein weiteres Modul.

## Eine neue Kursseite anlegen

1. Im QML Editor **Menü → Projekt → Neue Seite …** öffnen.
2. Einen freigegebenen Modulbereich wählen, beispielsweise **Bereich06** in
   der Kurskopie. Geschützte Bereiche nicht zum Ausprobieren verwenden.
3. Als technischen Namen beispielsweise **KursNavigation** eingeben.
   Mit einem Buchstaben beginnen; danach Buchstaben, Ziffern oder Unterstrich
   verwenden. Keine Leerzeichen oder Umlaute in diesem technischen Beispielnamen.
4. Als Anzeigenamen **Kurs · Navigation** eintragen.
5. Die neu angelegte Seite im Projekt-/Seitenbereich auswählen und öffnen.
6. Nach einer ersten kleinen Änderung **Speichern**, die Seite wechseln
   und wieder öffnen. Den gewählten Namen kontrollieren.

**Ergebnis:** Eine eigene gespeicherte Kursseite ist vorhanden. Sie ersetzt
keine Originalseite. Der Editor registriert die neue Seite; die Live-Konsole
führt sie nach den bisherigen Seiten desselben Moduls. In der Seitenliste
**Kurs · Navigation** wählen, zur vorigen Seite wechseln und zurückkehren.
Beim Übertragen auf einen anderen PC gehören Seite, zugehörige Dateien und
Projektkonfiguration zusammen.

## Anzeigenamen bearbeiten

1. Den **KonsoleConfigurator · Module / Seiten** öffnen.
2. Die Zelle **Anzeigename** der Modulzeile oder Seite doppelt anklicken und den Namen ändern.
3. Speichern und den Text in der Vorschau prüfen. Technische Kennungen bleiben stabil.

**Konsolentexte …** bietet ergänzend die TextDB-IDs für mehrsprachige Namen.
Eine explizite Namensvorgabe im Konfigurator ist der angezeigte Navigationstext.

**Partnerkontrolle:** Zeige auf Modulname, Seitenname und technische Seitenkennung.
Erkläre, welcher Text den Menschen hilft und welche Kennung eine Verknüpfung trägt.

## Bestehende Seiten bearbeiten

Eine vorhandene editierbare Seite im Projekt-/Seitenbereich wählen. Zuerst Titel,
Inhalt und Zugehörigkeit prüfen. Danach eine kleine nachvollziehbare Änderung
vornehmen und Speichern/Wiederöffnen kontrollieren. Gesperrte Seiten sind keine
Aufforderung, den Schutz zu umgehen; für die Übung eine eigene Seite verwenden.

Die eigentliche Gestaltung mit Bild, Text und Anzeigeelementen folgt erst im
nächsten Abschnitt von Basic. An dieser Stelle genügt es, die richtige Seite
eindeutig zu öffnen und eine Änderung wiederzufinden.

## F1 bis F8 auswählen und beschriften

![F1-bis-F8-Auswahl im echten QML Editor mit den Eigenschaften der ausgewählten festen Taste](images/navigation-07-fkeys.png)

1. Links den Reiter **F1–F8** öffnen.
2. Die gewünschte Taste doppelklicken.
3. Rechts die tatsächlich angebotenen Eigenschaften ansehen.
4. Für die Übung den sichtbaren **text** auf **Übungsinformation** ändern.
5. **Speichern** und die Beschriftung nach dem Wiederöffnen kontrollieren.

![Geänderte F1-Beschriftung als Übungsinformation in der echten Eigenschaftentabelle](images/navigation-08-fkey-text.png)

**Text und Funktion sind verschieden:** F1–F8 verwenden dieselben
Aktions- und Bindungseigenschaften wie normale Buttons. Für eine Funktion
**Aktionsart = python** und den Methodennamen ohne Klammern wählen;
für einen Seitenwechsel **navigate** mit Zielmodul und Zielseite verwenden.
Eine reine Beschriftung erzeugt keine Aktion. Vorhandene vom System belegte
Tasten und ihre Hinweise beachten.

F1 bis F8 bleiben feste Host-Tasten. Sie werden nicht wie ein zusätzliches
Button-Element auf die Seite gezogen oder gelöscht. Bestehende Funktionen im
Kurs nur nach Anweisung des Dozenten verwenden, keine Maschinenaktion testen.

## Module und Seiten ausblenden oder sperren

![Getrennte Hidden- und Enabled-Variablen im gemeinsamen KonsoleConfigurator](images/navigation-10-bindings.png)

1. Im **KonsoleConfigurator → Module / Seiten** die Modulzeile oder einzelne Seite markieren.
2. In der **6. Spalte BOOL Hidden** über **…** einen globalen BOOL-Pfad
   aus dem Interface wählen. `true` versteckt den Eintrag, `false` zeigt ihn.
3. In der **9. Spalte BOOL Enabled** über **…** einen BOOL-Pfad wählen.
   `true` erlaubt Bedienung, `false` lässt den Bereich sichtbar und gesperrt.
4. Leere Bindungen bedeuten sichtbar und bedienbar. Unbekannte gebundene
   Hidden-Werte verbergen, unbekannte Enabled-Werte sperren.
5. Speichern und mit den vorbereiteten LOCAL-Werten in PC Live testen.
   Modulbedingungen gelten zusätzlich zu Seitenbedingungen und Zugriffsprofilen.
6. Wird die aktuelle Seite verborgen, erscheint MAIN. Wird sie nur gesperrt,
   bleibt ihre Anzeige geladen; neue Eingaben und F-Tastenaktionen sind gesperrt.

Frühere positive Sichtbarkeitsbindungen behalten ihre Bedeutung. Bei vorhandenem
Altbestand zeigt der Dialog zusätzlich **Bestand: BOOL sichtbar** an.
Eine frühere feste Ausblendung kann im selben Dialog aufgehoben werden.
Ausblenden und HMI-Sperren ersetzen keine Maschinenfreigabe.

## Mehrere Elemente entfernen

Mit Strg-Klick mehrere Elemente auf der Layoutfläche markieren und **Löschen**
wählen. Eine Bestätigung nennt die gesamte Auswahl. Abbrechen erhält alle
Elemente; nach Bestätigung bleiben nicht gewählte Elemente erhalten.
Einmal **Rückgängig / Strg+Z** stellt die gesamte gelöschte Auswahl wieder her.
Dateien ändern sich erst beim Speichern.

## Interface oder Projektmodul entfernen

Im **Interface Editor** das zusätzliche Interface oder die Modulzeile im
physischen Baum auswählen. Für Module stehen **Modul archivieren …** mit
Wiederherstellung und **Modul endgültig löschen …** getrennt zur Verfügung.
Auch ein eigenes Modul ohne Interface kann archiviert oder gelöscht werden.
**Interface löschen …** entfernt eine zusätzliche Gruppe und ihren Startverweis.

Der Bestätigungsdialog nennt Projekt, Namen und Dateiumfang; Standard ist
Abbrechen. Verwendete Verweise zuerst auflösen, offene Entwürfe speichern oder
bewusst verwerfen. Feste Basismodule und primäre Modellquellen sind geschützt.
Endgültiges Löschen erstellt kein neues wiederherstellbares Modularchiv.
Die Änderung am PC beendet kein bereits laufendes Maschinenmodell.

## Von der Projektstruktur zur Seitengestaltung

Bevor du die 17 Grundelemente einsetzt, kannst du Modul, Seite, Anzeigenamen und
feste Funktionstasten finden. Jetzt folgen [Grundelemente](#/elements) und die
[BMK-LED-Bildfolge](#/bmk). **Sequence** und **Sequence Viewer** bleiben dem
Fortgeschrittenenteil vorbehalten: Erst den Ablauf bauen und verstehen, danach
seine Visualisierung in eine Maske einbinden.

## Python-Modell statt QML-Kontextname

`mainModel_sh` ist ein QML-Kontextname, kein automatisch verfügbarer Python-Global.
Im Python-Seitencontroller lautet der Modellzugang `self._model`; eine freie
Seitenfunktion erhält `model` als Argument. In Python `True` und `False`
schreiben. Den restlichen Pfad über den Interface Editor prüfen.

Auf der Station sind `modules` und `interfaces` Python-Wörterbücher. Beispiel:
`self._model.modules["Bereich07"].interfaces["vakuum"].bStop.value` (nur der Wertpfad, keine Schreibanweisung).
QML erlaubt für diese Maps Punkte; Python verlangt die eckigen Klammern.
`AttributeError: 'dict' object has no attribute ...` weist auf diese Schreibweise
hin, `KeyError` auf einen fehlenden registrierten Modul- oder Gruppennamen.
PC Live unterstützt denselben Klammerzugriff und lädt beim Neuaufbau nach dem
Speichern den gespeicherten Seitencontroller neu.

Im Dialog **Variable auswählen** den dritten **Python-Wertpfad** kopieren.
Seitenklasse `self._model` oder freie Funktion `model` bewusst auswählen.
**Variable → Python** in der Quelltextleiste öffnet die Auswahl und fügt den
Ausdruck am Cursor ein. Kopieren ändert keine Elementbindung.

Die Quelltextleiste übernimmt den Blockeinfüger aus dem Sequence Editor.
**Seiten-Python** bietet if/else, if/elif, match/case (Python 3.10+), for,
while, try/except, Rückgabe, Meldung, Variablen, Qt-Timer und Hilfsmethoden.
**Sequence CALL · ctx** enthält die CALL-Vorlagen mit IN&, OUT, Timeout und
yield; diese benötigen weiterhin den Executor-Kontext `ctx`.
QML verwendet seine eigenen JavaScript-Vorlagen. Ein Block ist eine Undo-
Aktion, Einfügen führt nichts aus. **Merken / Strg+F2** setzt lokale
Lesezeichen, F2 / Umschalt+F2 springt zwischen ihnen. Marken gehören zur
PC-Ansicht einer Datei und sind keine Maschinen-Breakpoints.

`NameError: mainModel_sh is not defined` wird durch den Start auf einer TNC
nicht behoben. Erst den Python-Zugriff korrigieren, PC Live testen und nach
Übernahme der Python-Datei Restart Apps ausführen. Ein gesetzter LOCAL-Merker
ist eine Anforderung; die tatsächliche Reaktion bestätigt der zuständige Owner.


## Lehrseiten und CFG-Test in 1.52.1

Im Modul 05 stehen die drei bisherigen Seiten sowie Page4 Buttons,
Page5 RadioButton, Page6 Checkbox, Page7 Slider, Page8 ProgressBar und
Page9 Strukturbaum zur Verfügung. Der Navigationskatalog der Console berücksichtigt
nun auch die neuen nummerierten Seiten; der selbst vergebene Modulname bleibt.

Im gelieferten **br_sh-Testprofil** sind ausschließlich CFG-Sichtbarkeit und
CFG-Lesen auf Stufe 0 gesetzt. So kann der angeforderte Test ohne Serviceanmeldung
stattfinden. Listenbearbeitung, Dateiwurzeln und sonstige Schreibrechte behalten
ihre Einstellungen. Nach Aktualisierung beider Repositories in
`codex/stabilization-1520` Restart Apps ausführen und auf MAIN **1.52.1** prüfen.
