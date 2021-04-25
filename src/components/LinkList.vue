<template>
  <div class="links">
    <div v-for="link in links" :key="link.icon">
      <LinkListItem :link="link" />
    </div>
  </div>
</template>

<script>
import LinkListItem from "@/components/LinkListItem.vue";

import links from "@/assets/links.json";

export default {
  props: ["currentLanguage"],
  components: { LinkListItem },
  computed: {
    links() {
      return links[this.currentLanguage] || [];
    },
  },
};
</script>

<style scoped lang="scss">
.links {
  margin-bottom: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
