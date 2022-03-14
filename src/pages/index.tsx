import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'

export default function Home({list}) {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Filmes em Destaque</h1>

        <Link href="/busca">Ir para a Busca</Link>

        <ul>
          {list.map(item => (
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

        <Link href="/sobre">Sobre mim</Link>
      </main>
    </Container>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/trending`)
  const json = await res.json()
  return {
    props: {
      list: json.list
    }
  }
}



