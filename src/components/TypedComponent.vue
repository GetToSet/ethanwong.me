<template>
  <span></span>
</template>

<script>
import { defineComponent } from "vue";
import Typed from "typed.js";

export default defineComponent({
  mounted() {
    new Typed(this.$el, {
      ...this.$attrs,
    });
  },
});
</script>
