<template>
  <section class="calculator-preview">
    <div class="container">
      <div class="section-header">
        <h2>គណនាពន្ធលឿនៗ</h2>
        <p>សូមប្រើប្រាស់ឧបករណ៍គណនាពន្ធរបស់យើង</p>
      </div>

      <div class="calculator-grid">
        <!-- VAT Calculator -->
        <div class="calculator-card">
          <div class="calc-header">
            <div class="calc-icon">💵</div>
            <h3>គណនា VAT</h3>
          </div>

          <div class="calc-input">
            <label>ចំនួនលុយ</label>
            <div class="input-group">
              <input v-model.number="vatAmount" type="number" placeholder="0.00" />
              <span class="currency">USD</span>
            </div>
          </div>

          <div class="calc-input">
            <label>អត្រា VAT</label>
            <select v-model.number="vatRate">
              <option value="10">10%</option>
              <option value="5">5%</option>
              <option value="0">0% (អត្រាសូន្យ)</option>
            </select>
          </div>

          <div class="calc-result">
            <div class="result-item">
              <span>ចំនួនលុយ:</span>
              <strong>${{ vatAmount.toFixed(2) }}</strong>
            </div>
            <div class="result-item">
              <span>ពន្ធ VAT:</span>
              <strong>${{ (vatAmount * vatRate / 100).toFixed(2) }}</strong>
            </div>
            <div class="result-total">
              <span>សរុប:</span>
              <strong>${{ (vatAmount + vatAmount * vatRate / 100).toFixed(2) }}</strong>
            </div>
          </div>

          <button class="calc-button">គណនាលម្អិត →</button>
        </div>

        <!-- Salary Tax Calculator -->
        <div class="calculator-card">
          <div class="calc-header">
            <div class="calc-icon">💼</div>
            <h3>គណនាពន្ធលើប្រាក់បៀវត្ស</h3>
          </div>

          <div class="calc-input">
            <label>ប្រាក់បៀវត្សប្រចាំខែ</label>
            <div class="input-group">
              <input v-model.number="salaryAmount" type="number" placeholder="0.00" />
              <span class="currency">USD</span>
            </div>
          </div>

          <div class="calc-input">
            <label>ស្ថានភាព</label>
            <select v-model="taxStatus">
              <option value="resident">ឧក្រិដ្ឋក្នុងស្រុក</option>
              <option value="non-resident">អ្នកបរទេស</option>
            </select>
          </div>

          <div class="calc-result">
            <div class="result-item">
              <span>ប្រាក់បៀវត្ស:</span>
              <strong>${{ salaryAmount.toFixed(2) }}</strong>
            </div>
            <div class="result-item">
              <span>ពន្ធ (20%):</span>
              <strong>${{ (salaryAmount * 0.2).toFixed(2) }}</strong>
            </div>
            <div class="result-total">
              <span>បន្ទាប់ពីពន្ធ:</span>
              <strong>${{ (salaryAmount - salaryAmount * 0.2).toFixed(2) }}</strong>
            </div>
          </div>

          <button class="calc-button">គណនាលម្អិត →</button>
        </div>

        <!-- Tax Inclusive Calculator -->
        <div class="calculator-card">
          <div class="calc-header">
            <div class="calc-icon">🧮</div>
            <h3>គណនាលើមូលដ្ឋានពន្ធ</h3>
          </div>

          <div class="calc-input">
            <label>ចំនួនលុយលេខ (រួមពន្ធ)</label>
            <div class="input-group">
              <input v-model.number="inclusiveAmount" type="number" placeholder="0.00" />
              <span class="currency">USD</span>
            </div>
          </div>

          <div class="calc-input">
            <label>អត្រាពន្ធ</label>
            <select v-model.number="inclusiveTaxRate">
              <option value="10">10%</option>
              <option value="5">5%</option>
              <option value="20">20%</option>
            </select>
          </div>

          <div class="calc-result">
            <div class="result-item">
              <span>សរុប (រួមពន្ធ):</span>
              <strong>${{ inclusiveAmount.toFixed(2) }}</strong>
            </div>
            <div class="result-item">
              <span>មូលដ្ឋាន:</span>
              <strong>${{ (inclusiveAmount / (1 + inclusiveTaxRate / 100)).toFixed(2) }}</strong>
            </div>
            <div class="result-total">
              <span>ពន្ធ:</span>
              <strong>${{ (inclusiveAmount - inclusiveAmount / (1 + inclusiveTaxRate / 100)).toFixed(2) }}</strong>
            </div>
          </div>

          <button class="calc-button">គណនាលម្អិត →</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const vatAmount = ref(1000)
const vatRate = ref(10)
const salaryAmount = ref(2000)
const taxStatus = ref('resident')
const inclusiveAmount = ref(1100)
const inclusiveTaxRate = ref(10)
</script>

<style scoped>
.calculator-preview {
  padding: 100px 40px;
  background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 48px;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 12px;
}

.section-header p {
  font-size: 18px;
  color: #64748b;
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 32px;
}

.calculator-card {
  background: white;
  border: 1px solid rgba(20, 184, 166, 0.15);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

.calculator-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(15, 118, 110, 0.15);
  border-color: rgba(20, 184, 166, 0.3);
}

.calc-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.calc-icon {
  font-size: 48px;
}

.calc-header h3 {
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
}

.calc-input {
  margin-bottom: 20px;
}

.calc-input label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #0f766e;
  margin-bottom: 8px;
}

.input-group {
  display: flex;
  align-items: center;
  border: 2px solid rgba(20, 184, 166, 0.2);
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.input-group:focus-within {
  border-color: #14b8a6;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
}

.calc-input input,
.calc-input select {
  flex: 1;
  border: none;
  padding: 12px 14px;
  font-size: 16px;
  font-weight: 600;
  background: transparent;
  outline: none;
  color: #0f172a;
}

.input-group .currency {
  padding: 0 12px;
  color: #94a3b8;
  font-weight: 600;
  border-left: 1px solid rgba(20, 184, 166, 0.1);
  font-size: 14px;
}

.calc-input select {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid rgba(20, 184, 166, 0.2);
  border-radius: 10px;
  background: white;
  cursor: pointer;
}

.calc-input select:focus {
  border-color: #14b8a6;
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.1);
}

.calc-result {
  background: linear-gradient(135deg, #f0fdfa 0%, #ecfeff 100%);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  font-size: 14px;
  color: #64748b;
}

.result-item span {
  font-weight: 500;
}

.result-item strong {
  color: #0f766e;
  font-weight: 700;
  font-size: 16px;
}

.result-total {
  border-top: 2px solid rgba(20, 184, 166, 0.2);
  padding-top: 12px;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  color: #0f766e;
}

.result-total strong {
  font-size: 18px;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.calc-button {
  padding: 14px 24px;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(15, 118, 110, 0.3);
}

.calc-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(15, 118, 110, 0.4);
}

@media (max-width: 768px) {
  .calculator-preview {
    padding: 60px 20px;
  }

  .section-header h2 {
    font-size: 32px;
  }

  .calculator-grid {
    grid-template-columns: 1fr;
  }

  .calculator-card {
    padding: 24px;
  }
}
</style>
