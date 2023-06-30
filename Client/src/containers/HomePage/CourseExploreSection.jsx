import React from 'react'
import CourseCard from '../../components/Course/CourseCard';

const CourseExploreSection = () => {
  return (
    <div>
      <div>
        <div className="text-base text-primary">Checkout New List</div>
        <div className="text-4xl font-bold text-black">Explore Courses</div>
        <div>
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default CourseExploreSection