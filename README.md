# JobEval

JobEval turns a capable LLM into a market-specific recruitment-adviser persona.

Choose one operating prompt per country. The assistant then guides a candidate from a CV and job advertisements to an evidence-based fit assessment, a tailored CV or resume, and an optional follow-up artifact — a cover letter, a short application message, or labelled form answers.

Germany and Spain deliver complete, self-contained [Typst](https://typst.app) source. Brazil also offers self-contained HTML and plain text. The United States edition delivers Typst source, with an optional recruiter message or application-answer set.

Documents use a text-first, single-column layout designed for straightforward text extraction. The German letter follows a DIN-5008-oriented digital business-letter layout; strict Form B conformity and rendered page counts require verification.

## Markets

| Market | Persona | Prompt | Version |
| --- | --- | --- | --- |
| Germany | Frau Schmidt | [Frau-Schmidt-Germany](Frau-Schmidt-Germany) | 1.2.0-rc1 |
| Spain | Elena Martínez | [Elena-Martinez-Spain](Elena-Martinez-Spain) | 1.0.0-rc1 |
| Brazil | Helena Duarte | [Helena-Duarte-Brasil](Helena-Duarte-Brasil) | 1.0.0-rc2 |
| United States | Jordan Morgan | [Jordan-Morgan-US](Jordan-Morgan-US) | 1.0.0-rc1 |

Spain means Spain, not all Spanish-speaking countries. Brazil means Brazil, not Portugal or other Portuguese-speaking countries. The United States edition is not localized for Canada or other countries. Germany is the primary DACH edition; Austria and Switzerland are not fully localized.

Each prompt file is self-contained. Copy one file into the LLM as system or custom instructions. Do not mix two personas in the same chat.

## How to use

1. Copy the prompt for the target country into a capable LLM as the operating instructions.
2. Send your CV or structured career history and one or more job advertisements.
3. Review the compatibility assessment and explicitly select one job (`J1`, `J2`, …).
4. Receive the CV or resume, answer remaining questions, then receive at most one follow-up artifact per turn.
5. Save and compile Typst, for example:

```bash
typst compile lebenslauf.typ
typst compile anschreiben.typ
```

Brazil HTML: save as `curriculo.html` or `carta.html`, open in a browser, and print to PDF. Browser Typst compilation: [typst.app](https://typst.app).

Chat follows the candidate's language, including Portuguese. Document language follows the employer instruction or the advertisement.

The assistant does not submit applications, contact employers, or upload your data.

## What this release does not claim

- Not an ATS score, hiring decision, or interview probability.
- Not universal ATS or Gupy compatibility.
- Not legal advice on AGG, LGPD, EEO, visas, or qualification recognition.
- Missing evidence is not treated as a confirmed unmet requirement.
- Cover letters, messages and form answers are optional. Salary questions are conditional.
- Inclusive wording in an advertisement is not treated as a restricted eligibility route.
- Source generation is not PDF creation. Page counts and character limits are verified only when actually counted or compiled.

## Changelog

### v1.3.0

Brazil (`Helena-Duarte-Brasil`, 1.0.0-rc2) and first United States edition (`Jordan-Morgan-US`, 1.0.0-rc1).

- Same shared engine: per-job state, turn router, evidence-based scoring, STOP contract (`[STOP — waiting for: …]`), one artifact per turn.
- Brazil consultative read after the score, triage mode for four or more advertisements, and weighted operational dimension (regime and work mode) as a product choice — not a claim about every recruiter's screening order.
- Brazilian localization: seniority labels, degree types, diploma recognition without a blanket Carolina Bori rule, professional council registration, language scale, CLT/PJ salary format, LGPD privacy defaults, screening platforms.
- Affirmative-vacancy handling that does not score protected characteristics or infer restricted eligibility from inclusive ads.
- Phase 4 may be a letter, a short application message, or labelled form answers, chosen from the actual channel — not from a national reading stereotype.
- Brazil output formats: Typst (default), self-contained HTML, or plain text, with HTML attribute escaping.
- United States edition: resume plus optional cover letter, recruiter message, or application-answer set in Typst.

### v1.2.0

Germany (`Frau-Schmidt-Germany`, 1.2.0-rc1) and first Spain edition (`Elena-Martinez-Spain`, 1.0.0-rc1).

- Explicit per-job state and deterministic phase routing.
- Transparent evidence-based compatibility scoring.
- Missing evidence distinguished from confirmed unmet requirements.
- Targeted intake; previously answered questions are not repeated.
- Safe handling of target changes, factual corrections and compile errors.
- Privacy defaults without overstating AGG requirements.
- No inferred CEFR levels, date precision or qualification equivalence.
- No nationality-based authorization assumptions or cultural stereotypes.
- Data-first Typst structure and safer list rendering.
- Removed missing-image placeholders.
- Optional cover letter and conditional salary questions.
- Honest compilation, page-count, ATS and DIN conformity claims.
- Separate self-contained prompt per country. `german_recruiter_persona_prompt.txt` is replaced by `Frau-Schmidt-Germany`.

## License

MIT. See [LICENSE](LICENSE).
