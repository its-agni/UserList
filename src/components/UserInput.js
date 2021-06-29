import React, { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const addUser = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Missing Value",
        message: "Please enter a non-empty username/age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddList(enteredUsername, enteredAge);
    setUsername("");
    setAge("");
  };
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
    setUsername("");
    setAge("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>

          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameHandler}
          />

          <label htmlFor="age">Age</label>

          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserInput;
