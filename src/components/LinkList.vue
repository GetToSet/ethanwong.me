<template>
  <div class="links">
    <div v-for="link in links" :key="link.icon">
      <LinkListItem :link="link" :selectedLanguage="currentLanguage" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import LinkListItem from "@/components/LinkListItem.vue";

import _allLinks from "@/assets/links.json";
const allLinks: { [key: string]: Link[] } = _allLinks;

export interface Link {
  title: string;
  icon: string;
  link: string;
  color: string;
  rel?: string;
  activeColor?: string;
  activeBackgroundColor?: string;
  zhBadge?: boolean;
}

export default defineComponent({
  props: { currentLanguage: { type: String, required: true } },
  components: { LinkListItem },
  setup(props) {
    return {
      links: computed(() => allLinks[props.currentLanguage] || []),
    };
  },
});
</script>

<style scoped lang="scss">
$links-margin-x: 8px;
$link-item-width: 70px + 2 * 6px;
$links-margin-screen: 2 * ($links-margin-x + $page-border-width);

.links {
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: (3 * $link-item-width + $links-margin-screen)) and (max-width: (6 * $link-item-width + $links-margin-screen)) {
    width: 3 * $link-item-width;
  }
}
</style>
