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

<script>
export default {
  props: ["selectedLanguage"],
};
</script>

<style scoped lang="scss">
.lang-chooser {
  &__link {
    padding: 4px;
    margin: 2px;
    color: var(--theme-text);
    text-decoration: none;

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
