<template>
  <TaxCalculatorLayout
    badge="Withholding Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធកាត់ទុក"
    intro="គណនាពន្ធកាត់ទុកតាមប្រភេទទូទាត់ និងស្ថានភាពអ្នកទទួលប្រាក់ ដើម្បីឱ្យអ្នកមើលឃើញទាំងអត្រា ពន្ធដែលត្រូវកាត់ និងទឹកប្រាក់សុទ្ធ។"
    formula="ពន្ធកាត់ទុក = ចំនួនទឹកប្រាក់ទូទាត់ × អត្រាពន្ធ"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ចំនួនទឹកប្រាក់ទូទាត់</label>
          <input v-model.number="amount" class="calc-input" type="number" placeholder="បញ្ចូលចំនួនទឹកប្រាក់ត្រូវទូទាត់" />
          <p class="calc-help">បញ្ចូលចំនួនប្រាក់សរុបមុនកាត់ពន្ធ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ស្ថានភាពអ្នកទទួលប្រាក់</label>
          <select v-model="status" class="calc-select">
            <option value="resident">និវាសនជន</option>
            <option value="non">អនិវាសនជន</option>
          </select>
          <p class="calc-help">អនិវាសនជនជាទូទៅអនុវត្តអត្រា `14%` លើចំណូលប្រភពកម្ពុជា។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ប្រភេទទូទាត់</label>
          <select v-model="type" class="calc-select">
            <option value="service">សេវាកម្ម</option>
            <option value="royalty">សួយសារ</option>
            <option value="interest">ការប្រាក់ទូទៅ</option>
            <option value="rent">ថ្លៃជួល</option>
            <option value="bf">ការប្រាក់ធនាគារ (មានកាលកំណត់)</option>
            <option value="bnf">ការប្រាក់ធនាគារ (គ្មានកាលកំណត់)</option>
          </select>
          <p class="calc-help">ជ្រើសប្រភេទឱ្យត្រូវ ព្រោះអត្រាពន្ធខុសគ្នាតាមប្រភេទទូទាត់។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">មានលើកលែងពន្ធដែរឬទេ?</label>
          <select v-model="exempt" class="calc-select">
            <option :value="false">គ្មានលើកលែង</option>
            <option :value="true">មានលើកលែង</option>
          </select>
          <p class="calc-help">បើប្រតិបត្តិការនោះត្រូវបានលើកលែង ពន្ធកាត់ទុកនឹងស្មើ `0`។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាពន្ធអនុវត្ត</span>
          <strong class="calc-result-value">{{ rate }}%</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">ពន្ធកាត់ទុក</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ទឹកប្រាក់សុទ្ធបង់ទៅអ្នកទទួល</span>
          <strong class="calc-result-value">{{ net.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const amount = ref(0)
const status = ref<'resident' | 'non'>('resident')
const type = ref<'service' | 'royalty' | 'interest' | 'rent' | 'bf' | 'bnf'>('service')
const exempt = ref(false)

const rate = computed(() => {
  if (exempt.value) return 0
  if (status.value === 'non') return 14
  const residentRates = {
    service: 15,
    royalty: 15,
    interest: 15,
    rent: 10,
    bf: 6,
    bnf: 4
  } as const
  return residentRates[type.value]
})

const tax = computed(() => amount.value * rate.value / 100)
const net = computed(() => amount.value - tax.value)

const highlights = computed(() => [
  { label: 'អត្រាពន្ធ', value: `${rate.value}%` },
  { label: 'ពន្ធកាត់ទុក', value: tax.value.toFixed(2) },
  { label: 'សុទ្ធត្រូវបង់', value: net.value.toFixed(2) }
])

const tips = [
  'ស្ថានភាពនិវាសនជន និងអនិវាសនជនប៉ះពាល់ដោយផ្ទាល់ទៅអត្រាពន្ធកាត់ទុក។',
  'ត្រូវតែជ្រើសប្រភេទទូទាត់ឱ្យត្រឹមត្រូវ ដោយសារអត្រាសេវា សួយសារ ការប្រាក់ និងថ្លៃជួលខុសគ្នា។',
  'បើមានការលើកលែងតាមច្បាប់ ឬតាមសន្ធិសញ្ញា អាចធ្វើឱ្យពន្ធកាត់ទុកស្មើសូន្យ។'
]
</script>
