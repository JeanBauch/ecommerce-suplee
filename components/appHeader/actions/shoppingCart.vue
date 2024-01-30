<script setup lang="ts">
</script>

<template>
  <ClientOnly>
    <UButton color="gray" variant="ghost" aria-label="Carrinho de compras"
      class="hidden md:flex hover:bg-lime-800 hover:bg-opacity-10 hover:dark:bg-opacity-100">
      <template #trailing>
        <UIcon name="i-heroicons-shopping-cart-20-solid" class="h-7 w-7 relative z-10 text-lime-800 dark:text-lime-500" />
      </template>
    </UButton>
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>