import { type NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import { Layout } from "../components/layout"
import { api } from "../utils/api";
import React from "react";
import { Tab } from "@headlessui/react";
import {
  SunContent,
  MercuryContent,
  VenusContent,
  EarthContent,
  MarsContent,
  JupiterContent,
  SaturnContent,
  UranusContent,
  NeptuneContent,
} from "../components/content/";

const Home: NextPageWithLayout = () => {
  const { data } = api.planets.allPlanets.useQuery(["isPlanet,eq,true"]);
  console.log({ data })

  return (
      // // <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      //   <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      //     <section className="text-left">
      //       <p className="text-2xl mb-4">Our Planets ya dumbass kids</p>
      //       <ul className="list-disc">
      //         {data ? data.bodies.map(body => <li key={body.id}>{body.englishName}</li>) : null}
      //       </ul>
      //     </section>
      //   </div>
      <div className="w-full max-w-4xl px-2 py-8 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex justify-between px-5 rounded-xl bg-blue-900/20 p-1 text-white ">
            <Tab className="hover:text-indigo-500">Sun</Tab>
            <Tab className="hover:text-indigo-500">Mercury</Tab>
            <Tab className="hover:text-indigo-500">Venus</Tab>
            <Tab className="hover:text-indigo-500">Earth</Tab>
            <Tab className="hover:text-indigo-500">Mars</Tab>
            <Tab className="hover:text-indigo-500">Jupiter</Tab>
            <Tab className="hover:text-indigo-500">Saturn</Tab>
            <Tab className="hover:text-indigo-500">Uranus</Tab>
            <Tab className="hover:text-indigo-500">Neptune</Tab>
          </Tab.List>
          <Tab.Panels className="text-white">
            <Tab.Panel><SunContent /></Tab.Panel>
            <Tab.Panel><MercuryContent /></Tab.Panel>
            <Tab.Panel><VenusContent /></Tab.Panel>
            <Tab.Panel><EarthContent /></Tab.Panel>
            <Tab.Panel><MarsContent /></Tab.Panel>
            <Tab.Panel><JupiterContent /></Tab.Panel>
            <Tab.Panel><SaturnContent /></Tab.Panel>
            <Tab.Panel><UranusContent /></Tab.Panel>
            <Tab.Panel><NeptuneContent /></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
    )
}

export default Home;
