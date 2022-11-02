<template>
  <article>
    <h1>{{ item?.title }}</h1>

    <ul v-if="item?.children?.length" :class="$style.list">
      <li v-for="child in item.children" :key="item._id">
        <NuxtLink :to="child._path">{{ child.title }}</NuxtLink>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import { NavItem } from "@nuxt/content/dist/runtime/types";

interface Props {
  url: string;
}

const findDeep = (items: NavItem[], path: string[]) => {
  const item = items.find((it) => it._path.endsWith(path[0]));

  if (!item || (path.length > 1 && !item.children?.length)) {
    return null;
  }

  return path.length === 1
    ? item
    : findDeep(item.children, path.slice(1, path.length));
};

const props = defineProps<Props>();

const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});

const segments = props.url.split("/").filter((it) => it);
const item = findDeep(navigation.value, segments);
</script>

<style lang="scss" module>
.list {
  margin: 0;
  padding: 0 20px;

  li a {
    text-decoration: none;
  }
}
</style>
