import './Location.css';

const Location = ({ location }) => {
    
    return (
        <div className="location">
            <p>notes: Something about Contact</p>
            <br />
            <p>city: {location.city}</p>
            <p>state: {location.state}</p>
        </div>
    )
}

export default Location;