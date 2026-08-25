import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import contactRouter from './routes/contact.js'
import projectsRouter from './routes/projects.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

app.use('/api/contact', contactRouter)
app.use('/api/projects', projectsRouter)

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})
