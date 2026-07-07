import { ref } from 'vue'
import HeroSection from '../HeroSection/HeroSection.vue'
import FeaturesSection from '../FeaturesSection/FeaturesSection.vue'
import AboutTeamSection from '../AboutTeamSection/AboutTeamSection.vue'
import AboutSection from '../AboutSection/AboutSection.vue'
import PricingSection from '../PricingSection/PricingSection.vue'
import ContactSection from '../ContactSection/ContactSection.vue'
import FooterSection from '../FooterSection/FooterSection.vue'
import RegisterModal from '../RegisterModal/RegisterModal.vue'

export default {
  name: 'LayoutSection',
  components: { HeroSection, FeaturesSection, AboutTeamSection, AboutSection, PricingSection, ContactSection, FooterSection, RegisterModal },
  setup() {
    const showModal  = ref(false)
    const selectedPlan = ref('basic')

    function openModal(planKey) {
      selectedPlan.value = planKey
      showModal.value = true
    }

    function closeModal() {
      showModal.value = false
    }

    function goToPlans() {
      showModal.value = false
      setTimeout(() => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
      }, 120)
    }

    return { showModal, selectedPlan, openModal, closeModal, goToPlans }
  }
}
