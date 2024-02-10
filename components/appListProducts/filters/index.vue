<script setup lang="ts">
const filtersDesktopEmit = defineEmits<{
  changeCategorySelected: [{ category: Categories }];
  clearCategorySelected: [void];
  changeEffectSelected: [{ effect: Effects }];
  clearEffectSelected: [void];
}>();

function receiveEventFilterCategory(categorySelected: Categories) {
  filtersDesktopEmit("changeCategorySelected", { category: categorySelected });
}
function receiveEventFilterClearCategory() {
  filtersDesktopEmit("clearCategorySelected");
}

function receiveEventFilterEffect(effectSelected: Effects) {
  filtersDesktopEmit("changeEffectSelected", { effect: effectSelected });
}
function receiveEventFilterClearEffect() {
  filtersDesktopEmit("clearEffectSelected");
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

      <AppListProductsFiltersEffects
        @changeSelected="receiveEventFilterEffect"
        @clearSelected="receiveEventFilterClearEffect"
      />
    </div>
  </div>
</template>