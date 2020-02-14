import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container, Navbar } from "react-bootstrap";
import Headroom from "react-headroom";
import { theme } from "../../utils";
import { useWindowSize } from "../../hooks";
import Logo from "../Logo";
import Offcanvas from "../Offcanvas";
import Menu from "../Menu";

const HeadroomStyled = styled(Headroom)`
  .headroom {
    z-index: 9999 !important;
  }
  .navbar-brand {
    font-weight: 600;
  }
`;

const NavbarTop = () => {
  const [isPinned, setIsPinned] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < theme.breakpoints.lg) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  return (
    <>
      {isMobile && (
        <Offcanvas
          className="border-right"
          show={showOffcanvas}
          onHideOffcanvas={() => setShowOffcanvas(false)}
        />
      )}

      <HeadroomStyled
        onPin={() => setIsPinned(true)}
        onUnfix={() => setIsPinned(false)}
      >
        <Navbar
          className={`px-md-0 ${isPinned &&
            "bg-white border-bottom shadow-sm"}`}
        >
          <Container className="px-sm-3">
            <Navbar.Brand as={Link} to="/" className="my-3">
              <Logo />
            </Navbar.Brand>
            {isMobile ? (
              <Navbar.Toggle
                className="d-block"
                aria-controls="basic-navbar-nav"
                onClick={() => setShowOffcanvas(!showOffcanvas)}
              />
            ) : (
              <div className="d-flex flex-grow-1">
                <Menu className="my-3 ml-auto d-flex align-items-center" />
              </div>
            )}
          </Container>
        </Navbar>
      </HeadroomStyled>
    </>
  );
};

export default NavbarTop;
