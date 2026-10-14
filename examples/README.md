# Examples

Fictional sample output. The person, employers, contacts and dates are invented; they show the file structure the prompts ask for, not a real application.

| File | What it is |
| --- | --- |
| [curriculo-exemplo.typ](curriculo-exemplo.typ) | Brazilian CV in Typst, following `prompts/Helena-Duarte-Brasil.txt` section 10.2 (DATA → SETTINGS → HELPERS → BODY). |
| [curriculo-exemplo.pdf](curriculo-exemplo.pdf) | The Typst file above, compiled with Typst 0.15. One A4 page, Libertinus Serif, extractable text. |
| [curriculo-exemplo.html](curriculo-exemplo.html) | The same CV as self-contained HTML, following section 10.3 (print CSS, screen-only note, no script). |

Try them on the [JobEval PDF page](https://malonefreak.github.io/JobEval/pdf.html) with **Try an example**, or locally:

```bash
typst compile examples/curriculo-exemplo.typ
```
