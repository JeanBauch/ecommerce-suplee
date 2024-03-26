<script setup lang="ts">
defineProps<{
  name: string | undefined;
}>()
</script>

<template>
  <div class="flex flex-1 w-full">
    <h2 class="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      {{ name }}
    </h2>
  </div>
</template>