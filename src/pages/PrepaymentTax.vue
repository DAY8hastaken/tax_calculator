
<template>
  <div class="page">
    <Navbar />
    <TaxLessonLayout
      :title="title"
      :intro="intro"
      :formula="formula"
      :when-on="whenOn"
      :when-off="whenOff"
      :when-to-use="whenToUse"
      calculator-link="/tax-calculator/prepayment"
      calculator-label="បើកម៉ាស៊ីនគណនាពន្ធបង់ជាមុន"
      :key-points="keyPoints"
      :sections="sections"
    />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
import TaxLessonLayout from '../components/TaxLessonLayout.vue'

const title = "ពន្ធលើប្រាក់ចំណូលបង់ជាមុន"
const intro = "ពន្ធលើប្រាក់ចំណូលបង់ជាមុនជាការបង់ពន្ធប្រចាំខែមុនលើប្រាក់ចំណូលប្រចាំឆ្នាំ។ វាត្រូវបានយកទៅកាត់កងនៅពេលបិទឆ្នាំពន្ធ ដូច្នេះសិស្សគួរយល់ថាវាមិនមែនជាពន្ធបន្ថែមលើស TOI ទេ ប៉ុន្តែជាការបង់ជាមុន។"
const formula = "ពន្ធបង់ជាមុន = មូលដ្ឋានគិតពន្ធ × 1%"
const whenOn = "ពេលសហគ្រាសជាប់ពន្ធលើប្រាក់ចំណូលមានផលរបរត្រូវគិតជាមូលដ្ឋានបង់ជាមុនប្រចាំខែ។"
const whenOff = "ពេលមានការលើកលែងតាមច្បាប់ ឬករណី QIP ដែលស្ថិតក្នុងរយៈពេលអនុគ្រោះពន្ធ។"
const whenToUse = "ប្រើពេលរៀបចំប្រកាសពន្ធប្រចាំខែ និងពេលបង់ជាមុនលើប្រាក់ចំណូលដែលនឹងកាត់កងនៅចុងឆ្នាំ។"
const keyPoints = [
  "គណនាលើ turnover មិនមែនលើ net profit",
  "អត្រាមូលដ្ឋាន 1%",
  "អាចយកទៅកាត់កងពេលគណនាពន្ធប្រចាំឆ្នាំ"
]
const sections = [
  {
    "title": "១) និយមន័យ",
    "paragraphs": [
      "នេះជាការបង់ពន្ធប្រចាំខែដែលប្រើលើអ្នកជាប់ពន្ធលើប្រាក់ចំណូល។ ពេលចុងឆ្នាំ ទឹកប្រាក់ដែលបានបង់ជាមុនអាចយកទៅដកចេញពីកាតព្វកិច្ចពន្ធប្រចាំឆ្នាំ។",
      "សម្រាប់ការប្រឡង សិស្សគួរចាំថា prepayment tax គឺ based on gross turnover, not net profit."
    ]
  },
  {
    "title": "២) អ្នកណាត្រូវបង់?",
    "bullets": [
      "សហគ្រាសជាប់ពន្ធលើប្រាក់ចំណូល",
      "អាជីវកម្មដែលស្ថិតក្នុងរបបពិត",
      "គម្រោងខ្លះៗអាចមានការលើកលែងតាមលក្ខខណ្ឌពិសេស"
    ]
  },
  {
    "title": "៣) មូលដ្ឋាន និងរូបមន្ត",
    "bullets": [
      "បើ turnover រួម VAT: មូលដ្ឋានគិតពន្ធ = turnover / 1.1",
      "បើ turnover មិនរួម VAT: មូលដ្ឋានគិតពន្ធ = turnover",
      "ពន្ធបង់ជាមុន = មូលដ្ឋានគិតពន្ធ × 1%"
    ]
  },
  {
    "title": "៤) ពេលណាមិនអនុវត្ត?",
    "bullets": [
      "ពេលស្ថិតក្នុងការលើកលែងតាមច្បាប់",
      "ពេល QIP ឬគម្រោងលើកទឹកចិត្តស្ថិតក្នុងរយៈពេលអនុគ្រោះ",
      "ពេលការលក់មិនកើត tax base ដូចដែលច្បាប់កំណត់"
    ]
  },
  {
    "title": "៥) ការដាក់ប្រកាស និងពេលប្រើ",
    "bullets": [
      "ប្រកាសជារៀងរាល់ខែ",
      "ប្រើក្នុងការរៀបចំ cash flow និងការបិទឆ្នាំពន្ធ",
      "ទម្រង់ P701 ត្រូវបានយោងក្នុងមេរៀនដើម"
    ],
    "note": "គន្លឹះប្រឡង: សិស្សគួរអាចបំបែករវាង tax on revenue និង tax on profit ដោយច្បាស់។"
  }
]
</script>

<style scoped>
.page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}
</style>
