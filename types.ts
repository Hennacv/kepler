import z from "zod";

export const PlanetZod = {
    id: z.string(),
    name: z.string(),
    englishName: z.string(),
    isPlanet: z.boolean(),
    moons: z.object({
        moon: z.string(),
        rel: z.string()
    }).array(),
    semimajorAxis: z.number(),
    perihelion: z.number(),
    aphelion: z.number(),
    eccentricity: z.number(),
    inclination: z.number(),
    mass: z.object({
        massValue: z.number(),
        massExponent: z.number()
    }),
    vol: z.object({
        volValue: z.number(),
        volExponent: z.number()
    }),
    density: z.number(),
    gravity: z.number(),
    escape: z.number(),
    meanRadius: z.number(),
    equaRadius: z.number(),
    polarRadius: z.number(),
    flattening: z.number(),
    dimension: z.string(),
    sideralOrbit: z.number(),
    sideralRotation: z.number(),
    aroundPlanet: {
        planet: z.string(),
        rel: z.string()
    },
    discoveredBy: z.string(),
    discoveryDate: z.string(),
    alternativeName: z.string(),
    axialTilt: z.number(),
    avgTemp: z.number(),
    mainAnomaly: z.number(),
    argPeriapsis: z.number(),
    longAscNode: z.number(),
    bodyType: z.string()
}

export type Planet = {
    id: string,
    name: string,
    englishName: string,
    isPlanet: boolean,
    moons: {
        moon: string,
        rel: string
    }[],
    semimajorAxis: number,
    perihelion: number,
    aphelion: number,
    eccentricity: number,
    inclination: number,
    mass: {
        massValue: number,
        massExponent: number
    },
    vol: {
        volValue: number,
        volExponent: number
    },
    density: number,
    gravity: number,
    escape: number,
    meanRadius: number,
    equaRadius: number,
    polarRadius: number,
    flattening: number,
    dimension: string,
    sideralOrbit: number,
    sideralRotation: number,
    aroundPlanet: {
        planet: string,
        rel: string
    },
    discoveredBy?: string,
    discoveryDate?: string,
    alternativeName: string,
    axialTilt: number,
    avgTemp: number,
    mainAnomaly: number,
    argPeriapsis: number,
    longAscNode: number,
    bodyType: string
}

export type ContentCategories = "mercury" | "venus" | "earth" | "mars" | "jupiter" | "saturn" | "neptune" | "uranus" | "sun";
export type ContentTypes = "image" | "car";
export type ContentBody = (
    | string
    | { type: "image"; src: string; alt: string, height?: number, width?: number }
    | { type: "car" }
)[];
export type Content = {
    [k in ContentCategories]?: ContentBody;
}