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

const { default: allLinks }: { default: { [key: string]: Link[] } } =
  await import("@/assets/links.json");

export interface Link {
  title: string;
  icon: string;
  link: string;
  color: string;
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
