'use server'

export async function logLike() {
  console.log(`[Server Action] Like clicked at ${new Date().toISOString()}`)
}
