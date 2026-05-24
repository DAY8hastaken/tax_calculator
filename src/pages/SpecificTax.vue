<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>អាករពិសេស (Specific Tax)</h1>
        <p class="lead">
          អាករពិសេស គឺជាអាករលើទំនិញ និងសេវាមួយចំនួន ដែលមិនលើកទឹកចិត្តឱ្យប្រើប្រាស់ច្រើន
          ឬជាទំនិញ/សេវាមានលក្ខណៈប្រណិត។
        </p>

        <h2>ទំនិញជាប់អាករ និងអត្រា</h2>
        <ul>
          <li>សុរា/ស្រា៖ <strong>35%</strong></li>
          <li>ស្រាបៀរ៖ <strong>30%</strong></li>
          <li>បារី៖ <strong>20%</strong></li>
          <li>ស៊ីហ្គា៖ <strong>25%</strong></li>
          <li>ភេសជ្ជៈ៖ <strong>10%</strong></li>
          <li>ស៊ីម៉ង់ត៍៖ <strong>5%</strong></li>
        </ul>

        <h2>សេវាជាប់អាករ និងអត្រា</h2>
        <ul>
          <li>សេវាដឹកជញ្ជូនតាមអាកាស៖ <strong>10%</strong></li>
          <li>សេវាកម្សាន្ត៖ <strong>10%</strong></li>
          <li>សេវាទូរគមនាគមន៍៖ <strong>3%</strong></li>
        </ul>

        <h2>រូបមន្តគណនា</h2>
        <p>អាករពិសេស = មូលដ្ឋានគិតអាករ × អត្រាអាករ</p>

        <h2>សមត្ថកិច្ចគ្រប់គ្រង</h2>
        <ul>
          <li>ទំនិញផលិតក្នុងស្រុក និងសេវាក្នុងស្រុក៖ អគ្គនាយកដ្ឋានពន្ធដារ (GDT)</li>
          <li>ទំនិញនាំចូល៖ អគ្គនាយកដ្ឋានគយ និងរដ្ឋាករ</li>
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
