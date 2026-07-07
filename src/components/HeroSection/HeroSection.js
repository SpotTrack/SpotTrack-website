import { ref, onMounted } from 'vue'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.vue'

export default {
  name: 'HeroSection',
  components: {
    LanguageSwitcher
  },
  setup() {
    const appUrl = 'https://green-pebble-07422c50f.7.azurestaticapps.net'

    const btnStates = ref([false, false, false, false])

    const navButtons = [
      { label: 'nav.about', target: 'about' },
      { label: 'nav.features', target: 'features' },
      { label: 'nav.pricing', target: 'pricing' },
      { label: 'contact.title', target: 'contacto' }
    ]

    const benefitKeys = [0, 1, 2, 3].map(i => `hero.benefits[${i}]`)

    const headerVisible = ref(false)
    const navbarVisible = ref(false)
    const heroVisible = ref(false)

    onMounted(() => {
      // Staggered fade-in animations matching Angular's timing
      setTimeout(() => { headerVisible.value = true }, 100)
      setTimeout(() => { navbarVisible.value = true }, 300)
      setTimeout(() => { heroVisible.value = true }, 600)
    })

    function scrollToSection(id) {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    function navigateToApp() {
      window.open(appUrl, '_blank')
    }

    return {
      btnStates,
      navButtons,
      benefitKeys,
      headerVisible,
      navbarVisible,
      heroVisible,
      scrollToSection,
      navigateToApp
    }
  }
}
