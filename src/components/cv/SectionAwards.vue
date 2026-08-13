<script lang="ts" setup>
import Section from './CvSection.vue'
import ExperienceItem from './ExperienceItem.vue'

const awards = [
  {
    project: 'Looi.co',
    date: '2017',
    description: 'Interactive website built with <strong>WebGL, Three.js, SVG effects, and device-based parallax</strong>.',
    awards: [
      {
        title: 'Honorable Mention',
        organization: 'Awwwards',
        link: 'https://www.awwwards.com/sites/looi-studio'
      },
      {
        title: 'Website of the Day',
        organization: 'CSS Design Awards',
        link: 'https://www.cssdesignawards.com/sites/looi-studio/31242/'
      }
    ]
  },
  {
    project: 'AIMIAM',
    date: '2017',
    description: 'Interactive website featuring <strong>WebGL parallax scenes, dynamic masks, and micro-interactions</strong>.',
    awards: [
      {
        title: 'Honorable Mention',
        organization: 'Awwwards',
        link: 'https://www.awwwards.com/sites/aimiam'
      },
      {
        title: 'Website of the Day',
        organization: 'CSS Design Awards',
        link: 'https://www.cssdesignawards.com/sites/aimiam-an-objective-assessment/30148/'
      }
    ]
  }
]
</script>

<template>
  <Section title="Awards">
    <ExperienceItem
      v-for="award in awards"
      :title="award.project"
      :date="award.date"
      :description="award.description"
      :awards="award.awards"
    />
  </Section>
</template>
