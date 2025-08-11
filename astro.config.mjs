// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';
import tailwindcss from '@tailwindcss/vite';
import starlightDocSearch from '@astrojs/starlight-docsearch';
import sitemap from '@astrojs/sitemap'; // 1. 导入 Sitemap 插件

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.zyhgov.cn', // 2. 确保 site 配置正确且没有多余空格
  integrations: [
    starlight({
      title: '联合库UNHub Docs',
      description: '默沙东诊疗手册大众版与专业版已上线联合库UNHub Docs！欢迎使用 UNHub Docs，获取权威医学信息。',
      logo: {
        src: './src/assets/unhub.svg',
      },
      customCss: [
        // 确保路径指向包含 @import 或直接包含 @font-face 规则的 CSS 文件
        './src/fonts/font-face.css', // 或 './src/styles/custom.css' 等
      ],
      plugins: [
        starlightDocSearch({
          clientOptionsModule: './src/config/docsearch.ts',
        }),
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/zyhgov' }, // 去掉空格
        { icon: 'gitlab', label: 'gitlab', href: 'https://gitlab.com/zyhgov' }, // 去掉空格
      ],
      sidebar: [
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: '默沙东诊疗手册 - 大众版',
          autogenerate: { directory: '默沙东诊疗手册 - 大众版' },
        },
        {
          label: '默沙东诊疗手册 - 专业版',
          autogenerate: { directory: '默沙东诊疗手册 - 专业版' },
        },
      ],
    }),
    markdoc(),
    sitemap(), // 3. 添加 Sitemap 插件到 integrations 数组
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});