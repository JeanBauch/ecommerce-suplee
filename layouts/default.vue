<template>
  <div class="bg-slate-300 dark:bg-slate-900 min-h-screen flex flex-col">
    <header>
      <AppHeader />
    </header>
    <main class="flex flex-1">
      <slot />
    </main>
  </div>
</template>