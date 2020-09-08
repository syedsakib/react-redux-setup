import React, { useState } from 'react';

const Form1 = () => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    textarea: '',
    topic: 'react',
  });

  const {
    firstName,
    lastName,
    email,
    password1,
    password2,
    textarea,
    topic,
  } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password1,
      password2,
      textarea,
      topic,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={handleChange}
          required
        />
        <br />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          required
        />
        <br />
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password1'
          value={password1}
          onChange={handleChange}
        />
        <br />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input
          type='password'
          name='password2'
          value={password2}
          onChange={handleChange}
        />
        <br />
      </div>
      <div>
        <label>Comments</label>
        <textarea
          type='text'
          name='textarea'
          value={textarea}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Topic</label>
        <select value={topic} name='topic' onChange={handleChange}>
          <option value='react'>React</option>
          <option value='angular'>Angular</option>
          <option value='vue'>Vue</option>
        </select>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default Form1;
