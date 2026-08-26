const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export async function sendContactNotification({ name, email, message }) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    console.warn('Email skipped: set WEB3FORMS_ACCESS_KEY in Render environment variables')
    return false
  }

  const res = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      name,
      email,
      message,
      subject: `New message from ${escapeHtml(name)} - Portfolio`,
    }),
  })

  const data = await res.json()
  if (!data.success) throw new Error(data.message || 'Web3Forms request failed')
  return true
}
