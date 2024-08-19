import React, { useState, useEffect } from "react";
import ProgressLoader from "../../components/progressLoader/ProgressLoader";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userSearchParams, setUserSearchParams] = useState("");

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
    if (query.length > 0) {
      const filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers([]);
    }
  }

  function handleOptionClick(name) {
    setUserSearchParams(name);
    setFilteredUsers([]);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <ProgressLoader />;
  }

  return (
    <>
      {error && <div>{error}</div>}
      <div className="container mx-auto p-2 sm:p-6 text-primary-text dark:text-primary-dark-text">
        <h1 className="text-theme-color font-bold text-center text-xl p-4 mb-4">
          Search Auto Complete
        </h1>
        <div className="w-80 mx-auto">
          <input
            className="w-full p-2 rounded bg-primary-bg dark:bg-primary-dark-bg focus:outline-secondary-color"
            name="search-users"
            placeholder="Type here to search users..."
            value={userSearchParams}
            onChange={handleUserInput}
            autoComplete="off"
          />
          <div>
            <ul
              className={`bg-secondary-bg dark:bg-secondary-dark-bg border border-primary-border dark:border-primary-dark-border shadow rounded overflow-auto grid transition-[max-height] duration-500 ease-linear ${
                filteredUsers.length > 0 ? "max-h-48" : "max-h-0"
              }`}
            >
              <div>
                {filteredUsers.map((user) => {
                  const regex = new RegExp(userSearchParams, "gi");
                  const matchedArray = user.firstName.match(regex);
                  const splitArray = user.firstName.split(regex);
                  return (
                    <li
                      key={user.id}
                      className="py-2 px-4 cursor-pointer hover:shadow-md hover:text-lg"
                      onClick={() => handleOptionClick(user.firstName)}
                    >
                      {splitArray.map((substr, index) => (
                        <React.Fragment key={index}>
                          <span>{substr}</span>
                          {index !== splitArray.length - 1 && (
                            <span className="text-theme-color">
                              {matchedArray[index]}
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
