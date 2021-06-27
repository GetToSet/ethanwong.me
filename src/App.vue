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
});
</script>

<style lang="scss">
@import "@/scss/bootstrap.scss";
@import "@/scss/fonts.scss";
</style>
