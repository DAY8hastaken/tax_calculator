<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាពន្ធលើដីមិនប្រើប្រាស់</h1>
    <p class="intro">គណនាពន្ធតាមតម្លៃដី និងអត្រាអនុវត្ត។</p>
    <div class="form-grid">
      <div><label>តម្លៃដីជាប់ពន្ធ</label><input v-model.number="value" type="number" placeholder="បញ្ចូលតម្លៃដី"/><p class="help">បញ្ចូលតម្លៃដីដែលត្រូវគណនា។</p></div>
      <div><label>អត្រាពន្ធ (%)</label><input v-model.number="rate" type="number" placeholder="បញ្ចូលអត្រា %"/><p class="help">ឧទាហរណ៍ 1, 2 ឬ 3 ភាគរយ។</p></div>
    </div>
    <div class="result"><div>ពន្ធត្រូវបង់: <strong>{{ tax.toFixed(2) }}</strong></div></div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const value=ref(0);const rate=ref(1);const tax=computed(()=>value.value*rate.value/100);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
