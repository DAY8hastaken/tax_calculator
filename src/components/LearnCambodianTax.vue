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
            <div class="tax-icon"><component :is="tax.icon" /></div>
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
import {
  Building2,
  ClipboardList,
  House,
  Hotel,
  Hourglass,
  Lightbulb,
  Package,
  Receipt,
  ScrollText,
  Scissors,
  Tags,
  Wallet,
  Wheat,
} from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeTaxCard = ref(-1)
const router = useRouter()

const goToDetail = (path: string) => {
  router.push(path)
}

const taxTypes = [
  {
    icon: Package,
    title: 'VAT',
    khmerTitle: 'អាករលើតម្លៃបន្ថែម',
    description: 'អាករលើតម្លៃបន្ថែមអនុវត្តលើទំនិញ និងសេវាកម្ម។ អាជីវកម្មចុះបញ្ជីត្រូវគិត VAT លើការលក់ និងដាក់ប្រកាសជាប្រចាំ។',
    rate: '10% / 0%',
    appliesTo: 'ទំនិញ និងសេវាកម្ម',
    path: '/tax-types/vat'
  },
  {
    icon: Wallet,
    title: 'Salary Tax',
    khmerTitle: 'ពន្ធលើប្រាក់បៀវត្ស',
    description: 'ពន្ធលើប្រាក់បៀវត្សគិតលើប្រាក់ខែបុគ្គលិក។ និយោជកត្រូវកាត់ទុក និងបង់ពន្ធជំនួសបុគ្គលិកតាមច្បាប់។',
    rate: '0% - 20%',
    appliesTo: 'ប្រាក់ខែ និងប្រាក់ឈ្នួល',
    path: '/tax-types/salary'
  },
  {
    icon: Hourglass,
    title: 'Prepayment Tax',
    khmerTitle: 'ពន្ធលើប្រាក់ចំណូលបង់ជាមុន',
    description: 'អាជីវកម្មខ្លះត្រូវបង់ពន្ធជាមុនលើចំណូល ដើម្បីធានាការបង់ពន្ធទាន់ពេល និងត្រឹមត្រូវ។',
    rate: '1%',
    appliesTo: 'ចំណូលអាជីវកម្ម',
    path: '/tax-types/prepayment'
  },
  {
    icon: Scissors,
    title: 'Withholding Tax',
    khmerTitle: 'ពន្ធកាត់ទុក',
    description: 'ពន្ធកាត់ទុកអនុវត្តពេលទូទាត់សេវា សួយសារ ការប្រាក់ ឬថ្លៃជួល។ អ្នកបង់ប្រាក់មានភារកិច្ចកាត់ទុក និងបង់ជូនពន្ធដារ។',
    rate: '4% / 6% / 10% / 14% / 15%',
    appliesTo: 'ការទូទាត់ជាក់លាក់',
    path: '/tax-types/withholding'
  },
  {
    icon: Lightbulb,
    title: 'Public Lighting Tax',
    khmerTitle: 'ពន្ធភ្លើងសាធារណៈ',
    description: 'ពន្ធនេះគាំទ្រការថែទាំប្រព័ន្ធភ្លើងសាធារណៈ និងហេដ្ឋារចនាសម្ព័ន្ធពាក់ព័ន្ធ។',
    rate: '5%',
    appliesTo: 'ស្រា ស្រាបៀរ បារី',
    path: '/tax-types/public-lighting'
  },
  {
    icon: Tags,
    title: 'Specific Tax',
    khmerTitle: 'អាករពិសេស',
    description: 'អាករពិសេសយកលើទំនិញ និងសេវាមានលក្ខណៈជាក់លាក់ ដូចជា ស្រា ស្រាបៀរ បារី ភេសជ្ជៈ ស៊ីម៉ង់ត៍ និងសេវាខ្លះ។',
    rate: '3% - 35%',
    appliesTo: 'ទំនិញ និងសេវាជាក់លាក់',
    path: '/tax-types/specific'
  },
  {
    icon: Building2,
    title: 'Business Income Tax',
    khmerTitle: 'ពន្ធលើប្រាក់ចំណូលអាជីវកម្ម',
    description: 'អាជីវកម្មត្រូវបង់ពន្ធលើប្រាក់ចំណេញសុទ្ធ បន្ទាប់ពីដកចំណាយអនុញ្ញាត។',
    rate: '20% / 9%',
    appliesTo: 'ប្រាក់ចំណេញសុទ្ធ',
    path: '/tax-types/business'
  },
  {
    icon: Hourglass,
    title: 'Annual Income Tax',
    khmerTitle: 'ពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំ',
    description: 'ពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំអនុវត្តលើប្រាក់ចំណេញជាប់ពន្ធ និងគណនាតាមតារាងអត្រាកើនឡើងពី 0% ដល់ 20%។',
    rate: '0% - 20% / 30% / 0%',
    appliesTo: 'ប្រាក់ចំណេញជាប់ពន្ធ',
    path: '/tax-types/general#income-tax'
  },
  {
    icon: Receipt,
    title: 'Patent Tax',
    khmerTitle: 'ពន្ធប៉ាតង់',
    description: 'ពន្ធប៉ាតង់ជាពន្ធអាជ្ញាបណ្ណអាជីវកម្មប្រចាំឆ្នាំ ដែលត្រូវបង់តាមប្រភេទអ្នកជាប់ពន្ធ និងកាលកំណត់ច្បាប់។',
    rate: '400,000៛ - 5,000,000៛',
    appliesTo: 'អាជីវកម្មចុះបញ្ជី',
    path: '/tax-types/patent'
  },
  {
    icon: House,
    title: 'Property Tax',
    khmerTitle: 'ពន្ធលើអចលនទ្រព្យ',
    description: 'ពន្ធប្រចាំឆ្នាំលើអចលនទ្រព្យ (ដី និងអគារ) គិតតាមតម្លៃជាប់ពន្ធបន្ទាប់ពីកាត់លើកលែង។',
    rate: '0.1%',
    appliesTo: 'ដី និងអគារ',
    path: '/tax-types/property'
  },
  {
    icon: Wheat,
    title: 'Unused Land Tax',
    khmerTitle: 'ពន្ធលើដីមិនប្រើប្រាស់',
    description: 'ពន្ធលើដីដែលមិនប្រើប្រាស់ ឬមិនអភិវឌ្ឍ ក្នុងតំបន់ដែលច្បាប់កំណត់ ដើម្បីលើកទឹកចិត្តការប្រើប្រាស់ដីមានប្រសិទ្ធភាព។',
    rate: 'អាស្រ័យតំបន់',
    appliesTo: 'ដីមិនប្រើប្រាស់',
    path: '/tax-types/unused-land'
  },
  {
    icon: ScrollText,
    title: 'Registration Tax',
    khmerTitle: 'ពន្ធប្រថាប់ត្រា',
    description: 'ពន្ធប្រថាប់ត្រាគិតលើការផ្ទេរកម្មសិទ្ធិអចលនទ្រព្យ យានយន្ត ភាគហ៊ុន និងប្រតិបត្តិការជាក់លាក់។',
    rate: '4% (ទូទៅ)',
    appliesTo: 'ការផ្ទេរកម្មសិទ្ធិ',
    path: '/tax-types/registration'
  },
  {
    icon: Hotel,
    title: 'Accommodation Tax',
    khmerTitle: 'អាករលើការស្នាក់នៅ',
    description: 'អាករលើការស្នាក់នៅអនុវត្តលើសេវាស្នាក់នៅក្នុងសណ្ឋាគារ និងមូលដ្ឋានស្នាក់នៅជាប់ពន្ធ។',
    rate: '2%',
    appliesTo: 'សេវាស្នាក់នៅ',
    path: '/tax-types/accommodation'
  },
  {
    icon: ClipboardList,
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
.tax-icon { width: 48px; height: 48px; color: #0f766e; }
.tax-icon :deep(svg) { width: 100%; height: 100%; }
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
