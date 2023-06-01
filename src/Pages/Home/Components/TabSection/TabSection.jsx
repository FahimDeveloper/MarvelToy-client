import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
    const [toysData, setToysData] = useState([]);
    const [tabsCategroy, setTabsCategroy] = useState([]);
    const [tabsData, setTabsData] = useState([]);
    const [category, setCategory] = useState("captainAmerica");
    useEffect(() => {
        fetch('http://localhost:5000/allToys/')
            .then(res => res.json())
            .then(data => setToysData(data));
    }, []);
    useEffect(() => {
        const categories = [];
        toysData.map(toy => {
            const find = categories.find(category => category === toy.category);
            if (!find) {
                categories.push(toy.category)
            }
        });
        setTabsCategroy(categories);
    }, [toysData]);
    useEffect(() => {
        const tabsData = toysData.filter(toy => toy.category === category);
        setTabsData(tabsData)
    }, [toysData, category])
    return (
        <div className='container mx-auto py-16 space-y-10'>
            <h2 className='text-center text-5xl font-bold italic'>Marvel Toys</h2>
            <Tabs className="space-y-10">
                <div className='text-center'>
                    <TabList>
                        {
                            tabsCategroy.map((category, index) => {
                                return (
                                    <Tab key={index} onClick={() => setCategory(category)}>{category}</Tab>
                                )
                            })
                        }
                    </TabList>
                </div>
                {
                    tabsCategroy.map((category, index) => {
                        return (
                            <TabPanel key={index}>
                                <div className='grid grid-cols-2 gap-5'>
                                    {
                                        tabsData?.slice(0, 2).map(tabToy => {
                                            return (
                                                <div key={tabToy._id} className="card border border-primary grid grid-cols-7 items-center bg-base-100 shadow-xl">
                                                    <figure className='col-span-3'><img src={tabToy.toyImg} className='w-96 h-96 object-contain' alt="Movie" /></figure>
                                                    <div className="space-y-5 p-5 col-span-4">
                                                        <h2 className="card-title text-3xl">{tabToy.toyname}</h2>
                                                        <p className='text-xl font-medium'>Price : ${tabToy.price}</p>
                                                        <p><span>Rating :</span> {tabToy.rating}</p>
                                                        <p><span>Category :</span> {tabToy.category}</p>
                                                        <p><span>Seller :</span> {tabToy.seller.name}</p>
                                                        <div className="card-actions justify-end">
                                                            <button className="btn btn-primary">view details</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </TabPanel>
                        )
                    })
                }
            </Tabs>
            <div className='text-center'>
                <button className='btn btn-primary px-16 rounded-full'>See more</button>
            </div>
        </div>
    );
};

export default TabSection;