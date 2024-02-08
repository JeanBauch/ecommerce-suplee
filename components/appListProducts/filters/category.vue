<script setup lang="ts">
const categoryEmit = defineEmits<{
  changeSelected: [category: Categories];
  clearSelected: [void];
}>();

const categorySelected = ref<Categories | null>(null);

function handleToggleCategory(category: Categories) {
  if (isCategorySelected(category)) return;

  categorySelected.value = category;
  categoryEmit("changeSelected", category);
}

function handleClearFilterCategory() {
  if (categorySelected.value === null) return;

  categorySelected.value = null;
  categoryEmit("clearSelected");
}

function isCategorySelected(category: Categories) {
  return category === categorySelected.value;
}
</script>

<template>
  <div class="bg-white dark:bg-slate-950 rounded-xl w-64 shadow-lg mt-14">
    <div class="px-6 py-4 border-b border-b-gray-300 dark:border-b-gray-600">
      <h3 class="text-xl font-medium">Categorias</h3>
    </div>
    <nav>
      <ul class="text-base font-light flex flex-col text-white">
        <li>
          <UButton
            variant="link"
            color="white"
            :class="
              isCategorySelected('Vitaminas')
                ? 'bg-lime-800/50 dark:bg-lime-500/20'
                : ''
            "
            class="flex flex-1 w-full justify-between px-6 py-2 gap-16 cursor-pointer rounded-none hover:no-underline hover:bg-lime-800/50 hover:dark:bg-lime-500/20"
            @click="handleToggleCategory('Vitaminas')"
          >
            <div
              class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-green-700 px-4 py-1"
            >
              <span> Vitaminas </span>
            </div>
            <UIcon
              v-show="isCategorySelected('Vitaminas')"
              name="i-heroicons-check-20-solid"
              class="size-6 text-lime-900 dark:text-lime-400"
            />
          </UButton>
        </li>
        <li>
          <UButton
            variant="link"
            color="white"
            :class="
              isCategorySelected('Proteínas')
                ? 'bg-lime-800/50 dark:bg-lime-500/20'
                : ''
            "
            class="flex flex-1 w-full justify-between px-6 py-2 gap-16 cursor-pointer rounded-none hover:no-underline hover:bg-lime-800/50 hover:dark:bg-lime-500/20"
            @click="handleToggleCategory('Proteínas')"
          >
            <div
              class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-lime-700 px-4 py-1"
            >
              <span> Proteínas </span>
            </div>
            <UIcon
              v-show="isCategorySelected('Proteínas')"
              name="i-heroicons-check-20-solid"
              class="size-6 text-lime-900 dark:text-lime-400"
            />
          </UButton>
        </li>
        <li>
          <UButton
            variant="link"
            color="white"
            :class="
              isCategorySelected('Minerais')
                ? 'bg-lime-800/50 dark:bg-lime-500/20'
                : ''
            "
            class="flex flex-1 w-full justify-between px-6 py-2 gap-16 cursor-pointer rounded-none hover:no-underline hover:bg-lime-800/50 hover:dark:bg-lime-500/20"
            @click="handleToggleCategory('Minerais')"
          >
            <div
              class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-orange-700 px-4 py-1"
            >
              <span> Minerais </span>
            </div>
            <UIcon
              v-show="isCategorySelected('Minerais')"
              name="i-heroicons-check-20-solid"
              class="size-6 text-lime-900 dark:text-lime-400"
            />
          </UButton>
        </li>
        <li>
          <UButton
            variant="link"
            color="white"
            :class="
              isCategorySelected('Ômega-3')
                ? 'bg-lime-800/50 dark:bg-lime-500/20'
                : ''
            "
            class="w-full rounded-none px-6 py-2 flex flex-1 justify-between gap-16 cursor-pointer hover:no-underline hover:bg-lime-800/50 hover:dark:bg-lime-500/20"
            @click="handleToggleCategory('Ômega-3')"
          >
            <div
              class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-lime-950 dark:bg-lime-500 px-4 py-1"
            >
              <span> Ômega-3 </span>
            </div>
            <UIcon
              v-show="isCategorySelected('Ômega-3')"
              name="i-heroicons-check-20-solid"
              class="size-6 text-lime-900 dark:text-lime-400"
            />
          </UButton>
        </li>
        <li>
          <UButton
            variant="link"
            color="white"
            class="w-full rounded-none px-6 py-2 rounded-b-xl flex flex-1 items-center justify-start cursor-pointer hover:no-underline hover:bg-lime-800/50 hover:dark:bg-lime-500/20"
            @click="handleClearFilterCategory"
          >
            <div
              class="flex items-center rounded-full bg-opacity-80 dark:bg-opacity-50 bg-slate-500 dark:bg-slate-700 px-4 py-1"
            >
              <span> Listar todas </span>
            </div>
          </UButton>
        </li>
      </ul>
    </nav>
  </div>
</template>