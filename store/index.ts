import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { balldontlieApi } from "@/services/ballDontlieAPi";
import { setupListeners } from "@reduxjs/toolkit/query";
import teamsReducer from "@/features/teamSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["baslldontlieApi"],
};

export const rootReducers = combineReducers({
  teams: teamsReducer,
  [balldontlieApi.reducerPath]: balldontlieApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(balldontlieApi.middleware);
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
