<template>
  <section class="tax-announcements">
    <div class="container">
      <div class="section-title">
        <h2>Tax News & Announcements</h2>
        <p class="subtitle">Latest updates from the General Department of Taxation</p>
      </div>

      <div class="announcements-content">
        <div class="tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="tab-btn"
            :class="{ active: activeTab === tab.id }"
            @click="activeTab = tab.id"
          >
            <span class="tab-icon">{{ tab.icon }}</span>
            {{ tab.label }}
            <span class="tab-count">({{ getTabCount(tab.id) }})</span>
          </button>
        </div>

        <div class="announcements-grid">
          <template v-if="activeTab === 'news'">
            <div v-for="(news, index) in newsItems" :key="index" class="announcement-card news-card">
              <div class="card-header">
                <span class="date-badge">
                  <span class="day">{{ formatDay(news.date) }}</span>
                  <span class="month">{{ formatMonth(news.date) }}</span>
                </span>
                <span class="category-tag">{{ news.category }}</span>
              </div>

              <h3>{{ news.title }}</h3>
              <p class="excerpt">{{ news.excerpt }}</p>

              <div class="card-meta">
                <span class="read-time">📖 {{ news.readTime }} min read</span>
                <button class="read-more-btn">Read Full Article →</button>
              </div>
            </div>
          </template>

          <template v-if="activeTab === 'announcements'">
            <div v-for="(announcement, index) in announcementItems" :key="index" class="announcement-card announcement-card-item">
              <div class="priority-bar" :class="`priority-${announcement.priority}`"></div>
              
              <div class="card-header-announcement">
                <span class="priority-badge" :class="`priority-${announcement.priority}`">
                  {{ announcement.priority.toUpperCase() }}
                </span>
                <span class="date-text">{{ formatAnnounceDate(announcement.date) }}</span>
              </div>

              <h3>{{ announcement.title }}</h3>
              <p class="announcement-content">{{ announcement.content }}</p>

              <div class="announcement-actions">
                <button class="action-btn">View Details →</button>
                <span v-if="announcement.document" class="doc-link">📄 {{ announcement.document }}</span>
              </div>
            </div>
          </template>

          <template v-if="activeTab === 'forms'">
            <div v-for="(form, index) in formItems" :key="index" class="announcement-card form-card">
              <div class="form-icon">{{ form.icon }}</div>
              
              <h3>{{ form.title }}</h3>
              <p class="khmer-name">{{ form.khmerName }}</p>
              <p class="form-description">{{ form.description }}</p>

              <div class="form-meta">
                <span class="version">{{ form.version }}</span>
                <span class="update-date">Updated: {{ form.updated }}</span>
              </div>

              <div class="form-actions">
                <button class="download-btn">📥 Download Form</button>
                <button class="guide-btn">📖 Guide</button>
              </div>
            </div>
          </template>
        </div>
      </div>

      <div class="official-notice">
        <div class="notice-icon">⚠️</div>
        <div class="notice-content">
          <h4>Important Notice</h4>
          <p>
            All taxpayers are required to comply with Cambodian tax laws and regulations. 
            Please visit the <strong>General Department of Taxation (GDT)</strong> official website for official 
            announcements and requirements. This educational platform provides general information and is not a substitute for professional tax advice.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('news')

const tabs = [
  { id: 'news', label: 'Tax News', icon: '📰' },
  { id: 'announcements', label: 'Announcements', icon: '📢' },
  { id: 'forms', label: 'Forms & Documents', icon: '📋' }
]

const newsItems = [
  {
    title: 'New VAT Compliance Requirements for 2026',
    excerpt: 'The General Department of Taxation announces updated VAT compliance requirements for all registered businesses. Detailed guidelines and implementation dates are provided.',
    date: '2026-05-08',
    category: 'VAT',
    readTime: 8
  },
  {
    title: 'Tax Filing Deadline Extension Notice',
    excerpt: 'Due to recent system maintenance, the tax filing deadline has been extended. See the announcement section for specific dates and affected taxpayers.',
    date: '2026-05-05',
    category: 'Deadline',
    readTime: 5
  },
  {
    title: 'Updated Salary Tax Withholding Tables',
    excerpt: 'New salary tax withholding tables effective January 2026 are now available. Employers must use the updated tables for payroll processing.',
    date: '2026-05-01',
    category: 'Salary Tax',
    readTime: 6
  },
  {
    title: 'E-Filing System Upgrade Complete',
    excerpt: 'The tax authorities have completed the upgrade of the e-filing system with enhanced security and user-friendly features for all taxpayers.',
    date: '2026-04-28',
    category: 'System',
    readTime: 7
  }
]

