const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'BaraaAlArab'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''
const CACHE_TTL_MS = 10 * 60 * 1000

const cache = {
  user: null,
  userFetchedAt: 0,
  repos: null,
  reposFetchedAt: 0,
}

function headers() {
  return {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'baraa-portfolio',
    ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
  }
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: headers() })
  if (!res.ok) throw new Error(`GitHub request failed (${res.status})`)
  return res.json()
}

function prettify(name) {
  return name
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

async function fetchRepos() {
  return fetchJson(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
  )
}

async function fetchUser() {
  return fetchJson(`https://api.github.com/users/${GITHUB_USERNAME}`)
}

export async function getUser() {
  const now = Date.now()
  if (cache.user && now - cache.userFetchedAt < CACHE_TTL_MS) return cache.user
  const user = await fetchUser()
  cache.user = user
  cache.userFetchedAt = now
  return user
}

export async function getRepos() {
  const now = Date.now()
  if (cache.repos && now - cache.reposFetchedAt < CACHE_TTL_MS) return cache.repos
  const repos = await fetchRepos()
  cache.repos = repos
  cache.reposFetchedAt = now
  return repos
}

export async function getFeaturedRepos() {
  const repos = await getRepos()
  return repos.filter((r) => !r.fork && (r.description || isLiveUrl(r.homepage)))
}

export function isLiveUrl(value) {
  return typeof value === 'string' && /^https?:\/\/\S+$/.test(value.trim())
}

export function toProject(repo) {
  const demoLink = isLiveUrl(repo.homepage) ? repo.homepage.trim() : null
  return {
    id: repo.id,
    title: prettify(repo.name),
    description: repo.description,
    tech: [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 6),
    codeLink: repo.html_url,
    demoLink,
    stars: repo.stargazers_count || 0,
    updatedAt: repo.updated_at,
  }
}

export { GITHUB_USERNAME }