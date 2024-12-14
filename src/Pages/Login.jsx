import React, { useState } from 'react';
import './Login.css'; // Importing the CSS file for styling
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only for registration

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLogin) {
      // Handle Login
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((user) => user.email === email && user.password === password);

      if (user) {
        toast.success('Login Successful!');
      } else {
        toast.error('Invalid email or password.');
      }
    } else {
      // Handle Registration
      if (!email || !password || !name) {
        toast.error('All fields are required.');
        return;
      }

      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.some((user) => user.email === email);

      if (userExists) {
        toast.error('Email already registered.');
      } else {
        const newUser = { name, email, password };
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        toast.success('Registration Successful! Please log in.');
        setIsLogin(true); // Switch to login after registration
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">{isLogin ? 'Login' : 'Register'}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="form-input"
                required={!isLogin}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="form-input"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-input"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="form-button">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p className="toggle-text">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default LoginRegister;
