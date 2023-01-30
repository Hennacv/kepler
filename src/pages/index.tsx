import { type NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { Layout } from "../components/layout"

import { api } from "../utils/api";
import React from "react";

const Home: NextPageWithLayout = () => {
  const { data } = api.planets.allPlanets.useQuery(["isPlanet,eq,true"]);
  console.log({ data })

  return (
      // <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <section className="text-left">
            <p className="text-2xl mb-4">Our Planets ya dumbass kids</p>
            <ul className="list-disc">
              {data ? data.bodies.map(body => <li key={body.id}>{body.englishName}</li>) : null}
            </ul>
          </section>
        </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
    )
}

export default Home;
