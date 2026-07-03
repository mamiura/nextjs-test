export const revalidate = 30

export default function ISRPage() {
  const renderedAt = new Date().toISOString()

  return (
    <main>
      <h1>ISR Page</h1>
      <p>Rendered at: {renderedAt}</p>
      <p>
        revalidate = 30: this page is prerendered like /static, but Next.js
        will regenerate it in the background at most once every 30 seconds,
        the first time a request comes in after that window has elapsed.
      </p>
    </main>
  )
}
