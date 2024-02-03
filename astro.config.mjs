import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import deno from '@astrojs/deno'


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind()]
});