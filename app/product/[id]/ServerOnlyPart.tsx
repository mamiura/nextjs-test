import { getProduct } from './data'

export default async function ServerOnlyPart() {
  const product = await getProduct('debug')

  return (
    <span style={{ fontSize: '0.8em', opacity: 0.6 }}>
      (fetched server-side: {product.name})
    </span>
  )
}
