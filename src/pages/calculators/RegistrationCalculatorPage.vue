<template>
  <TaxCalculatorLayout
    badge="Registration Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធប្រថាប់ត្រា"
    intro="គណនាពន្ធប្រថាប់ត្រាអត្រា 4% ដោយបង្ហាញមូលដ្ឋានក្រោយកាត់អនុគ្រោះ និងចំនួនពន្ធដែលត្រូវបង់។"
    formula="ពន្ធប្រថាប់ត្រា = មូលដ្ឋានក្រោយកាត់អនុគ្រោះ × 4%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ប្រភេទទ្រព្យ</label>
          <select v-model="asset" class="calc-select">
            <option value="immovable">អចលនទ្រព្យ</option>
            <option value="vehicle">យានយន្ត</option>
            <option value="shares">ភាគហ៊ុន / ផ្សេងៗ</option>
          </select>
          <p class="calc-help">ជ្រើសប្រភេទទ្រព្យ ឬកម្មសិទ្ធិដែលកំពុងធ្វើប្រតិបត្តិការ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃជាប់ពន្ធដើម</label>
          <input v-model.number="value" class="calc-input" type="number" placeholder="បញ្ចូលតម្លៃជាប់ពន្ធដើម" />
          <p class="calc-help">បញ្ចូលតម្លៃមូលដ្ឋានមុននឹងកាត់អនុគ្រោះណាមួយ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">មានអនុគ្រោះក្នុងរង្វង់ញាតិដែរឬទេ?</label>
          <select v-model="reliefType" class="calc-select">
            <option value="none">គ្មាន</option>
            <option value="family">មាន</option>
          </select>
          <p class="calc-help">បើមានអនុគ្រោះ សូមបញ្ចូលចំនួនទឹកប្រាក់កាត់ចេញខាងក្រោម។</p>
        </div>

        <div v-if="reliefType === 'family'" class="calc-field">
          <label class="calc-label">ទឹកប្រាក់កាត់ចេញ</label>
          <input v-model.number="relief" class="calc-input" type="number" placeholder="បញ្ចូលទឹកប្រាក់កាត់ចេញ" />
          <p class="calc-help">ទឹកប្រាក់នេះនឹងត្រូវកាត់ចេញពីមូលដ្ឋានគិតពន្ធ។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">មូលដ្ឋានក្រោយកាត់អនុគ្រោះ</span>
          <strong class="calc-result-value">{{ base.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាពន្ធប្រថាប់ត្រា</span>
          <strong class="calc-result-value">4%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធប្រថាប់ត្រាត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const asset = ref('immovable')
const value = ref(0)
const reliefType = ref('none')
const relief = ref(0)

const base = computed(() => Math.max(0, value.value - (reliefType.value === 'family' ? relief.value : 0)))
const tax = computed(() => base.value * 0.04)

const highlights = computed(() => [
  { label: 'ប្រភេទទ្រព្យ', value: asset.value },
  { label: 'មូលដ្ឋានក្រោយកាត់', value: base.value.toFixed(2) },
  { label: 'ពន្ធត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'អនុគ្រោះមួយចំនួនអាចអនុវត្តបានតាមប្រភេទប្រតិបត្តិការ និងទំនាក់ទំនងរវាងភាគី។',
  'ត្រូវបញ្ចូលទឹកប្រាក់កាត់ចេញឱ្យបានត្រឹមត្រូវ បើមានអនុគ្រោះក្នុងរង្វង់ញាតិ។',
  'អត្រាគណនាក្នុងម៉ូឌុលនេះគឺ 4% លើមូលដ្ឋានក្រោយកាត់អនុគ្រោះ។'
]
</script>
