<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធកាត់ទុក (Withholding Tax)</h1>
        <p class="lead">
          ពន្ធកាត់ទុក គឺជាពន្ធដែលត្រូវកាត់នៅប្រភពពេលអ្នកជាប់ពន្ធនិវាសនជនទូទាត់ប្រាក់ឬវត្ថុ
          ទៅអោយអ្នកជាប់ពន្ធនិវាសនជន ឬអនិវាសនជន តាមអត្រាដែលច្បាប់កំណត់។
        </p>

        <h2>កម្មវត្ថុ និងមូលដ្ឋានគិតពន្ធ</h2>
        <ul>
          <li>យកលើការទូទាត់ជាសាច់ប្រាក់ ឬជាវត្ថុ</li>
          <li>មូលដ្ឋានគិតពន្ធ = ចំនួនទឹកប្រាក់ទូទាត់ជាក់ស្តែង</li>
          <li>ចំណាយដែលបានកត់ត្រាក្នុងបញ្ជីគណនេយ្យ ត្រូវចាត់ទុកថាបានទូទាត់</li>
        </ul>

        <h2>អត្រាពន្ធ (ចំពោះនិវាសនជន)</h2>
        <ul>
          <li>សេវាកម្ម៖ <strong>15%</strong></li>
          <li>សួយសារ៖ <strong>15%</strong></li>
          <li>ការប្រាក់ (ករណីទូទៅ)៖ <strong>15%</strong></li>
          <li>ថ្លៃជួលចលន/អចលនទ្រព្យ៖ <strong>10%</strong></li>
          <li>ការប្រាក់បង់ដោយធនាគារក្នុងស្រុក៖ <strong>6%</strong> (គណនីសន្សំមានកាលកំណត់), <strong>4%</strong> (គណនីសន្សំគ្មានកាលកំណត់)</li>
        </ul>

        <h2>អត្រាពន្ធ (ចំពោះអនិវាសនជន)</h2>
        <p>ការទូទាត់ប្រាក់ចំណូលប្រភពកម្ពុជា ទៅអនិវាសនជន អនុវត្តអត្រា <strong>14%</strong> (តាមករណីច្បាប់កំណត់)។</p>

        <h2>ករណីលើកលែងសំខាន់ៗ</h2>
        <ul>
          <li>ការទូទាត់មួយចំនួនទៅធនាគារក្នុងស្រុកដែលមានច្បាប់អនុញ្ញាត</li>
          <li>ប្រាក់ចំណូលដែលជាប់ពន្ធប្រាក់បៀវត្ស ឬអត្ថប្រយោជន៍បន្ថែមរួចហើយ</li>
          <li>ករណីពិសេសផ្សេងៗតាមប្រកាស/សេចក្តីណែនាំ</li>
        </ul>

        <h2>កាតព្វកិច្ចប្រកាស និងបង់</h2>
        <p>ត្រូវប្រកាស និងបង់ពន្ធកាត់ទុកប្រចាំខែ យ៉ាងយឺតត្រឹមថ្ងៃទី <strong>20</strong> នៃខែបន្ទាប់។</p>
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
