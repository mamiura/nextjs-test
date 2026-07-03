export default function StaticPage() {
  const renderedAt = new Date().toISOString()

  return (
    <main>
      <h1>Static Page</h1>
      <p>Rendered at: {renderedAt}</p>
      <p>
        Plain Server Component, no cookies/headers/searchParams, no uncached
        fetch. In production this timestamp should stay identical across
        requests — it was baked into the HTML once at build time.
      </p>
    </main>
  )
}
