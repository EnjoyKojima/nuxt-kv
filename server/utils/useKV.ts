import type { H3Event } from 'h3'

export default function useKV(event: H3Event) {
  const kv = event.context.cloudflare.env.KV

  return {
    get: async (
      key: string,
      options?: Partial<KVNamespaceGetOptions<undefined>>,
    ) => {
      return kv.getWithMetadata(key, options)
    },
    set: async (
      key: string,
      value: string | ArrayBuffer | ArrayBufferView | ReadableStream,
      options?: KVNamespacePutOptions,
    ) => {
      return await kv.put(key, value, options)
    },
    delete: async (key: string) => {
      return await kv.delete(key)
    },
    list: async (options?: KVNamespaceListOptions) => {
      return await kv.list(options)
    },
  }
}
