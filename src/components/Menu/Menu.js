import React from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Link } from "gatsby";
import { theme } from "../../utils";

const NavStyled = styled(Nav)`
  .nav-item {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .active {
    color: ${theme.primary};
  }
`;

const Menu = ({ vertical = false, onChangeLink = () => {}, ...rest }) => {
  const menuItemsNav = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" }
  ];

  const menuItems = menuItemsNav;

  return (
    <NavStyled {...rest}>
      {menuItems.map((item, index) => (
        <Nav.Item key={index} className={`nav-item ${vertical && `py-2`}`}>
          <Link to={item.link} activeClassName="active" onClick={onChangeLink}>
            {item.title}
          </Link>
        </Nav.Item>
      ))}
    </NavStyled>
  );
};

export default Menu;
