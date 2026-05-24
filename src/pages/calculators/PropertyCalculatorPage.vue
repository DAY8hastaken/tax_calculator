<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាពន្ធលើអចលនទ្រព្យ</h1>
    <p class="intro">គណនា 0.1% លើតម្លៃអចលនទ្រព្យក្រោយកាត់លើកលែង។</p>
    <div class="form-grid">
      <div><label>តម្លៃអចលនទ្រព្យ</label><input v-model.number="value" type="number" placeholder="បញ្ចូលតម្លៃអចលនទ្រព្យ"/><p class="help">បញ្ចូលតម្លៃអចលនទ្រព្យសរុប។</p></div>
      <div><label>តម្លៃលើកលែង</label><input v-model.number="exemption" type="number" placeholder="បញ្ចូលតម្លៃលើកលែង"/><p class="help">បញ្ចូលតម្លៃដែលអនុញ្ញាតកាត់ចេញពីមូលដ្ឋាន។</p></div>
    </div>
    <div class="result"><div>មូលដ្ឋានជាប់ពន្ធ: <strong>{{ taxable.toFixed(2) }}</strong></div><div>ពន្ធ (0.1%): <strong>{{ tax.toFixed(2) }}</strong></div></div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const value=ref(0);const exemption=ref(0);const taxable=computed(()=>Math.max(0,value.value-exemption.value));const tax=computed(()=>taxable.value*0.001);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
