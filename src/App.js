import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=25");
        const userData = await response.json().results;
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  },[]);

  return <div className="App"></div>;
}

export default App;
