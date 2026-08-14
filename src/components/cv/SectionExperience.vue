<script lang="ts" setup>
import Section from './CvSection.vue'
import ExperienceItem from './ExperienceItem.vue'

const experience = [
  {
    title: 'Senior Frontend Engineer',
    date: 'May 2024 - May 2026',
    company: 'Intensity Labs',
    companyLink: 'https://www.intensitylabs.ai',
    description: {
      info: 'Sole frontend engineer owning frontend architecture, UI/UX, technical decisions, and implementation across multiple Web3 products.',
      list: [
        'Architected and built <strong>Dextra Terminal</strong> from an initial product concept into an embeddable cross-chain swap widget supporting <strong>four networks: Ethereum, Base, Arbitrum, and Solana</strong>.',
        'Worked cross-functionally with <strong>PM, Tech Lead, backend, and smart-contract engineers</strong> to define product flows, technical solutions, and API contracts.',
        'Engineered complex transaction flows across <strong>EVM and Solana</strong>, including wallet connectivity, balances, allowances, approvals, network switching, asynchronous transaction states, error handling, and external API integrations.',
        'Designed and implemented a reusable UI system with <strong>30+ components</strong> using Radix UI, TypeScript, and Framer Motion, with accessibility (a11y), keyboard navigation, and theming built in.',
        'Built a separate <strong>Telegram Mini App for cross-chain swaps</strong>, implementing frontend architecture, wallet interactions, transaction flows, state management, and API integrations for the Telegram environment.'
      ]
    }
  },

  {
    title: 'Software Engineer',
    date: 'Oct 2022 - May 2024',
    company: 'Umee',
    companyLink: 'https://ux.xyz/',
    description: {
      info: 'Built and modernized web and mobile DeFi products within a ~15-person engineering team, collaborating with frontend, backend, and blockchain engineers.',
      list: [
        'Led the frontend refactoring of <strong>Umee 2.0</strong>, restructuring a difficult-to-scale legacy codebase and addressing <strong>page-load performance, data fetching, maintainability, and recurring UI issues</strong> with React, Next.js, TypeScript, and GraphQL.',
        'Introduced <strong>Storybook, automated testing, feature flags, and reusable UI patterns</strong> into the legacy application, improving development and release workflows and enabling incremental modernization.',
        'Built <strong>Tabu Wallet</strong>, a React Native crypto wallet for <strong>iOS and Android supporting 40+ blockchain networks</strong>, with authentication, navigation, animations, complex transaction flows, and Ledger hardware-wallet integration.',
        'Built a shared <strong>UI kit with 20+ reusable components</strong>, standardizing common interface patterns and reducing duplicated frontend implementation.',
        'Delivered interactive product experiences, including the <strong>Tabu Wallet and DORA landing pages</strong>, using GSAP, ScrollTrigger, responsive layouts, and custom UI interactions.'
      ]
    }
  },

  {
    title: 'Senior Frontend Developer',
    date: 'Jul 2021 - Jul 2022',
    company: 'Ignite (formerly Tendermint)',
    companyLink: 'https://ignite.com/',
    description: {
      info: 'Sole frontend engineer embedded in the design team, collaborating with designers, design leadership, and marketing across products in the Cosmos ecosystem.',
      list: [
        'Built the frontend of the <strong>Blockchain Accelerator Platform from scratch</strong>, translating product designs into a production-ready UI for subsequent blockchain integration by the engineering team.',
        'Implemented a reusable <strong>UI kit for Cosmos SDK applications</strong> with Vue, TypeScript, Tailwind CSS, and Storybook, providing standardized components for building blockchain application interfaces.',
        'Independently delivered frontend work across <strong>10+ production websites and web applications</strong>, including Cosmos.network, Ignite, Emeris, Starport, Ojo Network, and Archway.',
        'Built interactive, animation-heavy experiences with <strong>Vue, Nuxt, TypeScript, Three.js, and WebGL</strong>, including performance optimization of complex animations for Emeris.'
      ]
    }
  },

  {
    title: 'Frontend Developer',
    date: 'Apr 2020 - Jul 2021',
    company: 'Xsolla',
    companyLink: 'https://xsolla.com/',
    description: {
      info: 'Sole frontend engineer for the subscriptions domain within a 12-person product team, building B2B payment and subscription-management workflows.',
      list: [
        'Owned frontend development of the <strong>Publisher Account subscriptions module</strong>, building complex forms and dashboards for creating, editing, managing, and configuring renewal workflows for subscription products.',
        'Identified automated testing as an engineering improvement area and increased <strong>Jest test coverage for the subscriptions module to 85%</strong> while refactoring legacy code and reducing technical debt.',
        'Extracted the subscriptions module from a monolithic frontend into an <strong>independently deployable microfrontend</strong> as part of a cross-team frontend architecture initiative, using feature flags to support incremental migration and delivery.',
        'Collaborated across frontend, Payments, product, and marketing teams through shared architecture initiatives and code reviews, and mentored <strong>two junior frontend developers</strong>.',
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
      info: 'Built customer-facing applications and embedded network-management interfaces for a guest WiFi platform as part of a two-person frontend team.',
      list: [
        'Designed and built from scratch a <strong>configuration interface running directly on MikroTik devices</strong>, working within strict memory constraints shared with the platform firmware.',
        'Implemented the embedded interface with <strong>Vanilla JavaScript</strong> to minimize its resource footprint and support reliable operation on memory-constrained MikroTik hardware.',
        'Built and maintained <strong>React and Redux</strong> features for the customer dashboard and created custom captive portals for business customers.'
      ]
    }
  },

  {
    title: 'Creative Frontend Developer',
    date: 'Sep 2016 - Jan 2019',
    company: 'Sborka Project',
    companyLink: 'https://sborkaproject.ru/',
    description: {
      info: 'Delivered <strong>20+ websites and web applications</strong> for clients including Raiffeisen Bank, Innova, and the Tretyakov Gallery.',
      list: [
        'Built production interfaces with <strong>React, TypeScript, MobX, JavaScript, HTML, and CSS</strong> across corporate, marketing, and interactive applications.',
        'Created advanced interactive experiences and data visualizations with <strong>WebGL, Three.js, GSAP, PixiJS, D3.js, and Canvas</strong>.',
        'Delivered projects recognized by <strong>Awwwards</strong> and <strong>CSS Design Awards</strong>.'
      ]
    }
  }
]
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
