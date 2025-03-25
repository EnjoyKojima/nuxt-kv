export default defineEventHandler(async (event) => {
  const storage = useStorage('kv')
  const body = await readBody(event)
  await storage.removeItem(body.key)
  return { ok: true }
})
