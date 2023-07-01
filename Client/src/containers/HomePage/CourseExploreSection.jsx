import React from 'react'
import CourseCard from '../../components/Course/CourseCard';
import { Container } from '@mui/material';

const CourseExploreSection = () => {
  return (
    <Container>
    <div>
      <div>
        <div className="text-base text-primary">Checkout New List</div>
        <div className="text-4xl font-bold text-black">Explore Courses</div>
        <div>
          <CourseCard />
        </div>
      </div>
    </div>
    </Container>
  );
}

export default CourseExploreSection