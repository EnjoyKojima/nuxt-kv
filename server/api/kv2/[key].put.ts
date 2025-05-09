import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { key } = await zh.useValidatedParams(event, z.object({
    key: z.string(),
  }))
  const { value } = await zh.useValidatedBody(event, z.object({
    value: z.string(),
  }))

  await event.context.cloudflare.env.KV.put(key, value)
})
