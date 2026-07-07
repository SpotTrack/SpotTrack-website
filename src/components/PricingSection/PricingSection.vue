<template>
  <section class="pricing-section" id="pricing" aria-labelledby="pricing-title">
    <h2 id="pricing-title" class="pricing-title">{{ $t('pricing.title') }}</h2>
    <div class="pricing-grid">
      <div v-for="plan in plans" :key="plan.key" class="plan-card" :class="{ 'popular-card': plan.popular }">
        <div v-if="plan.popular" class="popular-badge">{{ $t('pricing.popular') }}</div>
        <div class="card-divider">
          <div class="card-header">
            <h3 class="plan-name">{{ $t('pricing.' + plan.key + '.name') }}</h3>
            <div class="plan-price">
              <span class="price-value">{{ $t('pricing.' + plan.key + '.price') }}</span>
              <span class="price-period">{{ $t('pricing.perMonth') }}</span>
            </div>
          </div>
          <div class="card-content">
            <ul class="features-list">
              <li v-for="fk in plan.featureKeys" :key="fk" class="feature-item">
                <span class="check-icon" aria-hidden="true">✓</span>
                {{ $t(fk) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card-footer">
          <button
            :class="plan.popular ? 'cta-popular' : 'cta-default'"
            :aria-label="`${$t('pricing.buyNow')} - ${$t('pricing.' + plan.key + '.name')}`"
            @click="onBuyNow(plan.key)"
          >
            {{ $t('pricing.buyNow') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./PricingSection.js"></script>

<style src="./PricingSection.css" scoped></style>

