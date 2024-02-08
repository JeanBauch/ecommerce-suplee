import { produtos } from "~/server/database/data"

// GET All Products /api/products/categoria?nomeCategoria=vitaminas&pagina=1&quantidade=6
export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  // Não possui query params
  if (!Object.keys(query).length) {
    return {
      produtos,
      quantidadeProdutosPeloFiltro: produtos.length
    }
  }

  // Realiza o filtro
  const page = Number(query.pagina ?? 1);
  const quantity = Number(query.quantidade ?? 8);
  const offset = (page - 1) * quantity;
  const category = query.nomeCategoria;
  let productsFilteredByCategory = produtos;
  if (category) {
    productsFilteredByCategory = produtos.filter(p => { return p.nomeCategoria === category })
  }
  const productsFiltered = productsFilteredByCategory.slice(offset, quantity + offset)

  const response = {
    produtos: productsFiltered,
    quantidadeProdutosPeloFiltro: category ? productsFiltered.length : produtos.length
  }
  return response

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 5000)
  // })
})
