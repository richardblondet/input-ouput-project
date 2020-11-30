import React from 'react';
import styled from 'styled-components';
import { color, ColorProps } from 'styled-system';
import { ThemePreviewer, ThemeOptionComponent } from '../components/ThemeUtils';
import { Typography } from '../components/Typography';
import { Box, Button, ButtonPrimitive, DashboardNavbar, text, TextPrimitive } from '../components/Utils';
import { useTheme } from '../store/hooks';
import { TextPrimitiveProps } from '../store/types';
import themes, { availableThemes } from '../themes';

const { H5, Link, Span } = Typography;

// const Nav = styled(Box)``;
const ThemeComponent = styled(Box)`
  max-width: 7rem;
  padding: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: solid 1px #fefefe;
`;

const ListGroup = styled('ul')`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: .25rem;

  li:last-child {
    border-bottom: none;
  }
`;
const ListItem = styled('li')<TextPrimitiveProps>`
  ${text}
  position: relative;
  display: block;
  cursor: pointer;
  border-bottom: 1px solid #F6F9FC;
  
  &:hover {
    background-color: #f6f6f6;
  }
`;

const DashboardTheme = () => {
  const { theme, selectTheme } = useTheme();

  return (
    <Box width="100%">
      <DashboardNavbar>
        <H5 color="#959599">
          Theme
        </H5>
        <Link to="/" as={Button}>
          Output Page
        </Link>
      </DashboardNavbar>
      <Box display="flex" style={{ flexWrap: "wrap", borderBottom: 'solid 1px #efefef' }} >
        {/* Theme list column */}
        <Box width={[ 1, '25%' ]}>
          <ListGroup>
            {availableThemes.map((name) => {
              const { colors } = themes[name];
              return (
                <ListItem  
                  key={name} 
                  backgroundColor={ theme === name ? 'primary-lightened' : '#fff' }
                  onClick={() => selectTheme(name)}>
                  <ThemeOptionComponent name={name} colors={colors} />
                </ListItem>
              )
            })}
          </ListGroup>
        </Box>
        <Box width={[ 1, '75%' ]} p="l" style={{ borderLeft: '1px solid rgba(0,0,0,.125)' }}>
          <ThemePreviewer />
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardTheme;
