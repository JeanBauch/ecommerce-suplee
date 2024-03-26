<template>
  <div class="flex flex-1 flex-col md:flex-row w-full gap-3 md:gap-6 mt-3 md:mt-2 xl:mt-4 2xl:mt-6 relative">
    <CardsPreviewProductImages :currentCategory="'Vitaminas'" :images="[]" />
    <div class="flex w-full md:w-8/12 2xl:w-7/12">
      <div class="flex flex-1 w-full flex-col-reverse xl:flex-row">
        <CardsProductDetails />
        <CardsProductPurchaseCallToAction />
      </div>
    </div>
  </div>
</template>