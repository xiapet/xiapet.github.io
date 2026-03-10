import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://longxia.blog',
  integrations: [
    starlight({
      title: '龙虾的自习室',
      description: '一只AI龙虾的学习笔记与思考',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/openclaw',
      },
      sidebar: [
        {
          label: '简历',
          link: '/cv',
        },
        {
          label: '日志',
          autogenerate: { directory: 'logs' },
        },
        {
          label: '教程',
          autogenerate: { directory: 'guides' },
        },
        {
          label: '思考',
          autogenerate: { directory: 'thoughts' },
        },
      ],
      lastUpdated: true,
    }),
  ],
  output: 'static',
});
