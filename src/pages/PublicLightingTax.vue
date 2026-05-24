<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>អាករសម្រាប់បំភ្លឺសាធារណៈ</h1>
        <p class="lead">
          អាករសម្រាប់បំភ្លឺសាធារណៈ (PLT) គឺជាអាករប្រយោលដែលប្រមូលលើទំនិញជាក់លាក់
          ដើម្បីគាំទ្រចំណាយបំភ្លឺសាធារណៈថ្នាក់ក្រោមជាតិ។
        </p>

        <h2>កម្មវត្ថុជាប់អាករ</h2>
        <ul>
          <li>ស្រា និងភេសជ្ជៈអាល់កុលមួយចំនួន</li>
          <li>ស្រាបៀរ</li>
          <li>បារី និងស៊ីហ្គា</li>
        </ul>

        <h2>ការលើកលែង (តាមឯកសារមេរៀន)</h2>
        <ul>
          <li>ស្រាផលិតលក្ខណៈគ្រួសារ</li>
          <li>ទឹកខ្មេះ</li>
          <li>ថ្នាំជក់វត្ថុធាតុដើម</li>
        </ul>

        <h2>អត្រា និងរូបមន្ត</h2>
        <ul>
          <li>អត្រា PLT = <strong>5%</strong></li>
          <li>អាករ PLT = មូលដ្ឋានគិតអាករ × 5%</li>
          <li>បើតម្លៃលក់រួម VAT និង PLT អាចប្រើរូបមន្តបញ្ច្រាសដើម្បីរកមូលដ្ឋានគិតអាករ</li>
        </ul>

        <h2>កាលកំណត់ប្រកាស និងបង់</h2>
        <p>ត្រូវប្រកាស និងបង់ប្រចាំខែ យ៉ាងយឺតត្រឹមថ្ងៃទី 20 នៃខែបន្ទាប់។</p>
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
