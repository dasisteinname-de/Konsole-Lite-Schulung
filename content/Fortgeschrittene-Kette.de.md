# 2 · Eine Schrittkette verständlich aufbauen

Lernziel: Du unterscheidest einen Schritt von seiner Übergangsbedingung und
baust zuerst einen einfachen, prüfbaren Ablauf. Die Geräteaufträge folgen in
der nächsten Lektion.

## Das Zielbild lesen

![5. Die Kurskette hat Vorschritt, Aktionsschritt und Ende; die zwei CALL-Kästchen werden im nächsten Kapitel eingefügt](images/advanced-05-hauptkette.png)

Von oben nach unten lesen: **S1 Freigabe prüfen → S10 Aktion → S20 Ende**.
Ein Schritt beschreibt den aktuellen Ablaufabschnitt. Ein Übergang darunter
entscheidet, wann und wohin weitergeschaltet werden darf. Die ausgewählte
Zeile ist nicht automatisch der aktive Schritt.

## Die eigene Kopie vorbereiten

1. Im Sequence Editor das Beispiel **UnitActions** im Projektbaum öffnen.
2. **Datei → Speichern unter…** wählen und einen eigenen Kursnamen vergeben.
   Meldet der Editor „Installierte Basis bleibt unverändert“, ist genau diese
   Kopie vorgesehen. Nicht versuchen, den Schutz auszuschalten.
3. Für die erste Aufbauübung **Neu → Freie Schrittkette · ohne Grundtyp**
   wählen. Zwischen Initialschritt und Ende einen Aktionsschritt einfügen;
   die Schritte „Freigabe prüfen“, „Aktion“ und „Ende“ benennen.
4. Nummern und verständliche Namen im Bereich **Schritt** festlegen. Beim
   Endschritt die entsprechende End-Kennzeichnung verwenden.
5. Übergänge zwischen den Schritten ergänzen. Die Einfügesymbole zeigen ihre
   Funktion als Tooltip; danach rechts unter **Übergang** das Ziel prüfen.

Die gezeigte Kurskopie verwendet S1/S10/S20. Deine eigenen Nummern dürfen
anders aussehen; entscheidend sind eindeutige Identitäten und richtige Ziele.
Die UnitActions-Kopie bleibt als Referenz für den nächsten Abschnitt erhalten.

## Eine ausdrückliche Bedingung einstellen

Unter **Variablen / Bausteine** den bereits vorhandenen BOOL-Eingang benutzen:
in der freien neuen Kette **DemoPermit**, in der UnitActions-Kopie **Permit**.
Den Übergang aus dem Vorschritt auswählen und seine Bedingung mit diesem
Eingang verknüpfen. Keine zusätzliche Variablenerzeugung ist für diese Übung nötig.

![6. Nach Auswahl eines Übergangs wird rechts dessen Ziel und Bedingung bearbeitet; die gezeichnete Verbindung allein genügt nicht](images/advanced-06-uebergang.png)

1. Den verwendeten Eingang auf **FALSE** setzen und lokal starten: Die
   Freigabe fehlt; es darf nicht weitergeschaltet werden.
2. Auf **TRUE** setzen: Erst jetzt darf der Übergang bei erfüllten weiteren
   Voraussetzungen schalten. Eine globale Kettenfreigabe gilt zusätzlich.
3. Stoppen, speichern und wieder öffnen. Namen und Bedingung erneut prüfen.

Ein ausdrücklich als wahr bestätigter Übergang ist etwas anderes als eine
vergessene Bedingung. Eine offene FALSE-Stelle erst fachlich festlegen und
prüfen; nicht alle offenen Stellen pauschal auf TRUE setzen.

## Zielbestätigung ist ein Vergleich

Bei einer neu angeforderten Beispielkette für einen passenden codierten
Grundtyp kann die Zielbedingung direkt als Wertvergleich sichtbar sein.
Diese Ansicht zeigt eine dafür erzeugte Kurskopie, keine automatische
Umschreibung bereits vorhandener Bibliotheksdateien.

![15. Im geöffneten KOP-Baustein ZielErreicht wird position mit dem übernommenen command-Aufrufziel verglichen; ohne Werte bleibt UNKNOWN](images/advanced-15-zielvergleich.png)

Bei Arbeitsstellung **2** reicht Positionswert **1** nicht. Ein fehlender Wert
wird nicht wie 0 behandelt. Für mehrere Prüfungen oder BOOL-Ziele kann die
Aktionsbestätigung zusammengesetzt sein; die tatsächliche Definition ansehen,
nicht die Vergleichsformel eines anderen Grundtyps übernehmen.

## Parallelität erst nach dem einfachen Lauf

Lass dir eine vorbereitete Kette mit zwei Zweigen zeigen. Verfolge Öffnung und
Zusammenführung und erkläre, welche Bedingungen beide Zweige erfüllen müssen.
Parallel gezeichnete CALLs können trotzdem denselben exklusiven Gerätekanal
benötigen. Die Hauptkette erzeugt dadurch keine zweite Schreibberechtigung.

## Selbstkontrolle

- [ ] Ich finde Initialschritt, Folgeschritt und Endschritt.
- [ ] FALSE hält, TRUE schaltet nur bei erfüllten weiteren Voraussetzungen.
- [ ] Die gespeicherte Kopie lässt sich wieder öffnen und prüfen.
- [ ] Ich kann erklären, warum fehlende Rückmeldung nicht „Ziel erreicht“ ist.

[Weiter: Zwei Unit-Aufrufe einsetzen →](#/advanced-call)
