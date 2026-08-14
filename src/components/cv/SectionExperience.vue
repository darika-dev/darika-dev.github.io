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
      info: 'Sole frontend engineer responsible for frontend architecture, UI/UX, implementation, integrations, and quality across Web3 applications built with React, Next.js, and TypeScript.',
      list: [
        'Architected and built <strong>Dextra Terminal</strong>, an embeddable cross-chain swap widget supporting <strong>four networks: Ethereum, Base, Arbitrum, and Solana</strong>.',
        'Engineered end-to-end cross-chain transaction flows across <strong>EVM and Solana</strong>, including wallet connectivity, balances, allowances, approvals, network switching, transaction states, error handling, and external API integrations.',
        'Designed and implemented a reusable UI system with <strong>30+ components</strong> using <strong>Radix UI</strong> primitives, including keyboard navigation, TypeScript type safety, theming, and Framer Motion animations.',
        'Built a separate <strong>Telegram Mini App for cross-chain swaps</strong>, implementing wallet interactions, transaction flows, state management, and API integrations for the Telegram environment.',
        'Delivered additional interactive products, including an <strong>iGaming Telegram Mini App</strong> and multiple product landing pages, owning frontend implementation from UI development through integration.'
      ]
    }
  },

  {
    title: 'Software Engineer',
    date: 'Oct 2022 – May 2024',
    company: 'Umee',
    companyLink: 'https://ux.xyz/',
    description: {
      info: 'Built web and mobile products for Umee, a cross-chain DeFi lending protocol that reached <strong>~$26M TVL and $100M+ in loans</strong> during my tenure, using React, React Native, Next.js, TypeScript, and GraphQL.',
      list: [
        'Led the frontend refactoring of <strong>Umee 2.0</strong>, restructuring a difficult-to-scale legacy codebase and addressing performance and maintainability issues with <strong>React, Next.js, TypeScript, and GraphQL</strong>.',
        'Introduced <strong>Storybook, automated testing, and reusable UI patterns</strong> into a codebase that previously lacked component documentation and automated test coverage, improving development and release workflows.',
        'Built <strong>Tabu Wallet</strong>, a React Native crypto wallet for <strong>iOS and Android supporting 40+ blockchain networks</strong>, with authentication, navigation, animations, complex transaction flows, and Ledger hardware-wallet integration.',
        'Built a shared <strong>UI kit with 20+ reusable components</strong>, standardizing common interface patterns and reducing duplicated frontend implementation.',
        'Delivered interactive product experiences, including the <strong>Tabu Wallet and DORA landing pages</strong>, using GSAP, ScrollTrigger, responsive layouts, and custom UI interactions.'
      ]
    }
  },

  {
    title: 'Senior Frontend Developer',
    date: 'Jul 2021 – Jul 2022',
    company: 'Ignite (formerly Tendermint)',
    companyLink: 'https://ignite.com/',
    description: {
      info: 'Sole frontend engineer embedded in the design team, responsible for implementing web applications, interactive experiences, and reusable UI systems across the Cosmos ecosystem.',
      list: [
        'Built the frontend of the <strong>Blockchain Accelerator Platform from scratch</strong>, translating product designs into a production-ready UI for subsequent blockchain integration by the engineering team.',
        'Implemented a reusable <strong>UI kit for Cosmos SDK applications</strong> from the design system, using <strong>Vue, TypeScript, Tailwind CSS, and Storybook</strong> to provide reusable components for blockchain application interfaces.',
        'Independently delivered frontend work across <strong>10+ production websites and web applications</strong> in the Cosmos ecosystem, including Cosmos.network, Ignite, Emeris, Starport, Ojo Network, and Archway.',
        'Built interactive, animation-heavy interfaces with <strong>Vue, Nuxt, TypeScript, Three.js, and WebGL</strong>, including performance optimization of complex animations for Emeris.'
      ]
    }
  },

  {
    title: 'Frontend Developer',
    date: 'Apr 2020 – Jul 2021',
    company: 'Xsolla',
    companyLink: 'https://xsolla.com/',
    description: {
      info: 'Sole frontend engineer for the subscriptions domain within a 12-person product team, building B2B payment and subscription-management workflows with React, Redux, TypeScript, and Jest.',
      list: [
        'Owned frontend development of the <strong>Publisher Account subscriptions module</strong>, building complex forms and dashboards for creating, editing, managing, and configuring renewal workflows for subscription products.',
        'Increased <strong>Jest test coverage for the Publisher Account subscriptions module to 85%</strong> while refactoring legacy code and reducing technical debt.',
        'Extracted the <strong>subscriptions module from a monolithic frontend into an independently deployable microfrontend</strong>, enabling the subscriptions team to develop and release its frontend independently.',
        'Regularly reviewed code for <strong>three frontend developers</strong> in the Payments team and mentored <strong>two junior frontend developers</strong>, contributing to frontend quality and engineering practices.',
        'Maintained and extended <strong>Payment Gate</strong>, an Angular-based payment application, handling frontend bug fixes and feature improvements alongside subscriptions development.'
      ]
    }
  },

  {
    title: 'Frontend Developer',
    date: 'Jan 2019 - Apr 2020',
    company: 'Hot-WiFi',
    companyLink: 'https://hot-wifi.ru/',
    description: {
      info: 'Built customer-facing web applications and embedded network-management interfaces for a guest WiFi platform as part of a two-person frontend team.',
      list: [
        'Designed and built from scratch a <strong>configuration interface running directly on MikroTik devices</strong>, working within strict device memory constraints shared with the platform firmware.',
        'Implemented the embedded interface with <strong>Vanilla JavaScript</strong> to minimize its resource footprint and support reliable operation on memory-constrained MikroTik hardware.',
        'Built and maintained <strong>React and Redux</strong> features for the customer dashboard and network-management workflows.',
        'Created <strong>custom captive portals</strong> for business customers, delivering branded authentication experiences shown to users when connecting to guest WiFi networks.'
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
