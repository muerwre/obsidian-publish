<template>
  <footer :class="[$style.footer, $attrs.class]">
    <div>btw, have a nice day</div>
    <div :class="$style.filler" />
    <div>
      (2018 - {{ new Date().getFullYear() }})
      <NuxtLink to="https://github.com/muerwre/" target="_blank"
        >muerwre</NuxtLink
      >
    </div>
  </footer>
</template>

<style lang="scss" module>
.footer {
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.filler {
  flex: 1;
}
</style>
