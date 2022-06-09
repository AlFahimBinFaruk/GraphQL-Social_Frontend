import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useGlobalUserContext } from "../contexts/userContext";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  let { user } = useGlobalUserContext();
 
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <Link to="/">
          <MDBNavbarBrand>GraphSocial</MDBNavbarBrand>
        </Link>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav className="ms-auto w-auto">
            {!user ? (
              <>
                {" "}
                <MDBNavbarItem>
                  <Link to="/login">
                    <MDBNavbarLink active aria-current="page" href="#">
                      Login
                    </MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link to="/register">
                    <MDBNavbarLink active aria-current="page" href="#">
                      Register
                    </MDBNavbarLink>
                  </Link>
                </MDBNavbarItem>
              </>
            ) : (
              <MDBNavbarItem>
                <Link to="/account">
                  <MDBNavbarLink active aria-current="page" href="#">
                    My Account
                  </MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
