<template>
  <section class="tax-features">
    <div class="container">
      <div class="section-title">
        <h2>Educational Features</h2>
        <p class="subtitle">Comprehensive Learning Materials and Resources</p>
      </div>

      <div class="features-grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ feature.title }}</h3>
          <p class="khmer-title">{{ feature.khmerTitle }}</p>
          <p class="description">{{ feature.description }}</p>
          
          <div class="feature-items">
            <div v-for="(item, idx) in feature.items" :key="idx" class="item">
              <span class="item-icon">▸</span>
              {{ item }}
            </div>
          </div>

          <button class="access-btn">
            {{ feature.buttonText }}
            <span class="arrow">→</span>
          </button>
        </div>
      </div>

      <div class="learning-path">
        <h3>Recommended Learning Path</h3>
        <p class="path-subtitle">Follow these steps to master Cambodian taxation</p>

        <div class="path-steps">
          <div class="step">
            <div class="step-icon">1</div>
            <div class="step-content">
              <h4>Foundations</h4>
              <p>Start with tax definitions and basic concepts</p>
            </div>
          </div>
          <div class="step-arrow">↓</div>

          <div class="step">
            <div class="step-icon">2</div>
            <div class="step-content">
              <h4>Tax Types</h4>
              <p>Learn about VAT, Salary Tax, and others</p>
            </div>
          </div>
          <div class="step-arrow">↓</div>

          <div class="step">
            <div class="step-icon">3</div>
            <div class="step-content">
              <h4>Law Basics</h4>
              <p>Understand Cambodian tax law and regulations</p>
            </div>
          </div>
          <div class="step-arrow">↓</div>

          <div class="step">
            <div class="step-icon">4</div>
            <div class="step-content">
              <h4>Practice</h4>
              <p>Work through examples and exercises</p>
            </div>
          </div>
          <div class="step-arrow">↓</div>

          <div class="step">
            <div class="step-icon">5</div>
            <div class="step-content">
              <h4>Mastery</h4>
              <p>Apply knowledge to real-world scenarios</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '📖',
    title: 'Tax Definitions',
    khmerTitle: 'និយមន័យពន្ធ',
    description: 'Complete glossary of tax terminology and key concepts used in Cambodian taxation.',
    items: [
      'What is VAT?',
      'Tax liability explained',
      'Deductible expenses',
      'Tax residency rules',
      'Taxable income definition',
      'Credit and refunds'
    ],
    buttonText: 'View Definitions'
  },
  {
    icon: '⚖️',
    title: 'Tax Law Basics',
    khmerTitle: 'មូលដ្ឋានច្បាប់ពន្ធ',
    description: 'Essential information about Cambodian tax laws, regulations, and compliance requirements.',
    items: [
      'Tax law overview',
      'Compliance requirements',
      'Registration process',
      'Filing deadlines',
      'Audit procedures',
      'Penalties and interest'
    ],
    buttonText: 'Learn Tax Law'
  },
  {
    icon: '📊',
    title: 'Tax Examples',
    khmerTitle: 'ឧទាហរណ៍ពន្ធ',
    description: 'Real-world examples showing how to calculate taxes in various scenarios.',
    items: [
      'VAT calculation examples',
      'Salary tax computations',
      'Business income scenarios',
      'Multi-stage VAT chains',
      'Prepayment tax examples',
      'Combined tax situations'
    ],
    buttonText: 'See Examples'
  },
  {
    icon: '✏️',
    title: 'Tax Exercises',
    khmerTitle: 'លេខលំហាត់ពន្ធ',
    description: 'Practice problems with step-by-step solutions to reinforce your understanding.',
    items: [
      'Beginner exercises',
      'Intermediate problems',
      'Advanced scenarios',
      'Case studies',
      'Mini quizzes',
      'Solution guides'
    ],
    buttonText: 'Start Practicing'
  },
  {
    icon: '📄',
    title: 'Tax Documents',
    khmerTitle: 'ឯកសារពន្ធ',
    description: 'Official government documents, forms, and templates for tax filing and reporting.',
    items: [
      'Tax return forms',
      'VAT declaration forms',
      'Registration documents',
      'Payment vouchers',
      'Government guidelines',
      'Compliance checklists'
    ],
    buttonText: 'Download Forms'
  },
  {
    icon: '🎓',
    title: 'Learning Materials',
    khmerTitle: 'សម្ភារៈសិក្សា',
    description: 'Comprehensive study guides, presentations, and resources for deeper learning.',
    items: [
      'Study guides',
      'Video tutorials',
      'PowerPoint slides',
      'Tax year guides',
      'Industry-specific guides',
      'FAQs and tips'
    ],
    buttonText: 'Browse Materials'
  }
]
</script>

<style scoped>
.tax-features {
  padding: 100px 20px;
  background: linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 48px;
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  border: 1px solid rgba(20, 184, 166, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #0f766e 0%, #14b8a6 100%);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  border-color: rgba(20, 184, 166, 0.3);
  box-shadow: 0 20px 40px rgba(15, 118, 110, 0.1);
  transform: translateY(-4px);
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
  display: inline-block;
}

.feature-card h3 {
  font-size: 22px;
  font-weight: 800;
  color: #0f766e;
  margin-bottom: 5px;
}

.khmer-title {
  font-size: 13px;
  color: #14b8a6;
  font-weight: 600;
  margin-bottom: 12px;
}

.description {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
}

.feature-items {
  margin-bottom: 25px;
  padding: 15px;
  background: rgba(15, 118, 110, 0.05);
  border-radius: 10px;
}

.item {
  font-size: 13px;
  color: #475569;
  padding: 6px 0;
  display: flex;
  align-items: center;
}

.item-icon {
  color: #14b8a6;
  margin-right: 8px;
  font-weight: bold;
}

.access-btn {
  width: 100%;
  padding: 12px 20px;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.access-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 118, 110, 0.3);
}

.arrow {
  transition: transform 0.3s ease;
}

.access-btn:hover .arrow {
  transform: translateX(4px);
}

.learning-path {
  background: white;
  border-radius: 16px;
  padding: 50px 30px;
  border: 2px solid rgba(20, 184, 166, 0.2);
}

.learning-path h3 {
  font-size: 28px;
  font-weight: 800;
  color: #0f766e;
  text-align: center;
  margin-bottom: 10px;
}

.path-subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 40px;
  font-size: 16px;
}

.path-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.step {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background: linear-gradient(90deg, rgba(15, 118, 110, 0.05) 0%, transparent 100%);
  border-left: 4px solid #14b8a6;
}

.step:nth-child(odd) {
  background: linear-gradient(90deg, rgba(20, 184, 166, 0.05) 0%, transparent 100%);
}

.step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  font-weight: 900;
  font-size: 24px;
  margin-right: 30px;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 18px;
  font-weight: 800;
  color: #0f766e;
  margin-bottom: 5px;
}

.step-content p {
  font-size: 14px;
  color: #64748b;
}

.step-arrow {
  text-align: center;
  color: #14b8a6;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 0;
}

@media (max-width: 768px) {
  .tax-features {
    padding: 60px 15px;
  }

  .section-title h2 {
    font-size: 32px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .feature-card {
    padding: 20px;
  }

  .learning-path {
    padding: 30px 20px;
  }

  .step {
    padding: 15px 20px;
    flex-direction: column;
    text-align: center;
  }

  .step-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }
}
</style>