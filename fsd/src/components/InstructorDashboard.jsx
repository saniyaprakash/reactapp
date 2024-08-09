import React, { useState, useEffect } from 'react';

function InstructorDashboard() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    category: '',
    image: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch courses for the instructor from an API or define dummy data
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError('Failed to fetch courses.');
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Optionally update the course list with the new course
      setCourses([...courses, data]);
      setNewCourse({ title: '', description: '', category: '', image: '' }); // Clear form
    } catch (error) {
      console.error('Error adding course:', error);
      setError('Failed to add course.');
    }
  };

  return (
    <div>
      <h1>Your Courses</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        {courses.map(course => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newCourse.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newCourse.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={newCourse.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={newCourse.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default InstructorDashboard;
