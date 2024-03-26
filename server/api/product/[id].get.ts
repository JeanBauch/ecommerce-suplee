import { produtos } from "~/server/database/data"

// GET By ID /api/product/[1]
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const response = produtos.filter(product => product.id === id).pop()

  return response;
})
