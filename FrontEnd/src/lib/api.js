export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) throw new Error(`Request failed (${res.status})`)
  return res.json()
}

function networkError(err) {
  if (err instanceof TypeError) {
    return new Error('Cannot reach the backend. Is it running? (cd BackEnd && npm run dev)')
  }
  return err
}

export async function apiPost(path, body) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    let data = {}
    try {
      data = await res.json()
    } catch {
      // ignore unparseable bodies; res.ok still decides success below
    }

    if (!res.ok) {
      throw new Error(data.error || 'Request failed. Please try again.')
    }

    return data
  } catch (err) {
    throw networkError(err)
  }
}