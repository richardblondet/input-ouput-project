import React from 'react';
import { Typography } from '../components/Typography';
import { Box, Container, Row, Col, Navbar, Button } from '../components/Utils';
import Logo from '../components/Logo';
import { FiEdit2 } from 'react-icons/fi';
import { useContent, useIntl } from '../store/hooks';

const { Fragment } = React;
const { H1, Paragraph, Span, Link } = Typography;

const Home = () => {
  const { content } = useContent();
  const { locale } = useIntl();
  const { date = new Date(), editor = {} } = content;
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar position="static">
        <Container>
          <Logo output={{color: 'primary'}} />
        </Container>
      </Navbar>
      {/* Hero Section */}
      <Box py="6rem" backgroundColor="primary-tints.100">
        <Container>
          <Row>
            <Col sm={6}>
              <H1 fontWeight="900">Welcome to the <br />
                <Span color="primary"> Input/Outout</Span> Project</H1>
                
              <Paragraph color="secondary">
                {editor[locale]}
              </Paragraph>

              <Link to="/dashboard" as="span">
                <Button fontWeight={700} py="m" px="l" type="primary">
                  <Box mr=".375rem" display="inline" position="relative" top={3}><FiEdit2 /></Box>
                  Edit this Page
                </Button>
              </Link>
            </Col>
            <Col sm={6}>
              <code>{date.toISOString().split('T')[0]}</code>
            </Col>
          </Row>
        </Container>
      </Box>
    </Fragment>
  );
}

export default Home;
