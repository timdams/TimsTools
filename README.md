# TimsTools

Een overzicht van mijn projecten en tools, gebouwd met [Docusaurus](https://docusaurus.io/).

🔗 Live: [timdams.github.io/TimsTools/](https://timdams.github.io/TimsTools/)

> Dit `README.md` is enkel voor GitHub/ontwikkelaars en wordt **niet** mee in de
> website gebouwd. Docusaurus bouwt enkel `docs/`, `src/pages/` en `static/`.

## Lokaal draaien

```bash
npm install
npm start
```

De dev-server draait op <http://localhost:3000/TimsTools/> en herlaadt automatisch
bij wijzigingen.

> ⚠️ De **zoekfunctie** werkt enkel in de gebouwde site (`npm run build` +
> `npm run serve`) en live — niet in `npm start` (dev-mode).

## Bouwen

```bash
npm run build      # genereert de statische site in build/
npm run serve      # serveert de gebouwde site lokaal
```

## Een tool toevoegen

**1.** Maak een nieuw markdown-bestand aan in de juiste categorie-map onder `docs/`:

| Map | Bedoeld voor |
| --- | --- |
| `docs/tools/` | afgewerkte applicaties, browserextensies en webapps |
| `docs/snippets/` | HTML/JS-snippets voor toetsvragen |
| `docs/in-ontwikkeling/` | alfa/beta tools |
| `docs/andere/` | overige tools en projecten |

**2.** Geef het deze frontmatter mee (kopieer-sjabloon):

```markdown
---
title: "🔧 Mijn nieuwe tool"
sidebar_label: "🔧 Mijn nieuwe tool"
sidebar_position: 11
description: Korte omschrijving (wordt ook de meta-description).
tags: [AP, Untis, Webapp]
---

<a className="button button--primary button--lg" href="https://github.com/timdams/..." target="_blank" rel="noopener noreferrer">✅ Open project</a>

Uitleg over de tool.

![Voorbeeld](./mijn-screenshot.png)
```

**3.** Afbeeldingen: zet ze in **dezelfde map** als het `.md`-bestand en verwijs
ernaar met een relatief pad (`./bestandsnaam.png`). De sidebar, tag-pagina's en
zoek-index worden automatisch bijgewerkt.

**4.** Bekijk lokaal met `npm start`, en commit + push naar `master` om te
publiceren (zie [Deploy](#deploy)).

### Handige weetjes

- **Nieuwe categorie?** Maak een nieuwe map onder `docs/` met een `_category_.json`
  (kijk naar een bestaande als voorbeeld voor `label`, `position` en de
  `generated-index`-landingspagina).
- **Status / badges** (zoals het vroegere "In ontwikkeling") doe je met
  admonities, bv.:
  ```markdown
  :::caution In ontwikkeling
  Deze tool zit nog in alfa. Werk in uitvoering — feedback is welkom!
  :::
  ```
- **Volgorde** binnen een categorie bepaal je met `sidebar_position` (lager = hoger
  in de lijst).
- **Tags** vervangen de oude filterknoppen: elke tag krijgt automatisch een
  overzichtspagina onder `/docs/tags/`.

## Deploy

Elke push naar `master` bouwt en publiceert de site automatisch naar GitHub Pages
via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). GitHub Pages
staat ingesteld op bron **"GitHub Actions"** (niet "Deploy from a branch").
