<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>អាករលើតម្លៃបន្ថែម (VAT)</h1>
        <p class="desc">
          VAT ជាពន្ធប្រយោលលើការប្រើប្រាស់ ដែលគិតលើការផ្គត់ផ្គង់ទំនិញ និងសេវាកម្ម។
          បន្ទុកពន្ធចុងក្រោយស្ថិតលើអ្នកប្រើប្រាស់ចុងក្រោយ ខណៈអាជីវកម្មមានតួនាទីប្រមូល និងប្រកាសបង់ពន្ធ។
        </p>

        <div class="card">
          <h2>១) និយមន័យសំខាន់</h2>
          <ul>
            <li><strong>ធាតុចេញ (Output)</strong>៖ ការលក់ទំនិញ/សេវារបស់អាជីវកម្ម</li>
            <li><strong>អាករលើធាតុចេញ</strong>៖ VAT ដែលប្រមូលពីអតិថិជន</li>
            <li><strong>ធាតុចូល (Input)</strong>៖ ការទិញទំនិញ/សេវាសម្រាប់អាជីវកម្ម</li>
            <li><strong>អាករលើធាតុចូល</strong>៖ VAT ដែលអាជីវកម្មបានបង់ និងអាចដកជាឥណទាន</li>
          </ul>
        </div>

        <div class="card">
          <h2>២) ការចុះបញ្ជី VAT</h2>
          <ul>
            <li>បុគ្គលជាប់ពន្ធដែលធ្វើការផ្គត់ផ្គង់ជាប់ VAT ត្រូវចុះបញ្ជី VAT</li>
            <li>ត្រូវដាក់តាំងវិញ្ញាបនបត្រចុះបញ្ជី VAT នៅទីតាំងអាជីវកម្ម</li>
            <li>ត្រូវចេញវិក្កយបត្រពន្ធត្រឹមត្រូវទៅអ្នកទិញ</li>
          </ul>
        </div>

        <div class="card">
          <h2>៣) ប្រភេទផ្គត់ផ្គង់</h2>
          <ul>
            <li>ផ្គត់ផ្គង់ក្នុងស្រុក៖ អត្រាស្តង់ដារ <strong>10%</strong></li>
            <li>នាំចេញទំនិញ/សេវាកម្មដែលច្បាប់អនុញ្ញាត៖ អត្រា <strong>0%</strong></li>
            <li>មានប្រភេទផ្គត់ផ្គង់មិនជាប់ VAT ឬមានការលើកលែងតាមបទប្បញ្ញត្តិពាក់ព័ន្ធ</li>
          </ul>
        </div>

        <div class="card">
          <h2>៤) រូបមន្តគណនា VAT</h2>
          <p><strong>VAT ត្រូវបង់ = អាករលើធាតុចេញ − អាករលើធាតុចូល</strong></p>
          <p>
            ប្រសិនបើអាករលើធាតុចូលលើសអាករលើធាតុចេញ អាចក្លាយជាឥណទាន VAT សម្រាប់ខែបន្ទាប់
            (ឬស្នើសុំបង្វិលសងតាមលក្ខខណ្ឌច្បាប់)។
          </p>
        </div>

        <div class="card">
          <h2>៥) កាតព្វកិច្ចប្រកាស និងបង់</h2>
          <ul>
            <li>ប្រកាស និងបង់ VAT ប្រចាំខែ</li>
            <li>កាលកំណត់៖ យ៉ាងយឺតត្រឹម <strong>ថ្ងៃទី 20 នៃខែបន្ទាប់</strong></li>
            <li>ត្រូវរក្សាសៀវភៅទិន្នានុប្បវត្តិទិញ-លក់ និងឯកសារពន្ធឱ្យបានពេញលេញ</li>
          </ul>
        </div>
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
.desc { color: #334155; line-height: 1.9; margin-bottom: 14px; }
h2 { color: #0f172a; margin: 0 0 10px; font-size: 24px; }
p, li { color: #334155; line-height: 1.9; }
ul { margin: 0; padding-left: 20px; }
.card {
  background: #f8fffd;
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: 14px;
  padding: 18px 20px;
  margin-top: 16px;
}
</style>
