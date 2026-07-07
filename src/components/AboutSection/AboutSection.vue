<template>
  <section class="st-about-section" id="about-product">
    <div class="st-container">
      <h1 class="st-main-title">{{ $t('about.product.title') }}</h1>
      <p class="st-main-subtitle">{{ $t('about.product.description') }}</p>

      <div class="st-video-wrapper">
        <iframe
          class="st-video-frame"
          src="https://www.youtube.com/embed/88N8Q84aPLc"
          title="SpotTrack product video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script src="./AboutSection.js"></script>

<style src="./AboutSection.css" scoped></style>
