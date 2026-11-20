# 1.50.0: Konsolen und Zugriffsrechte projektieren

Diese Ergänzung beschreibt den Bedienweg von 1.50.0. Die älteren bebilderten
Grundübungen bleiben als Übungskopie erkennbar; ihre Aufnahmen sind kein
Nachweis einer getesteten Kundenmaschine.

## Drei Konsolen, eine Quelle

Im **KonsoleConfigurator → Module / Seiten** gibt es getrennte Spalten
**Start, Manual, Run**. Eine Seite kann in mehreren Konsolen erscheinen.
Eine Modulcheckbox setzt alle darunterliegenden Seiten dieser Konsole;
ein gemischter Zustand ist sichtbar. Die Quelle wird nicht dupliziert.

**Beim Start laden** bleibt eine eigene Auswahl für Seitencontroller.
Gemeinsam benötigte Dienste, insbesondere vorhandene PLC-/Sequence-Owner,
werden durch eine andere Navigation nicht automatisch beendet. Die Run-Spalte
schaltet keine PLC-Betriebsart und erteilt keine Maschinenfreigabe.

1. Gewählten Projektordner prüfen.
2. Modul und gewünschte Seiten zum Laden auswählen.
3. Start / Manual / Run markieren.
4. Rechte festlegen und Konfiguration speichern.
5. PC Live testen; nach Übernahme geänderter Startkonfiguration Restart Apps
   an der Station ausführen.

## Benannte Stufen von 0 bis 5

**0 / leer = ohne zusätzliche Einschränkung.** Neue Elemente sind zunächst
öffentlich. Höhere bestätigte Stufen erfüllen kleinere Mindeststufen.
Die Beispiele heißen **Servicetechniker · 3** und **Experte · 5**.
Mehrere Namen dürfen dieselbe Zahl besitzen.

1. Benötigte Variablen im **Interface Editor** speichern, auch aus einer
   importierten PLC-/DEF-Gruppe. **Zugriffsprofile · KOP** öffnen.
2. **+ Profil**: Namen, Stufe 0–5 und einen lesbaren eindeutigen ID-Vorschlag
   prüfen. Die ID kann beim Anlegen frei gewählt werden, z. B. `access.einrichter`.
3. **KOP bearbeiten → Schließer, Öffner oder Vergleich** und die vorhandene
   Interface-Variable direkt auswählen. Name, Typ und Pfad werden übernommen.
4. Über **UND · Reihe**, **ODER · parallel** und **NICHT** verknüpfen.
   Schließer prüft BOOL=true, Öffner bekanntes BOOL=false. Für Zahlen etwa
   **Betriebsart = 2** wählen. OK übernimmt auch den letzten Vergleichswert.
5. Am Modul, an der Seite und in den Elementeigenschaften auswählen:
   **Sichtbar ab**, **Lesbar ab**, **Bedienbar ab**, **Schreiben / Ausführen ab**.
6. Speichern und die Verwendungen prüfen. Elternrechte gelten zusätzlich.

Die höchste erfüllte Profilbedingung ergibt die aktuelle Stufe. Ein fehlender
Eingang bleibt unbekannt, auch unter NICHT. Unbekannt erteilt keine Rechte.
Die Beispielkontakte sind anfangs `false`; der Ingenieur verbindet sie mit
den tatsächlichen Signalen seiner Anlage. Die HMI erzeugt keine PLC-Freigabe.

Die untere Tabelle **Verwendete Interface-Eingänge** ist eine Liste von
Verweisen, kein zweiter Satz PLC-Variablen. Sie füllt sich beim Bestätigen des
KOP automatisch. **+ Variable aus Interface** kann einen Eingang vorab
auswählen; derselbe Pfad wird wiederverwendet. Eigene Aliasnamen wie Expert
oder Service stehen danach in Kontaktbaum, Auswahl und Vorschau.
Technische Signal-IDs sind standardmäßig verborgen. Vorhandene IDs behalten
ihre Bedeutung. Abbrechen verwirft auch neue Eingangsverweise im KOP-Dialog.
Auf der Station muss das gewählte Interface tatsächlich registriert und nach
dem erforderlichen Modellneustart angeschlossen sein; die Auswahl allein
bestätigt keine aktuelle PLC-Verbindung.

Eine fehlende zugewiesene Profil-ID sperrt den Zugriff. Sie wird nicht als
öffentlich interpretiert. Vor dem Löschen verwendete Profile neu zuordnen;
der Dialog benennt den Umfang und beginnt mit Abbrechen als Standard.

## Profile im PC Live vergleichen

In **TEST / OFFLINE · Zugriffsprofil** öffentlich 0, Service 3 und Experte 5
wählen. Die Auswahl bleibt im RAM der lokalen PC-Vorschau. Sie verändert weder
den Kontaktplan noch den aktuellen Benutzer auf der TNC.

Übung: eine öffentliche Taste, eine erst ab 3 sichtbare Taste, eine bis 5
gesperrte Taste und ein erst ab 5 lesbarer Wert. Zurückschalten und prüfen,
dass neue Schreibaktionen gesperrt und verborgene Daten ausgeblendet werden.

<div class="access-training" data-access-lab></div>

## Explorer und CFG zentral einstellen

Die Beispielwurzel **Stationsdateisystem `/`** zeigt Servicetechniker · 3 auch
die anderen erreichbaren Stationspartitionen. Schreiben bleibt mindestens
Experte · 5 vorbehalten. Auf Windows stattdessen echte Laufwerkswurzeln
konfigurieren; TNC und LOG besitzen ihre eigenen öffentlichen Regeln.

Im Tab **Explorer / CFG** je Dateiwurzel Sichtbarkeit, Lesen und Ändern wählen.
**TNC und LOG bleiben sichtbar**. Ihre tatsächlichen Stationspfade müssen
konfiguriert werden; eine Vorgabe ist keine Erreichbarkeitsbestätigung.
Unterordner erben die Regel. Direkte Pfade, alte Favoriten und Symlinks
umgehen sie nicht. Der öffentliche Einstieg **Dateien** bleibt verfügbar.

CFG-Viewer, CFG-Lesen/Leseprobe und Parameterlisten haben getrennte Rechte.
Listen anzeigen, bearbeiten und als Rezepturvorlage übernehmen sind eigene
Ressourcen. Das frühere INFO-Passwort `expert` erteilt keine Rechte mehr.
CFG bleibt lesend. Dateiformat-, Betriebssystem-, PLC- und Safety-Prüfungen
bleiben zusätzlich wirksam; Projektcode ist keine Betriebssystem-Sandbox.

**Prüffrage:** Warum darf eine im PC sichtbare Expertenmaske keine tatsächliche
Expertenfreigabe auf der Maschine beweisen?
