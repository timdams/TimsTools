# TimsTools

Een overzicht van mijn projecten en tools, gebouwd met [Docusaurus](https://docusaurus.io/).

🔗 Live: [timdams.github.io/TimsTools/](https://timdams.github.io/TimsTools/)

## Lokaal draaien

```bash
npm install
npm start
```

De dev-server draait op <http://localhost:3000/TimsTools/> en herlaadt automatisch
bij wijzigingen.

## Bouwen

```bash
npm run build      # genereert de statische site in build/
npm run serve      # serveert de gebouwde site lokaal
```

## Een tool toevoegen

Maak een nieuw markdown-bestand aan in de juiste map onder `docs/`:

- `docs/tools/` — afgewerkte applicaties, extensies en webapps
- `docs/snippets/` — HTML/JS-snippets voor toetsvragen
- `docs/in-ontwikkeling/` — alfa/beta tools

Geef het frontmatter mee (`title`, `description`, `tags`, `sidebar_position`) en
plaats eventuele afbeeldingen in dezelfde map; verwijs ernaar met een relatief
pad (bv. `![Demo](./demo.png)`). De sidebar en tag-pagina's worden automatisch
gegenereerd.

## Deploy

Elke push naar `master` bouwt en publiceert de site automatisch naar GitHub Pages
via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
