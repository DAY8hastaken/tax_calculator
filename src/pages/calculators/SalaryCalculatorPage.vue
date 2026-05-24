<template>
  <div class="page"><Navbar /><section class="wrap"><div class="box">
    <h1>ម៉ាស៊ីនគណនាពន្ធលើប្រាក់បៀវត្ស</h1>
    <p class="intro">គណនាពន្ធប្រចាំខែសម្រាប់និវាសនជន និងអនិវាសនជន (KHR)។</p>
    <div class="form-grid">
      <div><label>ប្រាក់ខែសរុបប្រចាំខែ (KHR)</label><input v-model.number="gross" type="number" placeholder="បញ្ចូលប្រាក់ខែសរុប"/><p class="help">បញ្ចូលប្រាក់ខែ និងប្រាក់បន្ថែមសរុបប្រចាំខែ។</p></div>
      <div><label>ស្ថានភាពអ្នកជាប់ពន្ធ</label><select v-model="status"><option value="resident">និវាសនជន</option><option value="non">អនិវាសនជន</option></select><p class="help">អនិវាសនជនគិតអត្រាថេរ 20%។</p></div>
      <div><label>ចំនួនកូនក្នុងបន្ទុក</label><input v-model.number="children" type="number" min="0" placeholder="បញ្ចូលចំនួនកូន"/><p class="help">ម្នាក់កាត់បន្ថយ 150,000 ៛ (សម្រាប់និវាសនជន)។</p></div>
      <div><label>សហព័ទ្ធមិនធ្វើការ</label><select v-model="spouse"><option :value="false">មិនមាន</option><option :value="true">មាន</option></select><p class="help">កាត់បន្ថយ 150,000 ៛ បន្ថែម 1 នាក់។</p></div>
    </div>
    <div class="result">
      <div>កាត់បន្ថយទាយជ្ជទាន: <strong>{{ deduction.toFixed(2) }}</strong></div>
      <div>មូលដ្ឋានគិតពន្ធ: <strong>{{ taxable.toFixed(2) }}</strong></div>
      <div>ពន្ធត្រូវបង់: <strong>{{ tax.toFixed(2) }}</strong></div>
      <div>ប្រាក់ខែក្រោយពន្ធ: <strong>{{ net.toFixed(2) }}</strong></div>
    </div>
  </div></section><FooterSection /></div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';import Navbar from '@/components/Navbar.vue';import FooterSection from '@/components/FooterSection.vue';
const gross=ref(0);const status=ref<'resident'|'non'>('resident');const children=ref(0);const spouse=ref(false);
const deduction=computed(()=>status.value==='resident'?(Math.max(0,children.value)*150000+(spouse.value?150000:0)):0);
const taxable=computed(()=>Math.max(0,gross.value-deduction.value));
const tax=computed(()=>{if(status.value==='non') return taxable.value*0.2; const a=taxable.value; if(a<=1500000)return 0; if(a<=2000000)return a*0.05-75000; if(a<=8500000)return a*0.1-175000; if(a<=12500000)return a*0.15-600000; return a*0.2-1225000});
const net=computed(()=>gross.value-tax.value);
</script>
<style scoped>.wrap{padding:40px 20px}.box{max-width:960px;margin:auto;display:grid;gap:14px}.intro{color:#475569}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}label{font-weight:700;color:#0f766e}input,select{padding:10px;border:1px solid #99d8cf;border-radius:8px}.help{font-size:12px;color:#64748b;margin:6px 0 0}.result{background:#ecfeff;padding:14px;border-radius:10px;display:grid;gap:6px}@media(max-width:800px){.form-grid{grid-template-columns:1fr}}</style>
