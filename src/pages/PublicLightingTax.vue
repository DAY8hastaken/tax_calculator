
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
      calculator-link="/tax-calculator/public-lighting"
      calculator-label="បើកម៉ាស៊ីនគណនា PLT"
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

const title = "អាករសម្រាប់បំភ្លឺសាធារណៈ"
const intro = "អាករសម្រាប់បំភ្លឺសាធារណៈជាអាករប្រយោលលើផលិតផលជាក់លាក់មួយចំនួន។ ក្នុងមេរៀនសម្រាប់ប្រឡង សិស្សគួរយល់ពីទំនិញដែលជាប់អាករ ទំនិញដែលលើកលែង និងរូបមន្តគណនាផ្ទាល់។"
const formula = "អាករ PLT = មូលដ្ឋានគិតអាករ × 5%"
const whenOn = "ពេលលក់ ឬនាំចូលទំនិញជាប់អាករ ដូចជា ស្រា ស្រាបៀរ បារី និងស៊ីហ្គា។"
const whenOff = "ពេលជាទំនិញដែលច្បាប់លើកលែង ដូចជា ស្រាផលិតលក្ខណៈគ្រួសារ ទឹកខ្មេះ ឬថ្នាំជក់វត្ថុធាតុដើម។"
const whenToUse = "ប្រើពេលកំណត់តម្លៃលក់សម្រាប់ផលិតផលជាក់លាក់ និងពេលរៀបចំប្រកាសពន្ធប្រចាំខែ។"
const keyPoints = [
  "អត្រាគោល 5%",
  "អនុវត្តលើទំនិញជាក់លាក់",
  "ត្រូវប្រកាសប្រចាំខែ"
]
const sections = [
  {
    "title": "១) អាករនេះមានគោលបំណងអ្វី?",
    "paragraphs": [
      "អាករនេះប្រមូលពីទំនិញដែលរដ្ឋចង់គ្រប់គ្រងការប្រើប្រាស់ ដូចជា ស្រា ស្រាបៀរ បារី និងស៊ីហ្គា។ វាជាអាករប្រយោល ដូច្នេះអ្នកលក់ ឬអ្នកនាំចូលជាអ្នករៀបចំការប្រកាស។"
    ]
  },
  {
    "title": "២) ទំនិញជាប់អាករ",
    "bullets": [
      "ស្រា និងភេសជ្ជៈអាល់កុលមួយចំនួន",
      "ស្រាបៀរ",
      "បារី និងស៊ីហ្គា"
    ]
  },
  {
    "title": "៣) ទំនិញមិនអនុវត្ត",
    "bullets": [
      "ស្រាផលិតលក្ខណៈគ្រួសារ",
      "ទឹកខ្មេះ",
      "ថ្នាំជក់វត្ថុធាតុដើម"
    ]
  },
  {
    "title": "៤) រូបមន្ត",
    "paragraphs": [
      "រូបមន្តងាយចាំគឺ អាករ PLT = មូលដ្ឋានគិតអាករ × 5%។ បើតម្លៃលក់រួម VAT និងអាករផ្សេងៗ សិស្សត្រូវចេះបំបែកមូលដ្ឋានគិតអាករជាមុន។"
    ]
  },
  {
    "title": "៥) ពេលប្រើ និងពេលប្រកាស",
    "bullets": [
      "ពេលកំណត់តម្លៃលក់ផលិតផលជាក់លាក់",
      "ពេលរៀបចំប្រកាសពន្ធប្រចាំខែ",
      "កាលកំណត់ធម្មតាគឺថ្ងៃទី 20 ខែបន្ទាប់"
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
