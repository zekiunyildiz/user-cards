import "./SocialCard.css";

const Location = ({location}) => {
    return(
        <div className="Location">
            <p>{location.street.number}, {location.street.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.postcode}</p>
            <p>{location.country}</p>
        </div>
    )
};
export default Location;