import React, {useMemo, useState} from "react";
import "./styles/App.css";
import UserCard from "./components/UserCard/UserCard";
import { UserDto } from "./api/contracts";

function App() {
  const [users, setUsers] = useState<UserDto[]>([]);
  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=50")
      .then((data) => data.json())
      .then((data) => setUsers(data.results));
  };

  const groupList = useMemo( () => users.reduce((acc: Record<string, UserDto[]>, item: UserDto) => {
      const date = new Date(item.registered.date).getFullYear()
      if (!acc[date]) acc[date] = [item]
      else acc[date].push(item)
      return acc
  }, {}), [users])

  return (
    <div className="App">
      <div className="leftSection">
        <h1>ARRAY METHOD REDUCE</h1>
        <h2>Group items by dates</h2>
        <button onClick={fetchData} className="button">
          GET USERS
        </button>
      </div>
      <div className="rightSection">
        {!users.length ? (
          <h2>No users yet</h2>
        ) : (
          // users.map((user, i) => <UserCard key={i} user={user} />)
            Object.keys(groupList).map(group => <div className={"groupWrapper"}>
                <div className={"groupName"}>{`Registered in ${group}`}<div className={"separator"}/></div>
                {groupList[group].map((user, i) => <UserCard key={i} user={user} />)}
            </div>)
        )}
      </div>
    </div>
  );
}

export default App;
