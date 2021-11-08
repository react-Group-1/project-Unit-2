import { createStore, combineReducers } from "redux";

import carsReducer from "./cars/reducer";
import usersReducer from "./users/reducer";

const reducers = combineReducers({ carsReducer, usersReducer });
const store = createStore(reducers);

export default store;