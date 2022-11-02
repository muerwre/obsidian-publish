<template>
  <nav>
    <div :class="$style.section_title">Reference</div>

    <div v-for="item in parentItems" key="item._path" :class="$style.row">
      <LayoutMainMenuRow
        :title="item.title"
        :url="item._path"
        :children="item.children"
      />
    </div>
  </nav>
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
.section_title {
  font-family: var(--family-roboto-slab);
  font-weight: 600;
  margin: 2rem 0 1.5rem;
  font-size: 1.6rem;
}

.row {
  margin-bottom: 15px;
}
</style>
