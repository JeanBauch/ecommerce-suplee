<script setup lang="ts">
defineProps<{
  name: string | undefined
  category: Categories | undefined
}>();

</script>

<template>
  <AppDetailProductHeadingTitle :name="name" />
  <AppDetailProductHeadingBreadcrumb :category="category" :name="name" />
</template>