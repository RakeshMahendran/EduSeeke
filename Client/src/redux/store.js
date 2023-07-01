import { createStore } from "redux";
import rootReducer from "../redux/reducers"; // Import your reducers

const store = createStore(rootReducer);

export default store;