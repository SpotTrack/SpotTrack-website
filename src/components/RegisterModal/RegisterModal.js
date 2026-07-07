import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { registerBusiness } from '../../composables/useRegisterBusiness.js'

const PLANS = [
  { key: 'basic',    nameKey: 'pricing.basic.name',    priceKey: 'pricing.basic.price',    featureKeys: [0,1,2,3].map(i => `pricing.basic.features[${i}]`)    },
  { key: 'mid',      nameKey: 'pricing.mid.name',      priceKey: 'pricing.mid.price',      featureKeys: [0,1,2,3,4].map(i => `pricing.mid.features[${i}]`)    },
  { key: 'platinum', nameKey: 'pricing.platinum.name', priceKey: 'pricing.platinum.price', featureKeys: [0,1,2,3,4].map(i => `pricing.platinum.features[${i}]`) }
]

export default {
  name: 'RegisterModal',
  props: {
    initialPlan: { type: String, required: true }
  },
  emits: ['close', 'view-plans'],
  setup(props, { emit }) {
    const { t, tm } = useI18n({ useScope: 'global' })

    // ── Step state ──
    const step = ref('form') // 'form' | 'confirm'
    const selectedPlan = ref(props.initialPlan)

    // ── Form fields ──
    const firstName      = ref('')
    const lastName       = ref('')
    const dni            = ref('')
    const phoneNumber    = ref('')
    const companyName    = ref('')
    const ruc            = ref('')
    const legalStructure = ref('')
    const companyPhone   = ref('')
    const companyEmail   = ref('')
    const streetAddress  = ref('')
    const city           = ref('')
    const district       = ref('')
    const email          = ref('')
    const password       = ref('')
    const confirmPassword = ref('')

    // ── UI state ──
    const submitted   = ref(false) // true after first "Continue" attempt
    const loading     = ref(false)
    const serverError = ref('')

    // ── Validation ──
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const errors = computed(() => ({
      firstName:       firstName.value.trim()       ? '' : t('register.errors.required'),
      lastName:        lastName.value.trim()        ? '' : t('register.errors.required'),
      dni:             /^\d{8}$/.test(dni.value.trim())      ? '' : t('register.errors.dni'),
      phoneNumber:     phoneNumber.value.trim()     ? '' : t('register.errors.required'),
      companyName:     companyName.value.trim()     ? '' : t('register.errors.required'),
      ruc:             /^\d{11}$/.test(ruc.value.trim())     ? '' : t('register.errors.ruc'),
      legalStructure:  legalStructure.value         ? '' : t('register.errors.required'),
      companyPhone:    companyPhone.value.trim()    ? '' : t('register.errors.required'),
      companyEmail:    emailRegex.test(companyEmail.value.trim()) ? '' : t('register.errors.email'),
      streetAddress:   streetAddress.value.trim()   ? '' : t('register.errors.required'),
      city:            city.value.trim()            ? '' : t('register.errors.required'),
      district:        district.value.trim()        ? '' : t('register.errors.required'),
      email:           emailRegex.test(email.value.trim())   ? '' : t('register.errors.email'),
      password:        password.value.length >= 8   ? '' : t('register.errors.passwordMin'),
      confirmPassword: password.value === confirmPassword.value ? '' : t('register.errors.passwordMatch')
    }))

    const formIsValid = computed(() => Object.values(errors.value).every(e => e === ''))

    // ── Computed plan data for confirm step ──
    const plans = PLANS

    function planName(key) { return t(`pricing.${key}.name`) }
    function planPrice(key) { return t(`pricing.${key}.price`) }
    function planFeatures(plan) { return plan.featureKeys.map(k => t(k)) }

    // ── Handlers ──
    function onContinue() {
      submitted.value = true
      if (!formIsValid.value) return
      step.value = 'confirm'
    }

    function onBack() {
      step.value = 'form'
      serverError.value = ''
    }

    function onViewPlans() {
      emit('view-plans')
    }

    function onClose() {
      emit('close')
    }

    async function onPay() {
      if (loading.value) return
      loading.value = true
      serverError.value = ''
      try {
        const checkoutUrl = await registerBusiness(selectedPlan.value, {
          email: email.value.trim(),
          password: password.value,
          firstName: firstName.value.trim(),
          lastName: lastName.value.trim(),
          phoneNumber: phoneNumber.value.trim(),
          dni: dni.value.trim(),
          companyName: companyName.value.trim(),
          ruc: ruc.value.trim(),
          legalStructure: legalStructure.value,
          companyPhone: companyPhone.value.trim(),
          companyEmail: companyEmail.value.trim(),
          streetAddress: streetAddress.value.trim(),
          city: city.value.trim(),
          district: district.value.trim()
        })
        window.location.href = checkoutUrl
      } catch (err) {
        serverError.value = err.message || t('register.errors.serverGeneric')
        loading.value = false
      }
    }

    // ── Keyboard ──
    function onKeydown(e) { if (e.key === 'Escape') onClose() }
    onMounted(() => document.addEventListener('keydown', onKeydown))
    onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

    return {
      t, tm,
      step, selectedPlan, plans,
      firstName, lastName, dni, phoneNumber,
      companyName, ruc, legalStructure, companyPhone, companyEmail,
      streetAddress, city, district,
      email, password, confirmPassword,
      submitted, loading, serverError,
      errors,
      planName, planPrice, planFeatures,
      onContinue, onBack, onViewPlans, onClose, onPay
    }
  }
}
