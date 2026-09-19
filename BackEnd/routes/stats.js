import { Router } from 'express'
import { getFeaturedRepos, getUser } from '../github.js'

const router = Router()

const START_YEAR = Number(process.env.START_YEAR || 2019)

function yearsExperience() {
  return Math.max(1, new Date().getFullYear() - START_YEAR)
}

router.get('/', async (req, res) => {
  try {
    const [user, featured] = await Promise.all([getUser(), getFeaturedRepos()])
    const stars = featured.reduce((sum, r) => sum + (r.stargazers_count || 0), 0)

    res.json({
      projects: featured.length,
      yearsExperience: yearsExperience(),
      followers: user.followers || 0,
      stars,
    })
  } catch (err) {
    console.warn('GitHub stats failed, using partial data:', err.message)
    res.json({
      projects: 0,
      yearsExperience: yearsExperience(),
      followers: 0,
      stars: 0,
    })
  }
})

export default router