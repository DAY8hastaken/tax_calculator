
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
      calculator-link="/tax-calculator/corporate-income"
      calculator-label="បើកម៉ាស៊ីនគណនាពន្ធអាជីវកម្ម"
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

const title = "ពន្ធលើប្រាក់ចំណូលអាជីវកម្ម"
const intro = "ពន្ធលើប្រាក់ចំណូលអាជីវកម្មគិតលើប្រាក់ចំណេញជាប់ពន្ធរបស់សហគ្រាស បន្ទាប់ពីដកចំណាយអនុញ្ញាត។ វាជាពន្ធសំខាន់សម្រាប់សិស្សគណនេយ្យ ព្រោះត្រូវភ្ជាប់ជាមួយបញ្ជីគណនេយ្យ ប្រាក់ចំណូល ចំណាយ និងការកែតម្រូវពន្ធ។"
const formula = "ពន្ធលើប្រាក់ចំណូលអាជីវកម្ម = ប្រាក់ចំណេញជាប់ពន្ធ × អត្រាពន្ធ"
const whenOn = "ពេលអាជីវកម្មមានប្រាក់ចំណេញជាប់ពន្ធ និងមិនស្ថិតក្រោមលក្ខខណ្ឌលើកលែង។"
const whenOff = "ពេលមិនទាន់មាន taxable profit ឬស្ថិតក្នុងរយៈពេលលើកលែង/អនុគ្រោះតាមច្បាប់។"
const whenToUse = "ប្រើពេលបិទបញ្ជីគណនេយ្យប្រចាំឆ្នាំ និងពេលរៀបចំ TOI return។"
const keyPoints = [
  "គណនាលើប្រាក់ចំណេញជាប់ពន្ធ",
  "ត្រូវមានបញ្ជីគណនេយ្យត្រឹមត្រូវ",
  "ប្រើសម្រាប់ TOI និងការបិទឆ្នាំពន្ធ"
]
const sections = [
  {
    "title": "១) ពន្ធនេះជាអ្វី?",
    "paragraphs": [
      "វាជាពន្ធលើប្រាក់ចំណេញសុទ្ធរបស់អាជីវកម្ម បន្ទាប់ពីគិតចំណូលអស់ និងដកចំណាយដែលច្បាប់អនុញ្ញាត។ បើគ្មានប្រាក់ចំណេញជាប់ពន្ធ ពន្ធនេះអាចមិនកើតឡើង ឬកើតក្នុងតម្លៃទាបជាងការគណនាធម្មតា។"
    ]
  },
  {
    "title": "២) មូលដ្ឋានគិតពន្ធ",
    "bullets": [
      "ប្រាក់ចំណូលសរុប",
      "ដកចំណាយអនុញ្ញាត",
      "កែតម្រូវតាមបទប្បញ្ញត្តិពន្ធដារ"
    ]
  },
  {
    "title": "៣) អត្រា និងករណីពិសេស",
    "bullets": [
      "អត្រាទូទៅជាញឹកញាប់ 20%",
      "មានអត្រាពិសេសសម្រាប់វិស័យ ឬរបបខ្លះៗ",
      "ត្រូវពិនិត្យអត្រាចុងក្រោយតាមប្រភេទអាជីវកម្ម"
    ]
  },
  {
    "title": "៤) ពេលណាពន្ធអនុវត្ត?",
    "bullets": [
      "ពេលមានប្រាក់ចំណេញជាប់ពន្ធ",
      "ពេលសហគ្រាសមិនស្ថិតក្រោមអនុគ្រោះពិសេស",
      "ពេលរៀបចំរបាយការណ៍ប្រចាំឆ្នាំ"
    ]
  },
  {
    "title": "៥) សម្រាប់ការប្រឡង",
    "bullets": [
      "ចាំថា taxable profit មិនស្មើ accounting profit ជានិច្ច",
      "ត្រូវពិនិត្យការកែតម្រូវចំណាយមិនអនុញ្ញាត",
      "សម្របការគណនាជាមួយ TOI return"
    ]
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
