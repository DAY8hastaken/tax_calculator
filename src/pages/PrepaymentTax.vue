<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធបង់ជាមុន</h1>
        <p class="lead">
          ពន្ធបង់ជាមុន គឺជាការបង់ពន្ធជាមុនតាមចំណូលប្រចាំខែ ឬត្រីមាស ដើម្បីធានាថាអាជីវកម្មអនុវត្តកាតព្វកិច្ចពន្ធបានទាន់ពេល។
        </p>

        <h2>ចំណុចសំខាន់</h2>
        <ul>
          <li>អត្រាទូទៅប្រើប្រាស់ប្រហែល 1% - 1.5% (អាស្រ័យលើប្រភេទអាជីវកម្ម)</li>
          <li>គណនាតាមចំណូលសរុប មិនមែនចំណេញសុទ្ធ</li>
          <li>ត្រូវដាក់ប្រកាស និងបង់តាមថ្ងៃកំណត់របស់ពន្ធដារ</li>
        </ul>

        <h2>អ្នកណាត្រូវបង់</h2>
        <p>សហគ្រាស និងអាជីវកម្មដែលបានចុះបញ្ជីពន្ធដារ ហើយមានចំណូលពីសកម្មភាពអាជីវកម្ម។</p>

        <h2>ឧទាហរណ៍ខ្លី</h2>
        <p>បើចំណូលខែនេះ = 10,000 ដុល្លារ និងអត្រា = 1% នោះពន្ធបង់ជាមុន = 100 ដុល្លារ។</p>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page { width: 100%; overflow-x: hidden; background: #ffffff; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.tax-section { padding: 56px 0; }
h1 { color: #0f766e; font-size: 34px; margin-bottom: 14px; }
.lead { color: #334155; line-height: 1.9; margin-bottom: 20px; }
h2 { color: #0f172a; margin: 18px 0 10px; font-size: 24px; }
p, li { color: #334155; line-height: 1.9; }
ul { padding-left: 22px; }
</style>
