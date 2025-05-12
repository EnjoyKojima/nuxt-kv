export default defineEventHandler(async (_event) => {
  const storage = useStorage<string>('kv')
  const keys = await storage.keys()

  return { keys }
})
