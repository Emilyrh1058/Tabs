import './Contact';
import Location from './Location';
import PhoneNumber from './PhoneNumber';
import FireIce from './fireice';
import './SocialCard.css';

const SocialCard = ({ userData }) => {
    return(
        <div className="card">
            <div className="card__title">{userData.name.first} {userData.name.last}</div>
            <div className="card__body">
            <div className="card__image"><img src={userData.picture.medium} /></div>
                <Location location={userData.location}></Location>
                <p> Age: {userData.dob.age}</p>
                <PhoneNumber type="phone" number={userData.cell}></PhoneNumber>
                <div><FireIce /></div>
            </div>    
        </div>
    );

};

export default SocialCard;