
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
      calculator-link="/tax-calculator/specific"
      calculator-label="បើកម៉ាស៊ីនគណនាអាករពិសេស"
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

const title = "អាករពិសេស (Specific Tax)"
const intro = "អាករពិសេសជាអាករលើទំនិញ និងសេវាមួយចំនួនដែលមានលក្ខណៈប្រណិត ឬរដ្ឋចង់គ្រប់គ្រងការប្រើប្រាស់។ សម្រាប់ការសិក្សា សិស្សគួរយល់ទាំងអត្រា និងមូលហេតុដែលបញ្ចូលទំនិញនោះក្នុងប្រភេទជាប់អាករ។"
const formula = "អាករពិសេស = មូលដ្ឋានគិតអាករ × អត្រាអាករ"
const whenOn = "ពេលផលិត នាំចូល ឬផ្តល់សេវាដែលស្ថិតក្នុងបញ្ជីអាករពិសេស។"
const whenOff = "ពេលទំនិញ/សេវាមិនស្ថិតក្នុងបញ្ជីជាប់អាករ ឬមានការលើកលែងតាមច្បាប់។"
const whenToUse = "ប្រើពេលកំណត់តម្លៃលក់ ឬតម្លៃនាំចូលរបស់ទំនិញ និងសេវាដែលស្ថិតក្រោម specific tax។"
const keyPoints = [
  "អត្រាខុសគ្នាតាមទំនិញ និងសេវា",
  "ទំនិញក្នុងស្រុក និងនាំចូលអាចគ្រប់គ្រងខុសគ្នា",
  "ប្រកាសប្រចាំខែ"
]
const sections = [
  {
    "title": "១) អាករពិសេសគឺជាអ្វី?",
    "paragraphs": [
      "នេះជាអាករដែលយកលើទំនិញ/សេវាដែលមិនចង់ឱ្យប្រើប្រាស់ច្រើន ឬជាទំនិញប្រណិត។ ការយល់របស់សិស្សគួរចាប់ផ្តើមពីការដឹងថា ប្រភេទផលិតផលណាខ្លះនៅក្នុងបញ្ជី។"
    ]
  },
  {
    "title": "២) ទំនិញជាប់អាករ",
    "bullets": [
      "សុរា/ស្រា: 35%",
      "ស្រាបៀរ: 30%",
      "បារី: 20%",
      "ស៊ីហ្គា: 25%",
      "ភេសជ្ជៈ: 10%",
      "ស៊ីម៉ង់ត៍: 5%"
    ]
  },
  {
    "title": "៣) សេវាជាប់អាករ",
    "bullets": [
      "សេវាដឹកជញ្ជូនតាមអាកាស: 10%",
      "សេវាកម្សាន្ត: 10%",
      "សេវាទូរគមនាគមន៍: 3%"
    ]
  },
  {
    "title": "៤) អាជ្ញាធរ និងការគ្រប់គ្រង",
    "bullets": [
      "ទំនិញផលិតក្នុងស្រុក និងសេវាក្នុងស្រុក: អគ្គនាយកដ្ឋានពន្ធដារ",
      "ទំនិញនាំចូល: អគ្គនាយកដ្ឋានគយ និងរដ្ឋាករ",
      "ត្រូវពិនិត្យប្រភេទទំនិញមុនប្រើអត្រា"
    ]
  },
  {
    "title": "៥) ពេលប្រើ និងសម្រាប់ប្រឡង",
    "paragraphs": [
      "រូបមន្តគឺ អាករពិសេស = មូលដ្ឋានគិតអាករ × អត្រា។ សម្រាប់ការប្រឡង សិស្សគួរចាំថា specific tax មិនមែន VAT ទេ ហើយអត្រារបស់វាខុសគ្នាតាមប្រភេទទំនិញ/សេវា។"
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
