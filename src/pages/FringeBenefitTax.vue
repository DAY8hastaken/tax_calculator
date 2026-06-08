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
      calculator-link="/tax-calculator/fringe-benefit"
      calculator-label="បើកម៉ាស៊ីនគណនាអត្ថប្រយោជន៍បន្ថែម"
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

const title = 'ពន្ធលើអត្ថប្រយោជន៍បន្ថែម'
const intro = 'ពន្ធលើអត្ថប្រយោជន៍បន្ថែម (Fringe Benefits Tax) គឺជាពន្ធលើទំនិញ សេវា ឬអត្ថប្រយោជន៍ដែលនិយោជកផ្តល់ឱ្យនិយោជិតដោយផ្ទាល់ ឬដោយប្រយោល។ វាត្រូវបានព្យាបាលដាច់ដោយឡែកពីប្រាក់បៀវត្សធម្មតា ហើយត្រូវកាត់ពន្ធ 20% លើតម្លៃអត្ថប្រយោជន៍។'
const formula = 'ពន្ធលើអត្ថប្រយោជន៍បន្ថែម = តម្លៃអត្ថប្រយោជន៍ × 20%'
const whenOn = 'ពេលនិយោជកផ្តល់រថយន្ត អាហារ ការស្នាក់នៅ ទឹក ភ្លើង ទូរស័ព្ទ ឬអត្ថប្រយោជន៍ផ្សេងៗដែលច្បាប់ចាត់ទុកថាជាប់ពន្ធ។'
const whenOff = 'ពេលអត្ថប្រយោជន៍ស្ថិតក្នុងបញ្ជីលើកលែងតាមច្បាប់ ឬមិនមែនជាប្រយោជន៍ដែលផ្តល់ដល់និយោជិត។'
const whenToUse = 'ប្រើពេលចង់គណនាតម្លៃអត្ថប្រយោជន៍ដែលត្រូវកាត់ពន្ធ 20% ដោយឡែកពីប្រាក់ខែធម្មតា។'
const keyPoints = [
  'អត្រាពន្ធ 20% លើតម្លៃអត្ថប្រយោជន៍',
  'ត្រូវយកតម្លៃទីផ្សារ ឬតម្លៃតាមសមហេតុផលជាមូលដ្ឋាន',
  'គណនាដាច់ដោយឡែកពី salary tax'
]
const sections = [
  {
    title: '១) និយមន័យ',
    paragraphs: [
      'អត្ថប្រយោជន៍បន្ថែមជាទំនិញ សេវា ឬការផ្តល់ឧបត្ថម្ភដែលនិយោជកផ្តល់ឱ្យនិយោជិតក្រៅពីប្រាក់ខែគោល។',
      'ក្នុងមេរៀននេះ វាត្រូវបានយកទៅគណនាជាពន្ធដោយឡែកពី salary tax ដូច្នេះសិស្សគួរមើលវាជាប្រភេទ taxable benefit មួយខុសពីប្រាក់បៀវត្សធម្មតា។'
    ]
  },
  {
    title: '២) ឧទាហរណ៍អត្ថប្រយោជន៍បន្ថែម',
    bullets: [
      'រថយន្តគ្រប់ប្រភេទ',
      'អាហារ និងការស្នាក់នៅ',
      'ទឹក ភ្លើង ទូរស័ព្ទ',
      'ជំនួយសិក្សា ឬអត្ថប្រយោជន៍ផ្សេងៗ',
      'ការប្រាក់ទាបជាងទីផ្សារ'
    ]
  },
  {
    title: '៣) រូបមន្ត និងអត្រា',
    paragraphs: [
      'រូបមន្តងាយចាំគឺ ពន្ធលើអត្ថប្រយោជន៍បន្ថែម = តម្លៃអត្ថប្រយោជន៍ × 20%។',
      'សម្រាប់ការរៀន សិស្សគួរយល់ថាតម្លៃអត្ថប្រយោជន៍ជាទូទៅយកតាមតម្លៃទីផ្សារ ឬតម្លៃដែលអាចបញ្ជាក់បាន។'
    ]
  },
  {
    title: '៤) ពេលណាពន្ធអនុវត្ត និងមិនអនុវត្ត',
    bullets: [
      'អនុវត្តពេលនិយោជកផ្តល់ benefit ជាក់ស្តែងដល់និយោជិត',
      'មិនអនុវត្តពេល benefit ស្ថិតក្នុងលើកលែងតាមច្បាប់',
      'ត្រូវពិនិត្យថា benefit នោះបែងចែកចូល salary ឬ fringe ដោយឯករាជ្យ'
    ]
  },
  {
    title: '៥) ចំណុចសម្រាប់ប្រឡង',
    bullets: [
      'កុំច្រឡំ fringe benefits ជាមួយប្រាក់ខែគោល',
      'អត្រាគឺ 20%',
      'គណនាតម្លៃ benefit ដាច់ដោយឡែកពី salary tax'
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
