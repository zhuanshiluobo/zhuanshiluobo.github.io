<script setup>
import { computed, ref } from 'vue'
import { documents } from '../library/documents.js'

const searchKeyword = ref('')
const sortedDocuments = [...documents].sort((a, b) => b.date.localeCompare(a.date))

const getFileExtension = (fileName) => fileName.split('.').pop()?.toUpperCase() ?? ''

const filteredDocuments = computed(() => {
  const keyword = searchKeyword.value.trim().toLocaleLowerCase('zh-CN')
  if (!keyword) return sortedDocuments

  return sortedDocuments.filter((document) => {
    return document.title.toLocaleLowerCase('zh-CN').includes(keyword)
  })
})
</script>

<template>
  <div class="files-page">
    <header class="page-header">
      <h1 class="page-title">文库</h1>
      <span class="document-count">共 {{ documents.length }} 份</span>
    </header>

    <label class="search-box">
      <svg viewBox="0 0 24 24" width="15" height="18" aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle>
        <path d="m16.5 16.5 4 4"></path>
      </svg>
      <input v-model="searchKeyword" type="search" placeholder="查找文档" aria-label="查找文档" />
    </label>

    <div v-if="documents.length === 0" class="empty-state">暂无可用文档</div>
    <div v-else-if="filteredDocuments.length === 0" class="empty-state">
      没有找到与“{{ searchKeyword }}”相关的文档
    </div>

    <section v-else class="document-list" aria-label="历史文档列表">
      <article v-for="document in filteredDocuments" :key="document.id" class="document-card">
        <div class="document-content">
          <h2>{{ document.title }}</h2>
          <span class="document-extension" aria-hidden="true">
            {{ getFileExtension(document.fileName) }}
          </span>
        </div>

        <a
          :href="document.url"
          class="document-view-link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`查看文档：${document.title}`"
        ></a>

        <a
          :href="document.url"
          :download="document.fileName"
          class="download-button"
          :aria-label="`下载文档：${document.title}`"
          :title="`下载 ${document.title}`"
        >
          <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">
            <path d="M12 3v12"></path>
            <path d="m7 10 5 5 5-5"></path>
            <path d="M5 21h14"></path>
          </svg>
        </a>
      </article>
    </section>
  </div>
</template>

<style scoped>
.files-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.page-title {
  margin-bottom: 0;
  color: var(--color-heading);
  font-size: 1.5rem;
  font-weight: 600;
}


.document-count {
  flex-shrink: 0;
  margin-top: 0.25rem;
  color: var(--color-text);
  font-size: 0.85rem;
  opacity: 0.6;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.8rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background-soft);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-box:focus-within {
  border-color: hsla(160, 100%, 37%, 0.75);
  box-shadow: 0 0 0 3px hsla(160, 100%, 37%, 0.1);
}

.search-box svg {
  flex-shrink: 0;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  color: var(--color-text);
  opacity: 0.55;
}

.search-box input {
  width: 100%;
  padding: 0;
  border: 0;
  outline: none;
  color: var(--color-text);
  background: transparent;
  font: inherit;
}

.search-box input::placeholder {
  color: var(--color-text);
  opacity: 0.5;
}

.empty-state {
  padding: 3rem 0;
  color: var(--color-text);
  text-align: center;
  opacity: 0.6;
}

.document-list {
  border-top: 1px solid var(--color-border);
}

.document-card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 48px;
  padding: 0.35rem 0.5rem;
  border-bottom: 1px solid var(--color-border);
  border-radius: 6px;
  transition: background-color 0.2s;
}

.document-card:hover {
  background: var(--color-background-soft);
}

.document-content {
  display: flex;
  align-items: center;
  min-width: 0;
  flex: 1;
  gap: 0;
}

.document-content h2 {
  min-width: 0;
  margin: 0;
  color: var(--color-heading);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.document-extension {
  flex: 0 0 auto;
  max-width: 0;
  overflow: hidden;
  color: var(--color-text);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  opacity: 0;
  transform: translateX(4px);
  transition: max-width 0.2s, margin-left 0.2s, opacity 0.2s, transform 0.2s;
}

.document-card:hover .document-extension,
.document-card:focus-within .document-extension {
  max-width: 5rem;
  margin-left: 0.6rem;
  opacity: 0.55;
  transform: translateX(0);
}


.document-view-link {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 6px;
}

.document-view-link:focus-visible {
  outline: 2px solid hsla(160, 100%, 37%, 1);
  outline-offset: 2px;
}

.download-button {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
}

.download-button:hover,
.download-button:focus-visible {
  border-color: hsla(160, 100%, 37%, 1);
  color: white;
  background: hsla(160, 100%, 37%, 1);
  opacity: 1;
}

.download-button svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@media (max-width: 560px) {
  .page-header {
    gap: 1rem;
  }


  .document-card {
    min-height: 46px;
    padding: 0.3rem 0.4rem;
  }

  .download-button {
    flex-basis: 30px;
    width: 30px;
    height: 30px;
  }

}
</style>
