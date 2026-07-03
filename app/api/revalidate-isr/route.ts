import { revalidatePath } from 'next/cache'

export async function GET() {
  revalidatePath('/isr')
  return Response.json({ revalidated: true, now: Date.now() })
}
