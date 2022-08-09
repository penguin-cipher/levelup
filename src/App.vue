<script setup>
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Contact from "./views/ContactView.vue";
import Service from "@/views/ServiceView.vue";
import Product from "@/components/productIntro.vue";
</script>
<template>
  <div class="app">
    <Home />
    <Product />
    <About />
    <Service />
    <Contact />
  </div>
</template>
<style>
@import "@/style/base.css";
</style>
