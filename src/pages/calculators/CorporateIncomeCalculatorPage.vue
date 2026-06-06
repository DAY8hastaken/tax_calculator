<template>
  <TaxCalculatorLayout
    badge="Income Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំ"
    intro="គណនាពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំតាមតារាងអត្រាបន្ថយឡើងសម្រាប់ប្រាក់ចំណេញជាប់ពន្ធ និងបង្ហាញករណីអនុវត្តពិសេសដូចជា 30% ឬ 0%។"
    formula="ពន្ធលើប្រាក់ចំណូល = អត្រាតាមជួរ × ចំណេញជាប់ពន្ធ"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ចំណេញជាប់ពន្ធប្រចាំឆ្នាំ</label>
          <input v-model.number="taxableProfit" class="calc-input" type="number" placeholder="បញ្ចូលចំណេញជាប់ពន្ធប្រចាំឆ្នាំ" />
          <p class="calc-help">បញ្ចូលប្រាក់ចំណេញក្រោយដកចំណាយអនុញ្ញាត។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ប្រភេទប្រាក់ចំណូល</label>
          <select v-model="taxProfile" class="calc-select">
            <option value="progressive">ទូទៅ (0% - 20% តាមជួរ)</option>
            <option value="resource">កិច្ចសន្យាផលិតផលប្រេងកាត / ធនធានធម្មជាតិ (30%)</option>
            <option value="qip">QIP ក្នុងរយៈពេលលើកលែង (0%)</option>
          </select>
          <p class="calc-help">ជ្រើសប្រភេទដែលស្របនឹងអ្វីដែលអ្នកកំពុងគណនា។</p>
        </div>

        <div v-if="taxProfile === 'progressive'" class="calc-field calc-field--full">
          <label class="calc-label">ចំណាំសម្រាប់តារាងបន្ថយឡើង</label>
          <p class="calc-help">
            ជួរពន្ធប្រចាំឆ្នាំប្រើលើប្រាក់ចំណេញជាប់ពន្ធសម្រាប់រូបវន្តបុគ្គល សហគ្រាសឯករូប និងចំណែកដែលមិនត្រូវបានចាត់ទុកជានីតិបុគ្គល។
          </p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">ប្រភេទអត្រា</span>
          <strong class="calc-result-value">{{ rateLabel }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">ចំណេញជាប់ពន្ធ</span>
          <strong class="calc-result-value">{{ taxableProfit.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធលើប្រាក់ចំណូលត្រូវបង់</span>
          <strong class="calc-result-value">{{ taxDue.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const taxableProfit = ref(0)
const taxProfile = ref<'progressive' | 'resource' | 'qip'>('progressive')

const taxDue = computed(() => {
  const p = Math.max(0, taxableProfit.value)
  if (taxProfile.value === 'qip') return 0
  if (taxProfile.value === 'resource') return p * 0.3
  if (p <= 18000000) return 0
  if (p <= 24000000) return p * 0.05 - 900000
  if (p <= 102000000) return p * 0.1 - 2100000
  if (p <= 150000000) return p * 0.15 - 7200000
  return p * 0.2 - 14200000
})

const highlights = computed(() => [
  { label: 'ប្រភេទអត្រា', value: rateLabel.value },
  { label: 'ចំណេញជាប់ពន្ធ', value: taxableProfit.value.toFixed(2) },
  { label: 'ពន្ធត្រូវបង់', value: taxDue.value.toFixed(2) }
])

const rateLabel = computed(() => {
  if (taxProfile.value === 'qip') return '0%'
  if (taxProfile.value === 'resource') return '30%'
  return '0% - 20%'
})

const tips = [
  'តារាង 0% - 20% ប្រើសម្រាប់ប្រាក់ចំណេញជាប់ពន្ធប្រចាំឆ្នាំតាមជួរតម្លៃ។',
  'ប្រាក់ចំណូលពីផលិតផលប្រេងកាត ឬធនធានធម្មជាតិប្រើអត្រា 30%។',
  'QIP ក្នុងរយៈពេលលើកលែងអាចប្រើអត្រា 0% តាមលក្ខខណ្ឌ។'
]
</script>
