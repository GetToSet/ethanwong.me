<template>
  <div class="link-item">
    <transition name="link-item__mockup">
      <div
        class="link-item__mockup"
        v-if="isActive"
        :style="{ backgroundColor: coverColor }"
      ></div>
    </transition>
    <a
      class="link-item__link"
      :href="link.link"
      :alt="link.title"
      :title="link.title"
      :style="colorStyle"
      @mouseenter="isActive = true"
      @mouseleave="isActive = false"
    >
      <Iconfont :name="link.icon" :fontSize="'20px'" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import { Link } from "./LinkList.vue";
import Iconfont from "./Iconfont.vue";

export default defineComponent({
  components: { Iconfont },
  props: {
    link: {
      type: Object as PropType<Link>,
      required: true,
    },
  },
  setup(props) {
    const isActive = ref(false);
    const coverColor = computed(
      () => props.link.activeBackgroundColor || props.link.color
    );
    const colorStyle = computed(() => {
      return {
        color: isActive.value
          ? props.link.activeColor || "white"
          : props.link.color,
        borderColor: isActive.value
          ? props.link.activeColor || "white"
          : props.link.color,
        backgroundColor: isActive.value ? coverColor : "inherit",
        zIndex: isActive.value ? 2 : 0,
      };
    });
    return {
      isActive,
      colorStyle,
      coverColor,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/iconfont";

.link-item {
  position: relative;
  margin: 0 6px 8px 6px;
  width: 64px;
  height: 64px;

  &__mockup {
    z-index: 1;

    position: fixed;
    top: 0;
    left: 0;

    margin: $page-border-width;

    width: calc(100vw - 2 * #{$page-border-width});
    height: calc(100vh - 2 * #{$page-border-width});

    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateY(-100vh);
    }

    &-enter-active {
      transition: all 0.2s ease-out;
    }

    &-leave-active {
      transition: all 0.2s ease-in;
    }

    &-enter-to,
    &-leave-from {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &__link {
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    box-sizing: border-box;

    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
  }
}
</style>
