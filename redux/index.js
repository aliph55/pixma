import { configureStore } from "@reduxjs/toolkit";
import User from "./User";
import Categories from "./Categories";
import Donations from "./Donations";

const store = configureStore({
  reducer: {
    user: User,
    categories: Categories,
    donations: Donations,
  },
});

export default store;
