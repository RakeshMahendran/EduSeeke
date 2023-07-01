import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchCoursesSuccess } from "../../redux/actions";
import courseImage from '../../assets/courseImage.jpg';

const CourseCard = ({ courseDetails, fetchCoursesSuccess }) => {
  useEffect(() => {
    axios
      .get("http://localhost:4030/courses")
      .then((response) => {
        fetchCoursesSuccess(response.data);
      })
      .catch((error) => {
        console.log("error in courseCard component",error)
      });
  }, [fetchCoursesSuccess]);

  console.log("courseDetails", courseDetails);

  return (
    <div>
      <div>
        <div>
            <img src={courseImage} alt="courseImage" className="w-48 h-72" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courseDetails: state.courses,
});


const mapDispatchToProps = (dispatch) => ({
  fetchCoursesSuccess: (courseDetails) =>
    dispatch(fetchCoursesSuccess(courseDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard);
