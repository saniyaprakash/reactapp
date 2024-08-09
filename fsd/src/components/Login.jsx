import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Handle login logic
    // Example login logic
    if (email && password) {
      console.log('Email:', email, 'Password:', password);
      // Perform login operation here (e.g., API request)
      // Clear error if any
      setError(null);
    } else {
      setError('Please enter both email and password.');
    }
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-describedby="passwordHelp"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
