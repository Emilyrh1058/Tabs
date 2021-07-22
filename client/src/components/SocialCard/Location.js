import './Location.css';

const Location = ({ location }) => {
    
    return (
        <div className="location">
            <p>Notes: Something about Contact</p>
            <br />
            <p>City: {location.city}</p>
            <p>State: {location.state}</p>
        </div>
    )
}

export default Location;