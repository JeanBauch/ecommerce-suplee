<script setup lang="ts">
const links = [
  {
    label: "Página inicial",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: "Vitaminas",
    icon: "i-heroicons-rectangle-group",
  },
  {
    label: "Produto 01",
    icon: "i-heroicons-tag",
  },
];
</script>

<template>
  <div
    class="flex flex-1 w-full justify-between items-center mt-0 2xl:mt-3"
  >
    <UBreadcrumb
      :links="links"
      :ui="{ active: 'text-green-800 dark:text-green-400' }"
    />

    <UTooltip text="Clique para voltar a lista de Suplementos de Vitaminas">
      <UButton
        variant="outline"
        class="ring-lime-800 dark:ring-lime-400 text-lime-800 hover:bg-lime-50/50"
      >
        <span>Categoria:</span>
        <strong>Vitaminas</strong>
      </UButton>
    </UTooltip>
  </div>
</template>