import "./SocialCard.css";
import Location from "./Location"
import PhoneNumber from "./PhoneNumber";

const SocialCard = ({userData}) => {
    return(
        <div className="Card">
            <div className="CardTitle">{userData.name.first} {userData.name.last}</div>
            <div className="CardBody">
                <Location location={userData.location}/>
                <PhoneNumber type="HOME" number={userData.phone}/>
                <PhoneNumber type="MOBİLE" number={userData.cell}/>
                <div className="CardImage"><img src={userData.picture.medium}/></div>
            </div>
        </div>
    )

};

export default SocialCard;