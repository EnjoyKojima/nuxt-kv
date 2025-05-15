export default defineCachedEventHandler(async (_event) => {
  // 5秒待機する
  await new Promise(resolve => setTimeout(resolve, 5000))
  // タイムスタンプを返す
  return {
    timestamp: new Date().toISOString(),
  }
}, {
  // キャッシュの有効期限を10秒に設定
  maxAge: 10,
})
