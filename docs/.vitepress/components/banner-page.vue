<script setup>
const features = [
  {
    title: '高可定制',
    desc: '提供灵活的配置选项和主题定制能力',
    icon: '🎨',
  },
  {
    title: '现代设计',
    desc: '基于最新设计趋势的UI组件集合',
    icon: '💎',
  },
  {
    title: '高效开发',
    desc: '开箱即用，提升开发效率',
    icon: '⚡',
  },
]

const team = [
  {
    name: '一勺',
    role: '前端开发',
    avatar: 'https://pic1.imgdb.cn/item/67d105e6066befcec6e39e31.jpg',
  },
  {
    name: 'Fovik',
    role: '前端开发',
    avatar: 'https://pic1.imgdb.cn/item/6790570cd0e0a243d4f65879.webp',
  },
]
</script>

<template>
  <div class="theme-main-page">
    <!--  Hero Section S  -->
    <section class="hero">
      <div class="container">
        <div class="hero-illustration">
          <img src="/image/logo.svg" alt="Mason UI">
        </div>
        <h1 class="hero-title">
          Mason UI
        </h1>
        <p class="hero-description">
          现代、高效、可定制的Vue 3组件解决方案
        </p>
        <div class="action-buttons">
          <a class="button primary" href="/guide/basic/">
            快速开始
          </a>
          <a class="button secondary" href="components/button/">
            组件列表
          </a>
        </div>
      </div>
    </section>
    <!--  Hero Section E  -->

    <!--  Features Section S  -->
    <section class="features">
      <div class="container">
        <div v-for="(feat, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">
            {{ feat.icon }}
          </div>
          <h3>{{ feat.title }}</h3>
          <p>{{ feat.desc }}</p>
        </div>
      </div>
    </section>
    <!--  Features Section E  -->

    <!-- Team Section S -->
    <section class="team">
      <div class="container">
        <h2 class="section-title">
          团队成员
        </h2>
        <div class="members">
          <div v-for="(member, index) in team" :key="index" class="member-card">
            <img :src="member.avatar" :alt="member.name" class="avatar">
            <h4>{{ member.name }}</h4>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Team Section E -->

    <!-- Footer Section S -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            Mason UI
          </div>
          <div class="footer-links">
            <a href="/docs" class="footer-link">文档</a>
            <a href="/guide" class="footer-link">指南</a>
            <a href="/api" class="footer-link">API</a>
            <a href="/changelog" class="footer-link">更新日志</a>
          </div>
        </div>
        <div class="footer-copyright">
          © 2023 Mason UI. 保留所有权利。
        </div>
      </div>
    </footer>
    <!-- Footer Section E -->
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  text-align: center;
  padding: 8rem 0;
  background-color: #f7fafc;
  background-image: url('https://www.ncsyrj.com/new_oa/static/svg/login-bg-35918cc2.svg');
  background-position: right top;
  background-repeat: no-repeat;
  background-size: cover;
}

.dark .hero {
  background: #1a1a1a url('https://www.ncsyrj.com/new_oa/static/svg/login-bg-35918cc2.svg') no-repeat right top;
  background-size: cover;
}

.hero-illustration {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0 auto;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #213547;
}

.dark .hero-title {
  color: #ffffff;
}

.hero-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.dark .hero-description {
  color: #aaa;
}
.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.button {
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  border: none;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  color: inherit;
  text-decoration: none;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.button:active {
  transform: translateY(1px);
}

.primary {
  background: linear-gradient(135deg, #316ac5 0%, #214a8e 100%);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.primary:hover {
  background: linear-gradient(135deg, #3b75d1 0%, #2553a5 100%);
  color: white;
}

.dark .primary {
  background: linear-gradient(135deg, #6b9fed 0%, #3b75d1 100%);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.dark .primary:hover {
  background: linear-gradient(135deg, #7babf5 0%, #4b85e6 100%);
}

.secondary {
  background: transparent;
  color: #316ac5;
  border: 2px solid;
  position: relative;
}

.secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(49, 106, 197, 0.1) 0%, rgba(33, 74, 142, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s;
}

.secondary:hover::before {
  opacity: 1;
}

.dark .secondary {
  color: #6b9fed;
}

.dark .secondary::before {
  background: linear-gradient(135deg, rgba(107, 159, 237, 0.1) 0%, rgba(59, 117, 209, 0.1) 100%);
}

@keyframes button-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

.button:active {
  animation: button-scale 0.2s ease;
}

.features {
  padding: 4rem 0;
  background: #f9f9f9;
}

.dark .features {
  background: #242424;
}

.features .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: white;
  text-align: center;
}

.dark .feature-card {
  background: #1a1a1a;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #316ac5;
  margin-bottom: 1rem;
}

.dark .feature-card h3 {
  color: #6b9fed;
}

.team {
  padding: 4rem 0;
  background: white;
}

.dark .team {
  background: #1a1a1a;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  color: #213547;
}

.dark .section-title {
  color: white;
}

.members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  justify-content: center;
}

.member-card {
  text-align: center;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.dark .member-card {
  background: #242424;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1rem;
}

.footer {
  padding: 3rem 0;
  background-color: #f0f0f0;
}

.dark .footer {
  background-color: #1a1a1a;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #316ac5;
}

.dark .footer-link:hover {
  color: #6b9fed;
}

.footer-copyright {
  margin-top: 2rem;
  font-size: 0.9rem;
  text-align: center;
  color: #666;
}

.dark .footer-copyright {
  color: #aaa;
}

/* 动画 */
@media (prefers-reduced-motion: no-preference) {
  .hero-illustration {
    animation: fade-in-up 0.8s ease;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式 */
@media (max-width: 768px) {
  .hero {
    padding: 4rem 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .button {
    width: 100%;
    text-align: center;
  }
}
</style>
