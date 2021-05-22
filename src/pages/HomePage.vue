<template>
  <div class="homepage">
    <div
      class="homepage__background position-absolute vh-100 w-100"
      style="top: 0"
    />
    <div class="content">
      <LanguageChooser
        class="homepage__lang-chooser"
        :selectedLanguage="currentLanguage"
      />
      <div
        v-if="showsMigrationTip"
        class="alert alert-info homepage__migration-tip"
      >
        <span v-html="migrationTip" />
      </div>
      <main>
        <h1 class="homepage__title mb-2">
          <img
            src="@/assets/handwave.png"
            class="homepage__handwave d-inline-block"
          />
          {{ welcomeTitle }}
        </h1>
        <p class="homepage__intro mb-3">I'm <TypeIt v-bind="typeItProps" /></p>
      </main>
      <LinkList :currentLanguage="currentLanguage" />
      <footer
        class="homepage__footer position-absolute small color-gray"
        style="bottom: 12px"
      >
        <span v-html="footerContent" />
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";

import LanguageChooser from "@/components/LanguageChooser.vue";
import TypeIt from "@/components/TypeIt.vue";
import LinkList from "@/components/LinkList.vue";

export default defineComponent({
  components: { LanguageChooser, TypeIt, LinkList },
  setup() {
    const typeItProps = {
      strings: [
        "a full-time iOS & Mac developer.",
        "a self-taught frontend developer.",
        "a graphics & UI design enthusiast.",
        "a newcomer to photography.",
        "a lover of coffee.",
      ],
      lifeLike: true,
      loop: true,
      cursorSpeed: 200,
      speed: 100,
      deleteSpeed: 50,
      nextStringDelay: 750,
      breakLines: false,
    };

    const host = computed(() => location.host);

    const currentLanguage = computed(() =>
      ["busybunny.xyz", "busybunny.cn", "gettoset.cn", "ethanwong.cn"].includes(
        host.value
      )
        ? "zh"
        : "en"
    );

    watch(currentLanguage, (newVal) => {
      document.title =
        newVal === "zh" ? "Ethan 的个人主页" : "Ethan's Homepage";
    });

    const showsMigrationTip = computed(() =>
      ["busybunny.xyz", "busybunny.cn", "gettoset.cn"].includes(host.value)
        ? true
        : false
    );
    const beianId = computed(
      () =>
        ({
          "busybunny.xyz": 1,
          "busybunny.cn": 2,
          "gettoset.cn": 3,
          "ethanwong.cn": 4,
        }[host.value] || null)
    );

    const beianDescription = computed(
      () => `浙ICP备19010471号${beianId.value ? "-" + beianId.value : ""}`
    );

    return {
      typeItProps,
      currentLanguage,
      showsMigrationTip,

      welcomeTitle: computed(() =>
        currentLanguage.value === "zh"
          ? "你好，我是 Ethan。"
          : "Hi, I'm Ethan Wong."
      ),
      migrationTip: computed(() =>
        currentLanguage.value === "zh"
          ? `
      ${location.host} 已经迁移到 <a
        href="https://ethanwong.cn/"
        alt="ethanwong.cn"
        title="ethanwong.cn"
        >ethanwong.cn</a
      >
      `
          : `
      ${location.host} has been moved to <a
        href="https://ethanwong.me/"
        alt="ethanwong.me"
        title="ethanwong.me"
        >ethanwong.me</a
      >
      `
      ),
      footerContent: computed(() =>
        currentLanguage.value === "en"
          ? `
        Copyright © ${new Date().getFullYear()}
        <a
          class="homepage__footer--link"
          href="mailto:e1hanw0ng@gmail.com"
          alt="e1hanw0ng@gmail.com"
          title="e1hanw0ng@gmail.com"
          >Ethan Wong</a
        >, All rights reserved.
        `
          : `
        版权所有 © ${new Date().getFullYear()}
        <a
          class="homepage__footer--link"
          href="mailto:e1hanw0ng@gmail.com"
          alt="e1hanw0ng@gmail.com"
          title="e1hanw0ng@gmail.com"
          >Ethan Wong</a
        >，保留所有权利。
        <br />
        <a
          class="homepage__footer--link"
          href="https://beian.miit.gov.cn/"
          alt="${beianDescription.value}"
          title="${beianDescription.value}"
        >
          ${beianDescription.value}
        </a>
        `
      ),
    };
  },
});
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&family=Courier+Prime&display=swap");
@import "@/scss/mixins/stripe-background.scss";

$handwave-degree: -15deg;

.content {
  position: relative;

  margin: $page-border-width;
  height: calc(100vh - 2 * #{$page-border-width});
  background-color: var(--theme-background);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.homepage {
  color: var(--theme-text);
  text-align: center;

  &__migration-tip {
    position: absolute;
    top: 0;
    margin: 12px auto 0 auto;
  }

  &__background {
    @include stripe-background(
      45deg,
      32px,
      (var(--stripe-green), var(--stripe-red), var(--stripe-yellow))
    );
  }

  &__lang-chooser {
    position: absolute;
    top: 12px;
    right: 12px;
  }

  &__title {
    margin: 0;
    font-size: 64px;
    font-family: "Baloo 2", sans-serif;
  }

  &__handwave {
    height: 1em;
    margin-bottom: 0.1em;
    animation: handwave 3s ease-in-out infinite;
  }

  &__intro {
    font-size: 32px;
    font-family: "Courier Prime", monospace;
  }

  &__footer {
    color: var(--theme-secondary);
    ::v-deep(&--link) {
      color: var(--theme-secondary);
      text-decoration: underline;
    }
  }

  @keyframes handwave {
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate($handwave-degree);
    }
    20% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(0);
    }
    90% {
      transform: rotate($handwave-degree);
    }
    100% {
      transform: rotate(0);
    }
  }
}
</style>
