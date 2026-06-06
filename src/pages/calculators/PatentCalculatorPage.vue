<template>
  <TaxCalculatorLayout
    badge="Patent Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធប៉ាតង់"
    intro="គណនាពន្ធប៉ាតង់តាមចំណាត់ថ្នាក់អ្នកជាប់ពន្ធ និងពេលចាប់ផ្តើមអាជីវកម្ម ដើម្បីបង្ហាញចំនួនត្រូវបង់ប្រចាំឆ្នាំ ឬកន្លះឆ្នាំ។"
    formula="ពន្ធប៉ាតង់ត្រូវបង់ = អត្រាប៉ាតង់ប្រចាំឆ្នាំ × ភាគរយអនុវត្ត"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ប្រភេទអ្នកជាប់ពន្ធ</label>
          <select v-model.number="annual" class="calc-select">
            <option :value="400000">តូច (400,000៛)</option>
            <option :value="1200000">មធ្យម (1,200,000៛)</option>
            <option :value="3000000">ធំ (3,000,000៛)</option>
            <option :value="5000000">ធំ &gt; 10,000 លានរៀល (5,000,000៛)</option>
          </select>
          <p class="calc-help">ជ្រើសតាមចំណាត់ថ្នាក់របស់អ្នកជាប់ពន្ធក្នុងប្រព័ន្ធពន្ធដារ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ពេលចាប់ផ្តើមអាជីវកម្ម</label>
          <select v-model.number="half" class="calc-select">
            <option :value="1">6 ខែដើមឆ្នាំ (100%)</option>
            <option :value="0.5">6 ខែចុងឆ្នាំ (50%)</option>
          </select>
          <p class="calc-help">បើចាប់ផ្តើមនៅកន្លះឆ្នាំចុងក្រោយ អាចគិតត្រឹម `50%` តាមគំរូនេះ។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាប៉ាតង់ប្រចាំឆ្នាំ</span>
          <strong class="calc-result-value">{{ annual.toFixed(0) }} ៛</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">ភាគរយអនុវត្ត</span>
          <strong class="calc-result-value">{{ half === 1 ? '100%' : '50%' }}</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធប៉ាតង់ត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(0) }} ៛</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const annual = ref(1200000)
const half = ref(1)

const tax = computed(() => annual.value * half.value)

const highlights = computed(() => [
  { label: 'អត្រាប៉ាតង់', value: `${annual.value.toFixed(0)} ៛` },
  { label: 'អនុវត្ត', value: half.value === 1 ? '100%' : '50%' },
  { label: 'ត្រូវបង់', value: `${tax.value.toFixed(0)} ៛` }
])

const tips = [
  'ពន្ធប៉ាតង់ជាពន្ធថេរ មិនមែនគណនាជាភាគរយលើចំណូលទេ។',
  'ត្រូវជ្រើសប្រភេទអ្នកជាប់ពន្ធឱ្យត្រឹមត្រូវ តាមចំណាត់ថ្នាក់អាជីវកម្ម។',
  'ការគណនានេះជាគំរូសិក្សា សម្រាប់ករណីចាប់ផ្តើមអាជីវកម្មពាក់កណ្តាលឆ្នាំ។'
]
</script>
