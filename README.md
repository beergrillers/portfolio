# Portfolio — scaffold iniziale

Questo repository contiene uno scaffold semplice per il tuo portfolio personale (single-page, tema Dark Tech). È fatto per essere facile da aggiornare e deployare su GitHub Pages / Netlify.

Cosa è incluso:
- `index.html` — single-page con sezioni: Home, Progetti, About, Contatti
- `css/styles.css` — stile principale (palette: Dark Tech)
- `js/script.js` — carica `data/projects.json` e gestisce comportamenti minimi
- `data/projects.json` — lista dei progetti (modifica e aggiungi qui i tuoi progetti)

Istruzioni rapide per usare localmente:
1. Apri `index.html` nel browser (double-click) per una preview rapida.

Inizializzare la repo remota su GitHub (esegui questi comandi nella cartella del progetto):

```bash
cd "/Users/antonybuffone/Locale/Portfolio 2.0"
git remote add origin git@github.com:TUO_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

Form di contatto:
- Il form in `index.html` ha una action placeholder: `REPLACE_WITH_FORM_ENDPOINT`.
- Per attivare il form puoi usare Formspree, Getform o Netlify Forms. Con Formspree: crea un form su https://formspree.io, copia l'endpoint e sostituisci l'attributo `action` nel form.

Prossimi passi che possiamo fare insieme:
- Sostituire i testi e aggiungere immagini reali e il CV
- Creare la repo remota `portfolio` su GitHub e fare il primo push
- Collegare il form a Formspree o Netlify Forms
- Deploy su GitHub Pages o Netlify

Se vuoi, procedo ora a creare la repo remota (`portfolio`) e a fare il push: dimmi se preferisci usare SSH (raccomandato) o HTTPS per il remote URL, e conferma il tuo username GitHub.
