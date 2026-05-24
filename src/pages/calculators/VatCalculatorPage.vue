<template>
  <div class="page">
    <Navbar />
    <section class="wrap">
      <div class="box">
        <h1>ម៉ាស៊ីនគណនា VAT</h1>
        <p class="intro">គណនា VAT ត្រូវបង់ = Output VAT − Input VAT។</p>

        <div class="form-grid">
          <div>
            <label>ប្រភេទប្រតិបត្តិការ</label>
            <select v-model="supplyType">
              <option value="domestic">ផ្គត់ផ្គង់ក្នុងស្រុក</option>
              <option value="export">នាំចេញ (0%)</option>
            </select>
            <p class="help">ជ្រើសប្រភេទលក់ ដើម្បីកំណត់អត្រា VAT ត្រឹមត្រូវ។</p>
          </div>

          <div>
            <label>តម្លៃលក់ (Sales)</label>
            <input v-model.number="sales" type="number" placeholder="បញ្ចូលតម្លៃលក់" />
            <p class="help">បញ្ចូលចំនួនសរុបនៃការលក់ក្នុងខែនេះ។</p>
          </div>

          <div>
            <label>តម្លៃលក់នេះរួម VAT ដែរឬទេ?</label>
            <select v-model="salesIncludeVat">
              <option :value="false">មិនរួម VAT</option>
              <option :value="true">រួម VAT</option>
            </select>
            <p class="help">ជ្រើសឲ្យត្រូវ ដើម្បីបំបែកមូលដ្ឋានគិតពន្ធបានត្រឹមត្រូវ។</p>
          </div>

          <div>
            <label>តម្លៃទិញ (Purchases)</label>
            <input v-model.number="purchases" type="number" placeholder="បញ្ចូលតម្លៃទិញ" />
            <p class="help">បញ្ចូលចំនួនទិញដែលពាក់ព័ន្ធនឹងអាជីវកម្ម។</p>
          </div>

          <div>
            <label>តម្លៃទិញនេះរួម VAT ដែរឬទេ?</label>
            <select v-model="purchaseIncludeVat">
              <option :value="false">មិនរួម VAT</option>
              <option :value="true">រួម VAT</option>
            </select>
            <p class="help">ប្រើសម្រាប់គណនា Input VAT credit។</p>
          </div>

          <div>
            <label>អត្រា VAT</label>
            <select v-model.number="rate">
              <option :value="10">10%</option>
              <option :value="0">0%</option>
            </select>
            <p class="help">សម្រាប់ក្នុងស្រុកជាទូទៅ 10%។ នាំចេញប្រើ 0%។</p>
          </div>
        </div>

        <div class="result">
          <div>មូលដ្ឋានលក់: <strong>{{ outputBase.toFixed(2) }}</strong></div>
          <div>មូលដ្ឋានទិញ: <strong>{{ inputBase.toFixed(2) }}</strong></div>
          <div>Output VAT: <strong>{{ outputVat.toFixed(2) }}</strong></div>
          <div>Input VAT: <strong>{{ inputVat.toFixed(2) }}</strong></div>
          <div>VAT ត្រូវបង់: <strong>{{ payableVat.toFixed(2) }}</strong></div>
          <div>VAT ឥណទានលើកខែក្រោយ: <strong>{{ carryForward.toFixed(2) }}</strong></div>
        </div>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import FooterSection from '@/components/FooterSection.vue'

const supplyType = ref<'domestic' | 'export'>('domestic')
const sales = ref(0)
const salesIncludeVat = ref(false)
const purchases = ref(0)
const purchaseIncludeVat = ref(false)
const rate = ref(10)

const effectiveRate = computed(() => (supplyType.value === 'export' ? 0 : rate.value))
const outputBase = computed(() => (salesIncludeVat.value && effectiveRate.value > 0 ? sales.value / (1 + effectiveRate.value / 100) : sales.value))
const inputBase = computed(() => (purchaseIncludeVat.value && rate.value > 0 ? purchases.value / (1 + rate.value / 100) : purchases.value))
const outputVat = computed(() => outputBase.value * (effectiveRate.value / 100))
const inputVat = computed(() => inputBase.value * (rate.value / 100))
const net = computed(() => outputVat.value - inputVat.value)
const payableVat = computed(() => (net.value > 0 ? net.value : 0))
const carryForward = computed(() => (net.value < 0 ? Math.abs(net.value) : 0))
</script>

<style scoped>
.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input,select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}
</style>
