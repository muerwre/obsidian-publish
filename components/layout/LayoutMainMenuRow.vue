<template>
  <div
    v-if="children?.length || !url"
    :class="[$style.container, { [$style.secondary]: secondary }]"
  >
    <div :class="$style.heading">
      {{ title }}
    </div>

    <div :class="$style.children">
      <LayoutMainMenuRow
        v-for="item in children"
        key="item._path"
        :title="item.title"
        :url="item._path"
        :children="item.children"
        secondary
      />
    </div>
  </div>

  <div v-else :class="$style.row">
    <NuxtLink :to="url" :class="$style.link" :exactActiveClass="$style.active"
      >{{ title }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  url?: string;
  children?: Child[];
  secondary?: boolean;
}

interface Child {
  title: string;
  _path: string;
  children: Child[];
}

defineProps<Props>();
</script>

<script lang="ts">
export default defineComponent({
  mounted() {
    const active = document.querySelector(
      `.${this.$style.link}.${this.$style.active}`
    );
    if (!active) return;

    active?.scrollIntoView({ block: "center" });
  },
});
</script>

<style lang="scss" module>
@mixin tree {
  &::before {
    content: " ";
    background-color: var(--color-menu-line);
    width: 10px;
    height: 1px;
    position: absolute;
    top: 0.6em;
    left: -17px;
  }
}

.container {
  position: relative;

  &.secondary {
    padding: 7px 2px 0;

    &::before {
      content: " ";
      background-color: var(--color-menu-line);
      width: 1px;
      position: absolute;
      top: -22px;
      bottom: 13px;
      left: -16px;
    }

    &:first-child::before {
      top: -4px;
    }

    &:last-child::before {
      bottom: auto;
      height: 40px;
    }
  }
}
.row {
  padding: 3px 2px;
  position: relative;

  &::before {
    content: " ";
    background-color: var(--color-menu-line);
    width: 1px;
    position: absolute;
    top: -14px;
    bottom: 13px;
    left: -16px;
  }

  &:first-child::before {
    top: -4px;
  }

  &:last-child::before {
    bottom: auto;
    height: 30px;
  }

  &:only-child::before {
    height: 19px;
  }
}

.heading {
  font-weight: 600;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  color: var(--color-menu-title);

  .secondary & {
    @include tree;
  }
}

.link {
  color: var(--color-menu-link);
  text-decoration: none;
  line-height: 1.4em;
  position: relative;

  @include tree;

  &.active {
    color: var(--color-menu-link-active);
    font-weight: bold;
  }
}

.children {
  padding: 0 0 0 16px;
  margin: 10px 3px;
  position: relative;
}
</style>
