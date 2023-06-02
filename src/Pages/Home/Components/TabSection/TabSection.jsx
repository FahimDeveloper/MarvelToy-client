import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../../Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";
import Swal from 'sweetalert2';
import Rating from 'react-rating';

const TabSection = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [toysData, setToysData] = useState([]);
    const [tabsCategroy, setTabsCategroy] = useState([]);
    const [tabsData, setTabsData] = useState([]);
    const [category, setCategory] = useState("");
    useEffect(() => {
        fetch('http://assignment-11-server-psi-ten.vercel.app/allToys/')
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
        setCategory(categories[0]);
        setTabsCategroy(categories);
    }, [toysData]);
    useEffect(() => {
        const tabsData = toysData.filter(toy => toy.category === category);
        setTabsData(tabsData)
    }, [toysData, category]);
    const handleViewDetails = (id) => {
        if (user) {
            navigate(`/toys/view/${id}`)
        } else {
            Swal.fire({
                title: 'Have To Login',
                text: "Have to login for see toy details",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3ABFF8',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Go for login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/toys/view/${id}`)
                }
            })
        }
    }
    return (
        <div className='container mx-auto sm:py-16 py-10 space-y-10'>
            <h2 className='text-center lg:text-5xl text-4xl font-bold italic'>Marvel Toys</h2>
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
                                <div data-aos="flip-up" data-aos-duration="700" className='grid sm:grid-cols-2 grid-cols-1 gap-5'>
                                    {
                                        tabsData?.slice(0, 2).map(tabToy => {
                                            return (
                                                <div key={tabToy._id} className="border border-primary lg:grid lg:grid-cols-7 items-center bg-base-100 shadow-xl rounded-xl">
                                                    <figure className='col-span-3'><img src={tabToy.toyImg} className='lg:w-96 w-72 lg:h-96 h-72 mx-auto object-contain' alt="Movie" /></figure>
                                                    <div className="xl:space-y-5 md:space-y-3 space-y-2 p-5 col-span-4">
                                                        <h2 className="card-title xl:text-3xl text-xl">{tabToy.toyname}</h2>
                                                        <p className='xl:text-xl lg:text-lg font-medium'>Price : ${tabToy.price}</p>
                                                        <p className='flex items-center gap-1'>
                                                            <span>Rating :</span>
                                                            <Rating
                                                                placeholderRating={tabToy.rating}
                                                                emptySymbol={<FaRegStar className="text-xl text-primary" />}
                                                                placeholderSymbol={<FaStar className="text-primary text-xl" />}
                                                                fullSymbol={<FaStar className="text-xl" />}
                                                                readonly
                                                            />
                                                        </p>
                                                        <p><span>Category :</span> {tabToy.category}</p>
                                                        <p><span>Seller :</span> {tabToy.seller.name}</p>
                                                        <div className="card-actions justify-end">
                                                            <button onClick={() => handleViewDetails(tabToy._id)} className="btn btn-primary">view details</button>
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