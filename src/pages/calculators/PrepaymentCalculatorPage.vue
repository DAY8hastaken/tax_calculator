<template>
  <TaxCalculatorLayout
    badge="Income Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធលើប្រាក់ចំណូលបង់ជាមុន"
    intro="ប្រើសម្រាប់គណនាពន្ធលើប្រាក់ចំណូលបង់ជាមុន 1% ប្រចាំខែ ដោយយោងតាមផរបររួម និងស្ថានភាព VAT របស់ប្រតិបត្តិការ។"
    formula="ពន្ធលើប្រាក់ចំណូលបង់ជាមុន = មូលដ្ឋានគិតពន្ធ × 1%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ផរបររួមប្រចាំខែ</label>
          <input v-model.number="gross" class="calc-input" type="number" placeholder="បញ្ចូលផរបររួមប្រចាំខែ" />
          <p class="calc-help">បញ្ចូលចំណូលសរុបដែលអាជីវកម្មរកបានក្នុងខែនោះ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ផរបរនេះរួម VAT ដែរឬទេ?</label>
          <select v-model="includeVat" class="calc-select">
            <option :value="true">រួម VAT</option>
            <option :value="false">មិនរួម VAT</option>
          </select>
          <p class="calc-help">បើរួម VAT ប្រព័ន្ធនឹងបំបែកមូលដ្ឋានគិតពន្ធដោយចែក `1.1` ជាមុន។</p>
        </div>

        <div class="calc-field calc-field--full">
          <label class="calc-label">មានអនុគ្រោះ QIP / លើកលែងពន្ធដែរឬទេ?</label>
          <select v-model="exempt" class="calc-select">
            <option :value="false">គ្មានអនុគ្រោះ</option>
            <option :value="true">មានអនុគ្រោះ</option>
          </select>
          <p class="calc-help">បើមានអនុគ្រោះតាមបទប្បញ្ញត្តិ អាចធ្វើឱ្យពន្ធលើប្រាក់ចំណូលបង់ជាមុនស្មើ `0`។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">មូលដ្ឋានគិតពន្ធ</span>
          <strong class="calc-result-value">{{ base.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាពន្ធអនុវត្ត</span>
          <strong class="calc-result-value">1%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធលើប្រាក់ចំណូលបង់ជាមុនត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const gross = ref(0)
const includeVat = ref(true)
const exempt = ref(false)

const base = computed(() => (includeVat.value ? gross.value / 1.1 : gross.value))
const tax = computed(() => (exempt.value ? 0 : base.value * 0.01))

const highlights = computed(() => [
  { label: 'អត្រាពន្ធ', value: '1%' },
  { label: 'មូលដ្ឋានបច្ចុប្បន្ន', value: base.value.toFixed(2) },
  { label: 'ពន្ធត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'ពន្ធនេះគណនាលើផរបររួម មិនមែនលើចំណេញសុទ្ធទេ។',
  'បើផរបររួម VAT ត្រូវបំបែក VAT ចេញមុនគណនា។',
  'ចំនួនដែលបានបង់ជាមុន អាចយកទៅកាត់កងពន្ធប្រចាំឆ្នាំតាមលក្ខខណ្ឌ។'
]
</script>
