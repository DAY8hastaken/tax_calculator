<template>
  <section class="learning-section">
    <div class="container">
      <div class="section-header">
        <h2>ការរៀនសូត្របង្រៀនពន្ធ</h2>
        <p>ស្វាគមន៍ស្វែងយល់ពីប្រព័ន្ធពន្ធកម្ពុជា</p>
      </div>

      <div class="learning-grid">
        <!-- What is Tax -->
        <div class="learning-card">
          <div class="card-number">01</div>
          <h3>តើពន្ធគឺជាអ្វី?</h3>
          <p>
            ពន្ធគឺជាថ្លៃលុយដែលប្រជាជនក្នុងស្រុក ឧក្រិដ្ឋកម្មទូទៅ
            និងសាលិកមួយត្រូវការប្រាក់ដល់រដ្ឋាភិបាលដើម្បីទម្រង់ស្ថាប័នសង្គម។
          </p>
          <div class="card-footer">ស្វាគមន៍ →</div>
        </div>

        <!-- Why Tax Matters -->
        <div class="learning-card">
          <div class="card-number">02</div>
          <h3>ហេតុអ្វីត្រូវបង់ពន្ធ?</h3>
          <p>
            ពន្ធគឺលក្ខណ៍សម្រាប់សង្គម ដោយវាឹងដើម្បីផ្គត់ផ្គង់
            ហេដ្ឋារចនាសម្ព័ន្ធ ផ្នែកការអប់រំ សុខាភិបាល និងសេវាកម្មសាធារណៈផ្សេងទៀត។
          </p>
          <div class="card-footer">ស្វាគមន៍ →</div>
        </div>

        <!-- Cambodian Tax System -->
        <div class="learning-card">
          <div class="card-number">03</div>
          <h3>ប្រព័ន្ធពន្ធកម្ពុជា</h3>
          <p>
            ប្រព័ន្ធពន្ធកម្ពុជាមានប្រភេទពន្ធលើប្រាក់ចំណូល ពន្ធលើការលក់
            ពន្ធលើតម្លៃបន្ថែម (VAT) និងពន្ធលើប្រាក់បៀវត្សផ្សេងទៀត។
          </p>
          <div class="card-footer">ស្វាគមន៍ →</div>
        </div>

        <!-- VAT Explanation -->
        <div class="learning-card">
          <div class="card-number">04</div>
          <h3>អាករលើតម្លៃបន្ថែម (VAT)</h3>
          <p>
            VAT គឺជាពន្ធលើការលក់របស់ផលិតផល និងសេវាកម្ម។ ក្រុមហ៊ុនតម្លៃលើការលក់
            ក្នុងបរិមាណ 10% ក្នុងក្រម ឬលក្ខណ៍ដូចលក្ខណៈរបស់ដូចលក្ខណៈរបស់របស់គ្នាក្នុងក្រម។
          </p>
          <div class="card-footer">ស្វាគមន៍ →</div>
        </div>

        <!-- Salary Tax -->
        <div class="learning-card">
          <div class="card-number">05</div>
          <h3>ពន្ធលើប្រាក់បៀវត្ស</h3>
          <p>
            ពន្ធលើប្រាក់បៀវត្សគឺលក្ខណ៍ដែលកម្មករ និងបុគ្គលិកត្រូវប្រាក់ដល់រដ្ឋាភិបាល
            ពីលើប្រាក់ចំណូលប្រចាំឆ្នាំរបស់ពួកគេ។ អត្រាពន្ធគឺលក្ខណៈទាក់ទងនឹងប្រាក់ចំណូលរបស់អ្នក។
          </p>
          <div class="card-footer">ស្វាគមន៍ →</div>
        </div>

        <!-- Tax Resources -->
        <div class="learning-card">
          <div class="card-number">06</div>
          <h3>ឯកសារពន្ធ</h3>
          <p>
            សូមស្វាគមន៍ប្រើប្រាស់ឯកសារ ច្បាប់ ឧបករណ៍ និងលម្អិតលម្អិតលម្អិតលម្អិត
            ដែលលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត។
          </p>
          <div class="card-footer">ស្វាគមន៍ →</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.learning-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, #ecfeff 0%, #f0fdfa 50%, #ffffff 100%);
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
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-header p {
  font-size: 18px;
  color: #64748b;
}

.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.learning-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(20, 184, 166, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  flex-direction: column;
}

.learning-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 30px 60px rgba(15, 118, 110, 0.15);
  border-color: rgba(20, 184, 166, 0.3);
}

.card-number {
  font-size: 48px;
  font-weight: 900;
  color: rgba(15, 118, 110, 0.15);
  margin-bottom: 16px;
  line-height: 1;
}

.learning-card h3 {
  font-size: 22px;
  font-weight: 700;
  color: #0f766e;
  margin-bottom: 16px;
}

.learning-card p {
  font-size: 15px;
  color: #64748b;
  line-height: 1.8;
  margin-bottom: auto;
  padding-bottom: 16px;
}

.card-footer {
  color: #14b8a6;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.learning-card:hover .card-footer {
  transform: translateX(6px);
}

@media (max-width: 768px) {
  .learning-section {
    padding: 60px 20px;
  }

  .section-header h2 {
    font-size: 32px;
  }

  .learning-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .learning-card {
    padding: 24px;
  }
}
</style>
