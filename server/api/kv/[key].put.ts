import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { key } = await zh.useValidatedParams(event, z.object({
    key: z.string(),
  }))
  const { value } = await zh.useValidatedBody(event, z.object({
    value: z.string(),
  }))

  const storage = useStorage<string>('kv')
  event.context.cloudflare.context.waitUntil(
    storage.set(key, value),
  )
})
