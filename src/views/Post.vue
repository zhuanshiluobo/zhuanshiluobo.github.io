<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts } from '../data/posts.js'

const route = useRoute()
const router = useRouter()

const post = computed(() => posts.find(p => p.id === Number(route.params.id)))
const visibleTags = computed(() => (post.value?.tags || []).filter(tag => tag.toLowerCase() !== 'blog'))

if (!post.value) {
  router.replace('/')
}
</script>

<template>
  <div class="post-detail" v-if="post">
    <router-link to="/" class="back-link">&larr; 返回首页</router-link>
    <article>
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <time>{{ post.date }}</time>
        <span v-if="visibleTags.length" class="tags">
          <span v-for="tag in visibleTags" :key="tag" class="tag">{{ tag }}</span>
        </span>
      </div>
      <div class="post-content" v-html="post.content"></div>
    </article>
  </div>
</template>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  color: hsla(160, 100%, 37%, 1);
  text-decoration: none;
  font-size: 0.9rem;
}

.back-link:hover {
  text-decoration: underline;
}

h1 {
  font-size: 1.8rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.post-meta {
  font-size: 0.85rem;
  color: var(--color-text);
  opacity: 0.7;
  margin-bottom: 1.5rem;
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

.post-content {
  color: var(--color-text);
  line-height: 1.8;
  font-size: 1.05rem;
}

.post-content :deep(h2) {
  font-size: 1.3rem;
  margin: 1.8rem 0 0.8rem;
  color: var(--color-heading);
}

.post-content :deep(h3) {
  font-size: 1.1rem;
  margin: 1.5rem 0 0.6rem;
  color: var(--color-heading);
}

.post-content :deep(p) {
  margin-bottom: 1rem;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.post-content :deep(li) {
  margin-bottom: 0.3rem;
}

.post-content :deep(pre) {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.post-content :deep(code) {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.9em;
}

.post-content :deep(p code) {
  background: var(--color-background-soft);
  padding: 0.15em 0.4em;
  border-radius: 3px;
  border: 1px solid var(--color-border);
}
</style>
