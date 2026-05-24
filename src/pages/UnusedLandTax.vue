<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធលើដីមិនប្រើប្រាស់ (Unused Land Tax)</h1>
        <p class="lead">
          ពន្ធនេះអនុវត្តលើដីដែលទុកចោលមិនអភិវឌ្ឍ ឬមិនប្រើប្រាស់ ក្នុងតំបន់ដែលច្បាប់កំណត់។
          គោលបំណងគឺលើកទឹកចិត្តឱ្យប្រើដីឱ្យមានប្រសិទ្ធភាព។
        </p>

        <h2>រូបមន្តគណនា</h2>
        <p>ពន្ធលើដីមិនប្រើប្រាស់ = តម្លៃដីជាប់ពន្ធ × អត្រាអនុវត្ត</p>
        <p>ចំណាំ៖ អត្រាអាចខុសគ្នាតាមតំបន់។</p>
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
