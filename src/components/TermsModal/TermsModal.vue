<template>
  <div class="terms-overlay" @click.self="onClose">
    <div class="terms-modal" role="dialog" aria-modal="true" :aria-label="t('terms.title')">
      <div class="terms-header">
        <h2 class="terms-title">{{ t('terms.title') }}</h2>
        <button type="button" class="terms-close" aria-label="Close" @click="onClose">&times;</button>
      </div>
      <p class="terms-updated">{{ t('terms.updated') }}</p>
      <div class="terms-body">
        <p class="terms-intro">{{ t('terms.intro') }}</p>
        <div v-for="(section, index) in sections" :key="index" class="terms-section">
          <h3 class="terms-section-heading">{{ section.heading }}</h3>
          <p class="terms-section-body">{{ section.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./TermsModal.js"></script>

<style src="./TermsModal.css" scoped></style>
