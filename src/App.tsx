import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from './components/Errors';
import Routes from './routes';
import { ApplicationStoreProvider, IntlStoreProvider } from './store/providers';
import { composeComponent } from './store/utils';
import GlobalStyle from './App.styles';
import { useContent, useIntl, useTheme } from './store/hooks';
import themes from './themes';
import { ContentInterface, Json } from './store/types';
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
  const { content, setEditorValue } = useContent();
  const { locale } = useIntl();
  
  let defaultContent: ContentInterface = {
    ...content,
  };

  useEffect(() => {
    defaultContent['editor'] = {
      [locale]: "Hello, I'm an example content, pls make sure you edit me sometime, that'd make me happy :)"
    };

    setEditorValue((defaultContent as Json));
  }, []);
  
  const themeObj = themes[theme];

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
