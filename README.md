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

Creare la repository in modo sicuro (consigliato)
-----------------------------------------------
Posso preparare tutti i comandi e i file necessari, ma per creare effettivamente la repository remota ti suggerisco di usare il GitHub CLI (`gh`) o eseguire i comandi git localmente — in questo modo non è necessario condividere token o credenziali.

1) Metodo raccomandato: usare `gh` (GitHub CLI)

Se hai `gh` installato e sei autenticato (esegui `gh auth login` se non lo sei), esegui questi comandi nella cartella del progetto:

```bash
cd "/Users/antonybuffone/Locale/Portfolio 2.0"
# Crea la repo remota pubblica chiamata 'portfolio' e imposta origin
gh repo create portfolio --public --source=. --remote=origin --push
```

Questo comando crea la repository sotto il tuo account GitHub, collega il remote `origin` e fa il primo push (richiede che tu sia autenticato con `gh`).

2) Metodo alternativo: creare la repo via sito e collegare remote

Se preferisci, puoi creare manualmente la repository su https://github.com/new (nome: `portfolio`) e poi eseguire:

```bash
cd "/Users/antonybuffone/Locale/Portfolio 2.0"
git branch -M main
git remote add origin git@github.com:TUO_USERNAME/portfolio.git  # oppure HTTPS URL
git push -u origin main
```

Form e sicurezza
-----------------
Non condividere token o password qui. Se vuoi che io esegua chiamate API per creare la repo, dovresti creare un Personal Access Token (PAT) e inserirlo in un ambiente sicuro; tuttavia è più semplice e sicuro usare `gh` o creare la repo via interfaccia web.

Se vuoi, posso generare uno script opzionale che automatizza la creazione remota via `curl` e la API di GitHub, ma richiederebbe comunque un PAT (non consigliato condividere qui). Preferisco guidarti passo-passo con `gh`.

Mockup
------
Ho aggiunto anche un mockup SVG (wireframe) al progetto (`assets/mockup.svg`) che mostra la struttura proposta: header, hero, griglia progetti, about e form di contatto. Aprilo per valutare layout e proporre modifiche grafiche.

Dimmi quale passo vuoi che esegua ora:
- Ti preparo i comandi `gh` e li esegui (se hai `gh` installato e sei autenticato)?
- Vuoi che aggiorni subito i testi (incolla qui bio e i 3 progetti)?
- Vuoi che colleghi il form a Formspree ora (ti spiego come creare l'endpoint)?
