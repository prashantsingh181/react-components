import "./styles.css";
import { useState, useEffect } from "react";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userSearchParams, setUserSearchParams] = useState("");
  const [showDropdown, setShowDropdown] = useState(true);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
      } else {
        setError(response.statusText);
        console.error(response.statusText);
      }
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleUserInput(event) {
    const query = event.target.value;
    setUserSearchParams(query);
    setShowDropdown(true);
    if (query.length > 1) {
        const filteredUsers = users.filter((user) =>
          user.firstName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredUsers(filteredUsers);
      }
  }

  function handleOptionClick(name) {
    setUserSearchParams(name);
    setShowDropdown(false);
  }
  useEffect(() => {
    fetchUsers();
  }, []);


  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {error && <div>{error}</div>}
      <div className="search-autocomplete-container">
        <div className="user-search-container">
          <input
            name="search-users"
            placeholder="Type here to search users..."
            value={userSearchParams}
            onChange={handleUserInput}
          />
          <div>
            <ul>
              {showDropdown &&
                filteredUsers.map((user) => (
                  <li
                    key={user.id}
                    className="user-item"
                    onClick={() => handleOptionClick(user.firstName)}
                  >
                    {user.firstName}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
