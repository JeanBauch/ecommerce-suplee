<script setup lang="ts">
const propsPagination = defineProps<{
  totalItems: number;
  currentItemsDisplayed: number;
}>();
</script>

<template>
  <div
    class="flex flex-col justify-start items-center w-full col-span-2 sm:col-span-3 lg:col-span-2 xl:col-span-3 mt-8 lg:mt-4 relative"
  >
    <span
      >Visualizando {{ propsPagination.currentItemsDisplayed }} de
      {{ propsPagination.totalItems }}</span
    >
    <UButton
      variant="link"
      aria-label="Ver mais produtos"
      class="hover:no-underline flex justify-center items-center gap-1 text-lime-800 relative py-2 group before:content-[''] before:absolute before:w-full before:h-1 before:rounded before:bg-lime-800 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
      @click="
        () => {
          $emit('handleClickLoadMoreItems');
        }
      "
    >
      <template #leading>
        <UIcon
          name="i-heroicons-plus-20-solid"
          class="h-6 w-6 text-lg text-current relative z-10"
        />
      </template>
      <h3 class="font-bold text-lg text-black dark:text-white">
        Ver mais produtos
      </h3>
    </UButton>
  </div>
</template>
