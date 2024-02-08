
<template>
  <div
    class="w-full h-[19rem] lg:h-[25rem] flex justify-center items-end mt-10 lg:mt-6"
  >
    <div
      class="w-[95%] h-full px-4 lg:px-5 bg-white dark:bg-slate-950 dark:border dark:border-slate-800 relative z-20 rounded-xl shadow-md hover:shadow-xl cursor-pointer"
    >
      <div class="flex justify-center relative">
        <USkeleton
          class="w-24 h-24 lg:w-32 lg:h-32 my-4 rounded-xl bg-gray-200"
        />
      </div>
      <article class="relative z-30 mt-1">
        <USkeleton class="mb-1 w-full h-6 lg:h-8 bg-gray-200"></USkeleton>

        <div class="w-full flex flex-col justify-center items-center gap-3">
          <USkeleton
            class="flex justify-center items-center px-2 py-[1px] rounded-full w-20 h-4 lg:w-24 lg:h-6 bg-gray-200"
          />

          <USkeleton
            class="flex items-center w-full justify-between h-8 lg:h-12 bg-gray-200"
          ></USkeleton>
        </div>
        <div class="flex justify-between items-center mt-3 md:mt-5 gap-4">
          <USkeleton class="w-full h-10 lg:h-12 bg-gray-200"></USkeleton>
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
