import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=25");
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setAllUsers(userData);
      setAllUsers(userData);
    })();
  }, []);

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(
      user =>(`${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(value)
      )
      
    );
    setAllUsers(filteredUsers);
  };

  return (
    <div className="App">
      <h1>Teams</h1>
      <input
        className="search-box"
        placeholder="Search..."
        onInput={filterCards}
      />
      <div className="cards-container">
        {allUsers.map((user, index) => (
          <SocialCard userData={user} key={index} />
        ))}
        ;
      </div>
    </div>
  );
}

export default App;
