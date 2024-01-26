<template>
  <div>
    <section class="bg-zinc-300 relative z-0 min-h-screen overflow-hidden">
      <!-- Layout Home_Default -->
      <div class="bg-zinc-30 h-full w-full absolute z-[-1] overflow-hidden invisible md:visible">
        <div class="absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-300 bg-opacity-50 blur-[180px]" />
        <div class="absolute left-16 top-24 h-64 w-64 rounded-full bg-[#7B9FE4] bg-opacity-50 blur-[180px]" />
        <div class="absolute -right-24 top-0 h-64 w-64 rounded-full bg-orange-300 bg-opacity-50 blur-[180px]" />
        <div class="bg-[url('/bg-complement/bg-hero.svg')] bg-center bg-no-repeat w-full h-full 2xl:max-h-[1080px] absolute" />
      </div>

      <!-- Layout Header -->
      <div class="w-full bg-[#788B5B] md:bg-transparent transition-colors duration-700 relative rounded-b-[5.5rem] sm:rounded-b-[7rem] drop-shadow-2xl shadow-green-900 z-50">
        <div class="absolute inset-0 block md:hidden w-full h-full z-0">
          <div class="bg-[url('/bg-complement/bg-header-vital.svg')] bg-center bg-contain bg-no-repeat absolute w-full h-full" />
        </div>

        <div class="md:container mx-auto md:px-10 2xl:px-20 py-6 xl:py-8">
          <div class="flex flex-1 justify-between items-center relative">
            <nuxt-link to="/" aria-label="Voltar para página inicial">
              <div class="text-5xl md:text-4xl font-semibold text-white md:text-lime-800 md:w-28 xl:w-36 absolute md:relative md:inset-0 move-logo transition-transform duration-500">
                <h2 class="drop-shadow-2xl">
                  Suplee
                </h2>
              </div>
            </nuxt-link>

            <div class="hidden md:flex justify-between gap-10 lg:gap-6 xl:gap-12 font-semibold text-xl lg:text-2xl text-lime-800">
              <nuxt-link to="/" aria-label="Voltar para página Inicial">
                <h3 class="lg:w-32 text-left lg:text-center">
                  Tela inicial
                </h3>
              </nuxt-link>
              <div class="cursor-pointer" >
                <h3 class="lg:w-32 text-left lg:text-center">
                  Suplementos
                </h3>
              </div>
            </div>

            <div class="flex-1 md:flex-none flex justify-between px-8 sm:px-24 md:px-0 gap-4 text-lime-800">
              <div class="relative cursor-pointer" >
                <UIcon name="i-heroicons-shopping-cart" class="h-10 w-10 text-current relative z-10" />
                <div class="absolute -top-2 -left-2 h-14 w-14 rounded-full bg-white z-0 md:hidden shadow-lg" />
              </div>

              <div class="relative group">
                <div class="relative cursor-pointer">
                  <UIcon name="i-heroicons-user-20-solid" class="h-10 w-10 text-current relative z-10" />
                  <UIcon v-if="false" name="i-heroicons-user" class="h-10 w-10 text-current relative z-10" />
                  <div class="absolute -top-2 -left-2 h-14 w-14 rounded-full bg-white z-0 md:hidden shadow-lg" />
                </div>
                <div class="group-hover:flex hidden absolute flex-col right-0 bg-white rounded-md w-[180px] overflow-hidden z-[100] transition-all">
                  <span class="cursor-pointer flex w-full justify-end p-3 border-b-[1px] border-zinc-500 bg-white hover:bg-lime-800 hover:text-white">
                    Editar meu perfil
                  </span>
                  <span class="cursor-pointer flex w-full justify-end p-3 border-b-[1px] border-zinc-500 bg-white hover:bg-lime-800 hover:text-white">
                    Histórico de compras
                  </span>
                  <span class="cursor-pointer flex w-full justify-end p-3 bg-white hover:bg-lime-800 hover:text-white">
                    Sair
                  </span>
                </div>
              </div>
            </div>
            <!--  -->
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
            >
            <span class="cursor-pointer">
              <div class="absolute z-10 w-1/6 lg:w-1/5 h-full rounded-lg top-0 right-0 bg-green-700 bg-primary-green-medium group before:content-[''] before:absolute before:top-0 before:-left-8 before:z-[-1] before:h-full before:w-[60px] before:rounded-tl-full before:rounded-bl-full before:bg-green-700">
                <UIcon name="i-heroicons-magnifying-glass" class="absolute top-3 right-4 lg:right-6 w-14 h-14 text-white z-10 transition-transform duration-300 group-hover:scale-125" />
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
            >
            <span class="cursor-pointer">
              <div class="absolute z-10 w-20 h-full rounded-lg top-0 right-0 bg-green-700 group">
                <UIcon name="i-heroicons-magnifying-glass" class="absolute top-2 right-5 w-10 h-10 text-white z-10 transition-transform duration-300 group-hover:scale-125" />
              </div>
            </span>
          </div>
          <div class="flex flex-1 md:hidden px-16 sm:px-24 py-10 mt-6 relative z-10">
            <div class="relative w-full">
              <input
                id="search-products"
                type="text"
                name="search-products"
                placeholder="Digite aqui o produto que procura"
                class="w-full pl-14 pr-2 py-3 border border-green-900 rounded-lg"
              >
              <UIcon name="i-heroicons-magnifying-glass" class="absolute top-2 left-2 w-9 h-9 text-green-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>