export default defineRenderHandler(async (event) => {
  const query = getQuery(event)
  const title = query.title as string || 'タイトル'
  const message = query.message as string || 'メッセージ'

  return {
    body: `<html>
      <head>
        <title>${title}</title>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${message}</p>
      </body>
    </html>`,
  }
})
