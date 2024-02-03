<script setup lang="ts">
</script>

<template>
  <div
    id="titleListProduct"
    class="flex items-start px-4 sm:px-8 lg:px-0 pt-8 pb-4 lg:border-none border-b border-gray-400 dark:border-slate-700"
  >
    <h2
      class="font-semibold text-2xl md:font-bold lg:text-3xl text-black dark:text-white"
    >
      Todos os produtos
    </h2>
    <div class="hidden lg:flex flex-1 justify-center items-center">
      <div class="relative w-[28rem] flex flex-col gap-2">
        <SearchMediumInput />
        <h3 class="text-center font-light pr-16">
          <span class="font-bold"> 6 </span>
          suplementos encontrados com
          <span class="font-bold"> "nome teste" </span>
        </h3>
      </div>
    </div>
  </div>
</template>