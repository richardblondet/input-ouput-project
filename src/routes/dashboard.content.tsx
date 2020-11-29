import React from 'react';
import { Typography } from '../components/Typography';
import { Box, DashboardNavbar } from '../components/Utils';

const { H5 } = Typography;

const DashboardContent = () => {
  return (
    <Box width="100%">
      <DashboardNavbar>
        <H5>
          Content
        </H5>
      </DashboardNavbar>
      <Box>
        Form
      </Box>
    </Box>
  );
}

export default DashboardContent;
