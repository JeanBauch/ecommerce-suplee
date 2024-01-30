<script setup lang="ts">
const items = [
  [{
    label: 'jean@example.com',
    slot: 'account',
    disabled: true
  }], [{
    label: 'Editar meu perfil',
    icon: 'i-heroicons-pencil-square'
  }, {
    label: 'Histórico de compras',
    icon: 'i-heroicons-shopping-bag'
  },], [{
    label: 'Sair',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
];

const uiConfigButton = {
  padding: {
    '2xs': 'px-1 py-1',
    xs: 'px-1.5 py-1.5',
    sm: 'px-1.5 py-1.5',
    md: 'px-2 py-2',
    lg: 'px-2.5 py-2.5',
    xl: 'px-2.5 py-2.5'
  }
};
</script>

<template>
  <ClientOnly>
    <UDropdown id="headlessui-menu-button-1" mode="hover" :items="items" :ui="{
      item: { disabled: 'cursor-text select-text' },
    }">
      <UButton color="gray" variant="ghost" aria-label="Meu perfil" :ui="uiConfigButton"
        class="hover:bg-lime-800 hover:bg-opacity-10 hover:dark:bg-opacity-100">
        <UIcon name="i-heroicons-user-circle-20-solid"
          class="h-7 w-7 relative z-10 text-lime-50 md:text-lime-800 dark:text-lime-500" />
      </UButton>

      <template #account="{ item }">
        <div class="text-left">
          <p>
            Conectado como
          </p>
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>

      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>

        <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
      </template>
    </UDropdown>

    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>