import PropTypes from "prop-types";
import UserContainerTest from "./UserContainerTest";

const NavLinksTest = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#"> home</a>
        </li>
        <li>
          <a href="#"> about</a>
        </li>
      </ul>
      <UserContainerTest user={user} logout={logout} />
    </div>
  );
};

NavLinksTest.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavLinksTest;