const announcementItems = [
  {
    title: 'URGENT: Tax Declaration Submission Portal Now Open',
    content: 'The online tax declaration portal for 2025 tax year is now open. All eligible taxpayers must submit their declarations by March 31, 2026. Late submissions will incur penalties.',
    date: '2026-05-10',
    priority: 'high',
    document: 'GDT Declaration Guidelines.pdf'
  },
  {
    title: 'Quarterly VAT Declaration Submission Reminder',
    content: 'Reminder: Q1 2026 VAT declarations are due by April 20, 2026. Businesses can file through the e-taxation system or at authorized collection offices.',
    date: '2026-05-07',
    priority: 'high',
    document: null
  },
  {
    title: 'New Tax Incentive Program for SMEs',
    content: 'The government has introduced new tax incentives for small and medium enterprises. Eligible businesses can apply for reduced tax rates. More information available in the GDT bulletin.',
    date: '2026-05-03',
    priority: 'medium',
    document: 'SME Tax Incentive Program.pdf'
  },
  {
    title: 'Public Lighting Tax Schedule for 2026',
    content: 'The public lighting tax payment schedule for 2026 has been released. Property owners should note the payment due dates to avoid late payment penalties.',
    date: '2026-04-30',
    priority: 'medium',
    document: null
  }
]

const formItems = [
  {
    icon: '📝',
    title: 'Annual Tax Return Form',
    khmerName: 'ទម្រង់ពន្ធលើប្រាក់បៀវត្សប្រចាំឆ្នាំ',
    description: 'Official form for annual tax return submission. Required for all individuals and businesses with taxable income.',
    version: 'v2.1 (2026)',
    updated: 'January 2026',
  },
  {
    icon: '📦',
    title: 'VAT Declaration Form',
    khmerName: 'ឯកសារលេខគាំទ្របន្ថែម',
    description: 'Monthly/quarterly VAT declaration form for registered VAT businesses. Used to report sales, purchases, and calculate VAT liability.',
    version: 'v1.8 (2026)',
    updated: 'February 2026',
  },
  {
    icon: '💼',
    title: 'Business Registration Form',
    khmerName: 'ឯកសារចុះឈ្មោះបង្កើតឧស្សាហកម្ម',
    description: 'Form for business registration and tax identification number (TIN) assignment. Required before commencing business operations.',
    version: 'v2.0 (2025)',
    updated: 'December 2025',
  },
  {
    icon: '👤',
    title: 'Individual Tax Registration',
    khmerName: 'ឯកសារចុះឈ្មោះបង្កើតពលរដ្ឋលាច',
    description: 'Registration form for self-employed individuals and independent contractors. Required if income exceeds specified thresholds.',
    version: 'v1.5 (2026)',
    updated: 'March 2026',
  }
]

const getTabCount = (tabId: string) => {
  if (tabId === 'news') return newsItems.length
  if (tabId === 'announcements') return announcementItems.length
  if (tabId === 'forms') return formItems.length
  return 0
}

const formatDay = (dateStr: string) => {
  const date = new Date(dateStr)
  return String(date.getDate()).padStart(2, '0')
}

const formatMonth = (dateStr: string) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const date = new Date(dateStr)
  return months[date.getMonth()]
}

const formatAnnounceDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.tax-announcements {
  padding: 100px 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 60px;
}

.section-title h2 {
  font-size: 48px;
  font-weight: 900;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #64748b;
  font-weight: 500;
}

.announcements-content {
  margin-bottom: 60px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  border-bottom: 2px solid rgba(20, 184, 166, 0.1);
  flex-wrap: wrap;
}

.tab-btn {
  padding: 14px 24px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #64748b;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.tab-icon {
  font-size: 18px;
}

.tab-count {
  font-size: 12px;
  color: #94a3b8;
}

.tab-btn:hover {
  color: #0f766e;
}

.tab-btn.active {
  color: #0f766e;
  border-bottom-color: #0f766e;
}

