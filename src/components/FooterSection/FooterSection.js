import { ref } from 'vue'
import TermsModal from '../TermsModal/TermsModal.vue'

export default {
  name: 'FooterSection',
  components: { TermsModal },
  setup() {
    const showTerms = ref(false)
    const termsBtnRef = ref(null)

    function openTerms() {
      showTerms.value = true
    }

    function closeTerms() {
      showTerms.value = false
      termsBtnRef.value?.focus()
    }

    return { showTerms, termsBtnRef, openTerms, closeTerms }
  }
}
