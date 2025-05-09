import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  const { key } = await zh.useValidatedBody(event, z.object({
    key: z.string(),
  }))

  await event.context.cloudflare.env.KV.delete(key)
})
