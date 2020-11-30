import { Json } from './types';
import { getTextDomain } from './utils';

/**
 * Actions 
 * 
 * Keep them simple and use inference/optional
 * Having them all in the same file for small apps or creating
 * an action directory if needed.
 */
// export default 'store/actions'

/** ApplicationStoreReducerActions */
export const APP_INIT = getTextDomain('APP_INIT');
export const init = () => ({
  type: APP_INIT,
  payload: ''
});
export const APP_SET_THEME = getTextDomain('APP_SET_THEME');
export const setTheme = (theme: string) => ({
  type: APP_SET_THEME,
  payload: theme
});
export const APP_SET_OUTPUT_DATE = getTextDomain('APP_SET_CONTENT_DATE');
export const setOuputDate = (date: Date) => ({
  type: APP_SET_OUTPUT_DATE,
  payload: date
});
export const APP_SET_OUTPUT_EDITOR = getTextDomain('APP_SET_OUTPUT_EDITOR');
export const setOutputEditor = (content: Json) => ({
  type: APP_SET_OUTPUT_EDITOR,
  payload: content
});

/** Intl ReducerActions */
export const INTL_SET_LOCALE = getTextDomain('INTL_SET_LOCALE');
export const setLocale = (locale:string) => ({
  type: INTL_SET_LOCALE,
  payload: locale
});