import app from './src/app'

const port = app.get('port')

app.listen(port, () => {
  console.log(`Server ON http://localhost:${port}`)
})
