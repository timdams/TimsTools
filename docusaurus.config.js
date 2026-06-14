// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TimsTools',
  tagline: 'Een overzicht van mijn projecten en tools',
  favicon: 'img/favicon.ico',

  // Production url of the site
  url: 'https://timdams.github.io',
  // The /<baseUrl>/ pathname under which the site is served.
  // For GitHub Pages deployment this is '/<projectName>/'.
  baseUrl: '/TimsTools/',

  // GitHub pages deployment config.
  organizationName: 'timdams', // GitHub org/user name.
  projectName: 'TimsTools', // Repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Sets the html lang attribute and other locale metadata.
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/timdams/TimsTools/tree/master/',
        },
        // No blog on this site (the blog lives on timdams.com).
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['nl', 'en'],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TimsTools',
        logo: {
          alt: 'TimsTools logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'toolsSidebar',
            position: 'left',
            label: 'Tools',
          },
          {
            label: 'Blog & Cursussen',
            position: 'left',
            items: [
              {label: '📝 Blog (timdams.com)', href: 'https://timdams.com'},
              {
                label: '🛡️ Cyberboswachters',
                href: 'https://timdams.github.io/cyberboswachters_boek/',
              },
              {
                label: '🎓 Zie Scherp Scherper (C#)',
                href: 'https://apwt.gitbook.io/zie-scherp-scherper',
              },
            ],
          },
          {
            href: 'https://github.com/timdams/TimsTools',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tools',
            items: [
              {label: 'Overzicht', to: '/docs/intro'},
              {label: 'Tools', to: '/docs/category/tools'},
              {
                label: 'Snippets voor toetsen',
                to: '/docs/category/snippets-voor-toetsen',
              },
              {label: 'In ontwikkeling', to: '/docs/category/in-ontwikkeling'},
              {label: 'Andere', to: '/docs/category/andere'},
            ],
          },
          {
            title: 'Blog & Cursussen',
            items: [
              {label: 'Blog', href: 'https://timdams.com'},
              {
                label: 'Cyberboswachters',
                href: 'https://timdams.github.io/cyberboswachters_boek/',
              },
              {
                label: 'Zie Scherp Scherper',
                href: 'https://apwt.gitbook.io/zie-scherp-scherper',
              },
            ],
          },
          {
            title: 'Meer',
            items: [
              {label: 'GitHub', href: 'https://github.com/timdams/TimsTools'},
            ],
          },
        ],
        copyright: `Veel van deze tools werden ontwikkeld m.b.v. GenAI door mij persoonlijk. Ik maak ze voor eigen gebruik en ze blijken ook nuttig voor mijn werk bij de AP Hogeschool, maar ze werden niet door AP ontwikkeld.<br/><br/>Copyright © ${new Date().getFullYear()} Tim Dams. All rights reserved. Gebouwd met Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
