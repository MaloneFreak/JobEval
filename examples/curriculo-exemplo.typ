// Fictional example for demonstration only.
// Person, employers, contacts and dates are invented.
// Structure follows prompts/Helena-Duarte-Brasil.txt, section 10.2.

// 1. DATA
#let name = "Camila Exemplo Ribeiro"
#let location = "Campinas, SP"
#let contacts = (
  "camila.exemplo@example.com",
  "(19) 90000-0000",
)
#let profile_label = "linkedin.com/in/exemplo"
#let profile_url = "https://www.linkedin.com/in/exemplo"

#let label_summary = "Resumo profissional"
#let label_experience = "Experiência profissional"
#let label_education = "Formação acadêmica"
#let label_skills = "Competências"
#let label_languages = "Idiomas"

#let summary = "Analista de dados com 4 anos de experiência em varejo, com foco em SQL, Power BI e automação de relatórios em Python. Experiência em indicadores comerciais e apoio a decisões de estoque."

#let jobs = (
  (
    title: "Analista de Dados Pleno",
    organization: "Varejo Exemplo S.A.",
    location: "Campinas, SP (híbrido)",
    dates: "03/2023 – atual",
    bullets: (
      "Desenvolvi painéis de vendas em Power BI usados semanalmente pela diretoria comercial.",
      "Automatizei em Python a consolidação de 12 relatórios regionais, antes feita manualmente.",
      "Modelei consultas SQL para a análise de ruptura de estoque em parceria com a equipe de compras.",
    ),
  ),
  (
    title: "Analista de Dados Júnior",
    organization: "Logística Modelo Ltda.",
    location: "Jundiaí, SP",
    dates: "2021 – 2023",
    bullets: (
      "Mantive indicadores de prazo de entrega e apoiei a equipe de operações na leitura dos resultados.",
    ),
  ),
)

#let education = (
  (
    title: "Bacharelado em Estatística (completo)",
    organization: "Universidade Exemplo",
    location: "Campinas, SP",
    dates: "2020",
  ),
)

#let skills = (
  "Dados: SQL (PostgreSQL), Python (pandas), Power BI, Excel avançado",
  "Métodos: modelagem dimensional, indicadores comerciais, análise de estoque",
)

#let languages = (
  "Português: nativo",
  "Inglês: intermediário",
)

// 2. SETTINGS
#set document(title: name + " – Currículo", author: name)
#set page(paper: "a4", margin: (x: 16mm, y: 14mm))
#set text(font: "Libertinus Serif", size: 10.5pt, lang: "pt", region: "BR")
#set par(justify: false, leading: 0.55em)
#set list(indent: 0pt, body-indent: 0.8em)

// 3. HELPERS
#let section(label) = {
  v(8pt)
  block(below: 4pt)[
    #text(size: 11.5pt, weight: "bold", label)
  ]
}

#let entry(title, organization, location, dates) = {
  block(below: 3pt)[
    #text(weight: "bold", title)
    #if organization != "" {
      linebreak()
      text(organization)
    }
    #if location != "" {
      linebreak()
      text(location)
    }
    #if dates != "" {
      linebreak()
      text(size: 10pt, dates)
    }
  ]
}

#let bullets(items) = {
  if items.len() > 0 {
    list(..items)
  }
}

// 4. BODY
#text(size: 18pt, weight: "bold", name)
#linebreak()
#text(location)
#for contact in contacts {
  linebreak()
  text(contact)
}
#linebreak()
#link(profile_url, profile_label)

#section(label_summary)
#text(summary)

#section(label_experience)
#for job in jobs {
  entry(job.title, job.organization, job.location, job.dates)
  bullets(job.bullets)
  v(4pt)
}

#section(label_education)
#for item in education {
  entry(item.title, item.organization, item.location, item.dates)
}

#section(label_skills)
#bullets(skills)

#section(label_languages)
#bullets(languages)
