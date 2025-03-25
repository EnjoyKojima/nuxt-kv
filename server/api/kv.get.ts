export default defineEventHandler(async () => {
  const storage = useStorage('kv')
  const value = await storage.getItem('test')
  return { value }
})
