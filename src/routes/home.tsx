import React from 'react';
import { Typography } from '../components/Typography';
import { Box, Container, Row, Col, Navbar, Button } from '../components/Utils';
import Logo from '../components/Logo';
import { FiGithub, FiPower } from 'react-icons/fi';
import { useContent, useIntl } from '../store/hooks';
import DateRenderer from '../components/DateRenderer';
import author from '../author.jpg';
import { ImagePrimitiveProps } from '../store/types';
import styled from 'styled-components';
import LanguageSwitcher from '../components/LanguageSwitcher';

const { Fragment } = React;
const { H1, H5, Paragraph, Span, Link } = Typography;

const Image = styled('img')<ImagePrimitiveProps>`
  vertical-align: middle;
  border-style: none;
  border-radius: 50%!important;
  width: 80px;
`;

const Home = () => {
  const { content } = useContent();
  const { locale, translate } = useIntl();
  const { date = new Date(), editor = {} } = content;
  return (
    <Fragment>
      {/* Navbar */}
      <Navbar position="static">
        <Container>
          <Box display="flex" style={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Logo output={{color: 'primary'}} />
            <Box display="flex">
              <Box mx="s">
                <LanguageSwitcher />
              </Box>
            </Box>
          </Box>
        </Container>
      </Navbar>
      {/* Hero Section */}
      <Box py="6rem" backgroundColor="primary-tints.100">
        <Container>
          <Box display="flex" minHeight="25rem" style={{ alignItems: 'center', flexWrap: "wrap" }}>
            
            <Box width={[ 1, 1/2 ]} alignSelf="center">
              <H1 fontWeight="900" color="primary-shades.900">
                {translate('home.hero.heading.pre.project')} <br />
                <Span color="primary"> Input/Outout</Span> {translate('home.hero.heading.post.project')}
              </H1>
                
              <Paragraph color="secondary">
                {editor[locale]}
              </Paragraph>

              <Link as="span" to="/dashboard">
                <Button fontWeight={700} py="m" px="l" type="primary">
                  <Box mr=".375rem" display="inline" position="relative" top={3}><FiPower /></Box>
                  {translate('home.hero.input.page.button')}
                </Button>
              </Link>
            </Box>
            <Box width={[ 1, 1/2 ]} display="flex" style={{ alignSelf: 'center', flexWrap: "wrap" }}>
              <DateRenderer date={date} />
            </Box>
          </Box>
        </Container>
      </Box>
      {/* About Hero Section */}
      <Box py="6rem" backgroundColor="#fff">
        <Container>
          <Box display="flex" minHeight="25rem" style={{ alignItems: 'center', flexWrap: "wrap" }}>
            
            <Box width={[ 1 ]} alignSelf="center">
              <H1 fontWeight="900" color="#333333" textAlign="center">
                {translate('home.about.heading')}
              </H1>
              <Paragraph color="#444444" textAlign="center">
                <Span color="primary">input</Span>/<Span color="primary">output</Span> {translate('home.about.description')}
              </Paragraph>
              <Paragraph fontFamily="mono" textAlign="center">
                <a href="https://github.com/richardblondet/input-ouput-project" target="_blank" style={{ textAlign: 'center' }}>
                  <Box mr=".375rem" display="inline" position="relative" top={3}><FiGithub /></Box>
                  {translate('home.about.view.on.github.link')}
                </a>
              </Paragraph>
            </Box>
            <Box width={[ 1 ]} p="m">
              <Box width="300px" margin="0 auto">
                <Paragraph textAlign="center" pt="l">
                  <Image src={author} width={90} />
                </Paragraph>
                <H5 m="none" color="#333333" textAlign="center">Richard Blondet</H5>
                <Paragraph m="none" color="#444444" textAlign="center">
                  {translate('home.author.profession')}
                </Paragraph>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

export default Home;
