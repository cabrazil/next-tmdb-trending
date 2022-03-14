import React from 'react'
import { useState } from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

export default function Home({list}) {
  const [searchText, setSearchText] = useState('')
  const [movieList, setMovieList] = useState([])

  const handleSearch = async () => {
    if(searchText !== '') {
      const result = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
      const json = await result.json()

      setMovieList(json.list)
    }
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Busca</h1>

        <input
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>

        <hr/>

        <ul>
          {movieList.map(item => (
            <li>
            <a href={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                width="150"
              />
              <br/>
              {item.title}
            </a>
          </li>
          ))}

        </ul>

      </main>
    </Container>
  )
}




