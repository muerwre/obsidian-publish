<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <LayoutThemeToggle :class="$style.theme_toggle" />

      <slot />
    </div>

    <LayoutFooter :class="$style.footer" />
  </div>
</template>

<style lang="scss" module>
@import "~~/assets/css/mixins";

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 40px 120px;

  @include desktop {
    padding: 40px 40px 20px 40px;
  }

  @include tablet {
    padding: 40px 20px 20px 20px;
  }
}

.footer {
  margin-top: 60px;
  padding: 10px;
  border-top: 1px solid var(--color-line);
}

.theme_toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  stroke: currentColor;
  stroke-width: 0.5px;

  @include tablet {
    stroke-width: 1.5px;
    right: 16px;
    top: 16px;
  }
}
</style>
