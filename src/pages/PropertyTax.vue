<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធលើអចលនទ្រព្យ (Property Tax)</h1>
        <p class="lead">
          ពន្ធលើអចលនទ្រព្យ គឺជាពន្ធប្រចាំឆ្នាំលើដី និងអគារនៅកម្ពុជា។
          ជាទូទៅ អត្រាគោលគឺ 0.1% លើតម្លៃជាប់ពន្ធបន្ទាប់ពីកាត់លើកលែង។
        </p>

        <h2>រូបមន្តគណនា</h2>
        <p>(តម្លៃអចលនទ្រព្យ − តម្លៃលើកលែង) × 0.1%</p>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page { width: 100%; overflow-x: hidden; background: #ffffff; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.tax-section { padding: 56px 0; }
h1 { color: #0f766e; font-size: 34px; margin-bottom: 14px; }
.lead { color: #334155; line-height: 1.9; margin-bottom: 20px; }
h2 { color: #0f172a; margin: 18px 0 10px; font-size: 24px; }
p, li { color: #334155; line-height: 1.9; }
ul { padding-left: 22px; }
</style>
