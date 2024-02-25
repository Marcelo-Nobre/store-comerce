import data from '../data.json'

export async function GET() {
  const featiredProducts = data.products.filter((product) => product.featured)
  return Response.json(featiredProducts)
}
