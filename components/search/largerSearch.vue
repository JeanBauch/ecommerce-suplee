<script setup lang="ts">
const loading = ref(false)
const selected = ref()

async function search(q: any) {
  loading.value = true

  const users = await $fetch('https://jsonplaceholder.typicode.com/users', { params: { q } })

  loading.value = false

  return users
}

const configUi = {
  rounded: 'rounded-lg',
  padding: { '2xs': 'px-3 py-4', 'xs': 'px-3.5 py-4.5', 'sm': 'px-3.5 py-4.5', md: 'px-4 py-5', xl: 'px-4 py-5' }
}
</script>

<template>
  <!-- <div class="md:w-[90%] lg:w-[80%] xl:w-2/3 hidden md:block">
    <div class="relative w-full">
      <input id="search-products-call-to-action" type="text" name="search-products"
        placeholder="Digite aqui o produto que procura"
        class="w-full pl-5 pr-28 lg:pr-36 py-7 bg-white rounded-lg shadow-green-700 overflow-hidden" />
      <span class="cursor-pointer">
        <div
          class="absolute z-10 w-1/6 lg:w-1/5 h-full rounded-lg top-0 right-0 bg-green-800 group before:content-[''] before:absolute before:top-0 before:-left-8 before:z-[-1] before:h-full before:w-[60px] before:rounded-tl-full before:rounded-bl-full before:bg-green-800">
          <UIcon name="i-heroicons-magnifying-glass"
            class="absolute top-3 right-4 lg:right-6 w-14 h-14 text-white z-10 transition-transform duration-300 group-hover:scale-125" />
        </div>
      </span>
    </div>
  </div> -->
  <div class="md:w-[90%] lg:w-[80%] xl:w-2/3 hidden md:block">
    <div class="relative w-full">
      <UInputMenu size="xl" trailing-icon="i-heroicons-magnifying-glass" v-model="selected" :search="search"
        :loading="loading" placeholder="Digite aqui o produto que procura..." option-attribute="name" trailing by="id"
        :ui="configUi" />
    </div>
  </div>
</template>