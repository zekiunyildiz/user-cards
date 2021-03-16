import "./SocialCard.css";

const SocialCard = ({userData}) => {
    return(
        <div className="Card">
            <div className="CardTitle">{userData.name.first} {userData.name.last}</div>
            <div className="CardBody">
                <div className="CardImage"><img src={userData.picture.medium}/></div>
            </div>
        </div>
    )

};

export default SocialCard;