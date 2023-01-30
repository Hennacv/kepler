import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (home: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const getLayout = Component.getLayout ?? ((page: any) => page);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return getLayout(<Component {...pageProps} />)
};

export default api.withTRPC(MyApp);
