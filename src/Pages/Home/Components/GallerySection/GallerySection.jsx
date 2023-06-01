import { } from 'react';
import img1 from "../../../../assets/images/1.jpeg"
import img2 from "../../../../assets/images/2.png"
import img3 from "../../../../assets/images/3.jpg"
import img4 from "../../../../assets/images/4.jpeg"
import img5 from "../../../../assets/images/5.jpg"
import img6 from "../../../../assets/images//6.png"
import img7 from "../../../../assets/images/7.jpg"
import img8 from "../../../../assets/images/8.jpg"
import img9 from "../../../../assets/images/9.png"
import img10 from "../../../../assets/images/10.jpg"
import img11 from "../../../../assets/images/11.jpg"
import img12 from "../../../../assets/images/12.jpg"
import img13 from "../../../../assets/images/13.jpg"
import img14 from "../../../../assets/images/14.jpg"
import img15 from "../../../../assets/images/15.jpg"
import img16 from "../../../../assets/images/16.jpeg"
import img17 from "../../../../assets/images/17.jpg"
import img18 from "../../../../assets/images/18.jpg"
import img19 from "../../../../assets/images/19.jpg"
import img20 from "../../../../assets/images/20.jpg"
import Marquee from 'react-fast-marquee';

const GallerySection = () => {
    return (
        <div className='container mx-auto sm:py-16 py-10 space-y-10'>
            <h2 className='lg:text-5xl text-4xl font-bold text-center italic'>Marvel Toy Gallery</h2>
            <div data-aos="zoom-in" data-aos-duration="1000">
                <Marquee className='flex'>
                    <img src={img1} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img2} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img3} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img4} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img5} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img6} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img7} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img8} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img9} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img10} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                </Marquee>
                <Marquee className='flex'>
                    <img src={img11} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img12} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img13} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img14} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img15} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img16} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img17} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img18} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img19} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                    <img src={img20} className='lg:w-80 md:72 w-60 lg:h-80 md:h-72 h-60 object-contain border' alt="gallery image" />
                </Marquee>
            </div>
        </div>
    );
};

export default GallerySection;