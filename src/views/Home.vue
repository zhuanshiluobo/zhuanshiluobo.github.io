<script setup>
import { posts } from '../data/posts.js'

const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
</script>

<template>
  <div class="home">
    <h2 class="page-title">文章列表</h2>
    <div v-if="sortedPosts.length === 0" class="empty">暂无文章</div>
    <article v-for="post in sortedPosts" :key="post.id" class="post-card">
      <router-link :to="`/post/${post.id}`" class="post-title-link">
        <h3>{{ post.title }}</h3>
      </router-link>
      <div class="post-meta">
        <time>{{ post.date }}</time>
        <span class="tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </span>
      </div>
      <p class="post-summary">{{ post.summary }}</p>
      <router-link :to="`/post/${post.id}`" class="read-more">阅读全文 &rarr;</router-link>
    </article>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.empty {
  text-align: center;
  color: var(--color-text);
  padding: 3rem 0;
  opacity: 0.6;
}

.post-card {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.post-card:last-child {
  border-bottom: none;
}

.post-title-link {
  text-decoration: none;
}

.post-title-link h3 {
  font-size: 1.3rem;
  color: var(--color-heading);
  margin-bottom: 0.3rem;
  transition: color 0.2s;
}

.post-title-link:hover h3 {
  color: hsla(160, 100%, 37%, 1);
}

.post-meta {
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tags {
  display: flex;
  gap: 0.4rem;
}

.tag {
  background: hsla(160, 100%, 37%, 0.1);
  color: hsla(160, 100%, 37%, 1);
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
}

.post-summary {
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.read-more {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
  font-size: 0.9rem;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
