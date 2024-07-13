import { useState } from "react";
import UserCard from "./UserCard";
import "./styles.css"

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function getUserInfo() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUserInfo(data);
      } else {
        setErrorMessage(response.statusText);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (userName === "") {
      setErrorMessage("Please enter a username");
      return;
    }
    getUserInfo();
    setUserName("");
    setErrorMessage("");
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="github-user-container">
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button>Find User</button>
      </form>
      {userInfo && <UserCard userInfo={userInfo} />}
    </div>
  );
}