.announcements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.announcement-card {
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(20, 184, 166, 0.1);
  transition: all 0.3s ease;
}

.news-card {
  padding: 25px;
}

.news-card:hover {
  border-color: rgba(20, 184, 166, 0.3);
  box-shadow: 0 12px 30px rgba(15, 118, 110, 0.1);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  border-radius: 8px;
  color: white;
}

.day {
  font-weight: 900;
  font-size: 20px;
}

.month {
  font-weight: 600;
  font-size: 11px;
}

.category-tag {
  background: rgba(20, 184, 166, 0.1);
  color: #0f766e;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.announcement-card h3 {
  font-size: 18px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 10px;
  line-height: 1.4;
}

.excerpt {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 15px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid rgba(20, 184, 166, 0.1);
}

.read-time {
  font-size: 13px;
  color: #94a3b8;
}

.read-more-btn {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.read-more-btn:hover {
  transform: translateX(4px);
  box-shadow: 0 6px 15px rgba(15, 118, 110, 0.3);
}

/* Announcement Card Specific */
.announcement-card-item {
  border-left: 4px solid #14b8a6;
  padding: 20px;
  position: relative;
}

.priority-bar {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  border-radius: 0 12px 12px 0;
}

.priority-high {
  background: linear-gradient(180deg, #ef4444 0%, #dc2626 100%);
}

.priority-medium {
  background: linear-gradient(180deg, #f59e0b 0%, #d97706 100%);
}

.priority-low {
  background: linear-gradient(180deg, #10b981 0%, #059669 100%);
}

.card-header-announcement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.priority-badge {
  font-size: 11px;
  font-weight: 900;
  padding: 4px 10px;
  border-radius: 4px;
  color: white;
}

.priority-badge.priority-high {
  background: #ef4444;
}

.priority-badge.priority-medium {
  background: #f59e0b;
}

.priority-badge.priority-low {
  background: #10b981;
}

.date-text {
  font-size: 12px;
  color: #94a3b8;
}

.announcement-content {
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 15px;
}

.announcement-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid rgba(20, 184, 166, 0.1);
}

.action-btn {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  box-shadow: 0 4px 12px rgba(15, 118, 110, 0.3);
}

.doc-link {
  font-size: 12px;
  color: #0f766e;
  font-weight: 600;
  cursor: pointer;
}

/* Form Card Specific */
.form-card {
  padding: 30px 25px;
  text-align: center;
}

.form-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.khmer-name {
  font-size: 13px;
  color: #14b8a6;
  font-weight: 600;
  margin-bottom: 10px;
}

.form-description {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 15px;
}

.form-meta {
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 12px;
  color: #94a3b8;
  padding: 12px 0;
  border-top: 1px solid rgba(20, 184, 166, 0.1);
  border-bottom: 1px solid rgba(20, 184, 166, 0.1);
  margin-bottom: 15px;
}

.version,
.update-date {
  font-weight: 600;
}

.form-actions {
  display: flex;
  gap: 10px;
}

.download-btn,
.guide-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.download-btn {
  background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  color: white;
}

.download-btn:hover {
  box-shadow: 0 4px 12px rgba(15, 118, 110, 0.3);
}

.guide-btn {
  background: rgba(20, 184, 166, 0.1);
  color: #0f766e;
  border: 1px solid rgba(20, 184, 166, 0.2);
}

.guide-btn:hover {
  background: rgba(20, 184, 166, 0.2);
}

/* Official Notice */
.official-notice {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(249, 158, 11, 0.05) 100%);
  border: 2px solid #fbbf24;
  border-radius: 12px;
  padding: 25px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.notice-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.notice-content h4 {
  font-size: 18px;
  font-weight: 800;
  color: #92400e;
  margin-bottom: 8px;
}

.notice-content p {
  font-size: 14px;
  color: #78350f;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .announcements-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .tax-announcements {
    padding: 60px 15px;
  }

  .section-title h2 {
    font-size: 32px;
  }

  .tabs {
    flex-direction: column;
  }

  .tab-btn {
    padding: 12px 16px;
    border-right: 3px solid transparent;
    border-bottom: none;
  }

  .tab-btn.active {
    border-right-color: #0f766e;
    border-bottom: none;
  }

  .announcements-grid {
    grid-template-columns: 1fr;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-meta {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .official-notice {
    flex-direction: column;
  }
}
</style>
