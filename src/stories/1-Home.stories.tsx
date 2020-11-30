import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import { Typography } from '../components/Typography';
import { Navbar, Container, Box, Row, Col, Button } from '../components/Utils';
import { FiEdit2 } from 'react-icons/fi';
import DateRenderer from '../components/DateRenderer';
const { H1, H2, H3, H4, H5, H6, Lead, Paragraph, Span } = Typography;

const date = new Date();

export const Landing = () => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar position="static">
        <Container>
          <Logo output={{color: 'primary'}} />
        </Container>
      </Navbar>
      {/* Hero Section */}
      <Box py="6rem" backgroundColor="primary-tints.100">
        <Container>
          <Box display="flex" minHeight="25rem" style={{ alignItems: 'center', flexWrap: "wrap" }}>
            
            <Box width={[ 1, 1/2 ]} alignSelf="center">
              <H1 fontWeight="900" color="primary-shades.900">Welcome to the <br />
                <Span color="primary"> Input/Outout</Span> Project</H1>
                
                <Paragraph color="tertiary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus architecto rem repellat, perferendis quisquam asperiores odio itaque numquam totam odit perspiciatis repudiandae corrupti voluptate recusandae excepturi dicta in nobis.
                </Paragraph>
              
                <Button fontWeight={700} py="m" px="l" type="primary">
                  <Box mr=".375rem" display="inline" position="relative" top={3}><FiEdit2 /></Box>
                  Edit this Page
                </Button>
              </Box>

              <Box width={[ 1, 1/2 ]} display="flex" style={{ alignSelf: 'center', flexWrap: "wrap" }}>
                <DateRenderer date={date} />
              </Box>
            
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

const Story = {
  title: 'Pages/Landing',
  component: Landing
};

export default Story;