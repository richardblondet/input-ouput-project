import React from 'react';
import { Typography } from '../components/Typography';
import { Box, Container, Row, Col, Navbar, Button } from '../components/Utils';
import Logo from '../components/Logo';
import { FiEdit2 } from 'react-icons/fi';

const { Fragment } = React;
const { H1, H5, Paragraph, Span, Link } = Typography;

const Home = () => {
  
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar position="static">
        <Container>
          <Logo output={{color: 'primary'}} />
        </Container>
      </Navbar>
      {/* Hero Section */}
      <Box py="6rem" backgroundColor="white">
        <Container>
          <Row>
            <Col sm={6}>
              <H1 fontWeight="900">Welcome to the <br />
                <Span color="primary"> Input/Outout</Span> Project</H1>
              <Paragraph color="secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime corrupti repudiandae impedit ullam eveniet id aperiam, dolorum delectus! Quam, quas? Quibusdam explicabo autem ullam illo quaerat laborum vel tempora aliquam?
              </Paragraph>
              <Link to="/dashboard" as="div">
                <Button fontWeight={700} py="m" px="l" type="primary">
                  <Box mr=".375rem" display="inline" position="relative" top={3}><FiEdit2 /></Box>
                  Edit this Page
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Box>
    </Fragment>
  );
}

export default Home;
