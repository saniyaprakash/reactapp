import React, { useState } from 'react';

function SignUp() {
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic
    console.log(userType, formData);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Register as:</legend>
          <div>
            <label>
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === 'student'}
                onChange={() => setUserType('student')}
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="instructor"
                checked={userType === 'instructor'}
                onChange={() => setUserType('instructor')}
              />
              Instructor
            </label>
          </div>
        </fieldset>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Example pattern for US phone numbers
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
