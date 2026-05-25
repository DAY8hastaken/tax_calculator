<template>
  <section class="hero">
    <div class="hero-container">
      <!-- Left Content -->
      <div class="hero-left">
        <div class="hero-badge">
          <GraduationCap class="badge-icon" />
          វេទិការៀនពន្ធឌីជីថល
        </div>

        <h1 class="hero-title">
          ប្រព័ន្ធនិយាយអំពីពន្ធខ្មែរ
          <span class="gradient-highlight">ឈានមុខគេ</span>
        </h1>

        <p class="hero-subtitle">
          សូមស្វាគមន៍មកកាន់វេទិការៀនពន្ធខ្មែរ ដែលផ្តល់ការពន្យល់ច្បាស់លាស់ និងឧទាហរណ៍ជាក់ស្តែង ដើម្បីជួយឱ្យអ្នកយល់អំពីពន្ធបានកាន់តែងាយស្រួល។
        </p>

        <div class="hero-buttons">
          <button class="btn btn-primary" @click="goToCalculator">
            <Rocket class="btn-icon" /> ចាប់ផ្ដើម
          </button>
        </div>
      </div>

      <!-- Right Illustration -->
      <div class="hero-right">
        <div class="hero-illustration">
          <!-- Animated Background Elements -->
          <div class="bg-element bg-1"></div>
          <div class="bg-element bg-2"></div>
          <div class="bg-element bg-3"></div>

          <!-- Main Card -->
          <div class="hero-card">
            <div class="card-title">ទិដ្ឋភាពពន្ធ</div>
            <div class="card-content">
              <div class="chart-bar" style="height: 60%">VAT 60%</div>
              <div class="chart-bar" style="height: 35%">Salary 35%</div>
              <div class="chart-bar" style="height: 25%">Other 25%</div>
            </div>
          </div>

          <!-- Float Cards -->
          <div class="float-card float-1">
            <span>✓</span>
            ល្អ
          </div>
          <div class="float-card float-2">
            <BarChart3 class="float-icon" />
            ស្ថិតិ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BarChart3, GraduationCap, Rocket } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCalculator = () => {
  router.push('/tax-calculator')
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 40px;
  background: linear-gradient(135deg, #ecfeff 0%, #f0fdfa 50%, #e0f2fe 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  top: -200px;
  right: -200px;
  animation: float-slow 8s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-40px); }
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* Left Content */
.hero-left {
  display: flex;
  flex-direction: column;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(20, 184, 166, 0.15);
  color: #0f766e;
  padding: 12px 20px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(20, 184, 166, 0.3);
  width: fit-content;
  animation: slideInLeft 0.6s ease;
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.badge-icon {
  width: 18px;
  height: 18px;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.hero-title {
  font-size: 64px;
  font-weight: 900;
  line-height: 1.15;
  color: #0f172a;
  margin-bottom: 24px;
  animation: slideInLeft 0.6s ease 0.1s both;
}

.gradient-highlight {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 18px;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 500px;
  animation: slideInLeft 0.6s ease 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
  animation: slideInLeft 0.6s ease 0.3s both;
}

.btn {
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.btn-primary {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(15, 118, 110, 0.3);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(15, 118, 110, 0.4);
}

.btn-secondary {
  background: white;
  color: #0f766e;
  border: 2px solid #0f766e;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.btn-secondary:hover {
  background: rgba(15, 118, 110, 0.05);
  transform: translateY(-4px);
}

/* Right Illustration */
.hero-right {
  position: relative;
  height: 500px;
  animation: slideInRight 0.6s ease 0.2s both;
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

.hero-illustration {
  position: relative;
  width: 100%;
  height: 100%;
}

.bg-element {
  position: absolute;
  border-radius: 50%;
}

.bg-1 {
  width: 200px;
  height: 200px;
  background: rgba(20, 184, 166, 0.15);
  top: 0;
  right: 0;
  animation: float-element 6s ease-in-out infinite;
}

.bg-2 {
  width: 150px;
  height: 150px;
  background: rgba(15, 118, 110, 0.1);
  bottom: 100px;
  left: 0;
  animation: float-element 8s ease-in-out infinite 2s;
}

.bg-3 {
  width: 100px;
  height: 100px;
  background: rgba(20, 184, 166, 0.1);
  bottom: 0;
  right: 100px;
  animation: float-element 7s ease-in-out infinite 1s;
}

@keyframes float-element {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
}

.hero-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 30px 60px rgba(15, 118, 110, 0.2);
  border: 1px solid rgba(20, 184, 166, 0.1);
  width: 280px;
  z-index: 10;
  animation: cardFloat 4s ease-in-out infinite;
}

@keyframes cardFloat {
  0%, 100% { transform: translate(-50%, -50%); }
  50% { transform: translate(-50%, -60%); }
}

.card-title {
  font-size: 16px;
  font-weight: 700;
  color: #0f766e;
  margin-bottom: 20px;
}

.card-content {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 120px;
}

.chart-bar {
  flex: 1;
  background: linear-gradient(180deg, #14b8a6 0%, #0f766e 100%);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 11px;
  font-weight: 600;
  animation: barGrow 1.5s ease-out;
}

@keyframes barGrow {
  from { height: 0 !important; }
}

.float-card {
  position: absolute;
  background: white;
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 14px;
  color: #0f766e;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(20, 184, 166, 0.15);
  animation: floatCard 3s ease-in-out infinite;
}

.float-icon {
  width: 16px;
  height: 16px;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.float-1 {
  top: 50px;
  right: 0;
  animation-delay: 0s;
}

.float-2 {
  bottom: 80px;
  right: 40px;
  animation-delay: 1s;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero {
    min-height: auto;
    padding: 60px 40px;
  }

  .hero-right {
    height: 300px;
  }

  .hero-title {
    font-size: 48px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 20px;
  }

  .hero-container {
    gap: 30px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .hero-stats {
    gap: 20px;
  }

  .stat-number {
    font-size: 24px;
  }

  .stat-label {
    font-size: 12px;
  }

  .hero-right {
    display: none;
  }

  .hero::before {
    width: 400px;
    height: 400px;
    top: 0;
    right: -100px;
  }
}
</style>

<style scoped>
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
  background: linear-gradient(135deg, #ecfeff 0%, #f0fdfa 50%, #e0f2fe 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-30px); }
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(20, 184, 166, 0.15);
  color: #0f766e;
  padding: 10px 18px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(20, 184, 166, 0.3);
}

.badge-icon {
  font-size: 16px;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.hero-left {
  width: 55%;
  position: relative;
  z-index: 2;
}

.hero-left h1 {
  font-size: 72px;
  line-height: 1.15;
  color: #0f172a;
  margin-bottom: 24px;
  font-weight: 900;
  letter-spacing: -1px;
}

.gradient-text {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-left p {
  font-size: 18px;
  color: #475569;
  line-height: 1.8;
  margin-bottom: 40px;
  max-width: 500px;
}

.buttons {
  display: flex;
  gap: 18px;
  margin-bottom: 50px;
}

.primary-btn, .secondary-btn {
  padding: 16px 32px;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 8px;
}

.primary-btn {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(15, 118, 110, 0.3);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(15, 118, 110, 0.4);
}

.secondary-btn {
  border: 2px solid #0f766e;
  background: white;
  color: #0f766e;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.secondary-btn:hover {
  background: rgba(15, 118, 110, 0.05);
  transform: translateY(-3px);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #0f766e;
  font-weight: 500;
}

.feature-item span:first-child {
  font-size: 18px;
  color: #14b8a6;
}

.hero-right {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.floating-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.main-circle {
  position: absolute;
  width: 350px;
  height: 350px;
  top: 25px;
  left: 25px;
  border-radius: 50%;
  background: linear-gradient(135deg, #14b8a6 0%, #0f766e 100%);
  box-shadow: 0 30px 60px rgba(15, 118, 110, 0.25),
              0 0 60px rgba(20, 184, 166, 0.15);
  animation: pulse-circle 4s ease-in-out infinite;
}

@keyframes pulse-circle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.el-1 {
  width: 80px;
  height: 80px;
  background: rgba(20, 184, 166, 0.2);
  top: 0;
  right: 0;
  animation-delay: 0s;
}

.el-2 {
  width: 120px;
  height: 120px;
  background: rgba(15, 118, 110, 0.15);
  bottom: 0;
  left: 0;
  animation-delay: 2s;
}
</style>
