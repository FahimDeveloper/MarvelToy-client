// import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
    // const [toysData, setToysData] = useState([]);
    // const [tabsCategroy, setTabsCategroy] = useState("ironMan");
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allToys/${tabsCategroy}`)
    //         .then(res => res.json())
    //         .then(data => setToysData(data))
    // });
    return (
        <div className='container mx-auto text-center py-16'>
            <Tabs>
                <TabList>
                    <Tab>1</Tab>
                    <Tab>2</Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabSection;