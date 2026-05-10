<template>
  <section class="learn-cambodian-tax">
    <div class="container">
      <div class="section-title">
        <h2>រៀនពន្ធកម្ពុជា</h2>
        <p class="subtitle">សិក្សាប្រភេទពន្ធសំខាន់ៗ និងលក្ខខណ្ឌអនុវត្ត</p>
      </div>

      <div class="tax-cards-grid">
        <div
          v-for="(tax, index) in taxTypes"
          :key="index"
          class="tax-card"
          @mouseenter="activeTaxCard = index"
          @mouseleave="activeTaxCard = -1"
        >
          <div class="card-header">
            <div class="tax-icon">{{ tax.icon }}</div>
            <div class="card-number">{{ String(index + 1).padStart(2, '0') }}</div>
          </div>

          <h3>{{ tax.title }}</h3>
          <p class="khmer-title">{{ tax.khmerTitle }}</p>
          <p class="description">{{ tax.description }}</p>

          <div class="tax-details">
            <div class="detail-row">
              <span class="label">អត្រាពន្ធ:</span>
              <span class="value">{{ tax.rate }}</span>
            </div>
            <div class="detail-row">
              <span class="label">អនុវត្តលើ:</span>
              <span class="value">{{ tax.appliesTo }}</span>
            </div>
          </div>

          <button class="learn-btn" @click="goToDetail(tax.path)">មើលលម្អិត →</button>
          <div class="card-highlight"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeTaxCard = ref(-1)
const router = useRouter()

const goToDetail = (path: string) => {
  router.push(path)
}

const taxTypes = [
  {
    icon: '📦',
    title: 'VAT',
    khmerTitle: 'អាករលើតម្លៃបន្ថែម',
    description: 'អាករលើតម្លៃបន្ថែមអនុវត្តលើទំនិញ និងសេវាកម្ម។ អាជីវកម្មចុះបញ្ជីត្រូវគិត VAT លើការលក់ និងដាក់ប្រកាសជាប្រចាំ។',
    rate: '10% / 5% / 0%',
    appliesTo: 'ទំនិញ និងសេវាកម្ម',
    path: '/tax-types/vat'
  },
  {
    icon: '💰',
    title: 'Salary Tax',
    khmerTitle: 'ពន្ធលើប្រាក់បៀវត្ស',
    description: 'ពន្ធលើប្រាក់បៀវត្សគិតលើប្រាក់ខែបុគ្គលិក។ និយោជកត្រូវកាត់ទុក និងបង់ពន្ធជំនួសបុគ្គលិកតាមច្បាប់។',
    rate: '20% (តាមលក្ខខណ្ឌ)',
    appliesTo: 'ប្រាក់ខែ និងប្រាក់ឈ្នួល',
    path: '/tax-types/salary'
  },
  {
    icon: '⏳',
    title: 'Prepayment Tax',
    khmerTitle: 'ពន្ធបង់ជាមុន',
    description: 'អាជីវកម្មខ្លះត្រូវបង់ពន្ធជាមុនលើចំណូល ដើម្បីធានាការបង់ពន្ធទាន់ពេល និងត្រឹមត្រូវ។',
    rate: '1% - 1.5%',
    appliesTo: 'ចំណូលអាជីវកម្ម',
    path: '/tax-types/prepayment'
  },
  {
    icon: '💡',
    title: 'Public Lighting Tax',
    khmerTitle: 'ពន្ធភ្លើងសាធារណៈ',
    description: 'ពន្ធនេះគាំទ្រការថែទាំប្រព័ន្ធភ្លើងសាធារណៈ និងហេដ្ឋារចនាសម្ព័ន្ធពាក់ព័ន្ធ។',
    rate: '0.5% - 1%',
    appliesTo: 'ទ្រព្យសម្បត្តិ និងសកម្មភាពពាណិជ្ជកម្មខ្លះ',
    path: '/tax-types/public-lighting'
  },
  {
    icon: '🏢',
    title: 'Business Income Tax',
    khmerTitle: 'ពន្ធលើប្រាក់ចំណូលអាជីវកម្ម',
    description: 'អាជីវកម្មត្រូវបង់ពន្ធលើប្រាក់ចំណេញសុទ្ធ បន្ទាប់ពីដកចំណាយអនុញ្ញាត។',
    rate: '20% / 9%',
    appliesTo: 'ប្រាក់ចំណេញសុទ្ធ',
    path: '/tax-types/business'
  },
  {
    icon: '📋',
    title: 'General Taxation',
    khmerTitle: 'ពន្ធទូទៅ',
    description: 'ក្របខណ្ឌពន្ធទូទៅរួមបញ្ចូលប្រភេទពន្ធជាច្រើនដែលពាក់ព័ន្ធនឹងបុគ្គល និងអាជីវកម្ម។',
    rate: 'អាស្រ័យលើប្រភេទពន្ធ',
    appliesTo: 'បុគ្គល និងអាជីវកម្ម',
    path: '/tax-types/general'
  }
]
</script>

<style scoped>
.learn-cambodian-tax { padding: 100px 20px; background: #ffffff; }
.container { max-width: 1200px; margin: 0 auto; }
.section-title { text-align: center; margin-bottom: 60px; }
.section-title h2 { font-size: 48px; font-weight: 900; background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 10px; }
.subtitle { font-size: 18px; color: #64748b; font-weight: 500; }
.tax-cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 30px; margin-bottom: 20px; }
.tax-card { background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border-radius: 16px; padding: 30px; border: 2px solid rgba(15, 118, 110, 0.1); position: relative; overflow: hidden; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.tax-card:hover { transform: translateY(-8px); border-color: rgba(15, 118, 110, 0.3); box-shadow: 0 20px 50px rgba(15, 118, 110, 0.15); background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%); }
.card-highlight { position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #0f766e 0%, #14b8a6 100%); transform: scaleX(0); transition: transform 0.3s ease; }
.tax-card:hover .card-highlight { transform: scaleX(1); }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.tax-icon { font-size: 48px; }
.card-number { font-size: 32px; font-weight: 900; color: rgba(15, 118, 110, 0.1); }
.tax-card h3 { font-size: 24px; font-weight: 800; color: #0f766e; margin-bottom: 5px; }
.khmer-title { font-size: 14px; color: #14b8a6; font-weight: 600; margin-bottom: 15px; }
.description { font-size: 14px; color: #64748b; line-height: 1.7; margin-bottom: 20px; }
.tax-details { background: rgba(15, 118, 110, 0.05); border-radius: 10px; padding: 15px; margin-bottom: 20px; }
.detail-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; font-size: 13px; }
.detail-row:last-child { margin-bottom: 0; }
.detail-row .label { color: #64748b; font-weight: 600; }
.detail-row .value { color: #0f766e; font-weight: 700; text-align: right; max-width: 60%; }
.learn-btn { width: 100%; border: none; padding: 14px; border-radius: 10px; background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); color: white; font-size: 17px; font-weight: 700; cursor: pointer; }
</style>
