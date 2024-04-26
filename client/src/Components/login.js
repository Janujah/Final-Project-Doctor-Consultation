import React, { useState } from 'react';
import styles from '../CSS/login.module.css'; 
import logo from '../Components/logo.png'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login Details:', { email, password });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div >
        <img src={logo} alt="Company Logo" className={styles.logo} style={{height:'250px',width:'250px'}}/>
        </div>
        <h3 className={styles.heading}>Login</h3>
        <p style={{fontSize:'21px',textAlign:'center'}}>Welcome back! Please login to your account.</p>
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
          <a href='/FP'>Forgot password?</a>
        </div>
        <button className={styles.loginButton} type="submit" href='#'>
          Login
        </button>
        <p className={styles.forgotPassword}>If you don't have an account <a href='/signup'>Sign up</a></p>
      </form>
    </div>
  );
}

export default LoginPage;
