<script setup lang="ts">
</script>

<template>
  <!-- Filter Mobile-->
  <div
    class="px-4 sm:px-8 lg:px-0 py-5 shadow-lg dark:shadow-slate-900 dark:border-b dark:border-slate-700 lg:hidden"
  >
    <div class="flex flex-wrap items-center justify-start">
      <div class="mr-8">
        <h3 class="font-semibold text-lg">Filtros:</h3>
      </div>
      <div class="flex gap-6">
        <button
          class="px-6 py-2 w-36 flex justify-center items-center bg-white dark:bg-slate-800 dark:border dark:border-slate-600 rounded-full text-lg text-black dark:text-white shadow-md"
          @click="toggleModalFilter('Categorias')"
        >
          <!-- <span v-if="isCategorySelected('Vitaminas')">Vitaminas</span>
          <span v-else-if="isCategorySelected('Proteínas')">Proteínas</span>
          <span v-else-if="isCategorySelected('Minerais')">Minerais</span>
          <span v-else-if="isCategorySelected('Ômega-3')">Ômega-3</span> -->
          <span>Categorias</span>
        </button>
        <button
          class="px-6 py-2 w-36 flex justify-center items-center bg-white dark:bg-slate-800 dark:border dark:border-slate-600 rounded-full font-medium text-black dark:text-white text-lg shadow-md"
          @click="toggleModalFilter('Efeitos')"
        >
          <!-- <span v-if="false">Imunidade</span>
          <span v-else-if="false"
            >Muscular</span
          >
          <span v-else-if="isEffectSelected('Memória')">Memória</span>
          <span v-else-if="isEffectSelected('Forticação Osséa')">Osséa</span>
          <span v-else-if="isEffectSelected('Vitamina D')">Vitamina D</span>
          <span v-else-if="isEffectSelected('Relaxante')">Relaxante</span> -->
          <span>Efeitos</span>
        </button>
      </div>
    </div>
  </div>
</template>