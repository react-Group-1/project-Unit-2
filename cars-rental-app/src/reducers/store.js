import { createStore, combineReducers } from "redux";

import carsReducer from "./cars/reducer";
import usersReducer from "./users/reducer";
import bookingReducer from "./booking/reducer";

const reducers = combineReducers({ carsReducer, usersReducer, bookingReducer });
const store = createStore(reducers);

export default store;