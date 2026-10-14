// Code-to-PDF page. Typst is compiled in the browser with typst.ts (WebAssembly);
// HTML is previewed in a sandboxed frame and printed by the browser.
// The pasted text is never sent anywhere: the only network requests are for
// the pinned compiler, the fonts and (on request) the example file.
(function () {
  'use strict';

  var CDN = 'https://cdn.jsdelivr.net';
  var BUNDLE_URL = CDN + '/npm/@myriaddreamin/typst.ts@0.7.0/dist/esm/contrib/all-in-one-lite.bundle.js';
  var BUNDLE_SRI = 'sha384-EJFFdZPsds9hPomUuylsX218dPBLIlif5DzJW4aFW5ofF0hjMPPlFljqBDthNql+';
  var WASM_URL = CDN + '/npm/@myriaddreamin/typst-ts-web-compiler@0.7.0/pkg/typst_ts_web_compiler_bg.wasm';
  var WASM_SRI = 'sha384-YB32Rpk4pOvEGytOZweRBgdbuwNueLVpzJUQojjit/A8AveMWxDW8eT9ROz98jDo';
  var FONT_BASE = CDN + '/gh/typst/typst-assets@v0.13.1/files/fonts/';
  var FONTS = [
    'LibertinusSerif-Regular.otf',
    'LibertinusSerif-Italic.otf',
    'LibertinusSerif-Bold.otf',
    'LibertinusSerif-BoldItalic.otf',
    'LibertinusSerif-Semibold.otf',
    'LibertinusSerif-SemiboldItalic.otf',
    'DejaVuSansMono.ttf'
  ];
  var EXAMPLE_BASE = 'https://raw.githubusercontent.com/MaloneFreak/JobEval/main/examples/';
  var PREVIEW_CSP = '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; style-src \'unsafe-inline\'; img-src data:">';

  var i18n = window.JobEvalI18n;
  var mode = 'typst';
  var pdfUrl = null;
  var lastDiagnostics = '';
  var filenameTouched = false;
  var compilerPromise = null;
  var el = {};

  function $(id) { return document.getElementById(id); }

  var lastStatus = { kind: '', key: null, vars: null };

  function setStatus(kind, key, vars) {
    lastStatus = { kind: kind, key: key, vars: vars };
    el.status.className = 'status' + (kind ? ' ' + kind : '');
    el.status.textContent = key ? i18n.t(key, vars) : '';
  }

  function show(node, visible) { node.classList.toggle('hidden', !visible); }

  function resetOutputs() {
    show(el.result, false);
    show(el.errorBox, false);
    if (pdfUrl) { URL.revokeObjectURL(pdfUrl); pdfUrl = null; }
  }

  function setMode(next) {
    mode = next;
    el.tabTypst.setAttribute('aria-selected', String(next === 'typst'));
    el.tabHtml.setAttribute('aria-selected', String(next === 'html'));
    el.source.setAttribute('data-i18n-placeholder', next === 'typst' ? 'pdf.placeholder.typst' : 'pdf.placeholder.html');
    el.source.setAttribute('placeholder', i18n.t(el.source.getAttribute('data-i18n-placeholder')));
    show(el.typstActions, next === 'typst');
    show(el.htmlActions, next === 'html');
    show(el.htmlPanel, false);
    resetOutputs();
  }

  function defaultFilename() {
    if (!filenameTouched) el.filename.value = i18n.t('pdf.filename.default');
  }

  function baseName() {
    var raw = (el.filename.value || '').trim().replace(/\.(pdf|html?|typ)$/i, '');
    var safe = raw.replace(/[\\/:*?"<>|\u0000-\u001f]+/g, '_').slice(0, 120);
    return safe || i18n.t('pdf.filename.default');
  }

  // Remove a Markdown code fence wrapped around the whole paste.
  function stripFences(text) {
    var trimmed = text.trim();
    var match = trimmed.match(/^```[^\n]*\n([\s\S]*?)\n?```$/);
    return match ? match[1] : null;
  }

  function looksHtml(text) { return /^\s*(<!doctype html|<html[\s>])/i.test(text); }
  function looksTypst(text) { return /^\s*(#let|#set|#import|\/\/|\/\*)/.test(text); }

  function normalizeSource() {
    var inner = stripFences(el.source.value);
    if (inner !== null) {
      el.source.value = inner;
      setStatus('info', 'pdf.fences');
    }
    var text = el.source.value;
    if (mode === 'typst' && looksHtml(text)) {
      setMode('html');
      setStatus('info', 'pdf.looksHtml');
    } else if (mode === 'html' && looksTypst(text) && !looksHtml(text)) {
      setMode('typst');
      setStatus('info', 'pdf.looksTypst');
    }
    return el.source.value;
  }

  // ---------- Typst ----------

  function loadBundle() {
    return new Promise(function (resolve, reject) {
      if (window.TypstSnippet) { resolve(window.TypstSnippet); return; }
      var script = document.createElement('script');
      script.type = 'module';
      script.src = BUNDLE_URL;
      script.integrity = BUNDLE_SRI;
      script.crossOrigin = 'anonymous';
      script.onload = function () {
        if (window.TypstSnippet) { resolve(window.TypstSnippet); } else { reject(new Error('typst.ts did not initialize')); }
      };
      script.onerror = function () { reject(new Error('typst.ts could not be loaded')); };
      document.head.appendChild(script);
    });
  }

  function fetchOk(url, options) {
    return fetch(url, options).then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status + ' for ' + url);
      return res;
    });
  }

  function fetchFonts() {
    return Promise.all(FONTS.map(function (name) {
      return fetchOk(FONT_BASE + name).then(function (res) { return res.arrayBuffer(); })
        .then(function (buffer) { return new Uint8Array(buffer); });
    }));
  }

  // A beforeBuild hook that registers already downloaded fonts and tells
  // typst.ts not to add its default font set.
  function fontLoader(fonts) {
    var loader = function (_, ctx) {
      return fonts.reduce(function (chain, bytes) {
        return chain.then(function () { return ctx.builder.add_raw_font(bytes); });
      }, Promise.resolve());
    };
    loader._kind = 'fontLoader';
    loader._preloadRemoteFontOptions = { assets: false };
    return loader;
  }

  function getCompiler() {
    if (!compilerPromise) {
      compilerPromise = Promise.all([
        loadBundle(),
        fetchOk(WASM_URL, { integrity: WASM_SRI }),
        fetchFonts()
      ]).then(function (parts) {
        setStatus('info', 'pdf.loadingFonts');
        var snippet = new parts[0]();
        var wasm = parts[1];
        snippet.setCompilerInitOptions({
          getModule: function () { return { module_or_path: wasm }; },
          beforeBuild: [fontLoader(parts[2])]
        });
        return snippet.getCompiler();
      });
      compilerPromise.catch(function () { compilerPromise = null; });
    }
    return compilerPromise;
  }

  function lineAt(source, line) {
    var lines = source.split('\n');
    return line >= 1 && line <= lines.length ? lines[line - 1] : '';
  }

  // typst.ts reports ranges as "line:col-line:col" (0-based); show 1-based.
  function formatDiagnostics(diags, source) {
    return diags.map(function (d) {
      if (typeof d === 'string') return d;
      var out = (d.severity || 'error') + ': ' + d.message;
      var m = /^(\d+):(\d+)/.exec(d.range || '');
      if (m) {
        var line = Number(m[1]) + 1;
        var col = Number(m[2]) + 1;
        out += '\n  line ' + line + ', column ' + col;
        var code = lineAt(source, line);
        if (code) out += '\n  ' + line + ' | ' + code.trim();
      } else if (d.range) {
        out += '\n  at ' + d.range;
      }
      if (d.hints && d.hints.length) out += '\n  hint: ' + d.hints.join('; ');
      return out;
    }).join('\n\n');
  }

  function countPages(bytes) {
    var text = '';
    var chunk = 0x8000;
    for (var i = 0; i < bytes.length; i += chunk) {
      text += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    var matches = text.match(/\/Type\s*\/Page(?![a-zA-Z])/g);
    return matches ? matches.length : 0;
  }

  function renderPages(n) {
    el.pages.setAttribute('data-n', n ? String(n) : '');
    el.pages.textContent = n ? '· ' + (n === 1 ? i18n.t('pdf.pages1') : i18n.t('pdf.pagesN', { n: n })) : '';
  }

  function showError(text) {
    lastDiagnostics = 'Typst (JobEval PDF page):\n' + text;
    if (/failed to load package|Registry/i.test(text)) {
      lastDiagnostics = i18n.t('pdf.hint.package') + '\n\n' + lastDiagnostics;
    }
    el.diag.textContent = lastDiagnostics;
    show(el.errorBox, true);
    setStatus('err', 'pdf.error.title');
  }

  function generate() {
    resetOutputs();
    var source = normalizeSource();
    if (mode !== 'typst') return;
    if (!source.trim()) { setStatus('err', 'pdf.empty'); return; }
    el.generate.disabled = true;
    setStatus('info', compilerPromise ? 'pdf.compiling' : 'pdf.loadingCompiler');

    getCompiler().then(function (compiler) {
      setStatus('info', 'pdf.compiling');
      return compiler.reset().then(function () {
        compiler.addSource('/main.typ', source);
        return compiler.compile({ mainFilePath: '/main.typ', format: 1, diagnostics: 'full' });
      });
    }, function (err) {
      console.error('JobEval: compiler load failed', err);
      setStatus('err', 'pdf.error.load');
      throw Object.assign(err || new Error('load'), { handled: true });
    }).then(function (out) {
      var diags = (out && out.diagnostics) || [];
      var errors = diags.filter(function (d) { return typeof d === 'string' || d.severity !== 'warning'; });
      if (!out || !out.result || errors.length) {
        showError(errors.length ? formatDiagnostics(errors, source) : 'unknown error');
        return;
      }
      var blob = new Blob([out.result], { type: 'application/pdf' });
      pdfUrl = URL.createObjectURL(blob);
      el.pdfDownload.href = pdfUrl;
      el.pdfDownload.setAttribute('download', baseName() + '.pdf');
      el.pdfOpen.href = pdfUrl;
      renderPages(countPages(out.result));
      show(el.result, true);
      setStatus('ok', 'pdf.done');
    }).catch(function (err) {
      if (err && err.handled) return;
      showError(String((err && err.message) || err));
    }).then(function () {
      el.generate.disabled = false;
    });
  }

  // ---------- HTML ----------

  function withPreviewCsp(html) {
    if (/<head[^>]*>/i.test(html)) return html.replace(/<head[^>]*>/i, function (tag) { return tag + PREVIEW_CSP; });
    return PREVIEW_CSP + html;
  }

  function renderPreview() {
    var source = normalizeSource();
    if (mode !== 'html') return false;
    if (!source.trim()) { setStatus('err', 'pdf.empty'); return false; }
    el.frame.srcdoc = withPreviewCsp(source);
    show(el.htmlPanel, true);
    setStatus('ok', 'html.ready');
    return true;
  }

  function printPreview() {
    var printNow = function () {
      try {
        el.frame.contentWindow.focus();
        el.frame.contentWindow.print();
      } catch (e) {
        setStatus('err', 'html.printHint');
      }
    };
    if (el.frame.getAttribute('data-rendered') === el.source.value && el.frame.contentDocument) {
      printNow();
      return;
    }
    if (!renderPreview()) return;
    el.frame.setAttribute('data-rendered', el.source.value);
    el.frame.addEventListener('load', function onLoad() {
      el.frame.removeEventListener('load', onLoad);
      printNow();
    });
  }

  function downloadHtml() {
    var source = normalizeSource();
    if (!source.trim()) { setStatus('err', 'pdf.empty'); return; }
    var url = URL.createObjectURL(new Blob([source], { type: 'text/html;charset=utf-8' }));
    var link = document.createElement('a');
    link.href = url;
    link.download = baseName() + '.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
  }

  // ---------- Shared ----------

  function loadExample() {
    var file = mode === 'typst' ? 'curriculo-exemplo.typ' : 'curriculo-exemplo.html';
    fetchOk(EXAMPLE_BASE + file, { cache: 'no-cache' })
      .then(function (res) { return res.text(); })
      .then(function (text) {
        el.source.value = text;
        resetOutputs();
        setStatus('', null);
      })
      .catch(function () { setStatus('err', 'pdf.error.exampleLoad'); });
  }

  function copyError() {
    if (!lastDiagnostics) return;
    var done = function () { setStatus('info', 'pdf.error.copied'); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(lastDiagnostics).then(done, function () {});
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    ['status', 'source', 'filename', 'result', 'pages', 'diag', 'generate', 'example', 'clear']
      .forEach(function (id) { el[id] = $(id); });
    el.tabTypst = $('tab-typst');
    el.tabHtml = $('tab-html');
    el.typstActions = $('typst-actions');
    el.htmlActions = $('html-actions');
    el.errorBox = $('error-box');
    el.htmlPanel = $('html-panel');
    el.frame = $('html-frame');
    el.pdfDownload = $('pdf-download');
    el.pdfOpen = $('pdf-open');

    defaultFilename();
    i18n.onChange(function () {
      defaultFilename();
      setStatus(lastStatus.kind, lastStatus.key, lastStatus.vars);
      if (el.pages.getAttribute('data-n')) renderPages(Number(el.pages.getAttribute('data-n')));
      el.source.setAttribute('placeholder', i18n.t(el.source.getAttribute('data-i18n-placeholder')));
    });

    el.filename.addEventListener('input', function () { filenameTouched = true; });
    el.tabTypst.addEventListener('click', function () { setMode('typst'); setStatus('', null); });
    el.tabHtml.addEventListener('click', function () { setMode('html'); setStatus('', null); });
    el.source.addEventListener('paste', function () { setTimeout(normalizeSource, 0); });
    el.source.addEventListener('input', resetOutputs);
    el.generate.addEventListener('click', generate);
    el.example.addEventListener('click', loadExample);
    el.clear.addEventListener('click', function () {
      el.source.value = '';
      resetOutputs();
      show(el.htmlPanel, false);
      setStatus('', null);
      el.source.focus();
    });
    $('html-preview').addEventListener('click', function () {
      if (renderPreview()) el.frame.setAttribute('data-rendered', el.source.value);
    });
    $('html-print').addEventListener('click', printPreview);
    $('html-download').addEventListener('click', downloadHtml);
    $('copy-error').addEventListener('click', copyError);
  });
})();
