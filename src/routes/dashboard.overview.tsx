import React from 'react';
import { Typography } from '../components/Typography';
import { Box, DashboardNavbar } from '../components/Utils';

const { H5 } = Typography;

const DashboardOverview = () => {
  return (
    <Box width="100%">
      <DashboardNavbar>
        <H5 color="#959599">
          Overview
        </H5>
      </DashboardNavbar>
      <Box>
        Page here
      </Box>
    </Box>
  );
}

export default DashboardOverview;
