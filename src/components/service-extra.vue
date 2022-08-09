<script setup>
import Supply from "@/components/oursupply.vue";
</script>
<template>
  <div class="extra-container">
    <div class="extra-extra"></div>
    <div class="client-portal">
      <div class="portal-panel">
        <div class="client-info">
          <h1>Wanna work with us?</h1>
          <p>
            Please share a bit of your information so that we can get in touch
            with you
          </p>
          <h1>Why choose us</h1>
          <p>
            We have the personal touch,strength, resources and experience to
            meet your demands and needs
          </p>
        </div>
        <form class="p-form">
          <div class="p-wrapper">
            <div class="p-form-s">
              <h3>Help us get to know you</h3>
            </div>
            <div class="p-container">
              <input
                type="text"
                id="p-name"
                class="p-name p-input"
                v-bind="productName"
                placeholder="company name"
                required
              />
            </div>
            <div class="p-container">
              <input
                type="email"
                id="p-email"
                class="p-email p-input"
                v-bind="productEmail"
                placeholder="company email"
                required
              />
            </div>
            <div class="p-container">
              <input
                type="text"
                id="p-name"
                class="p-subject p-input"
                v-bind="productSubject"
                placeholder="supply product"
                required
              />
            </div>
            <div class="p-container">
              <textarea
                name="p-msg"
                id="p-msg"
                cols="30"
                rows="8"
                class="p-area p-input"
                placeholder="a summary of what the computer does"
                required
              ></textarea>
            </div>
            <div class="s-container">
              <input type="checkbox" name="agree" id="agree" required />
              <p>
                By checking this box you agree to our terms and conditions,
                company policies apply
              </p>
            </div>
            <button class="p-btn btn">submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Supply />
</template>
<style>
@import "../style/extra.css";
</style>
