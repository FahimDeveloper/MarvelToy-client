import { } from 'react';

const BannerSection = () => {
    return (
        <div className='banner flex items-center'>
            <div className="container mx-auto">
                <div data-aos="fade-right" className='w-1/2 space-y-5'>
                    <h2 className='text-base-100 italic text-6xl font-bold tracking-wide'>Marvelous Marvels : The Ultimate Toy Emporium</h2>
                    <p className='text-base-100 tracking-wide'>Unleash your inner superhero at our Marvel Toy Shop, where imagination soars and epic adventures begin. Embrace the magic of Marvel with our extraordinary collection.</p>
                    <button className='btn btn-primary px-16 rounded-full'>Shop now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;