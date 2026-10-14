// Assistant cards: fetch each prompt once, then copy or download it locally.
(function () {
  'use strict';

  var RAW_BASE = 'https://raw.githubusercontent.com/MaloneFreak/JobEval/main/prompts/';
  var VIEW_BASE = 'https://github.com/MaloneFreak/JobEval/blob/main/prompts/';

  var PERSONAS = [
    { id: 'br', badge: 'BR', name: 'Helena Duarte', file: 'Helena-Duarte-Brasil.txt' },
    { id: 'us', badge: 'US', name: 'Jordan Morgan', file: 'Jordan-Morgan-US.txt' },
    { id: 'de', badge: 'DE', name: 'Frau Schmidt', file: 'Frau-Schmidt-Germany.txt' },
    { id: 'es', badge: 'ES', name: 'Elena Martínez', file: 'Elena-Martinez-Spain.txt' }
  ];

  var i18n = window.JobEvalI18n;
  var texts = {};
  var cards = {};

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(area);
      if (ok) { resolve(); } else { reject(new Error('copy failed')); }
    });
  }

  function renderVersion(persona) {
    var el = cards[persona.id].querySelector('.version');
    var text = texts[persona.id];
    if (!text) {
      el.textContent = i18n.t('card.loading');
      return;
    }
    var match = text.match(/^Version:\s*(\S+)/m);
    el.textContent = match ? i18n.t('card.version') + ' ' + match[1] : '';
  }

  function renderCard(persona) {
    var card = cards[persona.id];
    card.querySelector('.market-name').textContent = i18n.t('persona.' + persona.id + '.market');
    card.querySelector('.desc').textContent = i18n.t('persona.' + persona.id + '.desc');
    card.querySelector('.copy').textContent = i18n.t('card.copy');
    card.querySelector('.download').textContent = i18n.t('card.download');
    card.querySelector('.view').textContent = i18n.t('card.view');
    renderVersion(persona);
  }

  function build() {
    var container = document.getElementById('cards');
    var template = document.getElementById('card-template');
    PERSONAS.forEach(function (persona) {
      var node = template.content.firstElementChild.cloneNode(true);
      node.querySelector('.badge').textContent = persona.badge;
      node.querySelector('.persona-name').textContent = persona.name;
      var download = node.querySelector('.download');
      download.href = RAW_BASE + persona.file;
      download.setAttribute('download', persona.file);
      node.querySelector('.view').href = VIEW_BASE + persona.file;
      var feedback = node.querySelector('.feedback');

      node.querySelector('.copy').addEventListener('click', function () {
        var text = texts[persona.id];
        if (!text) {
          feedback.textContent = i18n.t('card.copyFail');
          return;
        }
        copyText(text).then(function () {
          feedback.textContent = i18n.t('card.copied');
        }, function () {
          feedback.textContent = i18n.t('card.copyFail');
        });
      });

      cards[persona.id] = node;
      container.appendChild(node);
      renderCard(persona);
    });
  }

  function load(persona) {
    fetch(RAW_BASE + persona.file, { cache: 'no-cache' })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(function (text) {
        texts[persona.id] = text;
        var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        cards[persona.id].querySelector('.download').href = URL.createObjectURL(blob);
        renderVersion(persona);
      })
      .catch(function () {
        // Copy falls back to the download link, which still points at the raw file.
        cards[persona.id].querySelector('.version').textContent = '';
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    build();
    PERSONAS.forEach(load);
    i18n.onChange(function () {
      PERSONAS.forEach(function (persona) {
        renderCard(persona);
        cards[persona.id].querySelector('.feedback').textContent = '';
      });
    });
  });
})();
