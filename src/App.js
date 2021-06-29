import React, { useState } from "react";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";
//

function App() {
  const [userList, setUserList] = useState([]);
  const onAddListHandler = (uname, uage) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uname, age: uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      {/* <h1>User-List</h1> */}
      <UserInput onAddList={onAddListHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
