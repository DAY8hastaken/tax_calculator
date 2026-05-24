<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាអាករសម្រាប់បំភ្លឺសាធារណៈ</h1>
    <p class="intro">គណនា PLT 5% សម្រាប់ទំនិញជាក់លាក់។</p>
    <div class="form-grid">
      <div><label>ប្រភេទទំនិញ</label><select v-model="product"><option value="beer">ស្រាបៀរ</option><option value="alcohol">ស្រា/អាល់កុល</option><option value="cigarette">បារី/ស៊ីហ្គា</option></select><p class="help">ជ្រើសប្រភេទទំនិញជាប់ PLT។</p></div>
      <div><label>ប្រភេទអ្នកលក់</label><select v-model="seller"><option value="first">អ្នកលក់ដំបូង</option><option value="next">អ្នកលក់បន្ត</option></select><p class="help">អ្នកលក់បន្តប្រើមូលដ្ឋាន 20% តាមការអនុវត្តគំរូ។</p></div>
      <div><label>តម្លៃលក់/ផរបរ</label><input v-model.number="gross" type="number" placeholder="បញ្ចូលតម្លៃលក់"/><p class="help">បញ្ចូលចំនួនលក់សរុបក្នុងខែ។</p></div>
      <div><label>តម្លៃនេះរួម VAT និង PLT?</label><select v-model="inc"><option :value="true">រួម</option><option :value="false">មិនរួម</option></select><p class="help">ប្រើសម្រាប់បំបែកមូលដ្ឋានគិតអាករ។</p></div>
    </div>
    <div class="result"><div>មូលដ្ឋានគិតអាករ: <strong>{{ base.toFixed(2) }}</strong></div><div>PLT (5%): <strong>{{ tax.toFixed(2) }}</strong></div></div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const product=ref('beer');const seller=ref('first');const gross=ref(0);const inc=ref(true);const base=computed(()=>((inc.value?((gross.value/1.1)/1.05):gross.value)*(seller.value==='next'?0.2:1)));const tax=computed(()=>base.value*0.05);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input,select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
