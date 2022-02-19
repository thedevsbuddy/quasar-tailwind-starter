import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import VuexORM from "@vuex-orm/core";

import example from "./module-example";
import Auth from "models/Auth";
import User from "models/User";
import Todo from "models/Todo";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// Create a new instance of Database.
const database = new VuexORM.Database();

// Register Models to Database.
database.register(Auth);
database.register(User);
database.register(Todo);

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      example,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
    plugins: [VuexORM.install(database)],
  });

  return Store;
});
