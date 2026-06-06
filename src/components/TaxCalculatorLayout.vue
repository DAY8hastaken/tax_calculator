<template>
  <div class="calculator-page">
    <Navbar />

    <section class="calculator-shell">
      <div class="shell-inner">
        <header class="shell-hero">
          <div v-if="badge" class="hero-badge">{{ badge }}</div>
          <h1>{{ title }}</h1>
          <p class="hero-intro">{{ intro }}</p>

          <div v-if="highlights.length" class="hero-highlights">
            <div v-for="item in highlights" :key="`${item.label}-${item.value}`" class="highlight-card">
              <span class="highlight-label">{{ item.label }}</span>
              <strong class="highlight-value">{{ item.value }}</strong>
            </div>
          </div>
        </header>

        <div class="shell-body">
          <div class="main-column">
            <section class="surface-card">
              <div class="card-heading">
                <h2>បញ្ចូលព័ត៌មានសម្រាប់គណនា</h2>
                <p>បំពេញទិន្នន័យខាងក្រោមឱ្យបានច្បាស់ ដើម្បីទទួលលទ្ធផលកាន់តែត្រឹមត្រូវ។</p>
              </div>
              <slot name="fields" />
            </section>

            <section class="surface-card result-card">
              <div class="card-heading">
                <h2>លទ្ធផលគណនា</h2>
                <p>លទ្ធផលនេះជាការគណនាជំនួយសម្រាប់ការសិក្សា និងត្រួតពិនិត្យបឋម។</p>
              </div>
              <slot name="results" />
            </section>
          </div>

          <aside class="side-column">
            <section class="surface-card note-card">
              <div class="card-heading">
                <h2>រូបមន្ត និងការណែនាំ</h2>
                <p>សង្ខេបពីរបៀបគណនា និងចំណុចដែលគួរយកចិត្តទុកដាក់។</p>
              </div>

              <div v-if="formula" class="formula-box">
                <span class="formula-label">រូបមន្ត</span>
                <strong>{{ formula }}</strong>
              </div>

              <div v-if="tips.length" class="tips-block">
                <h3>{{ tipsTitle }}</h3>
                <ul>
                  <li v-for="tip in tips" :key="tip">{{ tip }}</li>
                </ul>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import FooterSection from '@/components/FooterSection.vue'
import Navbar from '@/components/Navbar.vue'

type HighlightItem = {
  label: string
  value: string
}

withDefaults(defineProps<{
  title: string
  intro: string
  badge?: string
  formula?: string
  tips?: string[]
  tipsTitle?: string
  highlights?: HighlightItem[]
}>(), {
  badge: '',
  formula: '',
  tips: () => [],
  tipsTitle: 'ចំណុចគួរដឹង',
  highlights: () => []
})
</script>

<style scoped>
.calculator-page {
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(20, 184, 166, 0.1), transparent 34%),
    radial-gradient(circle at top right, rgba(14, 165, 233, 0.08), transparent 30%),
    linear-gradient(180deg, #f8fffe 0%, #effaf8 46%, #ffffff 100%);
}

.calculator-shell {
  padding: 52px 20px 72px;
}

.shell-inner {
  max-width: 1240px;
  margin: 0 auto;
}

.shell-hero {
  margin-bottom: 30px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 9px 14px;
  background: rgba(15, 118, 110, 0.12);
  color: #0f766e;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.02em;
  margin-bottom: 16px;
}

.shell-hero h1 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 3vw, 3.25rem);
  line-height: 1.15;
  color: #0f172a;
}

.hero-intro {
  margin: 0;
  max-width: 760px;
  color: #475569;
  font-size: 17px;
  line-height: 1.85;
}

.hero-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
  margin-top: 22px;
}

.highlight-card {
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(20, 184, 166, 0.18);
  box-shadow: 0 12px 35px rgba(15, 23, 42, 0.06);
  backdrop-filter: blur(10px);
}

.highlight-label {
  display: block;
  margin-bottom: 7px;
  color: #64748b;
  font-size: 13px;
  font-weight: 700;
}

.highlight-value {
  color: #0f766e;
  font-size: 22px;
  line-height: 1.2;
}

.shell-body {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(300px, 0.9fr);
  gap: 24px;
  align-items: start;
}

.main-column,
.side-column {
  display: grid;
  gap: 24px;
}

.surface-card {
  padding: 26px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(12px);
}

.card-heading {
  margin-bottom: 20px;
}

.card-heading h2 {
  margin: 0 0 8px;
  color: #0f172a;
  font-size: 24px;
}

.card-heading p {
  margin: 0;
  color: #64748b;
  line-height: 1.7;
}

.formula-box {
  display: grid;
  gap: 8px;
  margin-bottom: 22px;
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(20, 184, 166, 0.16));
  border: 1px solid rgba(20, 184, 166, 0.18);
}

.formula-label {
  color: #0f766e;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.formula-box strong {
  color: #0f172a;
  font-size: 18px;
  line-height: 1.6;
}

.tips-block h3 {
  margin: 0 0 12px;
  color: #0f172a;
  font-size: 18px;
}

.tips-block ul {
  margin: 0;
  padding-left: 20px;
  display: grid;
  gap: 10px;
  color: #475569;
  line-height: 1.75;
}

:deep(.calc-grid) {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

:deep(.calc-field) {
  display: grid;
  gap: 10px;
  padding: 18px;
  border-radius: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbfb 100%);
  border: 1px solid rgba(148, 163, 184, 0.14);
}

:deep(.calc-field--full) {
  grid-column: 1 / -1;
}

:deep(.calc-label) {
  color: #0f172a;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.5;
}

:deep(.calc-help) {
  margin: 0;
  color: #64748b;
  font-size: 13px;
  line-height: 1.7;
}

:deep(.calc-input),
:deep(.calc-select) {
  width: 100%;
  min-height: 50px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  background: #ffffff;
  color: #0f172a;
  font-size: 15px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

:deep(.calc-input::placeholder) {
  color: #94a3b8;
}

:deep(.calc-input:focus),
:deep(.calc-select:focus) {
  outline: none;
  border-color: rgba(20, 184, 166, 0.6);
  box-shadow: 0 0 0 4px rgba(20, 184, 166, 0.12);
  transform: translateY(-1px);
}

:deep(.calc-result-list) {
  display: grid;
  gap: 12px;
}

:deep(.calc-result-item) {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  padding: 16px 18px;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.14);
}

:deep(.calc-result-item--accent) {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  border-color: transparent;
}

:deep(.calc-result-label) {
  color: #334155;
  font-weight: 700;
  line-height: 1.5;
}

:deep(.calc-result-value) {
  color: #0f766e;
  font-size: 20px;
  font-weight: 900;
  text-align: right;
}

:deep(.calc-result-item--accent .calc-result-label),
:deep(.calc-result-item--accent .calc-result-value) {
  color: #ffffff;
}

@media (max-width: 960px) {
  .shell-body {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .calculator-shell {
    padding: 32px 14px 56px;
  }

  .surface-card {
    padding: 20px;
    border-radius: 22px;
  }

  :deep(.calc-grid) {
    grid-template-columns: 1fr;
  }

  :deep(.calc-field--full) {
    grid-column: auto;
  }

  :deep(.calc-result-item) {
    flex-direction: column;
    align-items: flex-start;
  }

  :deep(.calc-result-value) {
    text-align: left;
  }
}
</style>
