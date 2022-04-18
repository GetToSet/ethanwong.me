<template>
  <div class="nav-menu">
    <div v-for="item in items" :key="item.icon" class="nav-menu__wrapper">
      <a
        class="nav-menu__link"
        :href="item.link"
        v-if="!(selectedLanguage !== 'zh' && item.hidesInNonZh)"
      >
        <Iconfont :name="item.icon" />
        {{ selectedLanguage === "zh" ? item.title : item.titleEn }}
        <ZhBadge v-if="selectedLanguage !== 'zh' && item.zhBadge" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Iconfont from "@/components/Iconfont.vue";
import ZhBadge from "@/components/ZhBadge.vue";

export interface NavMenuItem {
  title: string;
  titleEn: string;
  icon: string;
  link: string;
  zhBadge: boolean;
  hidesInNonZh?: boolean;
}

export default defineComponent({
  components: { Iconfont, ZhBadge },
  props: {
    selectedLanguage: {
      type: String,
    },
    items: {
      type: Array as PropType<Array<NavMenuItem>>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.nav-menu {
  display: flex;
  align-content: center;
  justify-content: space-between;
  font-size: 14px;

  &__wrapper {
    &:not(:last-child) {
      margin-right: 4px;
    }
  }

  &__link {
    padding: 4px;
    margin: 2px;
    color: var(--theme-text);
    text-decoration: none;

    &:hover {
      color: var(--theme-inverse);
      background: var(--theme-highlight);
    }
  }
}
</style>
