<template>
  <TaxCalculatorLayout
    badge="Property Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធលើអចលនទ្រព្យ"
    intro="គណនាពន្ធលើអចលនទ្រព្យអត្រា 0.1% លើតម្លៃជាប់ពន្ធក្រោយកាត់តម្លៃលើកលែង។"
    formula="ពន្ធលើអចលនទ្រព្យ = (តម្លៃអចលនទ្រព្យ − តម្លៃលើកលែង) × 0.1%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">តម្លៃអចលនទ្រព្យ</label>
          <input v-model.number="value" class="calc-input" type="number" placeholder="បញ្ចូលតម្លៃអចលនទ្រព្យសរុប" />
          <p class="calc-help">បញ្ចូលតម្លៃអចលនទ្រព្យដែលត្រូវយកមកគណនា។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃលើកលែង</label>
          <input class="calc-input calc-input--readonly" type="text" :value="fixedExemptionLabel" readonly />
          <p class="calc-help">តម្លៃលើកលែងត្រូវបានកំណត់ថេរ ហើយមិនអាចកែប្រែបានទេ។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">មូលដ្ឋានជាប់ពន្ធ</span>
          <strong class="calc-result-value">{{ taxable.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាពន្ធអចលនទ្រព្យ</span>
          <strong class="calc-result-value">0.1%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធលើអចលនទ្រព្យត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const value = ref(0)
const fixedExemption = 100_000_000
const fixedExemptionLabel = '100,000,000 riel'

const taxable = computed(() => Math.max(0, value.value - fixedExemption))
const tax = computed(() => taxable.value * 0.001)

const highlights = computed(() => [
  { label: 'តម្លៃសរុប', value: value.value.toFixed(2) },
  { label: 'តម្លៃលើកលែងថេរ', value: fixedExemptionLabel },
  { label: 'មូលដ្ឋានជាប់ពន្ធ', value: taxable.value.toFixed(2) },
  { label: 'ពន្ធត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'តម្លៃលើកលែងត្រូវបានកំណត់ថេរ 100,000,000 riel ក្នុងម៉ូឌុលនេះ។',
  'អត្រាគំរូក្នុងម៉ូឌុលនេះគឺ 0.1% លើមូលដ្ឋានក្រោយកាត់ចេញ។',
  'បើតម្លៃអចលនទ្រព្យតិចជាង 100,000,000 riel លទ្ធផលមូលដ្ឋានជាប់ពន្ធនឹងស្មើសូន្យ។'
]
</script>

<style scoped>
.calc-input--readonly {
  background: #f8fafc;
  color: #0f172a;
  cursor: not-allowed;
}
</style>
