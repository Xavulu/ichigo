import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head> 
        <title>Ichigo 🍓</title>
      </Head>
      <Component {...pageProps} />
    </>

  )
}
export default MyApp
