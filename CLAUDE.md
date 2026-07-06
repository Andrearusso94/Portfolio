# Portfolio — Frontend Developer

Portfolio personale single-page, estetica gotham/noir blu su fondo scuro.
Nato da una bozza Claude Design e tradotto in un progetto React reale.
Lo sviluppo procede per **issue GitHub**, una alla volta, tramite un
orchestratore autonomo (Jimmy). Ogni modifica arriva come PR e passa
**sempre** da review umana.

## Stack

- React 19 + TypeScript (strict)
- Vite 6 (build e dev server)
- Vitest 3 + Testing Library (jsdom)
- CSS Modules + design tokens (CSS custom properties)
- CI: GitHub Actions (`.github/workflows/ci.yml`) — install, typecheck, test, build

## Comandi

```bash
npm ci             # install (usa il lockfile, come in CI)
npm run dev        # dev server Vite
npm run typecheck  # tsc --noEmit
npm test           # vitest run (test di fumo baseline)
npm run build      # typecheck + vite build
```

## Architettura

```
src/
  styles/tokens.css     # UNICA fonte di verità per palette, font, motion
  styles/global.css     # reset, keyframes condivisi, classi .reveal
  hooks/useReveal.ts    # scroll-reveal via IntersectionObserver (one-shot)
  data/projects.ts      # dati progetti e skill (SEGNAPOSTO — vedi sotto)
  features/<sezione>/   # un componente + CSS module per sezione
    nav/  hero/  nycBreak/  projects/  about/  contact/
  App.tsx               # composizione delle sezioni, nell'ordine della pagina
  App.test.tsx          # test di fumo baseline
```

Convenzioni:

- **Colori e font SOLO da `tokens.css`** (`var(--*)`). Nessun hex hardcoded
  nei componenti. Se serve un valore nuovo, si aggiunge un token.
- Una sezione = una cartella in `src/features/`. Niente file monolitici.
- Le animazioni di ingresso usano l'hook `useReveal` + classi `.reveal` /
  `.is-visible` (o pattern equivalente locale al modulo, come nelle card).
- `prefers-reduced-motion` va sempre rispettato per nuove animazioni.
- I dati in `src/data/projects.ts` (nomi, tag, descrizioni, email in
  `Contact.tsx`) sono **segnaposto voluti**: non "migliorarli" d'iniziativa,
  verranno aggiornati con issue dedicate.

## Test baseline

`src/App.test.tsx` contiene i test di fumo: l'app monta, le sezioni
`#hero`, `#progetti`, `#about`, `#contatti` esistono, le card progetto
sono renderizzate, la skyline è presente. **Se questi test falliscono su
`main`, l'agente deve fermarsi e segnalarlo, non lavorare alla issue.**
Non vanno indeboliti, skippati o modificati per far passare una PR.

## Regole non negoziabili per l'agente (Jimmy)

1. **Fai SOLO ciò che chiede la issue.** Modifiche minime e mirate:
   niente refactoring opportunistici, rinomini, riformattazioni di massa
   o "già che ci sono".
2. **Non toccare file fuori scope.** Se la issue riguarda la Hero, non
   modificare About, config o tooling. Se pensi che serva toccare altro,
   scrivilo nella PR e fermati: sarà una issue separata.
3. **Ogni cambiamento deve passare i test esistenti.** Esegui
   `npm run typecheck && npm test && npm run build` prima di aprire la PR.
4. **Se aggiungi logica, aggiungi un test che la copre.** Nuovi hook,
   funzioni, branch condizionali o comportamenti visibili richiedono
   almeno un test dedicato nella stessa PR.
5. **Non modificare config di deploy, segreti o variabili d'ambiente.**
   Vietato toccare `.github/workflows/`, file `.env*`, chiavi, token o
   impostazioni di hosting, a meno che la issue non lo chieda
   esplicitamente e in modo inequivocabile.
6. **Non fare merge.** Solo PR verso `main`, con descrizione di cosa è
   cambiato e perché. La review umana è obbligatoria: nessun auto-merge,
   nessun push diretto su `main`.

In caso di dubbio o ambiguità nella issue: fermarsi e chiedere nella PR
o nella issue stessa, non improvvisare.
