<template>
  <footer class="footer-section">
    <div class="container">
      <p>{{ $t('footer.copyright') }}</p>
      <button ref="termsBtnRef" type="button" class="footer-link" aria-haspopup="dialog" @click="openTerms">{{ $t('footer.terms') }}</button>
    </div>
    <TermsModal v-if="showTerms" @close="closeTerms" />
  </footer>
</template>

<script src="./FooterSection.js"></script>

<style src="./FooterSection.css" scoped></style>
