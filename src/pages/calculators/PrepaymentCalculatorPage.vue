<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាពន្ធបង់ជាមុន</h1>
    <p class="intro">គណនា Prepayment Tax 1% ប្រចាំខែ។</p>
    <div class="form-grid">
      <div><label>ផរបររួមប្រចាំខែ</label><input v-model.number="gross" type="number" placeholder="បញ្ចូលផរបររួម"/><p class="help">បញ្ចូលចំណូលសរុបក្នុងខែ។</p></div>
      <div><label>ផរបរនេះរួម VAT ដែរឬទេ?</label><select v-model="includeVat"><option :value="true">រួម VAT</option><option :value="false">មិនរួម VAT</option></select><p class="help">បើរួម VAT នឹងបំបែកមូលដ្ឋានដោយ /1.1។</p></div>
      <div><label>មានអនុគ្រោះ QIP/TOI?</label><select v-model="exempt"><option :value="false">គ្មាន</option><option :value="true">មានអនុគ្រោះ</option></select><p class="help">បើមានអនុគ្រោះ ពន្ធបង់ជាមុន = 0។</p></div>
    </div>
    <div class="result">
      <div>មូលដ្ឋានគិតពន្ធ: <strong>{{ base.toFixed(2) }}</strong></div>
      <div>អត្រា: <strong>1%</strong></div>
      <div>ពន្ធបង់ជាមុន: <strong>{{ tax.toFixed(2) }}</strong></div>
    </div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const gross=ref(0);const includeVat=ref(true);const exempt=ref(false);const base=computed(()=>includeVat.value?gross.value/1.1:gross.value);const tax=computed(()=>exempt.value?0:base.value*0.01);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input,select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
