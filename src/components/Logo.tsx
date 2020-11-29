import React from "react";
import { TextPrimitiveProps } from "../store/types";
import { Typography } from './Typography';
import { Box } from "./Utils";

const { H5, Span } = Typography;

interface LogoProps {
  input?: TextPrimitiveProps;
  output?: TextPrimitiveProps;
}

export default (props:LogoProps) => {
  return (
    <Box display="inline-block">
      <H5 fontWeight={900} color="tertiary">
        <Span {...props.input}>input</Span>/<Span {...props.output}>output</Span>
      </H5>
    </Box>
  ) 
}