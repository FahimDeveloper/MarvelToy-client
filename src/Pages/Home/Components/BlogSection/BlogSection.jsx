import { } from 'react';
import img5 from "../../../../assets/images/5.jpg";
import img10 from "../../../../assets/images/10.jpg";
import img14 from "../../../../assets/images/14.jpg";
import img17 from "../../../../assets/images/17.jpg";

const BlogSection = () => {
    return (
        <div className='container mx-auto py-16 space-y-10'>
            <h2 className='text-5xl font-bold italic text-center'>Recently Published Blogs</h2>
            <div className='space-y-10'>
                <div className='grid grid-cols-4 gap-5 items-center'>
                    <div data-aos="fade-up-right" data-aos-duration="500" className="card h-full bg-base-100 shadow-xl">
                        <figure><img src={img14} className='w-72 h-72 object-contain' alt="blogImage" /></figure>
                        <div className="card-body">
                            <p className='text-justify'>Unleash the fury of the Hulk! Smash through obstacles and conquer all challenges with this incredible toy.... <span className='text-info underline'>Ream more</span></p>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="500" className="card bg-base-100 h-full shadow-xl">
                        <figure><img src={img17} className='w-72 h-72 object-contain' alt="blogImage" /></figure>
                        <div className="card-body">
                            <p className='text-justify'>Unleash the power of justice with our Captain America toy - a symbol of bravery and heroism!... <span className='text-info underline'>Ream more</span></p>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" className='col-span-2 space-y-5'>
                        <h3 className='text-3xl font-medium text-center'>Welcome To Mervel Toy Store</h3>
                        <p className='tracking-wider text-justify'>
                            Welcome to our Marvel Toy Store, where imagination takes flight and heroes come to life! Step into a world of wonder, where you will find a treasure trove of collectibles, action figures, and merchandise featuring your favorite Marvel characters. From Iron Mans ingenious suits to Captain Americas unyielding shield, unleash your inner hero as you explore our magical aisles. Whether you are a seasoned collector or a young fan, our store is a haven for Marvel enthusiasts of all ages. Get ready to embark on an epic adventure and bring home a piece of the Marvel Universe today!
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-5 items-center'>
                    <div data-aos="fade-right" className='col-span-2 space-y-5'>
                        <h3 className='text-3xl font-medium text-center'>Welcome To Mervel Toy Store</h3>
                        <p className='tracking-wider text-justify'>
                            Welcome to our Marvel Toy Store, where imagination takes flight and heroes come to life! Step into a world of wonder, where you will find a treasure trove of collectibles, action figures, and merchandise featuring your favorite Marvel characters. From Iron Mans ingenious suits to Captain Americas unyielding shield, unleash your inner hero as you explore our magical aisles. Whether you are a seasoned collector or a young fan, our store is a haven for Marvel enthusiasts of all ages. Get ready to embark on an epic adventure and bring home a piece of the Marvel Universe today!
                        </p>
                    </div>
                    <div data-aos="fade-up-right" data-aos-duration="500" className="card h-full bg-base-100 shadow-xl">
                        <figure><img src={img5} className='w-72 h-72 object-contain' alt="blogImage" /></figure>
                        <div className="card-body">
                            <p className='text-justify'>Swing into action with our Spider-Man toy! Let your imagination soar as you join Spidey on thrilling adventures!... <span className='text-info underline'>Ream more</span></p>
                        </div>
                    </div>
                    <div data-aos="fade-up-left" data-aos-duration="500" className="card h-full bg-base-100 shadow-xl">
                        <figure><img src={img10} className='w-72 h-72 object-contain' alt="blogImage" /></figure>
                        <div className="card-body">
                            <p className='text-justify'>Unleash the power of Thor! Join the God of Thunder on epic adventures with our mighty Thor toy.... <span className='text-info underline'>Ream more</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;