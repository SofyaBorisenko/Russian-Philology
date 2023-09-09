import React from 'react';
import { Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Research.scss';
import PaperTextbook from './PaperTextbook/PaperTextbook.jsx';

function Research() {
  return (
    <div>
      <Header />
        <main>
          <Heading className="research-heading">Направления исследований</Heading>
          <Tabs isFitted
            position="relative"
            variant="enclosed"
          >
            <TabList gap={1}>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Школьный учебник на<br /> бумажном носителе</Tab>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Цифровой <br />школьный учебник</Tab>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Чтение и <br />понимание текста</Tab>
              <Tab className="research-dir-tab" _selected={{ color: '#121d47', bg: '#C4EAA5' }}>Школьное литературо-<br />ведение</Tab>
            </TabList>
            <TabPanels>
              <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
                <PaperTextbook />
              </TabPanel>
              <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
              meh
              </TabPanel>
              <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
              meh
              </TabPanel>
              <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
              meh
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>
      <Footer />
    </div>
  );
}

export default Research;