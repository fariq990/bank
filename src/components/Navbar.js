import React, { useContext } from "react";
import { Button, Navbar } from "react-bootstrap";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";

import { DataContext } from "contexts/DataContext";

const Layout = () => {
  const { logout, isAuth } = useContext(DataContext);

  return (
    <Navbar bg="light">
      <Navbar.Collapse className="justify-content-end">
        {isAuth && (
          <Button variant="outline-secondary" onClick={logout}>
            <LogOut size={20} /> Log Out
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Layout;
