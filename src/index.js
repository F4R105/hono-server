import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(cors())

app.post('/api', async (c) => {
  return c.json(data)
})

export default app
