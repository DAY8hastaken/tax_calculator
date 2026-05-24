<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាអាករពិសេស</h1>
    <p class="intro">គណនាតាមអត្រាប្រភេទទំនិញ/សេវា។</p>
    <div class="form-grid">
      <div><label>ប្រភពប្រតិបត្តិការ</label><select v-model="source"><option value="domestic">ក្នុងស្រុក</option><option value="import">នាំចូល</option></select><p class="help">ក្នុងស្រុកគ្រប់គ្រងដោយ GDT, នាំចូលដោយគយ។</p></div>
      <div><label>ប្រភេទជាប់អាករ</label><select v-model="rate"><option :value="35">ស្រា 35%</option><option :value="30">ស្រាបៀរ 30%</option><option :value="20">បារី 20%</option><option :value="25">ស៊ីហ្គា 25%</option><option :value="10">ភេសជ្ជៈ/សេវា 10%</option><option :value="5">ស៊ីម៉ង់ត៍ 5%</option><option :value="3">ទូរគមនាគមន៍ 3%</option></select><p class="help">ជ្រើសប្រភេទឲ្យត្រូវតាមមុខទំនិញ/សេវា។</p></div>
      <div><label>មូលដ្ឋានគិតអាករ</label><input v-model.number="base" type="number" placeholder="បញ្ចូលមូលដ្ឋានគិតអាករ"/><p class="help">បញ្ចូលតម្លៃដែលត្រូវយកគណនា។</p></div>
    </div>
    <div class="result"><div>អត្រា: <strong>{{ rate }}%</strong></div><div>អាករពិសេស: <strong>{{ tax.toFixed(2) }}</strong></div></div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const source=ref('domestic');const base=ref(0);const rate=ref(10);const tax=computed(()=>base.value*rate.value/100);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input,select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
