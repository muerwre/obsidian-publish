<template>
  <button :class="[$attrs.class, $style.button]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="#ffffff"
      :class="[$style.hamburger, { [$style.active]: active }]"
    >
      <rect x="0" y="3" width="24" height="2" />
      <rect x="0" y="11" width="24" height="2" />
      <rect x="0" y="19" width="24" height="2" />
    </svg>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  active?: boolean;
}

defineProps<Props>();
</script>

<style lang="scss" module>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.hamburger {
  fill: var(--color-text);
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    fill: var(--color-link);
  }

  & > rect {
    transition: transform 250ms;
  }

  &.active {
    & > rect:nth-child(1) {
      transform: rotate(45deg);
      transform-origin: 2px 8px;
    }

    & > rect:nth-child(2) {
      transform: scaleX(0);
      transform-origin: 13px 0;
      transition-delay: 100ms;
    }

    & > rect:nth-child(3) {
      transform: rotate(-45deg);
      transform-origin: 3px 16px;
      transition-delay: 50ms;
    }
  }
}
</style>
