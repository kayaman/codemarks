import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Codemarks',
      editLink: {
        baseUrl: 'https://github.com/kayaman/codemarks/edit/main/',
      },
      components: {
        Sidebar: './src/components/CustomSidebar.astro',
      },
      plugins: [],
    }),
  ],
});
