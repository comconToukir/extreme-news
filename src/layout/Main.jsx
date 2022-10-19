import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={2} className='d-none d-lg-block'>
            <LeftSideNav />
          </Col>
          <Col lg={7}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
