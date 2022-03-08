<template>
  <HomePage />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "@/pages/HomePage.vue";

export default defineComponent({
  components: {
    HomePage,
  },
  created() {
    window.addEventListener("pageshow", function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    });
  },
});
</script>

<style lang="scss">
@import "@/scss/bootstrap.scss";
@import "@/scss/fonts.scss";
</style>
