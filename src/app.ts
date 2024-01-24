import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import helmet from 'helmet'
import router from './routers'
const app = express()

app.use(cors())
app.use(helmet())

app.use(router)

export default app