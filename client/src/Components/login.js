import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import styles from '../CSS/login.module.css';
import logo from '../Components/logo.png';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Login Details:', { email, password });
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3002/login', {
        email,
        password
      });
      setLoading(false);

      const Role = response.data.Role;
      redirectUser(Role);
    } catch (err) {
      setLoading(false);
      setError('Failed to login. Check your email and password.');
      console.error('Login error:', err.response || err.message);
    }
  };

  const redirectUser = (Role) => {
    switch (Role) {
      case 'Doctors':
        navigate('/Doctors'); 
        break;
      case 'Ortho_technician':
        navigate('/Technicians');
        break;
      case 'Others':
        navigate('/');
        break;
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <h3 className={styles.heading}>Login</h3>
        <p className={styles.welcomeBack}>Welcome back! Please login to your account.</p>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.forgotPassword}>
          <a href='/forgot-password'>Forgot password?</a>
        </div>
        <button className={styles.loginButton} type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <div className={styles.registerLink}>
          If you don't have an account <a href='/signup' style={{color:'#0e0737', textDecoration:'none'}}>Sign up</a>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
