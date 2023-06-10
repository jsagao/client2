import { useState } from "react";
import NavLinksTest from "./NavLinksTest";

const NavbarTest = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <div className="navbar">
      <h5> CONTEXT API </h5>
      <NavLinksTest user={user} logout={logout} />
    </div>
  );
};

export default NavbarTest;
