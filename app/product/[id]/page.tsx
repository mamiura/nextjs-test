import LikeButton from './LikeButton'
import ServerOnlyPart from './ServerOnlyPart'
import { getProduct } from './data'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <main>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <LikeButton initialLikes={product.likes}>
        <ServerOnlyPart />
      </LikeButton>
    </main>
  )
}
