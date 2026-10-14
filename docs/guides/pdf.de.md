# Vom Code zum PDF

[English](pdf.en.md) · [Português](pdf.pt-BR.md) · [Español](pdf.es.md) · **Deutsch**

Der Assistent liefert Lebenslauf und Anschreiben als **eine vollständige Code-Datei**, in Typst (Standard) oder HTML. In einem normalen Chat kann er das PDF nicht selbst erzeugen und gibt das auch nicht vor. Wählen Sie einen der folgenden Wege; der erste ist der einfachste.

> Tipp: Sie können jederzeit ein anderes Format anfordern, zum Beispiel `Format: HTML`. Der Assistent bietet die Wahl auch an, wenn er Sie um die Auswahl einer Stelle bittet.

## Weg 1: die PDF-Seite von JobEval (ohne Installation, ohne Konto)

Funktioniert mit Typst und HTML.

1. Kopieren Sie im Chat den gesamten Codeblock (über die Kopierschaltfläche des Chats).
2. Öffnen Sie **<https://malonefreak.github.io/JobEval/pdf.html>**.
3. Fügen Sie den Code in das Feld ein. Die Seite erkennt Typst oder HTML und entfernt mitkopierte ```` ``` ````-Markierungen.
4. **Typst:** **PDF erstellen**, dann **PDF herunterladen**.
   **HTML:** **Vorschau**, dann **Drucken / als PDF speichern**.

Datenschutz: Die Kompilierung läuft in Ihrem Browser. Der Text Ihres Lebenslaufs wird an keinen Server gesendet und nicht gespeichert. Beim ersten Mal lädt die Seite den Typst-Compiler (ca. 10–30 MB); am besten am Computer.

Bei einer Fehlermeldung klicken Sie auf **Fehler kopieren** und senden die Meldung im selben Chat an den Assistenten. Er behebt den Fehler und liefert die vollständige Datei.

## Weg 2: HTML direkt im Browser (funktioniert offline)

1. Bitten Sie den Assistenten um `Format: HTML`.
2. Kopieren Sie den Code und speichern Sie ihn als `lebenslauf.html` (oder `anschreiben.html`):
   - **Windows (Editor):** Datei → Speichern unter → *Dateityp*: **Alle Dateien** → Name `lebenslauf.html` → Codierung **UTF-8**.
   - **Mac (TextEdit):** Vor dem Einfügen Format → **In reinen Text umwandeln** wählen; mit `.html`-Namen speichern und **.html verwenden** bestätigen.
3. Öffnen Sie die Datei per Doppelklick im Browser.
4. **Strg+P** (Cmd+P auf dem Mac) → Ziel **Als PDF speichern** → **Kopf- und Fußzeilen** deaktivieren → Speichern.

Die Hinweiszeile oben auf dem Bildschirm erscheint nicht im PDF.

## Weg 3: typst.app (Online-Editor, Konto erforderlich)

1. Melden Sie sich bei <https://typst.app> an und legen Sie ein leeres Projekt an.
2. Löschen Sie den Beispielinhalt und fügen Sie den Typst-Code ein.
3. Prüfen Sie die Vorschau und nutzen Sie die Export- bzw. PDF-Download-Funktion des Editors.

## Weg 4: Terminal (Typst-Compiler)

1. Installieren Sie Typst über die offizielle Seite: <https://typst.app/download>
   (Windows: `winget install --id Typst.Typst`; macOS mit Homebrew: `brew install typst`).
2. Speichern Sie den Code als `lebenslauf.typ`.
3. Führen Sie `typst compile lebenslauf.typ` aus. `lebenslauf.pdf` erscheint im selben Ordner.

## Umgebungen, die Code ausführen

Wenn Sie den Assistenten in einer Umgebung mit Werkzeugen nutzen (etwa einem Agenten mit Terminal), kann er die Datei kompilieren und das PDF direkt liefern. Die Prompts erlauben das nur, wenn ein solches Werkzeug tatsächlich vorhanden ist, und der Assistent berichtet nur, was wirklich erzeugt wurde, etwa Fehler und Seitenzahl.

## Vor dem Versand

- Die Seitenzahl stimmt (der Assistent behauptet nie eine Seitenzahl, die er nicht geprüft hat).
- Der PDF-Text lässt sich markieren und kopieren (Strg+A, Strg+C im PDF-Reader). Das spricht für eine einfache Textextraktion.
- Name, Kontaktdaten, Daten, Positionen und Referenznummer stimmen.
- Klarer Dateiname, zum Beispiel `Vorname_Nachname_Lebenslauf.pdf`.

## Häufige Probleme

| Symptom | Lösung |
| --- | --- |
| Die Datei heißt `lebenslauf.html.txt` | Mit Dateityp **Alle Dateien** speichern oder in `.html` umbenennen. |
| Datum, Titel oder Adresse am Rand des PDFs | **Kopf- und Fußzeilen** im Druckdialog deaktivieren. |
| Abweichende Ränder bei HTML | *Ränder: Standard* und *Skalierung: 100 %* beibehalten; die Datei legt A4 selbst fest. |
| Fehler mit Zeilennummer | Meldung im selben Chat an den Assistenten senden. |
| Warnung `unknown font family` | Die Dateien nutzen Libertinus Serif, enthalten in Typst, typst.app und der JobEval-Seite. Anderswo verwendet Typst eine Ersatzschrift. |
| ```` ``` ````-Zeilen am Anfang und Ende | Diese beiden Zeilen löschen; die JobEval-Seite erledigt das automatisch. |
