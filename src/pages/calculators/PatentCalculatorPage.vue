<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាពន្ធប៉ាតង់</h1>
    <p class="intro">គណនាតាមប្រភេទអ្នកជាប់ពន្ធ និងពេលចាប់ផ្តើមអាជីវកម្ម។</p>
    <div class="form-grid">
      <div><label>ប្រភេទអ្នកជាប់ពន្ធ</label><select v-model.number="annual"><option :value="400000">តូច (400,000៛)</option><option :value="1200000">មធ្យម (1,200,000៛)</option><option :value="3000000">ធំ (3,000,000៛)</option><option :value="5000000">ធំ > 10,000 លានរៀល (5,000,000៛)</option></select><p class="help">ជ្រើសតាមចំណាត់ថ្នាក់របស់អ្នកជាប់ពន្ធ។</p></div>
      <div><label>ពេលចាប់ផ្តើមអាជីវកម្ម</label><select v-model.number="half"><option :value="1">6 ខែដើមឆ្នាំ (100%)</option><option :value="0.5">6 ខែចុងឆ្នាំ (50%)</option></select><p class="help">បើចាប់ផ្តើមកន្លះឆ្នាំចុងក្រោយ គិត 50%។</p></div>
    </div>
    <div class="result"><div>ពន្ធប៉ាតង់ត្រូវបង់: <strong>{{ tax.toFixed(0) }} ៛</strong></div></div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';const annual=ref(1200000);const half=ref(1);const tax=computed(()=>annual.value*half.value);</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
