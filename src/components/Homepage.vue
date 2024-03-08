<script setup>
import HomepageItem from './HomepageItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
</script>

<template>
  <HomepageItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>
    <p>
    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.</p>

    <template #joke></template>
  </HomepageItem>

  <HomepageItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>.

    More instructions are available in <code>README.md</code>.

    <template #joke></template>
  </HomepageItem>



</template>
