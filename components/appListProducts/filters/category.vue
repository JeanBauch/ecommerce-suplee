<script setup lang="ts">
</script>

<template>
  <div class="bg-white dark:bg-slate-950 rounded-xl w-64 shadow-lg mt-14">
    <div class="px-6 py-4 border-b border-b-gray-300 dark:border-b-gray-600">
      <h3 class="text-xl font-medium">Categorias</h3>
    </div>
    <nav>
      <ul class="text-base font-light flex flex-col text-white">
        <li
          :class="
            false
              ? 'bg-gray-300 dark:bg-lime-500 bg-opacity-40 dark:bg-opacity-40'
              : ''
          "
          class="px-6 py-2 flex gap-16 cursor-pointer hover:bg-lime-500 hover:bg-opacity-40 hover:dark:bg-opacity-40"
          @click="toggleSelectedCategory('Vitaminas')"
        >
          <div
            class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-green-700 px-4 py-1"
          >
            <span> Vitaminas </span>
          </div>
          <div>
            <!-- <CheckIcon v-if="isCategorySelected('Vitaminas')" class="h-8 w-8 text-lime-800 relative z-10" /> -->
          </div>
        </li>
        <li
          :class="
            false
              ? 'bg-gray-300 dark:bg-lime-500 bg-opacity-40 dark:bg-opacity-40'
              : ''
          "
          class="px-6 py-2 flex gap-16 cursor-pointer hover:bg-lime-500 hover:bg-opacity-40"
          @click="toggleSelectedCategory('Proteínas')"
        >
          <div
            class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-lime-700 px-4 py-1"
          >
            <span> Proteínas </span>
          </div>
          <div>
            <!-- <CheckIcon v-if="isCategorySelected('Proteínas')" class="h-8 w-8 text-primary-lemon-dark relative z-10" /> -->
          </div>
        </li>
        <li
          :class="
            false
              ? 'bg-gray-300 dark:bg-lime-500 bg-opacity-40 dark:bg-opacity-40'
              : ''
          "
          class="px-6 py-2 flex gap-16 cursor-pointer hover:bg-lime-500 hover:bg-opacity-40"
          @click="toggleSelectedCategory('Minerais')"
        >
          <div
            class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-orange-700 px-4 py-1"
          >
            <span> Minerais </span>
          </div>
          <div>
            <!-- <CheckIcon v-if="isCategorySelected('Minerais')" class="h-8 w-8 text-secondary-orange-dark relative z-10" /> -->
          </div>
        </li>
        <li
          :class="
            false
              ? 'bg-gray-300 dark:bg-lime-500 bg-opacity-40 dark:bg-opacity-40'
              : ''
          "
          class="px-6 py-2 flex gap-16 cursor-pointer hover:bg-lime-500 hover:bg-opacity-40"
          @click="toggleSelectedCategory('Ômega-3')"
        >
          <div
            class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-lime-950 dark:bg-lime-500 px-4 py-1"
          >
            <span> Ômega-3 </span>
          </div>
          <div>
            <!-- <CheckIcon v-if="isCategorySelected('Ômega-3')" class="h-8 w-8 text-primary-olivia-dark relative z-10" /> -->
          </div>
        </li>
        <li
          class="px-6 py-2 rounded-b-xl flex items-center justify-start cursor-pointer hover:bg-lime-500 hover:bg-opacity-40"
          @click="removeFilter"
        >
          <div
            class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-slate-500 dark:bg-slate-700 px-4 py-1"
          >
            <span> Listar todas </span>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>