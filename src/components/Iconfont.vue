<template>
  <span :class="['iconfont', `icon-${name}`]" :style="{ fontSize: fontSize }" />
</template>

<script>
export default {
  props: ["name", "fontSize"],
};
</script>

<style scoped lang="scss">
@import "@/scss/iconfont";
</style>
