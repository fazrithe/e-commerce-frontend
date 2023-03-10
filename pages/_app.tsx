import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Link from 'next/link';
import Navbar from "@/components/home/Navbar"
import Footer from '@/components/home/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
         {/* eslint-disable-next-line @next/next/no-css-tags */}
         <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
     </Head>
     
     <Navbar />
        <Component {...pageProps} />
       {/* credits */}
      <Footer />
  </>
  )
}
