<template>
  <footer
    class="homepage__footer position-absolute small d-flex flex-column align-items-center"
    style="bottom: 12px; max-width: 85%"
  >
    <span v-html="footerContent" />
    <div class="lang-note" v-if="currentLanguage != 'zh'">
      * Content Written in Simplified Chinese<br />
    </div>
    <hr class="w-100 my-2" />
    <ul
      v-if="footerLinkItems.length"
      class="d-flex align-items-center list-unstyled m-0"
    >
      <li v-for="(item, index) in footerLinkItems" :key="item.id">
        <a :href="item.link" class="px-1"
          >{{ currentLanguage == "zh" ? item.title : item.titleEn
          }}<ZhBadge v-if="currentLanguage != 'zh' && item.zhBadge" /></a
        ><span v-if="index != footerLinkItems.length - 1">|</span>
      </li>
    </ul>
    <div>
      <a href="https://www.buymeacoffee.com/gettoset" target="_blank"
        >☕️ Buy me a coffee</a
      >
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ZhBadge from "@/components/ZhBadge.vue";

const footerLinkItems = [
  {
    id: "source",
    title: "GitHub",
    titleEn: "GitHub",
    link: "https://github.com/GetToSet/ethanwong.me/",
    zhBadge: false,
  },
  {
    id: "gallery",
    title: "Labs",
    titleEn: "Labs",
    link: "http://static.ethanwong.me/labs/",
    zhBadge: false,
  },
  {
    id: "telegram",
    title: "Chat",
    titleEn: "Chat",
    link: "https://t.me/gettoset/",
    zhBadge: false,
  },
];

// TODO: Use hooks for this.
const host = computed(() => location.host);

const beianId = computed(
  () =>
    ({
      "gettoset.cn": 3,
      "ethanwong.cn": 4,
    })[host.value] || null
);

const beianDescription = computed(
  () => `浙ICP备19010471号${beianId.value ? "-" + beianId.value : ""}`
);

export default defineComponent({
  components: { ZhBadge },
  props: {
    currentLanguage: { type: String, required: true },
  },
  setup(props) {
    return {
      footerLinkItems,
      footerContent: computed(() =>
        props.currentLanguage === "en"
          ? `
        Copyright &copy; 2020-${new Date().getFullYear()}
        <a
          class="homepage__footer--link"
          href="mailto:e1hanw0ng@gmail.com"
          alt="e1hanw0ng@gmail.com"
          title="e1hanw0ng@gmail.com"
          >Ethan Wong</a
        >, All rights reserved.
        `
          : `
        版权所有 &copy; 2020-${new Date().getFullYear()}
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
hr {
  border-color: var(--theme-secondary);
}
.lang-note {
  display: none;
  font-size: 50%;
}
@media only screen and (hover: none) and (pointer: coarse) {
  .lang-note {
    display: unset;
  }
}
</style>
