<template>
  <section class="why-tax-matters">
    <div class="container">
      <div class="section-title">
        <h2>ហេតុផលដែលពន្ធមានសារៈសំខាន់</h2>
        <p class="subtitle">ពន្ធជាគ្រឹះសម្រាប់ការអភិវឌ្ឍសង្គម និងសេវាសាធារណៈ</p>
      </div>

      <div class="benefits-grid">
        <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
          <div class="icon-container"><div class="icon">{{ benefit.icon }}</div></div>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
          <div class="impact-points">
            <div v-for="(point, idx) in benefit.impacts" :key="idx" class="point">✓ {{ point }}</div>
          </div>
        </div>
      </div>

      <div class="tax-flow">
        <h3>លំហូរពន្ធនៅកម្ពុជា</h3>
        <div class="flow-diagram">
          <div class="flow-step"><div class="step-number">1</div><div class="step-title">ប្រជាពលរដ្ឋ និងអាជីវកម្មបង់ពន្ធ</div></div>
          <div class="flow-arrow">→</div>
          <div class="flow-step"><div class="step-number">2</div><div class="step-title">រដ្ឋប្រមូលចំណូលពន្ធ</div></div>
          <div class="flow-arrow">→</div>
          <div class="flow-step"><div class="step-number">3</div><div class="step-title">បែងចែកថវិកា</div></div>
          <div class="flow-arrow">→</div>
          <div class="flow-step"><div class="step-number">4</div><div class="step-title">ផ្តល់សេវាសាធារណៈវិញ</div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    icon: '🏥',
    title: 'សុខាភិបាល',
    description: 'ពន្ធគាំទ្រថវិកាសម្រាប់មន្ទីរពេទ្យ និងសេវាសុខាភិបាលសាធារណៈ។',
    impacts: ['មន្ទីរពេទ្យ និងមណ្ឌលសុខភាព', 'ការថែទាំបន្ទាន់', 'ការលើកកម្ពស់សុខភាពសហគមន៍']
  },
  {
    icon: '📚',
    title: 'ការអប់រំ',
    description: 'ពន្ធគាំទ្រសាលារៀន សាកលវិទ្យាល័យ និងកម្មវិធីបណ្តុះបណ្តាលជំនាញ។',
    impacts: ['សាលារៀន និងសាកលវិទ្យាល័យ', 'គ្រូបង្រៀន និងសម្ភារៈសិក្សា', 'អាហារូបករណ៍ និងឱកាសសិក្សា']
  },
  {
    icon: '🛣️',
    title: 'ហេដ្ឋារចនាសម្ព័ន្ធ',
    description: 'ពន្ធជួយកសាង និងថែទាំផ្លូវ ស្ពាន និងប្រព័ន្ធដឹកជញ្ជូន។',
    impacts: ['កែលម្អផ្លូវ និងស្ពាន', 'បង្កើនសុវត្ថិភាពចរាចរណ៍', 'គាំទ្រការដឹកជញ្ជូនពាណិជ្ជកម្ម']
  },
  {
    icon: '🔒',
    title: 'សន្តិសុខសាធារណៈ',
    description: 'ពន្ធគាំទ្រសន្តិសុខសហគមន៍ និងការអនុវត្តច្បាប់។',
    impacts: ['សុវត្ថិភាពសាធារណៈ', 'ការឆ្លើយតបគ្រោះអាសន្ន', 'ការអនុវត្តច្បាប់ដោយស្ថាប័នពាក់ព័ន្ធ']
  }
]
</script>

<style scoped>
.why-tax-matters {
  padding: 100px 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f0fdfa 100%);
}
.container { max-width: 1200px; margin: 0 auto; }
.section-title { text-align: center; margin-bottom: 60px; }
.section-title h2 { font-size: 48px; font-weight: 900; background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 10px; }
.subtitle { font-size: 18px; color: #64748b; font-weight: 500; }
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-bottom: 80px; }
.benefit-card { background: white; border-radius: 16px; padding: 30px; border: 1px solid rgba(20, 184, 166, 0.1); transition: all 0.3s ease; text-align: center; }
.benefit-card:hover { transform: translateY(-8px); border-color: rgba(20, 184, 166, 0.3); box-shadow: 0 20px 40px rgba(15, 118, 110, 0.15); }
.icon-container { margin-bottom: 20px; }
.icon { font-size: 64px; display: inline-block; }
.benefit-card h3 { font-size: 22px; font-weight: 700; color: #0f766e; margin-bottom: 12px; }
.benefit-card p { font-size: 14px; color: #64748b; margin-bottom: 20px; line-height: 1.7; }
.impact-points { display: flex; flex-direction: column; gap: 10px; text-align: left; }
.point { font-size: 13px; color: #475569; padding: 8px; background: rgba(15, 118, 110, 0.05); border-radius: 8px; }
.tax-flow { background: white; border-radius: 16px; padding: 50px 30px; border: 2px solid rgba(20, 184, 166, 0.2); }
.tax-flow h3 { font-size: 28px; font-weight: 800; color: #0f766e; text-align: center; margin-bottom: 40px; }
.flow-diagram { display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 20px; }
.flow-step { display: flex; flex-direction: column; align-items: center; min-width: 150px; }
.step-number { width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%); color: white; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 24px; margin-bottom: 10px; }
.step-title { font-size: 14px; font-weight: 600; color: #0f766e; text-align: center; line-height: 1.4; }
.flow-arrow { font-size: 28px; color: #14b8a6; font-weight: bold; }
</style>
