<template>
  <!-- bgHero -->
  <div class="bg-slate-300 dark:bg-slate-900  h-full w-full absolute z-[-1] overflow-hidden invisible md:visible">
    <div
      class="absolute -left-24 top-0 h-64 w-64 rounded-full bg-orange-300 dark:bg-orange-950 bg-opacity-50 blur-[200px]" />
    <div class="absolute left-16 top-24 h-64 w-64 rounded-full bg-blue-300 dark:hidden blur-[200px]" />
    <div
      class="absolute -right-24 top-0 h-64 w-64 rounded-full bg-orange-300 dark:bg-orange-950 bg-opacity-50 blur-[200px]" />
    <div
      class="bg-[url('/bg-complement/bg-hero.svg')] bg-center bg-no-repeat w-full h-full 2xl:max-h-[1080px] absolute" />
  </div>
</template>