<script lang="ts" setup>
import Section from './CvSection.vue'
import ExperienceItem from './ExperienceItem.vue'

const experience = [
  {
    title: 'Senior Frontend Engineer',
    date: 'May 2024 – May 2026',
    company: 'Intensity Labs',
    companyLink: 'https://www.intensitylabs.ai',
    description: {
      info: 'Owned frontend architecture, technical decisions, implementation, third-party integrations, and production delivery for complex Web3 applications built with React, Next.js, and TypeScript.',
      list: [
        'Led the architecture and production delivery of <strong>Dextra Terminal</strong>, a cross-chain swap application built with <strong>React, Next.js, and TypeScript</strong>.',
        'Implemented cross-chain transaction flows across <strong>EVM and Solana</strong>, including wallet connections, token balances, allowances, approvals, network switching, blockchain interactions, error handling, and external API integrations.',
        'Established reusable UI components and application patterns that supported maintainable, scalable feature development.',
        'Shipped a <strong>Telegram Mini App for cross-chain swaps</strong>, adapting wallet interactions, transaction flows, state management, and API integrations to the Telegram environment.',
        'Took <strong>Shogun95</strong> from concept to production, creating a Windows 95-inspired interface with reusable interactive components and <strong>CSS animations</strong>.'
      ]
    }
  },

  {
    title: 'Software Engineer',
    date: 'Oct 2022 – May 2024',
    company: 'Umee',
    companyLink: 'https://ux.xyz/',
    description: {
      info: 'Delivered scalable web and mobile DeFi products with React, React Native, Next.js, TypeScript, and GraphQL, focusing on frontend architecture, blockchain workflows, and reusable design systems.',
      list: [
        'Led the frontend rebuild of <strong>Umee 2.0</strong> with <strong>React, Next.js, TypeScript, GraphQL, and Storybook</strong>, creating a more maintainable foundation for product development.',
        'Developed <strong>Tabu Wallet</strong>, a React Native mobile crypto wallet with authentication, navigation, animations, complex transaction flows, and <strong>Ledger hardware-wallet integration</strong>.',
        'Built and maintained a shared UI kit and design system used across multiple products, improving UI consistency and reducing duplicated frontend implementation.',
        'Integrated GraphQL APIs and blockchain infrastructure for data-driven DeFi workflows.',
        'Delivered interactive product experiences, including Tabu Wallet and DORA landing pages, using <strong>GSAP, ScrollTrigger</strong>, responsive layouts, and custom UI interactions.'
      ]
    }
  },

  {
    title: 'Senior Frontend Developer',
    date: 'Jul 2021 – Jul 2022',
    company: 'Ignite (formerly Tendermint)',
    companyLink: 'https://ignite.com/',
    description: {
      info: 'Built open-source Web3 applications and reusable UI systems for the Cosmos blockchain ecosystem using Vue, Nuxt, TypeScript, Tailwind CSS, Pinia, and Storybook.',
      list: [
        'Developed a decentralized application for the Blockchain Accelerator Platform, building frontend workflows for interacting with <strong>Cosmos SDK</strong> infrastructure.',
        'Created a reusable UI kit and shared component library adopted across multiple products, improving consistency and accelerating feature delivery.',
        'Delivered <strong>10+ production websites and web applications</strong> across the Cosmos ecosystem, including Cosmos.network, Ignite, Emeris, Starport, Ojo Network, and Archway.',
        'Built responsive, highly interactive interfaces with <strong>Vue, Nuxt, TypeScript, Three.js, and WebGL</strong>.'
      ]
    }
  },

  {
    title: 'Frontend Developer',
    date: 'Apr 2020 – Jul 2021',
    company: 'Xsolla',
    companyLink: 'https://xsolla.com/',
    description: {
      info: 'Developed B2B fintech, payment, and publishing platforms with Angular, React, TypeScript, Redux, and Jest.',
      list: [
        'Maintained <strong>Payment Gate</strong>, an Angular payment application supporting complex payment workflows.',
        'Delivered React and Redux features for <strong>Publisher Account</strong>, supporting product, payment, and publishing operations for business customers.',
        'Contributed to the migration from a monolithic frontend to <strong>microfrontends</strong>, improving scalability and independent feature delivery.',
        'Expanded automated test coverage with <strong>Jest</strong>, refactored legacy code, and reduced frontend technical debt.',
        'Led code reviews and mentored junior frontend developers, contributing to engineering standards and code quality.'
      ]
    }
  },

  {
    title: 'Frontend Developer',
    date: 'Jan 2019 – Apr 2020',
    company: 'Hot-WiFi',
    companyLink: 'https://hot-wifi.ru/',
    description: {
      info: 'Built customer-facing web applications, dashboards, and network-management interfaces for a guest WiFi platform using React, Redux, JavaScript, SCSS, and PostCSS.',
      list: [
        'Developed a configuration interface running directly on <strong>MikroTik devices</strong> to support guest WiFi setup.',
        'Built customer dashboards and public WiFi interfaces, simplifying network management and user onboarding.',
        'Delivered responsive marketing websites for the product.'
      ]
    }
  },

  {
    title: 'Creative Frontend Developer',
    date: 'Sep 2016 – Jan 2019',
    company: 'Sborka Project',
    companyLink: 'https://sborkaproject.ru/',
    description: {
      info: 'Delivered <strong>20+ websites and web applications</strong> for clients including Raiffeisen Bank, Innova, and the Tretyakov Gallery, combining frontend engineering with interactive and data-driven experiences.',
      list: [
        'Built production interfaces with <strong>React, TypeScript, MobX, JavaScript, HTML, and CSS</strong> across corporate, marketing, and interactive applications.',
        'Created advanced interactive experiences and data visualizations with <strong>WebGL, GSAP, PixiJS, D3.js, and Canvas</strong>.',
        'Delivered projects recognized by <strong>Awwwards</strong> and <strong>CSS Design Awards</strong>.'
      ]
    }
  }
];
</script>

<template>
  <Section title="Work Experience">
    <ExperienceItem
      v-for="item in experience"
      :key="item.company"
      :title="item.title"
      :date="item.date"
      :company="item.company"
      :companyLink="item.companyLink"
      :description="item.description.info"
      :descriptionList="item.description.list"
    />
  </Section>
</template>
