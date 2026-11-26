# PLC–Python-Schnittstelle

**Interface Editor verstehen · Konzept gemeinsam weiterentwickeln.**
Die Schnittstelle macht sichtbar, welche PLC-Variable von Python gelesen oder
verändert werden kann. Eine Anzeige, ein Slider und Python-Logik verwenden
anschließend dieselbe projektierte Verbindung.

<div class="notice blue"><strong>Diskussionsentwurf · 26.11.2026.</strong> Der bestehende Interface Editor erzeugt Python-Bindings. Die hier beschriebene zusätzliche PLC-Dateierzeugung und der neue Datenaustausch sind ein Konzept. Alle gebundenen PLC-Variablen werden gelesen und zurückgeschrieben. Die technische Synchronisierung, Zyklusanbindung und Schreibzuständigkeit werden gemeinsam festgelegt.</div>

[Beide Infografiken als PDF · zwei Blätter A3 quer](assets/documents/PLC_PY_COM-Konzept-20261126.pdf?v=physical-tree)

Den vollständigen Bedienweg mit aktuellen Aufnahmen findest du unter
[Interface Editor · Schritt für Schritt](#/interface-editor). Beide Kapitel gehören zu Basic.

## Was der Interface Editor heute macht

1. Im **Interface Editor** das betreffende Modul und die Interface-Gruppe wählen.
2. **PLC-Projekt / DEF importieren …** öffnen. Python-Ziel, DEF-Dateien und
   konkrete Signale auswählen. Im PLC-Projekt bzw. in DEV_DATA nach den
   benötigten Originalvariablen suchen; die Quellen werden dabei gelesen.
3. Herkunft, tatsächlichen Datentyp und Anbindung prüfen. Ein Namenspräfix oder
   ein angezeigter Wert allein beweist keinen Datentyp.
4. Das Python-Interface speichern. Seine Variablen lassen sich danach im
   QML Editor mit Anzeige, Slider oder anderen Elementen verbinden.
   Speichern und Aktivierung im laufenden Modell sind getrennte Schritte.

Heute verweisen die PLC-Bindings unmittelbar auf die ausgewählten PLC-Symbole.
Eine bestätigte DNC-Verbindung ist der Kommunikationsweg; sie legt die
fachliche Bedeutung oder Schreibzuständigkeit eines Signals nicht fest.

## Zielbild: INPUT → Python → OUTPUT

Die Auswahl im Interface Editor bleibt vertraut. Zusätzlich entstehen eigene
**PY-Schnittstellenvariablen** in der PLC. Python verwendet im Zielbild diese
PY-Symbole. Die Verbindung zum Original steht ausdrücklich im PLC-Projekt.
Ein PLC-Integrator findet dadurch beim Querverweis der Originalvariablen auch
die zugehörige Python-Schnittstelle.

**Beispiel PLC-Querverweis:** Der PLC-Entwickler sucht `WG_Speed`. Im Mapping
von `PY_HGM_IN.MOD` bzw. `PY_HGM_OUT.MOD` findet er die zugehörige
PY-Schnittstellenvariable **`WG_PY_Speed`**. Damit ist erkennbar, dass dieser
Wert in Python verarbeitet und dort möglicherweise verändert wird. Ob eine
Änderung tatsächlich erfolgt, ergibt sich aus der konkreten Python-Logik
und Bedienung.
Die gefundene PY-Verknüpfung ist in der Grafik gelb hervorgehoben;
darunter sind beide zugehörigen MOD-Dateien vollständig benannt.

**Einheitlicher Umgang mit jeder gebundenen PLC-Variable:** Jede Variable
wird zu Beginn aus der PLC aktualisiert und am Ende an ihr Original
zurückgegeben. Im Interface wählst du das Symbol und prüfst seinen Datentyp;
eine Richtungskategorie wird dafür nicht benötigt. **BOOL, Integer und die
anderen Datentypen bleiben erhalten.** INPUT und OUTPUT bezeichnen die beiden
Verarbeitungsphasen derselben Verbindung. LOCAL-Werte und Konstanten sind
weiterhin keine PLC-Verbindungen.

![Datenwege im Diskussionsentwurf: Originalvariable, PY-Interface, INPUT-Verarbeitung und OUTPUT](images/plc-python-datenwege-entwurf-20261126.svg)

Die Grafik wird **von oben nach unten** gelesen. Beide Pfeilreihen laufen
**von links nach rechts**. Dazwischen zeigt der breite Python-Block die
Verarbeitung am Beispiel **60 ⇒ 80**.

Der gewünschte fachliche Durchlauf entspricht einem Eingangs- und Ausgangsabbild:

1. **INPUT.MOD:** Alle gebundenen Originalwerte aus der PLC in die zugehörigen
   PY-Variablen übernehmen.
2. **Python-Verarbeitung:** Die Logik der beteiligten Module liest diese Werte.
   Sie kann Werte weiterverwenden, umrechnen oder durch eine Bedienung ändern.
3. **OUTPUT.MOD:** Alle zugeordneten PY-Werte auf ihre Originalvariablen
   zurückführen — auch die Werte, die Python nicht verändert hat.
4. **Erneut einlesen:** Änderungen aus der PLC werden im nächsten Eingangsabbild sichtbar.

**Beispiel Speed:** Die PLC liefert 60. Python liest 60; ein Slider gibt 80 vor.
Über den Ausgangsweg gelangt 80 an das vereinbarte PLC-Ziel. Die anschließende
Anzeige liest den tatsächlich vorliegenden PLC-Wert zurück. Symbolnamen wie
`WG_Speed` und `WG_PY_Speed` sind Beispiele; Datentyp und eindeutige Namen
werden aus dem konkreten Projekt abgeleitet.

**Vollständiges Mapping:** Für jede gebundene PLC-Variable entstehen beide
Zuordnungen: Original → PY in INPUT.MOD und PY → Original in OUTPUT.MOD.
Die Variable wird nicht auf eine Seite des Datenaustauschs beschränkt.
Auch ein schreibbarer Wert wird deshalb im nächsten Durchlauf erneut gelesen.
Wenn die PLC nach dem Sliderwert 80 einen Wert 75 bereitstellt, beginnt der
nächste Eingangsstand mit 75. Die Python-Logik entscheidet anschließend über
das Ergebnis dieses Durchlaufs.

## Was wir zur Übergabe noch festlegen

PLC und Python haben bisher keinen gemeinsamen Ausführungszyklus. Die
Reihenfolge INPUT → Python → OUTPUT beschreibt zunächst den fachlichen Ablauf.
Damit jeweils das fertig verarbeitete Abbild übernommen wird, braucht die
Umsetzung eine abgestimmte Übergabe und eine klare Schreibzuständigkeit.

- Wann beginnt und endet der vollständige Durchlauf mit allen gebundenen Werten?
- Wann ist das Eingangsabbild vollständig gelesen und das Ausgangsabbild fertig?
- Wer darf dasselbe Ziel verändern, und was geschieht bei einer gleichzeitigen
  Änderung durch die vorhandene PLC-Logik?
- Darf eine Verbindung nur von der offenen Bedienseite schreiben oder auch von
  einem ausdrücklich freigegebenen Hintergrunddienst?
- Welche konkreten PLC-Zielsymbole unterstützen die erforderliche Rückschreibung?
  Das wird bei der Zielprüfung geklärt, nicht durch einen geratenen Datentyp.
- Was gilt bei fehlenden Daten, Verbindungsabbruch und Neustart?

Eine offene Maske erlaubt die Bedienung ihrer Elemente. Die vorhandenen
Python-Seitencontroller bleiben beim Seitenwechsel erhalten; Hintergrundlogik
kann weiterlaufen. Die Sichtbarkeit einer Seite ist deshalb kein allgemeines
Schreibrecht für Python.

Der Aufwand hängt von Signalzahl, Abtastrate und Kommunikationsweg ab. Die
PLC-Zuordnungen und die DNC-Übertragung müssen getrennt gemessen werden;
aus der Zeichnung allein folgt keine belastbare Zykluszeit.

## Dateien je Modul und zwei zentrale Einstiege

![Projektstruktur im Diskussionsentwurf: PLC_PY_COM, zentrale Dateien, AppPool und Entfernen ungenutzter Verbindungen](images/plc-python-dateien-entwurf-20261126.svg)

Das Python-Interface bleibt an seinem tatsächlichen Ort im br_sh-Projekt:
`KonsoleLite/MODULES/Hintergrundmagazin/interfaces/interface.py`.
**MODULES**, **Hintergrundmagazin** und **interfaces** sind drei getrennte
Ordnerebenen; **interface.py** ist die Datei innerhalb von **interfaces**.
Die Grafik zeigt jede Ebene einzeln. HGM ist die Abkürzung für Hintergrundmagazin.
Weitere Interface-Gruppen können als eigene Python-Dateien im selben
`interfaces`-Ordner liegen.
Der zusätzliche achte Projektordner heißt **`KonsoleLite/PLC_PY_COM/`**.

Je Modul gehören künftig zum Python-Interface drei PLC-Dateien:

| Datei, beispielhaft | Aufgabe |
| --- | --- |
| `PY_HGM.DEF` | Neue PY-Schnittstellensymbole mit den passenden Datentypen definieren. |
| `PY_HGM_IN.MOD` | Originalwerte in das PY-Eingangsabbild übernehmen. |
| `PY_HGM_OUT.MOD` | Das vorbereitete PY-Ausgangsabbild an die vereinbarten PLC-Ziele übertragen. |

Die zentralen Dateien **`PLC_PY_COM.DEF`** und **`PLC_PY_COM.MOD`** werden einmal
in DEV_DATA bzw. SOURCE_DATA eingebunden. Auch die nötigen zyklischen IN-/OUT-Aufrufe
werden bei dieser Integration eingerichtet. Neue Module werden danach in den
beiden zentralen Dateien registriert. Genaue Include-/Aufrufsyntax und
Aufrufreihenfolge werden mit dem PLC-Projekt abgestimmt.

Eine bestehende Originaldeklaration wird weder umbenannt noch entfernt.
Das gezielte Schreiben auf einen vereinbarten Originalwert gehört dagegen zum
projektierten Ausgangsweg. Die Umstellung der bisherigen direkten
Python-Bindings ist Teil der späteren Umsetzung.

## AppPool: das vollständige Modul weitergeben

Zum Modulpaket gehören QML-Seiten, Controller und bestehende Python-Interfaces
sowie die neue DEF-Datei und beide MOD-Dateien. Beim Import soll die Konsole
zusammenhängend prüfen und pflegen:

1. Dateien am vorgesehenen Modul- bzw. PLC_PY_COM-Pfad ablegen.
2. Vorhandene PLC-Zielsymbole, Datentypen und Namens-/Schreibkonflikte prüfen.
3. Den Moduleintrag in **beiden** zentralen Dateien ergänzen, ohne Duplikate.
4. Die geplanten Änderungen vor der Übernahme nachvollziehbar anzeigen.

PLC-Übersetzung, Laden und Aktivierung sind gesondert festzulegen. Eine
Dateiregistrierung allein aktiviert kein neues PLC-Programm.

## Ungenutzte Verbindungen sauber entfernen

Wird eine Interface-Variable nicht mehr verwendet, werden nach Referenzprüfung
und Bestätigung ihre **Python-Bindung, PY-Definition und IN-/OUT-Zuordnung**
zusammen entfernt. So zeigt der PLC-Querverweis keine veraltete Python-Nutzung an.
Beim Entfernen eines ganzen Moduls werden auch dessen zentrale Registrierungen
bereinigt. Die ursprünglichen PLC-Deklarationen und andere Modulverbindungen
bleiben erhalten.

**Für das Gespräch:** Können beide Fachrichtungen dieselbe Verbindung vom
Originalsymbol bis zur Bedienung verfolgen? Sind Eingang, Verarbeitung,
Ausgang, Schreibzuständigkeit und Ausfallverhalten verständlich? Offene
Entscheidungen werden hier ergänzt; diese Kapiteldatei bleibt der gemeinsame
Stand des Konzepts.

[Interface und bestätigten Stationsweg weiter betrachten →](#/advanced-station)

[Zurück zum Grundkonzept der Konsole →](#/concept)
