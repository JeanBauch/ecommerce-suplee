<script setup lang="ts">
</script>

<template>
  <div
    class="w-full bg-[#788B5B] dark:bg-slate-950 dark:md:bg-transparent md:bg-transparent transition-colors duration-700 relative rounded-b-[5.5rem] sm:rounded-b-[7rem] drop-shadow-2xl shadow-green-900 z-50"
  >
    <div class="absolute inset-0 block md:hidden w-full h-full z-0">
      <div
        class="bg-[url('/bg-complement/bg-header-vital.svg')] bg-center bg-contain bg-no-repeat absolute w-full h-full"
      />
    </div>

    <div class="lg:container mx-auto md:px-10 2xl:px-20 py-6 xl:py-8">
      <div class="flex flex-1 justify-between items-center relative">
        <AppHeaderLogo />

        <AppHeaderNavigation />

        <div
          class="flex-1 md:flex-none flex justify-between px-8 sm:px-24 md:px-0 gap-2 text-lime-800"
        >
          <AppHeaderActionsToggleTheme />

          <AppHeaderActionsShoppingCart />

          <AppHeaderActionsUserSettings />
        </div>
      </div>
    </div>

    <div>
      <div v-if="false" class="relative w-full">
        <input
          id="search-products-call-to-action"
          type="text"
          name="search-products"
          placeholder="Digite aqui o produto que procura"
          class="w-full pl-5 pr-28 lg:pr-36 py-7 bg-white rounded-lg shadow-green-700 overflow-hidden"
        />
        <span class="cursor-pointer">
          <div
            class="absolute z-10 w-1/6 lg:w-1/5 h-full rounded-lg top-0 right-0 bg-green-700 bg-primary-green-medium group before:content-[''] before:absolute before:top-0 before:-left-8 before:z-[-1] before:h-full before:w-[60px] before:rounded-tl-full before:rounded-bl-full before:bg-green-700"
          >
            <UIcon
              name="i-heroicons-magnifying-glass"
              class="absolute top-3 right-4 lg:right-6 w-14 h-14 text-white z-10 transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        </span>
      </div>
      <div v-if="false" class="relative w-full">
        <input
          id="search-products-product-listing"
          type="text"
          name="search-products"
          placeholder="Digite aqui o produto que procura"
          class="w-full p-4 bg-[#FFF] rounded-lg shadow-green-700 overflow-hidden"
        />
        <span class="cursor-pointer">
          <div
            class="absolute z-10 w-20 h-full rounded-lg top-0 right-0 bg-green-700 group"
          >
            <UIcon
              name="i-heroicons-magnifying-glass"
              class="absolute top-2 right-5 w-10 h-10 text-white z-10 transition-transform duration-300 group-hover:scale-125"
            />
          </div>
        </span>
      </div>
      <div
        class="flex flex-1 md:hidden px-16 sm:px-24 py-10 mt-6 relative z-10"
      >
        <div class="relative w-full">
          <input
            id="search-products"
            type="text"
            name="search-products"
            placeholder="Digite aqui o produto que procura"
            class="w-full pl-14 pr-2 py-3 border border-green-900 rounded-lg"
          />
          <UIcon
            name="i-heroicons-magnifying-glass"
            class="absolute top-2 left-2 w-9 h-9 text-green-900"
          />
        </div>
      </div>
    </div>
  </div>
</template>