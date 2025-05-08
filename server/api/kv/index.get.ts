export default defineEventHandler(async (_event) => {
  const storage = useStorage()
  const keys = await storage.keys()
  return { keys }
})
