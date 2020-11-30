import React from 'react';
import styled from 'styled-components';
import { Typography } from '../components/Typography';
import { Box, DashboardNavbar } from '../components/Utils';
import { useTheme } from '../store/hooks';
import themes, { availableThemes } from '../themes';

const { H5 } = Typography;

const Nav = styled(Box)``;

const DashboardTheme = () => {
  const { theme, selectTheme } = useTheme();
  console.log(availableThemes);
  return (
    <Box width="100%">
      <DashboardNavbar>
        <Box display="flex">
          <H5>
            Theme
          </H5>
        </Box>
      </DashboardNavbar>
      <Box>
        select theme: { theme } <br />
        <select defaultValue={theme} onChange={(e) => selectTheme(e.target.value)}>
          {availableThemes.map((themeName) => {
            return <option key={themeName} value={themeName}>{themeName}</option>
          })}
        </select>
      </Box>
    </Box>
  );
}

export default DashboardTheme;
