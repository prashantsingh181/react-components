import "./styles.css";
import useFetch from ".";

export default function UseFetchTest() {
  const { data, loading, errorMessage } = useFetch(
    "https://dummyjson.com/users"
  );
  console.log(data);
  const users = data && data.users;
  if (loading) {
    <div>Loading ...</div>;
  }
  return (
    <div className="users-container">
      {errorMessage && <span>{errorMessage}</span>}
      {users &&
        users.length > 0 &&
        users.map((user) => <User key={user.id} {...user} />)}
    </div>
  );
}

function User(props) {
  return (
    <div className="user-card">
      <img src={props.image} alt="User Avatar" />
      <div className="user-info">
        <div align="center">
          <span className="user-name">{`${props.firstName} ${props.lastName}`}</span>
          <span className="user-gender">
            {props.gender === "male" ? (
              <i class="bi bi-gender-male"></i>
            ) : (
              <i class="bi bi-gender-female"></i>
            )}
          </span>
        </div>
        <div className="user-contact">
          {props.email && (
            <div className="info-container">
              <i class="bi bi-envelope-at"></i>
              <span>{props.email}</span>
            </div>
          )}
          {props.phone && (
            <div className="info-container">
              <i class="bi bi-telephone"></i>
              <span>{props.phone}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
