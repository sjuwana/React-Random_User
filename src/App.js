import "./App.css";
import fetchData from "./services/rando_user";
import { useState, useEffect } from "react";
import UserSummary from "./components/UserSummary";

function App() {
  const [user, setUser] = useState([]);

  const refreshUser = async (event) => {
    const data = await fetchData();
    console.log(data);
    setUser(data);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <div className="App">
      <header>
        <button className="btn" onClick={refreshUser}>
          refresh
        </button>
        {user.map((db, index) => {
          const { name, email, location, picture, cell, dob } = db;
          return (
            <UserSummary
              name={name}
              email={email}
              location={location}
              picture={picture}
              cell={cell}
              dob={dob}
              key={index}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
