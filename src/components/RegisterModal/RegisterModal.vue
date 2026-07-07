<template>
  <div class="register-overlay" @click.self="onClose">
    <div class="register-modal" role="dialog" aria-modal="true" :aria-labelledby="step === 'form' ? 'reg-title' : 'conf-title'">

      <!-- ══════════════ PANTALLA A: FORMULARIO ══════════════ -->
      <div v-show="step === 'form'">
        <div class="modal-header">
          <h2 id="reg-title" class="modal-title">{{ t('register.title') }}</h2>
          <button type="button" class="modal-close" :aria-label="t('common.close')" @click="onClose">&times;</button>
        </div>
        <p class="modal-subtitle">
          {{ t('register.subtitle', { plan: '' }) }}
          <strong>{{ planName(selectedPlan) }}</strong>
          {{ t('register.subtitle', { plan: '' }).split('{plan}')[1] }}
        </p>

        <form @submit.prevent="onContinue" novalidate>

          <!-- Sección personal (sin título) -->
          <div class="form-section">
            <div class="form-grid">
              <div class="form-field">
                <label class="form-label" for="r-firstName">{{ t('register.firstName.label') }}</label>
                <input
                  id="r-firstName" v-model="firstName" type="text"
                  class="form-input" :class="{ 'input-error': submitted && errors.firstName }"
                  :placeholder="t('register.firstName.placeholder')"
                />
                <span v-if="submitted && errors.firstName" class="field-error">{{ errors.firstName }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-lastName">{{ t('register.lastName.label') }}</label>
                <input
                  id="r-lastName" v-model="lastName" type="text"
                  class="form-input" :class="{ 'input-error': submitted && errors.lastName }"
                  :placeholder="t('register.lastName.placeholder')"
                />
                <span v-if="submitted && errors.lastName" class="field-error">{{ errors.lastName }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-dni">{{ t('register.dni.label') }}</label>
                <input
                  id="r-dni" v-model="dni" type="text" inputmode="numeric" maxlength="8"
                  class="form-input" :class="{ 'input-error': submitted && errors.dni }"
                  :placeholder="t('register.dni.placeholder')"
                />
                <span v-if="submitted && errors.dni" class="field-error">{{ errors.dni }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-phone">{{ t('register.phoneNumber.label') }}</label>
                <input
                  id="r-phone" v-model="phoneNumber" type="tel"
                  class="form-input" :class="{ 'input-error': submitted && errors.phoneNumber }"
                  :placeholder="t('register.phoneNumber.placeholder')"
                />
                <span v-if="submitted && errors.phoneNumber" class="field-error">{{ errors.phoneNumber }}</span>
              </div>
            </div>
          </div>

          <!-- Sección Business Information -->
          <div class="form-section">
            <p class="section-title">{{ t('register.sectionBusiness') }}</p>
            <div class="form-grid">
              <div class="form-field">
                <label class="form-label" for="r-companyName">{{ t('register.companyName.label') }}</label>
                <input
                  id="r-companyName" v-model="companyName" type="text"
                  class="form-input" :class="{ 'input-error': submitted && errors.companyName }"
                  :placeholder="t('register.companyName.placeholder')"
                />
                <span v-if="submitted && errors.companyName" class="field-error">{{ errors.companyName }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-ruc">{{ t('register.ruc.label') }}</label>
                <input
                  id="r-ruc" v-model="ruc" type="text" inputmode="numeric" maxlength="11"
                  class="form-input" :class="{ 'input-error': submitted && errors.ruc }"
                  :placeholder="t('register.ruc.placeholder')"
                />
                <span v-if="submitted && errors.ruc" class="field-error">{{ errors.ruc }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-legal">{{ t('register.legalStructure.label') }}</label>
                <select
                  id="r-legal" v-model="legalStructure"
                  class="form-input" :class="{ 'input-error': submitted && errors.legalStructure }"
                >
                  <option value="" disabled>{{ t('register.legalStructure.placeholder') }}</option>
                  <option v-for="opt in t('register.legalOptions')" :key="opt" :value="opt">{{ opt }}</option>
                </select>
                <span v-if="submitted && errors.legalStructure" class="field-error">{{ errors.legalStructure }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-companyPhone">{{ t('register.companyPhone.label') }}</label>
                <input
                  id="r-companyPhone" v-model="companyPhone" type="tel"
                  class="form-input" :class="{ 'input-error': submitted && errors.companyPhone }"
                  :placeholder="t('register.companyPhone.placeholder')"
                />
                <span v-if="submitted && errors.companyPhone" class="field-error">{{ errors.companyPhone }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-companyEmail">{{ t('register.companyEmail.label') }}</label>
                <input
                  id="r-companyEmail" v-model="companyEmail" type="email"
                  class="form-input" :class="{ 'input-error': submitted && errors.companyEmail }"
                  :placeholder="t('register.companyEmail.placeholder')"
                />
                <span v-if="submitted && errors.companyEmail" class="field-error">{{ errors.companyEmail }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-street">{{ t('register.streetAddress.label') }}</label>
                <input
                  id="r-street" v-model="streetAddress" type="text"
                  class="form-input" :class="{ 'input-error': submitted && errors.streetAddress }"
                  :placeholder="t('register.streetAddress.placeholder')"
                />
                <span v-if="submitted && errors.streetAddress" class="field-error">{{ errors.streetAddress }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-city">{{ t('register.city.label') }}</label>
                <input
                  id="r-city" v-model="city" type="text"
                  class="form-input" :class="{ 'input-error': submitted && errors.city }"
                  :placeholder="t('register.city.placeholder')"
                />
                <span v-if="submitted && errors.city" class="field-error">{{ errors.city }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-district">{{ t('register.district.label') }}</label>
                <input
                  id="r-district" v-model="district" type="text"
                  class="form-input" :class="{ 'input-error': submitted && errors.district }"
                  :placeholder="t('register.district.placeholder')"
                />
                <span v-if="submitted && errors.district" class="field-error">{{ errors.district }}</span>
              </div>
            </div>
          </div>

          <!-- Sección Account Credentials -->
          <div class="form-section">
            <p class="section-title">{{ t('register.sectionCredentials') }}</p>
            <div class="form-grid full">
              <div class="form-field">
                <label class="form-label" for="r-email">{{ t('register.email.label') }}</label>
                <input
                  id="r-email" v-model="email" type="email"
                  class="form-input" :class="{ 'input-error': submitted && errors.email }"
                  :placeholder="t('register.email.placeholder')"
                />
                <span v-if="submitted && errors.email" class="field-error">{{ errors.email }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-password">{{ t('register.password.label') }}</label>
                <input
                  id="r-password" v-model="password" type="password"
                  class="form-input" :class="{ 'input-error': submitted && errors.password }"
                  :placeholder="t('register.password.placeholder')"
                />
                <span v-if="submitted && errors.password" class="field-error">{{ errors.password }}</span>
              </div>
              <div class="form-field">
                <label class="form-label" for="r-confirm">{{ t('register.confirmPassword.label') }}</label>
                <input
                  id="r-confirm" v-model="confirmPassword" type="password"
                  class="form-input" :class="{ 'input-error': submitted && errors.confirmPassword }"
                  :placeholder="t('register.confirmPassword.placeholder')"
                />
                <span v-if="submitted && errors.confirmPassword" class="field-error">{{ errors.confirmPassword }}</span>
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button type="submit" class="btn-primary">{{ t('register.continue') }}</button>
            <button type="button" class="link-view-plans" @click="onViewPlans">{{ t('register.viewPlans') }}</button>
          </div>
        </form>
      </div>

      <!-- ══════════════ PANTALLA B: CONFIRMACIÓN DE PLAN ══════════════ -->
      <div v-show="step === 'confirm'">
        <button type="button" class="confirm-back" @click="onBack">{{ t('register.back') }}</button>

        <h2 id="conf-title" class="confirm-title">{{ t('register.confirmTitle') }}</h2>
        <p class="confirm-subtitle">{{ t('register.confirmSubtitle') }}</p>

        <div class="plan-picker">
          <div
            v-for="plan in plans"
            :key="plan.key"
            class="plan-pick-card"
            :class="{ selected: selectedPlan === plan.key }"
            role="radio"
            :aria-checked="selectedPlan === plan.key"
            tabindex="0"
            @click="selectedPlan = plan.key"
            @keydown.enter="selectedPlan = plan.key"
            @keydown.space.prevent="selectedPlan = plan.key"
          >
            <span v-if="selectedPlan === plan.key" class="selected-badge">{{ t('pricing.popular') }}</span>
            <p class="pick-name">{{ planName(plan.key) }}</p>
            <p class="pick-price">
              {{ planPrice(plan.key) }}
              <span class="pick-period">{{ t('pricing.perMonth') }}</span>
            </p>
            <ul class="pick-features">
              <li v-for="feat in planFeatures(plan)" :key="feat" class="pick-feature">
                <span class="pick-check" aria-hidden="true">✓</span>{{ feat }}
              </li>
            </ul>
          </div>
        </div>

        <div v-if="serverError" class="error-banner" role="alert">{{ serverError }}</div>

        <div class="modal-actions">
          <button
            type="button"
            class="btn-primary"
            :disabled="loading"
            @click="onPay"
          >
            {{ loading ? t('register.processing') : t('register.pay') }}
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./RegisterModal.js"></script>

<style src="./RegisterModal.css" scoped></style>
