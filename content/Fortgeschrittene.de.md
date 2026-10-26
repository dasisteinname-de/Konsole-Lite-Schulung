# Schulungsunterlagen Fortgeschrittene

Zwei Tage nach Basic. Hier beginnen Units, CALL SK und Schrittketten; Basic
hat Konsolenbedienung und Oberflächengestaltung vermittelt. Du entwickelst eigene
Definitionen, ordnest konkrete Geräte zu und verbindest mehrere Aktionen zu
einer nachvollziehbaren Anwendung.
Voraussetzung ist der [Basic-Abschluss](#/basic). Alle Versuche bleiben LOCAL;
die [Kursübersicht](#/overview) nennt die noch offenen Maschinenfunktionen.

## Tag 1 Schnittstellen und Geräte selbst definieren

**Tagesziel:** Du kannst eine Grundtypbeschreibung begründen, eine Unit explizit
zuordnen und eine Wertänderung kontrolliert übernehmen.

### Grundtyp Unit und Kette kennenlernen

Richtzeit 45 Minuten. Der Dozent öffnet zuerst den gelieferten CylinderCoded-Typ,
dann Ax51 und seine Arbeitsstellungsaktion. Gemeinsam zeigen, woher Gerätenummer,
Befehlswert und Zielrückmeldung kommen. Grundtyp, konkrete Unit, Bibliothekskette
und CALL unterscheiden. Im gelieferten Beispiel bedeutet Rückmeldung 1
Grundstellung und 2 Arbeitsstellung. Anschließend dem Partner die Zusammenhänge
erklären; Vorkenntnisse zur Ablaufprogrammierung werden nicht aus Basic erwartet.

### Einen eigenen Grundtyp entwerfen

Richtzeit 60 Minuten.

1. Einen neuen Entwurf unter eigener Kennung anlegen, nicht den vorhandenen
   veröffentlichten Typ verändern. Aufgabe: ein Zylinder mit zwei Positionen.
2. Eine Integer-IN-Rolle für die Rückmeldung und eine Real-OUT-Rolle für den
   Positionsbefehl definieren. Bei benötigter Gerätenummer eine Integer-OUT-Rolle
   mit der Wertquelle Unit-Gerätenummer vorsehen.
3. Für Position und Befehl jeweils home und work mit passenden typisierten
   Beispielwerten definieren. Anzeigenamen lesbar benennen.
4. In der dritten Tabelle Home und Work mit ihren Befehlen und Zielprüfungen
   ausdrücklich verknüpfen. Die Kennung allein ersetzt kein Aktionsmapping.
5. Im Partnerreview prüfen: Typen, Richtungen, eindeutige Ziele und fehlende
   Angaben. Erst danach veröffentlichen.

**Wichtig:** Ein neuer veröffentlichter Grundtyp bringt nicht automatisch eine
fertige Ablaufkette mit. Eine neu erzeugte Bibliothekskette enthält zunächst eine
offene FALSE-Bedingung. Für die Laufübungen verwenden wir den gelieferten,
geprüften CylinderCoded-Typ und seine passende Bibliothekskette. Die eigene
Typbeschreibung ist eine getrennte Entwurfs- und Reviewübung.

### Eine eigene Unit zuordnen

Richtzeit 60 Minuten. Aus dem gelieferten CylinderCoded-Typ in der Kurskopie eine
neue Unit, beispielsweise Ax53, erstellen.

1. Name, Modul und Gerätenummer bewusst wählen.
2. Für jede Rolle die Quelle und gegebenenfalls die tatsächliche Zielvariable
   zeigen. Die Gerätenummer ist eine Wertquelle, nicht selbst ihr PLC-Ziel.
3. Am HGM-Beispiel die sichtbare Umrechnung des Befehlswerts mit Faktor 10000
   erklären. Sie gehört nicht als zusätzliche Zahl in den CALL.
4. Den Neutralwert einmal an der Unit festlegen. Vorgeschlagene Zuordnungen
   prüfen; Schreibrechte nicht zur Umgehung einer Meldung bestätigen.
5. Speichern und wieder öffnen. Der Dozent prüft vor dem LOCAL-Aufruf die
   Vollständigkeit und die passende Bibliothekskette.

**Fehlerübung:** Eine fehlende Zuordnung finden und den Grund erklären, statt
eine zufällige Variable zu wählen. Eine gespeicherte Zuordnung schreibt noch
nichts an die PLC.

### Werte und Parameter ändern ohne die Struktur umzubauen

Richtzeit 90 Minuten.

In der Kurskopie einen Anzeigenamen beziehungsweise eine TextDB-ID ändern,
eine Wertrevision speichern und ihre Übernahme an der Unit ausdrücklich prüfen.
Eine frühere Wertrevision wiederherstellen. Erklären, warum ein laufender Aufruf
seine bereits übernommenen Werte behält. Strukturelle Änderungen benötigen
weiterhin eine neue Strukturversion; sie sind keine bloße Wertrevision.

Danach am gelieferten ServoAxis-Beispiel eine Aktion mit Zielposition und
Geschwindigkeit lesen. Zielposition 5 und einen benannten Geschwindigkeitswert
auswählen. Für einen Lauf muss der Dozent zuvor eine passende LOCAL-Unit
vollständig zugeordnet haben. Die Geschwindigkeitswerte sind Übungswerte,
keine Freigabe für eine reale Achse.

CONST und INOUT an einem vorbereiteten Beispiel erläutern: Eine Konstante darf
nicht geschrieben werden; eine INOUT-Arbeitskopie wird nur bei erfolgreichem
Abschluss zurückgegeben. Keine ungeprüften Signalrollen ergänzen, nur damit
ein Versuch scheinbar startet.

### Tageskontrolle

Richtzeit 45 Minuten.

- [ ] Meine Typbeschreibung benennt Befehle und Zielbestätigung ausdrücklich.
- [ ] Meine Unit zeigt Wertquelle, Ziel und Neutralwert nachvollziehbar.
- [ ] Ich kann Strukturversion und Wertrevision unterscheiden.
- [ ] Ich weiß, welche Bibliothekskette zum ausgewählten Typ gehört.

## Tag 2 Eine Anwendung zusammensetzen und übergeben

**Tagesziel:** Eine verständliche Maske und eine lokal getestete Hauptkette
bilden ein erklärbares Projekt. Noch fehlende Laufzeitanschlüsse bleiben sichtbar.

### Aufgabenbeschreibung und Ablauf

Richtzeit 30 Minuten. Die Kurs-Beladestation besitzt zwei Zylinder. Beide sollen
in Arbeitsstellung angefordert werden; der Hauptschritt darf erst weiterlaufen,
wenn beide Aktionen bestätigt sind und seine Übergangsbedingung erfüllt ist.
Auf Papier kurz Sollzustand, Rückmeldungen und Abbruchbedingungen notieren.

### Zwei Aufrufe in der Hauptkette

Richtzeit 105 Minuten.

1. Eine eigene Kurskopie der Deutschen Ampel öffnen. Der Dozent erklärt Schritt,
   Übergang, Schritteingangsaktion und den Unterschied von Auswahl und aktivem
   Schritt. Zuerst einen CALL SK mit Unit, Aktion und Überwachungszeit einfügen;
   anschließend einen zweiten passenden Unit-Aufruf ergänzen. Keine Kopie ihrer
   Zahlenwerte in normale Aktionen schreiben.
2. Stoppen, speichern und Aktiv/Entwurf vergleichen. Erst danach testen.
3. Beide Rückmeldungen zunächst auf Grundstellung setzen. Den ersten Aufruf
   mit den lokalen Betriebsarten-/Freigabeeingängen nach der
   [CALL-Kurzbedienung](#/quickguide) freigeben und sein Ziel
   bestätigen; danach den zweiten beobachten. Zahlen mit Enter übernehmen.
4. Den gemeinsamen Kanal erklären: Zwei CALL-Kästchen bedeuten hier keine zwei
   gleichzeitig aktiven HGM-Aufträge. Im Handbetrieb benötigt jeder Aufruf
   eine eigene frische NC-Start-Bestätigung.
5. Einen zweiten Durchlauf mit bereits erreichten Zielen und einen getrennten
   Timeout-Versuch durchführen. Erledigte Aktion und angeforderte Bewegung
   nicht gleichsetzen.

Der Dozent zeigt anschließend eine separate vorbereitete LOCAL-Kette mit
Parallelzweigen. Bedingungen und Zusammenführung lesen: Parallelität in der
Hauptkette hebt den exklusiven Besitz eines gemeinsamen Gerätekanals nicht auf.

### Die Maske mit den Unit-Aktionen projektieren

Richtzeit 60 Minuten.

1. Die eigene Basic-Maske öffnen und einen Button auswählen.
2. ActionType Unit einstellen und in der Unit-Aktionsauswahl Gerät, erlaubte
   Aktion und Überwachungszeit wählen. Keine QML-Zeile von Hand formulieren.
3. Ein zweites Bedienelement entsprechend zuordnen. Sinnvoll beschriften,
   die Zuordnung direkt im Eigenschaftenbereich übernehmen, speichern und wieder
   öffnen; Unit, Aktion und Timeout dort kontrollieren.

**Ausführungsgrenze:** Die Unit-Taste ist ohne installierten Ausführungsowner nicht
mit der realen Ausführung verbunden. Die erwartete Sperrmeldung gehört zur
Prüfung; nicht mit Python-Bindings oder einem direkten Ausgangsschreiben umgehen.
Kettenfunktion und Maskenzuordnung werden deshalb getrennt nachgewiesen.

### Diagnoseübung und Übergabe

Richtzeit 30 Minuten. Der Partner baut in der Kurskopie einen nachvollziehbaren
Testfehler ein; der andere erklärt Ursache und vorgesehenen nächsten Schritt.

| Testfall | Erwartete Beobachtung |
| --- | --- |
| Betriebliche Freigabe fehlt | Aufruf wartet, kein Start |
| AUTO und HAND gleichzeitig | Verständlicher Fehler, keine Fortsetzung |
| Falsche Position bis Zeitablauf | Timeout rot, fehlende Zielbestätigung sichtbar |
| Rückmeldung unbekannt | UNKNOWN statt erfundener Position |
| NC Start im Handlauf loslassen | Noch offener Aufruf wartet, Befehle neutral |
| Stop bei wartendem Folgeauftrag | Kein verspäteter Start des Folgeauftrags |

Nach einem Timeout **Timeout quittieren** wählen: gleicher Schritt, neue
Überwachungszeit, bereits erledigte Aufrufe bleiben erledigt. Im Handbetrieb
NC Start frisch betätigen. Ein weiterer fehlgeschlagener Versuch bleibt erneut
rot stehen. **Ablauf zurücksetzen** führt dagegen zum Stillstand; ein neuer Start
beginnt am Initialschritt. Andere Fehler werden durch Timeout-Quittierung
nicht übergangen.

### Abschließender Aufbau mit Sequence und Sequence Viewer

Richtzeit 60 Minuten.

Diese beiden QML-Elemente werden erst am Ende des Fortgeschrittenenteils
behandelt, nicht bei den 17 Basic-Grundelementen. Voraussetzung ist eine bereits
aufgebaute, zugeordnete und lokal geprüfte Schrittkette.

1. Zuerst Schritte, Übergänge, Grundtypen, Units und CALL SK verstehen und selbst
   aufbauen; Freigaben, Rückmeldungen und Fehler im Sequence Editor prüfen.
2. Danach die passende Ablaufdarstellung mit **Sequence** in einer eigenen Maske
   projektieren und gespeicherte Zuordnung sowie Anzeige kontrollieren.
3. Anschließend **Sequence Viewer** als weiteres Visualisierungselement
   kennenlernen und die Zuordnung zum vorgesehenen Ablauf prüfen.
4. Am eigenen Beispiel aktiven Schritt und fehlende Bedingung zeigen. Eine
   Darstellung erzeugt nicht automatisch die dahinterliegende Ablaufsteuerung.

Die ausführlichen Bildfolgen für diese beiden Abschlussübungen werden noch
ergänzt. Sie sind nicht Voraussetzung für die Basic-Schulung.

### Abschlussvorführung

Richtzeit 15 Minuten. Ein Kollege, der das Projekt nicht erstellt hat, muss
innerhalb weniger Minuten erkennen können: welches Gerät, welche Aktion,
welche Rückmeldung und warum ein Schritt wartet. Dazu gespeicherte Maske,
Unit-Zuordnungen, Kette und ein kurzes Prüfblatt mit Soll/Ist/Ergebnis übergeben.
Offene Punkte ausdrücklich benennen. Erst eine gesonderte technische Prüfung
und Maschinenfreigabe erlauben den Einsatz an einer realen Anlage.
