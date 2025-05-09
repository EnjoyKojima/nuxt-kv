import { zh } from 'h3-zod'
import { z } from 'zod'

export default defineEventHandler(async (event) => {
  // Cloudflare Workers は DELETE をbodyで受け取ることができない
  // そのため、パラメータを取得する必要がある
  const { key } = await zh.useValidatedParams(event, z.object({
    key: z.string(),
  }))

  const storage = useStorage<string>('kv')
  event.context.cloudflare.context.waitUntil(
    storage.del(key),
  )
})
