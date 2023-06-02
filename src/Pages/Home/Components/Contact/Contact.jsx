/* eslint-disable react/no-unescaped-entities */
import { FaMapMarked, FaEnvelopeOpen, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";


const Contact = () => {
    const handleContact = (event) => {
        event.preventDefault();
    }
    return (
        <div className="container mx-auto py-16 space-y-10">
            <h2 className="text-center lg:text-5xl text-4xl font-bold italic">Get In Touch</h2>
            <div className=" grid md:grid-cols-2 gap-5">
                <div className="space-y-8 md:order-1 order-2">
                    <div className="space-y-3">
                        <h3 className="text-3xl uppercase">don't be shy!</h3>
                        <p>
                            Feel free to get in touch with us. We are always open to discussing with our client, creative ideas or opportunities to be part of our visions.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-12 items-start gap-3">
                            <FaMapMarked className="text-2xl col-span-1" />
                            <p className="text-lg col-span-11">Mohammad Bag, Merajnagar, Kadamtali, Dhaka-1362, Bangladesh</p>
                        </div>
                        <div className="grid grid-cols-12 items-center gap-3">
                            <FaEnvelopeOpen className="text-2xl col-span-1" />
                            <p className="text-lg col-span-11">merveltoys.info@gamil.com</p>
                        </div>
                        <div className="grid grid-cols-12 items-center gap-3">
                            <FaPhoneAlt className="text-2xl col-span-1" />
                            <p className="text-lg col-span-11">+88015********</p>
                        </div>
                    </div>
                </div>
                <div className="md:order-2 order-1">
                    <form onSubmit={handleContact} className="space-y-3">
                        <div className="flex gap-3">
                            <input type="text" className="input input-bordered w-full" placeholder="Enter your name" />
                            <input type="email" className="input input-bordered w-full" placeholder="Enter your email" />
                        </div>
                        <input type="text" className="input input-bordered w-full" placeholder="subject" />
                        <textarea rows="6" placeholder="Enter your message" className="border p-2 border-gray-300 w-full rounded-xl"></textarea>
                        <button type="submit" className="btn btn-primary px-16 rounded-full flex gap-3">send <FaLocationArrow /></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
