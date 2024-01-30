<script setup lang="ts">
definePageMeta({
  layout: false,
});

</script>

<template>
  <div class="relative">
    <NuxtLayout name="home-layout">
      <section class="container mx-auto 2xl:px-20 mt-4 xl:mt-6 2xl:mt-20">
        <div class="flex flex-col md:flex-row md:gap-4 xl:gap-0">
          <ComplementsAsideHome />

          <main class="flex flex-col justify-center items-end lg:items-center md:w-[50%] gap-4 xl:gap-6 2xl:gap-8">
            <div class="self-start px-6 sm:px-8 md:px-0 md:self-center">
              <h2 class="text-2xl md:text-4xl xl:text-5xl font-semibold text-lime-800 drop-shadow-sm">
                Encontre o que precisa
              </h2>
            </div>

            <SearchLargerSearch />

            <ButtonsLargerCategory />
          </main>
        </div>
      </section>
    </NuxtLayout>
  </div>
</template>