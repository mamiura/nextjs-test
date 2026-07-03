export async function GET() {
  const res = await fetch('https://api.vercel.app/blog')
  const posts = await res.json()

  return Response.json(posts)
}
