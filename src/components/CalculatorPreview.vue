<template>
  <section class="calculator-preview">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">13 Calculators</span>
        <h2>ជ្រើសរើសម៉ាស៊ីនគណនាពន្ធ</h2>
        <p>ចុចលើពន្ធនីមួយៗ ដើម្បីបើកម៉ាស៊ីនគណនាលម្អិត</p>
      </div>

      <div class="filter-row">
        <input v-model="search" type="text" placeholder="ស្វែងរកពន្ធ..." />
        <select v-model="category">
          <option value="all">ទាំងអស់</option>
          <option value="indirect">ពន្ធប្រយោល</option>
          <option value="income">ពន្ធលើចំណូល</option>
          <option value="property">ពន្ធទ្រព្យ/ចុះបញ្ជី</option>
        </select>
      </div>

      <div class="grid">
        <article v-for="tax in filteredTaxes" :key="tax.slug" class="card">
          <h3>{{ tax.name }}</h3>
          <p>{{ tax.summary }}</p>
          <RouterLink class="btn" :to="tax.path">បើកម៉ាស៊ីនគណនា</RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type TaxCard = { slug: string; name: string; summary: string; path: string; category: 'indirect' | 'income' | 'property' }

const search = ref('')
const category = ref<'all' | 'indirect' | 'income' | 'property'>('all')

const taxes: TaxCard[] = [
  { slug: 'vat', name: 'អាករលើតម្លៃបន្ថែម (VAT)', summary: 'គណនា Output VAT, Input VAT និង VAT ត្រូវបង់', path: '/tax-calculator/vat', category: 'indirect' },
  { slug: 'salary', name: 'ពន្ធលើប្រាក់បៀវត្ស', summary: 'គណនាពន្ធប្រាក់ខែ Resident/Non-Resident', path: '/tax-calculator/salary', category: 'income' },
  { slug: 'fringe-benefit', name: 'ពន្ធលើអត្ថប្រយោជន៍បន្ថែម', summary: 'គណនាពន្ធ 20% លើ fringe benefits ដាច់ដោយឡែក', path: '/tax-calculator/fringe-benefit', category: 'income' },
  { slug: 'prepayment', name: 'ពន្ធលើប្រាក់ចំណូលបង់ជាមុន', summary: 'គណនា 1% លើមូលដ្ឋានគិតពន្ធប្រចាំខែ', path: '/tax-calculator/prepayment', category: 'income' },
  { slug: 'withholding', name: 'ពន្ធកាត់ទុក', summary: 'គណនាតាមប្រភេទទូទាត់ និងស្ថានភាពអ្នកទទួលប្រាក់', path: '/tax-calculator/withholding', category: 'income' },
  { slug: 'public-lighting', name: 'អាករសម្រាប់បំភ្លឺសាធារណៈ', summary: 'គណនា PLT អត្រា 5%', path: '/tax-calculator/public-lighting', category: 'indirect' },
  { slug: 'specific', name: 'អាករពិសេស', summary: 'គណនាអាករពិសេសតាមប្រភេទទំនិញ/សេវា', path: '/tax-calculator/specific', category: 'indirect' },
  { slug: 'income-tax', name: 'ពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំ', summary: 'គណនាពន្ធតាមជួរ 0% - 20% និងអត្រាពិសេស 30% / 0%', path: '/tax-calculator/corporate-income', category: 'income' },
  { slug: 'patent', name: 'ពន្ធប៉ាតង់', summary: 'គណនាពន្ធប៉ាតង់តាមប្រភេទអ្នកជាប់ពន្ធ', path: '/tax-calculator/patent', category: 'income' },
  { slug: 'property', name: 'ពន្ធលើអចលនទ្រព្យ', summary: 'គណនា 0.1% បន្ទាប់ពីកាត់លើកលែង', path: '/tax-calculator/property', category: 'property' },
  { slug: 'unused-land', name: 'ពន្ធលើដីមិនប្រើប្រាស់', summary: 'គណនាពន្ធតាមតម្លៃដី និងអត្រា', path: '/tax-calculator/unused-land', category: 'property' },
  { slug: 'registration', name: 'ពន្ធប្រថាប់ត្រា', summary: 'គណនា 4% បន្ទាប់ពីអនុគ្រោះ/កាត់ចេញ', path: '/tax-calculator/registration', category: 'property' },
  { slug: 'accommodation', name: 'អាករលើការស្នាក់នៅ', summary: 'គណនា Accommodation Tax អត្រា 2%', path: '/tax-calculator/accommodation', category: 'indirect' }
]

const filteredTaxes = computed(() => taxes.filter((tax) => {
  const hitCategory = category.value === 'all' || tax.category === category.value
  const q = search.value.trim().toLowerCase()
  const hitSearch = !q || tax.name.toLowerCase().includes(q) || tax.summary.toLowerCase().includes(q)
  return hitCategory && hitSearch
}))
</script>

<style scoped>
.calculator-preview { padding: 80px 20px; background: linear-gradient(180deg, #fbfffe 0%, #f1faf8 100%); }
.container { max-width: 1200px; margin: 0 auto; }
.section-header { text-align: center; margin-bottom: 24px; }
.section-badge { display: inline-block; padding: 8px 14px; border-radius: 999px; font-size: 12px; background: rgba(20,184,166,.14); color: #0f766e; font-weight: 700; }
.section-header h2 { margin: 14px 0 8px; font-size: 40px; color: #0f172a; }
.section-header p { color: #64748b; }
.filter-row { display: grid; grid-template-columns: 1fr 220px; gap: 12px; margin: 24px 0; }
.filter-row input, .filter-row select { padding: 12px; border: 1px solid rgba(20,184,166,.3); border-radius: 10px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px,1fr)); gap: 16px; }
.card { background: #fff; border: 1px solid rgba(20,184,166,.2); border-radius: 14px; padding: 18px; display: grid; gap: 10px; }
.card h3 { margin: 0; font-size: 18px; color: #0f172a; }
.card p { margin: 0; color: #475569; line-height: 1.6; }
.btn { text-decoration: none; text-align: center; background: linear-gradient(135deg,#0f766e,#14b8a6); color: #fff; padding: 10px 12px; border-radius: 10px; font-weight: 700; }
@media (max-width: 768px) {.section-header h2 { font-size: 30px; } .filter-row { grid-template-columns: 1fr; }}
</style>
