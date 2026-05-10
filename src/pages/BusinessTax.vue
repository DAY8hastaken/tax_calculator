<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធលើប្រាក់ចំណូលអាជីវកម្ម</h1>
        <p class="desc">
          ពន្ធនេះគិតលើប្រាក់ចំណេញសុទ្ធរបស់សហគ្រាស បន្ទាប់ពីដកចំណាយអនុញ្ញាត។
          អាជីវកម្មត្រូវរៀបចំបញ្ជីគណនេយ្យ និងឯកសារគាំទ្រឱ្យបានត្រឹមត្រូវ។
        </p>
        <ul>
          <li>គណនាលើប្រាក់ចំណេញសុទ្ធប្រចាំឆ្នាំ</li>
          <li>រក្សាទុកឯកសារគណនេយ្យ និងវិក្កយបត្រ</li>
          <li>បង់ពន្ធតាមច្បាប់ និងបទប្បញ្ញត្តិពន្ធដារ</li>
          <li>ត្រៀមឯកសារសម្រាប់សវនកម្មពន្ធ</li>
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
