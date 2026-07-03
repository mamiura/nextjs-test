import { Suspense } from 'react'

// Suspense alone doesn't opt a route into dynamic rendering — without a
// Request-time API, Next would resolve these awaits once at build time and
// serve the result as static HTML, defeating the point of this exercise.
export const dynamic = 'force-dynamic'

export default function StreamingPage() {
  return (
    <main>
      <h1>Product</h1>
      <p>Shell content — renders instantly, no delay.</p>

      <Suspense fallback={<PriceSkeleton />}>
        <Price />
      </Suspense>

      <Suspense fallback={<RecommendationsSkeleton />}>
        <Recommendations />
      </Suspense>
    </main>
  )
}

function PriceSkeleton() {
  return <p>Loading price…</p>
}

async function Price() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return <p>Price: $49.99</p>
}

function RecommendationsSkeleton() {
  return <p>Loading recommendations…</p>
}

async function Recommendations() {
  await new Promise((resolve) => setTimeout(resolve, 4000))
  return (
    <ul>
      <li>Recommended item 1</li>
      <li>Recommended item 2</li>
      <li>Recommended item 3</li>
    </ul>
  )
}
