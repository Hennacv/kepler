import { useQuery } from "@tanstack/react-query";
import ky from "ky";

const getPlanets = async ({}): Promise<any> =>
    await ky
        .get(
            `api.le-systeme-solaire.net/rest/bodies`,
            )
            .json();

export const usePlanets = () =>
    useQuery(
        () => getPlanets(),

    );