import React, { useState } from "react";
import Button from "../button";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="header">
      <h1>Applicacion task</h1>
      {isLoggedIn ? (
        <Button label="Logout" color="primary" size="md" pulse={handleLogout} />
      ) : (
        <>
          <Button
            label="Register"
            color="secondary"
            size="md"
            pulse={() => {}}
          />
          <Button label="Login" color="primary" size="md" pulse={() => {}} />
        </>
      )}
    </div>
  );
};

export default Header;
