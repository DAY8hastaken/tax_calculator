
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
      calculator-link="/tax-calculator/vat"
      calculator-label="បើកម៉ាស៊ីនគណនា VAT"
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

const title = "អាករលើតម្លៃបន្ថែម (VAT)"
const intro = "VAT ជាពន្ធប្រយោលលើការប្រើប្រាស់ ដែលអ្នកលក់ប្រមូលពីអតិថិជន ហើយដាក់ប្រកាសជូនរដ្ឋ។ សម្រាប់អ្នករៀនគណនេយ្យ វាជាពន្ធមូលដ្ឋានសំខាន់បំផុតមួយ ព្រោះវាជាប់ទាំងការចេញវិក្កយបត្រ ការរក្សាបញ្ជីទិញ-លក់ និងការកំណត់ output tax និង input tax។"
const formula = "VAT ត្រូវបង់ = អាករលើធាតុចេញ − អាករលើធាតុចូល"
const whenOn = "ពេលមានការលក់ ឬផ្គត់ផ្គង់ទំនិញ/សេវាកម្មជាប់ VAT ដោយបុគ្គលជាប់បញ្ជី VAT។"
const whenOff = "ពេលប្រតិបត្តិការលើកលែង VAT, ករណីអត្រា 0% ឬមិនមាន taxable supply។"
const whenToUse = "ប្រើពេលចេញវិក្កយបត្រលក់ទំនិញ/សេវា និងពេលរៀបចំប្រកាស VAT ប្រចាំខែ។"
const keyPoints = [
  "អត្រាទូទៅ 10% សម្រាប់ការផ្គត់ផ្គង់ក្នុងស្រុក",
  "0% អាចអនុវត្តលើការនាំចេញដែលច្បាប់អនុញ្ញាត",
  "ពន្ធត្រូវបង់គណនាពី output tax ដក input tax"
]
const sections = [
  {
    "title": "១) VAT គឺជាអ្វី?",
    "paragraphs": [
      "VAT គឺជាពន្ធលើតម្លៃបន្ថែមក្នុងដំណាក់កាលលក់ទំនិញ និងសេវា។ អាជីវកម្មមិនមែនជាអ្នកទទួលបន្ទុកពន្ធចុងក្រោយទេ តែជាអ្នកប្រមូលពន្ធជំនួសរដ្ឋ។",
      "អ្នកប្រើប្រាស់ចុងក្រោយគឺជាអ្នកទទួលបន្ទុកពន្ធពិតប្រាកដ។ ដូច្នេះសិស្សគួរយល់ច្បាស់ពីភាពខុសគ្នារវាង output tax, input tax និង net VAT payable។"
    ]
  },
  {
    "title": "២) ពេលណាពន្ធអនុវត្ត?",
    "bullets": [
      "ពេលលក់ទំនិញ ឬផ្តល់សេវាកម្មដែលស្ថិតក្រោម VAT",
      "ពេលអាជីវកម្មបានចុះបញ្ជី VAT និងចេញវិក្កយបត្រពន្ធ",
      "ពេលមានការនាំចូលទំនិញដែលត្រូវបញ្ចូល VAT តាមច្បាប់"
    ]
  },
  {
    "title": "៣) ពេលណាមិនអនុវត្ត?",
    "bullets": [
      "ពេលទំនិញ ឬសេវាស្ថិតក្នុងបញ្ជីលើកលែងពន្ធ",
      "ពេលអត្រា 0% តែប្រតិបត្តិការនៅតែត្រូវរាយការណ៍",
      "ពេលមូលដ្ឋានជាប់ពន្ធមិនកើតឡើង ឬមិនទាន់ចុះបញ្ជីតាមលក្ខខណ្ឌ"
    ],
    "note": "ចំណាំ: អត្រា 0% មិនមានន័យថា មិនចាំបាច់រាយការណ៍ទេ។ សិស្សជាច្រើនច្រឡំចំណុចនេះពេលប្រឡង។"
  },
  {
    "title": "៤) រូបមន្ត និងការគណនា",
    "paragraphs": [
      "រូបមន្តមូលដ្ឋានគឺ VAT ត្រូវបង់ = អាករលើធាតុចេញ − អាករលើធាតុចូល។",
      "បើ output tax ច្រើនជាង input tax អ្នកត្រូវបង់ចំនួនខុសគ្នានោះ។ បើ input tax ច្រើនជាង output tax អាចក្លាយជាឥណទាន VAT តាមលក្ខខណ្ឌច្បាប់។"
    ]
  },
  {
    "title": "៥) អ្វីដែលត្រូវចងចាំសម្រាប់ប្រឡង",
    "bullets": [
      "អត្រាស្តង់ដារ 10%",
      "គណនាជាប្រចាំខែ",
      "ដាក់ប្រកាសយ៉ាងយឺតត្រឹមថ្ងៃទី 20 នៃខែបន្ទាប់",
      "ត្រូវមានវិក្កយបត្រត្រឹមត្រូវ និងបញ្ជីទិញ-លក់ច្បាស់លាស់"
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
