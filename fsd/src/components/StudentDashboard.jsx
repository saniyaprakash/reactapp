import React, { useState, useEffect } from 'react';

function StudentDashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses for the student from an API or define a dummy data
    const fetchEnrolledCourses = async () => {
      const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API
      const data = await response.json();
      setEnrolledCourses(data);
    };
    fetchEnrolledCourses();
  }, []);

  return (
    <div>
      <h1>Enrolled Courses</h1>
      <div>
        {enrolledCourses.map(course => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;