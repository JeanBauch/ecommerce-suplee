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
  <section
    class="md:container mx-auto px-8 md:px-0 2xl:px-20 flex justify-center items-center mb-8"
  >
    <div class="flex flex-1 flex-col justify-center relative">
      <div class="flex flex-1 w-full">
        <h2 class="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Produto 01
        </h2>
      </div>

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

      <div
        class="flex flex-1 flex-col md:flex-row w-full gap-3 md:gap-6 mt-3 md:mt-2 xl:mt-4 2xl:mt-6 relative"
      >
        <CardsPreviewProductImages
          :currentCategory="'Vitaminas'"
          :images="[]"
        />
        <div class="flex w-full md:w-8/12 2xl:w-7/12">
          <div class="flex flex-1 w-full flex-col-reverse xl:flex-row">
            <CardsProductDetails />
            <CardsProductPurchaseCallToAction />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
