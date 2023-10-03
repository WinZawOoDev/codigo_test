import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

type team = {
  id?: string;
  name: string;
  city: string;
  division: string;
  region: string;
  player_count: number;
  country: string;
};

const initialState: team[] = [];

export const teamsSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    addTeam(state, { payload }: PayloadAction<team>) {
      state.push({ ...payload, id: nanoid() });
    },
    updateTeam(state, { payload }: PayloadAction<Partial<team>>) {
      const index = state.findIndex((team) => team.id === payload.id);
      state[index] = { ...state[index], ...payload };
    },
    deleteTeam(state, { payload }: PayloadAction<{ id: string }>) {
      const index = state.findIndex((team) => team.id === payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addTeam, updateTeam, deleteTeam } = teamsSlice.actions;

export default teamsSlice.reducer;
