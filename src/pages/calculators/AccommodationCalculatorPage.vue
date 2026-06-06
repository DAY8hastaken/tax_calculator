<template>
  <TaxCalculatorLayout
    badge="Accommodation Tax Calculator"
    title="ម៉ាស៊ីនគណនាអាករលើការស្នាក់នៅ"
    intro="គណនាអាករលើការស្នាក់នៅអត្រា 2% ពីចំណូលបន្ទប់ និងបន្ទុកសេវាដែលទាក់ទងនឹងការស្នាក់នៅ។"
    formula="Accommodation Tax = មូលដ្ឋានគិតអាករ × 2%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ចំណូលបន្ទប់ស្នាក់នៅ</label>
          <input v-model.number="room" class="calc-input" type="number" placeholder="បញ្ចូលចំណូលបន្ទប់ស្នាក់នៅ" />
          <p class="calc-help">បញ្ចូលតែចំណូលពីការស្នាក់នៅប៉ុណ្ណោះ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">បន្ទុកសេវា (Service Charge)</label>
          <input v-model.number="service" class="calc-input" type="number" placeholder="បញ្ចូលបន្ទុកសេវា" />
          <p class="calc-help">បញ្ចូលបន្ទុកសេវាដែលភ្ជាប់ជាមួយសេវាស្នាក់នៅ។</p>
        </div>

        <div class="calc-field calc-field--full">
          <label class="calc-label">តម្លៃនេះរួម VAT និង Accommodation Tax ដែរឬទេ?</label>
          <select v-model="inc" class="calc-select">
            <option :value="true">រួម</option>
            <option :value="false">មិនរួម</option>
          </select>
          <p class="calc-help">បើរួម ប្រព័ន្ធនឹងបំបែកមូលដ្ឋានដោយ `1.1 × 1.02` មុនគណនាអាករ។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">មូលដ្ឋានគិតអាករ</span>
          <strong class="calc-result-value">{{ base.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាអាករស្នាក់នៅ</span>
          <strong class="calc-result-value">2%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">អាករលើការស្នាក់នៅត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const room = ref(0)
const service = ref(0)
const inc = ref(true)

const base = computed(() => {
  const gross = room.value + service.value
  return inc.value ? gross / (1.1 * 1.02) : gross
})

const tax = computed(() => base.value * 0.02)

const highlights = computed(() => [
  { label: 'ចំណូលសរុប', value: (room.value + service.value).toFixed(2) },
  { label: 'មូលដ្ឋានគិតអាករ', value: base.value.toFixed(2) },
  { label: 'អាករត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'អាករលើការស្នាក់នៅគិតលើចំណូលពីសេវាស្នាក់នៅ និងបន្ទុកសេវាដែលពាក់ព័ន្ធ។',
  'បើតម្លៃរួម VAT និង Accommodation Tax ត្រូវបំបែកចេញមុនសិន។',
  'ចំណូលពីអាហារដែលមិនទាក់ទងនឹងការស្នាក់នៅ មិនគួរបញ្ចូលក្នុងម៉ូឌុលនេះទេ។'
]
</script>
