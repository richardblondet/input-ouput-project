import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from './components/Errors';
import Routes from './routes';
import { ApplicationStoreProvider, IntlStoreProvider } from './store/providers';
import { composeComponent } from './store/utils';
import GlobalStyle from './App.styles';
import { useTheme } from './store/hooks';
import themes from './themes';
/**
 * Application
 * 
 * Towards @version 1.0.0
 */

/** 
 * Compose Providers 
 * 
 * If your application needs another provider at Root level
 * you can add it here. You can also add providers down the
 * nest, just where you need it to.
 * */
const ComposedProviders = composeComponent([
  props => <ApplicationStoreProvider {...props} />,
  props => <IntlStoreProvider {...props} />,
]);

const System: React.FC<React.ReactNode> = ({ children }) => {
  const { theme } = useTheme();
  const themeObj = themes[theme];
  
  console.log('theme', theme, themeObj);

  return (
    <ThemeProvider theme={themeObj}>
      <ErrorBoundary>{children}</ErrorBoundary>
    </ThemeProvider>
  );
};

const { Fragment } = React;

const App = () => {
  return (
    <ComposedProviders>
      <System>
        <Fragment>
          <GlobalStyle />
          <Routes />
        </Fragment>
      </System>
    </ComposedProviders>
  );
}

export default App;
