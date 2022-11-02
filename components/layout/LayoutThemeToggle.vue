<template>
  <button
    @click="toggleTheme"
    :class="[$attrs.class, $style.button, { [$style.visible]: visible }]"
  >
    <ClientOnly>
      <IconsMoon fill="currentColor" width="32" height="32" v-if="isDark" />
      <IconsSun fill="currentColor" width="32" height="32" v-if="!isDark" />
    </ClientOnly>
  </button>
</template>

<script lang="ts" setup>
const visible = ref(false);

onMounted(() => {
  visible.value = true;
});
</script>

<script lang="ts">
export default defineComponent({
  methods: {
    toggleTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === "dark" ? "light" : "dark";
    },
  },
  computed: {
    isDark() {
      return this.$colorMode.preference === "dark";
    },
  },
});
</script>

<style lang="scss" module>
.button {
  color: var(--color-text-secondary);
  cursor: pointer;
  transform: scale(0) rotate(180deg);
  transition: all 0.25s ease-out;

  &.visible {
    transform: scale(1) rotate(0);
  }

  &:hover {
    color: var(--color-text);
  }
}
</style>
