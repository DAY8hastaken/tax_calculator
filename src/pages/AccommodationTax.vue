
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
      calculator-link="/tax-calculator/accommodation"
      calculator-label="បើកម៉ាស៊ីនគណនាអាករលើការស្នាក់នៅ"
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

const title = "អាករលើការស្នាក់នៅ"
const intro = "អាករលើការស្នាក់នៅអនុវត្តលើសេវាស្នាក់នៅក្នុងសណ្ឋាគារ និងមូលដ្ឋានស្នាក់នៅដែលស្ថិតក្រោមរបបស្វ័យប្រកាស។ ក្នុងម៉ូឌុលនេះ គណនាលើថ្លៃបន្ទប់ស្នាក់នៅជាចម្បង ហើយបន្ទុកសេវា (Service Charge) ត្រូវបែងចែកផ្សេង ប្រសិនបើមិនមែនជាផ្នែកនៃថ្លៃបន្ទប់។"
const formula = "អាករលើការស្នាក់នៅ = មូលដ្ឋានគិតអាករ × 2%"
const whenOn = "ពេលលក់បន្ទប់ ឬសេវាស្នាក់នៅដែលច្បាប់ចាត់ទុកជាប្រតិបត្តិការជាប់អាករ។"
const whenOff = "ពេលមិនមែនជាសេវាស្នាក់នៅ ឬសេវាផ្សេងដែលមិនស្ថិតក្រោមអាករនេះ។"
const whenToUse = "ប្រើពេលគណនាថ្លៃបន្ទប់ និងពេលរៀបចំប្រកាសប្រចាំខែ។"
const keyPoints = [
  "អត្រា 2%",
  "ប្រកាសប្រចាំខែ",
  "ពេលតម្លៃរួម VAT ត្រូវបំបែកមូលដ្ឋានមុន"
]
const sections = [
  {
    "title": "១) និយមន័យ",
    "paragraphs": [
      "ពន្ធនេះយកលើសេវាស្នាក់នៅជាក់លាក់។ វាផ្តោតលើថ្លៃបន្ទប់ និងបន្ទុកដែលភ្ជាប់ជាមួយការស្នាក់នៅ មិនមែនលើមុខទំនិញទូទៅទាំងអស់ក្នុងសណ្ឋាគារទេ។"
    ]
  },
  {
    "title": "២) កម្មវត្ថុ",
    "bullets": [
      "សេវាស្នាក់នៅក្នុងសណ្ឋាគារ",
      "ថ្លៃបន្ទប់ស្នាក់នៅដែលជាមូលដ្ឋានគិតអាករ",
      "បន្ទុកសេវា (Service Charge) ត្រូវពិនិត្យថាជាផ្នែកនៃថ្លៃបន្ទប់ ឬជាការបែងចែកដោយឡែក"
    ]
  },
  {
    "title": "៣) អត្រា និងរូបមន្ត",
    "paragraphs": [
      "អាករលើការស្នាក់នៅ = មូលដ្ឋានគិតអាករ × 2%។ ក្នុងម៉ូឌុលនេះ មូលដ្ឋានគិតអាករគឺថ្លៃបន្ទប់ស្នាក់នៅ។ បើតម្លៃលក់រួម VAT និងអាករផ្សេងៗ សិស្សត្រូវបំបែកមូលដ្ឋានគិតអាករជាមុន។"
    ]
  },
  {
    "title": "៤) ពេលណាពន្ធអនុវត្ត?",
    "bullets": [
      "ពេលលក់បន្ទប់ស្នាក់នៅដែលជាប់អាករ",
      "ពេលសេវានោះស្ថិតក្រោមរបបស្វ័យប្រកាស",
      "ពេលត្រូវរៀបចំប្រកាសពន្ធប្រចាំខែ"
    ]
  },
  {
    "title": "៥) ពេលណាមិនអនុវត្ត?",
    "bullets": [
      "ពេលសេវាមិនមែនការស្នាក់នៅ",
      "ពេលជាសេវាអាហារ/ភេសជ្ជៈដោយឡែក",
      "ពេលបន្ទុកសេវាត្រូវបែងចែកដោយឡែកពីថ្លៃបន្ទប់",
      "ពេលស្ថិតក្នុងករណីលើកលែងតាមច្បាប់"
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
