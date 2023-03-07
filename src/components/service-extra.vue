<script setup>
import Supply from "@/components/ourSupply.vue";
</script>
<template>
  <div class="extra-container" id="portal">
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
        <form class="p-form" @submit.prevent="client()" ref="cForm">
          <div class="p-wrapper">
            <div class="p-form-s">
              <h3>Help us get to know you</h3>
            </div>
            <div class="p-container">
              <input
                type="text"
                id="p-name"
                class="p-name p-input"
                v-model="companyName"
                placeholder="Company name"
                required
              />
            </div>
            <div class="p-container">
              <input
                type="email"
                id="p-email"
                class="p-email p-input"
                v-model="companyEmail"
                placeholder="Company email"
                required
              />
            </div>
            <div class="p-container">
              <input
                type="text"
                id="p-name"
                class="p-subject p-input"
                v-model="companySubject"
                placeholder="Supply product"
                required
              />
            </div>
            <div class="p-container">
              <textarea
                name="p-msg"
                id="p-msg"
                cols="30"
                rows="8"
                v-model="companyMessage"
                class="p-area p-input"
                placeholder="A summary of what the company does"
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
            <button class="p-btn btn" type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <Supply id="catalog" />
</template>
<script>
export default {
  data() {
    return {
      companyTitle: "CLIENT FORM",
      companyName: "",
      companyEmail: "",
      companySubject: "",
      companyMessage: "",
    };
  },
  methods: {
    client: function () {
      let url =
        "https://wa.me/254721505032?text=" +
        "*Title*: " +
        this.companyTitle +
        "%0a" +
        "*companyName*: " +
        this.companyName +
        "%0a" +
        "*Email*: " +
        this.companyEmail +
        "%0a" +
        "*Subject*: " +
        this.companySubject +
        "%0a" +
        "*Message*: " +
        this.companyMessage;
      window.open(url, "_blank").focus();
      this.$refs.cForm.reset();
    },
  },
};
</script>
<style>
@import "../style/extra.css";
</style>
