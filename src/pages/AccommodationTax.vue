<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>អាករលើការស្នាក់នៅ</h1>
        <p class="lead">
          អាករលើការស្នាក់នៅ (Accommodation Tax) អនុវត្តលើសេវាស្នាក់នៅក្នុងសណ្ឋាគារ
          និងមូលដ្ឋានស្នាក់នៅជាប់ពន្ធរបបស្វ័យប្រកាស។
        </p>

        <h2>កម្មវត្ថុ</h2>
        <ul>
          <li>សេវាស្នាក់នៅ (បន្ទប់ស្នាក់នៅ) និងបន្ទុកសេវាពាក់ព័ន្ធ</li>
          <li>មិនផ្តោតលើចំណូលអាហារ/ភេសជ្ជៈសុទ្ធដោយឡែកទេ</li>
        </ul>

        <h2>អត្រា និងមូលដ្ឋានគិតអាករ</h2>
        <ul>
          <li>អត្រា = <strong>2%</strong></li>
          <li>អាករលើការស្នាក់នៅ = មូលដ្ឋានគិតអាករ × 2%</li>
          <li>បើតម្លៃរួម VAT និងអាករ ត្រូវបំបែកមូលដ្ឋានគិតអាករតាមរូបមន្តបញ្ច្រាស</li>
        </ul>

        <h2>កាលកំណត់ប្រកាស និងបង់</h2>
        <p>ប្រកាស និងបង់ប្រចាំខែ យ៉ាងយឺតត្រឹមថ្ងៃទី 20 នៃខែបន្ទាប់។</p>
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
