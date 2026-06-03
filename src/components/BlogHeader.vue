<script setup>
</script>

<template>
  <header class="blog-header">
    <div class="header-inner">
      <router-link to="/" class="site-title">转石萝卜的博客</router-link>
      <nav class="nav-links">
        <router-link to="/">首页</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.blog-header {
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.header-inner {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-heading);
  text-decoration: none;
}

.nav-links a {
  color: var(--color-text);
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 0.95rem;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}
</style>
