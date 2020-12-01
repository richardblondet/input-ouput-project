import { ApplicationStoreState, IntlStoreState } from './types';
import { getAppName, getAppVersion, getDeviceLanguage, i18nTools } from './utils';

const language = getDeviceLanguage('en');
const { translations } = i18nTools();
/**
 * Application Initial States
 * 
 * Every state could be initialized here, always provided
 * with correct types or interfaces.
 */

/** Application */
export const ApplicationState: ApplicationStoreState = {
  name: getAppName(),
  version: getAppVersion(),
  theme: 'preset',
  content: {
    /** default value ? */
    [language]: "Hello, I'm an example content, pls make sure you edit me sometime, that'd make me happy :)"
  }
};

/** Intl */
export const IntlState: IntlStoreState = {
  locale: language,
  translations
};