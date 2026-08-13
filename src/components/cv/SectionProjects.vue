<script lang="ts" setup>
import Section from './CvSection.vue'
import ExperienceItem from './ExperienceItem.vue'

const projects = [
  {
    title: 'Meetory',
    type: 'Personal Project',
    date: 'Jul 2026 – Present',
    link: 'https://t.me/MeetoryBot',
    description: {
      info: 'AI-powered Telegram assistant for turning unstructured event posts into structured calendar events.',
      list: [
        'Designed and built the product end-to-end using <strong>TypeScript, Node.js, Grammy, PostgreSQL, and Telegram Bot API</strong>.',
        'Integrated the <strong>OpenAI API</strong> for AI-powered event parsing and extraction of structured event data.',
        'Built <strong>Google Calendar API and OAuth 2.0 integration</strong>, shared calendars, event deduplication, and multilingual user flows.',
        'Deployed the application on <strong>Vercel</strong> using a <strong>serverless architecture</strong> with <strong>Neon PostgreSQL</strong> for persistent data storage.',
      ]
    }
  },
  // {
  //   title: 'Filtru – Futula Scale Integration',
  //   type: 'Technical Contribution',
  //   date: 'Feb 2026',
  //   description: {
  //     info: 'Helped bring Futula scale support to another coffee application by providing technical guidance on the device integration.',
  //     list: [
  //       'Documented and explained the scale’s <strong>BLE protocol, device behavior, payload format, and commands</strong> to the developer implementing the integration.'
  //     ]
  //   },
  // },
  {
    title: 'Beanconqueror – Futula Scale Integration',
    type: 'Open Source Contribution',
    date: 'May 2026',
    link: 'https://github.com/graphefruit/Beanconqueror',
    description: {
      info: 'Added support for the Futula Kitchen Scale 3 to an open-source coffee tracking application.',
      list: [
        'Implemented <strong>Bluetooth Low Energy (BLE)</strong> communication, real-time weight synchronization, battery monitoring, and device commands.',
        'Worked with <strong>Angular and RxJS</strong> to integrate asynchronous Bluetooth device communication into the existing application.'
      ]
    }
  },
]
</script>

<template>
  <Section title="projects">
    <ExperienceItem
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :link="project.link"
      :company="project.type"
      :date="project.date"
      :description="project.description.info"
      :descriptionList="project.description.list"
    />
  </Section>
</template>
