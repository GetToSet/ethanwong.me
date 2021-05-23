<template>
  <div class="links">
    <div v-for="link in links" :key="link.icon">
      <LinkListItem :link="link" />
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
  activeColor?: string;
  activeBackgroundColor?: string;
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
.links {
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
