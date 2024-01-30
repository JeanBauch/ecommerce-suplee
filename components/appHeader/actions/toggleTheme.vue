<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
});

</script>

<template>
  <ClientOnly>
    <UButton color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark"
      class="hover:bg-lime-800 hover:bg-opacity-10 hover:dark:bg-opacity-100">
      <template #trailing>
        <UIcon :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
          class="h-7 w-7 text-lime-50 md:text-lime-800 dark:text-lime-500" />
      </template>
    </UButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>
