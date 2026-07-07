<template>
  <section class="contact-section" id="contacto" aria-labelledby="contact-title">
    <div class="contact-container">
      <h2 id="contact-title" class="section-title">{{ t('contact.title') }}</h2>
      <form class="contact-form" @submit.prevent="onSubmit">
        <div class="form-field">
          <label class="form-label" for="contact-name">{{ t('contact.name.label') }}</label>
          <input
            id="contact-name"
            v-model="contactName"
            type="text"
            class="form-input"
            :placeholder="t('contact.name.placeholder')"
            aria-required="true"
            :aria-invalid="hasSubmitted && contactName.length === 0"
            :aria-describedby="hasSubmitted && contactName.length === 0 ? 'contact-name-error' : null"
          />
          <span v-if="hasSubmitted && contactName.length === 0" id="contact-name-error" class="form-error" role="alert">
            {{ t('contact.name.error') }}
          </span>
        </div>
        <div class="form-field">
          <label class="form-label" for="contact-email">{{ t('contact.email.label') }}</label>
          <input
            id="contact-email"
            v-model="contactEmail"
            type="email"
            class="form-input"
            :placeholder="t('contact.email.placeholder')"
            aria-required="true"
            :aria-invalid="hasSubmitted && !emailIsValid"
            :aria-describedby="hasSubmitted && !emailIsValid ? 'contact-email-error' : null"
          />
          <span v-if="hasSubmitted && !emailIsValid" id="contact-email-error" class="form-error" role="alert">
            {{ t('contact.email.error') }}
          </span>
        </div>
        <div class="form-field">
          <label class="form-label" for="contact-message">{{ t('contact.message.label') }}</label>
          <textarea
            id="contact-message"
            v-model="contactMessage"
            rows="5"
            class="form-input form-textarea"
            :placeholder="t('contact.message.placeholder')"
            aria-required="true"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn-submit"
          :disabled="!canSubmit"
        >
          {{ t('contact.submit') }}
        </button>
      </form>
    </div>
  </section>
</template>

<script src="./ContactSection.js"></script>

<style src="./ContactSection.css" scoped></style>

