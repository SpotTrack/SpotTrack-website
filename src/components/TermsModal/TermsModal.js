import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'TermsModal',
  emits: ['close'],
  setup(props, { emit }) {
    const { t, tm } = useI18n({ useScope: 'global' })

    const sections = computed(() => tm('terms.sections'))
    const closeBtnRef = ref(null)

    function onClose() {
      emit('close')
    }

    function onKeydown(event) {
      if (event.key === 'Escape') onClose()
    }

    onMounted(() => {
      document.addEventListener('keydown', onKeydown)
      document.body.style.overflow = 'hidden'
      closeBtnRef.value?.focus()
    })

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', onKeydown)
      document.body.style.overflow = ''
    })

    return { t, sections, closeBtnRef, onClose }
  }
}
