import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { setOuputDate, setLocale, setTheme, setOutputEditor } from './actions';
import { ApplicationStore, IntlStore } from './providers';
import { Json, TranslateFunctionOptions } from './types';

/**
 * Custom Application Hooks
 * 
 * Hooks let you use state and other React 
 * features without writing a class.
 */

/**
 * useIntl
 * 
 * Intl Hook for using strings and setting locale
 */
export const useIntl = () => {
  const { state, dispatch } = useContext(IntlStore);
  const { locale, translations } = useMemo(() => state, [state]);

  /** hook helper function */
  const translate = (key: string, options?: TranslateFunctionOptions) => {
    /** Allow us to so simple var replacement, no edge cases */
    if (translations[locale][key]) {
      if (options && (options.key && options.value)) {
        return (translations[locale][key] as string).replace(options.key, options.value);
      }
      return translations[locale][key];
    }
    return key;
  }

  /** hook bridge function for action */
  const updateLocale = useCallback((locale) => {
    dispatch(setLocale(locale));
  }, [dispatch]);

  /** Them */
  return {
    locale,
    translate,
    updateLocale,
    translations
  };
};

/**
 * useTheme
 * 
 * API for interacting with the Application provider
 * and managing theme
 */
export const useTheme = () => {
  const { state, dispatch } = useContext(ApplicationStore);
  const { theme:oldValue } = state;
  
  const theme = useMemo(() => oldValue, [oldValue]);
  
  /** Set the theme  */
  const selectTheme = useCallback((seletedTheme: string) => {
    console.log('seletedTheme', seletedTheme);
    dispatch(setTheme(seletedTheme));
  }, [theme]);
  
  /** Set the theme on body  */
  useLayoutEffect(
    () => {
      if (theme) {
        // Update css variables in document's root element
        document.body.classList.add(`selected-theme-${theme}`);
      }
    }, [theme] 
  );

  /** Them vars */
  return { theme, selectTheme } as const;
};

/**
 * useContent
 * 
 * For passing data around
 */
export const useContent = () => {
  const { state, dispatch } = useContext(ApplicationStore);
  const { content: oldValues } = state;
  
  const content = useMemo(() => oldValues, [oldValues]);
  
  const setDate = useCallback((date:Date) => {
    dispatch(setOuputDate(date));
  }, [content.date]);

  const setEditorValue = useCallback((content:Json) => {
    dispatch(setOutputEditor(content));
  }, [content.editor])
  
  return { content, setDate, setEditorValue } as const;
}