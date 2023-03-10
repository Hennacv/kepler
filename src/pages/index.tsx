import { type NextPageWithLayout } from "./_app";
import { type ReactElement, useState } from "react";
import { Layout } from "../components/layout"
import { api } from "../utils/api";
import React from "react";
import { Tab } from "@headlessui/react";
import { Content } from "../components/Content";
import { Scene, type Body } from "../components/planets/AstralBody"
import type { Planet } from "../../types";
import { content } from "../utils/content";
import { Blush } from "../components/Blush";

const astralBodies: Body[] = [
  {
    name: "Sun",
    src: "/sun.jpg",
    size: 4,
    position: [-1,1.5,0],
    rotationSpeed: 25,
    width: "w-[200px]",
    height: "h-[150px]",
    margin: "",
  },
  {
    name: "Mercury",
    src: "/mercury.jpg",
    size: 0.9,
    position: [0, 0, 0],
    rotationSpeed: 88,
    width: "w-20",
    height: "h-20",
    margin: "",
  },
  {
    name: "Venus",
    src: "/venus.jpg",
    size: 1.4,
    position: [0, 0, 0],
    rotationSpeed: 243,
    width: "w-20",
    height: "h-20",
    margin: "",
  },
  {
    name: "Earth",
    src: "/earth.jpg",
    size: 1.5,
    position: [0, 0, 0],
    rotationSpeed: 23.5,
    width: "w-20",
    height: "h-20",
    margin: "",
  },
  {
    name: "Mars",
    src: "/mars.jpg",
    size: 1.2,
    position: [0, 0, 0],
    rotationSpeed: 24.6,
    width: "w-20",
    height: "h-20",
    margin: "",
  },
  {
    name: "Jupiter",
    src: "/jupiter.jpg",
    size: 3,
    position: [0, 0, 0],
    rotationSpeed: 9.9,
    width: "w-20",
    height: "h-20",
    margin: "ml-14",
  },
  {
    name: "Saturn",
    src: "/saturn.jpg",
    size: 2.7,
    position: [0, 0, 0],
    rotationSpeed: 11,
    width: "w-20",
    height: "h-20",
    margin: "ml-14",
  },
  {
    name: "Uranus",
    src: "/uranus.jpg",
    size: 2.2,
    position: [0, 0, 0],
    rotationSpeed: -17,
    width: "w-20",
    height: "h-20",
    margin: "ml-16",
  },
  {
    name: "Neptune",
    src: "/neptune.jpg",
    size: 2,
    position: [0, 0, 0],
    rotationSpeed: 16,
    width: "w-20",
    height: "h-20",
    margin: "ml-16",
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
  const [isOn, setOn] = useState(3)

  const { data } = api.planets.allPlanets.useQuery(["isPlanet,eq,true"]);
  const updatedBodies = updateBodies(data);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
<div className="absolute blur-xl "/>
  return (
      <div className="w-full ">
        <Tab.Group selectedIndex={isOn} onChange={setOn}>
          <Tab.List className="sticky top-14 flex overflow-x-scroll md:overflow-x-auto items-center bg-gradient-to-b from-space-black via-space-black to-transparent scrollbar scrollbar-h-1 scrollbar-thumb-indigo-900 scrollbar-track-space-black">
            {updatedBodies.map((body) => (
              <Tab key={body.src} className={body.height + " " + body.width + " " + body.margin + " relative"}>
                {({ selected }) => (
                  <>
                    <Scene name={body.name} src={body.src} size={body.size} selected={selected} position={body.position} rotationSpeed={body.rotationSpeed} width={body.width} height={body.height} margin={body.margin}/>
                    {selected ? <Blush size={body.size} /> : null}
                  </>)}
              </Tab>
              ))
            }
          </Tab.List>
          <Tab.Panels className="text-white mt-14">
            <Tab.Panel><Content content={content.sun} /></Tab.Panel>
            <Tab.Panel><Content content={content.mercury} /></Tab.Panel>
            <Tab.Panel><Content content={content.venus} /></Tab.Panel>
            <Tab.Panel><Content content={content.earth} /></Tab.Panel>
            <Tab.Panel><Content content={content.mars} /></Tab.Panel>
            <Tab.Panel><Content content={content.jupiter} /></Tab.Panel>
            <Tab.Panel><Content content={content.saturn} /></Tab.Panel>
            <Tab.Panel><Content content={content.uranus} /></Tab.Panel>
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
