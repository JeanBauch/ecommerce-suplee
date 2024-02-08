<script setup lang="ts">
const propsGridProducts = defineProps<{
  filters: Filters;
}>();

const currentPage = ref<number>(1);
const quantity = ref<number>(8);
const filterCategory = ref<Categories | null>(null);
const products = ref<Array<ProductCard>>([]);

let totalItems: number = 0;
const { data, pending, status } = await useLazyFetch<responseProducts>(
  "/api/products",
  {
    query: {
      nomeCategoria: filterCategory,
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
    console.log("Mudou o filtro");
    console.log("New", newFilters);
    console.log("Old", oldFilters);
    if (newFilters !== oldFilters) {
      resetPagination();
    }

    filterCategory.value = newFilters;
  }
);

const currentQuantityDisplayed = computed(() => products.value.length);
const shouldShowPagination = computed(
  () => products.value.length >= totalItems
);

function handleClickLoadMoreItems() {
  if (pending.value) return;
  currentPage.value++;
}

function resetPagination() {
  currentPage.value = 1;
  quantity.value = 8;
}
</script>

<template>
  <main
    class="w-full lg:max-w-6xl px-4 sm:px-8 pt-2 lg:mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4 pb-28 relative"
  >
    <template v-if="pending">
      <CardsProductLargerSkeleton v-for="key in quantity" :key="key" />
    </template>
    <template v-else>
      <div v-for="(product, index) in products" :key="index">
        <a :href="`produto/${product.id}`">
          <CardsProductLarger :produto="product" />
        </a>
      </div>
    </template>
    <AppListProductsPagination
      v-show="!shouldShowPagination"
      :current-items-displayed="currentQuantityDisplayed"
      :total-items="totalItems"
      @handleClickLoadMoreItems="handleClickLoadMoreItems"
    />
  </main>
</template>