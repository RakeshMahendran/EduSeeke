import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../../features/courses/courseSlice";


const CourseCard = ({ }) => {
  const dispatch = useDispatch()
  const course = useSelector((state) => state.courses)
  useEffect(() => {
    dispatch(fetchCourses())
  }, []);

  console.log("courseDetails", course);

  return (
    <div className="flex">
    Hi
    </div>
  );
};



export default CourseCard
