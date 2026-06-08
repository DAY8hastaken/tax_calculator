<template>
  <TaxCalculatorLayout
    badge="Salary Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធលើប្រាក់បៀវត្ស"
    intro="គណនាពន្ធប្រចាំខែសម្រាប់និវាសនជន និងអនិវាសនជន ដោយបង្ហាញទាំងមូលដ្ឋានគិតពន្ធ ការកាត់បន្ថយ និងប្រាក់ខែក្រោយពន្ធ។"
    formula="ពន្ធបៀវត្ស = អត្រាពន្ធតាមតារាង × មូលដ្ឋានគិតពន្ធក្រោយកាត់បន្ថយ"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ប្រាក់ខែសរុបប្រចាំខែ (KHR)</label>
          <input v-model.number="gross" class="calc-input" type="number" placeholder="បញ្ចូលប្រាក់ខែសរុបប្រចាំខែ" />
          <p class="calc-help">បញ្ចូលប្រាក់ខែ និងប្រាក់បន្ថែមសរុបទាំងអស់ប្រចាំខែ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ស្ថានភាពអ្នកជាប់ពន្ធ</label>
          <select v-model="status" class="calc-select">
            <option value="resident">និវាសនជន</option>
            <option value="non">អនិវាសនជន</option>
          </select>
          <p class="calc-help">អនិវាសនជនត្រូវគណនាតាមអត្រាថេរ `20%`។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ចំនួនកូនក្នុងបន្ទុក</label>
          <input v-model.number="children" class="calc-input" type="number" min="0" placeholder="បញ្ចូលចំនួនកូនក្នុងបន្ទុក" />
          <p class="calc-help">សម្រាប់និវាសនជន កូនក្នុងបន្ទុកម្នាក់អាចកាត់បន្ថយ `150,000៛`។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">សហព័ទ្ធមិនមានការងារ</label>
          <select v-model="spouse" class="calc-select">
            <option :value="false">មិនមាន</option>
            <option :value="true">មាន</option>
          </select>
          <p class="calc-help">បើមានសហព័ទ្ធមិនធ្វើការ អាចកាត់បន្ថយបន្ថែម `150,000៛`។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">ចំនួនកាត់បន្ថយសរុប</span>
          <strong class="calc-result-value">{{ deduction.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">មូលដ្ឋានគិតពន្ធ</span>
          <strong class="calc-result-value">{{ taxable.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">ពន្ធត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ប្រាក់ខែក្រោយពន្ធ</span>
          <strong class="calc-result-value">{{ net.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const gross = ref(0)
const status = ref<'resident' | 'non'>('resident')
const children = ref(0)
const spouse = ref(false)

const deduction = computed(() =>
  status.value === 'resident' ? Math.max(0, children.value) * 150000 + (spouse.value ? 150000 : 0) : 0
)

const taxable = computed(() => Math.max(0, gross.value - deduction.value))

const tax = computed(() => {
  if (status.value === 'non') return taxable.value * 0.2

  const amount = taxable.value
  if (amount <= 1500000) return 0
  if (amount <= 2000000) return amount * 0.05 - 75000
  if (amount <= 8500000) return amount * 0.1 - 175000
  if (amount <= 12500000) return amount * 0.15 - 600000
  return amount * 0.2 - 1225000
})

const net = computed(() => gross.value - Math.max(0, tax.value))

const highlights = computed(() => [
  { label: 'ស្ថានភាព', value: status.value === 'resident' ? 'និវាសនជន' : 'អនិវាសនជន' },
  { label: 'មូលដ្ឋានគិតពន្ធ', value: taxable.value.toFixed(2) },
  { label: 'ពន្ធត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'និវាសនជនប្រើតារាងអត្រាពន្ធជាបន្ទុកឡើងតាមចំនួនប្រាក់ខែ។',
  'អនិវាសនជនគិតពន្ធតាមអត្រាថេរ 20% លើមូលដ្ឋានគិតពន្ធ។',
  'ការកាត់បន្ថយសម្រាប់កូនក្នុងបន្ទុក និងសហព័ទ្ធអនុវត្តសម្រាប់ករណីដែលច្បាប់អនុញ្ញាត។',
  'អត្ថប្រយោជន៍បន្ថែមមានម៉ាស៊ីនគណនាដាច់ដោយឡែក។'
]
</script>
