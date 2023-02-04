import { type NextPageWithLayout } from "./_app";
import { type ReactElement, useState } from "react";
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
} from "../components/content/";
import { Content } from "../components/Content";
import { Scene, type Body } from "../components/planets/AstralBody"
import type { Planet } from "../../types";
import { content } from "../utils/content";
// import { getBody } from "@trpc/client/dist/links/internals/httpUtils";

const astralBodies: Body[] = [
  {
    name: "Mercury",
    src: "/mercury.jpg",
    size: 0.9,
    position: [0, 0, 0],
    rotationSpeed:88,
  },
  {
    name: "Venus",
    src: "/venus.jpg",
    size: 1.4,
    position: [0, 0, 0],
    rotationSpeed: 243,
  },
  {
    name: "Earth",
    src: "/earth.jpg",
    size: 1.5,
    position: [0, 0, 0],
    rotationSpeed: 23.5,

  },
  {
    name: "Mars",
    src: "/mars.jpg",
    size: 1.2,
    position: [0, 0, 0],
    rotationSpeed: 24.6,

  },
  {
    name: "Jupiter",
    src: "/jupiter.jpg",
    size: 3,
    position: [0, 0, 0],
    rotationSpeed: 9.9,
  },
  {
    name: "Saturn",
    src: "/saturn.jpg",
    size: 2.7,
    position: [0, 0, 0],
    rotationSpeed: 11,
  },
  {
    name: "Uranus",
    src: "/uranus.jpg",
    size: 2.2,
    position: [0, 0, 0],
    rotationSpeed: -17,
  },
  {
    name: "Neptune",
    src: "/neptune.jpg",
    size: 2,
    position: [0, 0, 0],
    rotationSpeed: 16,
  },
];

const updateBodies = (data: { bodies: Planet[] } | undefined) => {
  if (!data) return astralBodies;

  return astralBodies.map((body) => {
    const currentPlanet = data.bodies.find((planet) => planet.englishName == body.name);

    if (currentPlanet) {
      return {
        ...body,
        rotationSpeed: currentPlanet.sideralRotation
      };
    }
    return body;
  })
}

const Home: NextPageWithLayout = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [isOn, setOn] = useState(0)

  const { data } = api.planets.allPlanets.useQuery(["isPlanet,eq,true"]);
  const fuckinPlanets = updateBodies(data);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  console.log({ fuckinPlanets })

  return (
      <div className="w-full">
        <Tab.Group selectedIndex={isOn} onChange={setOn}>
          <Tab.List className="flex items-center rounded-xl bg-blue-900/20 text-white ">
            <Tab className="w-[200px]">
          {({ selected }) => <Scene name="Sun" src="sun.jpg" size={4} selected={selected} position={[-1,1.5,0]} rotationSpeed={25}/>}
            </Tab>
            {astralBodies.map((body) => (
              <Tab key={body.src} className="h-20 w-20 ">
                {({ selected }) => <Scene name={body.name} src={body.src} size={body.size} selected={selected} position={body.position} rotationSpeed={body.rotationSpeed}/>}
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
            <Tab.Panel><Content content={content.earth} /></Tab.Panel>
            <Tab.Panel><MarsContent /></Tab.Panel>
            <Tab.Panel><JupiterContent /></Tab.Panel>
            <Tab.Panel><SaturnContent /></Tab.Panel>
            <Tab.Panel><UranusContent /></Tab.Panel>
            <Tab.Panel><Content content={content.neptune} /></Tab.Panel>
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
