<template>
  <section class="features">
    <div class="section-header">
      <span class="section-label">🎯 មុខងារចម្បង</span>
      <h2>ដែលទាក់ទងនឹងពន្ធខ្មែរ</h2>
    </div>

    <div class="card-container">
      <div class="card card-1">
        <div class="card-icon">💵</div>
        <h3>អាករលើតម្លៃបន្ថែម</h3>
        <p>
          រៀនអំពីអាករលើតម្លៃបន្ថែម (VAT)، ពន្ធលើការចូលចាំ និងការចេញចាំ។
        </p>
        <div class="card-footer">រៀនលម្អិត →</div>
      </div>

      <div class="card card-2">
        <div class="card-icon">💼</div>
        <h3>ពន្ធលើប្រាក់បៀវត្ស</h3>
        <p>
          ស្វាគមន៍ការគណនាពន្ធលើប្រាក់បៀវត្ស ឧក្រិដ្ឋជនក្នុងស្រុក និងអ្នកបរទេស។
        </p>
        <div class="card-footer">រៀនលម្អិត →</div>
      </div>

      <div class="card card-3">
        <div class="card-icon">🧮</div>
        <h3>គណនាលឿនៗ</h3>
        <p>
          គណនាពន្ធលើប្រាក់បៀវត្ស និង VAT បានលឿន ត្រឹមត្រូវ និងងាយស្រួល។
        </p>
        <div class="card-footer">ចាប់ផ្ដើម →</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 100px 80px;
  background: linear-gradient(135deg, #f8fafc 0%, #ecfeff 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-label {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: #0f766e;
  margin-bottom: 12px;
  letter-spacing: 1px;
}

.features h2 {
  text-align: center;
  font-size: 48px;
  margin-bottom: 0;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(20, 184, 166, 0.1);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  background-color: transparent;
}

.card-1::before {
  background: linear-gradient(90deg, transparent, #14b8a6, transparent);
}

.card-2::before {
  background: linear-gradient(90deg, transparent, #06b6d4, transparent);
}

.card-3::before {
  background: linear-gradient(90deg, transparent, #0f766e, transparent);
}

.card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 50px rgba(15, 118, 110, 0.2);
}

.card-icon {
  font-size: 50px;
  margin-bottom: 20px;
  animation: bounce 3s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.card h3 {
  margin-bottom: 16px;
  color: #0f766e;
  font-size: 24px;
  font-weight: 700;
}

.card p {
  color: #475569;
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 20px;
}

.card-footer {
  color: #14b8a6;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.card:hover .card-footer {
  transform: translateX(5px);
}

@media (max-width: 1000px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>