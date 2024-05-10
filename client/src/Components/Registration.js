import React, { useState } from 'react';
import styles from '../CSS/SignUpPage.module.css';
import logo from '../Components/logo.png';

function SignUpPage() {
  const [userName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [Role, setUserRole] = useState(''); 
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const userData = {
      userName,
      email,
      Role, 
      password,
      confirmPassword
    };
    console.log(userData);

    fetch('http://localhost:3002/SignUp/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <img src={logo} alt="Company Logo" className={styles.logo} style={{ height: '120px', width: '250px' }} />
        </div>
        <h3 className={styles.heading}>Sign Up</h3>
        <p style={{ fontSize: '21px' }}>Create your account, it's free and only takes a minute.</p>
        
        <div className={styles.inputGroup}>
          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            id='fullName'
            placeholder='Enter your full name'
            value={userName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup} style={{display:'flex'}}>
          <label htmlFor='userRole'>You're here as a</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select
            id='userRole'
            value={Role}
            onChange={(e) => setUserRole(e.target.value)}
            required
          >
            <option value="Other">Other</option>
            <option value="Doctor">Doctor</option>
            <option value="Ortho_technician">Ortho Technician</option>
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Create a password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button className={styles.signUpButton} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
