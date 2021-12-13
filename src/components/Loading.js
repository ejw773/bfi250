import React from 'react';
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
  return (
    <Container className='container-fluid justify-content-center'>
      <Row>
        <Col className='justify-content-center align-items-center'>
          <Spinner className='spinner' animation='border' />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
