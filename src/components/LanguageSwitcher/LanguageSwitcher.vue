<template>
  <div class="lang-switcher" role="group" :aria-label="$t('nav.languageSelector')">
    <button
      v-for="lang in languages"
      :key="lang"
      class="lang-btn"
      :class="{ active: currentLang === lang }"
      :aria-label="languageNames[lang]"
      :aria-pressed="currentLang === lang"
      @click="switchLang(lang)"
    >
      {{ lang.toUpperCase() }}
    </button>
  </div>
</template>

<script src="./LanguageSwitcher.js"></script>

<style src="./LanguageSwitcher.css" scoped></style>

