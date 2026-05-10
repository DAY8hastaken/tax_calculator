<template>
  <section class="news-section">
    <div class="container">
      <div class="section-header">
        <h2>ព័ត៌មាននិងលទ្ធផល</h2>
        <p>សូមស្វាគមន៍ទាន់ពេលលើការបង្ហាញផ្នែកពន្ធលម្អិត</p>
      </div>

      <div class="news-tabs">
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'news' }" 
          @click="activeTab = 'news'"
        >
          📰 ព័ត៌មាន
        </button>
        <button 
          class="tab-button" 
          :class="{ active: activeTab === 'announcement' }" 
          @click="activeTab = 'announcement'"
        >
          📢 ប្រកាសលម្អិត
        </button>
      </div>

      <!-- News Items -->
      <div v-if="activeTab === 'news'" class="news-grid">
        <div class="news-card" v-for="item in newsItems" :key="item.id">
          <div class="card-header">
            <div class="date-badge">
              <span class="date-day">{{ item.day }}</span>
              <span class="date-month">{{ item.month }}</span>
            </div>
            <span class="category-tag">{{ item.category }}</span>
          </div>

          <h3>{{ item.title }}</h3>
          <p>{{ item.excerpt }}</p>

          <div class="card-footer">
            <span class="read-time">{{ item.readTime }}</span>
            <a href="#" class="read-more">អានពេញលេញ →</a>
          </div>
        </div>
      </div>

      <!-- Announcements -->
      <div v-if="activeTab === 'announcement'" class="announcement-grid">
        <div class="announcement-card" v-for="item in announcements" :key="item.id">
          <div class="announcement-badge">{{ item.priority }}</div>
          
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>

          <div class="announcement-meta">
            <span class="announce-date">📅 {{ item.date }}</span>
            <a href="#" class="view-detail">មើលលម្អិត →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'news' | 'announcement'>('news')

const newsItems = ref([
  {
    id: 1,
    title: 'វិធានពន្ធលើតម្លៃបន្ថែម (VAT) ឆ្នាំ ២០២៦',
    excerpt: 'មន្ទីរពន្ធបានលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត លម្អិតលម្អិតលម្អិត។',
    day: '25',
    month: 'មេ',
    category: 'វិធាន',
    readTime: '៣ នាទី',
  },
  {
    id: 2,
    title: 'ការកែលម្អលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត',
    excerpt: 'គណៈគ្រប់គ្រងបានលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត លម្អិតលម្អិត។',
    day: '20',
    month: 'មេ',
    category: 'ព័ត៌មាន',
    readTime: '២ នាទី',
  },
  {
    id: 3,
    title: 'ការលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត',
    excerpt: 'សូមស្វាគមន៍លម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត លម្អិតលម្អិតលម្អិត។',
    day: '15',
    month: 'មេ',
    category: 'ការកែលម្អ',
    readTime: '៤ នាទី',
  },
])

const announcements = ref([
  {
    id: 1,
    title: 'ការផ្លាស់ប្តូរលម្អិតលម្អិតលម្អិត',
    content: 'ផ្នែកលម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត លម្អិតលម្អិតលម្អិតលម្អិត។',
    priority: '⚠️ ខ្ពស់',
    date: '២៣ មេ ២០២៦',
  },
  {
    id: 2,
    title: 'ពិគ្គមាលម្អិតលម្អិតលម្អិត',
    content: 'សូមស្វាគមន៍លម្អិតលម្អិតលម្អិតលម្អិតលម្អិតលម្អិត លម្អិតលម្អិត។',
    priority: '✓ ធម្មតា',
    date: '២០ មេ ២០២៦',
  },
])
</script>

<style scoped>
.news-section {
  padding: 100px 40px;
  background: white;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
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

.news-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
}

.tab-button {
  padding: 12px 28px;
  border: 2px solid rgba(20, 184, 166, 0.2);
  background: white;
  color: #0f766e;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button:hover {
  border-color: #14b8a6;
  color: #14b8a6;
}

.tab-button.active {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(15, 118, 110, 0.3);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
}

.news-card {
  background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%);
  border: 1px solid rgba(20, 184, 166, 0.15);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(15, 118, 110, 0.12);
  border-color: rgba(20, 184, 166, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  min-width: 50px;
  text-align: center;
}

.date-day {
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
}

.date-month {
  font-size: 12px;
  font-weight: 600;
}

.category-tag {
  background: rgba(20, 184, 166, 0.15);
  color: #0f766e;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.news-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
  line-height: 1.4;
}

.news-card p {
  font-size: 15px;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: auto;
  padding-bottom: 16px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(20, 184, 166, 0.1);
  padding-top: 16px;
}

.read-time {
  font-size: 12px;
  color: #94a3b8;
}

.read-more {
  color: #14b8a6;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.news-card:hover .read-more {
  transform: translateX(4px);
}

.announcement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}

.announcement-card {
  background: white;
  border: 2px solid rgba(20, 184, 166, 0.1);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.announcement-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #0f766e, #14b8a6);
}

.announcement-card:hover {
  transform: translateX(4px);
  box-shadow: 0 12px 32px rgba(15, 118, 110, 0.15);
  border-color: rgba(20, 184, 166, 0.3);
}

.announcement-badge {
  display: inline-block;
  background: rgba(20, 184, 166, 0.15);
  color: #0f766e;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 16px;
}

.announcement-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 12px;
}

.announcement-card p {
  font-size: 14px;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 16px;
}

.announcement-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(20, 184, 166, 0.1);
}

.announce-date {
  font-size: 12px;
  color: #94a3b8;
}

.view-detail {
  color: #14b8a6;
  font-weight: 600;
  font-size: 13px;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.announcement-card:hover .view-detail {
  transform: translateX(2px);
}

@media (max-width: 768px) {
  .news-section {
    padding: 60px 20px;
  }

  .section-header h2 {
    font-size: 32px;
  }

  .news-grid,
  .announcement-grid {
    grid-template-columns: 1fr;
  }

  .news-tabs {
    flex-direction: column;
  }

  .tab-button {
    width: 100%;
  }
}
</style>
