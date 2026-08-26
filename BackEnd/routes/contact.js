import { Router } from 'express'
import { sendContactNotification } from '../mailer.js'

const router = Router()
const messages = []

router.post('/', async (req, res) => {
  const { name, email, message } = req.body ?? {}

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    return res.status(400).json({ ok: false, error: 'Name must be at least 2 characters.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: 'A valid email is required.' })
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    return res.status(400).json({ ok: false, error: 'Message must be at least 10 characters.' })
  }

  const submission = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  }
  messages.push(submission)
  console.log('New contact message:', JSON.stringify(submission, null, 2))

  let emailSent = false
  try {
    emailSent = await sendContactNotification(submission)
    if (emailSent) console.log(`Email notification sent via Web3Forms`)
  } catch (err) {
    console.error('Email failed:', err.message)
  }

  res.status(201).json({ ok: true, emailSent, message: 'Thanks! Your message was received.' })
})

router.get('/', (req, res) => {
  res.json({ count: messages.length, messages })
})

export default router
