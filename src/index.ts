import express, { type Express } from 'express'
import 'dotenv/config'
import appMiddleware from './middlewares'

// comment/uncomment to enable/disable db
// import './configs/db'

const app: Express = express()
const port: number = process.env.PORT != null ? parseInt(process.env.PORT) : 5000

app.use(appMiddleware)

app.listen(port, () => {
  console.log(`Server is running at port ${port}`)
})
