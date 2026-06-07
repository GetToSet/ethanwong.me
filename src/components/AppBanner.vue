<template>
  <div v-if="visible" class="app-banner shadow-lg p-3">
    <a
      class="app-banner__link d-flex align-items-center text-reset text-decoration-none"
      :href="appUrl"
      target="_blank"
      rel="noopener"
    >
      <img
        class="app-banner__icon shadow-sm mr-3"
        src="/assets/bolt.png"
        draggable="false"
        alt="Bolt"
      />
      <span class="d-flex flex-column">
        <span class="app-banner__title font-weight-bold">{{ title }}</span>
        <span class="app-banner__subtitle">{{ subtitle }}</span>
      </span>
    </a>
    <button
      type="button"
      class="close app-banner__close"
      aria-label="Close"
      @click="visible = false"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

const appUrl =
  "https://boltdocs.app/?utm_source=ethanwong.me&utm_medium=banner&utm_campaign=homepage_tf";

export default defineComponent({
  props: {
    currentLanguage: { type: String, required: true },
  },
  setup(props) {
    const visible = ref(true);

    return {
      visible,
      appUrl,
      title: computed(() =>
        props.currentLanguage === "zh"
          ? "在 TestFlight 上体验我的新 App"
          : "Checkout my new app on TestFlight"
      ),
      subtitle: computed(() =>
        props.currentLanguage === "zh"
          ? "Bolt 是一款专为 iOS 和 iPadOS 打造的 API 文档浏览器"
          : "Bolt is an API documentation browser built for iOS and iPadOS"
      ),
    };
  },
});
</script>

<style scoped lang="scss">
.app-banner {
  position: fixed;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1030;
  max-width: 420px;
  width: calc(100% - 48px);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(var(--theme-text-rgb), 0.1);
  border-radius: 18px;
  text-align: left;

  &__link {
    padding-right: 1.25rem;
  }

  &__icon {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 14px;
  }

  &__title {
    line-height: 1.2;
    margin-bottom: 4px;
  }

  &__subtitle {
    font-size: 0.8rem;
    color: var(--theme-secondary);
    line-height: 1.2;
  }

  &__close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    padding: 0;
    line-height: 1;
    color: var(--theme-secondary);
    opacity: 0.7;
    background: none;
    border: none;
    text-shadow: none;
    &:hover {
      opacity: 1;
      background: rgba(var(--theme-secondary-rgb), 0.25);
    }
  }
}
</style>
