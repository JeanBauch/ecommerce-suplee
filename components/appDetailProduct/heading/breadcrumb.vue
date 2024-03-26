<script setup lang="ts">
const props = defineProps<{
  name: string | undefined
  category: Categories | undefined
}>();

const categoryName = computed(() => props.category ?? "Categoria não definida");
const productName = computed(() => props.name ?? "Nome não definido");

const links = reactive([
  {
    label: "Página inicial",
    icon: "i-heroicons-home",
    to: "/",
  },
  {
    label: categoryName,
    icon: "i-heroicons-rectangle-group",
  },
  {
    label: productName,
    icon: "i-heroicons-tag",
  },
]);

// const links = ;
</script>

<template>
  <div class="flex flex-1 w-full justify-between items-center mt-0 2xl:mt-3">
    <UBreadcrumb :links="links" :ui="{ active: 'text-green-800 dark:text-green-400' }" />

    <UTooltip :text="`Clique para voltar a lista de Suplementos de ${category}`">
      <UButton variant="outline" class="ring-lime-800 dark:ring-lime-400 text-lime-800 hover:bg-lime-50/50">
        <span>Categoria:</span>
        <strong>{{ category }}</strong>
      </UButton>
    </UTooltip>
  </div>
</template>