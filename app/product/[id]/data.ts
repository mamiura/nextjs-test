import 'server-only'

export type Product = {
  id: string
  name: string
  price: number
  description: string
  likes: number
}

export async function getProduct(id: string): Promise<Product> {
  // Simulated network/DB latency
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    id,
    name: `Product ${id}`,
    price: 29.99,
    description: `This is the mock description for product ${id}.`,
    likes: 12,
  }
}
