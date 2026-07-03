export default async function StaticPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { debug } = await searchParams
  const renderedAt = new Date().toISOString()

  return (
    <main>
      <h1>Static Page</h1>
      <p>Rendered at: {renderedAt}</p>
      <p>debug param: {debug ?? 'none'}</p>
      <p>
        Plain Server Component, no cookies/headers, no uncached fetch — but
        now destructures searchParams at the top level.
      </p>
    </main>
  )
}
