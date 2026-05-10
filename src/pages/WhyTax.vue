<template>
  <div class="page">
    <Navbar />

    <section class="study-intro">
      <div class="container">
        <h1>រៀនពន្ធជាជំហានៗ</h1>
        <p>
          ទំព័រនេះរៀបចំមេរៀនជាលំដាប់ច្បាស់លាស់ ចាប់ពីមូលដ្ឋានរហូតដល់ការអនុវត្តគណនាពន្ធ។
          អ្នកអាចអានសង្ខេប សិក្សាប្រភេទពន្ធ ហើយបន្តទៅហ្វឹកហាត់គណនា។
        </p>

        <div class="roadmap">
          <div class="step">
            <div class="num">1</div>
            <div>
              <h3>យល់ពីតួនាទីពន្ធ</h3>
              <p>សិក្សាថាពន្ធគាំទ្រសេវាសាធារណៈដូចម្តេច និងហេតុអ្វីវាសំខាន់សម្រាប់សង្គម។</p>
            </div>
          </div>
          <div class="step">
            <div class="num">2</div>
            <div>
              <h3>ជ្រើសប្រភេទពន្ធត្រូវរៀន</h3>
              <p>ចាប់ផ្ដើមពី VAT ឬពន្ធលើប្រាក់បៀវត្ស បន្ទាប់មកបន្តទៅពន្ធអាជីវកម្ម។</p>
            </div>
          </div>
          <div class="step">
            <div class="num">3</div>
            <div>
              <h3>អនុវត្តជាមួយឧបករណ៍គណនា</h3>
              <p>ពិនិត្យលទ្ធផលគណនាពន្ធ និងប្រៀបធៀបស្ថានការណ៍ផ្សេងៗឱ្យយល់ជាក់ស្តែង។</p>
            </div>
          </div>
        </div>

        <div class="study-actions">
          <RouterLink to="/tax-types/vat">ចូលមេរៀន VAT</RouterLink>
          <RouterLink to="/tax-calculator">ទៅកាន់ទំព័រគណនាពន្ធ</RouterLink>
        </div>
      </div>
    </section>

    <WhyTaxMatters />
    <LearnCambodianTax />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import WhyTaxMatters from '../components/WhyTaxMatters.vue'
import LearnCambodianTax from '../components/LearnCambodianTax.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}

.study-intro {
  padding: 56px 0;
  background: linear-gradient(135deg, #ecfeff 0%, #f8fafc 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.study-intro h1 {
  font-size: 42px;
  color: #0f172a;
  margin-bottom: 12px;
}

.study-intro > .container > p {
  color: #475569;
  line-height: 1.9;
  max-width: 900px;
}

.roadmap {
  margin-top: 28px;
  display: grid;
  gap: 14px;
}

.step {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 12px;
  background: #ffffff;
  border: 1px solid rgba(15, 118, 110, 0.2);
  border-radius: 14px;
  padding: 14px;
}

.num {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
}

.step h3 {
  margin: 0 0 6px;
  color: #0f766e;
}

.step p {
  margin: 0;
  color: #475569;
  line-height: 1.8;
}

.study-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.study-actions a {
  text-decoration: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 700;
}

.study-actions a:first-child {
  background: #0f766e;
  color: #fff;
}

.study-actions a:last-child {
  border: 1px solid #0f766e;
  color: #0f766e;
  background: #fff;
}

@media (max-width: 768px) {
  .study-intro h1 {
    font-size: 32px;
  }

  .step {
    grid-template-columns: 1fr;
  }
}
</style>
