<script setup lang="ts">
const propsGridProducts = defineProps<{
  filters: Filters;
}>();

const currentPage = ref<number>(1);
const quantity = ref<number>(8);
const filterCategory = ref<Categories | null>(null);
const filterEffect = ref<Effects | null>(null);
const products = ref<Array<ProductCard>>([]);
const shouldShowInitialLoaderSkeleton = ref<boolean>(true);

let totalItems: number = 0;
const { data, pending, status } = await useLazyFetch<responseProducts>(
  "/api/products",
  {
    query: {
      nomeCategoria: filterCategory,
      nomeEfeito: filterEffect,
      pagina: currentPage,
      quantidade: quantity,
    },
  }
);

watch(
  data,
  (newData) => {
    if (newData) {
      products.value.push(...(data.value?.produtos ?? []));
      totalItems = data.value?.quantidadeProdutosPeloFiltro ?? 0;
    }
  },
  { immediate: true }
);
watch(
  () => propsGridProducts.filters.categoriaSelecionada,
  (newFilters, oldFilters) => {
    products.value = [];
    if (newFilters !== oldFilters) {
      resetPagination();
    }

    filterCategory.value = newFilters;
  }
);
watch(
  () => propsGridProducts.filters.efeitoSelecionado,
  (newFilters, oldFilters) => {
    products.value = [];
    if (newFilters !== oldFilters) {
      resetPagination();
    }

    filterEffect.value = newFilters;
  }
);

const currentQuantityDisplayed = computed(() => products.value.length);
const shouldShowPagination = computed(
  () => products.value.length >= totalItems
);
const shouldShowLoaderPagination = computed(
  () => pending.value && !shouldShowInitialLoaderSkeleton.value
);

function handleClickLoadMoreItems() {
  if (pending.value) return;
  shouldShowInitialLoaderSkeleton.value = false;
  currentPage.value++;
}

function resetPagination() {
  shouldShowInitialLoaderSkeleton.value = true;
  currentPage.value = 1;
  quantity.value = 8;
}
</script>

<template>
  <main
    class="w-full lg:max-w-6xl px-4 sm:px-8 pt-2 lg:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-28 relative"
  >
    <template v-if="pending && shouldShowInitialLoaderSkeleton">
      <CardsProductLargerSkeleton v-for="key in quantity" :key="key" />
    </template>
    <template v-else>
      <div v-for="(product, index) in products" :key="index">
        <NuxtLink :to="`/suplemento/${product.id}`">
          <CardsProductLarger :produto="product" />
        </NuxtLink>
      </div>
    </template>
    <AppListProductsPagination
      v-show="!shouldShowPagination"
      :current-items-displayed="currentQuantityDisplayed"
      :total-items="totalItems"
      :is-loading="shouldShowLoaderPagination"
      @handleClickLoadMoreItems="handleClickLoadMoreItems"
    />
  </main>
</template>