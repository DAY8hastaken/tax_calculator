<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាពន្ធកាត់ទុក</h1>
    <p class="intro">គណនាពន្ធកាត់ទុកតាមប្រភេទទូទាត់ និងស្ថានភាពអ្នកទទួលប្រាក់។</p>
    <div class="form-grid">
      <div><label>ចំនួនទឹកប្រាក់ទូទាត់</label><input v-model.number="amount" type="number" placeholder="បញ្ចូលចំនួនទឹកប្រាក់"/><p class="help">បញ្ចូលចំនួនប្រាក់ដែលត្រូវទូទាត់ជាក់ស្តែង។</p></div>
      <div><label>អ្នកទទួលប្រាក់</label><select v-model="status"><option value="resident">និវាសនជន</option><option value="non">អនិវាសនជន</option></select><p class="help">អនិវាសនជនប្រើអត្រា 14%។</p></div>
      <div><label>ប្រភេទទូទាត់</label><select v-model="type"><option value="service">សេវាកម្ម</option><option value="royalty">សួយសារ</option><option value="interest">ការប្រាក់ទូទៅ</option><option value="rent">ថ្លៃជួល</option><option value="bf">ការប្រាក់ធនាគារ (មានកាលកំណត់)</option><option value="bnf">ការប្រាក់ធនាគារ (គ្មានកាលកំណត់)</option></select><p class="help">ជ្រើសប្រភេទច្បាស់លាស់ ដើម្បីបានអត្រាត្រឹមត្រូវ។</p></div>
      <div><label>ករណីលើកលែង</label><select v-model="exempt"><option :value="false">គ្មាន</option><option :value="true">មានលើកលែង</option></select><p class="help">បើមានលើកលែង ពន្ធកាត់ទុក = 0។</p></div>
    </div>
    <div class="result">
      <div>អត្រាអនុវត្ត: <strong>{{ rate }}%</strong></div>
      <div>ពន្ធកាត់ទុក: <strong>{{ tax.toFixed(2) }}</strong></div>
      <div>សុទ្ធបង់ទៅអ្នកទទួល: <strong>{{ net.toFixed(2) }}</strong></div>
    </div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const amount=ref(0);const status=ref<'resident'|'non'>('resident');const type=ref<'service'|'royalty'|'interest'|'rent'|'bf'|'bnf'>('service');const exempt=ref(false);const rate=computed(()=>{if(exempt.value) return 0; if(status.value==='non') return 14; const m={service:15,royalty:15,interest:15,rent:10,bf:6,bnf:4} as const; return m[type.value]});const tax=computed(()=>amount.value*rate.value/100);const net=computed(()=>amount.value-tax.value);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input,select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
