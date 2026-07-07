import { ref } from 'vue'
import TermsModal from '../TermsModal/TermsModal.vue'

export default {
  name: 'FooterSection',
  components: { TermsModal },
  setup() {
    const showTerms = ref(false)

    function openTerms() {
      showTerms.value = true
    }

    function closeTerms() {
      showTerms.value = false
    }

    return { showTerms, openTerms, closeTerms }
  }
}
