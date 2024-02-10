<script setup lang="ts">
const propsValue = defineProps<{
  produto: ProductCard;
}>();

const accountBRL = useAccountBRL(propsValue.produto.preco);

const badgeColorByCategory = useColorByCategory(
  propsValue.produto.nomeCategoria,
  "backgroundBadge"
);
const textColorByCategory = useColorByCategory(
  propsValue.produto.nomeCategoria,
  "text"
);

function classColorEffectName(effectName: Effects) {
  return useColorByEffect(effectName, "text");
}

function classStrokeEffectName(effectName: Effects) {
  return useColorByEffect(effectName, "stroke");
}
</script>


<template>
  <div
    class="w-full h-[19rem] lg:h-[23rem] xl:h-[22rem] 2xl:h-[23rem] flex justify-center items-end mt-10 lg:mt-6"
  >
    <div
      class="w-[95%] h-full px-4 lg:px-5 xl:px-4 2xl:px-5 bg-white dark:bg-slate-950 dark:border dark:border-slate-800 relative z-20 rounded-xl shadow-md hover:shadow-xl cursor-pointer dark:hover:ring-1 dark:hover:ring-lime-800"
    >
      <div class="flex justify-center relative -top-[8%]">
        <img
          src="/bg-complement/item-example.svg"
          class="drop-shadow-xl block lg:hidden"
          alt="Imagem de exemplo de um Suplemento"
          width="80"
          height="125"
        />
        <img
          src="/bg-complement/ImageSuplementDesktop.svg"
          class="drop-shadow-xl hidden lg:block"
          alt="Imagem de exemplo de um Suplemento"
          width="120"
          height="180"
        />
        <!-- <img
          src="/bg-complement/suplemento.webp"
          class="drop-shadow-xl hidden lg:block"
          alt=""
        /> -->

        <!-- Certos! -->
        <!-- <img
          :src="produto.imagens[0].urlImagemReduzida"
          width="93"
          height="142"
          class="drop-shadow-xl block lg:hidden"
          alt=""
        />
        <img
          :src="produto.imagens[0].urlImagemReduzida"
          width="155"
          height="235"
          class="drop-shadow-xl hidden lg:block"
          alt=""
        /> -->
      </div>
      <article class="relative z-30 -top-[8%] mt-1">
        <h4
          class="text-base lg:text-xl xl:text-lg 2xl:text-xl text-black dark:text-white font-semibold mb-1 truncate"
        >
          {{ produto.nome }}
        </h4>

        <div class="w-full flex flex-col justify-center items-center gap-3">
          <div
            :class="badgeColorByCategory"
            class="flex justify-center items-center px-2 py-[1px] bg-[#CCE4CD] rounded-full"
          >
            <h5 :class="textColorByCategory" class="text-sm font-bold">
              {{ produto.nomeCategoria }}
            </h5>
          </div>

          <div
            :class="
              produto.nomeEfeito.length < 3
                ? 'justify-around'
                : 'justify-between'
            "
            class="flex items-center w-full"
          >
            <div v-for="(effectName, index) in produto.nomeEfeito" :key="index">
              <div class="flex flex-col items-center justify-center gap-1">
                <SvgsIconImunity
                  v-if="effectName === 'Imunidade'"
                  :class="classStrokeEffectName(effectName)"
                  class="w-7 h-7 lg:w-7 lg:h-8 xl:w-6 xl:h-6 2xl:w-7 2xl:h-8"
                  alt="Icone para o efeito imunidade"
                />
                <SvgsIconMuscle
                  v-else-if="effectName === 'Fortalecimento Muscular'"
                  :class="classStrokeEffectName(effectName)"
                  class="w-7 h-7 lg:w-7 lg:h-8 xl:w-6 xl:h-6 2xl:w-7 2xl:h-8"
                  alt="Icone para o efeito de Fortalecimento Muscular"
                />
                <SvgsIconBone
                  v-else-if="effectName === 'Fortificação Óssea'"
                  :class="classStrokeEffectName(effectName)"
                  class="w-7 h-7 lg:w-7 lg:h-8 xl:w-6 xl:h-6 2xl:w-7 2xl:h-8"
                  alt="Icone para o efeito de Fortificação Óssea"
                />
                <SvgsIconBrain
                  v-else-if="effectName === 'Memória'"
                  :class="classStrokeEffectName(effectName)"
                  class="w-7 h-7 lg:w-7 lg:h-8 xl:w-6 xl:h-6 2xl:w-7 2xl:h-8"
                  alt="Icone para o efeito Memória"
                />
                <SvgsIconVitD
                  v-else-if="effectName === 'Vitamina D'"
                  :class="classStrokeEffectName(effectName)"
                  class="w-7 h-7 lg:w-7 lg:h-8 xl:w-6 xl:h-6 2xl:w-7 2xl:h-8"
                  alt="Icone para o efeito Vitamina D"
                />
                <SvgsIconSleep
                  v-else-if="effectName === 'Relaxante'"
                  :class="classStrokeEffectName(effectName)"
                  class="w-7 h-7 lg:w-7 lg:h-8 xl:w-6 xl:h-6 2xl:w-7 2xl:h-8"
                  alt="Icone para o efeito Relaxante"
                />
                <SvgsIconImunity
                  v-else
                  :class="classStrokeEffectName(effectName)"
                  class="w-7 h-7 lg:w-7 lg:h-8 xl:w-6 xl:h-6 2xl:w-7 2xl:h-8"
                  alt="Icone para o efeito imunidade"
                />

                <span
                  :class="classColorEffectName(effectName)"
                  class="font-bold text-[0.625rem] lg:text-xs xl:text-[0.625rem] 2xl:text-xs"
                >
                  {{
                    effectName === "Fortalecimento Muscular"
                      ? "Muscular"
                      : effectName === "Fortificação Óssea"
                      ? "Fort. Óssea"
                      : effectName
                  }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-5">
          <h4
            class="text-sm lg:text-lg xl:text-base 2xl:text-lg text-black dark:text-white font-semibold"
          >
            {{ accountBRL }}
          </h4>
          <button
            class="flex items-center justify-center relative overflow-hidden transition-all duration-300 px-4 lg:px-6 xl:px-4 py-2 bg-lime-800 rounded-md before:content-[''] before:absolute before:block before:top-0 before:-left-12 before:w-[70%] before:h-full before:bg-[linear-gradient(90deg,transparent,#FFFFFF71,transparent)] before:transition-all before:duration-1000 before:z-[2] before:-translate-x-16 before:-skew-x-12 hover:before:translate-x-[200px] hover:bg-lime-900 dark:hover:bg-lime-700"
          >
            <p
              class="text-lime-50 dark:hover:text-lime-100 font-bold text-sm lg:text-base xl:text-sm 2xl:text-base"
            >
              Comprar
            </p>
          </button>
        </div>
      </article>

      <div
        class="absolute z-20 bottom-[0.375rem] left-0 w-full h-8 bg-white dark:bg-slate-950 rounded-b-xl"
      />
      <div
        class="absolute z-10 bottom-0 left-0 w-full h-8 bg-lime-800 rounded-b-xl"
      />
    </div>
  </div>
</template>
