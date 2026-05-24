<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាអាករលើការស្នាក់នៅ</h1>
    <p class="intro">គណនា Accommodation Tax អត្រា 2%។</p>
    <div class="form-grid">
      <div><label>ចំណូលបន្ទប់ស្នាក់នៅ</label><input v-model.number="room" type="number" placeholder="បញ្ចូលចំណូលបន្ទប់"/><p class="help">បញ្ចូលចំណូលបានពីការស្នាក់នៅប៉ុណ្ណោះ។</p></div>
      <div><label>Service Charge</label><input v-model.number="service" type="number" placeholder="បញ្ចូល service charge"/><p class="help">បញ្ចូលបន្ទុកសេវាដែលភ្ជាប់នឹងការស្នាក់នៅ។</p></div>
      <div><label>តម្លៃនេះរួម VAT និង AT?</label><select v-model="inc"><option :value="true">រួម</option><option :value="false">មិនរួម</option></select><p class="help">បើរួម នឹងបំបែកមូលដ្ឋានដោយ /(1.1×1.02)។</p></div>
    </div>
    <div class="result"><div>មូលដ្ឋានគិតអាករ: <strong>{{ base.toFixed(2) }}</strong></div><div>អាករស្នាក់នៅ (2%): <strong>{{ tax.toFixed(2) }}</strong></div></div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const room=ref(0);const service=ref(0);const inc=ref(true);const base=computed(()=>{const g=room.value+service.value;return inc.value?g/(1.1*1.02):g});const tax=computed(()=>base.value*0.02);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input,select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
