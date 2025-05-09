export default defineEventHandler(async (event) => {
  const keys = await event.context.cloudflare.env.KV.list()
  return { keys }
})
