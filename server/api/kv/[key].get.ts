import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { key } = await zh.useValidatedParams(event, z.object({
    key: z.string(),
  }))

  const storage = useStorage<string>('kv')
  const value = await storage.get(key)

  return { value }
})
