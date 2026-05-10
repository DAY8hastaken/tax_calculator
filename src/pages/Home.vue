<template>
  <div class="home-page">
    <Navbar />
    <HeroSection />

    <section class="learning-hub">
      <div class="container">
        <div class="hub-header">
          <h2>មជ្ឈមណ្ឌលរៀនពន្ធសម្រាប់អ្នកចាប់ផ្ដើម</h2>
          <p>ជ្រើសផ្លូវរៀនដែលសមស្របនឹងគោលបំណងរបស់អ្នក ហើយចាប់ផ្ដើមពីជំហានមូលដ្ឋានទៅជំនាញអនុវត្ត។</p>
        </div>

        <div class="hub-grid">
          <RouterLink class="hub-card" to="/tax-types/vat">
            <h3>មេរៀន VAT</h3>
            <p>សិក្សាអត្រាពន្ធ VAT វិធីគណនា និងការអនុវត្តសម្រាប់ការលក់ទំនិញ/សេវាកម្ម។</p>
            <span>មើលលម្អិត →</span>
          </RouterLink>

          <RouterLink class="hub-card" to="/tax-calculator">
            <h3>ហ្វឹកហាត់គណនា</h3>
            <p>ប្រើឧបករណ៍គណនាពន្ធ ដើម្បីអនុវត្តជាក់ស្តែងលើ VAT និងពន្ធលើប្រាក់បៀវត្ស។</p>
            <span>ចាប់ផ្ដើមគណនា →</span>
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
  padding: 72px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hub-header {
  text-align: center;
  margin-bottom: 36px;
}

.hub-header h2 {
  font-size: 40px;
  color: #0f172a;
  margin-bottom: 12px;
}

.hub-header p {
  color: #475569;
  line-height: 1.8;
  max-width: 860px;
  margin: 0 auto;
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
  .hub-grid {
    grid-template-columns: 1fr;
  }

  .hub-header h2 {
    font-size: 32px;
  }
}
</style>
