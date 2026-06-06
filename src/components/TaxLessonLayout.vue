<template>
  <section class="lesson-shell">
    <div class="container">
      <div class="hero-card">
        <div class="eyebrow">Tax lesson</div>
        <h1>{{ title }}</h1>
        <p class="intro">
          {{ intro }}
        </p>
        <div class="hero-grid">
          <div class="hero-stat">
            <Calculator class="stat-icon" />
            <div>
              <span>រូបមន្ត</span>
              <strong>{{ formula }}</strong>
            </div>
          </div>
          <div class="hero-stat">
            <CircleCheck class="stat-icon success" />
            <div>
              <span>ពេលអនុវត្ត</span>
              <strong>{{ whenOn }}</strong>
            </div>
          </div>
          <div class="hero-stat">
            <CircleX class="stat-icon danger" />
            <div>
              <span>ពេលមិនអនុវត្ត</span>
              <strong>{{ whenOff }}</strong>
            </div>
          </div>
          <div class="hero-stat">
            <BookOpen class="stat-icon info" />
            <div>
              <span>ពេលប្រើ</span>
              <strong>{{ whenToUse }}</strong>
            </div>
          </div>
        </div>
        <div v-if="calculatorLink" class="action-row">
          <RouterLink class="action primary" :to="calculatorLink">
            {{ calculatorLabel || 'ទៅម៉ាស៊ីនគណនា' }}
          </RouterLink>
          <RouterLink class="action secondary" to="/tax-calculator">
            មើលម៉ាស៊ីនគណនាទាំងអស់
          </RouterLink>
        </div>
      </div>

      <div class="quick-grid">
        <article class="quick-card accent">
          <h2>រូបមន្តងាយចាំ</h2>
          <p>{{ formula }}</p>
        </article>
        <article class="quick-card">
          <h2>ពេលណាពន្ធអនុវត្ត</h2>
          <p>{{ whenOn }}</p>
        </article>
        <article class="quick-card">
          <h2>ពេលណាមិនអនុវត្ត</h2>
          <p>{{ whenOff }}</p>
        </article>
        <article class="quick-card">
          <h2>ពេលណាគួរប្រើ</h2>
          <p>{{ whenToUse }}</p>
        </article>
      </div>

      <div v-if="keyPoints?.length" class="section-card">
        <h2>ចំណុចសំខាន់ៗ</h2>
        <ul class="bullets">
          <li v-for="point in keyPoints" :key="point">{{ point }}</li>
        </ul>
      </div>

      <div v-for="section in sections" :key="section.title" class="section-card">
        <h2>{{ section.title }}</h2>
        <p v-for="paragraph in section.paragraphs || []" :key="paragraph">
          {{ paragraph }}
        </p>
        <ul v-if="section.bullets?.length" class="bullets">
          <li v-for="item in section.bullets" :key="item">{{ item }}</li>
        </ul>
        <div v-if="section.table" class="table-wrap">
          <table>
            <thead>
              <tr>
                <th v-for="header in section.table.headers" :key="header">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in section.table.rows" :key="`${section.title}-${index}`">
                <td v-for="cell in row" :key="cell">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-if="section.note" class="note">{{ section.note }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BookOpen, Calculator, CircleCheck, CircleX } from 'lucide-vue-next'

interface LessonTable {
  headers: string[]
  rows: string[][]
}

interface LessonSection {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  note?: string
  table?: LessonTable
}

defineProps<{
  title: string
  intro: string
  formula: string
  whenOn: string
  whenOff: string
  whenToUse: string
  calculatorLink?: string
  calculatorLabel?: string
  keyPoints?: string[]
  sections: LessonSection[]
}>()
</script>

<style scoped>
.lesson-shell {
  padding: 56px 0 28px;
  background:
    radial-gradient(circle at top left, rgba(20, 184, 166, 0.12), transparent 28%),
    linear-gradient(180deg, #ffffff 0%, #f8fffd 100%);
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-card {
  padding: 28px;
  border: 1px solid rgba(20, 184, 166, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 55px rgba(15, 118, 110, 0.08);
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(20, 184, 166, 0.12);
  color: #0f766e;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

h1 {
  margin: 14px 0 12px;
  font-size: clamp(30px, 4vw, 44px);
  line-height: 1.15;
  color: #0f172a;
}

.intro {
  margin: 0;
  max-width: 920px;
  color: #475569;
  line-height: 2;
  font-size: 18px;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;
}

.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 18px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.action:hover {
  transform: translateY(-1px);
}

.action.primary {
  color: #ffffff;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  box-shadow: 0 12px 28px rgba(15, 118, 110, 0.22);
}

.action.secondary {
  color: #0f766e;
  background: #ffffff;
  border: 1px solid rgba(15, 118, 110, 0.18);
}

.hero-stat {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 16px;
  border-radius: 18px;
  background: linear-gradient(180deg, #f8fffd 0%, #ffffff 100%);
  border: 1px solid rgba(15, 118, 110, 0.12);
}

.hero-stat span {
  display: block;
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
  font-weight: 700;
}

.hero-stat strong {
  display: block;
  color: #0f172a;
  line-height: 1.65;
  font-size: 15px;
}

.stat-icon {
  width: 20px;
  height: 20px;
  color: #0f766e;
  flex-shrink: 0;
  margin-top: 2px;
}

.stat-icon.success {
  color: #0d9488;
}

.stat-icon.danger {
  color: #dc2626;
}

.stat-icon.info {
  color: #0284c7;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}

.quick-card {
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(15, 118, 110, 0.12);
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(15, 118, 110, 0.05);
}

.quick-card.accent {
  background: linear-gradient(135deg, rgba(236, 254, 255, 0.95) 0%, rgba(255, 255, 255, 0.96) 100%);
}

.quick-card h2,
.section-card h2 {
  margin: 0 0 10px;
  color: #0f766e;
  font-size: 20px;
}

.quick-card p,
.section-card p,
.note,
.bullets {
  margin: 0;
  color: #334155;
  line-height: 2;
  font-size: 16px;
}

.section-card {
  margin-top: 18px;
  padding: 22px;
  border-radius: 20px;
  border: 1px solid rgba(15, 118, 110, 0.12);
  background: #ffffff;
  box-shadow: 0 10px 28px rgba(15, 118, 110, 0.05);
}

.bullets {
  padding-left: 20px;
}

.bullets li {
  font-size: 16px;
  line-height: 2;
}

.bullets li + li {
  margin-top: 8px;
}

.table-wrap {
  overflow-x: auto;
  margin-top: 10px;
}

table {
  width: 100%;
  min-width: 540px;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid rgba(15, 118, 110, 0.12);
  padding: 10px 12px;
  text-align: left;
  vertical-align: top;
}

th {
  background: #ecfeff;
  color: #0f766e;
}

.note {
  margin-top: 10px;
  color: #64748b;
  font-size: 15px;
}

@media (max-width: 980px) {
  .quick-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .lesson-shell {
    padding-top: 28px;
  }

  .hero-card {
    padding: 20px;
  }

  .intro {
    font-size: 17px;
  }

  .hero-grid,
  .quick-grid {
    grid-template-columns: 1fr;
  }

  .action-row {
    flex-direction: column;
  }

  .action {
    width: 100%;
  }

  .section-card {
    padding: 18px;
  }
}
</style>
