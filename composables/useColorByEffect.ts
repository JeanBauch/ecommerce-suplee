type TypeCss = "text" | "stroke";

export const useColorByEffect = (effect: Effects, typeCss: TypeCss) => {

  const colorObject = {
    "Imunidade": {
      text: "text-green-700 dark:text-green-500",
      stroke: "stroke-green-700 dark:stroke-green-500"
    },
    "Fortalecimento Muscular": {
      text: "text-lime-700 dark:text-lime-600",
      stroke: "stroke-lime-700 dark:stroke-lime-600"
    },
    "Fortificação Óssea": {
      text: "text-orange-700 dark:text-orange-500",
      stroke: "stroke-orange-700 dark:stroke-orange-500"
    },
    "Memória": {
      text: "text-lime-800 dark:text-lime-300",
      stroke: "stroke-lime-800 dark:stroke-lime-300"
    },
    "Vitamina D": {
      text: "text-orange-600 dark:text-orange-500",
      stroke: "stroke-orange-600 dark:stroke-orange-500 fill-orange-600 dark:fill-orange-500"
    },
    "Relaxante": {
      text: "text-gray-500 dark:text-gray-200",
      stroke: "stroke-gray-500 dark:stroke-gray-200"
    }
  }

  return colorObject[effect][typeCss]
};
