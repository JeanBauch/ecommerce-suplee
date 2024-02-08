<script setup lang="ts">
definePageMeta({
  layout: false,
});

useSeoMeta({
  title: "Suplee",
  ogTitle: "Suplee",
  description: "Suplee é um e-commerce de Suplementos.",
  ogDescription: "Suplee é um e-commerce de Suplementos.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});

const currentFilter = reactive<Filters>({
  categoriaSelecionada: null,
  efeitoSelecionado: null,
});

function handleSelectFilter({
  category,
  effect,
}: {
  category: Categories;
  effect: Effects;
}) {
  category && (currentFilter["categoriaSelecionada"] = category);
  effect && (currentFilter["efeitoSelecionado"] = effect);
}

function handleClearCategoryFilter() {
  currentFilter.categoriaSelecionada = null;
}
</script>

<template>
  <div class="relative">
    <NuxtLayout name="home-layout">
      <section class="container mx-auto 2xl:px-20 mt-4 xl:mt-6 2xl:mt-20">
        <div class="flex flex-col md:flex-row md:gap-4 xl:gap-0">
          <ComplementsAsideHome />

          <main
            class="flex flex-col justify-center items-end lg:items-center md:w-[50%] gap-4 xl:gap-6 2xl:gap-8"
          >
            <div class="self-start px-6 sm:px-8 md:px-0 md:self-center">
              <h2
                class="text-2xl md:text-4xl xl:text-5xl font-semibold text-lime-800 dark:md:text-lime-500 drop-shadow-sm"
              >
                Encontre o que precisa
              </h2>
            </div>

            <SearchLargerInput />

            <ButtonsLargerCategory />
          </main>
        </div>
      </section>
    </NuxtLayout>
    <section
      id="sessaoDeSuplementos"
      class="bg-slate-300 dark:bg-slate-900 min-h-screen"
    >
      <div class="lg:container mx-auto">
        <AppListProductsSearchHeader />
        <AppListProductsFiltersMobile />
        <div class="flex md:justify-between">
          <AppListProductsFilters
            @changeCategorySelected="handleSelectFilter"
            @clearCategorySelected="handleClearCategoryFilter"
          />
          <AppListProductsViewCards :filters="currentFilter" />
        </div>
      </div>
    </section>
  </div>
</template>