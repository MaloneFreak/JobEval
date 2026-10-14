# JobEval

[English](README.md) · **Português**

O JobEval transforma um LLM capaz (ChatGPT, Claude, Gemini e outros) num consultor de candidaturas para um mercado específico: Brasil, Estados Unidos, Alemanha ou Espanha. Ele avalia sua aderência a vagas reais com base no que está documentado, escreve um currículo sob medida e, quando faz sentido, uma carta, uma mensagem curta de candidatura ou respostas de formulário. Ele não inventa fatos: o que não está comprovado vira pergunta, não afirmação.

**Site:** <https://malonefreak.github.io/JobEval/> · **Do código ao PDF:** <https://malonefreak.github.io/JobEval/pdf.html>

## Como usar em 3 passos

1. **Escolha o mercado da vaga e copie o assistente.** Use o botão *Copiar assistente* no site, ou abra o arquivo em [`prompts/`](prompts) e copie tudo.
2. **Cole numa conversa nova**, como primeira mensagem ou nas instruções do projeto. Depois envie seu currículo (ou histórico profissional) e uma ou mais vagas.
3. **Transforme o código em PDF.** O currículo chega como código Typst ou HTML. Cole na [página de PDF](https://malonefreak.github.io/JobEval/pdf.html) e baixe o arquivo: sem instalar nada, sem criar conta, e o texto fica no seu navegador.

Use um assistente por conversa. Não misture duas personas no mesmo chat.

## Mercados

| Mercado | Persona | Prompt | Versão | Documentos |
| --- | --- | --- | --- | --- |
| Brasil | Helena Duarte | [Helena-Duarte-Brasil.txt](prompts/Helena-Duarte-Brasil.txt) | 1.1.0-rc1 | Currículo, carta, mensagem de candidatura ou textos de formulário (Gupy e outras) |
| Estados Unidos | Jordan Morgan | [Jordan-Morgan-US.txt](prompts/Jordan-Morgan-US.txt) | 1.1.0-rc1 | Resume em US Letter, cover letter, mensagem ao recrutador ou respostas de formulário |
| Alemanha | Frau Schmidt | [Frau-Schmidt-Germany.txt](prompts/Frau-Schmidt-Germany.txt) | 1.3.0-rc1 | Lebenslauf, Anschreiben orientado à DIN 5008, mensagem ou respostas de portal |
| Espanha | Elena Martínez | [Elena-Martinez-Spain.txt](prompts/Elena-Martinez-Spain.txt) | 1.1.0-rc1 | CV, carta de presentación, mensagem ou respostas de filtro (InfoJobs e outras) |

Espanha significa Espanha, não todos os países de língua espanhola. Brasil significa Brasil, não Portugal nem outros países lusófonos. A edição dos EUA não é localizada para o Canadá. A Alemanha é a edição principal para o DACH; Áustria e Suíça não estão totalmente localizadas.

O chat segue o seu idioma. O idioma dos documentos segue a instrução do empregador ou o anúncio da vaga.

## Como é uma sessão

1. **Avaliação.** Para cada vaga (`J1`, `J2`, …): mapa requisito → evidência, nota transparente com o cálculo, confiança, restrições críticas e uma leitura de recrutador (primeira impressão provável, até três alavancas, riscos de percepção, sinais de alerta da vaga, perguntas de triagem prováveis e decisão sugerida). Com quatro vagas ou mais, primeiro uma tabela comparativa.
2. **Sua escolha.** Você escolhe uma vaga e, se quiser, o formato (Typst ou HTML). O assistente termina cada turno com uma linha como `[STOP — waiting for: escolher J1 ou J2]`. A parada é proposital: cada etapa é uma decisão sua.
3. **Currículo**, como um arquivo completo, seguido de poucas perguntas direcionadas.
4. **Um artefato de acompanhamento**, escolhido pelo canal real: carta, mensagem curta (corpo de e-mail, LinkedIn, campo de plataforma, WhatsApp do recrutador) ou respostas rotuladas para perguntas de triagem.

## Do código ao PDF

Num chat comum, o LLM não consegue gerar um arquivo PDF, e estes prompts nunca fingem que geraram. Eles entregam o código completo e explicam como transformá-lo em PDF:

| Caminho | Conta | Instalação | Serve para |
| --- | --- | --- | --- |
| [Página de PDF do JobEval](https://malonefreak.github.io/JobEval/pdf.html): colar e baixar | não | não | Typst e HTML |
| Salvar o HTML, abrir no navegador, Ctrl+P → Salvar como PDF | não | não | HTML |
| Editor online [typst.app](https://typst.app) | sim | não | Typst |
| `typst compile curriculo.typ` ([instalar o Typst](https://typst.app/download)) | não | sim | Typst |
| Ambientes que executam código (agentes com terminal) | n/a | n/a | o assistente pode compilar e entregar o PDF, relatando só o que observou |

Peça outro formato a qualquer momento: `formato: html`, `formato: texto` ou `formato: typst`.

Guias passo a passo: [Português](docs/guides/pdf.pt-BR.md) · [English](docs/guides/pdf.en.md) · [Español](docs/guides/pdf.es.md) · [Deutsch](docs/guides/pdf.de.md). Arquivos de exemplo fictícios em [`examples/`](examples).

## Instalar o assistente uma vez só

Colar o prompt como primeira mensagem de cada conversa nova sempre funciona. Para reaproveitar:

- **Projetos do Claude ou do ChatGPT:** cole o prompt nas instruções do projeto ou anexe o arquivo `.txt` ao projeto.
- **GPTs personalizados:** o campo de instruções aceita cerca de 8.000 caracteres (limite observado, sem documentação formal), e estes prompts têm entre 44.000 e 54.000. Envie o `.txt` como arquivo de conhecimento e deixe uma instrução curta, como "Siga exatamente o manual de operação do JobEval anexado." Teste: instruções em arquivo de conhecimento são consultadas, nem sempre aplicadas por inteiro, então a aderência pode ser menor do que colar o texto completo.
- **Gems do Gemini e recursos parecidos:** confira antes o limite das instruções; se o texto não couber, anexe o arquivo e teste da mesma forma.

## Privacidade

- O assistente não envia candidaturas, não contata empresas, não cria contas e não faz upload dos seus dados.
- A página de PDF compila no seu navegador e nunca envia seu texto. Ela baixa o compilador e as fontes do jsDelivr em versões fixas (o código do compilador tem verificação de integridade), e uma Content-Security-Policy restringe o acesso à rede ao jsDelivr e ao servidor de arquivos brutos do GitHub.
- O provedor do seu chat processa o que você cola na conversa. Confira as configurações de dados dele antes de compartilhar informações pessoais.
- Por padrão os documentos não incluem foto, data de nascimento, estado civil, números de documentos nem endereço completo; você pode pedir exceções.

## O que esta versão não promete

- Não é nota de ATS, decisão de contratação nem probabilidade de entrevista.
- Não garante compatibilidade universal com ATS ou com a Gupy. Os layouts são de coluna única e priorizam o texto, pensados para extração de texto simples.
- Não é aconselhamento jurídico sobre AGG, LGPD, EEO, vistos ou reconhecimento de diplomas.
- Evidência ausente não é tratada como requisito não atendido.
- Cartas, mensagens e respostas de formulário são opcionais. Perguntas sobre salário são condicionais.
- Linguagem inclusiva num anúncio não é tratada como vaga de acesso restrito.
- Gerar o código não é gerar o PDF. Número de páginas e limites de caracteres só são verificados quando realmente contados ou compilados.
- A carta alemã segue um layout digital orientado à DIN 5008; conformidade estrita com o Form B exige verificação.

## Estrutura do repositório

| Caminho | Conteúdo |
| --- | --- |
| [`prompts/`](prompts) | Os quatro prompts de operação, cada um autocontido. |
| [`docs/`](docs) | Site do GitHub Pages (escolha do assistente e página de PDF) e os guias de PDF. |
| [`examples/`](examples) | Currículo fictício de exemplo em Typst, HTML e PDF compilado. |
| [`CHANGELOG.md`](CHANGELOG.md) | Histórico de versões. |

**Publicar o site:** Settings → Pages → *Deploy from a branch* → `main` → `/docs`. Os prompts apontam para `https://malonefreak.github.io/JobEval/pdf.html`; num fork, troque essa URL em `prompts/*.txt` e as constantes do repositório no topo de `docs/assets/home.js` e `docs/assets/pdf.js`.

## Histórico

Veja o [CHANGELOG.md](CHANGELOG.md). Mais recente: **v1.4.0**: página de PDF, formatos HTML e texto em todas as edições, leitura de recrutador e modo triagem em todas, mensagens e respostas de formulário na Fase 4 para Alemanha e Espanha, correções no roteador da Espanha.

## Licença

MIT. Veja [LICENSE](LICENSE).
