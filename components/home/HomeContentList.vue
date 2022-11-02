<template>
  <masonry-wall
    :items="parentItems"
    :ssr-columns="1"
    :column-width="300"
    :gap="10"
  >
    <template #default="{ item }">
      <div :class="$style.row">
        <LayoutMainMenuRow
          :title="item.title"
          :url="item.url"
          :children="item.children"
        />
      </div>
    </template>
  </masonry-wall>
</template>

<script setup>
const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});

const parentItems = navigation.value.filter(
  (it) => it.children && Array.isArray(it.children) && it.children.length > 0
);
</script>

<style lang="scss" module>
.row {
  margin-bottom: 10px;
}
</style>
