import React from 'react';
import { useIntl } from '../store/hooks';
import { i18nTools } from '../store/utils';
import { Select } from './Utils';

export default () => {
  const { locale, updateLocale } = useIntl();
  const { availableLanguages } = i18nTools();

  return (
    <Select defaultValue={locale} onChange={(e) => updateLocale(e.target.value)}>
      {availableLanguages.map((lang) => {
        return <option key={lang} value={lang}>{lang}</option>;
      })}
    </Select>
  )
}