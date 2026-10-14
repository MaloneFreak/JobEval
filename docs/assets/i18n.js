// Shared UI strings and language handling for the JobEval pages.
// Elements opt in with data-i18n="key" (text) or data-i18n-placeholder="key".
(function () {
  'use strict';

  var LANGS = ['pt', 'en', 'es', 'de'];

  var STRINGS = {
    pt: {
      'meta.title.home': 'JobEval – assistentes de candidatura por país',
      'meta.title.pdf': 'JobEval – do código ao PDF',
      'nav.home': 'Assistentes',
      'nav.pdf': 'Gerar PDF',
      'nav.github': 'GitHub',
      'footer.license': 'Projeto de código aberto, licença MIT. Personas fictícias; não é aconselhamento jurídico.',
      'footer.privacy': 'Este site não usa cookies, contas nem rastreamento.',

      'home.title': 'Assistentes de candidatura por país, para usar no seu chat de IA.',
      'home.lead': 'Avaliação de aderência baseada em evidências, currículo sob medida e, se fizer sentido, carta ou mensagem. Nada é inventado: o que não está comprovado vira pergunta, não afirmação.',
      'home.works': 'Funciona com ChatGPT, Claude, Gemini e outros modelos capazes.',
      'steps.title': 'Como usar',
      'step1.title': 'Escolha o país da vaga',
      'step1.text': 'Copie o assistente do mercado onde você vai se candidatar. Um assistente por conversa.',
      'step2.title': 'Cole no chat e envie seus dados',
      'step2.text': 'Abra uma conversa nova, cole o texto como primeira mensagem (ou nas instruções do projeto) e envie seu currículo e uma ou mais vagas. O assistente avalia, espera sua escolha e só então escreve.',
      'step3.title': 'Transforme o código em PDF',
      'step3.text': 'O currículo chega como código (Typst ou HTML). Cole-o na página de PDF e baixe o arquivo, sem instalar nada e sem criar conta.',
      'step3.cta': 'Abrir a página de PDF',
      'personas.title': 'Escolha o assistente',
      'card.copy': 'Copiar assistente',
      'card.copied': 'Copiado! Agora cole no chat.',
      'card.copyFail': 'Não foi possível copiar aqui. Use “Baixar .txt”.',
      'card.download': 'Baixar .txt',
      'card.view': 'Ver no GitHub',
      'card.version': 'versão',
      'card.loading': 'carregando…',
      'persona.br.market': 'Brasil',
      'persona.br.desc': 'Currículo e carta em português, CLT e PJ, Gupy e outras plataformas, LGPD e vagas afirmativas.',
      'persona.us.market': 'Estados Unidos',
      'persona.us.desc': 'Resume em US Letter, cover letter ou mensagem, sponsorship e vagas federais (USAJOBS).',
      'persona.de.market': 'Alemanha',
      'persona.de.desc': 'Lebenslauf, Anschreiben em layout orientado à DIN 5008, reconhecimento de diplomas (Anerkennung) e Werkstudent.',
      'persona.es.market': 'Espanha',
      'persona.es.desc': 'CV e carta de presentación, InfoJobs e perguntas de filtro, homologação de títulos e idiomas cooficiais.',
      'tips.title': 'Bom saber',
      'tip1': 'O assistente para depois de cada etapa e termina com uma linha [STOP — …]. É proposital: cada parada é uma decisão sua.',
      'tip2': 'A nota de aderência é uma estimativa para orientar ajustes, não uma nota de ATS nem chance de contratação.',
      'tip3': 'Prefere não lidar com código? Peça “formato: html” e salve o PDF pelo navegador com Ctrl+P.',
      'tip4': 'O assistente não envia candidaturas nem contata empresas. Revise tudo antes de enviar.',
      'guide.link': 'Guia passo a passo: do código ao PDF',
      'guide.href': 'https://github.com/MaloneFreak/JobEval/blob/main/docs/guides/pdf.pt-BR.md',

      'pdf.title': 'Do código ao PDF',
      'pdf.lead': 'Cole o código que o assistente entregou e baixe o PDF. Tudo roda no seu navegador: o texto do seu currículo não é enviado a nenhum servidor.',
      'pdf.privacy': 'O compilador (WebAssembly) e as fontes são baixados do CDN jsDelivr em versões fixas; o código do compilador tem verificação de integridade. Seu texto não sai do navegador e não é salvo.',
      'pdf.device': 'Funciona melhor no computador. No celular, o compilador Typst pode ser pesado; o formato HTML é mais leve.',
      'tab.typst': 'Typst',
      'tab.html': 'HTML',
      'pdf.placeholder.typst': 'Cole aqui o código Typst completo (começa com #let …).',
      'pdf.placeholder.html': 'Cole aqui o código HTML completo (começa com <!DOCTYPE html>).',
      'pdf.filename': 'Nome do arquivo',
      'pdf.filename.default': 'curriculo',
      'pdf.generate': 'Gerar PDF',
      'pdf.example': 'Usar exemplo',
      'pdf.clear': 'Limpar',
      'pdf.empty': 'Cole o código primeiro.',
      'pdf.fences': 'Removemos as marcações ``` do início e do fim.',
      'pdf.looksHtml': 'Isto parece HTML. Mudamos para a aba HTML.',
      'pdf.looksTypst': 'Isto parece Typst. Mudamos para a aba Typst.',
      'pdf.loadingCompiler': 'Carregando o compilador Typst (na primeira vez, cerca de 10 a 30 MB)…',
      'pdf.loadingFonts': 'Carregando as fontes…',
      'pdf.compiling': 'Gerando o PDF…',
      'pdf.done': 'PDF pronto.',
      'pdf.pages1': '1 página',
      'pdf.pagesN': '{n} páginas',
      'pdf.download': 'Baixar PDF',
      'pdf.open': 'Abrir em nova aba',
      'pdf.check.title': 'Antes de enviar, confira:',
      'pdf.check1': 'O número de páginas é o esperado.',
      'pdf.check2': 'O texto pode ser selecionado e copiado do PDF (teste com Ctrl+A e Ctrl+C).',
      'pdf.check3': 'Nome, contatos, datas e cargos estão corretos.',
      'pdf.error.title': 'O código não compilou',
      'pdf.error.hint': 'Copie a mensagem abaixo e envie ao assistente na mesma conversa. Ele corrige o problema e devolve o arquivo completo.',
      'pdf.hint.package': 'Este código importa um pacote externo (#import "@preview/…"), e esta página não baixa pacotes. Os arquivos do JobEval não precisam deles: peça ao assistente a versão autocontida.',
      'pdf.error.copy': 'Copiar erro',
      'pdf.error.copied': 'Erro copiado.',
      'pdf.error.load': 'Não foi possível carregar o compilador. Verifique a conexão e tente de novo, ou use typst.app ou o formato HTML.',
      'pdf.error.exampleLoad': 'Não foi possível carregar o exemplo agora.',
      'html.preview': 'Visualizar',
      'html.print': 'Imprimir / salvar PDF',
      'html.download': 'Baixar .html',
      'html.printHint': 'Na janela de impressão, escolha “Salvar como PDF” e desmarque “Cabeçalhos e rodapés”.',
      'html.safe': 'Por segurança, a visualização bloqueia scripts e conteúdo externo.',
      'html.ready': 'Visualização pronta.'
    },

    en: {
      'meta.title.home': 'JobEval – country-specific application assistants',
      'meta.title.pdf': 'JobEval – from code to PDF',
      'nav.home': 'Assistants',
      'nav.pdf': 'Create PDF',
      'nav.github': 'GitHub',
      'footer.license': 'Open source, MIT license. Fictional personas; not legal advice.',
      'footer.privacy': 'This site uses no cookies, accounts or tracking.',

      'home.title': 'Country-specific job-application assistants for your AI chat.',
      'home.lead': 'Evidence-based fit assessment, a tailored CV or resume and, when useful, a cover letter or message. Nothing is invented: what is not documented becomes a question, not a claim.',
      'home.works': 'Works with ChatGPT, Claude, Gemini and other capable models.',
      'steps.title': 'How to use',
      'step1.title': 'Pick the job’s country',
      'step1.text': 'Copy the assistant for the market you are applying to. One assistant per chat.',
      'step2.title': 'Paste it into the chat, then send your details',
      'step2.text': 'Open a new chat, paste the text as the first message (or as project instructions), then send your CV and one or more job ads. The assistant assesses, waits for your choice, and only then writes.',
      'step3.title': 'Turn the code into a PDF',
      'step3.text': 'The CV arrives as code (Typst or HTML). Paste it into the PDF page and download the file: no install, no account.',
      'step3.cta': 'Open the PDF page',
      'personas.title': 'Choose the assistant',
      'card.copy': 'Copy assistant',
      'card.copied': 'Copied! Now paste it into the chat.',
      'card.copyFail': 'Could not copy here. Use “Download .txt”.',
      'card.download': 'Download .txt',
      'card.view': 'View on GitHub',
      'card.version': 'version',
      'card.loading': 'loading…',
      'persona.br.market': 'Brazil',
      'persona.br.desc': 'Portuguese CV and letter, CLT and PJ contracts, Gupy and other platforms, LGPD and affirmative vacancies.',
      'persona.us.market': 'United States',
      'persona.us.desc': 'US Letter resume, cover letter or recruiter message, sponsorship questions and federal jobs (USAJOBS).',
      'persona.de.market': 'Germany',
      'persona.de.desc': 'Lebenslauf, DIN-5008-oriented Anschreiben, recognition of foreign qualifications (Anerkennung) and Werkstudent roles.',
      'persona.es.market': 'Spain',
      'persona.es.desc': 'CV and carta de presentación, InfoJobs and screening questions, degree recognition (homologación) and co-official languages.',
      'tips.title': 'Good to know',
      'tip1': 'The assistant pauses after each step and ends with a [STOP — …] line. That is on purpose: each stop is your decision.',
      'tip2': 'The fit score is an estimate to guide tailoring, not an ATS score or a hiring probability.',
      'tip3': 'Rather not deal with code? Ask for “format: html” and save the PDF from your browser with Ctrl+P.',
      'tip4': 'The assistant does not submit applications or contact employers. Review everything before you send it.',
      'guide.link': 'Step-by-step guide: from code to PDF',
      'guide.href': 'https://github.com/MaloneFreak/JobEval/blob/main/docs/guides/pdf.en.md',

      'pdf.title': 'From code to PDF',
      'pdf.lead': 'Paste the code the assistant gave you and download the PDF. Everything runs in your browser: your CV text is not sent to any server.',
      'pdf.privacy': 'The compiler (WebAssembly) and fonts are downloaded from the jsDelivr CDN at pinned versions; the compiler code is integrity-checked. Your text never leaves the browser and is not stored.',
      'pdf.device': 'Works best on a computer. On phones the Typst compiler can be heavy; the HTML format is lighter.',
      'tab.typst': 'Typst',
      'tab.html': 'HTML',
      'pdf.placeholder.typst': 'Paste the complete Typst code here (it starts with #let …).',
      'pdf.placeholder.html': 'Paste the complete HTML code here (it starts with <!DOCTYPE html>).',
      'pdf.filename': 'File name',
      'pdf.filename.default': 'resume',
      'pdf.generate': 'Create PDF',
      'pdf.example': 'Try an example',
      'pdf.clear': 'Clear',
      'pdf.empty': 'Paste the code first.',
      'pdf.fences': 'Removed the ``` markers at the start and end.',
      'pdf.looksHtml': 'This looks like HTML. Switched to the HTML tab.',
      'pdf.looksTypst': 'This looks like Typst. Switched to the Typst tab.',
      'pdf.loadingCompiler': 'Loading the Typst compiler (first time: roughly 10–30 MB)…',
      'pdf.loadingFonts': 'Loading fonts…',
      'pdf.compiling': 'Creating the PDF…',
      'pdf.done': 'PDF ready.',
      'pdf.pages1': '1 page',
      'pdf.pagesN': '{n} pages',
      'pdf.download': 'Download PDF',
      'pdf.open': 'Open in new tab',
      'pdf.check.title': 'Before sending, check:',
      'pdf.check1': 'The page count is what you expected.',
      'pdf.check2': 'Text can be selected and copied from the PDF (try Ctrl+A, Ctrl+C).',
      'pdf.check3': 'Name, contacts, dates and titles are correct.',
      'pdf.error.title': 'The code did not compile',
      'pdf.error.hint': 'Copy the message below and send it to the assistant in the same chat. It will fix the problem and return the complete file.',
      'pdf.hint.package': 'This code imports an external package (#import "@preview/…"), and this page does not download packages. JobEval files never need them: ask the assistant for the self-contained version.',
      'pdf.error.copy': 'Copy error',
      'pdf.error.copied': 'Error copied.',
      'pdf.error.load': 'Could not load the compiler. Check your connection and try again, or use typst.app or the HTML format.',
      'pdf.error.exampleLoad': 'Could not load the example right now.',
      'html.preview': 'Preview',
      'html.print': 'Print / save as PDF',
      'html.download': 'Download .html',
      'html.printHint': 'In the print dialog, choose “Save as PDF” and turn off “Headers and footers”.',
      'html.safe': 'For safety, the preview blocks scripts and external content.',
      'html.ready': 'Preview ready.'
    },

    es: {
      'meta.title.home': 'JobEval – asistentes de candidatura por país',
      'meta.title.pdf': 'JobEval – del código al PDF',
      'nav.home': 'Asistentes',
      'nav.pdf': 'Generar PDF',
      'nav.github': 'GitHub',
      'footer.license': 'Código abierto, licencia MIT. Personajes ficticios; no es asesoramiento jurídico.',
      'footer.privacy': 'Este sitio no usa cookies, cuentas ni seguimiento.',

      'home.title': 'Asistentes de candidatura por país para tu chat de IA.',
      'home.lead': 'Evaluación de encaje basada en evidencias, CV adaptado y, si aporta valor, carta o mensaje. No se inventa nada: lo que no está documentado se convierte en pregunta, no en afirmación.',
      'home.works': 'Funciona con ChatGPT, Claude, Gemini y otros modelos capaces.',
      'steps.title': 'Cómo usarlo',
      'step1.title': 'Elige el país de la oferta',
      'step1.text': 'Copia el asistente del mercado al que te presentas. Un asistente por conversación.',
      'step2.title': 'Pégalo en el chat y envía tus datos',
      'step2.text': 'Abre una conversación nueva, pega el texto como primer mensaje (o en las instrucciones del proyecto) y envía tu CV y una o varias ofertas. El asistente evalúa, espera tu elección y solo entonces redacta.',
      'step3.title': 'Convierte el código en PDF',
      'step3.text': 'El CV llega como código (Typst o HTML). Pégalo en la página de PDF y descarga el archivo, sin instalar nada ni crear cuenta.',
      'step3.cta': 'Abrir la página de PDF',
      'personas.title': 'Elige el asistente',
      'card.copy': 'Copiar asistente',
      'card.copied': '¡Copiado! Ahora pégalo en el chat.',
      'card.copyFail': 'No se pudo copiar aquí. Usa «Descargar .txt».',
      'card.download': 'Descargar .txt',
      'card.view': 'Ver en GitHub',
      'card.version': 'versión',
      'card.loading': 'cargando…',
      'persona.br.market': 'Brasil',
      'persona.br.desc': 'CV y carta en portugués, contratos CLT y PJ, Gupy y otras plataformas, LGPD y vacantes afirmativas.',
      'persona.us.market': 'Estados Unidos',
      'persona.us.desc': 'Resume en formato US Letter, carta o mensaje al reclutador, sponsorship y empleo federal (USAJOBS).',
      'persona.de.market': 'Alemania',
      'persona.de.desc': 'Lebenslauf, Anschreiben con maquetación orientada a DIN 5008, reconocimiento de títulos (Anerkennung) y puestos Werkstudent.',
      'persona.es.market': 'España',
      'persona.es.desc': 'CV y carta de presentación, InfoJobs y preguntas de filtrado, homologación de títulos y lenguas cooficiales.',
      'tips.title': 'Conviene saber',
      'tip1': 'El asistente se detiene tras cada etapa y termina con una línea [STOP — …]. Es intencionado: cada parada es una decisión tuya.',
      'tip2': 'La puntuación de encaje es una estimación para orientar los ajustes, no una puntuación de ATS ni una probabilidad de contratación.',
      'tip3': '¿Prefieres no tocar código? Pide «formato: html» y guarda el PDF desde el navegador con Ctrl+P.',
      'tip4': 'El asistente no envía candidaturas ni contacta con empresas. Revisa todo antes de enviarlo.',
      'guide.link': 'Guía paso a paso: del código al PDF',
      'guide.href': 'https://github.com/MaloneFreak/JobEval/blob/main/docs/guides/pdf.es.md',

      'pdf.title': 'Del código al PDF',
      'pdf.lead': 'Pega el código que te dio el asistente y descarga el PDF. Todo se ejecuta en tu navegador: el texto de tu CV no se envía a ningún servidor.',
      'pdf.privacy': 'El compilador (WebAssembly) y las fuentes se descargan del CDN jsDelivr en versiones fijas; el código del compilador se verifica por integridad. Tu texto no sale del navegador y no se guarda.',
      'pdf.device': 'Funciona mejor en un ordenador. En el móvil el compilador Typst puede ser pesado; el formato HTML es más ligero.',
      'tab.typst': 'Typst',
      'tab.html': 'HTML',
      'pdf.placeholder.typst': 'Pega aquí el código Typst completo (empieza por #let …).',
      'pdf.placeholder.html': 'Pega aquí el código HTML completo (empieza por <!DOCTYPE html>).',
      'pdf.filename': 'Nombre del archivo',
      'pdf.filename.default': 'cv',
      'pdf.generate': 'Generar PDF',
      'pdf.example': 'Probar un ejemplo',
      'pdf.clear': 'Borrar',
      'pdf.empty': 'Pega primero el código.',
      'pdf.fences': 'Hemos quitado las marcas ``` del principio y del final.',
      'pdf.looksHtml': 'Esto parece HTML. Hemos cambiado a la pestaña HTML.',
      'pdf.looksTypst': 'Esto parece Typst. Hemos cambiado a la pestaña Typst.',
      'pdf.loadingCompiler': 'Cargando el compilador Typst (la primera vez, unos 10–30 MB)…',
      'pdf.loadingFonts': 'Cargando las fuentes…',
      'pdf.compiling': 'Generando el PDF…',
      'pdf.done': 'PDF listo.',
      'pdf.pages1': '1 página',
      'pdf.pagesN': '{n} páginas',
      'pdf.download': 'Descargar PDF',
      'pdf.open': 'Abrir en otra pestaña',
      'pdf.check.title': 'Antes de enviarlo, comprueba:',
      'pdf.check1': 'El número de páginas es el esperado.',
      'pdf.check2': 'El texto se puede seleccionar y copiar del PDF (prueba Ctrl+A y Ctrl+C).',
      'pdf.check3': 'Nombre, contactos, fechas y puestos son correctos.',
      'pdf.error.title': 'El código no compiló',
      'pdf.error.hint': 'Copia el mensaje de abajo y envíaselo al asistente en la misma conversación. Corregirá el problema y te devolverá el archivo completo.',
      'pdf.hint.package': 'Este código importa un paquete externo (#import "@preview/…") y esta página no descarga paquetes. Los archivos de JobEval no los necesitan: pide al asistente la versión autocontenida.',
      'pdf.error.copy': 'Copiar error',
      'pdf.error.copied': 'Error copiado.',
      'pdf.error.load': 'No se pudo cargar el compilador. Comprueba la conexión y vuelve a intentarlo, o usa typst.app o el formato HTML.',
      'pdf.error.exampleLoad': 'No se pudo cargar el ejemplo ahora.',
      'html.preview': 'Vista previa',
      'html.print': 'Imprimir / guardar PDF',
      'html.download': 'Descargar .html',
      'html.printHint': 'En el cuadro de impresión, elige «Guardar como PDF» y desactiva «Encabezados y pies de página».',
      'html.safe': 'Por seguridad, la vista previa bloquea scripts y contenido externo.',
      'html.ready': 'Vista previa lista.'
    },

    de: {
      'meta.title.home': 'JobEval – Bewerbungsassistenten pro Land',
      'meta.title.pdf': 'JobEval – vom Code zum PDF',
      'nav.home': 'Assistenten',
      'nav.pdf': 'PDF erstellen',
      'nav.github': 'GitHub',
      'footer.license': 'Open Source, MIT-Lizenz. Fiktive Personas; keine Rechtsberatung.',
      'footer.privacy': 'Diese Seite verwendet keine Cookies, Konten oder Tracking.',

      'home.title': 'Bewerbungsassistenten pro Land für Ihren KI-Chat.',
      'home.lead': 'Evidenzbasierte Passungsanalyse, ein zugeschnittener Lebenslauf und, falls sinnvoll, Anschreiben oder Nachricht. Nichts wird erfunden: Was nicht belegt ist, wird zur Frage, nicht zur Behauptung.',
      'home.works': 'Funktioniert mit ChatGPT, Claude, Gemini und anderen leistungsfähigen Modellen.',
      'steps.title': 'So funktioniert es',
      'step1.title': 'Land der Stelle wählen',
      'step1.text': 'Kopieren Sie den Assistenten für den Zielmarkt. Ein Assistent pro Chat.',
      'step2.title': 'In den Chat einfügen und Unterlagen senden',
      'step2.text': 'Öffnen Sie einen neuen Chat, fügen Sie den Text als erste Nachricht (oder als Projektanweisung) ein und senden Sie Lebenslauf und eine oder mehrere Stellenanzeigen. Der Assistent bewertet, wartet auf Ihre Auswahl und schreibt erst dann.',
      'step3.title': 'Code in PDF umwandeln',
      'step3.text': 'Der Lebenslauf kommt als Code (Typst oder HTML). Fügen Sie ihn auf der PDF-Seite ein und laden Sie die Datei herunter – ohne Installation und ohne Konto.',
      'step3.cta': 'PDF-Seite öffnen',
      'personas.title': 'Assistent wählen',
      'card.copy': 'Assistent kopieren',
      'card.copied': 'Kopiert! Jetzt in den Chat einfügen.',
      'card.copyFail': 'Kopieren hier nicht möglich. Bitte „.txt herunterladen“ verwenden.',
      'card.download': '.txt herunterladen',
      'card.view': 'Auf GitHub ansehen',
      'card.version': 'Version',
      'card.loading': 'wird geladen…',
      'persona.br.market': 'Brasilien',
      'persona.br.desc': 'Lebenslauf und Anschreiben auf Portugiesisch, CLT- und PJ-Verträge, Gupy und andere Plattformen, LGPD und Förderausschreibungen.',
      'persona.us.market': 'USA',
      'persona.us.desc': 'Resume im US-Letter-Format, Anschreiben oder Nachricht, Sponsorship-Fragen und Bundesstellen (USAJOBS).',
      'persona.de.market': 'Deutschland',
      'persona.de.desc': 'Lebenslauf, Anschreiben im DIN-5008-orientierten Layout, Anerkennung ausländischer Abschlüsse und Werkstudentenstellen.',
      'persona.es.market': 'Spanien',
      'persona.es.desc': 'Lebenslauf und carta de presentación, InfoJobs und Screening-Fragen, Anerkennung (homologación) und kooffizielle Sprachen.',
      'tips.title': 'Gut zu wissen',
      'tip1': 'Der Assistent hält nach jedem Schritt an und endet mit einer Zeile [STOP — …]. Das ist gewollt: Jeder Halt ist Ihre Entscheidung.',
      'tip2': 'Der Passungswert ist eine Schätzung zur Orientierung, kein ATS-Score und keine Einstellungswahrscheinlichkeit.',
      'tip3': 'Lieber keinen Code? Bitten Sie um „Format: HTML“ und speichern Sie das PDF im Browser mit Strg+P.',
      'tip4': 'Der Assistent verschickt keine Bewerbungen und kontaktiert keine Arbeitgeber. Prüfen Sie alles vor dem Versand.',
      'guide.link': 'Schritt-für-Schritt-Anleitung: vom Code zum PDF',
      'guide.href': 'https://github.com/MaloneFreak/JobEval/blob/main/docs/guides/pdf.de.md',

      'pdf.title': 'Vom Code zum PDF',
      'pdf.lead': 'Fügen Sie den Code des Assistenten ein und laden Sie das PDF herunter. Alles läuft in Ihrem Browser: Der Text Ihres Lebenslaufs wird an keinen Server gesendet.',
      'pdf.privacy': 'Compiler (WebAssembly) und Schriften werden in festen Versionen vom CDN jsDelivr geladen; der Compiler-Code wird auf Integrität geprüft. Ihr Text verlässt den Browser nicht und wird nicht gespeichert.',
      'pdf.device': 'Am besten am Computer. Auf dem Smartphone kann der Typst-Compiler schwer sein; das HTML-Format ist leichter.',
      'tab.typst': 'Typst',
      'tab.html': 'HTML',
      'pdf.placeholder.typst': 'Fügen Sie hier den vollständigen Typst-Code ein (beginnt mit #let …).',
      'pdf.placeholder.html': 'Fügen Sie hier den vollständigen HTML-Code ein (beginnt mit <!DOCTYPE html>).',
      'pdf.filename': 'Dateiname',
      'pdf.filename.default': 'lebenslauf',
      'pdf.generate': 'PDF erstellen',
      'pdf.example': 'Beispiel laden',
      'pdf.clear': 'Leeren',
      'pdf.empty': 'Bitte zuerst den Code einfügen.',
      'pdf.fences': 'Die ```-Markierungen am Anfang und Ende wurden entfernt.',
      'pdf.looksHtml': 'Das sieht nach HTML aus. Zur HTML-Ansicht gewechselt.',
      'pdf.looksTypst': 'Das sieht nach Typst aus. Zur Typst-Ansicht gewechselt.',
      'pdf.loadingCompiler': 'Typst-Compiler wird geladen (beim ersten Mal ca. 10–30 MB)…',
      'pdf.loadingFonts': 'Schriften werden geladen…',
      'pdf.compiling': 'PDF wird erstellt…',
      'pdf.done': 'PDF fertig.',
      'pdf.pages1': '1 Seite',
      'pdf.pagesN': '{n} Seiten',
      'pdf.download': 'PDF herunterladen',
      'pdf.open': 'In neuem Tab öffnen',
      'pdf.check.title': 'Vor dem Versand prüfen:',
      'pdf.check1': 'Die Seitenzahl stimmt.',
      'pdf.check2': 'Der Text lässt sich im PDF markieren und kopieren (Strg+A, Strg+C).',
      'pdf.check3': 'Name, Kontaktdaten, Daten und Positionen stimmen.',
      'pdf.error.title': 'Der Code ließ sich nicht kompilieren',
      'pdf.error.hint': 'Kopieren Sie die Meldung unten und senden Sie sie im selben Chat an den Assistenten. Er behebt den Fehler und liefert die vollständige Datei.',
      'pdf.hint.package': 'Dieser Code importiert ein externes Paket (#import "@preview/…"), und diese Seite lädt keine Pakete. JobEval-Dateien brauchen keine: Bitten Sie den Assistenten um die eigenständige Version.',
      'pdf.error.copy': 'Fehler kopieren',
      'pdf.error.copied': 'Fehler kopiert.',
      'pdf.error.load': 'Der Compiler konnte nicht geladen werden. Prüfen Sie die Verbindung und versuchen Sie es erneut, oder nutzen Sie typst.app oder das HTML-Format.',
      'pdf.error.exampleLoad': 'Das Beispiel konnte gerade nicht geladen werden.',
      'html.preview': 'Vorschau',
      'html.print': 'Drucken / als PDF speichern',
      'html.download': '.html herunterladen',
      'html.printHint': 'Wählen Sie im Druckdialog „Als PDF speichern“ und deaktivieren Sie „Kopf- und Fußzeilen“.',
      'html.safe': 'Aus Sicherheitsgründen blockiert die Vorschau Skripte und externe Inhalte.',
      'html.ready': 'Vorschau bereit.'
    }
  };

  function readStored() {
    try { return window.localStorage.getItem('jobeval.lang'); } catch (e) { return null; }
  }

  function store(lang) {
    try { window.localStorage.setItem('jobeval.lang', lang); } catch (e) { /* storage unavailable */ }
  }

  function detect() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl && LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    var stored = readStored();
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    var short = nav.slice(0, 2).toLowerCase();
    return LANGS.indexOf(short) !== -1 ? short : 'en';
  }

  var current = detect();
  var listeners = [];

  function t(key, vars) {
    var table = STRINGS[current] || STRINGS.en;
    var value = table[key];
    if (value === undefined) value = STRINGS.en[key];
    if (value === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = value.split('{' + name + '}').join(String(vars[name]));
      });
    }
    return value;
  }

  function apply(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    scope.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    scope.querySelectorAll('[data-i18n-href]').forEach(function (el) {
      el.setAttribute('href', t(el.getAttribute('data-i18n-href')));
    });
    var titleKey = document.documentElement.getAttribute('data-title-key');
    if (titleKey) document.title = t(titleKey);
    document.documentElement.lang = current === 'pt' ? 'pt-BR' : current;
    document.querySelectorAll('.langs button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === current ? 'true' : 'false');
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    current = lang;
    store(lang);
    apply();
    listeners.forEach(function (fn) { fn(lang); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.langs button').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
    });
    apply();
  });

  window.JobEvalI18n = {
    t: t,
    apply: apply,
    lang: function () { return current; },
    onChange: function (fn) { listeners.push(fn); }
  };
})();
