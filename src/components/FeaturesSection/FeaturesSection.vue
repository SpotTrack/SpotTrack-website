<template>
  <section class="st-features-section" id="features" aria-labelledby="features-title">
    <div class="st-container">
      <h1 id="features-title" class="st-main-title">{{ $t('solution.title') }}</h1>
      <p class="st-main-subtitle">{{ $t('solution.subtitle') }}</p>

      <div class="st-grid-container">
        <div v-for="feature in features" :key="feature.key" class="st-card">

          <svg class="st-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <template v-if="feature.icon === 'sensor'">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </template>
            <template v-else-if="feature.icon === 'cloud'">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </template>
            <template v-else-if="feature.icon === 'monitor'">
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
            </template>
            <template v-else-if="feature.icon === 'alert'">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </template>
            <template v-else-if="feature.icon === 'dashboard'">
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path>
              <polyline points="20 17 12 17 4 17"></polyline>
            </template>
            <template v-else-if="feature.icon === 'security'">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </template>
          </svg>

          <div class="st-card-header">
            <h3 class="st-card-title">
              {{ $t('solution.' + feature.key + '.title') }}
            </h3>
          </div>

          <div class="st-card-content">
            <p class="st-card-text">
              {{ $t('solution.' + feature.key + '.description') }}
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script src="./FeaturesSection.js"></script>

<style src="./FeaturesSection.css" scoped></style>

