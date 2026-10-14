# Changelog

## v1.4.0

Germany 1.3.0-rc1, Spain 1.1.0-rc1, Brazil 1.1.0-rc1, United States 1.1.0-rc1.

Focus: the last mile from generated code to a PDF, and one feature level across all four editions.

### Getting the PDF

- New [PDF page](https://malonefreak.github.io/JobEval/pdf.html) on GitHub Pages: paste Typst or HTML and download the PDF. Typst compiles in the browser with WebAssembly (typst.ts, pinned version, integrity-checked); the pasted text is never uploaded. HTML is previewed in a sandboxed frame that blocks scripts and external content, then printed by the browser. Compile errors come with a line number and a copy button, ready to send back to the assistant.
- Every edition now offers self-contained HTML and plain text besides Typst. The format is offered in one line when the assistant asks you to pick a job, with no extra turn. Typst remains the default.
- Print-ready HTML contract: `@page` sets paper and margins (A4, or US Letter for the US edition), body margin is 0 in print, a screen-only instruction line is hidden in the PDF, no JavaScript.
- After Typst code, the assistant lists the routes in order of effort: the PDF page, typst.app (account required), the Typst CLI.
- Optional delivery on hosts with tools: when a compiler or browser tool actually exists, the assistant may render and deliver the PDF, reporting only what it observed. It never sends candidate data to an external service to do so.
- Step-by-step guides in [Portuguese](docs/guides/pdf.pt-BR.md), [English](docs/guides/pdf.en.md), [Spanish](docs/guides/pdf.es.md) and [German](docs/guides/pdf.de.md).

### Shared features now in all editions

- Consultative recruiter read after the score (first-read hypotheses, up to three levers, perception risks, advertisement warning signs, likely screening questions, suggested decision), localized per market.
- Triage mode for four or more advertisements, with a reuse analysis for the base CV.
- "Degree or equivalent experience" rule: accepted alternatives count as one requirement, so a missing degree is not penalized when the accepted route is supported.
- Phase 4 choice between a letter, a short application message or a labelled form-answer set, chosen from the actual channel (Germany and Spain previously offered only the letter).
- Messages and form answers are always plain text, because they are pasted into a channel.

### Edition-specific fixes

- Spain: explicit target-change branch in the turn router, STOP exemption when editing the manual, "everything at once" rule, explicit DATA-before-settings warning for Typst.
- Germany: neutral greeting without technical jargon; optional place-and-date line mentioned for traditional employers; staffing-agency and fixed-term signals in the advertisement read.
- Brazil: HTML margins fixed (the browser's default body margin no longer adds to the `@page` margin).

### Repository

- Prompts moved to `prompts/` with a consistent `.txt` extension; the US link in the README was broken and is fixed.
- Brand unified as JobEval in every header.
- Fictional examples in `examples/`, compiled with Typst 0.15.
- All Typst settings fragments and helpers in the prompts compile with Typst 0.15.
- README in English and Portuguese with a quickstart.

## v1.3.0

Brazil (`Helena-Duarte-Brasil`, 1.0.0-rc2) and first United States edition (`Jordan-Morgan-US`, 1.0.0-rc1).

- Same shared engine: per-job state, turn router, evidence-based scoring, STOP contract (`[STOP — waiting for: …]`), one artifact per turn.
- Brazil consultative read after the score, triage mode for four or more advertisements, and weighted operational dimension (regime and work mode) as a product choice — not a claim about every recruiter's screening order.
- Brazilian localization: seniority labels, degree types, diploma recognition without a blanket Carolina Bori rule, professional council registration, language scale, CLT/PJ salary format, LGPD privacy defaults, screening platforms.
- Affirmative-vacancy handling that does not score protected characteristics or infer restricted eligibility from inclusive ads.
- Phase 4 may be a letter, a short application message, or labelled form answers, chosen from the actual channel — not from a national reading stereotype.
- Brazil output formats: Typst (default), self-contained HTML, or plain text, with HTML attribute escaping.
- United States edition: resume plus optional cover letter, recruiter message, or application-answer set in Typst.

## v1.2.0

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
