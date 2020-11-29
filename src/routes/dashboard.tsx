import React, { lazy, Suspense } from 'react';
import { FiHome, FiEdit3, FiLayout } from "react-icons/fi";
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { Loading } from '../components/Loaders';
import Logo from '../components/Logo';
import { Typography } from '../components/Typography';
import { Box, Content, ListItem, ListItemIcon, ListTitle, Menu, Navbar, SideBar, SideBarContent, SideBarLogo, Wrapper } from '../components/Utils';

const { H5, Link } = Typography;

const Overview = lazy(() => import('./dashboard.overview'));
const Theme = lazy(() => import('./dashboard.theme'));
const ContentPage = lazy(() => import('./dashboard.content'));

const Dashboard: React.FC<RouteComponentProps>  = ({ match }) => {
  const { url, path } = match;
  console.log('url, path', {url, path});
  return (
    <Wrapper>
      <SideBar>
        <SideBarLogo>
          <Logo input={{ color: 'primary-tints.100' }} />
        </SideBarLogo>
        <Box position="relative" alignItems="flex-start" height="100%!important">
          <Box 
            margin={0}
            overflow="hidden" 
            width="inherit" 
            height="inherit" 
            maxHeight="inherit" 
            maxWidth="inherit">
              <Box {...SideBarContent} color="white">
                <Menu>
                  <ListTitle>
                    NAVIGATION
                  </ListTitle>
                  {/* <ListItem>
                    <ListItemIcon>
                      <FiHome />
                    </ListItemIcon>
                    <Link to={`${url}`} display="inline">
                      Dashboard
                    </Link>
                  </ListItem> */}
                  <ListItem>
                    <ListItemIcon>
                      <FiEdit3 />
                    </ListItemIcon>
                    <Link to={`${url}`} display="inline">
                      Content
                    </Link>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiLayout />
                    </ListItemIcon>
                    <Link to={`${url}/theme`} display="inline">
                      Theme
                    </Link>
                  </ListItem>
                </Menu>
              </Box>
          </Box>
        </Box>
      </SideBar>
      <Content key="Content">
        <Suspense fallback={<Loading />}>
          <Route path={`${path}`} exact component={Overview} />
          <Route path={`${path}/theme`} exact component={Theme} />
          <Route path={`${path}/content`} exact component={ContentPage} />
        </Suspense>
      </Content>
    </Wrapper>
  );
}

export default Dashboard;
