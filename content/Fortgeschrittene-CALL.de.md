# 3 · Zwei CALL SK mit AUTO und HAND

Lernziel: Zwei Geräte über vorbereitete Aktionen anfordern, ihre Bestätigungen
getrennt beobachten und beide Betriebsarten lokal prüfen. Verwende deine
gespeicherte UnitActions-Kopie; die Bilder zeigen Ax52 zuerst, danach Ax51.

## Unit, Aktion und Überwachung wählen

Den Aktionsschritt auswählen und **CALL SK** öffnen. In der Auswahl die
gespeicherte Unit, **Arbeitsstellung** und **3000 ms** wählen. Bei diesem
Grundtyp sind keine zusätzlichen Zielzahlen im Aufruf nötig.

![7. CALL-SK-Auswahl: Unit, erlaubte Aktion und Überwachungszeit; weitere Parameter erscheinen nur, wenn die Aktion sie verlangt](images/advanced-07-call-auswahl.png)

1. **Aktion im Schritt einfügen · kein Start** wählen. Die neue CALL-Stelle
   erscheint im ausgewählten Aktionsschritt.
2. Zweiten Aufruf mit der anderen Unit ergänzen.
3. Fenster schließen, **Prüfen**, unter eigenem Namen speichern.
4. Den Aufruf erneut öffnen: Stimmen Unit, Aktion und Zeit?

Die Zeit ist eine Überwachung, keine künstliche Bewegungsdauer. Sie nicht
erhöhen, nur um eine fehlende Zielbestätigung zu verdecken.

## Technische Details nur lesen

![8. Die aufgeklappten Details zeigen die gespeicherte Aufrufbeschreibung; der JSON-Bereich ist schreibgeschützt und kein Live-Sensorbild](images/advanced-08-call-interface.png)

Normalerweise bleiben die Details geschlossen. Bei einer Kontrolle dürfen sie
gelesen und kopiert werden; Änderungen laufen über die Auswahlfelder. Die
laufenden Werte siehst du im lokalen Simulationsbereich und über **+ / −** am
CALL-Kästchen, nicht im gespeicherten JSON.

## AUTO vorbereiten

Vor jedem Betriebsartenwechsel **stoppen**. Unter **Simulationseingänge, TWIN
und Diagnose einblenden** die lokalen Werte einstellen. Zahlen mit Enter
oder durch Verlassen des Feldes übernehmen.

| Lokaler Eingang | AUTO | HAND |
| --- | --- | --- |
| Permit der Kurskette | TRUE | TRUE |
| UnitOperationPermit | TRUE | TRUE |
| UnitAutoMode | TRUE | FALSE |
| UnitAutoRunActive | TRUE | FALSE |
| UnitHandMode | FALSE | TRUE |
| UnitNCStart vor Beginn | FALSE | FALSE |

Die beiden Positionsrückmeldungen zunächst auf **1** setzen. Das ist ein
lokaler Testwert, keine simulierte oder reale Bewegung. AUTO und HAND dürfen
nicht gleichzeitig aktiv sein.

![10. AUTO: Ax52 läuft, Ax51 wartet auf den gemeinsamen Kanal; zwei Aufrufe bedeuten nicht zwei gleichzeitige HGM-Aufträge](images/advanced-10-auto-lauf.png)

Lokal starten. Die Rückmeldung des ersten Aufrufs rechtzeitig auf **2** setzen,
danach die des zweiten. Bei 3000 ms Überwachung ist das eine kurze Übung;
der Dozent kann sie zuerst mit bereits bestätigten Zielen vorführen. Ein
Durchlauf mit beiden Positionen bereits auf 2 prüft „Ziel schon erreicht“,
nicht eine Bewegung. Den getrennten Timeout-Versuch machen wir anschließend.

![13. Beide Aufrufe sind bestätigt; erst danach erreicht die Hauptkette bei gültigem Übergang den Endschritt](images/advanced-13-ergebnis.png)

## HAND braucht bewusste Betätigung

Stoppen und die HAND-Spalte einstellen. Rückmeldungen wieder auf 1 setzen,
starten und den zusätzlichen lokalen Taster **NC Start · halten** benutzen.

![14. HAND: Der Aufruf erwartet NC Start; die Folge-Unit wartet weiterhin auf den Kanal](images/advanced-14-hand-nc-start.png)

1. NC Start drücken und halten. Ziel des ersten Aufrufs mit Rückmeldung 2
   bestätigen, solange die Betätigung gültig ist.
2. Loslassen: Ein noch offener Aufruf wartet, seine Anforderung wird neutral.
3. Für den zweiten Aufruf wieder **frisch drücken**. Gedrückthalten vom ersten
   Aufruf startet den nächsten nicht automatisch.
4. Loslassen beziehungsweise Fokusverlust muss den lokalen Momenttaster auf
   FALSE zurücknehmen. Die ComboBox bedient denselben Testeingang.

Der Ablauf wechselt nicht unbemerkt von AUTO nach HAND. Ein Wechsel im Lauf
kann einen Aufruf abbrechen; deshalb werden die Testläufe bewusst getrennt.

## Selbstkontrolle

- [ ] Ich ändere die Rückmeldung des richtigen CALLs, nicht eine ähnlich benannte Zeile.
- [ ] Wert 1 bestätigt Arbeitsstellung 2 nicht.
- [ ] Im HAND-Test benötigt jeder Aufruf eine neue Betätigung.
- [ ] Ich kann „erledigt“, „läuft“ und „wartet auf Kanal“ unterscheiden.

[Den Zusammenhang ohne Zeitdruck im Browser ausprobieren →](#/sequence-lab)

[Weiter: Fehler absichtlich erzeugen und behandeln →](#/advanced-diagnostics)
