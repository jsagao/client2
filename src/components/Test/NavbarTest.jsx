import { useState, createContext } from "react";
import NavLinksTest from "./NavLinksTest";
import { useContext } from "react";

export const NavbarContext = createContext();

// custom hook

export const useAppContext = () => useContext(NavbarContext);

const NavbarTest = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5> CONTEXT API </h5>
        <NavLinksTest />
      </nav>
    </NavbarContext.Provider>
  );
};

export default NavbarTest;

// import { useState } from "react";
// import NavLinksTest from "./NavLinksTest";

// const NavbarTest = () => {
//   const [user, setUser] = useState({ name: "bob" });
//   const logout = () => {
//     setUser(null);
//   };
//   return (
//     <div className="navbar">
//       <h5> CONTEXT API </h5>
//       <NavLinksTest user={user} logout={logout} />
//     </div>
//   );
// };

// export default NavbarTest;
