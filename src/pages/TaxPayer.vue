<template>
  <div class="page">
    <Navbar />
    <section class="more-info">
      <div class="container">
        <h2>ព័ត៌មានបន្ថែមពីអគ្គនាយកដ្ឋានពន្ធដារ</h2>
        <p class="subtitle">
          ជ្រើសរើសប្រធានបទដែលអ្នកចង់អានបន្ថែម ហើយចុចលើតំណភ្ជាប់ខាងក្រោម។
        </p>

        <div class="link-grid">
          <a class="topic-card" href="https://www.tax.gov.kh/kh/tax-payer" target="_blank" rel="noopener noreferrer">
            <h3>អ្នកជាប់ពន្ធ</h3>
            <p>ព័ត៌មានសម្រាប់ប្រជាពលរដ្ឋ អ្នកជាប់ពន្ធតូច មធ្យម និងធំ។</p>
          </a>

          <a class="topic-card" href="https://www.tax.gov.kh/kh/tax-types-briefly" target="_blank" rel="noopener noreferrer">
            <h3>ប្រភេទពន្ធដោយសង្ខេប</h3>
            <p>មើលសង្ខេបប្រភេទពន្ធសំខាន់ៗ និងការអនុវត្ត។</p>
          </a>

          <a class="topic-card" href="https://www.tax.gov.kh/kh/e-service" target="_blank" rel="noopener noreferrer">
            <h3>សេវាកម្មអេឡិចត្រូនិកពន្ធដារ</h3>
            <p>ចូលប្រើសេវា e-Filing និងសេវាអនឡាញពាក់ព័ន្ធពន្ធដារ។</p>
          </a>

          <a class="topic-card" href="https://www.tax.gov.kh/kh/faq" target="_blank" rel="noopener noreferrer">
            <h3>សំណួរ-ចម្លើយ</h3>
            <p>សំណួរដែលគេតែងសួរ និងចម្លើយផ្លូវការពី GDT។</p>
          </a>

          <a class="topic-card" href="https://www.tax.gov.kh/kh/document-form" target="_blank" rel="noopener noreferrer">
            <h3>ទាញយកឯកសារ</h3>
            <p>ទម្រង់ និងឯកសារផ្លូវការសម្រាប់ប្រើប្រាស់ក្នុងការបង់ពន្ធ។</p>
          </a>

          <a class="topic-card" href="https://www.tax.gov.kh/kh/law" target="_blank" rel="noopener noreferrer">
            <h3>ច្បាប់ និងបទប្បញ្ញត្តិ</h3>
            <p>ឯកសារច្បាប់ អនុក្រឹត្យ ប្រកាស និងសេចក្តីណែនាំថ្មីៗ។</p>
          </a>

          <a class="topic-card" href="https://www.tax.gov.kh/kh/contact" target="_blank" rel="noopener noreferrer">
            <h3>ទំនាក់ទំនងសាខាពន្ធដារ</h3>
            <p>ព័ត៌មានទំនាក់ទំនងសាខាពន្ធដារខេត្ត-ខណ្ឌ និងបណ្តាញជំនួយ។</p>
          </a>
        </div>
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
.page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}

.more-info {
  padding: 64px 0;
  background: #f8fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  color: #0f766e;
  font-size: 34px;
  margin-bottom: 10px;
}

.subtitle {
  color: #334155;
  line-height: 1.8;
  margin-bottom: 28px;
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.topic-card {
  display: block;
  text-decoration: none;
  background: #ffffff;
  border: 1px solid rgba(20, 184, 166, 0.18);
  border-radius: 14px;
  padding: 18px;
  transition: all 0.2s ease;
}

.topic-card h3 {
  color: #0f766e;
  margin: 0 0 8px;
  font-size: 20px;
}

.topic-card p {
  color: #475569;
  margin: 0;
  line-height: 1.7;
}

.topic-card:hover {
  transform: translateY(-2px);
  border-color: #14b8a6;
  box-shadow: 0 10px 24px rgba(15, 118, 110, 0.12);
}
</style>
