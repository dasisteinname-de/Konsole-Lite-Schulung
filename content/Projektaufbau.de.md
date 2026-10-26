# Module Seiten und Funktionstasten projektieren

Du kennst jetzt die Bedienung der Konsole. Als Nächstes bereitest du eine eigene
Seite im QML Editor vor: Modulbereich wählen, Seite anlegen, Namen vergeben und
die festen Funktionstasten erkennen. Arbeite ausschließlich in der Kurskopie.
Vorhandene Originalseiten bleiben erhalten.

## Modul und Seite unterscheiden

Ein **Modul** ist ein Bereich der Konsole, eine **Seite** dessen einzelne Ansicht.
Ein **Anzeigename** ist der lesbare Text in der Navigation. Ein **technischer Name**
identifiziert die gespeicherte Seite; eine Änderung des Anzeigenamens benennt
nicht automatisch Dateien, Signalpfade oder Schnittstellen um.

Für die Kursübung einen bereitgestellten freien Bereich verwenden. Der aktuelle
Editor arbeitet mit vorgegebenen Modulplätzen. Ein zusätzlicher neuer Modulplatz
lässt sich noch nicht vollständig über einen visuellen Verwaltungsdialog anlegen.
Dieser Unterschied gehört zur Übung: einen freien Bereich benennen ist nicht
dasselbe wie die Konsolenstruktur um einen zusätzlichen Platz zu erweitern.

## Eine neue Kursseite anlegen

1. Im QML Editor **Menü → Projekt → Neue Seite …** öffnen.
2. Einen freigegebenen Modulbereich wählen, beispielsweise **Bereich06** in
   der Kurskopie. Geschützte Bereiche nicht zum Ausprobieren verwenden.
3. Als technischen Namen beispielsweise **KursNavigation** eingeben.
   Mit einem Buchstaben beginnen; danach Buchstaben, Ziffern oder Unterstrich
   verwenden. Keine Leerzeichen oder Umlaute in diesem technischen Beispielnamen.
4. Als Anzeigenamen **Kurs · Navigation** eintragen.
5. Die neu angelegte Seite im Projekt-/Seitenbereich auswählen und öffnen.
6. Nach einer ersten kleinen Änderung **Layout speichern**, die Seite wechseln
   und wieder öffnen. Den gewählten Namen kontrollieren.

**Ergebnis:** Eine eigene gespeicherte Kursseite ist vorhanden. Sie ersetzt
nicht die vorhandene Originalseite. Ob die Zielkonsole eine neue Seite bereits
in ihrer Navigation anbietet, ist zusätzlich im jeweiligen Projekt zu prüfen;
ein neu angelegtes Dokument allein erweitert nicht jede feste Laufzeitnavigation.

## Anzeigenamen bearbeiten

1. Die eigene editierbare Seite öffnen.
2. **Menü → Projekt → Konsolentexte …** wählen.
3. Den lesbaren **Modulnamen** und **Seitennamen** eintragen. Die angebotenen
   TextDB-IDs sind für Übersetzungen vorgesehen; technische Identitäten nicht
   durch einen beliebigen Anzeigenamen ersetzen.
4. Den Dialog bestätigen und **Layout speichern**.
5. Die Seite wieder öffnen und Modul-/Seitentext in der Vorschau prüfen.

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
5. **Layout speichern** und die Beschriftung nach dem Wiederöffnen kontrollieren.

![Geänderte F1-Beschriftung als Übungsinformation in der echten Eigenschaftentabelle](images/navigation-08-fkey-text.png)

**Text und Funktion sind verschieden:** Bei den neuen Lite-Seiten bietet die
aktuelle Eigenschaftentabelle der festen Taste nur das Textfeld an. Ein neuer
Text erzeugt dort keine neue Funktion und keine Navigation. Die vollständige
visuelle Aktionsparametrierung ist für diese Seiten noch nicht verfügbar.
Eine Kursübung darf deshalb keine neue Tastenaktion versprechen, die nur durch
zusätzlichen Quellcode zustande käme.

F1 bis F8 bleiben feste Host-Tasten. Sie werden nicht wie ein zusätzliches
Button-Element auf die Seite gezogen oder gelöscht. Bestehende Funktionen im
Kurs nur nach Anweisung des Dozenten verwenden, keine Maschinenaktion testen.

## Module und Seiten bedingt anzeigen

Ein optionaler Bereich kann abhängig von einer booleschen Variable oder einem
Parameter in der Navigation verfügbar sein. Die Konsolen-Konfiguration kennt
dafür Voraussetzungen pro Modul und pro Seite. Die heutige Editoroberfläche
bietet noch keine durchgängige visuelle Verwaltung dieser Bedingungen.

Im Basic-Kurs erklärt ein vorbereitetes Beispiel den Unterschied zwischen
„vorhanden, aber nicht angezeigt“ und „gelöscht“. Keine versteckte QML-/JSON-
Bearbeitung als einfache Klickbedienung ausgeben. Sobald der Verwaltungsdialog
verfügbar ist, wird dieser Abschnitt um dessen konkrete Bildfolge ergänzt.
Ausblenden ersetzt weder Zugriffsschutz noch Maschinenfreigabe.

## Von der Projektstruktur zur Seitengestaltung

Bevor du die 17 Grundelemente einsetzt, kannst du Modul, Seite, Anzeigenamen und
feste Funktionstasten finden. Jetzt folgen [Grundelemente](#/elements) und die
[BMK-LED-Bildfolge](#/bmk). **Sequence** und **Sequence Viewer** bleiben dem
Fortgeschrittenenteil vorbehalten: Erst den Ablauf bauen und verstehen, danach
seine Visualisierung in eine Maske einbinden.
