import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Resend } from 'resend'

const app = new Hono()

app.use(cors())

app.post('/send/email', async (c) => {
  const resend = new Resend(c.env.RESEND_API_KEY)
  const data = await resend.emails.send(
    {
      from: "Acme <onboarding@resend.dev>",
      to: "example@email.com",
      subject: "Hello from fari's cf worker",
      html: "<p>Test successfull</p>"
    }
  )

  return c.json(data)
})

export default app
