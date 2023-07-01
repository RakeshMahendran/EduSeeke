import { FETCH_COURSES_SUCCESS } from "./actionTypes";

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});