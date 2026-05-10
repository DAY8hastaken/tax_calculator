<template>
  <div class="page">
    <Navbar />
    <TaxFAQ />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import TaxFAQ from '../components/TaxFAQ.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page {
  width: 100%;
  overflow-x: hidden;
  background: #ffffff;
}
</style>
