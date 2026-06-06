<template>
  <TaxCalculatorLayout
    badge="PLT Calculator"
    title="ម៉ាស៊ីនគណនាអាករសម្រាប់បំភ្លឺសាធារណៈ"
    intro="គណនា PLT អត្រា 5% សម្រាប់ទំនិញជាក់លាក់ ដោយគិតតាមប្រភេទអ្នកលក់ និងស្ថានភាពតម្លៃដែលរួម ឬមិនរួម VAT និង PLT។"
    formula="PLT = មូលដ្ឋានគិតអាករ × 5%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">ប្រភេទទំនិញ</label>
          <select v-model="product" class="calc-select">
            <option value="beer">ស្រាបៀរ</option>
            <option value="alcohol">ស្រា / អាល់កុល</option>
            <option value="cigarette">បារី / ស៊ីហ្គា</option>
          </select>
          <p class="calc-help">ជ្រើសប្រភេទទំនិញដែលស្ថិតក្រោម PLT។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ប្រភេទអ្នកលក់</label>
          <select v-model="seller" class="calc-select">
            <option value="first">អ្នកលក់ដំបូង</option>
            <option value="next">អ្នកលក់បន្ត</option>
          </select>
          <p class="calc-help">ក្នុងម៉ូឌុលនេះ អ្នកលក់បន្តប្រើមូលដ្ឋានគិត 20% តាមគំរូសិក្សា។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃលក់ / ផរបរសរុប</label>
          <input v-model.number="gross" class="calc-input" type="number" placeholder="បញ្ចូលតម្លៃលក់សរុប" />
          <p class="calc-help">បញ្ចូលចំនួនលក់សរុបដែលត្រូវយកមកគណនា។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">តម្លៃនេះរួម VAT និង PLT ដែរឬទេ?</label>
          <select v-model="inc" class="calc-select">
            <option :value="true">រួម VAT និង PLT</option>
            <option :value="false">មិនរួម</option>
          </select>
          <p class="calc-help">បើរួម ប្រព័ន្ធនឹងបំបែកមូលដ្ឋានគិតអាករចេញជាមុន។</p>
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
          <span class="calc-result-label">អត្រា PLT</span>
          <strong class="calc-result-value">5%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">PLT ត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const product = ref('beer')
const seller = ref('first')
const gross = ref(0)
const inc = ref(true)

const base = computed(() => {
  const normalized = inc.value ? gross.value / 1.1 / 1.05 : gross.value
  return normalized * (seller.value === 'next' ? 0.2 : 1)
})

const tax = computed(() => base.value * 0.05)

const highlights = computed(() => [
  { label: 'ប្រភេទទំនិញ', value: product.value },
  { label: 'មូលដ្ឋានគិតអាករ', value: base.value.toFixed(2) },
  { label: 'PLT ត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'PLT ក្នុងម៉ូឌុលនេះគណនាតាមអត្រា 5% លើមូលដ្ឋានគិតអាករ។',
  'បើតម្លៃរួម VAT និង PLT ត្រូវបំបែកចេញជាមុន មុននឹងគណនា PLT។',
  'អ្នកលក់បន្តអាចមានមូលដ្ឋានគិតខុសពីអ្នកលក់ដំបូងតាមគំរូអនុវត្ត។'
]
</script>
