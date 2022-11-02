<script lang="ts" setup>
interface Props {
  href?: string;
  blank?: boolean;
}

withDefaults(defineProps<Props>(), {
  href: "",
  blank: false,
});

const isInternalLink = (link: string) => !link.match(/^\w+\:\/\//);

const transformInternalLinks = (href: string) => {
  if (!isInternalLink(href)) {
    return href;
  }

  return href
    .toLowerCase()
    .replaceAll("%20", " ")
    .replace(/\d+/g, "")
    .trim()
    .replaceAll(" ", "-");
};
</script>

<template>
  <NuxtLink
    :href="transformInternalLinks(href)"
    :target="isInternalLink(href) ? '' : '_blank'"
  >
    <slot
  /></NuxtLink>
</template>
