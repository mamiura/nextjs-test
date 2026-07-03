import { cookies, headers } from 'next/headers'

export default async function DynamicPage() {
  const cookieStore = await cookies()
  const headersList = await headers()

  const theme = cookieStore.get('theme')?.value ?? 'not set'
  const userAgent = headersList.get('user-agent') ?? 'unknown'
  const renderedAt = new Date().toISOString()

  return (
    <main>
      <h1>Dynamic Page</h1>
      <p>Rendered at: {renderedAt}</p>
      <p>Theme cookie: {theme}</p>
      <p>User-Agent: {userAgent}</p>
      <p>
        This route calls cookies() and headers() — both are Request-time
        APIs, so Next.js can&apos;t prerender it. It&apos;s rendered fresh on
        the server for every single request.
      </p>
    </main>
  )
}
