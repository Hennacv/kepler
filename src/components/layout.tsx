import Head from "next/head";
import { Navbar } from "../components/Navbar"

export function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Kepler</title>
        <meta name="description" content="Space website for kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="flex min-h-screen flex-col items-center bg-[url('/stars_mw.jpg')] bg-cover">
        {children}
      </main>
    </>
  )
}