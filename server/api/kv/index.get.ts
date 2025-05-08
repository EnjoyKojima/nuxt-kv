export default defineEventHandler(async (_event) => {
  const storage = useStorage('kv')
  const keys = await storage.keys()
  return { keys }
})
