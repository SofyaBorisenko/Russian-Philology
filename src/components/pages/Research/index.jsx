import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Research.scss';
import '../../../App.css';
import PaperTextbook from './PaperTextbook/PaperTextbook.jsx';
import LiteraryCriticism from './LiteraryCriticism.jsx';
import DigitalTextbook from './DigitalTextbook.jsx';
import Reading from './Reading.jsx';

function Research() {
  return (
    <div>
      <Header />
      <main>
        <Tabs isFitted position='relative' variant={{ sm: 'enclosed' }}>
          <TabList
            gap={1}
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent={'flex-start'}
          >
            {[
              'Школьный учебник на бумажном носителе',
              'Цифровой школьный учебник',
              'Чтение и понимание текста',
              'Школьное литературоведение на психологической основе',
            ].map((label, index) => (
              <Tab
                key={index}
                className='research-dir-tab'
                bg='#e1e1e1'
                borderTopRadius='0.375rem'
                borderBottomRadius={{ base: '0.375rem', sm: 'none' }}
                width={{ base: '100%', sm: 'fit-content' }}
                _selected={{ color: '#121d47', bg: '#C4EAA5' }}
              >
                {label}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
              <PaperTextbook />
            </TabPanel>
            <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
              <DigitalTextbook />
            </TabPanel>
            <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
              <Reading />
            </TabPanel>
            <TabPanel style={{ padding: '0.5rem 0 0 0' }}>
              <LiteraryCriticism />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}

export default Research;
