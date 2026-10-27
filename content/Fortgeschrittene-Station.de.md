# 5 · Vom Interface zur bestätigten Station

Lernziel: Symbolquelle, lokales Signal, DNC-Verbindung, Laufzeit und physischen
Ausgang auseinanderhalten. Zunächst nur lesen und in der Kurskopie arbeiten.
Der Browser dieser Schulung verbindet sich nie mit einer Steuerung.

## Herkunft und Typ vor dem Import prüfen

Der Interface Editor zeigt die gespeicherten Deklarationen. Bei Python-Quellen
kennzeichnet beispielsweise ValuePlcBol einen BOOL und ValuePlcInt einen
Integer. Ein angezeigtes 0/1 oder ein Namenspräfix beweist den PLC-Typ nicht.
Bei einer Abweichung die tatsächliche PLC-/DEF-Deklaration mit der verwendeten
Interface.py vergleichen, nicht blind umbenennen.

Eine Änderung am Python-Interface ist keine Änderung der PLC-Deklaration.
Die Meldung **„Syntax geprüft, NICHT maschinenvalidiert“** beschreibt genau
diese Grenze. **„Quelle mit .bak speichern?“** bietet eine Sicherungskopie an;
.bak bedeutet nicht „mit Bugs“. Es gibt dadurch keinen automatischen Hot-Reload
der laufenden Maschinenkonsole.

## Ein Symbol lokal übernehmen

1. Im Sequence Editor **Variablen / Bausteine** öffnen.
2. **Interface-Symbole neu lesen** wählen, nachdem eine Quelle gespeichert wurde.
3. Das richtige Interface-Symbol auswählen und seinen Herkunftspfad prüfen.
4. Richtung bewusst wählen: Rückmeldung nach IN, lokale Ausgangsanforderung
   nach OUT. **Interface-Symbol lokal übernehmen** betätigen.
5. Die lokale Signaldeklaration prüfen, speichern und **Syntax erneut prüfen**.
   Danach die gewünschte Variable in der passenden Aktion auswählen.

Ein schon importiertes lokales Signal behält zunächst seinen gespeicherten
Typ und seine Richtung. Nur die Inventarliste neu zu lesen verändert es nicht
heimlich. Ein neu hinzugefügter Ausgang ersetzt auch nicht automatisch eine
alte Red/Yellow/Green-Auswahl in den Aktionen.

Das Kopieren eines Binding-Pfads ändert keine Bindung. Der gespeicherte
Herkunftspfad ist noch kein angeschlossener PLC-I/O-Owner. Eine spätere
ausführliche DEF-Datei-/Zeilenanzeige ist nicht Voraussetzung dieser Übung;
die verwendeten Quellen bei der Übergabe bereits jetzt benennen.

## Stationen sind gespeicherte DNC-Profile

![16. Lokaler Stationsdialog ohne Windows-DNC-Inventar: Eine fehlende Profilliste wird nicht durch erfundene Stationen ersetzt](images/advanced-16-verbindungswahl.png)

Unter **Connection → Station auswählen** werden gespeicherte HEIDENHAIN-DNC-
Profile gelesen, nicht automatisch Geräte im Netz entdeckt. In einer
vorbereiteten Windows-Vorführung das ausdrücklich vorgesehene Profil markieren
und **Profil übernehmen** wählen. Die Auswahl allein verbindet noch nicht.

Der PC-Profilhotfix zu 1.44 benutzt für den ausdrücklich gewählten
Sequence-Stationsweg Host, Port und vorhandene Identität dieses Profils statt
der festen VM-Vorgabe. Er muss auf dem Vorführ-PC vorhanden und geprüft sein.
Andere alte VM-Testwerkzeuge behalten ihre getrennten Grenzen.

Der anschließende Verbindungsschritt verlangt eine bewusste Bestätigung.
Profilname und beobachtetes Ziel müssen zusammenpassen. Keine unbekannten
Host-Schlüssel bestätigen oder ein anderes Profil verwenden, nur um eine
Fehlermeldung loszuwerden. Separate manuelle SSH/LSV2-Felder ersetzen nicht
die gewählte DNC-Verbindung.

## Vier getrennte Nachweise

| Nachweis | Was er belegt | Was er nicht belegt |
| --- | --- | --- |
| Profil gewählt | Gewünschter gespeicherter Name | Erfolgreiche Verbindung |
| DNC verfügbar | SDK hat die gewählte Verbindung bestätigt | Passende laufende Kette |
| Runtime frisch und zugeordnet | Bestätigter Laufzeitstand dieser Station | Physischer Ausgang geschaltet |
| Geprüfter I/O-Anschluss | Tatsächliche Rückmeldung/Anforderung am vereinbarten Ziel | Allgemeine Freigabe anderer Ausgänge |

Ein lokaler Entwurf bleibt lokal, bis seine Zuordnung und eine gegebenenfalls
vorgesehene Übertragung ausdrücklich geprüft wurden. **Aus TNC7 lesen**,
**Speichern unter** und **an TNC7 übertragen** sind verschiedene Handlungen.
Nicht die grüne lokale Syntaxprüfung als Bestätigung eines Transfers lesen.

## Warum eine Lampenvariable noch keine Lampe schaltet

Die vorhandene Ampel-Pilotlaufzeit arbeitet MEMORY_ONLY. Das Importieren einer
Interface-Variable und die DNC-Profilkorrektur installieren keinen physischen
Ausgangsadapter. Deshalb zeigt diese Schulung keinen angeblich bestandenen
Lampentest. Für eine Hardwarevorführung müssen zusätzlich der tatsächliche
I/O-Owner, seine Zuordnung, Aktualität und Stop-/Verlustreaktion geprüft werden.

Die Ausgangsauswahl gehört transparent in die Projektierung, nicht als
fest eingetragene Lampenadresse in eine Schulungsdatei. Maßgeblich bleibt der
geprüfte Vertrag des konkreten Teststands.

## Übung ohne Maschinenzugriff

Lass dir vier Aussagen vorlegen: „Profil ausgewählt“, „Syntax geprüft“,
„Runtime frisch“, „Lampe leuchtet“. Ordne jeder Aussage ihren Nachweis zu.
Erkläre danach, welche nächste Prüfung fehlt, wenn nur die ersten beiden
Aussagen belegt sind. Keine reale Verbindung für diese Aufgabe nötig.

[Weiter: Die geprüfte Kette in der Maske darstellen →](#/advanced-visualizers)
