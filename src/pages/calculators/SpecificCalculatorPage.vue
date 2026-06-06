<template>
  <TaxCalculatorLayout
    badge="Specific Tax Calculator"
    title="ម៉ាស៊ីនគណនាអាករពិសេស"
    intro="គណនាអាករពិសេសតាមប្រភេទទំនិញ ឬសេវាកម្ម និងអត្រាដែលអនុវត្ត ដើម្បីឱ្យអ្នកឃើញទាំងអត្រា និងទឹកប្រាក់អាករដែលត្រូវបង់។"
    formula="អាករពិសេស = មូលដ្ឋានគិតអាករ × អត្រា%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ប្រភពប្រតិបត្តិការ</label>
          <select v-model="source" class="calc-select">
            <option value="domestic">ក្នុងស្រុក</option>
            <option value="import">នាំចូល</option>
          </select>
          <p class="calc-help">សម្រាប់ការសិក្សា ប្រភពប្រតិបត្តិការត្រូវបានបង្ហាញជាព័ត៌មានជំនួយបន្ថែម។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ប្រភេទជាប់អាករ</label>
          <select v-model.number="rate" class="calc-select">
            <option :value="35">ស្រា 35%</option>
            <option :value="30">ស្រាបៀរ 30%</option>
            <option :value="20">បារី 20%</option>
            <option :value="25">ស៊ីហ្គា 25%</option>
            <option :value="10">ភេសជ្ជៈ / សេវា 10%</option>
            <option :value="5">ស៊ីម៉ង់ត៍ 5%</option>
            <option :value="3">ទូរគមនាគមន៍ 3%</option>
          </select>
          <p class="calc-help">ជ្រើសប្រភេទមុខទំនិញ ឬសេវាកម្មដែលត្រូវនឹងប្រតិបត្តិការរបស់អ្នក។</p>
        </div>

        <div class="calc-field calc-field--full">
          <label class="calc-label">មូលដ្ឋានគិតអាករ</label>
          <input v-model.number="base" class="calc-input" type="number" placeholder="បញ្ចូលមូលដ្ឋានគិតអាករ" />
          <p class="calc-help">បញ្ចូលតម្លៃសុទ្ធដែលត្រូវយកមកគណនាអាករពិសេស។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">ប្រភពប្រតិបត្តិការ</span>
          <strong class="calc-result-value">{{ source === 'domestic' ? 'ក្នុងស្រុក' : 'នាំចូល' }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាអាករពិសេស</span>
          <strong class="calc-result-value">{{ rate }}%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">អាករពិសេសត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const source = ref('domestic')
const base = ref(0)
const rate = ref(10)

const tax = computed(() => base.value * rate.value / 100)

const highlights = computed(() => [
  { label: 'ប្រភព', value: source.value === 'domestic' ? 'ក្នុងស្រុក' : 'នាំចូល' },
  { label: 'អត្រាអាករ', value: `${rate.value}%` },
  { label: 'អាករពិសេស', value: tax.value.toFixed(2) }
])

const tips = [
  'អត្រាអាករពិសេសខុសគ្នាតាមមុខទំនិញ និងសេវាកម្ម។',
  'សម្រាប់ការនាំចូល មូលដ្ឋានគិតអាករអាចអាស្រ័យលើតម្លៃគយ និងចំណាយពាក់ព័ន្ធ។',
  'ត្រូវផ្ទៀងផ្ទាត់ថាតម្លៃដែលបញ្ចូលជាមូលដ្ឋានសុទ្ធមុនពន្ធឱ្យបានត្រឹមត្រូវ។'
]
</script>
