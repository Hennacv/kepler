import ky from "ky";
import z from "zod";

import { type Planet } from "../../../../types";
import { createTRPCRouter, publicProcedure } from "../trpc";

const baseUrl = new URL('https://api.le-systeme-solaire.net/rest/bodies');

export const planetRouter = createTRPCRouter({
  allPlanets: publicProcedure
    .input(z.string().array().optional())
    .query(async ({ input }) => {
        input?.forEach((param) => baseUrl.searchParams.append('filter', param));
        const data = await ky(baseUrl).json();
        return data as { bodies: Planet[] };
    }),
});
