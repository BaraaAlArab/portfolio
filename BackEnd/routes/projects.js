import { Router } from 'express'
import projects from '../data/projects.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({ count: projects.length, projects })
})

export default router
