<template>
  <div class="page">
    <Navbar />

    <section class="intro">
      <div class="container">
        <h1>ប្រភេទពន្ធសំខាន់ៗនៅកម្ពុជា</h1>
        <p>
          ទំព័រនេះបង្ហាញព័ត៌មានលម្អិតអំពីពន្ធសំខាន់ៗ ៤ ប្រភេទ៖
          អាករលើតម្លៃបន្ថែម (VAT), ពន្ធលើប្រាក់បៀវត្ស, ពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំ, និងពន្ធលើប្រាក់ចំណូលអាជីវកម្ម។
        </p>
      </div>
    </section>

    <section id="vat" class="tax-section">
      <div class="container">
        <h2>អាករលើតម្លៃបន្ថែម (VAT)</h2>
        <p class="desc">
          VAT គឺជាពន្ធលើការលក់ទំនិញ និងសេវាកម្ម។ អាជីវកម្មដែលបានចុះបញ្ជី VAT
          ត្រូវបន្ថែម VAT លើវិក្កយបត្រ និងដាក់របាយការណ៍ជាប្រចាំ។
        </p>
        <ul>
          <li>អត្រាស្តង់ដារ: 10%</li>
          <li>ត្រូវចេញវិក្កយបត្រពន្ធឱ្យត្រឹមត្រូវ</li>
          <li>ត្រូវដាក់សេចក្តីប្រកាសពន្ធតាមកាលកំណត់</li>
        </ul>
      </div>
    </section>

    <section id="salary-tax" class="tax-section alt">
      <div class="container">
        <h2>ពន្ធលើប្រាក់បៀវត្ស</h2>
        <p class="desc">
          ពន្ធលើប្រាក់បៀវត្សគឺជាពន្ធដែលគណនាពីប្រាក់ឈ្នួលបុគ្គលិក។
          និយោជកមានភារកិច្ចកាត់ទុកពន្ធ និងបង់ជូនអគ្គនាយកដ្ឋានពន្ធដារ។
        </p>
        <ul>
          <li>គណនាពន្ធតាមកម្រិតប្រាក់បៀវត្ស</li>
          <li>កាត់ពន្ធប្រចាំខែពីបុគ្គលិក</li>
          <li>ដាក់របាយការណ៍ និងបង់ពន្ធតាមថ្ងៃកំណត់</li>
        </ul>
      </div>
    </section>

    <section id="business-tax" class="tax-section">
      <div class="container">
        <h2>ពន្ធលើប្រាក់ចំណូលអាជីវកម្ម</h2>
        <p class="desc">
          ពន្ធនេះគិតលើប្រាក់ចំណេញសុទ្ធរបស់សហគ្រាស បន្ទាប់ពីដកចំណាយអនុញ្ញាត។
          អាជីវកម្មត្រូវរៀបចំបញ្ជីគណនេយ្យ និងឯកសារគាំទ្រឱ្យបានត្រឹមត្រូវ។
        </p>
        <ul>
          <li>គណនាលើប្រាក់ចំណេញសុទ្ធប្រចាំឆ្នាំ</li>
          <li>រក្សាទុកឯកសារគណនេយ្យ និងវិក្កយបត្រ</li>
          <li>បង់ពន្ធតាមច្បាប់ និងបទប្បញ្ញត្តិពន្ធដារ</li>
        </ul>
      </div>
    </section>

    <section id="income-tax" class="tax-section alt">
      <div class="container">
        <h2>ពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំ</h2>
        <p class="desc">
          ពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំអនុវត្តលើប្រាក់ចំណេញជាប់ពន្ធរបស់រូបវន្តបុគ្គល សហគ្រាសឯករូប និងចំណែកដែលមិនត្រូវបានចាត់ទុកជានីតិបុគ្គល។
          តារាងអត្រាពន្ធឡើងតាមជួរ ចាប់ពី 0% ដល់ 20% ហើយករណីពិសេសមួយចំនួនអាចអនុវត្ត 30% ឬ 0%។
        </p>
        <ul>
          <li>0% ដល់ 18,000,000៛</li>
          <li>18,000,001៛ ដល់ 24,000,000៛ = 5%</li>
          <li>24,000,001៛ ដល់ 102,000,000៛ = 10%</li>
          <li>102,000,001៛ ដល់ 150,000,000៛ = 15%</li>
          <li>លើស 150,000,000៛ = 20%</li>
          <li>ប្រេងកាត/ធនធានធម្មជាតិ = 30%, QIP ក្នុងរយៈពេលលើកលែង = 0%</li>
        </ul>
      </div>
    </section>

    <TaxFeatures />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import TaxFeatures from '../components/TaxFeatures.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.intro {
  padding: 56px 0 30px;
  background: #f0fdfa;
}

.intro h1 {
  font-size: 36px;
  color: #0f766e;
  margin-bottom: 12px;
}

.intro p {
  color: #334155;
  line-height: 1.8;
  max-width: 900px;
}

.tax-section {
  padding: 52px 0;
  scroll-margin-top: 96px;
}

.tax-section.alt {
  background: #f8fafc;
}

.tax-section h2 {
  color: #0f766e;
  font-size: 30px;
  margin-bottom: 12px;
}

.desc {
  color: #334155;
  line-height: 1.8;
  margin-bottom: 14px;
}

.tax-section ul {
  margin: 0;
  padding-left: 20px;
  color: #0f172a;
  line-height: 1.9;
}
</style>
