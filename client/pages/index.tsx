import type { NextPage } from "next"
import Head from "next/head"
import * as $ from "@styles/pages/index.styles"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rant</title>
      </Head>
      <$.Container>Home</$.Container>
    </>
  )
}

export default Home
