import React from 'react';
import Logo from './Logo';
import { Typography } from './Typography';
import { Navbar, Container, Box, Row, Col, Button } from './Utils';
import { FiEdit2 } from 'react-icons/fi';
import { ThemeColors } from '../store/types';
import styled from 'styled-components';

// import DateRenderer from '../components/DateRenderer';
const { H1, H6, Paragraph, Span } = Typography;

// const date = new Date();

export const ThemePreviewer = () => {
  return (
    <React.Fragment>
      {/* Navbar */}
      <Navbar position="static">
        <Logo output={{color: 'primary'}} />
      </Navbar>
      {/* Hero Section */}
      <Box py="4rem" px="m" backgroundColor="primary-tints.100">
        <Box display="flex" minHeight="25rem" style={{ alignItems: 'center', flexWrap: "wrap" }}>
          <Box width={[ 1 ]} maxWidth={[ 1, '50%' ]} alignSelf="center">
            <H1 fontWeight="900" color="primary-shades.900">
              This is how<br /><Span color="primary"> this theme</Span> looks like!
            </H1>
            <Paragraph color="tertiary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, necessitatibus architecto rem repellat, perferendis quisquam asperiores odio itaque numquam totam odit perspiciatis repudiandae corrupti voluptate recusandae excepturi dicta in nobis.
            </Paragraph>
          
            <Button fontWeight={700} py="m" px="l" type="primary">
              <Box mr=".375rem" display="inline" position="relative" top={3}><FiEdit2 /></Box>
              Call to action
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

const ThemeColorsSquare = styled(Box)`
  position: relative;
  width: 36px;
  height: 36px;
  margin: 16px;
`;

const ThemeWrapper = styled(Box)`
  padding: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
`;

const capitalize = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
}

const ThemeName: React.FC<{ children: string }> = (props) => {
  const { children } = props;
  const name = children.split('-').map(capitalize).join(' ');
  return (
    <H6 ml="s">
      <span>{name}</span>
    </H6>
  )
}

export const ThemeOptionComponent = (props: { colors: ThemeColors, name: string }) => {
  const { colors, name } = props;
  return (
    <ThemeWrapper>
      <ThemeColorsSquare>
        <Box 
          width="100%"
          height="100%"
          style={{ borderRadius: '4px' }}>
            <Box style={{
              borderRadius: '10%',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {/* Color Row */}
              <Box style={{
                display: 'flex',
                width: '100%',
                height: '1px',
                flexGrow: 1,
              }}>
                {/* Primary Color */}
                <Box style={{
                  backgroundColor: colors['primary'],
                  width: '100%',
                  height: '100%',
                  borderRight: '1px inset rgba(0,0,0,0.1)',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }} />
                {/* Secundary Color */}
                <Box style={{
                  backgroundColor: colors['secondary'],
                  width: '100%',
                  height: '100%',
                  borderRight: '1px inset rgba(0,0,0,0.1)',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }} />
                {/* Terciary Color */}
                <Box style={{
                  backgroundColor: colors['tertiary'],
                  width: '100%',
                  height: '100%',
                  borderRight: '1px inset rgba(0,0,0,0.1)',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }} />
              </Box>
              {/* Color Row */}
              <Box style={{
                display: 'flex',
                width: '100%',
                height: '1px',
                flexGrow: 1,
              }}>
                {/* Red Color */}
                <Box style={{
                  backgroundColor: colors['red'],
                  width: '100%',
                  height: '100%',
                  borderRight: '1px inset rgba(0,0,0,0.1)',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }} />
                {/* Green Color */}
                <Box style={{
                  backgroundColor: colors['green'],
                  width: '100%',
                  height: '100%',
                  borderRight: '1px inset rgba(0,0,0,0.1)',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }} />
                {/* yellow Color */}
                <Box style={{
                  backgroundColor: colors['yellow'],
                  width: '100%',
                  height: '100%',
                  borderRight: '1px inset rgba(0,0,0,0.1)',
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                }} />
              </Box>
            </Box>
        </Box>
      </ThemeColorsSquare>
        
      <ThemeName>{name}</ThemeName>
    </ThemeWrapper>
  )
}