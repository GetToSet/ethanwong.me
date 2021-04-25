<template>
  <span></span>
</template>

<script>
import TypeIt from "typeit";

export default {
  mounted() {
    new TypeIt(this.$el, {
      ...this.$attrs,
    }).go();
  },
};
</script>
