import { Router } from 'express'
import { getFeaturedRepos, toProject } from '../github.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const repos = await getFeaturedRepos()
    const projects = repos.map((r) => ({
      ...toProject(r),
      id: `gh-${r.id}`,
      source: 'github',
    }))
    res.json({ count: projects.length, source: 'github', projects })
  } catch (err) {
    console.warn('GitHub fetch failed:', err.message)
    res.json({ count: 0, source: 'github', projects: [], error: err.message })
  }
})

export default router