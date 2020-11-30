import { ApplicationStoreState, ApplicationStoreReducerActions, IntlStoreState, IntlStoreReducerActions, Json } from './types';
import { APP_INIT, APP_SET_OUTPUT_DATE, APP_SET_OUTPUT_EDITOR, APP_SET_THEME, INTL_SET_LOCALE } from './actions';
import { createReducer } from './utils';
import { ApplicationState, IntlState } from './states';

/**
 * Reducers
 * 
 * If using Store reducers, place them here.
 * If things grow, create a directory and separate them.
 * 
 */

 /** Application reducer */
export const ApplicationReducer = createReducer<ApplicationStoreState, ApplicationStoreReducerActions>({ 
  [APP_INIT]: (state = ApplicationState):ApplicationStoreState => {
    return {
      ...state,
    };
  },
  [APP_SET_THEME]: (state = ApplicationState, action):ApplicationStoreState => {
    return {
      ...state,
      theme: (action.payload as string)
    }
  },
  [APP_SET_OUTPUT_DATE]: (state = ApplicationState, action):ApplicationStoreState => {
    return {
      ...state,
      content: {
        ...state.content,
        date: (action.payload as Date)
      }
    }
  },
  [APP_SET_OUTPUT_EDITOR]: (state = ApplicationState, action):ApplicationStoreState => {
    return {
      ...state,
      content: {
        ...state.content,
        editor: (action.payload as Json)
      }
    }
  }
});

/** Internationalization reducer */
export const IntlReducer = createReducer<IntlStoreState, IntlStoreReducerActions>({
  [INTL_SET_LOCALE]: (state = IntlState, action) => {
    return {
      ...state,
      locale: action.payload
    }
  }
});