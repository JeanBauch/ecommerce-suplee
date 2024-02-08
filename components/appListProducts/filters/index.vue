<script setup lang="ts">
const filtersDesktopEmit = defineEmits<{
  changeCategorySelected: [{ category: Categories }];
  clearCategorySelected: [void];
}>();

function receiveEventFilterCategory(categorySelected: Categories) {
  filtersDesktopEmit("changeCategorySelected", { category: categorySelected });
}
function receiveEventFilterClearCategory() {
  filtersDesktopEmit("clearCategorySelected");
}
</script>

<template>
  <div class="flex md:justify-between">
    <!-- Filter Desktop -->
    <div class="hidden lg:flex flex-col gap-4">
      <AppListProductsFiltersCategory
        @changeSelected="receiveEventFilterCategory"
        @clearSelected="receiveEventFilterClearCategory"
      />

      <AppListProductsFiltersEffects />
    </div>
  </div>
</template>