import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { FiCalendar } from 'react-icons/fi';
import VanillaTilt from 'vanilla-tilt';
import { Box } from './Utils';
import { Typography } from './Typography';
import { useIntl } from '../store/hooks';
import { i18nTools } from '../store/utils';

/**
 * calendar icon
 * tilt effect
 * shadow
 * hover effect change to tints
 * ? moving letters
 * ? 
 */
const boxShadow = () => 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.1);';
const borderRadius = () => 'border-radius: 7px;';
const { H4, H6, Span } = Typography;

const DateContainer = styled(Box).attrs({
  backgroundColor: '#ffffff',
  padding: 'm',
})`
  ${boxShadow()}
  ${borderRadius()}
`;

const DateIcon = styled(Box).attrs({
  backgroundColor: 'secondary-lightened',
  padding: 'm',
  display: 'inline-block',
})`
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.4);
  ${borderRadius()}
`;

export default ({ date }:{ date: Date }) => {
  const { locale, translate } = useIntl();
  const { localeUtils } = i18nTools();
  
  const tiltRef = useRef(null);
  
  useLayoutEffect(() => {
    VanillaTilt.init((tiltRef.current as unknown as HTMLElement));
  }, [tiltRef]);
  
  return (
    <Box position="relative" margin="0 auto" ref={tiltRef}>
      <DateContainer position="relative" zIndex={10}>
        <Box display="flex" style={{ alignItems: 'center' }}>
          <Box p="s">
            <DateIcon>
              <Span fontSize="3rem" color="secondary-darkened"><FiCalendar /></Span>
            </DateIcon>
          </Box>
          <Box p="s" flexGrow={1} alignSelf="center">
            <H6 m="none" color="secondary-tints.300" fontWeight="900">
              {translate('home.hero.date.label')}
            </H6>
            <H4 m="none" color="secondary-darkened" fontWeight="900">
              {localeUtils.formatDay(date, locale)}
            </H4>
          </Box>
        </Box>
      </DateContainer>
    </Box>
  );
}