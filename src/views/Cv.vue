<script lang="ts">
export default {
  name: 'CvView'
}
</script>

<script lang="ts" setup>
import Header from '../components/cv/CvHeader.vue'
import Summary from '../components/cv/SectionSummary.vue'
import Experience from '../components/cv/SectionExperience.vue'
import Projects from '../components/cv/SectionProjects.vue'
import Skills from '../components/cv/SectionSkills.vue'
import Education from '../components/cv/SectionEducation.vue'
import Awards from '../components/cv/SectionAwards.vue'
import Contact from '../components/cv/SectionContact.vue'
</script>

<template>
  <main class="mt-14 print:mt-0 pb-10">
    <Header />

    <Summary />

    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Awards />
    <Contact />
  </main>
</template>