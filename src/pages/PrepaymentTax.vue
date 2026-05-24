<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធបង់ជាមុន</h1>
        <p class="lead">
          ពន្ធបង់ជាមុន (Prepayment Tax) គឺជាការបង់ពន្ធប្រចាំខែជាមុន លើពន្ធលើប្រាក់ចំណូល (TOI)។
          ចំនួនទឹកប្រាក់ដែលបានបង់ជាមុន នឹងត្រូវយកទៅកាត់កងនៅពេលទូទាត់ពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំ។
        </p>

        <h2>ចំណុចសំខាន់</h2>
        <ul>
          <li>អត្រាពន្ធសម្រាប់ម៉ូឌុលនេះ៖ <strong>1%</strong></li>
          <li>គណនាតាមផរបរគិតរួម (turnover) មិនមែនចំណេញសុទ្ធ</li>
          <li>ប្រកាស និងបង់ពន្ធ៖ ចាប់ពីថ្ងៃទី 1 ដល់ថ្ងៃទី 20 នៃខែបន្ទាប់</li>
        </ul>

        <h2>អ្នកណាត្រូវបង់</h2>
        <p>
          សហគ្រាសជាប់ពន្ធលើប្រាក់ចំណូល (របបពិត) រួមទាំងគម្រោងវិនិយោគដែលមានលក្ខណៈសម្បត្តិ
          ត្រូវបង់ពន្ធបង់ជាមុនប្រចាំខែ លើកលែងករណីទទួលបានការលើកទឹកចិត្ត/អនុគ្រោះតាមបទប្បញ្ញត្តិ។
        </p>

        <h2>ការលើកលែង និងអនុគ្រោះ</h2>
        <p>
          គម្រោងវិនិយោគមានលក្ខណៈសម្បត្តិ (QIP) ដែលទទួលបានការលើកទឹកចិត្តពន្ធលើប្រាក់ចំណូល
          អាចមានការលើកលែងពន្ធបង់ជាមុនតាមលក្ខខណ្ឌជាក់លាក់។
        </p>

        <h2>មូលដ្ឋានគិតពន្ធ និងរូបមន្ត</h2>
        <ul>
          <li>ករណីផរបររួមបញ្ចូល VAT៖ មូលដ្ឋានគិតពន្ធ = ផរបររួម / 1.1</li>
          <li>ករណីផរបរមិនបញ្ចូល VAT៖ មូលដ្ឋានគិតពន្ធ = ផរបររួម</li>
          <li>ពន្ធបង់ជាមុន = មូលដ្ឋានគិតពន្ធ × 1%</li>
        </ul>

        <h2>ទម្រង់ និងការដាក់ប្រកាស</h2>
        <ul>
          <li>ប្រើទម្រង់ <strong>P701</strong> (កណ្តាល/សាខាតាមករណី)</li>
          <li>ដាក់ប្រកាសតាមសាខាពន្ធដារ ឬប្រព័ន្ធអនឡាញ (E-filing)</li>
        </ul>

        <h2>ឧទាហរណ៍ខ្លី</h2>
        <p>
          បើផរបររួម (រួម VAT) = 11,000 ដុល្លារ នោះមូលដ្ឋានគិតពន្ធ = 11,000 / 1.1 = 10,000 ដុល្លារ
          ហើយពន្ធបង់ជាមុន = 10,000 × 1% = 100 ដុល្លារ។
        </p>
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
