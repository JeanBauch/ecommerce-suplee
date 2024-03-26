<script setup lang="ts">
useSeoMeta({
  title: "Nome do Suplemento",
  ogTitle: "Suplee",
  description: "Suplee é um e-commerce de Suplementos.",
  ogDescription: "Suplee é um e-commerce de Suplementos.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
const router = useRoute();
const { id: suplementID } = router.params;

const { data: product, pending, error } = await useLazyAsyncData<ProductCard>(
  suplementID.toString(),
  () => $fetch(`/api/product/${suplementID}`)
);

// watch(product, async (newProductDetail) => {
// });
</script>

<template>
  <div v-if="pending">
    loading...
  </div>
  <section v-else class="md:container mx-auto px-8 md:px-0 2xl:px-20 flex justify-center items-center mb-8">
    <div class="flex flex-1 flex-col justify-center relative">
      <AppDetailProductHeading :name="product?.nome" :category="product?.nomeCategoria" />
      <AppDetailProductBody :product-detail="product" />
    </div>
  </section>
</template>
