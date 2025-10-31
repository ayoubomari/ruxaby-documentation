// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.ruxaby.com',
  server: {
    port: 3006,
    allowedHosts: ["docs.ruxaby.com"],
  },
  integrations: [
    starlight({
      title: 'Docs',
      description: 'Docs for the Ruxaby decentralized marketplace on Algorand.',
      lastUpdated: true,
      // Optional: add your logo
      logo: { src: './src/assets/ruxaby-logo.png', alt: 'Ruxaby' },

      // Keep or update this social link as you prefer
      social: [
        { icon: 'twitter', label: 'Twitter', href: 'https://x.com/ruxaby' },
      ],

      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
        './src/styles/starlight.css',
      ],

      // Optional: enable “Edit this page” links by setting your repo URL
      // editLink: { baseUrl: 'https://github.com/ayoubomari/algorand-marketplace-documentation/edit/main/' },

      sidebar: [
        {
          label: 'Welcome',
          items: [
            'welcome/introduction',
            'welcome/quick-start-buyers',
            'welcome/quick-start-sellers',
            'welcome/glossary',
          ],
        },

        // {
        //   label: 'Core Concepts',
        //   items: [
        //     'concepts/why-ruxaby',
        //     'concepts/why-algorand',
        //     'concepts/trust-models',
        //     'concepts/mutual-collateral',
        //     'concepts/reviews-onchain',
        //     'concepts/fees-and-finality',
        //   ],
        // },

        {
          label: 'How Ruxaby Works',
          items: [
            'how-it-works/listings',
            {
              label: 'Escrow Models',
              items: [
                'how-it-works/trustful-model',
                'how-it-works/p2p-model',
              ],
            },
            {
              label: 'Disputes',
              items: [
                'how-it-works/dispute-resolution-trustful',
                'how-it-works/dispute-resolution-p2p',
              ],
            },
            'how-it-works/shipping-and-tracking',
            'how-it-works/settlements-and-payouts',
          ],
        },

        // {
        //   label: 'Security & Privacy',
        //   collapsed: true,
        //   items: [
        //     'security/auth-and-sign-in',
        //     'security/privacy-and-identity',
        //     'security/wallet-safety',
        //     'security/threat-model',
        //   ],
        // },

        {
          label: 'User Guides',
          collapsed: true,
          items: [
            'guides/account-and-wallets',
            'guides/create-a-listing',
            'guides/buy-a-product',
            // 'guides/manage-orders',
            // 'guides/reviews-and-reputation',
            // 'guides/notifications',
          ],
        },

        // {
        //   label: 'Technical Reference',
        //   collapsed: true,
        //   items: [
        //     'technical/smart-contracts-overview',
        //     'technical/contract-state-and-methods',
        //     'technical/contract-addresses',
        //     'technical/networks-and-environments',
        //     'technical/events-and-ui',
        //     'technical/algorand-fees',
        //   ],
        // },

        {
          label: 'Policies',
          collapsed: true,
          items: [
            'policies/terms-of-use',
            'policies/privacy-policy',
            // 'policies/prohibited-items',
            // 'policies/dispute-policy',
          ],
        },

        {
          label: 'Roadmap',
          items: [
            'roadmap/vision',
            // {
            //   slug: 'roadmap/auctions',
            //   badge: { text: 'Coming soon', variant: 'note' },
            // },
            // 'roadmap/changelog',
          ],
        },

        {
          label: 'Support',
          items: [
            'support/faq',
            // 'support/troubleshooting',
            'support/community',
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});