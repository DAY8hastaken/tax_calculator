import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import WhyTax from '@/pages/WhyTax.vue'
import TaxCalculator from '@/pages/TaxCalculator.vue'
import TaxPayer from '@/pages/TaxPayer.vue'
import TaxTypes from '@/pages/TaxTypes.vue'
import VatTax from '@/pages/VatTax.vue'
import SalaryTax from '@/pages/SalaryTax.vue'
import BusinessTax from '@/pages/BusinessTax.vue'
import PrepaymentTax from '@/pages/PrepaymentTax.vue'
import PublicLightingTax from '@/pages/PublicLightingTax.vue'
import GeneralTaxation from '@/pages/GeneralTaxation.vue'
import FAQ from '@/pages/FAQ.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/why-tax',
    name: 'WhyTax',
    component: WhyTax
  },
  {
    path: '/tax-calculator',
    name: 'TaxCalculator',
    component: TaxCalculator
  },
  {
    path: '/tax-payer',
    name: 'TaxPayer',
    component: TaxPayer
  },
  {
    path: '/tax-types',
    name: 'TaxTypes',
    component: TaxTypes
  },
  {
    path: '/tax-types/vat',
    name: 'VatTax',
    component: VatTax
  },
  {
    path: '/tax-types/salary',
    name: 'SalaryTax',
    component: SalaryTax
  },
  {
    path: '/tax-types/business',
    name: 'BusinessTax',
    component: BusinessTax
  },
  {
    path: '/tax-types/prepayment',
    name: 'PrepaymentTax',
    component: PrepaymentTax
  },
  {
    path: '/tax-types/public-lighting',
    name: 'PublicLightingTax',
    component: PublicLightingTax
  },
  {
    path: '/tax-types/general',
    name: 'GeneralTaxation',
    component: GeneralTaxation
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0 }
  }
})

export default router
