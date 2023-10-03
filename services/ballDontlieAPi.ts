import { apiMetaInterface } from "@/interface/apiMetaInterface";
import { playerInterface } from "@/interface/playerInterface";
import { teamInterface } from "@/interface/teamInterface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const balldontlieApi = createApi({
  reducerPath: "baslldontlieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.balldontlie.io/api/v1/" }),
  endpoints: (builder) => ({
    getPlyers: builder.query<
      { data: playerInterface[]; meta: apiMetaInterface },
      { per_page: number; page: number }
    >({
      query: ({ per_page, page }) =>
        `players?per_page=${per_page}&page=${page}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newPlayers) => {
        const players = [...currentCache.data, ...newPlayers.data];
        const ids = players.map(({ id }) => id);
        const filteredPlayers = players.filter(
          ({ id }, index) => !ids.includes(id, index + 1)
        );
        currentCache.data = filteredPlayers;
        currentCache.meta = { ...currentCache.meta, ...newPlayers.meta };
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getTeams: builder.query<
      { data: teamInterface[]; meta: apiMetaInterface },
      { per_page: number; page: number }
    >({
      query: ({ per_page, page }) => `teams?per_page=${per_page}&page=${page}`,
    }),
  }),
});

export const { useGetPlyersQuery, useGetTeamsQuery } = balldontlieApi;
