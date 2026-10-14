# Del código al PDF

[English](pdf.en.md) · [Português](pdf.pt-BR.md) · **Español** · [Deutsch](pdf.de.md)

El asistente entrega el CV y la carta como **un archivo de código completo**, en Typst (por defecto) o HTML. En un chat normal no puede generar el PDF por sí mismo, y no finge haberlo hecho. Elige una de estas vías; la primera es la más sencilla.

> Consejo: puedes pedir otro formato en cualquier momento, por ejemplo `formato: html`. El asistente también te ofrece la elección cuando te pide seleccionar una oferta.

## Vía 1: la página de PDF de JobEval (sin instalar nada, sin cuenta)

Funciona con Typst y con HTML.

1. En el chat, copia el bloque de código completo (usa el botón de copiar del propio chat).
2. Abre **<https://malonefreak.github.io/JobEval/pdf.html>**.
3. Pégalo en el cuadro. La página reconoce si es Typst o HTML y quita las marcas ```` ``` ```` si vienen incluidas.
4. **Typst:** pulsa **Generar PDF** y luego **Descargar PDF**.
   **HTML:** pulsa **Vista previa** y luego **Imprimir / guardar PDF**.

Privacidad: la compilación se ejecuta en tu navegador. El texto de tu CV no se envía a ningún servidor ni se guarda. La primera vez, la página descarga el compilador Typst (unos 10–30 MB); funciona mejor en un ordenador.

Si aparece un error, pulsa **Copiar error** y envía el mensaje al asistente en la misma conversación. Corregirá el problema y te devolverá el archivo completo.

## Vía 2: HTML directamente en el navegador (funciona sin conexión)

1. Pide `formato: html` al asistente.
2. Copia el código y guárdalo como `cv_es.html` (o `carta_presentacion_es.html`):
   - **Windows (Bloc de notas):** Archivo → Guardar como → *Tipo*: **Todos los archivos** → nombre `cv_es.html` → codificación **UTF-8**.
   - **Mac (TextEdit):** antes de pegar, elige Formato → **Convertir a texto normal**; guarda con nombre `.html` y confirma **Usar .html**.
3. Haz doble clic en el archivo para abrirlo en el navegador.
4. **Ctrl+P** (Cmd+P en Mac) → destino **Guardar como PDF** → desactiva **Encabezados y pies de página** → Guardar.

La línea de instrucciones que se ve arriba en pantalla no aparece en el PDF.

## Vía 3: typst.app (editor en línea, requiere cuenta)

1. Entra en <https://typst.app> y crea un proyecto vacío.
2. Borra el contenido de ejemplo y pega el código Typst.
3. Revisa la vista previa y usa la opción de exportar o descargar PDF del editor.

## Vía 4: terminal (compilador Typst)

1. Instala Typst desde la página oficial: <https://typst.app/download>
   (Windows: `winget install --id Typst.Typst`; macOS con Homebrew: `brew install typst`).
2. Guarda el código como `cv_es.typ`.
3. Ejecuta `typst compile cv_es.typ`. El archivo `cv_es.pdf` aparece en la misma carpeta.

## Entornos que ejecutan código

Si usas el asistente en un entorno con herramientas (por ejemplo, un agente con terminal), puede compilar y entregarte el PDF directamente. Los prompts solo lo permiten cuando la herramienta existe de verdad, y el asistente informa únicamente de lo que realmente se generó, como errores y número de páginas.

## Antes de enviarlo

- El número de páginas es el esperado (el asistente nunca afirma un recuento que no ha comprobado).
- El texto del PDF se puede seleccionar y copiar (Ctrl+A, Ctrl+C en un lector de PDF). Es buena señal para la extracción de texto.
- Nombre, contactos, fechas, puestos y referencia de la oferta son correctos.
- Nombre de archivo claro, por ejemplo `Nombre_Apellido_Puesto.pdf`.

## Problemas frecuentes

| Síntoma | Solución |
| --- | --- |
| El archivo quedó como `cv_es.html.txt` | Guarda con el tipo **Todos los archivos** o cambia la extensión a `.html`. |
| El PDF muestra fecha, título o dirección en los bordes | Desactiva **Encabezados y pies de página** al imprimir. |
| Márgenes distintos en HTML | Deja *Márgenes: Predeterminados* y *Escala: 100 %*; el propio archivo fija el tamaño A4. |
| Error con número de línea | Envía el mensaje al asistente en la misma conversación. |
| Aviso `unknown font family` | Los archivos usan Libertinus Serif, incluida en Typst, typst.app y la página de JobEval. En otra instalación, Typst usa una fuente sustituta. |
| Líneas ```` ``` ```` al principio y al final | Bórralas; la página de JobEval lo hace sola. |
