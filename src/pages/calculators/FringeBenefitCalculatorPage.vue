<template>
  <TaxCalculatorLayout
    badge="Fringe Benefit Calculator"
    title="ម៉ាស៊ីនគណនាអត្ថប្រយោជន៍បន្ថែម"
    intro="គណនាពន្ធលើអត្ថប្រយោជន៍បន្ថែមដាច់ដោយឡែកពីប្រាក់បៀវត្ស ដោយអត្រា 20% លើតម្លៃ benefit ដែលនិយោជកផ្តល់ឱ្យនិយោជិត។"
    formula="ពន្ធលើអត្ថប្រយោជន៍បន្ថែម = តម្លៃអត្ថប្រយោជន៍ × 20%"
    :highlights="highlights"
    :tips="tips"
  >
    <template #fields>
      <div class="calc-grid">
        <div class="calc-field">
          <label class="calc-label">តម្លៃអត្ថប្រយោជន៍បន្ថែម (KHR)</label>
          <input v-model.number="benefitValue" class="calc-input" type="number" placeholder="បញ្ចូលតម្លៃអត្ថប្រយោជន៍បន្ថែម" />
          <p class="calc-help">បញ្ចូលតម្លៃទីផ្សារ ឬតម្លៃដែលអាចបញ្ជាក់បាននៃ benefit។</p>
        </div>

        <div class="calc-field calc-field--full">
          <label class="calc-label">ចំណាំ</label>
          <p class="calc-help">
            ម៉ូឌុលនេះគណនាតែ fringe benefit ប៉ុណ្ណោះ មិនរួម salary tax ទេ។
          </p>
        </div>
      </div>
    </template>

    <template #results>
      <div class="calc-result-list">
        <div class="calc-result-item">
          <span class="calc-result-label">តម្លៃ benefit</span>
          <strong class="calc-result-value">{{ benefitValue.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">អត្រាពន្ធ</span>
          <strong class="calc-result-value">20%</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធលើអត្ថប្រយោជន៍បន្ថែមត្រូវបង់</span>
          <strong class="calc-result-value">{{ tax.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const benefitValue = ref(0)
const tax = computed(() => Math.max(0, benefitValue.value) * 0.2)

const highlights = computed(() => [
  { label: 'តម្លៃ benefit', value: benefitValue.value.toFixed(2) },
  { label: 'អត្រាពន្ធ', value: '20%' },
  { label: 'ពន្ធត្រូវបង់', value: tax.value.toFixed(2) }
])

const tips = [
  'គណនាដាច់ដោយឡែកពី salary tax។',
  'អត្រា 20% ត្រូវអនុវត្តលើតម្លៃ benefit។',
  'បើ benefit ត្រូវបានបែងចែកជាតម្លៃទីផ្សារ សូមបញ្ចូលតម្លៃនោះជាមូលដ្ឋានគណនា។'
]
</script>
