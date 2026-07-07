<template>
  <header class="hero-header" :class="{ 'header-visible': headerVisible }">
    <h1 class="title">{{ $t('nav.brand') }}</h1>

    <nav class="hero-navbar" :class="{ 'navbar-visible': navbarVisible }" :aria-label="$t('nav.mainNavigation')">
      <button
        v-for="(btn, index) in navButtons"
        :key="index"
        class="navbar-button"
        :class="{ 'navbar-button-hovered': btnStates[index] }"
        @mouseenter="btnStates[index] = true"
        @mouseleave="btnStates[index] = false"
        @click="scrollToSection(btn.target)"
      >
        {{ $t(btn.label) }}
      </button>

      <div class="login-div">
        <button class="login-btn" :aria-label="`${$t('nav.login')} (${$t('common.opensInNewTab')})`" @click="navigateToApp()">{{ $t('nav.login') }}</button>
      </div>
    </nav>

    <div class="language-switcher">
      <LanguageSwitcher />
    </div>
  </header>

  <section class="hero-section" id="hero" :class="{ 'hero-visible': heroVisible }" aria-labelledby="hero-title">
    <div class="hero-wrapper">
      <div class="hero-wrapper-info">
        <div class="particles-overlay" aria-hidden="true"></div>
        <h1 id="hero-title">
          {{ $t('hero.headlineStart') }}
          <span class="shimmer-text">{{ $t('hero.headlineHighlight') }}</span>
          {{ $t('hero.headlineEnd') }}
        </h1>
        <p>{{ $t('hero.subheadline') }}</p>
      </div>

      <button class="start-btn" :aria-label="`${$t('hero.cta')} (${$t('common.opensInNewTab')})`" @click="navigateToApp()">{{ $t('hero.cta') }}</button>

      <div class="hero-benefits">
        <h2 v-for="(key, index) in benefitKeys" :key="index">{{ $t(key) }}</h2>
      </div>
    </div>
  </section>
</template>

<script src="./HeroSection.js"></script>

<style src="./HeroSection.css" scoped></style>

