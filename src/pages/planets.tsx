import { type NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { Layout } from "../components/layout"

import { api } from "../utils/api";
import React from "react";

const Planets: NextPageWithLayout = () => {
  const { data } = api.planets.allPlanets.useQuery(["isPlanet,eq,true"]);
  console.log({ data })

  return (
      // <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <p>planets</p>
  );
};

Planets.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
    )
}

export default Planets;