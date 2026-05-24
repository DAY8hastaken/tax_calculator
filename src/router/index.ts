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
import WithholdingTax from '@/pages/WithholdingTax.vue'
import SpecificTax from '@/pages/SpecificTax.vue'
import PatentTax from '@/pages/PatentTax.vue'
import PropertyTax from '@/pages/PropertyTax.vue'
import UnusedLandTax from '@/pages/UnusedLandTax.vue'
import RegistrationTax from '@/pages/RegistrationTax.vue'
import AccommodationTax from '@/pages/AccommodationTax.vue'
import VatCalculatorPage from '@/pages/calculators/VatCalculatorPage.vue'
import SalaryCalculatorPage from '@/pages/calculators/SalaryCalculatorPage.vue'
import PrepaymentCalculatorPage from '@/pages/calculators/PrepaymentCalculatorPage.vue'
import WithholdingCalculatorPage from '@/pages/calculators/WithholdingCalculatorPage.vue'
import PublicLightingCalculatorPage from '@/pages/calculators/PublicLightingCalculatorPage.vue'
import SpecificCalculatorPage from '@/pages/calculators/SpecificCalculatorPage.vue'
import CorporateIncomeCalculatorPage from '@/pages/calculators/CorporateIncomeCalculatorPage.vue'
import PatentCalculatorPage from '@/pages/calculators/PatentCalculatorPage.vue'
import PropertyCalculatorPage from '@/pages/calculators/PropertyCalculatorPage.vue'
import UnusedLandCalculatorPage from '@/pages/calculators/UnusedLandCalculatorPage.vue'
import RegistrationCalculatorPage from '@/pages/calculators/RegistrationCalculatorPage.vue'
import AccommodationCalculatorPage from '@/pages/calculators/AccommodationCalculatorPage.vue'
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
    path: '/tax-types/withholding',
    name: 'WithholdingTax',
    component: WithholdingTax
  },
  {
    path: '/tax-types/specific',
    name: 'SpecificTax',
    component: SpecificTax
  },
  {
    path: '/tax-types/patent',
    name: 'PatentTax',
    component: PatentTax
  },
  {
    path: '/tax-types/property',
    name: 'PropertyTax',
    component: PropertyTax
  },
  {
    path: '/tax-types/unused-land',
    name: 'UnusedLandTax',
    component: UnusedLandTax
  },
  {
    path: '/tax-types/registration',
    name: 'RegistrationTax',
    component: RegistrationTax
  },
  {
    path: '/tax-types/accommodation',
    name: 'AccommodationTax',
    component: AccommodationTax
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
  },
  {
    path: '/tax-calculator/vat',
    name: 'VatCalculatorPage',
    component: VatCalculatorPage
  },
  {
    path: '/tax-calculator/salary',
    name: 'SalaryCalculatorPage',
    component: SalaryCalculatorPage
  },
  {
    path: '/tax-calculator/prepayment',
    name: 'PrepaymentCalculatorPage',
    component: PrepaymentCalculatorPage
  },
  {
    path: '/tax-calculator/withholding',
    name: 'WithholdingCalculatorPage',
    component: WithholdingCalculatorPage
  },
  {
    path: '/tax-calculator/public-lighting',
    name: 'PublicLightingCalculatorPage',
    component: PublicLightingCalculatorPage
  },
  {
    path: '/tax-calculator/specific',
    name: 'SpecificCalculatorPage',
    component: SpecificCalculatorPage
  },
  {
    path: '/tax-calculator/corporate-income',
    name: 'CorporateIncomeCalculatorPage',
    component: CorporateIncomeCalculatorPage
  },
  {
    path: '/tax-calculator/patent',
    name: 'PatentCalculatorPage',
    component: PatentCalculatorPage
  },
  {
    path: '/tax-calculator/property',
    name: 'PropertyCalculatorPage',
    component: PropertyCalculatorPage
  },
  {
    path: '/tax-calculator/unused-land',
    name: 'UnusedLandCalculatorPage',
    component: UnusedLandCalculatorPage
  },
  {
    path: '/tax-calculator/registration',
    name: 'RegistrationCalculatorPage',
    component: RegistrationCalculatorPage
  },
  {
    path: '/tax-calculator/accommodation',
    name: 'AccommodationCalculatorPage',
    component: AccommodationCalculatorPage
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
