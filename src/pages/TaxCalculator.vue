<template>
  <div class="page">
    <Navbar />
    <CalculatorPreview />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import CalculatorPreview from '../components/CalculatorPreview.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}
</style>
