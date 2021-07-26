
import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';
import './contact.css';
import '../SocialCard.css';
import Plus from '../../../assets/images/plus32.png';

function ContactForm() {
  const [formState, setFormState] = useState({ 
     firstname: '',
     lastname: '',
     note: '',
     age: '', 
     city:'',
     state: '',
     phone: '',
     message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { firstname, lastname, age, city, state, phone,  note } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div className="card-contact">
      <h1 className="contact-header" data-testid="h1tag">Create Contact</h1>
      <form id="contact-form" className="contact-card" onSubmit={handleSubmit}>
        <div>
          <label className="contact" htmlFor="firstname">First Name:</label>
          <input className="input" type="text" name="name" defaultValue={firstname} onBlur={handleChange} />
        </div>
        <div>
          <label className="contact" htmlFor="lastname">Last Name:</label>
          <input className="input" type="text" name="name" defaultValue={lastname} onBlur={handleChange} />
        </div>
        <div>
          <label className="contact" htmlFor="message">Notes:</label>
          <textarea className="input" type="text" name="message" rows="5" defaultValue={note} onBlur={handleChange} />
        </div>
        <div>
          <label className="contact" htmlFor="email">Age:</label>
          <input className="input" type="text" name="age" defaultValue={age} onBlur={handleChange} />
        </div>
        <div>
          <label className="contact" htmlFor="city">City:</label>
          <input className="input" type="text" name="city" defaultValue={city} onBlur={handleChange} />
        </div>
        <div>
          <label className="contact" htmlFor="state">State:</label>
          <input className="input" type="text" name="state" defaultValue={state} onBlur={handleChange} />
        </div>
        <div>
          <label className="contact" htmlFor="phone">Phone Number:</label>
          <input className="input" type="int" name="phone" defaultValue={phone} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button className="button" data-testid="button" type="submit"><img src={Plus} /></button>
      </form>
    </div>
  );
}

export default ContactForm;