import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { key, value } = await zh.useValidatedBody(event, z.object({
    key: z.string(),
    value: z.string(),
  }))

  const storage = useStorage('kv')
  await storage.setItem(key, value)
})
