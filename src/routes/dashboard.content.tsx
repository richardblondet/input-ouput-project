import React, { useState } from 'react';
import { Typography } from '../components/Typography';
import { Box, DashboardNavbar } from '../components/Utils';
import { useContent } from '../store/hooks';

const { H5 } = Typography;

const DashboardContent = () => {
  const { content, setDate } = useContent();
  const { date = new Date() } = content;
  return (
    <Box width="100%">
      <DashboardNavbar>
        <H5>
          Content
        </H5>
      </DashboardNavbar>
      <Box px='m'>
        <form>
          <label>Date: {date.toISOString().split('T')[0]}</label>
          <br />
          <input type="date" value={date.toISOString().split('T')[0]} placeholder="Select date" onChange={(e) => setDate(new Date(e.target.value))} />
        </form>
      </Box>
    </Box>
  );
}

export default DashboardContent;
