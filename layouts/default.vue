<template>
  <div :class="$style.grid">
    <LayoutMainMenuToggle
      :active="menuVisible"
      :class="[
        $style.menu_toggle,
        { [$style.shifted]: menuShifted, [$style.active]: menuVisible },
      ]"
      @click="toggleMenu"
    />

    <div
      :class="[$style.sidebar, { [$style.active]: menuVisible }]"
      ref="sidebar"
    >
      <div :class="$style.menu">
        <LayoutMainMenu />
      </div>
    </div>

    <div :class="$style.main">
      <NuxtLayout name="content">
        <slot />
      </NuxtLayout>
    </div>
  </div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

export default defineComponent({
  setup() {
    const scrollTop = ref(0);
    const onScroll = () => {
      scrollTop.value = window.scrollY;
    };

    onMounted(() => addEventListener("scroll", onScroll));
    onUnmounted(() => removeEventListener("scroll", onScroll));

    const menuShifted = computed(() => scrollTop.value > 60);

    return { menuShifted, scrollTop };
  },
  data() {
    return {
      menuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.$data.menuVisible = !this.$data.menuVisible;
    },
  },
  watch: {
    $route() {
      if (!this.menuVisible) return;
      nextTick(() => this.toggleMenu());
    },
    menuVisible(val) {
      if (val) {
        disableBodyScroll(this.$refs.sidebar);
      }

      clearAllBodyScrollLocks();
    },
  },
});
</script>

<style module lang="scss">
@import "~~/assets/css/mixins";

.grid {
  display: grid;
  grid-template-columns: 360px auto;
  width: 100vw;

  @include desktop {
    grid-template-columns: 33vw auto;
  }

  @include tablet {
    grid-template-columns: auto;
  }
}

.main {
  min-width: 0;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.sidebar {
  background-color: var(--color-menu-background);

  @include tablet {
    position: fixed;
    z-index: 2;
    background-color: var(--color-menu-overlay-background);
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.5s;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
}

.menu {
  padding: 40px 30px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: auto;
  min-width: 0;
  background-color: var(--color-menu-background);
  max-width: 400px;

  @include tablet {
    transition: transform 0.25s 0.1s;
    transform: translate(-40px, 0);

    .active & {
      transform: translate(0, 0);
    }
  }
}

.menu_toggle {
  position: fixed;
  left: 13px;
  top: 13px;
  z-index: 4;
  visibility: hidden;
  transform: translate(0, 0);
  transition: all 250ms;
  border-radius: 0 0 8px 0;

  @include tablet {
    transform: translate(0, 0);
    right: 0;
    visibility: visible;
  }

  &.shifted,
  &.active {
    transform: translate(-13px, -13px);
  }

  &.shifted {
    background: var(--color-menu-background);
  }
}

.footer {
  margin-top: 40px;
}
</style>
