import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { theme } from "../../utils";
import Section from "../Section";
import Logo from "../Logo";
import Menu from "../Menu";
// import Social from "../Social";

const SectionStyled = styled(Section)`
  flex-shrink: 0;
  a {
    &:hover {
      color: ${theme.primary};
    }
  }
`;

const Footer = () => {

  return (
    <>
      <SectionStyled className="py-5 border-top">
        <Container>
          <Row>
            <Col lg="6">
              <div className="d-flex flex-column  align-items-center align-items-lg-start">
                <div className="mb-4">
                  <Link to="/" className="d-block">
                    <Logo height="30px" />
                  </Link>
                </div>
                {/* <div className="mb-5 mb-lg-0">
                  <Social items={socialProfiles} />
                </div> */}
              </div>
            </Col>
            <Col lg="6">
              <div className="d-flex flex-column  align-items-center align-items-lg-end">
                <Menu className="mb-4" />
                <div>&copy; {new Date().getFullYear()}</div>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Footer;
