<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាពន្ធលើប្រាក់ចំណូលសហគ្រាស</h1>
    <p class="intro">TOI = 20% នៃចំណេញជាប់ពន្ធ បន្ទាប់មកកាត់ពន្ធបង់ជាមុន។</p>
    <div class="form-grid">
      <div><label>ចំណូលប្រចាំឆ្នាំ</label><input v-model.number="revenue" type="number" placeholder="បញ្ចូលចំណូលប្រចាំឆ្នាំ"/><p class="help">បញ្ចូលចំណូលសរុបប្រចាំឆ្នាំរបស់សហគ្រាស។</p></div>
      <div><label>ចំណាយអនុញ្ញាត</label><input v-model.number="expense" type="number" placeholder="បញ្ចូលចំណាយអនុញ្ញាត"/><p class="help">បញ្ចូលចំណាយដែលអាចកាត់កងតាមច្បាប់។</p></div>
      <div><label>ពន្ធបង់ជាមុនដែលបានបង់</label><input v-model.number="credit" type="number" placeholder="បញ្ចូលពន្ធបង់ជាមុន"/><p class="help">បញ្ចូលចំនួនពន្ធបង់ជាមុនសរុបក្នុងឆ្នាំ។</p></div>
    </div>
    <div class="result"><div>ចំណេញជាប់ពន្ធ: <strong>{{ taxable.toFixed(2) }}</strong></div><div>TOI (20%): <strong>{{ toi.toFixed(2) }}</strong></div><div>TOI ត្រូវបង់ក្រោយកាត់ពន្ធបង់ជាមុន: <strong>{{ payable.toFixed(2) }}</strong></div></div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const revenue=ref(0);const expense=ref(0);const credit=ref(0);const taxable=computed(()=>Math.max(0,revenue.value-expense.value));const toi=computed(()=>taxable.value*0.2);const payable=computed(()=>Math.max(0,toi.value-credit.value));</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
