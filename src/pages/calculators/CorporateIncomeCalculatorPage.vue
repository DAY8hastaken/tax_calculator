<template>
  <TaxCalculatorLayout
    badge="Income Tax Calculator"
    title="ម៉ាស៊ីនគណនាពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំ"
    intro="គណនាពន្ធលើប្រាក់ចំណូលប្រចាំឆ្នាំតាមតារាងអត្រាបន្ថយឡើង ប្រៀបធៀបជាមួយពន្ធអប្បបរមា និងបង្ហាញប្រាក់ត្រូវបង់ចុងក្រោយបន្ទាប់ពីកាត់ឥណទានពន្ធកាត់ទុក និងប្រាក់រំដោះពន្ធលើប្រាក់ចំណូល។"
    formula="ពន្ធត្រូវបង់ចុងក្រោយ = max(ពន្ធលើប្រាក់ចំណូល, ពន្ធអប្បបរមា) − ឥណទានពន្ធកាត់ទុក − ប្រាក់រំដោះពន្ធលើប្រាក់ចំណូល"
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
          <label class="calc-label">ផលរបរប្រចាំឆ្នាំ (មិនរួម VAT)</label>
          <input v-model.number="annualTurnover" class="calc-input" type="number" placeholder="បញ្ចូលផលរបរប្រចាំឆ្នាំ" />
          <p class="calc-help">ប្រើសម្រាប់គណនាពន្ធអប្បបរមា 1%។</p>
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

        <div class="calc-field">
          <label class="calc-label">ឥណទានពន្ធកាត់ទុក</label>
          <input v-model.number="withholdingCredit" class="calc-input" type="number" placeholder="បញ្ចូលឥណទានពន្ធកាត់ទុក" />
          <p class="calc-help">ពន្ធដែលកាត់ទុករួច ហើយអាចយកមកដកចេញបាន។</p>
        </div>

        <div class="calc-field">
          <label class="calc-label">ប្រាក់រំដោះពន្ធលើប្រាក់ចំណូល</label>
          <input v-model.number="incomeCredit" class="calc-input" type="number" placeholder="បញ្ចូលប្រាក់រំដោះពន្ធ" />
          <p class="calc-help">ប្រាក់ដែលបានបង់ជាមុនលើពន្ធលើប្រាក់ចំណូល។</p>
        </div>

        <div v-if="taxProfile === 'progressive'" class="calc-field calc-field--full">
          <label class="calc-label">ចំណាំសម្រាប់តារាងបន្ថយឡើង</label>
          <p class="calc-help">
            ជួរពន្ធប្រចាំឆ្នាំប្រើលើប្រាក់ចំណេញជាប់ពន្ធសម្រាប់រូបវន្តបុគ្គល សហគ្រាសឯករូប និងចំណែកដែលមិនត្រូវបានចាត់ទុកជានីតិបុគ្គល។
          </p>
        </div>

        <div class="calc-field calc-field--full">
          <label class="calc-label">តារាងអត្រាពន្ធកើនឡើង</label>
          <div class="rate-reference">
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>កម្រិតប្រាក់ចំណេញជាប់ពន្ធ (P)</th>
                    <th>អត្រា</th>
                    <th>រូបមន្ត</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0៛ ដល់ 18,000,000៛</td>
                    <td>0%</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>18,000,001៛ ដល់ 24,000,000៛</td>
                    <td>5%</td>
                    <td>P × 5% − 900,000</td>
                  </tr>
                  <tr>
                    <td>24,000,001៛ ដល់ 102,000,000៛</td>
                    <td>10%</td>
                    <td>P × 10% − 2,100,000</td>
                  </tr>
                  <tr>
                    <td>102,000,001៛ ដល់ 150,000,000៛</td>
                    <td>15%</td>
                    <td>P × 15% − 7,200,000</td>
                  </tr>
                  <tr>
                    <td>លើស 150,000,000៛</td>
                    <td>20%</td>
                    <td>P × 20% − 14,200,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="rate-note">
              P = Taxable Profit។ តារាងនេះជាជំហានដំបូងក្នុងការគណនាពន្ធលើប្រាក់ចំណូល មុនយកទៅប្រៀបធៀបជាមួយពន្ធអប្បបរមា។
            </p>
          </div>
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
          <span class="calc-result-label">ពន្ធលើប្រាក់ចំណូល</span>
          <strong class="calc-result-value">{{ incomeTax.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">ពន្ធអប្បបរមា</span>
          <strong class="calc-result-value">{{ minimumTax.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">ពន្ធមុនកាត់ឥណទាន</span>
          <strong class="calc-result-value">{{ taxBeforeCredits.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item">
          <span class="calc-result-label">ឥណទានពន្ធកាត់ទុក + ប្រាក់រំដោះ</span>
          <strong class="calc-result-value">{{ totalCredits.toFixed(2) }}</strong>
        </div>
        <div class="calc-result-item calc-result-item--accent">
          <span class="calc-result-label">ពន្ធត្រូវបង់ចុងក្រោយ</span>
          <strong class="calc-result-value">{{ finalTaxDue.toFixed(2) }}</strong>
        </div>
      </div>
    </template>
  </TaxCalculatorLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaxCalculatorLayout from '@/components/TaxCalculatorLayout.vue'

const taxableProfit = ref(0)
const annualTurnover = ref(0)
const withholdingCredit = ref(0)
const incomeCredit = ref(0)
const taxProfile = ref<'progressive' | 'resource' | 'qip'>('progressive')

const incomeTax = computed(() => {
  const p = Math.max(0, taxableProfit.value)
  if (taxProfile.value === 'qip') return 0
  if (taxProfile.value === 'resource') return p * 0.3
  if (p <= 18000000) return 0
  if (p <= 24000000) return p * 0.05 - 900000
  if (p <= 102000000) return p * 0.1 - 2100000
  if (p <= 150000000) return p * 0.15 - 7200000
  return p * 0.2 - 14200000
})

const minimumTax = computed(() => Math.max(0, annualTurnover.value) * 0.01)

const taxBeforeCredits = computed(() => Math.max(incomeTax.value, minimumTax.value))

const totalCredits = computed(() => Math.max(0, withholdingCredit.value) + Math.max(0, incomeCredit.value))

const finalTaxDue = computed(() => Math.max(0, taxBeforeCredits.value - totalCredits.value))

const highlights = computed(() => [
  { label: 'ប្រភេទអត្រា', value: rateLabel.value },
  { label: 'ចំណេញជាប់ពន្ធ', value: taxableProfit.value.toFixed(2) },
  { label: 'ពន្ធត្រូវបង់ចុងក្រោយ', value: finalTaxDue.value.toFixed(2) }
])

const rateLabel = computed(() => {
  if (taxProfile.value === 'qip') return '0%'
  if (taxProfile.value === 'resource') return '30%'
  return '0% - 20%'
})

const tips = [
  'តារាង 0% - 20% ប្រើសម្រាប់ប្រាក់ចំណេញជាប់ពន្ធប្រចាំឆ្នាំតាមជួរតម្លៃ។',
  'ប្រាក់ចំណូលពីផលិតផលប្រេងកាត ឬធនធានធម្មជាតិប្រើអត្រា 30%។',
  'QIP ក្នុងរយៈពេលលើកលែងអាចប្រើអត្រា 0% តាមលក្ខខណ្ឌ។',
  'ពន្ធអប្បបរមាគណនាពីផលរបរមិនរួម VAT ប្រចាំឆ្នាំ × 1%។',
  'ពន្ធចុងក្រោយយកតម្លៃខ្ពស់ជាងរវាងពន្ធលើប្រាក់ចំណូល និងពន្ធអប្បបរមា បន្ទាប់មកដកឥណទាន។'
]
</script>

<style scoped>
.rate-reference {
  background: linear-gradient(180deg, #f8fffd 0%, #ffffff 100%);
  border: 1px solid rgba(20, 184, 166, 0.18);
  border-radius: 18px;
  padding: 18px;
}

.table-wrap {
  overflow-x: auto;
}

.rate-reference table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
}

.rate-reference th,
.rate-reference td {
  border: 1px solid rgba(20, 184, 166, 0.18);
  padding: 10px 12px;
  text-align: left;
}

.rate-reference th {
  background: #ecfeff;
  color: #0f766e;
}

.rate-note {
  margin: 10px 0 0;
  color: #64748b;
  line-height: 1.7;
  font-size: 14px;
}
</style>
