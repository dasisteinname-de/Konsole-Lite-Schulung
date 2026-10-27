# 1 · Grundtyp, Aktion und konkrete Unit

Lernziel: Du kannst erklären, was wiederverwendbar ist und welche Angaben erst
zum konkreten Gerät gehören. Für die Laufübungen bleibt die gelieferte
Definition unverändert; Änderungen übst du in einem eigenen Entwurf.

## Zuerst die Rollen lesen

Im Units Editor den Grundtyp **CylinderCoded** öffnen. Links wählst du die
Definition, in der Rollentabelle die gewünschte Zeile. Die zugehörigen Werte
erscheinen darunter. Ein Klick wählt eine Zeile; zum Bearbeiten eines Feldes
in einem eigenen Entwurf das betreffende Tabellenfeld öffnen.

![1. Rollentabelle: position ist IN und Integer, command ist OUT; darunter stehen die Werte der gewählten Rolle](images/advanced-01-rollen.png)

| Begriff | Im Kursbeispiel | Bedeutung |
| --- | --- | --- |
| Grundtyp | CylinderCoded | Wiederverwendbare Rollen und erlaubte Aktionen |
| Eingangsrolle | position, Integer | Rückmeldung vom Gerät in den Aufruf |
| Ausgangsrolle | command, REAL | Zielanforderung des Aufrufs |
| Unit-Parameter | Geräte-/Funktionsnummer | Einmal am konkreten Gerät festgelegt |
| Unit | Ax51 oder Ax52 | Konkretes Gerät mit Zuordnung und Neutralwert |

IN und OUT werden aus Sicht des Aufrufs gelesen. Eine Beschriftung oder der
Variablenname ersetzt keine Typdeklaration.

## Werte benennen statt Zahlen verteilen

1. Die Rolle **position** anklicken: Grundstellung hat im Beispiel Wert **1**,
   Arbeitsstellung Wert **2**.
2. Danach **command** anklicken und dieselben Zielwerte ansehen.
3. Kennung, Anzeigename und tatsächlichen Wert unterscheiden. Übersetzter
   Text ist kein Wertvergleich.

![2. Die gewählte Befehlsrolle zeigt ihre benannten Werte; diese Zahlen werden nicht erneut im CALL eingetragen](images/advanced-02-befehlswerte.png)

Bei diesem codierten Beispiel wird der gelesene Positionswert exakt mit dem
übernommenen Zielwert verglichen. UNKNOWN bestätigt kein Ziel. Bei ServoAxis
stehen weitere Parameter wie Geschwindigkeit zur Verfügung; deren Einheiten
und erlaubte Werte werden ebenfalls in der Definition beschrieben.

## Eine Aktion verknüpft Anforderung und Bestätigung

In der Aktionstabelle **Arbeitsstellung** wählen. Die Aktion ordnet den
Befehl der Rolle command und die Zielprüfung der Rolle position ausdrücklich
zu. Dass zwei Einträge beide „work“ heißen, stellt diese Verbindung nicht
automatisch her.

![3. Aktionstabelle: Grundstellung und Arbeitsstellung besitzen ausdrückliche Befehle und Zielprüfungen](images/advanced-03-aktionen.png)

**Eigene Entwurfsübung:** Einen neuen Grundtyp unter eigener Kennung anlegen.
Zuerst Rollen und Typen festlegen, dann home/work-Werte ergänzen, zuletzt die
beiden Aktionen zuordnen. Partner prüfen lassen, bevor veröffentlicht wird.
Nicht den gelieferten veröffentlichten Typ als Experiment verändern.

## Die Unit ordnet ein konkretes Gerät zu

Im Units Editor eine gelieferte Unit öffnen. Oben stehen Modul und Gerätenummer,
darunter Rollen und ihre Zuordnung. **HGM-Zuordnung als prüfbaren Vorschlag
anzeigen…** ist ein Vorschlag, keine automatische Maschinenfreigabe.

![4. Gerätezuordnung: Quelle, tatsächliches Ziel, Skalierung, Neutralwert und Schreibbestätigung sind getrennte Angaben](images/advanced-04-unit-zuordnung.png)

1. Rückmeldequelle zeigen: Woher kommt position?
2. Befehlsziel zeigen: Wohin würde command über einen angeschlossenen Adapter
   übertragen? Die gespeicherte Zuordnung allein schreibt noch nichts.
3. Geräte-/Funktionsnummer erklären. Die Nummer ist eine Wertquelle, nicht
   selbst die Adresse des Ausgangs.
4. Faktor und Neutralwert prüfen. Ein HGM-Beispiel kann mit Faktor 10000
   arbeiten; diesen Wert nicht zusätzlich im CALL multiplizieren.
5. **Unit speichern · kein Start** wählen. Wieder öffnen und vergleichen.

Eine fehlende Quelle bleibt fehlend. Keine beliebige Variable zuordnen und
keine Schreibbestätigung setzen, nur damit eine Prüfung verschwindet.

## Wertrevision oder neue Struktur?

Ein anderer Anzeigename oder geänderter erlaubter Wert ist nicht dasselbe wie
eine neue Signalrolle. Werte werden als Wertrevision geführt; deren Übernahme
an der Unit erfolgt bewusst über **Wertrevision prüfen / übernehmen…**.
Eine Strukturänderung benötigt eine neue Strukturversion. Ein bereits laufender
Aufruf übernimmt geänderte Werte nicht heimlich mitten im Lauf.

Übung in der Kurskopie: Anzeigename ändern, Wertrevision speichern, Übernahme
an der Unit prüfen, wieder öffnen. Danach eine zusätzliche Rolle nur als
Entwurf anlegen und den Unterschied der beiden Änderungen erklären.

## Selbstkontrolle

- [ ] Ich finde die Aktion und ihre Zielprüfung, ohne in JSON suchen zu müssen.
- [ ] Ich kann Grundtyp, Unit, Gerätenummer und PLC-Ziel auseinanderhalten.
- [ ] Ich kann den Neutralwert und eine vorhandene Skalierung erklären.
- [ ] Speichern oder Lesen löst keinen Geräteauftrag aus.

<details><summary>Kontrollfrage: Beide Rollen heißen Arbeitsstellung. Reicht das?</summary><p>Nein. Befehl und Prüfung müssen in der Aktion ausdrücklich zugeordnet sein. Anzeigenamen dienen der Verständlichkeit, nicht als versteckter Ausführungsvertrag.</p></details>

[Weiter: Die Hauptkette aufbauen →](#/advanced-chain)
