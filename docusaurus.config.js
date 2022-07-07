const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Metaplex Docs',
  tagline: 'Documentation for the Metaplex frontend and NFT standard.',
  url: 'https://docs.metaplex.com',
  baseUrl: '/',
  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'metaplex',
  projectName: 'docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/metaplex/docs/tree/main/',
          remarkPlugins: [require('mdx-mermaid')]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-213985918-1',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'ONUK0F738E',

        // Public API key: it is safe to commit it
        apiKey: '09fae30a579686b02e9effdcd429b2d1',

        indexName: 'metaplex',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
      navbar: {
        title: 'Metaplex Docs',
        logo: {
          alt: 'Metaplex logo',
          src: 'img/meta-white.svg',
          srcDark: 'img/meta-black.svg',
        },
        items: [
          {
            href: 'https://github.com/metaplex-foundation/metaplex/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/RfzFD9g9WE',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/metaplex',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/metaplex-foundation/metaplex',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Metaplex`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
});
