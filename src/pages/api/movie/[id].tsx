import { apiBase, apiKey } from '../../../lib/tmdb'

export default async (req, res) => {
  const result = await fetch(
    `${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`
  )
  const json = await result.json()

  // console.log(`${apiKey}`)

  res.status(200).json({
    info: json
  })
}
