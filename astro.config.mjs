// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://projects.avetavos.com',
  base: '/clouddeploy',
  output: 'static',
  integrations: [starlight({
    title: 'CloudDeploy — Real-World Project',
    head: [
      { tag: 'script', attrs: { type: 'module', src: '/clouddeploy/mermaid-init.js' } },
      { tag: 'link', attrs: { rel: 'manifest', href: '/clouddeploy/manifest.webmanifest' } },
      { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/clouddeploy/apple-touch-icon.png' } },
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/clouddeploy/icon-192.png' } },
      { tag: 'meta', attrs: { name: 'theme-color', content: '#EA580C' } },
    ],
    defaultLocale: 'en',
    locales: {
      en: { label: 'English', lang: 'en' },
      th: { label: 'ไทย', lang: 'th' },
    },
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/realworld-clouddeploy' }],
    sidebar: [
      { label: 'Introduction', items: [{ autogenerate: { directory: 'introduction' } }] },
      { label: '1 · Setup & Tooling', items: [{ autogenerate: { directory: 'setup' } }] },
      { label: '2 · Terraform Foundations', items: [{ autogenerate: { directory: 'terraform' } }] },
      { label: '3 · Terragrunt & Remote State', items: [{ autogenerate: { directory: 'terragrunt' } }] },
      { label: '4 · Networking', items: [{ autogenerate: { directory: 'networking' } }] },
      { label: '5 · Managed Kubernetes', items: [{ autogenerate: { directory: 'kubernetes' } }] },
      { label: '6 · Identity & IAM', items: [{ autogenerate: { directory: 'iam' } }] },
      { label: '7 · Managed Data', items: [{ autogenerate: { directory: 'data' } }] },
      { label: '8 · Deploying ShopMicro', items: [{ autogenerate: { directory: 'deploy-shopmicro' } }] },
      { label: '9 · Observability (Datadog)', items: [{ autogenerate: { directory: 'datadog' } }] },
      { label: '10 · Identity (Keycloak)', items: [{ autogenerate: { directory: 'keycloak' } }] },
      { label: '11 · Feature Flags (GrowthBook)', items: [{ autogenerate: { directory: 'growthbook' } }] },
      { label: '12 · CI/CD', items: [{ autogenerate: { directory: 'cicd' } }] },
      { label: '13 · Multi-cloud in Practice', items: [{ autogenerate: { directory: 'multi-cloud' } }] },
      { label: '14 · Wrap-up', items: [{ autogenerate: { directory: 'wrap-up' } }] },
    ],
  }), preact()],
});
