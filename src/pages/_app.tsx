import React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Andika, Anek_Malayalam } from "@next/font/google"

import { api } from "../utils/api";

import "../styles/globals.css";

const andika = Andika({
  weight: "400",
  variable: "--font-andika",
  subsets: ['latin']
})

const anek = Anek_Malayalam({
  weight: "400",
  variable: "--font-anek",
  subsets: ['latin']
})


export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (home: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-explicit-any
  const getLayout = Component.getLayout ?? ((page: any) => page);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return getLayout(
    <>
      <style jsx global>
        {`
          :root {
            --andika-font: ${andika.style.fontFamily};
            --anek-font: ${anek.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
};

export default api.withTRPC(MyApp);
