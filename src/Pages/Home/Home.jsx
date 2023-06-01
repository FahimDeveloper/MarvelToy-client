import { useEffect, useState } from 'react';
import BannerSection from './Components/BannerSection/BannerSection';
import GallerySection from './Components/GallerySection/GallerySection';
import TabSection from './Components/TabSection/TabSection';
import Loader from '../SharedComponents/Loader/Loader';
import BlogSection from './Components/BlogSection/BlogSection';

const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    if (loading === true) {
        return <Loader />
    }
    return (
        <div className='overflow-hidden'>
            <BannerSection />
            <GallerySection />
            <TabSection />
            <BlogSection />
        </div>
    );
};

export default Home;