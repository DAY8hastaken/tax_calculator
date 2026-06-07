<template>
  <TaxCalculatorLayout
    badge="Unused Land Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធលើដីមិនប្រើប្រាស់"
    intro="គណនាពន្ធលើដីមិនប្រើប្រាស់តាមតម្លៃដី និងអត្រាពន្ធដែលអនុវត្តសម្រាប់ករណីនីមួយៗ។"
    formula="ពន្ធលើដីមិនប្រើប្រាស់ = តម្លៃដីជាប់ពន្ធ × អត្រាពន្ធ%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">តម្លៃដីជាប់ពន្ធ</label>
          <input v-model.number="value" class="calc-input" type="number" placeholder="បញ្ចូលតម្លៃដីជាប់ពន្ធ" />
          <p class="calc-help">បញ្ចូលតម្លៃដីដែលត្រូវយកមកគណនា។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">អត្រាពន្ធ (%)</label>
          <input class="calc-input calc-input--readonly" type="text" :value="rateLabel" readonly />
          <p class="calc-help">អត្រាពន្ធត្រូវបានកំណត់ថេរ 2% សម្រាប់ម៉ូឌុលនេះ។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">តម្លៃដីជាប់ពន្ធ</span>
          <strong class="calc-result-value">{{ value.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាពន្ធអនុវត្ត</span>
          <strong class="calc-result-value">{{ rate.toFixed(2) }}%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធលើដីមិនប្រើប្រាស់ត្រូវបង់</span>
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
const rate = 2
const rateLabel = '2%'

const tax = computed(() => value.value * rate / 100)

const highlights = computed(() => [
  { label: 'តម្លៃដី', value: value.value.toFixed(2) },
  { label: 'អត្រាពន្ធថេរ', value: rateLabel },
  { label: 'ពន្ធត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'អត្រាពន្ធត្រូវបានកំណត់ថេរ 2% ក្នុងម៉ូឌុលនេះ។',
  'តម្លៃដីដែលបញ្ចូលគួរជាតម្លៃជាប់ពន្ធ មិនមែនតម្លៃទីផ្សារប៉ាន់ស្មានទូទៅ។',
  'ម៉ូឌុលនេះជាគំរូសម្រាប់ការរៀន និងប៉ាន់ស្មានបឋម។'
]
</script>

<style scoped>
.calc-input--readonly {
  background: #f8fafc;
  color: #0f172a;
  cursor: not-allowed;
}
</style>
