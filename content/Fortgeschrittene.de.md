# Fortgeschrittene: Geräte und Abläufe verbinden

Nach Basic entsteht aus der gestalteten Maske eine nachvollziehbare Anwendung.
Du beschreibst Geräte, baust einen Ablauf, prüfst Rückmeldungen und erklärst,
warum ein Auftrag wartet. Erst danach kommen die beiden Ablaufanzeigen in die
Maske. Zwei Tage, jeweils etwa fünf Stunden Arbeitszeit zuzüglich Pausen.

## Dein Ergebnis

Am Ende kannst du eine Unit-Zuordnung lesen, zwei CALL-SK-Aufrufe projektieren,
AUTO und HAND lokal testen, einen Timeout gezielt behandeln und die passende
Ablaufdarstellung auswählen. Ein Kollege kann deine Entscheidungen anhand der
gespeicherten Konfiguration und des Prüfblatts nachvollziehen.

![Zielbild: Zwei bestätigte Unit-Aufrufe und der erreichte Endschritt im echten LOCAL-Editor](images/advanced-13-ergebnis.png)

Die Bilder stammen aus einer getrennten Projektkopie mit echten Editoren.
Sie zeigen lokale Testwerte, keine verbundenen Geräte. Die Kurskette ergänzt
das gelieferte Beispiel UnitActions um einen Vorschritt; Namen und Nummern
darfst du in deiner Kopie entsprechend anpassen. Es werden keine produktiven
Softwarequellen auf dieser Website verteilt.

## Tag 1: Verstehen und aufbauen

| Zeit | Lektion | Sichtbares Ergebnis |
| --- | --- | --- |
| 30 min | Einstieg und Aufgabe besprechen | Sollzustände und benötigte Rückmeldungen notiert |
| 100 min | [Grundtyp und Unit](#/advanced-units) | Rollen, Aktionen, Gerätezuordnung und Neutralwerte erklärt |
| 80 min | [Eine Schrittkette aufbauen](#/advanced-chain) | Eigene gespeicherte Hauptkette mit prüfbarem Übergang |
| 75 min | [Zwei CALL SK einfügen](#/advanced-call) | Zwei lokal bestätigte Aktionen, AUTO und HAND verglichen |
| 15 min | Partnerkontrolle | Gerät, Aktion, Ziel und Freigaben ohne Hilfe zeigen |

## Tag 2: Fehler verstehen und darstellen

| Zeit | Lektion | Sichtbares Ergebnis |
| --- | --- | --- |
| 90 min | [Diagnose und Wiederanlauf](#/advanced-diagnostics) | Fehler reproduziert, am gehaltenen Schritt quittiert und protokolliert |
| 45 min | [Interface und Stationsweg](#/advanced-station) | Herkunft, lokalen Import und bestätigte Verbindung auseinanderhalten |
| 105 min | [Unit-Taste, Sequence und Sequence Viewer](#/advanced-visualizers) | Maske mit expliziter Aktionsauswahl und passender Beobachtung |
| 60 min | Abschlussaufgabe und Übergabe | Gespeichertes Projekt und ausgefülltes Prüfblatt |

Die Stationslektion ist zunächst eine Lese- und Zuordnungsübung. Die Gruppe
verbindet sich nicht eigenmächtig mit einer Anlage. Ein realer Verbindungstest
ist eine gesondert vorbereitete Vorführung durch den Verantwortlichen.

## Arbeitsplatz vorbereiten

1. Den [Basic-Abschluss](#/basic) in einer eigenen Projektkopie bereithalten.
2. Softwarestand 1.44 prüfen. Im Sequence Editor LOCAL/OFFLINE verwenden.
3. Das gelieferte Beispiel `LOCAL_EXAMPLES/UnitActions.sequence.json` öffnen
   und **Speichern unter…** mit eigenem Kursnamen benutzen. Installierte
   Originale bleiben erhalten.
4. Die gelieferten Grundtypen CylinderCoded und ServoAxis sowie die Units Ax51
   und Ax52 ansehen. Der Dozent prüft vorab deren Verfügbarkeit in der Kopie.
5. Eine freie Kursseite für die abschließende Visualisierung vorbereiten.

Eine eigene Typdefinition ist eine separate Entwurfsübung. Für die ersten
Lauftests verwenden wir die gelieferten, zueinander passenden Definitionen,
Units und Bibliotheksketten. Eine neue Definition erzeugt keine fertige
Maschinensteuerung.

## Abschlussaufgabe

Baue eine Kursstation mit zwei nacheinander bestätigten Unit-Aktionen. Zeige
erst den erfolgreichen LOCAL-Lauf und danach einen gezielten Fehler. Dein
Partner soll ohne Erklärung erkennen, welcher Aufruf wartet und welche
Rückmeldung fehlt. Ergänze die Maske zuletzt um eine feste Sequence-Anzeige
und einen frei wählbaren Sequence Viewer.

| Prüfschritt | Soll | Ist / Ergebnis |
| --- | --- | --- |
| Unit-Auswahl | Beide Geräte und Aktionen eindeutig | Selbst eintragen |
| Zielvergleich | Passender Wert bestätigt; falscher Wert nicht | Selbst eintragen |
| AUTO | Nur eindeutiger Modus und gültige Freigaben | Selbst eintragen |
| HAND | Je Aufruf frischer NC Start | Selbst eintragen |
| Timeout | Hält rot, kein automatischer neuer Versuch | Selbst eintragen |
| Quittierung | Derselbe Schritt, neue Zeit, erledigte Aufrufe erhalten | Selbst eintragen |
| Anzeige ohne Live-Daten | UNKNOWN/veraltet, kein erfundenes Grün | Selbst eintragen |

## Was der Kurs nachweist

Ein bestandener LOCAL-Test belegt Ablauf und lokale Reaktionen. Er belegt
weder eine reale Sensoränderung noch einen geschalteten Ausgang. Unit-Tasten
lassen sich projektieren; ohne installierten Ausführungsowner melden sie eine
Sperre. DNC-Verbindung, laufende Konsole und physischer I/O-Anschluss sind
getrennte Nachweise. Diese Grenzen gehören zur fachlichen Übergabe.

[Mit Grundtyp und Unit beginnen →](#/advanced-units)
