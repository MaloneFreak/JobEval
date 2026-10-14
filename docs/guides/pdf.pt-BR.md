# Do código ao PDF

[English](pdf.en.md) · **Português** · [Español](pdf.es.md) · [Deutsch](pdf.de.md)

O assistente entrega o currículo e a carta como **um arquivo de código completo**, em Typst (padrão) ou HTML. Ele não consegue gerar o PDF sozinho num chat comum, e não finge que gerou. Escolha um dos caminhos abaixo. O primeiro é o mais fácil.

> Dica: você pode pedir outro formato a qualquer momento, por exemplo `formato: html`. O assistente também oferece a escolha quando pede para você selecionar a vaga.

## Caminho 1: página de PDF do JobEval (sem instalar nada, sem conta)

Funciona com Typst e com HTML.

1. No chat, copie o bloco de código inteiro (use o botão de copiar do próprio chat).
2. Abra **<https://malonefreak.github.io/JobEval/pdf.html>**.
3. Cole na caixa. A página reconhece se é Typst ou HTML e remove as marcações ```` ``` ```` se vierem junto.
4. **Typst:** clique em **Gerar PDF** e depois em **Baixar PDF**.
   **HTML:** clique em **Visualizar** e depois em **Imprimir / salvar PDF**.

Privacidade: a compilação roda no seu navegador. O texto do currículo não é enviado a nenhum servidor nem salvo. Na primeira vez a página baixa o compilador Typst (de 10 a 30 MB, aproximadamente); funciona melhor no computador.

Se aparecer um erro, clique em **Copiar erro** e envie a mensagem ao assistente na mesma conversa. Ele corrige e devolve o arquivo completo.

## Caminho 2: HTML direto no navegador (funciona offline)

1. Peça `formato: html` ao assistente.
2. Copie o código e salve como `curriculo.html` (ou `carta.html`):
   - **Windows (Bloco de Notas):** Arquivo → Salvar como → em *Tipo*, escolha **Todos os arquivos** → nome `curriculo.html` → codificação **UTF-8**.
   - **Mac (TextEdit):** antes de colar, use Formatar → **Converter em Texto Simples**; salve como `curriculo.html` e confirme **Usar .html**.
3. Dê dois cliques no arquivo para abrir no navegador.
4. **Ctrl+P** (Cmd+P no Mac) → destino **Salvar como PDF** → desmarque **Cabeçalhos e rodapés** → Salvar.

A linha de instrução que aparece no topo da tela não sai no PDF.

## Caminho 3: typst.app (editor online, exige conta)

1. Entre em <https://typst.app> e crie um projeto vazio.
2. Apague o conteúdo de exemplo e cole o código Typst.
3. Confira a pré-visualização e use a opção de exportar ou baixar PDF do editor.

## Caminho 4: terminal (compilador Typst)

1. Instale o Typst seguindo a página oficial: <https://typst.app/download>
   (Windows: `winget install --id Typst.Typst`; macOS com Homebrew: `brew install typst`).
2. Salve o código como `curriculo.typ`.
3. Rode `typst compile curriculo.typ`. O arquivo `curriculo.pdf` aparece na mesma pasta.

## Ambientes que executam código

Se você usa o assistente num ambiente com ferramentas (por exemplo, um agente com terminal), ele pode compilar e entregar o PDF diretamente. Os prompts só permitem isso quando a ferramenta existe de fato, e o assistente relata apenas o que foi realmente gerado, como erros e número de páginas.

## Antes de enviar

- O número de páginas é o esperado (o assistente nunca afirma uma contagem que não verificou).
- O texto do PDF pode ser selecionado e copiado (Ctrl+A, Ctrl+C num leitor de PDF). Isso indica extração de texto simples.
- Nome, contatos, datas, cargos e código da vaga estão corretos.
- Nome do arquivo claro, por exemplo `Nome_Sobrenome_Cargo.pdf`.

## Problemas comuns

| Sintoma | Solução |
| --- | --- |
| O arquivo virou `curriculo.html.txt` | Salve com o tipo **Todos os arquivos** ou renomeie para `.html`. |
| O PDF tem data, título ou endereço nas bordas | Desmarque **Cabeçalhos e rodapés** na janela de impressão. |
| Margens diferentes no HTML | Mantenha *Margens: Padrão* e *Escala: 100%*; o próprio arquivo define o tamanho A4 ou Letter. |
| Erro com número de linha | Envie a mensagem ao assistente na mesma conversa. |
| Aviso `unknown font family` | Os arquivos usam Libertinus Serif, incluída no Typst, no typst.app e na página do JobEval. Em outra instalação, o Typst usa uma fonte substituta. |
| Linhas ```` ``` ```` no início e no fim | Apague essas duas linhas; a página do JobEval faz isso sozinha. |
