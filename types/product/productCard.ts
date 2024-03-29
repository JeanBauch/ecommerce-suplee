export type ProductCard = {
  id: string;
  imagens: ImagensCardProduct[];
  nome: string;
  nomeCategoria: "Vitaminas" | "Proteínas" | "Minerais" | "Ômega-3";
  nomeEfeito: ListEffects;
  preco: number;
  descricao: string,
  composicao: string[]
  palavras_chave: string[]
};

export type ImagensCardProduct = {
  nomeImagem: string;
  urlImagemOriginal: string;
  urlImagemReduzida: string;
  urlImagemMaior: string;
};

export type responseProducts = {
  produtos: Array<ProductCard>;
  quantidadeProdutosPeloFiltro: number
};

type ListEffects = ("Imunidade" | "Fortalecimento Muscular" | "Fortificação Óssea" | "Memória" | "Vitamina D" | "Relaxante")[]
export type Categories = "Vitaminas" | "Proteínas" | "Minerais" | "Ômega-3";
export type Effects = "Imunidade" | "Fortalecimento Muscular" | "Fortificação Óssea" | "Memória" | "Vitamina D" | "Relaxante";

export type Filters = {
  categoriaSelecionada: Categories | null,
  efeitoSelecionado: Effects | null
} 