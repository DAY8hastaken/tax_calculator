<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>អាករលើតម្លៃបន្ថែម (VAT)</h1>
        <p class="desc">
          VAT គឺជាពន្ធលើការលក់ទំនិញ និងសេវាកម្ម។ អាជីវកម្មដែលបានចុះបញ្ជី VAT
          ត្រូវបន្ថែម VAT លើវិក្កយបត្រ និងដាក់របាយការណ៍ជាប្រចាំ។
        </p>
        <ul>
          <li>អត្រាស្តង់ដារ: 10%</li>
          <li>ត្រូវចេញវិក្កយបត្រពន្ធឱ្យត្រឹមត្រូវ</li>
          <li>ត្រូវដាក់សេចក្តីប្រកាសពន្ធតាមកាលកំណត់</li>
          <li>អាចទាមទារឥណទាន VAT ចូលតាមលក្ខខណ្ឌច្បាប់</li>
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
