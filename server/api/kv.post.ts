export default defineEventHandler(async (event) => {
  const storage = useStorage('kv')
  const body = await readBody(event)
  await storage.setItem(body.key, body.value)
  return { ok: true }
})
