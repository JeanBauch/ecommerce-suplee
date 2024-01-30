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
]
</script>

<template>
  <UDropdown id="headlessui-menu-button-1" mode="hover" :items="items" :ui="{
    item: { disabled: 'cursor-text select-text' }, background: 'bg-white dark:bg-slate-800',
  }">
    <UIcon name="i-heroicons-user-circle-solid" class="h-10 w-10 text-white md:text-current relative z-10" />

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
</template>