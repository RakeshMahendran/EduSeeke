import { FETCH_COURSES_SUCCESS } from "./actionTypes";

const initialState = {
    courses : [],
}

const coursesReducer = (state = initialState, action) =>{
    switch (action.type) {
      case FETCH_COURSES_SUCCESS:
        return {
          ...state,
          courses: action.payload,
        };
      default:
        return state;
    }
}

export default coursesReducer;