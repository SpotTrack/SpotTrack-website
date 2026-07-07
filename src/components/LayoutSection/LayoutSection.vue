<template>
  <main>
    <HeroSection />
    <FeaturesSection />
    <AboutTeamSection />
    <AboutSection />

    <div class="pricing-contact-bg">
      <video class="section-bg-video" autoplay muted loop playsinline aria-hidden="true">
        <source src="/fondo-landing2.mp4" type="video/mp4" />
      </video>
      <div class="section-bg-overlay" aria-hidden="true"></div>

      <PricingSection @buy="openModal" />
      <ContactSection />
    </div>

    <FooterSection />

    <RegisterModal
      v-if="showModal"
      :initial-plan="selectedPlan"
      @close="closeModal"
      @view-plans="goToPlans"
    />
  </main>
</template>

<script src="./LayoutSection.js"></script>

<style src="./LayoutSection.css" scoped></style>

