import React, { useState } from 'react';
import { Typography } from '../components/Typography';
import { Box, Button, DashboardNavbar } from '../components/Utils';
import { useContent, useIntl } from '../store/hooks';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { i18nTools } from '../store/utils';
const { H5, Link } = Typography;

const DashboardContent = () => {
  const { content, setDate, setEditorValue } = useContent();
  const { locale } = useIntl();
  const { date = new Date(), editor = {} } = content;
  const { availableLanguages } = i18nTools();
  const [language, setLanguage] = useState(locale);
  
  console.log('editor', editor);
  const saveEditorField = (lang: string, value: string): void => {
    editor[lang] = value;
    setEditorValue(editor);
  };
  return (
    <Box width="100%">
      <DashboardNavbar>
        <H5 color="#959599">
          Content
        </H5>
        <Link to="/" as={Button}>
          Output Page
        </Link>
      </DashboardNavbar>
      <Box px='m'>
        <form>
          <label>Date: {date.toISOString().split('T')[0]}</label>
          <br />
          {/* <input type="date" value={date.toISOString().split('T')[0]} placeholder="Select date" onChange={(e) => setDate(new Date(e.target.value))} /> */}
          <DayPicker onDayClick={(e) => setDate(e)} />
          <hr />
          <label>Editor Field: </label>
          <select defaultValue={locale} onChange={({ target }) => setLanguage(target.value)}>
            {availableLanguages.map((language) => {
              return <option key={language} value={language}>{language}</option>;
            })}
          </select>
          {availableLanguages.map((lang) => {
            return language === lang ? (
              <Box key={lang}>
                <textarea name={`editor[${lang}]`} onChange={(e) => saveEditorField(lang, e.target.value)} value={(editor[lang] as string)}></textarea>
              </Box>
            ) : null
          })}
            
        </form>
      </Box>
    </Box>
  );
}

export default DashboardContent;
