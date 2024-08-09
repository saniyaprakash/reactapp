import React, { useState, useEffect } from 'react';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch courses from the backend API
        fetch('/api/courses')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setCourses(data))
            .catch(error => {
                console.error('Error fetching courses:', error);
                setError('Failed to load courses. Please try again later.');
            });
    }, []);
    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div>
            <h1>All Courses</h1>
            {courses.length === 0 ? (
                <p>No courses available</p>
            ) : (
                <ul>
                    {courses.map(course => (
                        <li key={course.id}>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default CourseList;


