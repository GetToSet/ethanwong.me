<template>
  <div class="homepage">
    <div
      class="homepage__background position-absolute vh-100 w-100"
      style="top: 0"
    />
    <div class="content">
      <div class="homepage__navbar">
        <NavMenu
          class="homepage__navbar__nav-menu"
          :items="navMenuItems"
          :selectedLanguage="currentLanguage"
        />
        <LanguageChooser
          class="homepage__navbar__lang-chooser"
          :selectedLanguage="currentLanguage"
        />
      </div>
      <div
        v-if="showsMigrationTip"
        class="alert alert-info homepage__migration-tip"
      >
        <span v-html="migrationTip" />
      </div>
      <main>
        <h1 class="homepage__title mb-2 mx-2">
          <img
            src="@/assets/handwave.png"
            draggable="false"
            class="homepage__handwave d-inline-block"
          />{{ welcomeTitle }}
        </h1>
        <p class="homepage__intro mb-3 mx-2">
          I'm <TypeIt v-bind="typeItProps" />
        </p>
      </main>
      <LinkList class="mt-3" :currentLanguage="currentLanguage" />
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

import NavMenu from "@/components/NavMenu.vue";
import LanguageChooser from "@/components/LanguageChooser.vue";
import TypeIt from "@/components/TypeIt.vue";
import LinkList from "@/components/LinkList.vue";

export default defineComponent({
  components: { NavMenu, LanguageChooser, TypeIt, LinkList },
  setup() {
    const navMenuItems = [
      {
        title: "语雀",
        titleEn: "Yuque",
        icon: "yuque",
        link: "https://www.yuque.com/gettoset/kb/",
        zhBadge: true,
      },
      {
        title: "书签",
        titleEn: "Bookmarks",
        icon: "bookmarks",
        link: "https://s.gettoset.cn/bookmarks",
        zhBadge: true,
      },
      {
        title: "宇宙听众",
        titleEn: "Space Listener",
        icon: "xyzfm",
        link: "https://www.xiaoyuzhoufm.com/user/5f2a0381e0f5e723bb85e768/",
        zhBadge: true,
      },
    ];

    const typeItProps = {
      strings: [
        "a full-time iOS & Mac developer.",
        "a self-taught frontend developer.",
        "a product & UI design enthusiast.",
        "a newcomer to photography.",
        "a lover of coffee.",
        "foolish to ideas, hungry to adventures.",
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
      ["busybunny.xyz", "gettoset.cn", "ethanwong.cn"].includes(host.value)
        ? "zh"
        : "en"
    );

    watch(
      currentLanguage,
      (newVal) => {
        document.title =
          newVal === "zh" ? "Ethan 的个人主页" : "Ethan's Homepage";
      },
      {
        immediate: true,
      }
    );

    const showsMigrationTip = computed(() =>
      ["busybunny.xyz", "gettoset.cn"].includes(host.value) ? true : false
    );

    const beianId = computed(
      () =>
        ({
          "busybunny.xyz": 1,
          "gettoset.cn": 3,
          "ethanwong.cn": 4,
        }[host.value] || null)
    );

    const beianDescription = computed(
      () => `浙ICP备19010471号${beianId.value ? "-" + beianId.value : ""}`
    );

    return {
      navMenuItems,
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
        Copyright © 2020-${new Date().getFullYear()}
        <a
          class="homepage__footer--link"
          href="mailto:e1hanw0ng@gmail.com"
          alt="e1hanw0ng@gmail.com"
          title="e1hanw0ng@gmail.com"
          >Ethan Wong</a
        >, All rights reserved.
        `
          : `
        版权所有 © 2020-${new Date().getFullYear()}
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
@import "~/rfs/scss";
@import "@/scss/mixins/stripe-background.scss";
@import "@/scss/mixins/no-select.scss";

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

  &__navbar {
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    padding: 12px;
    &__nav-menu {
      margin-right: auto;
      @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }

  &__title {
    margin: 0;
    @include rfs(64px);
    font-family: "Baloo 2", sans-serif;
  }

  &__handwave {
    height: 1em;
    margin-bottom: 0.1em;
    animation: handwave 3s ease-in-out infinite;
    @include no-select;
    margin-right: 0.2em;
  }

  &__intro {
    @include rfs(32px);
    font-family: "Courier Prime", monospace;
    line-height: 1.2em;
    min-height: 2.8em;
  }

  &__footer {
    color: var(--theme-secondary);
    // :v-deep(&--link) {
    :deep(a) {
      color: var(--theme-secondary);
      text-decoration: underline;
      &:hover {
        opacity: 0.8;
      }
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
