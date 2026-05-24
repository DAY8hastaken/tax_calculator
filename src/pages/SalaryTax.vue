<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធលើប្រាក់បៀវត្ស (Tax on Salary)</h1>
        <p class="desc">
          ពន្ធលើប្រាក់បៀវត្ស គឺជាពន្ធប្រចាំខែ ដែលនិយោជកត្រូវកាត់ទុកពីប្រាក់បៀវត្ស និយោជិត
          ហើយដាក់ប្រកាស និងបង់ជូនអគ្គនាយកដ្ឋានពន្ធដារ។
        </p>

        <div class="card">
          <h2>១) និយមន័យសំខាន់</h2>
          <ul>
            <li><strong>និវាសនជន</strong>៖ មានលក្ខខណ្ឌស្នាក់នៅតាមច្បាប់ (ជាធម្មតា មានវត្តមានលើស 182 ថ្ងៃក្នុង 12 ខែ)</li>
            <li><strong>អនិវាសនជន</strong>៖ មិនមែនជានិវាសនជន ប៉ុន្តែទទួលចំណូលការងារពីប្រភពកម្ពុជា</li>
            <li><strong>ប្រាក់បៀវត្សជាប់ពន្ធ</strong>៖ ប្រាក់ខែគោល ប្រាក់បន្ថែមម៉ោង ប្រាក់រង្វាន់ ប្រាក់ឧបត្ថម្ភ និងអត្ថប្រយោជន៍បន្ថែម</li>
          </ul>
        </div>

        <div class="card">
          <h2>២) អត្រាពន្ធ (និវាសនជន) ប្រចាំខែ</h2>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>មូលដ្ឋានគិតពន្ធ (KHR)</th>
                  <th>អត្រា</th>
                  <th>រូបមន្តរហ័ស</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0 – 1,500,000</td>
                  <td>0%</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1,500,001 – 2,000,000</td>
                  <td>5%</td>
                  <td>មូលដ្ឋាន × 5% − 75,000</td>
                </tr>
                <tr>
                  <td>2,000,001 – 8,500,000</td>
                  <td>10%</td>
                  <td>មូលដ្ឋាន × 10% − 175,000</td>
                </tr>
                <tr>
                  <td>8,500,001 – 12,500,000</td>
                  <td>15%</td>
                  <td>មូលដ្ឋាន × 15% − 600,000</td>
                </tr>
                <tr>
                  <td>លើស 12,500,000</td>
                  <td>20%</td>
                  <td>មូលដ្ឋាន × 20% − 1,225,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <h2>៣) ទាយជ្ជទានកាត់បន្ថយ (សម្រាប់និវាសនជន)</h2>
          <ul>
            <li>កូនក្នុងបន្ទុកម្នាក់៖ <strong>150,000 KHR/ខែ</strong></li>
            <li>សហព័ទ្ធមិនធ្វើការ៖ <strong>150,000 KHR/ខែ</strong></li>
          </ul>
          <p class="note">
            អនិវាសនជនមិនអនុញ្ញាតឱ្យកាត់បន្ថយទាយជ្ជទានទេ។
          </p>
        </div>

        <div class="card">
          <h2>៤) អនិវាសនជន</h2>
          <p>
            ប្រាក់បៀវត្សពីប្រភពកម្ពុជា ត្រូវកាត់ពន្ធអត្រាថេរ <strong>20%</strong>
            លើមូលដ្ឋានជាប់ពន្ធ ដោយគ្មានការកាត់បន្ថយទាយជ្ជទាន។
          </p>
        </div>

        <div class="card">
          <h2>៥) អត្ថប្រយោជន៍បន្ថែម (Fringe Benefits)</h2>
          <p>
            អត្ថប្រយោជន៍បន្ថែមជាច្រើនប្រភេទ (រថយន្ត អាហារ ស្នាក់នៅ ទឹកភ្លើង ទូរស័ព្ទ…)
            ត្រូវកាត់ពន្ធតាមអត្រា <strong>20%</strong> លើតម្លៃអត្ថប្រយោជន៍។
          </p>
        </div>

        <div class="card">
          <h2>៦) កាតព្វកិច្ចប្រកាស និងបង់ពន្ធ</h2>
          <ul>
            <li>និយោជកត្រូវកាត់ទុកពន្ធ នៅពេលបើកប្រាក់បៀវត្ស</li>
            <li>ដាក់ប្រកាស និងបង់ពន្ធ <strong>យ៉ាងយឺតត្រឹមថ្ងៃទី 20</strong> នៃខែបន្ទាប់</li>
            <li>ត្រូវរក្សាទុកបញ្ជីបើកប្រាក់ខែ និងឯកសារពាក់ព័ន្ធឱ្យបានត្រឹមត្រូវ</li>
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
.desc { color: #334155; line-height: 1.85; margin-bottom: 14px; }
h2 { color: #0f172a; margin: 0 0 10px; font-size: 24px; }
p, li { color: #334155; line-height: 1.85; }
ul { margin: 0; padding-left: 22px; }
.card {
  background: #f8fffd;
  border: 1px solid rgba(20, 184, 166, 0.2);
  border-radius: 14px;
  padding: 18px 20px;
  margin-top: 16px;
}
.note {
  margin-top: 8px;
  color: #0f766e;
  font-weight: 600;
}
.table-wrap {
  overflow-x: auto;
  margin-top: 8px;
}
table {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
}
th, td {
  border: 1px solid rgba(20, 184, 166, 0.2);
  padding: 10px 12px;
  text-align: left;
}
th {
  background: #ecfeff;
  color: #0f766e;
}
</style>
