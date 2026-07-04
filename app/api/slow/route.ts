export async function GET() {
  console.log(`[slow] start: ${new Date().toISOString()}`)

  // Simulating a slow external call (e.g. a third-party API or DB query)
  await new Promise((resolve) => setTimeout(resolve, 3000))

  console.log(`[slow] end: ${new Date().toISOString()}`)

  return Response.json({ ok: true })
}
