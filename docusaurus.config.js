module.exports = {
  title: 'PPSR Data Standard',
  tagline: 'A Data Standard for Public Participation in Scientific Research',
  url: 'https://bbudnicki.github.io',
  baseUrl: '/docusaurus/',
  onBrokenLinks: 'throw',
  favicon: 'img/csafavicon.png',
  organizationName: 'BBudnicki', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    navbar: {
      title: 'PPSR Core',
      logo: {
        alt: 'CSA Logo',
        src: 'img/csalogo192.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Core',
          position: 'left',
        },
        {
          to: 'docs/about',
          activeBasePath: 'docs/about',
          label: 'About',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'schema',
          activeBasePath: 'schema',
          label: 'Schema',
          position: 'left'
        },
        {
          href: 'https://github.com/BBudnicki/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Citizen Science Assocaition`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/BBudnicki/docusaurus/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/BBudnicki/docusaurus/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  
};