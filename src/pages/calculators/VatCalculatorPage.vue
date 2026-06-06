<template>
  <TaxCalculatorLayout
    badge="VAT Calculator"
    title="ម៉ាស៊ីនគណនា VAT"
    intro="គណនា VAT ត្រូវបង់ដោយប្រៀបធៀប Output VAT និង Input VAT ហើយបង្ហាញថាតើត្រូវបង់បន្ថែម ឬមានឥណទានសម្រាប់ខែក្រោយ។"
    formula="VAT ត្រូវបង់ = Output VAT − Input VAT"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ប្រភេទប្រតិបត្តិការ</label>
          <select v-model="supplyType" class="calc-select">
            <option value="domestic">ផ្គត់ផ្គង់ក្នុងស្រុក</option>
            <option value="export">នាំចេញ (0%)</option>
          </select>
          <p class="calc-help">ជ្រើសឱ្យត្រូវ ដើម្បីកំណត់អត្រា VAT សមស្របតាមប្រតិបត្តិការ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">អត្រា VAT</label>
          <select v-model.number="rate" class="calc-select">
            <option :value="10">10%</option>
            <option :value="0">0%</option>
          </select>
          <p class="calc-help">សម្រាប់ក្នុងស្រុកជាទូទៅប្រើ `10%` ខណៈការនាំចេញប្រើ `0%`។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃលក់ (Sales)</label>
          <input v-model.number="sales" class="calc-input" type="number" placeholder="បញ្ចូលតម្លៃលក់សរុប" />
          <p class="calc-help">បញ្ចូលចំនួនសរុបនៃការលក់ក្នុងខែនេះ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃលក់នេះរួម VAT ដែរឬទេ?</label>
          <select v-model="salesIncludeVat" class="calc-select">
            <option :value="false">មិនរួម VAT</option>
            <option :value="true">រួម VAT</option>
          </select>
          <p class="calc-help">បើរួម VAT ប្រព័ន្ធនឹងដក VAT ចេញជាមុន ដើម្បីរកមូលដ្ឋានលក់សុទ្ធ។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃទិញ (Purchases)</label>
          <input v-model.number="purchases" class="calc-input" type="number" placeholder="បញ្ចូលតម្លៃទិញសរុប" />
          <p class="calc-help">បញ្ចូលតម្លៃទិញដែលទាក់ទងនឹងអាជីវកម្ម និងអាចយកជាឥណទាន VAT បាន។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃទិញនេះរួម VAT ដែរឬទេ?</label>
          <select v-model="purchaseIncludeVat" class="calc-select">
            <option :value="false">មិនរួម VAT</option>
            <option :value="true">រួម VAT</option>
          </select>
          <p class="calc-help">ជ្រើសស្ថានភាពត្រឹមត្រូវ ដើម្បីគណនា Input VAT credit បានច្បាស់។</p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">មូលដ្ឋានលក់សុទ្ធ</span>
          <strong class="calc-result-value">{{ outputBase.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">មូលដ្ឋានទិញសុទ្ធ</span>
          <strong class="calc-result-value">{{ inputBase.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">Output VAT</span>
          <strong class="calc-result-value">{{ outputVat.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">Input VAT</span>
          <strong class="calc-result-value">{{ inputVat.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">VAT ត្រូវបង់</span>
          <strong class="calc-result-value">{{ payableVat.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">VAT ឥណទានលើកខែក្រោយ</span>
          <strong class="calc-result-value">{{ carryForward.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const supplyType = ref<'domestic' | 'export'>('domestic')
const sales = ref(0)
const salesIncludeVat = ref(false)
const purchases = ref(0)
const purchaseIncludeVat = ref(false)
const rate = ref(10)

const effectiveRate = computed(() => (supplyType.value === 'export' ? 0 : rate.value))
const outputBase = computed(() =>
  salesIncludeVat.value && effectiveRate.value > 0 ? sales.value / (1 + effectiveRate.value / 100) : sales.value
)
const inputBase = computed(() =>
  purchaseIncludeVat.value && rate.value > 0 ? purchases.value / (1 + rate.value / 100) : purchases.value
)
const outputVat = computed(() => outputBase.value * (effectiveRate.value / 100))
const inputVat = computed(() => inputBase.value * (rate.value / 100))
const net = computed(() => outputVat.value - inputVat.value)
const payableVat = computed(() => (net.value > 0 ? net.value : 0))
const carryForward = computed(() => (net.value < 0 ? Math.abs(net.value) : 0))

const highlights = computed(() => [
  { label: 'អត្រា Output VAT', value: `${effectiveRate.value}%` },
  { label: 'VAT ត្រូវបង់', value: payableVat.value.toFixed(2) },
  { label: 'VAT ឥណទាន', value: carryForward.value.toFixed(2) }
])

const tips = [
  'Output VAT គឺ VAT លើការលក់ ចំណែក Input VAT គឺ VAT លើការទិញដែលអាចយកជាឥណទានបាន។',
  'បើ Input VAT ធំជាង Output VAT លទ្ធផលមិនមែនត្រូវបង់ទេ ប៉ុន្តែអាចលើកជាឥណទានទៅខែក្រោយ។',
  'សម្រាប់ការនាំចេញ អត្រា VAT ជាទូទៅគឺ 0% តែត្រូវមានឯកសារគាំទ្រត្រឹមត្រូវ។'
]
</script>
