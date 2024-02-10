<script setup lang="ts">
const bgColorByCategory = useColorByCategory("Vitaminas", "background");
</script>

<template>
  <div
    :class="bgColorByCategory"
    class="w-full xl:w-[60%] pb-5 pt-20 xl:pt-6 xl:p-6 2xl:p-8 -mt-16 mb-20 md:mb-0 xl:mt-0 rounded-b-3xl xl:rounded-tl-3xl xl:rounded-bl-3xl xl:rounded-br-none shadow-green-500 relative z-10"
  >
    <div class="w-full h-full flex flex-1 flex-col px-5 xl:px-0 text-white">
      <div
        class="flex flex-col gap-3 2xl:gap-4 pb-6 2xl:pb-7 relative after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-0 after:rounded-full after:bg-slate-50 after:dark:bg-slate-300"
      >
        <h4 class="font-semibold text-xl 2xl:text-2xl">
          Descrição do Produto
        </h4>
        <p
          id="descriptionProduct"
          class="font-light text-justify text-base xl:text-sm 2xl:text-base"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellendus praesentium totam delectus sequi? Corporis, quod nihil
          animi earum dolorem nemo consequatur nam dolores repudiandae
          doloribus cumque inventore ipsa sapiente.
          <span
            v-if="false"
            class="absolute bottom-0 right-0 text-base xl:text-sm 2xl:text-base ml-8 font-semibold cursor-pointer pl-3"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, voluptates sint cupiditate praesentium, quidem rem
            commodi aliquid nisi at reprehenderit pariatur neque? A, optio.
            Quis numquam id inventore accusantium fugit.
          </span>
        </p>
      </div>
      <div
        class="flex flex-col gap-3 2xl:gap-4 py-4 2xl:py-5 relative after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-0 after:rounded-full after:bg-slate-50 after:dark:bg-slate-300"
      >
        <h4 class="font-semibold text-xl 2xl:text-2xl">Efeitos</h4>
        <div
          :class="
            3 < 2
              ? 'justify-start'
              : 3 < 3
              ? 'justify-around'
              : 'justify-between'
          "
          class="flex items-center"
        >
          <div
            v-for="(efeito, index) in [
              'Imunidade',
              'Fortalecimento Muscular',
              'Fortificação Óssea',
            ]"
            :key="index"
            class="flex flex-col justify-start items-center w-full max-w-[33%] h-full gap-1 group"
          >
            <div
              class="bg-slate-50 dark:border dark:border-slate-50 dark:bg-transparent rounded-full flex items-center justify-center shadow p-2 w-12 h-12 lg:w-16 lg:h-16 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
            >
              <!-- <img src="/icons/icon-imunity.svg" class="transition-all grayscale group-hover:grayscale-0" alt=""> -->
              <img
                v-if="false"
                src="/icons/icon-imunity.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
                alt="Icone para o efeito imunidade"
              />
              <!-- <img
            v-else-if="false"
            src="/icons/icon-muscle.svg"
            width="28"
            height="28"
            class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
            alt="Icone para o efeito de Fortalecimento Muscular"
          >
          <img
            v-else-if="false"
            src="/icons/icon-bone.svg"
            width="28"
            height="28"
            class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
            alt="Icone para o efeito de Fortificação Óssea"
          >
          <img
            v-else-if="false"
            src="/icons/icon-brain.svg"
            width="28"
            height="28"
            class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
            alt="Icone para o efeito Memória"
          >
          <img
            v-else-if="false"
            src="/icons/icon-vit-d.svg"
            width="28"
            height="28"
            class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
            alt="Icone para o efeito Vitamina D"
          >
          <img
            v-else-if="false"
            src="/icons/icon-sleep.svg"
            width="28"
            height="28"
            class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0"
            alt="Icone para o efeito Relaxante"
          > -->
              <img
                v-else
                src="/icons/icon-imunity.svg"
                width="28"
                height="28"
                class="w-7 h-7 lg:w-9 lg:h-10 transition-all grayscale group-hover:grayscale-0 text-white"
                alt="Icone imunidade"
              />
            </div>
            <p
              class="font-light xl:text-sm 2xl:text-base text-center flex items-center justify-center flex-1"
            >
              Nome do Efeito
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-3 2xl:gap-4 pt-4 2xl:pt-5 relative">
        <h4 class="font-semibold text-xl 2xl:text-2xl">Composição</h4>
        <ul
          id="list-composition"
          class="pl-6 mb-4 columns-2 gap-16 columns-composition"
        >
          <li
            v-for="(item, index) in ['comp1', 'comp2', 'comp3']"
            :key="index"
            class="font-light xl:text-sm 2xl:text-base list-disc"
          >
            {{ item }}
          </li>
        </ul>
        <span
          v-if="false"
          :class="bgColorByCategory"
          class="absolute -bottom-2 xl:-bottom-6 right-0 text-base xl:text-sm 2xl:text-base ml-8 font-semibold cursor-pointer pl-4 rounded-full"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
          natus libero, perspiciatis quidem incidunt, autem accusantium
          explicabo porro facilis possimus omnis! Provident eos explicabo
          voluptatibus, architecto dolores ad atque saepe?
        </span>
      </div>
    </div>
  </div>
</template>
