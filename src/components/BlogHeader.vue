<script setup>
</script>

<template>
  <header class="blog-header">
    <div class="header-inner">
      <router-link to="/" class="site-brand">
        <img class="avatar" src="https://github.com/zhuanshiluobo.png" alt="avatar" />
        <span class="site-title">zhuanshiluobo的博客</span>
      </router-link>
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

.site-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border);
}

.site-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-heading);
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
