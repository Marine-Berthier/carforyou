import React from "react"
import Head from "next/head"

import "~/assets/styles/globals.css"
// Local Import
import "./form.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>CAR FOR YOU coding challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-3 xl:m-auto max-w-screen-xl">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
