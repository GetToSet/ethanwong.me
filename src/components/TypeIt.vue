<template>
  <span></span>
</template>

<script>
import { defineComponent } from "vue";
import TypeIt from "typeit";

export default defineComponent({
  mounted() {
    new TypeIt(this.$el, {
      ...this.$attrs,
    }).go();
  },
});
</script>
