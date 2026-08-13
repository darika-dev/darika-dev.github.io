<script lang="ts" setup>
import Section from './CvSection.vue'
import ExperienceItem from './ExperienceItem.vue'
</script>

<template>
  <Section title="Education">
    <ExperienceItem
      title="Perm State University"
      date="2011 – 2014"
      description="Bachelor's degree in Business, Management and Marketing"
    />

    <div class="flex flex-col sm:flex-row gap-2 md:gap-8 break-before-avoid">
      <div>
        <strong>English:</strong> <span class="text-gray-400 print:text-gray-600">Intermediate (B1-B2)</span>
      </div>
      <div>
        <strong>Russian:</strong> <span class="text-gray-400 print:text-gray-600">Native</span>
      </div>
    </div>
  </Section>
</template>
