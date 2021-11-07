import { createStore, combineReducers } from "redux";

import carsReducer from "./cars/reducer";

const reducers = combineReducers({ carsReducer });
const store = createStore(reducers);

export default store;