<template>
  <div class="home-page">
    <Navbar />
    <HeroSection />

    <section class="learning-hub">
      <div class="bg-orb orb-left"></div>
      <div class="bg-orb orb-right"></div>
      <div class="container">
        <div class="hub-header">
          <span class="badge">Smart Learning Path</span>
          <h2>រៀនពន្ធពីមូលដ្ឋាន ទៅអនុវត្តពិត</h2>
          <p>ផែនការរៀនដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ សម្រាប់បុគ្គលិកគណនេយ្យ ម្ចាស់អាជីវកម្ម និងនិស្សិត។</p>
        </div>

        <div class="hub-metrics">
          <div class="metric-card">
            <h3>14+</h3>
            <p>ប្រភេទពន្ធសំខាន់</p>
          </div>
          <div class="metric-card">
            <h3>13</h3>
            <p>ម៉ាស៊ីនគណនាឯករាជ្យ</p>
          </div>
          <div class="metric-card">
            <h3>Step-by-step</h3>
            <p>រៀន និងគណនាតាមជំហាន</p>
          </div>
        </div>

        <div class="hub-grid">
          <RouterLink class="hub-card featured" to="/why-tax">
            <h3>រៀនពីពន្ធ</h3>
            <p>សិក្សារចនាសម្ព័ន្ធពន្ធដារកម្ពុជា កាលកំណត់សំខាន់ៗ និង checklist មុនដាក់ប្រកាស។</p>
            <span>ចាប់ផ្តើមរៀន →</span>
          </RouterLink>

          <RouterLink class="hub-card" to="/tax-types/vat">
            <h3>មេរៀន VAT</h3>
            <p>សិក្សាអត្រាពន្ធ VAT វិធីគណនា និងការអនុវត្តសម្រាប់ការលក់ទំនិញ/សេវាកម្ម។</p>
            <span>មើលលម្អិត →</span>
          </RouterLink>

          <RouterLink class="hub-card" to="/tax-types/salary">
            <h3>មេរៀនពន្ធបៀវត្ស</h3>
            <p>យល់អំពីនិវាសនជន/អនិវាសនជន ការកាត់បន្ថយទាយជ្ជទាន និងអត្រាពន្ធតាមកម្រិតប្រាក់ខែ។</p>
            <span>មើលលម្អិត →</span>
          </RouterLink>

          <RouterLink class="hub-card" to="/tax-calculator">
            <h3>ហ្វឹកហាត់គណនា</h3>
            <p>ចូលទៅកាន់គ្រប់ម៉ាស៊ីនគណនាពន្ធ និងប្រើ filter ដើម្បីជ្រើសប្រភេទគណនាដែលអ្នកត្រូវការ។</p>
            <span>ចាប់ផ្ដើមគណនា →</span>
          </RouterLink>

          <RouterLink class="hub-card" to="/faq">
            <h3>សំណួរញឹកញាប់</h3>
            <p>ទទួលបានចម្លើយខ្លីៗ ងាយយល់លើសំណួរសំខាន់ៗគ្រប់ប្រភេទពន្ធសម្រាប់អ្នកចាប់ផ្តើម។</p>
            <span>មើល FAQ →</span>
          </RouterLink>

          <RouterLink class="hub-card" to="/tax-types/general">
            <h3>គោលការណ៍ពន្ធទូទៅ</h3>
            <p>មើលរបបពន្ធ សមាសភាពអ្នកជាប់ពន្ធ ពិន័យ ការប្រាក់ និងនីតិវិធីបណ្តឹងតវ៉ាពន្ធ។</p>
            <span>មើលព័ត៌មាន →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <CalculatorPreview />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import CalculatorPreview from '../components/CalculatorPreview.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}

.learning-hub {
  position: relative;
  overflow: hidden;
  padding: 72px 0;
  background: linear-gradient(180deg, #fcfffe 0%, #f0fdfa 100%);
}

.bg-orb {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 999px;
  filter: blur(52px);
  opacity: 0.35;
}

.orb-left {
  left: -90px;
  top: -40px;
  background: #14b8a6;
}

.orb-right {
  right: -70px;
  bottom: -40px;
  background: #0f766e;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.hub-header {
  text-align: center;
  margin-bottom: 36px;
}

.badge {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(15, 118, 110, 0.12);
  border: 1px solid rgba(15, 118, 110, 0.25);
  color: #0f766e;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.7px;
  text-transform: uppercase;
}

.hub-header h2 {
  font-size: 44px;
  color: #0f172a;
  margin: 12px 0;
  letter-spacing: -0.4px;
}

.hub-header p {
  color: #475569;
  line-height: 1.8;
  max-width: 860px;
  margin: 0 auto;
}

.hub-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
}

.metric-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 118, 110, 0.16);
  border-radius: 14px;
  padding: 16px;
  text-align: center;
}

.metric-card h3 {
  margin: 0;
  font-size: 28px;
  color: #0f766e;
}

.metric-card p {
  margin: 4px 0 0;
  color: #64748b;
  font-size: 14px;
}

.hub-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.hub-card {
  text-decoration: none;
  background: #ffffff;
  border: 1px solid rgba(15, 118, 110, 0.2);
  border-radius: 18px;
  padding: 24px;
  transition: all 0.25s ease;
}

.hub-card.featured {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  border-color: transparent;
}

.hub-card.featured h3,
.hub-card.featured p,
.hub-card.featured span {
  color: #ffffff;
}

.hub-card:hover {
  transform: translateY(-4px);
  border-color: #14b8a6;
  box-shadow: 0 14px 30px rgba(15, 118, 110, 0.15);
}

.hub-card h3 {
  color: #0f766e;
  font-size: 24px;
  margin: 0 0 10px;
}

.hub-card p {
  color: #475569;
  line-height: 1.8;
  margin: 0 0 14px;
}

.hub-card span {
  color: #0f766e;
  font-weight: 700;
}

@media (max-width: 980px) {
  .hub-metrics {
    grid-template-columns: 1fr;
  }

  .hub-grid {
    grid-template-columns: 1fr;
  }

  .hub-header h2 {
    font-size: 32px;
  }
}
</style>
