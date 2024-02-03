<script setup lang="ts">
type ImagensCardProduct = {
  nomeImagem: string;
  urlImagemOriginal: string;
  urlImagemReduzida: string;
  urlImagemMaior: string;
};
type ProductCard = {
  id: string;
  imagens: ImagensCardProduct[];
  nome: string;
  nomeCategoria: string;
  nomeEfeito: string[];
  preco: number;
};
type responseProducts = {
  produtos: Array<ProductCard>;
};

const allProducts: responseProducts = {
  produtos: [
    {
      id: "01",
      nome: "Produto 01",
      nomeCategoria: "Vitaminas",
      nomeEfeito: ["Imunidade", "Memória", "Fortificação Óssea"],
      preco: 50,
      imagens: [
        {
          nomeImagem: "Imagem do Produto 01",
          urlImagemOriginal: "",
          urlImagemReduzida: "",
          urlImagemMaior: "",
        },
      ],
    },
    {
      id: "02",
      nome: "Produto 02",
      nomeCategoria: "Proteínas",
      nomeEfeito: ["Relaxante", "Vitamina D", "Imunidade"],
      preco: 80,
      imagens: [
        {
          nomeImagem: "Imagem do Produto 02",
          urlImagemOriginal: "",
          urlImagemReduzida: "",
          urlImagemMaior: "",
        },
      ],
    },
    {
      id: "03",
      nome: "Produto 03",
      nomeCategoria: "Minerais",
      nomeEfeito: [
        "Fortificação Óssea",
        "Fortalecimento Muscular",
        "Imunidade",
      ],
      preco: 80,
      imagens: [
        {
          nomeImagem: "Imagem do Produto 03",
          urlImagemOriginal: "",
          urlImagemReduzida: "",
          urlImagemMaior: "",
        },
      ],
    },
    {
      id: "04",
      nome: "Produto 04",
      nomeCategoria: "Ômega-3",
      nomeEfeito: ["Fortificação Óssea", "Fortalecimento Muscular"],
      preco: 100,
      imagens: [
        {
          nomeImagem: "Imagem do Produto 04",
          urlImagemOriginal: "",
          urlImagemReduzida: "",
          urlImagemMaior: "",
        },
      ],
    },
    {
      id: "05",
      nome: "Produto 05",
      nomeCategoria: "Vitaminas",
      nomeEfeito: ["Fortificação Óssea", "Fortalecimento Muscular"],
      preco: 120,
      imagens: [
        {
          nomeImagem: "Imagem do Produto 05",
          urlImagemOriginal: "",
          urlImagemReduzida: "",
          urlImagemMaior: "",
        },
      ],
    },
    {
      id: "06",
      nome: "Produto 06",
      nomeCategoria: "Minerais",
      nomeEfeito: ["Fortificação Óssea", "Fortalecimento Muscular"],
      preco: 200,
      imagens: [
        {
          nomeImagem: "Imagem do Produto 06",
          urlImagemOriginal: "",
          urlImagemReduzida: "",
          urlImagemMaior: "",
        },
      ],
    },
  ],
};
</script>

<template>
  <main
    class="w-full lg:max-w-6xl px-4 sm:px-8 pt-2 lg:mt-6 grid grid-rows-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-16 pb-28 relative"
  >
    <div v-for="(produto, index) in allProducts.produtos" :key="index">
      <a :href="`produto/${produto.id}`">
        <CardsProductLarger :produto="produto" />
      </a>
    </div>
    <AppListProductsPagination />
  </main>
</template>