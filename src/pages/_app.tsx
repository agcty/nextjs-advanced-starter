import { AppProps } from "next/app"
import React from "react"
import "../styles/tailwind.scss"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
