<template>
  <form class="p-form">
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
          v-bind="productName"
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
          v-bind="productEmail"
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
          v-bind="productSubject"
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
          class="p-area p-input"
          required
          placeholder="Hi, do u have supplies for computers both hardware and software"
        ></textarea>
      </div>
      <button class="p-btn btn">submit</button>
    </div>
  </form>
</template>
<script setup></script>
<style>
@import "@/style/inquery.css";
</style>
