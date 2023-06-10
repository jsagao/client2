// import { useContext } from "react";
// import { NavbarContext } from "./NavbarTest";     moved this over to navbarTest
import { useAppContext } from "./NavbarTest";

const UserContainerTest = () => {
  //   const { user, logout } = useContext(NavbarContext);
  const { user, logout } = useAppContext();
  // const value = useContext();
  //   console.log(value);
  //   return "hello world";
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

export default UserContainerTest;

// import PropTypes from "prop-types";

// const UserContainerTest = ({ user, logout }) => {
//   return (
//     <div className="user-container">
//       {user ? (
//         <>
//           <p> Hello There, {user?.name?.toUpperCase()}</p>
//           <button className="btn" onClick={logout}>
//             logout
//           </button>
//         </>
//       ) : (
//         <p> Please Login</p>
//       )}
//     </div>
//   );
// };

// UserContainerTest.propTypes = {
//   user: PropTypes.object.isRequired,
//   logout: PropTypes.func.isRequired,
// };

// export default UserContainerTest;
