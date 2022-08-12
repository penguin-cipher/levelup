<template>
  <form class="p-form" @submit.prevent="inquery()" ref="pForm">
    <div class="p-form-d">
      <div class="p-bar">
        <!-- color -->
      </div>
      <h3>Product Inquiry</h3>
    </div>
    <div class="p-wrapper">
      <div class="p-container">
        <label for="p-name" class="p-label">Name</label>
        <input
          type="text"
          id="p-name"
          class="p-name p-input"
          v-model="productName"
          placeholder="penguin lee"
          required
        />
      </div>
      <div class="p-container">
        <label for="p-email" class="p-label">Email</label>
        <input
          type="email"
          id="p-email"
          class="p-email p-input"
          v-model="productEmail"
          placeholder="penguinlee@gmail.com"
          required
        />
      </div>
      <div class="p-container">
        <label for="p-subject" class="p-label">Subject</label>
        <input
          type="text"
          id="p-name"
          class="p-subject p-input"
          v-model="productSubject"
          placeholder="computers"
          required
        />
      </div>
      <div class="p-container">
        <label for="p-msg" class="p-label">Message</label>
        <textarea
          name="p-msg"
          id="p-msg"
          cols="30"
          rows="8"
          v-model="productMessage"
          class="p-area p-input"
          required
          placeholder="Hi, do u have supplies for computers both hardware and software"
        ></textarea>
      </div>
      <button class="p-btn btn" type="submit">submit</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      productTitle: "PRODUCT FORM",
      productName: "",
      productEmail: "",
      productSubject: "",
      productMessage: "",
    };
  },
  methods: {
    inquery: function () {
      let url =
        "https://wa.me/254721505032?text=" +
        "*Title*: " +
        this.productTitle +
        "%0a" +
        "*productName*: " +
        this.productName +
        "%0a" +
        "*Email*: " +
        this.productEmail +
        "%0a" +
        "*Subject*: " +
        this.productSubject +
        "%0a" +
        "*Message*: " +
        this.productMessage;
      window.open(url, "_blank").focus();
      this.$refs.pForm.reset();
    },
  },
};
</script>
<style>
@import "@/style/inquery.css";
</style>
