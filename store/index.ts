import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { END } from "redux-saga";

import rootReducer from "./reducer";
import rootSaga from "./saga";

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore = ({ isServer }: any) => {
  const sagaMiddleware = createSagaMiddleware();
  if (isServer) {
    //If it's on server side, create a store
    return createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["cart"], // only counter will be persisted, add other reducers if needed
      storage, // if needed, use a safer storage
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    const store = createStore(
      persistedReducer,
      {},
      bindMiddleware([sagaMiddleware])
    ) as any; // Creating the store again

    store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

    store.runSaga = () => {
      // Avoid running twice
      if (store.saga) return;
      store.saga = sagaMiddleware.run(rootSaga);
    };

    store.stopSaga = async () => {
      // Avoid running twice
      if (!store.saga) return;
      store.dispatch(END);
      await store.saga.done;
      store.saga = null;
    };

    store.execSagaTasks = async (isServer: boolean, tasks: any) => {
      // run saga
      store.runSaga();
      // dispatch saga tasks
      tasks(store.dispatch);
      // Stop running and wait for the tasks to be done
      await store.stopSaga();
      // Re-run on client side
      if (!isServer) {
        store.runSaga();
      }
    };

    // Initial run
    store.runSaga();

    return store;
  }
};

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore);
