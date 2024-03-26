<script setup lang="ts">
const quantityProduct = ref(1);
const bgColorByCategory = useColorByCategory("Vitaminas", "background");
const textColorByCategory = useColorByCategory("Vitaminas", "text");
const configUI = {
  color: {
    default: {
      solid: `shadow-sm text-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 ${bgColorByCategory} hover:bg-opacity-80`,
    }
  }
}
</script>

<template>
  <div
    class="flex flex-col justify-between w-full xl:w-[40%] bg-white dark:bg-slate-950 rounded-tr-xl rounded-tl-xl rounded-bl-[1.875rem] rounded-br-[1.875rem] xl:rounded-tr-3xl xl:rounded-br-3xl xl:rounded-tl-none xl:rounded-bl-none px-5 pt-5 pb-9 xl:px-6 2xl:px-8 xl:py-9 2xl:py-11 xl:border-l xl:border-l-slate-200 shadow-green-500 relative z-2">
    <div class="flex flex-col xl:gap-4 2xl:gap-5">
      <div
        class="flex md:hidden flex-row xl:flex-col xl:gap-4 2xl:gap-5 pb-4 xl:pb-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-slate-500 after:rounded-full">
        <div class="flex flex-col justify-center items-start gap-1 w-full">
          <h3 class="font-semibold text-3xl text-black">Nome do Produto</h3>
          <h4 class="font-medium text-base text-slate-500">
            Categoria: <strong class="font-semibold ml-2">Vitaminas</strong>
          </h4>
        </div>
      </div>

      <div
        class="flex flex-row xl:flex-col xl:gap-4 2xl:gap-5 pt-4 md:pt-0 pb-4 xl:pb-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-slate-500 after:rounded-full">
        <div class="flex flex-col justify-center items-center xl:items-start gap-1 w-1/2 xl:w-full">
          <h5 class="font-semibold xl:text-lg 2xl:text-xl text-slate-500">
            Valor total
          </h5>
          <h3 class="font-semibold text-3xl md:text-2xl 2xl:text-3xl">
            R$80,00
          </h3>
        </div>

        <div
          class="flex flex-col w-1/2 xl:w-full xl:gap-2 2xl:gap-3 xl:pb-4 2xl:pb-5 relative after:content-[''] after:xl:w-full after:h-[1px] after:absolute after:bottom-0 after:bg-slate-500 after:rounded-full">
          <div class="flex flex-col xl:flex-row items-center w-full justify-between">
            <h5 class="font-semibold text-center xl:text-left xl:text-lg 2xl:text-xl text-slate-500">
              Quantidade
            </h5>
            <span class="text-red-600 text-sm font-medium hidden xl:block">
              restam 10
            </span>
          </div>
          <div class="flex justify-center items-center">
            <UButtonGroup size="xl" orientation="horizontal">
              <UButton icon="i-heroicons-minus-20-solid" color="gray" />
              <UInput v-model="quantityProduct" inputClass="text-center" />
              <UButton icon="i-heroicons-plus-20-solid" color="gray" />
            </UButtonGroup>
          </div>
          <span class="text-red-600 text-sm font-medium text-center block xl:hidden">
            restam 10
          </span>
        </div>
      </div>

      <div
        class="flex flex-row xl:flex-col xl:gap-4 2xl:gap-5 py-4 xl:py-0 relative after:content-[''] after:w-full after:xl:w-0 after:h-[1px] after:absolute after:bottom-0 after:bg-slate-500 after:rounded-full">
        <div
          class="flex flex-col justify-center items-center xl:items-start xl:gap-4 2xl:gap-5 w-1/2 xl:w-full px-0 md:px-7 lg:px-0">
          <UForm>
            <UFormGroup>
              <UButtonGroup size="xl" orientation="horizontal">
                <UInput placeholder="Digite seu CEP" icon="i-heroicons-map-pin" />
                <UButton icon="i-heroicons-magnifying-glass-20-solid" loading color="default" :ui="configUI" />
              </UButtonGroup>
            </UFormGroup>
          </UForm>
        </div>

        <div class="flex flex-col items-start gap-1 xl:gap-2 w-1/2 xl:w-full pl-7 md:pl-0">
          <div class="flex w-full flex-col md:flex-row justify-between">
            <p class="font-semibold text-sm" :class="textColorByCategory">
              Entrega padrão:
            </p>
            <p class="font-medium text-slate-900 dark:text-slate-200 text-sm">
              prazo de 2 semanas
            </p>
          </div>

          <div>
            <span class="font-medium text-slate-400 text-sm">
              Valor: R$ 80,00
            </span>
          </div>
        </div>

        <div class="flex items-center justify-center gap-6 w-1/2 xl:w-full p-2 relative">
          <div
            class="w-3 h-3 relative z-1 loader-label before:content-[''] before:absolute before:rounded-full before:mix-blend-multiply before:bg-lime-500 before:w-2 before:h-2 before:z-1 after:content-[''] after:absolute after:rounded-full after:mix-blend-multiply after:bg-lime-800 after:w-2 after:h-2 after:z-1 after:delay-500" />
          <p class="font-semibold text-sm" :class="textColorByCategory">
            Calculando seu frete...
          </p>
        </div>
      </div>
    </div>

    <div class="pt-9 xl:pt-0 w-[80%] xl:w-full self-center">
      <UButton padded block size="xl" color="default" :ui="configUI">Adicionar ao carrinho</UButton>
    </div>
  </div>
</template>
