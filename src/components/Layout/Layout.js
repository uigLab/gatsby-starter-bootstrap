import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import "./bootstrap-custom.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainStyled = styled.main`
  flex: auto;
`;

const Layout = props => {

  return (
    <>
      <LayoutStyled>
        <Header />
        <MainStyled>{props.children}</MainStyled>
        <Footer />
      </LayoutStyled>
    </>
  );
};

export default Layout;
