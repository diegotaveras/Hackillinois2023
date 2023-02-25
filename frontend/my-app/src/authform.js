import React, { useState } from 'react';

function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    fetch('/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Registration successful
        console.log('User registered');
      } else {
        // Registration failed
        console.error('Registration failed');
      }
    }).catch(error => {
      console.error('Error registering user', error);
    });
  }

  const handleLogin = () => {
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Login successful
        console.log('Login successful');
      } else {
        // Login failed
        console.error('Login failed');
      }
    }).catch(error => {
      console.error('Error logging in', error);
    });
  }

  return (
    <div>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AuthForm;