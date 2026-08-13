<script lang="ts" setup>
import Section from './CvSection.vue'

const skills = [
  {
    title: 'Languages',
    list: [
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3'
    ]
  },
  {
    title: 'Frontend',
    list: [
      'React',
      'Next.js',
      'Vue',
      'Nuxt',
      'Angular',
      'React Native',
      'Tailwind CSS',
      'SCSS'
    ]
  },
  {
    title: 'Architecture & State',
    list: [
      'Frontend Architecture',
      'Scalable UI Systems',
      'Design Systems',
      'Component Libraries',
      'Microfrontends',
      'Redux',
      'MobX',
      'Zustand',
      'Pinia',
      'TanStack Query'
    ]
  },
  {
    title: 'APIs & Real-Time',
    list: [
      'REST APIs',
      'GraphQL',
      'WebSockets',
      'Real-Time Interfaces',
      'OAuth 2.0',
      'Third-Party Integrations'
    ]
  },
  {
    title: 'Testing & Quality',
    list: [
      'Jest',
      'Vitest',
      'React Testing Library',
      'Playwright',
      'Storybook',
      'Code Review',
      'Performance Optimization'
    ]
  },
  {
    title: 'Build & Delivery',
    list: [
      'Vite',
      'Webpack',
      'Git',
      'CI/CD',
      'Vercel',
      'Netlify'
    ]
  },
  {
    title: 'Interactive & Data Visualization',
    list: [
      'Three.js',
      'WebGL',
      'GSAP',
      'D3.js',
      'PixiJS',
      'Canvas'
    ]
  },
  {
    title: 'Blockchain & Web3',
    list: [
      'Cosmos SDK',
      'CosmJS',
      'EVM',
      'Solana',
      'ethers.js',
      'viem',
      'wagmi',
      'Reown AppKit',
      'Wallet Integration',
      'Ledger Integration',
      'Cross-Chain Applications'
    ]
  },
  {
    title: 'Backend & Data',
    list: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Neon'
    ]
  },
  {
    title: 'AI & Developer Tools',
    list: [
      'OpenAI API',
      'LLM Integration',
      'AI-Assisted Development'
    ]
  }
]
</script>

<template>
  <Section title="Technical Skills">
    <div v-for="set in skills" :key="set.title" class="flex flex-col md:flex-row gap-1 print:flex-row">
      <h6 class="shrink-0 md:w-[240px] print:w-[160px] font-medium">{{ set.title }}</h6>
      <ul class="flex flex-wrap items-start gap-2 leading-none print:pt-0.5 print:gap-y-1 print:gap-x-1.5">
        <li
          v-for="item in set.list"
          :key="item"
          class="py-1 px-2 bg-gray-700 border border-neon/20 rounded print:text-sm print:border-0 print:p-0 print:after:content-[',']"
        >
          <span class="inline-block pb-[1px]">
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </Section>
</template>
