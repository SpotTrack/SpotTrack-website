<template>
  <section class="st-team-section" id="about">
    <div class="st-container">
      <h1 class="st-main-title">{{ $t('about.title') }}</h1>

      <div class="st-team-grid">
        <div class="st-team-card">
          <h3 class="st-team-card-title">{{ $t('about.mission.title') }}</h3>
          <p class="st-team-card-text">{{ $t('about.mission.description') }}</p>
        </div>
        <div class="st-team-card">
          <h3 class="st-team-card-title">{{ $t('about.vision.title') }}</h3>
          <p class="st-team-card-text">{{ $t('about.vision.description') }}</p>
        </div>
      </div>

      <div class="st-video-wrapper">
        <iframe
          class="st-video-frame"
          src="https://www.youtube.com/embed/UFjx_Ni5pV4"
          title="SpotTrack team video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script src="./AboutTeamSection.js"></script>

<style src="./AboutTeamSection.css" scoped></style>
