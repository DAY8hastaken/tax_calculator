<template>
  <section class="tax-faq">
    <div class="container">
      <div class="section-title">
        <h2>សំណួរដែលគេសួរញឹកញាប់អំពីពន្ធ</h2>
        <p class="subtitle">ចម្លើយខ្លីៗ ងាយយល់ សម្រាប់អ្នកចាប់ផ្ដើម</p>
      </div>

      <div class="faq-container">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ active: openFaq === index }"
        >
          <button class="faq-question" @click="openFaq = openFaq === index ? -1 : index">
            <span class="question-text">{{ faq.question }}</span>
            <span class="toggle-icon">+</span>
          </button>

          <transition name="slide">
            <div v-if="openFaq === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
              <div v-if="faq.details" class="faq-details">
                <h5>{{ faq.detailsTitle }}</h5>
                <ul>
                  <li v-for="(detail, idx) in faq.details" :key="idx">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openFaq = ref(-1)

const faqs = [
  {
    question: 'ពន្ធគឺជាអ្វី?',
    answer: 'ពន្ធគឺជាការបង់ប្រាក់ជាកាតព្វកិច្ចទៅរដ្ឋ ដើម្បីគាំទ្រសេវាសាធារណៈដូចជា សុខាភិបាល អប់រំ ផ្លូវថ្នល់ និងសន្តិសុខ។',
    details: ['ជាកាតព្វកិច្ចតាមច្បាប់', 'ប្រើសម្រាប់ការអភិវឌ្ឍប្រទេស', 'អនុវត្តលើបុគ្គល និងអាជីវកម្ម'],
    detailsTitle: 'ចំណុចសំខាន់'
  },
  {
    question: 'ហេតុអ្វីត្រូវបង់ពន្ធ?',
    answer: 'ការបង់ពន្ធជួយឱ្យរដ្ឋមានថវិកាដើម្បីផ្តល់សេវាសាធារណៈ និងកែលម្អគុណភាពជីវិតប្រជាពលរដ្ឋ។',
    details: ['គាំទ្រសាលារៀន និងមន្ទីរពេទ្យ', 'ថែទាំហេដ្ឋារចនាសម្ព័ន្ធ', 'គាំទ្រការពារ និងរដ្ឋបាលសាធារណៈ'],
    detailsTitle: 'ពន្ធប្រើធ្វើអ្វីខ្លះ'
  },
  {
    question: 'VAT គឺជាអ្វី?',
    answer: 'VAT គឺអាករលើតម្លៃបន្ថែម ដែលអនុវត្តលើទំនិញ និងសេវាកម្ម។ អត្រាទូទៅគឺ 10% ហើយអាចមានអត្រា 5% ឬ 0% តាមលក្ខខណ្ឌ។',
    details: ['អត្រាទូទៅ 10%', 'ត្រូវចេញវិក្កយបត្រពន្ធ', 'អាជីវកម្មចុះបញ្ជីត្រូវដាក់ប្រកាសជាប្រចាំ'],
    detailsTitle: 'ព័ត៌មាន VAT'
  },
  {
    question: 'ពន្ធលើប្រាក់បៀវត្សគណនាយ៉ាងដូចម្តេច?',
    answer: 'ពន្ធលើប្រាក់បៀវត្សគណនាពីប្រាក់ខែបុគ្គលិក។ និយោជកត្រូវកាត់ទុកពន្ធពីប្រាក់ខែ និងបង់ជូនអគ្គនាយកដ្ឋានពន្ធដារ។',
    details: ['គណនាតាមប្រាក់បៀវត្សប្រចាំខែ', 'កាត់ទុកដោយនិយោជក', 'បង់តាមថ្ងៃកំណត់ផ្លូវការ'],
    detailsTitle: 'ព័ត៌មានពន្ធប្រាក់បៀវត្ស'
  },
  {
    question: 'បើមិនបង់ពន្ធនឹងមានអ្វីកើតឡើង?',
    answer: 'អាចប្រឈមការផាកពិន័យ ការប្រាក់បន្ថែម និងវិធានការផ្លូវច្បាប់។ ដូច្នេះគួរបង់ពន្ធឱ្យត្រឹមត្រូវ និងទាន់ពេល។',
    details: ['ផាកពិន័យហិរញ្ញវត្ថុ', 'ការប្រាក់លើពន្ធយឺត', 'អាចមានការត្រួតពិនិត្យសវនកម្ម'],
    detailsTitle: 'ផលវិបាកនៃការមិនអនុវត្ត'
  }
]
</script>

<style scoped>
.tax-faq {
  padding: 100px 20px;
  background: #ffffff;
}

.container {
  max-width: 980px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 46px;
}

.section-title h2 {
  font-size: 42px;
  font-weight: 900;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #64748b;
  font-weight: 500;
}

.faq-container {
  display: flex;
  flex-direction: column;
}

.faq-item {
  border: 1px solid rgba(15, 118, 110, 0.15);
  border-radius: 14px;
  margin-bottom: 12px;
  overflow: hidden;
  background: #fff;
}

.faq-question {
  width: 100%;
  background: #f8fafc;
  border: none;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.question-text {
  color: #0f766e;
  font-weight: 700;
  text-align: left;
}

.toggle-icon {
  font-size: 22px;
  color: #0f766e;
}

.faq-item.active .toggle-icon {
  transform: rotate(45deg);
}

.faq-answer {
  padding: 18px 20px;
  color: #475569;
  line-height: 1.8;
}

.faq-details h5 {
  color: #0f766e;
  margin: 14px 0 6px;
}

.faq-details ul {
  margin: 0;
  padding-left: 18px;
}

.slide-enter-active,
.slide-leave-active { transition: all 0.25s ease; }
.slide-enter-from,
.slide-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
