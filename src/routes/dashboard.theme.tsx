import React from 'react';
import { Typography } from '../components/Typography';
import { Box, DashboardNavbar } from '../components/Utils';

const { H5 } = Typography;

const DashboardTheme = () => {
  return (
    <Box width="100%">
      <DashboardNavbar>
        <H5>
          Theme
        </H5>
      </DashboardNavbar>
      <Box>
        Content
      </Box>
    </Box>
  );
}

export default DashboardTheme;
