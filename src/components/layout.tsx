import Head from "next/head";
import { type PropsWithChildren } from "react";
import { Navbar } from "../components/Navbar"

export function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <title>Kepler</title>
        <meta name="description" content="Space website for kids" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="-top-1 fixed z-30">
        <Navbar />
        <div className="h-1 w-screen bg-gradient-to-r from-rose-600 via-violet-800 to-blue-800"/>
      </header>
      <main className="flex min-h-screen flex-col items-center bg-[url('/stars_mw.jpg')] bg-cover bg-center">
        {children}
      </main>
    </>
  )
}