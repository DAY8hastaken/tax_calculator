<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-logo">
          <span>💰</span>
          <span>ពន្ធខ្មែរ</span>
        </div>
        <p class="footer-desc">
          ប្រព័ន្ធរៀន និងគណនាពន្ធដ៏ឈានមុខគេលម្អិតផ្នែកពន្ធខ្មែរ
        </p>
      </div>

      <div class="footer-section">
        <h4>ទំព័រលម្អិត</h4>
        <ul>
          <li>ទំព័របង្រៀន</li>
          <li>គណនាពន្ធ</li>
          <li>សំណួរឆ្លើយ</li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>ទាក់ទងយើងខ្ញុំ</h4>
        <ul>
          <li>អ៉ីមែល៖ info@taxkhmer.com</li>
          <li>ស្មាតហ៍ភォន៖ +855 XX XXX XXXX</li>
        </ul>
      </div>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-bottom">
      <p>© ឆ្នាំ ២០២៦ ពន្ធខ្មែរ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
      <p class="built-with">បង្កើតដោយ Vue 3 + TypeScript + Modern CSS</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #0f172a 0%, #0f766e 100%);
  color: white;
  padding: 60px 80px 30px;
  border-top: 1px solid rgba(20, 184, 166, 0.2);
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 18px;
  color: #14b8a6;
  letter-spacing: 0.5px;
}

.footer-logo {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-desc {
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  color: #cbd5e1;
  margin-bottom: 12px;
  transition: 0.3s;
  cursor: pointer;
}

.footer-section ul li:hover {
  color: #14b8a6;
  transform: translateX(5px);
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(20, 184, 166, 0.3), transparent);
  margin-bottom: 30px;
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  color: #cbd5e1;
  font-size: 14px;
  margin-bottom: 8px;
}

.built-with {
  color: #64748b;
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
