document.addEventListener('DOMContentLoaded', function () {

    // Startseite: Formular absenden
    var form = document.getElementById('promptForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var digi = document.getElementById('digitalisierung').value.trim();
            var nach = document.getElementById('nachhaltigkeit').value.trim();
            if (digi && nach) {
                var params = new URLSearchParams({ d: digi, n: nach });
                window.location.href = 'ergebnis.html?' + params.toString();
            }
        });
    }

    // Ergebnisseite: Prompt anzeigen
    var promptText = document.getElementById('promptText');
    if (promptText) {
        var params = new URLSearchParams(window.location.search);
        var digi = params.get('d') || '';
        var nach = params.get('n') || '';

        if (!digi || !nach) {
            window.location.href = 'index.html';
            return;
        }

        var prompt = 'Wir sind eine Gruppe in einem Workshop zur beruflichen Bildung und entwickeln Ideen für Twin Transition Projekte – also Projekte, die Digitalisierung und Nachhaltigkeit miteinander verbinden.\n\n' +
            'Unsere beiden erwürfelten Begriffe sind:\n' +
            '- Digitalisierung: ' + digi + '\n' +
            '- Nachhaltigkeit: ' + nach + '\n\n' +
            'Bitte skizziere uns kurz und prägnant eine konkrete Projektidee für die berufliche Bildung, die beide Begriffe aufgreift und als Twin Transition Projekt funktioniert. Beschreibe in 3–5 Sätzen, worum es geht, wer die Zielgruppe ist und was das Projektergebnis wäre.\n\n' +
            'Sprich uns dabei direkt als Gruppe an.\n\n' +
            'Am Ende: Schreibe uns die Aufforderung, in unserer Gruppe zu diskutieren, ob diese Idee für uns stimmig erscheint. Falls nicht, sollen wir gerne eine andere Idee generieren – auch mit zwei neuen Begriffen, die wir erwürfeln.';

        promptText.textContent = prompt;
    }

    // Ergebnisseite: Prompt kopieren
    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function () {
            var text = document.getElementById('promptText').textContent;
            navigator.clipboard.writeText(text).then(function () {
                var feedback = document.getElementById('copyFeedback');
                feedback.style.display = 'inline';
                setTimeout(function () {
                    feedback.style.display = 'none';
                }, 2000);
            });
        });
    }
});
