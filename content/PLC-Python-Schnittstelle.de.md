# PLC–Python-Schnittstelle

**Interface Editor verstehen · Konzept gemeinsam weiterentwickeln.**
Die Schnittstelle macht sichtbar, welche PLC-Variable von Python gelesen oder
verändert werden kann. Eine Anzeige, ein Slider und Python-Logik verwenden
anschließend dieselbe projektierte Verbindung.

<div class="notice blue"><strong>Diskussionsentwurf · 26.11.2026.</strong> Der bestehende Interface Editor erzeugt Python-Bindings. Die hier beschriebene zusätzliche PLC-Dateierzeugung und der neue Datenaustausch sind ein Konzept. Die genaue Synchronisierung und die Regel für das Zurückschreiben werden gemeinsam festgelegt.</div>

[Beide Infografiken als PDF · zwei Blätter A3 quer](assets/documents/PLC_PY_COM-Konzept-20261126.pdf)

## Was der Interface Editor heute macht

1. Im **Interface Editor** das betreffende Modul und die Interface-Gruppe wählen.
2. **PLC-Projekt / DEF importieren …** öffnen. Python-Ziel, DEF-Dateien und
   konkrete Signale auswählen. Im PLC-Projekt bzw. in DEV_DATA nach den
   benötigten Originalvariablen suchen; die Quellen werden dabei gelesen.
3. Herkunft, tatsächlichen Datentyp und Richtung prüfen. Ein Namenspräfix oder
   ein angezeigter Wert allein beweist keinen Datentyp.
4. Das Python-Interface speichern. Seine Variablen lassen sich danach im
   QML Editor mit Anzeige, Slider oder anderen Elementen verbinden.
   Speichern und Aktivierung im laufenden Modell sind getrennte Schritte.

| Richtung aus Python-Sicht | Bedeutung |
| --- | --- |
| **IN** | Python liest einen Wert aus der PLC. |
| **OUT** | Python gibt einen Wert an die PLC aus. |
| **INOUT** | Die Bedienbindung benötigt Lesen und Schreiben. |
| **LOCAL / CONST** | Lokaler Wert bzw. Konstante; keine neue PLC-Zuordnung. |

Heute verweisen die PLC-Bindings unmittelbar auf die ausgewählten PLC-Symbole.
Eine bestätigte DNC-Verbindung ist der Kommunikationsweg; sie legt die
fachliche Bedeutung oder Schreibzuständigkeit eines Signals nicht fest.

## Zielbild: INPUT → Python → OUTPUT

Die Auswahl im Interface Editor bleibt vertraut. Zusätzlich entstehen eigene
**PY-Schnittstellenvariablen** in der PLC. Python verwendet im Zielbild diese
PY-Symbole. Die Verbindung zum Original steht ausdrücklich im PLC-Projekt.
Ein PLC-Integrator findet dadurch beim Querverweis der Originalvariablen auch
die zugehörige Python-Schnittstelle.

![Datenwege im Diskussionsentwurf: Originalvariable, PY-Interface, INPUT-Verarbeitung und OUTPUT](images/plc-python-datenwege-entwurf-20261126.svg)

Der gewünschte fachliche Durchlauf entspricht einem Eingangs- und Ausgangsabbild:

1. **INPUT.MOD:** Aktuelle Originalwerte aus der PLC in das PY-Eingangsabbild übernehmen.
2. **Python-Verarbeitung:** Die Logik der beteiligten Module liest diese Werte.
   Sie kann Werte weiterverwenden, umrechnen oder durch eine Bedienung ändern.
3. **OUTPUT.MOD:** Das vorbereitete PY-Ausgangsabbild auf die zugeordneten
   Originalvariablen zurückführen.
4. **Erneut einlesen:** Änderungen aus der PLC werden im nächsten Eingangsabbild sichtbar.

**Beispiel Speed:** Die PLC liefert 60. Python liest 60; ein Slider gibt 80 vor.
Über den Ausgangsweg gelangt 80 an das vereinbarte PLC-Ziel. Die anschließende
Anzeige liest den tatsächlich vorliegenden PLC-Wert zurück. Symbolnamen wie
`WG_Speed` und `WG_PY_Speed_Ist` sind Beispiele; Datentyp und eindeutige Namen
werden aus dem konkreten Projekt abgeleitet.

**Vollständiges Mapping:** Für jede als bidirektional projektierte Variable gibt
es eine Zuordnung in beide Richtungen. Zur Diskussion steht die zyklische
Übertragung des gesamten Ausgangsabbilds, einschließlich unveränderter Werte.
Lesesignale bleiben IN; lokale Werte erhalten dadurch keine PLC-Adresse.

## Was wir zur Übergabe noch festlegen

PLC und Python haben bisher keinen gemeinsamen Ausführungszyklus. Die
Reihenfolge INPUT → Python → OUTPUT beschreibt zunächst den fachlichen Ablauf.
Damit jeweils das fertig verarbeitete Abbild übernommen wird, braucht die
Umsetzung eine abgestimmte Übergabe und eine klare Schreibzuständigkeit.

- Werden **alle projektierten Ausgangswerte zyklisch** übertragen oder nur
  ausdrücklich geänderte Werte? Das ist noch keine implementierte Entscheidung.
- Wann ist das Eingangsabbild vollständig gelesen und das Ausgangsabbild fertig?
- Wer darf dasselbe Ziel verändern, und was geschieht bei einer gleichzeitigen
  Änderung durch die vorhandene PLC-Logik?
- Darf eine Verbindung nur von der offenen Bedienseite schreiben oder auch von
  einem ausdrücklich freigegebenen Hintergrunddienst?
- Was gilt bei fehlenden Daten, Verbindungsabbruch und Neustart?

Eine offene Maske erlaubt die Bedienung ihrer Elemente. Die vorhandenen
Python-Seitencontroller bleiben beim Seitenwechsel erhalten; Hintergrundlogik
kann weiterlaufen. Die Sichtbarkeit einer Seite ist deshalb kein allgemeines
Schreibrecht für Python.

<details>
<summary>Mögliche technische Lösung: Übergabekennung</summary>
<p>Ein Fertig-Bit oder eine Auftragsnummer mit Antwort könnte kennzeichnen, dass ein neuer Ausgangsstand vollständig bereitliegt. Das ist eine mögliche Umsetzung der Übergabe, noch kein beschlossenes Interface-Feld. Ein zyklischer Sollwertbetrieb benötigt ebenfalls einen festgelegten Eigentümer und eine konsistente Übertragung.</p>
</details>

Der Aufwand hängt von Signalzahl, Abtastrate und Kommunikationsweg ab. Die
PLC-Zuordnungen und die DNC-Übertragung müssen getrennt gemessen werden;
aus der Zeichnung allein folgt keine belastbare Zykluszeit.

## Dateien je Modul und zwei zentrale Einstiege

![Projektstruktur im Diskussionsentwurf: PLC_PY_COM, zentrale Dateien, AppPool und Entfernen ungenutzter Verbindungen](images/plc-python-dateien-entwurf-20261126.svg)

Das Python-Interface bleibt im bestehenden Modulpfad, beispielsweise
`KonsoleLite/MODULES/<Modul>/interfaces/<Gruppe>.py`.
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
