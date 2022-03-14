import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../../styles/pages/Home'

export default function MovieItem({info}) {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>{info.title}</h1>

        <p>Nota: {info.vote_average}</p>

        <p>{info.overview} </p>

        <img
          src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`}
          width="400"
        />

      </main>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`)
  const json = await res.json()

  // console.log("JSON", json)

  return {
    props: {
      info: json.info
    }
  }
}



