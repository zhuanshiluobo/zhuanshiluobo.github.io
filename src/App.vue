<script setup>
import BlogHeader from './components/BlogHeader.vue'
</script>

<template>
  <BlogHeader />
  <main>
    <router-view />
  </main>
  <footer class="site-footer">
    <p>&copy; 2026 转石萝卜的博客. Powered by Vue 3 + Vite.</p>
  </footer>
</template>

<style scoped>
main {
  min-height: calc(100vh - 120px);
}

.site-footer {
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 1.5rem 1rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.6;
}
</style>
