# JobEval

**English** · [Português](README.pt-BR.md)

JobEval turns a capable LLM (ChatGPT, Claude, Gemini and others) into a job-application adviser for one specific market: Brazil, the United States, Germany or Spain. It assesses your fit for real job ads from documented evidence, writes a tailored CV or resume, and, when it helps, one cover letter, short application message or set of form answers. It does not invent facts: what is not documented becomes a question, not a claim.

**Website:** <https://malonefreak.github.io/JobEval/> · **Code to PDF:** <https://malonefreak.github.io/JobEval/pdf.html>

## Quickstart

1. **Pick the job's market and copy its assistant.** Use the website's *Copy assistant* button, or open the file in [`prompts/`](prompts) and copy all of it.
2. **Paste it into a new chat**, as the first message or as project instructions. Then send your CV (or career history) and one or more job ads.
3. **Turn the code into a PDF.** The CV arrives as Typst or HTML code. Paste it into the [PDF page](https://malonefreak.github.io/JobEval/pdf.html) and download the file: no install, no account, and your text stays in your browser.

Use one assistant per chat. Do not mix two personas in the same conversation.

## Markets

| Market | Persona | Prompt | Version | Documents |
| --- | --- | --- | --- | --- |
| Brazil | Helena Duarte | [Helena-Duarte-Brasil.txt](prompts/Helena-Duarte-Brasil.txt) | 1.1.0-rc1 | Currículo, carta, application message or form texts (Gupy and others) |
| United States | Jordan Morgan | [Jordan-Morgan-US.txt](prompts/Jordan-Morgan-US.txt) | 1.1.0-rc1 | US Letter resume, cover letter, recruiter message or application answers |
| Germany | Frau Schmidt | [Frau-Schmidt-Germany.txt](prompts/Frau-Schmidt-Germany.txt) | 1.3.0-rc1 | Lebenslauf, DIN-5008-oriented Anschreiben, application message or portal answers |
| Spain | Elena Martínez | [Elena-Martinez-Spain.txt](prompts/Elena-Martinez-Spain.txt) | 1.1.0-rc1 | CV, carta de presentación, application message or screening answers (InfoJobs and others) |

Spain means Spain, not all Spanish-speaking countries. Brazil means Brazil, not Portugal or other Portuguese-speaking countries. The United States edition is not localized for Canada or other countries. Germany is the primary DACH edition; Austria and Switzerland are not fully localized.

Chat follows your language. Document language follows the employer's instruction or the job ad.

## What a session looks like

1. **Assessment.** For each job (`J1`, `J2`, …): requirement-to-evidence map, a transparent score with its arithmetic, confidence, critical constraints, and a short recruiter read (likely first impression, up to three levers, perception risks, warning signs in the ad, likely screening questions, suggested decision). With four or more ads, a comparison table first.
2. **Your choice.** You pick one job and, if you like, the format (Typst or HTML). The assistant ends every turn with a line such as `[STOP — waiting for: choose J1 or J2]`. That stop is deliberate: each step is your decision.
3. **CV or resume**, as one complete file, followed by a few targeted questions.
4. **One follow-up artifact**, chosen from the real channel: a letter, a short message (e-mail body, LinkedIn, portal field) or labelled answers to screening questions.

## From code to PDF

In an ordinary chat, an LLM cannot produce a PDF file, and these prompts never pretend it did. They deliver complete source instead and tell you how to turn it into a PDF:

| Route | Account | Install | Works for |
| --- | --- | --- | --- |
| [JobEval PDF page](https://malonefreak.github.io/JobEval/pdf.html): paste and download | no | no | Typst and HTML |
| Save the HTML file, open it, Ctrl+P → Save as PDF | no | no | HTML |
| [typst.app](https://typst.app) online editor | yes | no | Typst |
| `typst compile resume.typ` ([install Typst](https://typst.app/download)) | no | yes | Typst |
| Hosts that run code (agents with a terminal) | n/a | n/a | the assistant may compile and deliver the PDF itself, reporting only what it observed |

Ask for another format at any time: `format: html`, `format: text` or `format: typst` (`formato: …` in Portuguese and Spanish).

Step-by-step guides: [Português](docs/guides/pdf.pt-BR.md) · [English](docs/guides/pdf.en.md) · [Español](docs/guides/pdf.es.md) · [Deutsch](docs/guides/pdf.de.md). Fictional sample files are in [`examples/`](examples).

## Installing an assistant once

Pasting the prompt as the first message of each new chat always works. To reuse it:

- **Claude Projects or ChatGPT Projects:** paste the prompt into the project instructions, or attach the `.txt` file to the project.
- **Custom GPTs:** the Instructions field is capped at about 8,000 characters (an observed limit, not formally documented), while these prompts are 44,000–54,000 characters. Upload the `.txt` as a knowledge file and keep a short instruction such as "Follow the attached JobEval operating manual exactly." Test it: instructions in a knowledge file are retrieved, not always applied in full, so adherence can be weaker than pasting the whole text.
- **Gemini Gems and similar features:** check the instruction limit first; if the full text does not fit, attach the file and test the same way.

## Privacy

- The assistant does not submit applications, contact employers, create accounts or upload your data.
- The PDF page compiles in your browser and never uploads your text. It downloads the pinned compiler and fonts from jsDelivr (the compiler code is integrity-checked), and a Content-Security-Policy restricts its network access to jsDelivr and GitHub's raw file host.
- Your chat provider does process what you paste into the chat. Check its data settings before sharing personal details.
- By default the generated documents leave out photo, date of birth, marital status, ID numbers and full street address; you can ask for exceptions.

## What this release does not claim

- Not an ATS score, hiring decision, or interview probability.
- Not universal ATS or Gupy compatibility. Layouts are text-first and single-column, designed for straightforward text extraction.
- Not legal advice on AGG, LGPD, EEO, visas, or qualification recognition.
- Missing evidence is not treated as a confirmed unmet requirement.
- Cover letters, messages and form answers are optional. Salary questions are conditional.
- Inclusive wording in an advertisement is not treated as a restricted eligibility route.
- Source generation is not PDF creation. Page counts and character limits are verified only when actually counted or compiled.
- The German letter follows a DIN-5008-oriented digital layout; strict Form B conformity requires verification.

## Repository layout

| Path | Contents |
| --- | --- |
| [`prompts/`](prompts) | The four self-contained operating prompts. |
| [`docs/`](docs) | GitHub Pages site (assistant picker and PDF page) and the PDF guides. |
| [`examples/`](examples) | Fictional sample CV in Typst, HTML and compiled PDF. |
| [`CHANGELOG.md`](CHANGELOG.md) | Release history. |

**Publishing the site:** Settings → Pages → *Deploy from a branch* → `main` → `/docs`. The prompts link to `https://malonefreak.github.io/JobEval/pdf.html`; a fork should change that URL in `prompts/*.txt` and the repository constants at the top of `docs/assets/home.js` and `docs/assets/pdf.js`.

## Changelog

See [CHANGELOG.md](CHANGELOG.md). Latest: **v1.4.0** — PDF page, HTML and text formats in every edition, recruiter read and triage mode everywhere, Phase 4 messages and form answers for Germany and Spain, Spain router fixes.

## License

MIT. See [LICENSE](LICENSE).
