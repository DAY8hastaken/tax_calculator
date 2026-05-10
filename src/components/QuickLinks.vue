<template>
  <section class="quick-links">
    <div class="container">
      <h2 class="section-title">សេវាកម្មលឿនៗ</h2>
      <p class="section-subtitle">ស្វាគមន៍ដើម្បីសូត្របានបង្រៀនតម្លៃខ្ពស់មួយនៅលើកម្ពុជា</p>

      <div class="links-grid">
        <!-- VAT Card -->
        <div class="quick-link-card" :class="{ active: activeCard === 0 }" @click="activeCard = 0">
          <div class="card-icon">💵</div>
          <h3>អាករលើតម្លៃបន្ថែម</h3>
          <p>រៀនអំពីពន្ធលើតម្លៃបន្ថែម ការគណនា និងវិធាននីតិប្បញ្ញត្តិ</p>
          <div class="card-link">ស្វាគមន៍ →</div>
        </div>

        <!-- Salary Tax Card -->
        <div class="quick-link-card" :class="{ active: activeCard === 1 }" @click="activeCard = 1">
          <div class="card-icon">💼</div>
          <h3>ពន្ធលើប្រាក់បៀវត្ស</h3>
          <p>ស្វាគមន៍ការគណនាពន្ធលើប្រាក់បៀវត្សនិងច្បាប់ពន្ធនៅកម្ពុជា</p>
          <div class="card-link">ស្វាគមន៍ →</div>
        </div>

        <!-- Calculator Card -->
        <div class="quick-link-card" :class="{ active: activeCard === 2 }" @click="activeCard = 2">
          <div class="card-icon">🧮</div>
          <h3>គណនាពន្ធលឿន</h3>
          <p>ប្រើប្រាស់ឧបករណ៍គណនាពន្ធឯកទៃរបស់យើងដោយឥតគិតថ្លៃ</p>
          <div class="card-link">ចាប់ផ្ដើម →</div>
        </div>

        <!-- News Card -->
        <div class="quick-link-card" :class="{ active: activeCard === 3 }" @click="activeCard = 3">
          <div class="card-icon">📰</div>
          <h3>ព័ត៌មានពន្ធ</h3>
          <p>ស្វាគមន៍ព័ត៌មាននិងលទ្ធផលកម្ពុជាលក្ខណ៍ពន្ធថ្មីបំផុត</p>
          <div class="card-link">ស្វាគមន៍ →</div>
        </div>

        <!-- Documents Card -->
        <div class="quick-link-card" :class="{ active: activeCard === 4 }" @click="activeCard = 4">
          <div class="card-icon">📄</div>
          <h3>ឯកសារពន្ធ</h3>
          <p>ទាញយកឯកសារច្បាប់ពន្ធ ឧបករណ៍ និងគំរូពីមន្ទីរពន្ធ</p>
          <div class="card-link">ស្វាគមន៍ →</div>
        </div>

        <!-- FAQ Card -->
        <div class="quick-link-card" :class="{ active: activeCard === 5 }" @click="activeCard = 5">
          <div class="card-icon">❓</div>
          <h3>សំណួរ និងឆ្លើយ</h3>
          <p>ស្វាគមន៍ស្វែងយល់ពីសំណួរដែលគេសួរច្រើនបំផុត</p>
          <div class="card-link">ស្វាគមន៍ →</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeCard = ref(0)
</script>

<style scoped>
.quick-links {
  padding: 80px 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  font-size: 42px;
  font-weight: 900;
  text-align: center;
  color: #0f172a;
  margin-bottom: 12px;
}

.section-subtitle {
  text-align: center;
  font-size: 16px;
  color: #64748b;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.quick-link-card {
  background: white;
  padding: 32px 24px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(20, 184, 166, 0.1);
  position: relative;
  overflow: hidden;
}

.quick-link-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #0f766e, #14b8a6);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.quick-link-card:hover::before,
.quick-link-card.active::before {
  transform: scaleX(1);
}

.quick-link-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(15, 118, 110, 0.15);
  border-color: rgba(20, 184, 166, 0.3);
}

.card-icon {
  font-size: 42px;
  margin-bottom: 16px;
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

.quick-link-card:hover .card-icon {
  animation: float 1.5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.quick-link-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0f766e;
  margin-bottom: 12px;
}

.quick-link-card p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-link {
  color: #14b8a6;
  font-weight: 600;
  font-size: 14px;
  transition: transform 0.3s ease;
}

.quick-link-card:hover .card-link {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .quick-links {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 28px;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
