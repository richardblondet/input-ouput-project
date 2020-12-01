import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography } from '../components/Typography';
import { Box, Button, DashboardNavbar } from '../components/Utils';
import { useContent, useIntl } from '../store/hooks';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { i18nTools } from '../store/utils';
import { FiPower } from 'react-icons/fi';

const { H5, H6, Link, Paragraph, Span } = Typography;

const TextArea = styled('textarea')`
  display: block;
  width: 100%;
  min-height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

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
          <Box mr=".375rem" display="inline" position="relative" top={3}><FiPower /></Box>
          Output Page
        </Link>
      </DashboardNavbar>
      <Box>
        {/* Date Field */}
        <Box display="flex" pt="m" style={{ flexWrap: "wrap", borderBottom: 'solid 1px #efefef' }}>
          <Box p="m" width={[ 1, '25%' ]} style={{ textAlign: 'right' }}>
            <H6 m="none">Date Field:</H6>
            <Paragraph mt="s" fontSize={0}>Select a day from the calendar to update the Output Page Date.</Paragraph>
          </Box>
          <Box width={[ 1, '50%' ]} style={{ borderLeft: 'solid 1px #efefef' }}>
            <H6 px="22px">Selected date: <Span fontWeight={900}>{date.toISOString().split('T')[0]}</Span></H6>
            <DayPicker onDayClick={(e) => setDate(e)} />
          </Box>
        </Box>
        {/* Editor Field */}
        <Box display="flex" style={{ flexWrap: "wrap" }}>
          <Box p="m" width={[ 1, '25%' ]} style={{ textAlign: 'right' }}>
            <H6 m="none">Text Field: </H6>
            <Paragraph mt="s" fontSize={0}>Edits the paragraph message from the Output Page.</Paragraph>
          </Box>
          <Box width={[ 1, '300px' ]} p="22px" style={{ borderLeft: '1px solid rgba(0,0,0,.125)' }}>
            {/* <select defaultValue={locale} onChange={({ target }) => setLanguage(target.value)}>
              {availableLanguages.map((language) => {
                return <option key={language} value={language}>{language}</option>;
              })}
            </select> */}
            {availableLanguages.map((lang) => {
              return language === lang ? (
                <Box key={lang}>
                  <TextArea 
                    key={lang}
                    name={`text[${lang}]`} 
                    onChange={(e) => saveEditorField(lang, e.target.value)} 
                    rows={5}
                    value={(editor[lang] as string)} />
                </Box>
              ) : null
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardContent;
