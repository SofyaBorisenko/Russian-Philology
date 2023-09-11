import React from 'react';
import { Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel } from '@chakra-ui/react';
import Header from '../../layout/Header.jsx';
import Footer from '../../layout/Footer.jsx';
import './Staff.scss';
import Borisenko from './Borisenko/Borisenko.jsx';
import Mironova from './Mironova/Mironova.jsx';
import Shishkova from './Shishkova/Shishkova.jsx';

const staffNames = ["Борисенко Н.А.", "Миронова К.В.", "Шишкова С.В."];

function Staff() {
  return (
    <div>
      <Header />
      <main>
        <Tabs position="relative" variant="unstyled">
          <TabList gap={{ base: 4, lg: 8 }}>
            {staffNames.map((name, index) => (
              <Tab
                key={index}
                className="staff-name-tab"
                style={{ padding: '0' }}
                fontSize={{ base: '0.75rem', sm: '0.85rem', md: '0.9rem', lg: '1rem', xl: '1.125rem' }}
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabIndicator mt="-1.5px" height="1.5px" bg="#43129B" borderRadius="1px" />
          <TabPanels>
            {[Borisenko, Mironova, Shishkova].map((Component, index) => (
              <TabPanel key={index} padding={0}>
                <Component />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}

export default Staff;
