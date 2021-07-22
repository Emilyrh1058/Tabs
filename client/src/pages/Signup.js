import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
  console.log("about to send data")
    try {
      console.log({...formState})
      const { data } = await addUser({
        variables: { ...formState }
      });
    console.log("add user", data)
      Auth.login(data.register.token);
    } catch (e) {
      console.error(e, "error in signup");
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='homepage-card'>
          <h4 className='login-word'>Sign Up</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='******'
                name='confirmPassword'
                type='password'
                id='password'
                value={formState.confirmPassword}
                onChange={handleChange}
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
            {error && <div className='homepage-fail'>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;