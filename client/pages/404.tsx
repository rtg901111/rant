import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import * as $ from "@styles/pages/404.styles"

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>404: Not Found</title>
      </Head>
      <$.Container>
        <$.Title>404</$.Title>
        <$.Subtitle>Not Found</$.Subtitle>
        <Link href="/" passHref>
          <$.HomeButton>Go Home</$.HomeButton>
        </Link>
      </$.Container>
    </>
  )
}

export default NotFound
