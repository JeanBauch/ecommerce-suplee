<script setup lang="ts">
const mediumSearchProducts = ref("");
</script>

<template>
  <div class="relative w-full">
    <UInput
      size="xl"
      color="gray"
      placeholder="Digite aqui o produto que procura"
      v-model="mediumSearchProducts"
      name="mediumSearchProducts"
      padded
      :ui="{ icon: { trailing: { pointer: '' } } }"
    >
      <template #trailing>
        <div class="flex gap-2">
          <UButton
            v-show="mediumSearchProducts !== ''"
            color="gray"
            variant="link"
            icon="i-heroicons-x-mark-20-solid"
            :padded="false"
            @click="mediumSearchProducts = ''"
          />

          <UButton
            variant="ghost"
            icon="i-heroicons-magnifying-glass-20-solid"
            class="text-green-500 dark:text-green-500 hover:bg-green-300 hover:bg-opacity-40 hover:dark:bg-green-600 hover:dark:bg-opacity-20"
            :padded="true"
          />
        </div>
      </template>
    </UInput>
  </div>
</template>