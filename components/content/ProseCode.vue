<script lang="ts" setup>
interface Props {
  code?: string;
  language?: string | null;
  filename?: string | null;
  highlights?: number[];
}

const props = withDefaults(defineProps<Props>(), {
  language: null,
  filename: null,
  highlights: () => [],
});

const copy = () => {
  navigator.clipboard.writeText(props.code);
};
</script>

<template>
  <div :class="$style.wrapper">
    <button :class="$style.language" @click="copy">
      <span :class="$style.icon">
        <UiIconCopy width="12" height="12" fill="currentColor" />
      </span>

      <span v-if="language">{{ language }}</span>
    </button>
    <slot />
  </div>
</template>

<style>
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>

<style lang="scss" module>
.wrapper {
  position: relative;
}

.icon {
  margin: 0 4px -2px 0;
}

.language {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  padding: 4px 8px;
  border-radius: 0 4px 0 4px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
  background: var(--color-code-language-background);
  color: var(--color-code-language-name);
  user-select: none;
  opacity: 0;
  transition: all 250ms;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper:hover & {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>
