<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const screenshots = [
  {
    src: '/images/page1.png',
    alt: '入场页',
    caption: '主页展示'
  },
  {
    src: '/images/page2.png',
    alt: '加载中',
    caption: '过场界面'
  },
  {
    src: '/images/page3.png',
    alt: '卡片交互',
    caption: '探索交互'
  },
  {
    src: '/images/page4.png',
    alt: '影响地图',
    caption: '采集资源'
  }
]

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value =
    (currentSlide.value + 1) % screenshots.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + screenshots.length) % screenshots.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}

let timer

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>


<template>
  <div class="demo-page">
    <section class="hero">
      <h1>《游城拓荒》模拟器</h1>
      <section class="screenshots-section">
        <h2>游戏截图</h2>

        <div class="carousel">
          <div class="carousel-image">
            <img :src="screenshots[currentSlide].src" :alt="screenshots[currentSlide].alt" />

            <button class="carousel-button prev" type="button" aria-label="上一张截图" @click="prevSlide">
              ❮
            </button>

            <button class="carousel-button next" type="button" aria-label="下一张截图" @click="nextSlide">
              ❯
            </button>
          </div>

          <p class="carousel-caption">
            {{ screenshots[currentSlide].caption }}
          </p>

          <div class="carousel-thumbnails">
            <button v-for="(screenshot, index) in screenshots" :key="screenshot.src" type="button" class="thumbnail"
              :class="{ active: currentSlide === index }" :aria-label="`查看第 ${index + 1} 张截图`"
              @click="goToSlide(index)">
              <img :src="screenshot.src" :alt="screenshot.alt" />
            </button>
          </div>
        </div>
      </section>

      <div class="actions">
        <div class="download-actions">
          <a href="https://download.zhuanshiluobo.me/releases/v0.4.2-beta.zip" class="primary">
            最新版下载
          </a>

          <details class="version-history">
            <summary>过往版本</summary>
            <div class="version-history-menu">
              <a href="https://download.zhuanshiluobo.me/releases/v0.4.2-alpha.zip">
                v0.4.2-alpha
              </a>
            </div>
          </details>
        </div>

        <a href="https://github.com/zhuanshiluobo/youchengtuohuang-frontier-simulator" target="_blank"
          rel="noopener noreferrer">
          前往github
        </a>
      </div>

      <div class="version-info">
        <div>
          <strong>当前版本</strong>
          <span>v0.4.2-beta</span>
        </div>
        <div>
          <strong>支持平台</strong>
          <span>Windows 64 位</span>
        </div>
        <div>
          <strong>文件大小</strong>
          <span>约280MB</span>
        </div>
        <div>
          <strong>开发者备注</strong>
          <span>联机功能需要打开steam</span>
        </div>
      </div>
    </section>
    <section class="section">
      <h2>试玩说明</h2>
      <ul>
        <li>点击按钮通过本站服务器下载 Demo，或前往 GitHub 查看项目最新更新。</li>
        <li>解压后运行游城拓荒模拟器.exe。</li>
        <li>目前尚未接入音效。</li>
        <li>本模拟器为个人开发，参考线下桌游《游城拓荒：铸基者》开发。</li>
      </ul>
    </section>
    <section class="section">
      <h2>当前进度</h2>
      <ul>
        <li>首次上线收集反馈中...</li>
        <li>修复联机问题和恶性bug。</li>
        <li>接入3D 模型，完善成就及新手指引。</li>
        <li>更新本地四人玩法模拟。</li>
        <li>修改地图为支持斜视与俯视。</li>
      </ul>
    </section>
    <section class="section">
      <h2>bug提交</h2>
      <ul>
        <li>点击底部前往GitHub ↓</li>
        <li>点击底部前往b站demo评论区 ↓</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.demo-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  padding: 0rem 0;
}

.status {
  color: hsla(160, 100%, 37%, 1);
}

.actions {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1.5rem;
}

.actions a {
  display: inline-block;
  padding: 0.65rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  text-decoration: none;
  color: var(--color-text);
}

.actions a:hover {
  border-color: hsla(160, 100%, 37%, 1);
  color: hsla(160, 100%, 37%, 1);
}

.actions .primary {
  background: hsla(160, 100%, 37%, 1);
  border-color: hsla(160, 100%, 37%, 1);
  color: white;
}

.actions .primary:hover {
  opacity: 0.85;
  color: white;
}

.download-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.version-history {
  position: relative;
  margin-top: 0.4rem;
  font-size: 0.78rem;
}

.version-history summary {
  color: var(--color-text);
  cursor: pointer;
  opacity: 0.65;
}

.version-history summary:hover {
  color: hsla(160, 100%, 37%, 1);
  opacity: 1;
}

.version-history-menu {
  position: absolute;
  z-index: 2;
  top: calc(100% + 0.35rem);
  left: 0;
  min-width: 9rem;
  padding: 0.35rem;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.actions .version-history-menu a {
  display: block;
  padding: 0.4rem 0.55rem;
  border: 0;
  border-radius: 4px;
  white-space: nowrap;
}

.actions .version-history-menu a:hover {
  background: rgba(127, 127, 127, 0.1);
}

.version-info {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.version-info div {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.version-info strong {
  font-size: 0.85rem;
  opacity: 0.6;
}

.version-info span {
  font-size: 0.95rem;
}


.section {
  margin: 2rem 0;
}

.download-section ol {
  padding-left: 1.5rem;
  line-height: 2;
}

.progress-section ul {
  padding-left: 1.5rem;
  line-height: 2;
}

@media (max-width: 600px) {
  .actions {
    align-items: flex-start;
  }

  .version-info {
    gap: 1rem;
  }
}

.screenshots-section {
  margin: 3rem 0;
}

.carousel {
  margin-top: 1rem;
}

.carousel-image {
  position: relative;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: #111;
}

.carousel-image img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 44px;
  height: 44px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.55);
  color: white;

  font-size: 2rem;
  line-height: 1;

  cursor: pointer;
}

.carousel-button:hover {
  background: rgba(0, 0, 0, 0.8);
}

.carousel-button.prev {
  left: 1rem;
}

.carousel-button.next {
  right: 1rem;
}

.carousel-caption {
  margin-top: 0.8rem;
  text-align: center;
  color: var(--color-text);
  opacity: 0.8;
}

.carousel-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
  margin-top: 1rem;
}

.thumbnail {
  padding: 0;
  border: 2px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  background: none;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity 0.2s,
    border-color 0.2s;
}

.thumbnail:hover {
  opacity: 0.9;
}

.thumbnail.active {
  opacity: 1;
  border-color: hsla(160, 100%, 37%, 1);
}

.thumbnail img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

@media (max-width: 600px) {
  .carousel-thumbnails {
    margin-top: 0.5rem;
  }
}

</style>

