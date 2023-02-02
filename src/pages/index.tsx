import { type NextPageWithLayout } from "./_app";
import { ReactElement, useState } from "react";
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
import { Scene } from "../components/planets/AstralBody"

const astralBodies = [
  {
    src: "/mercury.jpg",
    size: 2,
  },
  {
    src: "/venus.jpg",
    size: 2,
  },
  {
    src: "/earth.jpg",
    size: 2,
  },
  {
    src: "/mars.jpg",
    size: 2,
  },
  {
    src: "/jupiter.jpg",
    size: 2,
  },
  {
    src: "/saturn.jpg",
    size: 2,
  },
  {
    src: "/uranus.jpg",
    size: 2,
  },
  {
    src: "/neptune.jpg",
    size: 2,
  },
]

const Home: NextPageWithLayout = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [isOn, setOn] = useState(0)

  const { data } = api.planets.allPlanets.useQuery(["isPlanet,eq,true"]);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  console.log({ isOn })

  return (
      <div className="w-full max-w-4xl px-2 py-8 sm:px-0">
        <Tab.Group selectedIndex={isOn} onChange={setOn}>
          <Tab.List className="flex justify-between px-5 rounded-xl bg-blue-900/20 p-1 text-white ">
            <Tab className="hover:text-indigo-500">Sun</Tab>
            {/* <Tab className="hover:text-indigo-500 h-20 w-20">
            <Scene src="/mercury.jpg" size={2} />
            </Tab> */}
            {astralBodies.map((body) => (
              <Tab key={body.src} className="hover:text-indigo-500 h-20 w-20">
                {({ selected }) => <Scene src={body.src} size={body.size} selected={selected} />}
              </Tab>
              ))
            }
            {/* <Tab className="hover:text-indigo-500 h-20 w-20">
            <Scene src="/earth.jpg" size={2} />
            </Tab>
            <Tab className="hover:text-indigo-500 h-20 w-20">
            <Scene src="/mars.jpg" size={2} />
            </Tab>
            <Tab className="hover:text-indigo-500 h-20 w-20">
            <Scene src="/jupiter.jpg" size={2} />
            </Tab>
            <Tab className="hover:text-indigo-500 h-20 w-20">
            <Scene src="/saturn.jpg" size={2} />
            </Tab>
            <Tab className="hover:text-indigo-500 h-20 w-20">
            <Scene src="/uranus.jpg" size={2} />
            </Tab>
            <Tab className="hover:text-indigo-500 h-20 w-20">
              <Scene src="/neptune.jpg" size={2} />
            </Tab> */}
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
