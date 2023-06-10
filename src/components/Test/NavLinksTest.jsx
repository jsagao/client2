import UserContainerTest from "./UserContainerTest";

const NavLinksTest = () => {
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
      <UserContainerTest />
    </div>
  );
};

export default NavLinksTest;
