import React from "react";
import { Container } from "react-bootstrap";
import Section from "../components/Section";

const NotFoundPage = () => {
  return (
    <>
      <Section>
        <Container>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Container>
      </Section>
    </>
  );
};

export default NotFoundPage;
