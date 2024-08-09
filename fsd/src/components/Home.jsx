import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from an API or define a dummy data
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>All Courses</h1>
      <div>
        {courses.map(course => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`}>View Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
