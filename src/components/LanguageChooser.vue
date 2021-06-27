<template>
  <div class="lang-chooser">
    <a
      class="lang-chooser__link"
      :class="{ 'lang-chooser__link--highlight': selectedLanguage === 'en' }"
      href="https://ethanwong.me/"
      >EN</a
    >/<a
      class="lang-chooser__link"
      :class="{ 'lang-chooser__link--highlight': selectedLanguage === 'zh' }"
      href="https://ethanwong.cn/"
      >ZH</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    selectedLanguage: {
      type: String,
    },
  },
});
</script>

<style scoped lang="scss">
.lang-chooser {
  &__link {
    padding: 4px;
    margin: 2px;
    color: var(--theme-text);
    text-decoration: none;
    font-weight: bold;

    &--highlight {
      color: var(--theme-highlight);
    }

    &:hover {
      color: var(--theme-inverse);
      background: var(--theme-highlight);
    }
  }
}
</style>
