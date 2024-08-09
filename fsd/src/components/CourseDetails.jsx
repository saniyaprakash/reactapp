import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const CourseDetails = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);
    useEffect(() => {
        // Fetch course details from the backend API
        fetch(`/api/courses/${courseId}`)
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => console.error('Error fetching course details:', error));
    }, [courseId]);
    if (!course) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <div>
                <h2>Content</h2>
                {/* Render course content here */}
            </div>
        </div>
    );
};

export default CourseDetails;