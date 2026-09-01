<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { posts } from '../data/posts.js'
import { formatPostDate } from '../utils/formatPostDate.js'

const route = useRoute()
const router = useRouter()

const post = computed(() => posts.find(p => p.id === Number(route.params.id)))
const visibleTags = computed(() => (post.value?.tags || []).filter(tag => tag.toLowerCase() !== 'blog'))

if (!post.value) {
  router.replace('/paper')
}
</script>

<template>
  <div class="post-detail" v-if="post">
    <router-link to="/paper" class="back-link">&larr; 返回推文页面</router-link>
    <article>
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <time :datetime="post.date">{{ formatPostDate(post.date) }}</time>
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
  font-weight: 700;
  margin: 1.8rem 0 0.8rem;
  color: var(--color-heading);
}

.post-content :deep(h3) {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.5rem 0 0.6rem;
  color: var(--color-heading);
}

.post-content :deep(strong) {
  font-weight: 700;
}

.post-content :deep(p) {
  margin-bottom: 1rem;
}

.post-content :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem auto 1.5rem;
  border-radius: 6px;
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

.post-content :deep(.download-card) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;
  margin: 1.25rem 0;
  padding: 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background-soft);
}

.post-content :deep(.download-card span) {
  font-size: 0.9rem;
  opacity: 0.7;
}

.post-content :deep(.download-link) {
  display: inline-block;
  margin-top: 0.25rem;
  padding: 0.55rem 0.9rem;
  border-radius: 6px;
  color: white;
  background: hsla(160, 100%, 37%, 1);
  font-weight: 600;
  text-decoration: none;
}

.post-content :deep(.download-link:hover) {
  opacity: 0.85;
}
</style>
