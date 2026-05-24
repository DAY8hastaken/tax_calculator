<template>
  <div class="page">
    <Navbar />
    <section class="tax-section">
      <div class="container">
        <h1>ពន្ធប្រថាប់ត្រា (Registration Tax)</h1>
        <p class="lead">
          ពន្ធប្រថាប់ត្រា គឺជាពន្ធលើការផ្ទេរកម្មសិទ្ធិ ឬសិទ្ធិកាន់កាប់អចលនទ្រព្យ ចលនទ្រព្យ និងការផ្ទេរភាគហ៊ុនមួយចំនួន។
        </p>

        <h2>កម្មវត្ថុជាប់ពន្ធ</h2>
        <ul>
          <li>ផ្ទេរកម្មសិទ្ធិ/សិទ្ធិកាន់កាប់អចលនទ្រព្យ</li>
          <li>ផ្ទេរភាគហ៊ុន ឬផលប្រយោជន៍ប្រហាក់ប្រហែល</li>
          <li>ប្រតិបត្តិការផ្សេងៗដែលច្បាប់កំណត់</li>
        </ul>

        <h2>អត្រាពន្ធ</h2>
        <p>អត្រាពន្ធប្រថាប់ត្រាទូទៅ = <strong>4%</strong> នៃមូលដ្ឋានគិតពន្ធ។</p>

        <h2>ការលើកលែង/អនុគ្រោះសំខាន់</h2>
        <ul>
          <li>ករណីមួយចំនួនរបស់ស្ថាប័នរដ្ឋ បេសកកម្មការទូត អង្គការអន្តរជាតិ</li>
          <li>សន្តតិកម្ម និងប្រទានកម្មក្នុង "រង្វង់ញាតិ" តាមលក្ខខណ្ឌច្បាប់</li>
          <li>ករណីខ្លះអនុញ្ញាតឱ្យដកចេញពីមូលដ្ឋានគិតពន្ធ (relief) តាមទឹកប្រាក់កំណត់</li>
        </ul>

        <h2>មូលដ្ឋានគិតពន្ធ (ជាក់ស្តែង)</h2>
        <ul>
          <li>អចលនទ្រព្យ៖ តម្លៃអចលនទ្រព្យ (ដី/សំណង់) តាមលំដាប់អាទិភាពកំណត់</li>
          <li>យានយន្ត៖ តាមមូលដ្ឋានតម្លៃកំណត់ដោយរដ្ឋបាលសារពើពន្ធ</li>
        </ul>
      </div>
    </section>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
.page { width: 100%; overflow-x: hidden; background: #ffffff; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.tax-section { padding: 56px 0; }
h1 { color: #0f766e; font-size: 34px; margin-bottom: 14px; }
.lead { color: #334155; line-height: 1.9; margin-bottom: 20px; }
h2 { color: #0f172a; margin: 18px 0 10px; font-size: 24px; }
p, li { color: #334155; line-height: 1.9; }
ul { padding-left: 22px; }
</style>
