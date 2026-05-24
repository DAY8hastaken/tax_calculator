<template>
  <div class="page">
    <Navbar />

    <section class="study-intro">
      <div class="container">
        <span class="badge">Learning Hub</span>
        <h1>រៀនពីពន្ធនៅកម្ពុជា (Professional Guide)</h1>
        <p class="lead">
          ផ្នែកនេះរៀបចំសម្រាប់បុគ្គលិកគណនេយ្យ ម្ចាស់អាជីវកម្ម និងនិស្សិតដែលចង់យល់ប្រព័ន្ធពន្ធដារកម្ពុជា
          ឲ្យបានច្បាស់ ជាប្រព័ន្ធ និងអាចយកទៅអនុវត្តពិត។
        </p>

        <div class="roadmap">
          <div class="step">
            <div class="num">1</div>
            <div>
              <h3>យល់ពីមូលដ្ឋានពន្ធ</h3>
              <p>សិក្សានិយមន័យ, ប្រព័ន្ធស្វ័យប្រកាស, ប្រភេទអ្នកជាប់ពន្ធ និងភារកិច្ចតាមច្បាប់។</p>
            </div>
          </div>
          <div class="step">
            <div class="num">2</div>
            <div>
              <h3>រៀនតាមប្រភេទពន្ធ</h3>
              <p>ចាប់ពី VAT, ពន្ធលើប្រាក់បៀវត្ស, ពន្ធបង់ជាមុន, ពន្ធកាត់ទុក រហូតដល់ពន្ធអចលនទ្រព្យ។</p>
            </div>
          </div>
          <div class="step">
            <div class="num">3</div>
            <div>
              <h3>អនុវត្តគណនា និងផ្ទៀងផ្ទាត់</h3>
              <p>ប្រើម៉ាស៊ីនគណនាពន្ធ 12 ប្រភេទ ដើម្បីបង្កើនភាពត្រឹមត្រូវមុនដាក់ប្រកាសពន្ធ។</p>
            </div>
          </div>
        </div>

        <div class="professional-grid">
          <article class="pro-card">
            <h3>ថ្ងៃកំណត់សំខាន់ៗ</h3>
            <ul>
              <li>ប្រកាស/បង់ពន្ធប្រចាំខែ៖ មុនឬត្រឹមថ្ងៃទី 20 ខែបន្ទាប់</li>
              <li>ពន្ធប៉ាតង់ប្រចាំឆ្នាំ៖ មុនឬត្រឹមថ្ងៃទី 31 មីនា</li>
              <li>TOI ប្រចាំឆ្នាំ៖ មុនឬត្រឹមថ្ងៃទី 31 មីនា ឆ្នាំបន្ទាប់</li>
            </ul>
          </article>

          <article class="pro-card">
            <h3>Checklist មុនដាក់ប្រកាស</h3>
            <ul>
              <li>ពិនិត្យវិក្កយបត្រទិញ-លក់ និងឯកសារគាំទ្រ</li>
              <li>ផ្ទៀងផ្ទាត់ Output/Input Tax និង WHT</li>
              <li>ពិនិត្យអត្រាពន្ធដែលអនុវត្តចុងក្រោយ</li>
              <li>រក្សាទុកឯកសារឌីជីថល និងឯកសាររឹង</li>
            </ul>
          </article>

          <article class="pro-card">
            <h3>ហានិភ័យត្រូវប្រុងប្រយ័ត្ន</h3>
            <ul>
              <li>ដាក់ប្រកាសយឺតអាចមានការផាកពិន័យ និងការប្រាក់</li>
              <li>គណនាមូលដ្ឋានពន្ធខុសអាចនាំឱ្យបង់ខ្វះ</li>
              <li>ខ្វះឯកសារគាំទ្រអាចប៉ះពាល់ពេលសវនកម្ម</li>
            </ul>
          </article>
        </div>

        <div class="study-actions">
          <RouterLink to="/tax-types/general">មើលមេរៀនពន្ធទូទៅ</RouterLink>
          <RouterLink to="/tax-types/vat">ចាប់ផ្តើមពី VAT</RouterLink>
          <RouterLink to="/tax-calculator">បើកគ្រប់ម៉ាស៊ីនគណនា</RouterLink>
        </div>
      </div>
    </section>

    <WhyTaxMatters />
    <LearnCambodianTax />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import WhyTaxMatters from '../components/WhyTaxMatters.vue'
import LearnCambodianTax from '../components/LearnCambodianTax.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}

.study-intro {
  padding: 64px 0;
  background: linear-gradient(135deg, #ecfeff 0%, #f8fafc 50%, #ffffff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.badge {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(20, 184, 166, 0.14);
  border: 1px solid rgba(15, 118, 110, 0.2);
  color: #0f766e;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.study-intro h1 {
  font-size: 44px;
  color: #0f172a;
  margin: 12px 0;
}

.lead {
  color: #475569;
  line-height: 1.9;
  max-width: 980px;
}

.roadmap {
  margin-top: 28px;
  display: grid;
  gap: 14px;
}

.step {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 12px;
  background: #ffffff;
  border: 1px solid rgba(15, 118, 110, 0.2);
  border-radius: 14px;
  padding: 14px;
}

.num {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

.step h3 {
  margin: 0 0 6px;
  color: #0f766e;
}

.step p {
  margin: 0;
  color: #475569;
  line-height: 1.8;
}

.professional-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.pro-card {
  background: #ffffff;
  border: 1px solid rgba(15, 118, 110, 0.16);
  border-radius: 14px;
  padding: 14px;
}

.pro-card h3 {
  margin: 0 0 8px;
  color: #0f766e;
  font-size: 18px;
}

.pro-card ul {
  margin: 0;
  padding-left: 18px;
}

.pro-card li {
  color: #334155;
  line-height: 1.8;
  font-size: 14px;
}

.study-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.study-actions a {
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 700;
}

.study-actions a:first-child {
  background: #0f766e;
  color: #fff;
}

.study-actions a:nth-child(2),
.study-actions a:nth-child(3) {
  border: 1px solid #0f766e;
  color: #0f766e;
  background: #fff;
}

@media (max-width: 768px) {
  .study-intro h1 {
    font-size: 32px;
  }

  .professional-grid {
    grid-template-columns: 1fr;
  }

  .step {
    grid-template-columns: 1fr;
  }
}
</style>
