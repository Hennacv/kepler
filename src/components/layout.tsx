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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {children}
      </main>
    </>
  )
}