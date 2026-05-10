<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធលើប្រាក់បៀវត្ស</h1>
        <p class="desc">
          ពន្ធលើប្រាក់បៀវត្សគឺជាពន្ធដែលគណនាពីប្រាក់ឈ្នួលបុគ្គលិក។
          និយោជកមានភារកិច្ចកាត់ទុកពន្ធ និងបង់ជូនអគ្គនាយកដ្ឋានពន្ធដារ។
        </p>
        <ul>
          <li>គណនាពន្ធតាមកម្រិតប្រាក់បៀវត្ស</li>
          <li>កាត់ពន្ធប្រចាំខែពីបុគ្គលិក</li>
          <li>ដាក់របាយការណ៍ និងបង់ពន្ធតាមថ្ងៃកំណត់</li>
          <li>រក្សាទុកបញ្ជីបើកប្រាក់ខែឱ្យបានត្រឹមត្រូវ</li>
        </ul>
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
.desc { color: #334155; line-height: 1.8; margin-bottom: 14px; }
ul { margin: 0; padding-left: 20px; color: #0f172a; line-height: 1.9; }
</style>
