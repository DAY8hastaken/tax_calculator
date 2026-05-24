<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <div class="logo-section">
        <div class="logo">
          <span class="logo-icon">🏛️</span>
          <div class="logo-text">
            <div class="logo-main">ពន្ធខ្មែរ</div>
            <div class="logo-sub">Tax Khmer</div>
          </div>
        </div>
      </div>

      <!-- Main Navigation -->
      <ul class="nav-links">
        <li class="nav-item"><RouterLink to="/">ទំព័រដើម</RouterLink></li>
        <li class="nav-item"><RouterLink to="/why-tax">រៀនពន្ធ</RouterLink></li>
        <li class="nav-item dropdown">
          <span class="dropdown-toggle">ពន្ធ <span class="dropdown-arrow">▼</span></span>
          <ul class="dropdown-menu">
            <li><RouterLink to="/tax-types/vat">អាករលើតម្លៃបន្ថែម (VAT)</RouterLink></li>
            <li><RouterLink to="/tax-types/salary">ពន្ធលើប្រាក់បៀវត្ស</RouterLink></li>
            <li><RouterLink to="/tax-types/prepayment">ពន្ធបង់ជាមុន</RouterLink></li>
            <li><RouterLink to="/tax-types/withholding">ពន្ធកាត់ទុក</RouterLink></li>
            <li><RouterLink to="/tax-types/public-lighting">ពន្ធភ្លើងសាធារណៈ</RouterLink></li>
            <li><RouterLink to="/tax-types/specific">អាករពិសេស</RouterLink></li>
            <li><RouterLink to="/tax-types/business">ពន្ធលើប្រាក់ចំណូល</RouterLink></li>
            <li><RouterLink to="/tax-types/patent">ពន្ធប៉ាតង់</RouterLink></li>
            <li><RouterLink to="/tax-types/property">ពន្ធលើអចលនទ្រព្យ</RouterLink></li>
            <li><RouterLink to="/tax-types/unused-land">ពន្ធលើដីមិនប្រើប្រាស់</RouterLink></li>
            <li><RouterLink to="/tax-types/registration">ពន្ធប្រថាប់ត្រា</RouterLink></li>
            <li><RouterLink to="/tax-types/accommodation">អាករលើការស្នាក់នៅ</RouterLink></li>
            <li><RouterLink to="/tax-types/general">ពន្ធទូទៅ</RouterLink></li>
          </ul>
        </li>
        <li class="nav-item"><RouterLink to="/tax-calculator">គណនាពន្ធ</RouterLink></li>
        <li class="nav-item"><RouterLink to="/faq">សំណួរ</RouterLink></li>
        <li class="nav-item"><RouterLink to="/tax-payer">ព័ត៌មានបន្ថែម</RouterLink></li>
      </ul>

      <!-- Right Section -->
      <div class="nav-right">
        <!-- CTA Button -->
        <button class="cta-button" @click="goToCalculator">ចាប់ផ្ដើម</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCalculator = () => {
  router.push('/tax-calculator')
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.97) 0%, rgba(240, 253, 250, 0.97) 100%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(20, 184, 166, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(15, 118, 110, 0.08);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

/* Logo */
.logo-section {
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-icon {
  font-size: 32px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-main {
  font-size: 20px;
  font-weight: 800;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.logo-sub {
  font-size: 10px;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.5px;
}

/* Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 0;
  flex: 1;
  margin: 0 60px;
}

.nav-item {
  position: relative;
}

.dropdown-toggle,
.nav-item a {
  display: block;
  padding: 8px 16px;
  color: #0f766e;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;
}

.dropdown-toggle::before,
.nav-item a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #0f766e, #14b8a6);
  transition: width 0.3s ease;
}

.dropdown-toggle:hover::before,
.nav-item a:hover::before {
  width: calc(100% - 32px);
}

.dropdown-toggle:hover,
.nav-item a:hover {
  color: #14b8a6;
}

/* Dropdown */
.nav-item.dropdown {
  position: relative;
}

.dropdown-arrow {
  font-size: 10px;
  margin-left: 4px;
  display: inline-block;
  transition: transform 0.3s ease;
}

.nav-item.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  list-style: none;
  padding: 8px 0;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  min-width: 200px;
  margin-top: 8px;
  border: 1px solid rgba(20, 184, 166, 0.1);
}

.nav-item.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li a {
  padding: 10px 20px;
  display: block;
  color: #0f766e;
  font-weight: 500;
  font-size: 14px;
}

.dropdown-menu li a:hover {
  background: rgba(20, 184, 166, 0.08);
  padding-left: 24px;
}

/* Right Section */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}

/* CTA Button */
.cta-button {
  padding: 10px 24px;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(15, 118, 110, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(15, 118, 110, 0.4);
}

/* Responsive */
@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 24px;
    height: 70px;
  }

  .nav-links {
    margin: 0 30px;
  }

  .nav-item a {
    padding: 6px 12px;
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    height: 60px;
  }

  .logo-text {
    display: none;
  }

  .nav-links {
    display: none;
  }

  .nav-right {
    gap: 12px;
  }

  .cta-button {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>
