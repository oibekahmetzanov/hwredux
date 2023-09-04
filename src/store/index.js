import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearch,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import { searchReducer } from "./slices/searchSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
    searchTerm: searchReducer,
  },
});

export { store, addCar, removeCar, changeSearch, changeName, changeCost };
