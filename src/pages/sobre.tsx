import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'

export default function Home({author}) {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Sobre o sistema</h1>

        O sistema foi construído para demonstrar os primeiros passos com o framework Next.js

        <hr/>
        Autor: {author}

        <Link href="/busca">Ir para a Busca</Link>

      </main>
    </Container>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/trending`)
  const json = await res.json()
  return {
    props: {
      author: 'Carlos Brazil'
    }
  }
}



