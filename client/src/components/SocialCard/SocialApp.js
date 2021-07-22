import { useState, useEffect } from 'react';
import './SocialApp.css';
import SocialCard from './SocialCard';
import ContactForm from '../SocialCard/Contact';

function SocialApp() {
  const [users, setUsers] = useState([]);
  const [allusers, setallUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData
      try {
        const response = await fetch('https://randomuser.me/api/?results=15');
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }


      setallUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCard = event => {
    const value = event.target.value.toLowerCase()
    const filteredUsers = allusers.filter(
      user => (`${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(value)
      )
    );

    setUsers(filteredUsers);
  }

  return (
    <div className="SocialApp">

      <ContactForm />
      <h1 className="contact-header">My Contacts</h1>
      <input className="search-box" placeholder="Search..." onInput={filterCard} />
      <div className="social-cards-container">


        {users.map((user, index) => (
          <SocialCard userData={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default SocialApp;