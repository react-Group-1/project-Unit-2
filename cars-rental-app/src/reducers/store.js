import { createStore, combineReducers } from "redux";

import carsReducer from "./cars/reducer";
import usersReducer from "./users/reducer";
import bookingReducer from "./booking/reducer";
import ordersReducer from "./orders/reducer";

const reducers = combineReducers({ carsReducer, usersReducer, bookingReducer, ordersReducer });
const store = createStore(reducers);

export default store;