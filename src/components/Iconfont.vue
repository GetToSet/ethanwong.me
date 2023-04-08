<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <span
    :class="['iconfont', `icon${name ? `-${name}` : ''}`]"
    :style="{ fontSize: fontSize }"
  />
</template>

<script lang="ts">
export default {
  props: { name: String, fontSize: String },
};
</script>

<style scoped lang="scss">
@import "public/assets/iconfont";
</style>
