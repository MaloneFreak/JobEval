# From code to PDF

**English** · [Português](pdf.pt-BR.md) · [Español](pdf.es.md) · [Deutsch](pdf.de.md)

The assistant delivers the CV or resume and the letter as **one complete code file**, in Typst (default) or HTML. In an ordinary chat it cannot produce the PDF itself, and it does not pretend to. Pick one of the routes below; the first one is the easiest.

> Tip: you can ask for another format at any time, for example `format: html`. The assistant also offers the choice when it asks you to select a job.

## Route 1: the JobEval PDF page (no install, no account)

Works with Typst and HTML.

1. In the chat, copy the whole code block (use the chat's own copy button).
2. Open **<https://malonefreak.github.io/JobEval/pdf.html>**.
3. Paste it into the box. The page recognizes Typst or HTML and removes ```` ``` ```` markers if they came along.
4. **Typst:** click **Create PDF**, then **Download PDF**.
   **HTML:** click **Preview**, then **Print / save as PDF**.

Privacy: compilation runs in your browser. Your CV text is not sent to any server or stored. The first time, the page downloads the Typst compiler (roughly 10–30 MB); it works best on a computer.

If you get an error, click **Copy error** and send the message to the assistant in the same chat. It will fix the problem and return the complete file.

## Route 2: HTML straight in the browser (works offline)

1. Ask the assistant for `format: html`.
2. Copy the code and save it as `resume_us.html` (or the name the assistant gives you):
   - **Windows (Notepad):** File → Save as → *Save as type*: **All files** → name ending in `.html` → encoding **UTF-8**.
   - **Mac (TextEdit):** before pasting, choose Format → **Make Plain Text**; save with a `.html` name and confirm **Use .html**.
3. Double-click the file to open it in your browser.
4. **Ctrl+P** (Cmd+P on Mac) → destination **Save as PDF** → turn off **Headers and footers** → Save.

The instruction line at the top of the screen does not appear in the PDF.

## Route 3: typst.app (online editor, account required)

1. Sign in at <https://typst.app> and create an empty project.
2. Delete the sample content and paste the Typst code.
3. Check the preview and use the editor's export or download PDF option.

## Route 4: terminal (Typst compiler)

1. Install Typst from the official page: <https://typst.app/download>
   (Windows: `winget install --id Typst.Typst`; macOS with Homebrew: `brew install typst`).
2. Save the code as `resume_us.typ`.
3. Run `typst compile resume_us.typ`. `resume_us.pdf` appears in the same folder.

## Hosts that run code

If you use the assistant in an environment with tools (for example an agent with a terminal), it may compile the file and deliver the PDF directly. The prompts allow this only when such a tool actually exists, and the assistant reports only what was really produced, such as errors and the page count.

## Before you send it

- The page count is what you expected (the assistant never claims a count it did not check).
- The PDF text can be selected and copied (Ctrl+A, Ctrl+C in a PDF reader). That is a good sign for plain text extraction.
- Name, contacts, dates, titles and the job reference are correct.
- The file name is clear, for example `First_Last_Role.pdf`.

## Common problems

| Symptom | Fix |
| --- | --- |
| The file became `resume.html.txt` | Save with type **All files** or rename it to `.html`. |
| The PDF shows a date, title or URL in the margins | Turn off **Headers and footers** in the print dialog. |
| Margins look different in HTML | Keep *Margins: Default* and *Scale: 100%*; the file itself sets A4 or Letter. |
| Error with a line number | Send the message to the assistant in the same chat. |
| Warning `unknown font family` | The files use Libertinus Serif, which ships with Typst, typst.app and the JobEval page. Elsewhere, Typst falls back to another font. |
| ```` ``` ```` lines at the start and end | Delete those two lines; the JobEval page does it for you. |
