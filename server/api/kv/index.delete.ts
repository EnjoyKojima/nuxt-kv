import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { key } = await zh.useValidatedBody(event, z.object({
    key: z.string(),
  }))

  const storage = useStorage('kv')
  await storage.removeItem(key)
})
