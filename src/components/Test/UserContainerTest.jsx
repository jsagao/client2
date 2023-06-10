import PropTypes from "prop-types";

const UserContainerTest = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p> Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p> Please Login</p>
      )}
    </div>
  );
};

UserContainerTest.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserContainerTest;
