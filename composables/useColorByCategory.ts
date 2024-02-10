type TypeCss = "backgroundBadge" | "background" | "text" | "border" | "ring";

export const useColorByCategory = (category: Categories, typeCss: TypeCss) => {

  const colorObject = {
    "Vitaminas": {
      backgroundBadge: "bg-green-700/20 dark:bg-slate-950 dark:border-2 dark:border-green-500",
      background: "bg-green-700 dark:bg-green-700/50",
      text: "text-green-700 dark:text-green-500",
      border: "border-green-700 dark:border-green-500",
      ring: "",
    },
    "Proteínas": {
      backgroundBadge: "bg-lime-700/30 dark:bg-slate-950 dark:border-2 dark:border-lime-600",
      background: "bg-lime-700 dark:bg-lime-700/50",
      text: "text-lime-700 dark:text-lime-600",
      border: "border-lime-700 dark:border-lime-600",
      ring: "",
    },
    "Minerais": {
      backgroundBadge: "bg-orange-700/20 dark:bg-slate-950 dark:border-2 dark:border-orange-500",
      background: "bg-orange-700 dark:bg-orange-700/40",
      text: "text-orange-700 dark:text-orange-500",
      border: "border-orange-700 dark:border-orange-500",
      ring: "",
    },
    "Ômega-3": {
      backgroundBadge: "bg-lime-950/20 dark:bg-slate-950 dark:border-2 dark:border-lime-300",
      background: "bg-lime-950 dark:bg-lime-950/80",
      text: "text-lime-950 dark:text-lime-300",
      border: "border-lime-950 dark:border-lime-300",
      ring: "",
    }
  }


  return colorObject[category][typeCss];
};
