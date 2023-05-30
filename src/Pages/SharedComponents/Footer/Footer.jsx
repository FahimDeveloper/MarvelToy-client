import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/logo.png"

const Footer = () => {
    return (
        <div className="bg-accent text-base-100">
            <footer className="footer grid-flow-row lg:grid-cols-6 sm:grid-cols-2 gap-5 items-center container mx-auto p-10">
                <div className="lg:col-span-2">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className='w-20 object-cover' />
                        <h3 className='text-3xl font-bold italic'>Marvel <span className='text-primary'>Toys</span></h3>
                    </div>
                    <p>Sit amet conse ctetur adipisicing elit, sed doe eiusmod tempor incididunt ut laborea aaaeht dolore magna aliqua.</p>
                    <div className="flex items-center gap-3 text-3xl">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <Link to="/allToys" className="link link-hover">All Toys</Link>
                    <Link to="sellerOwnToys" className="link link-hover">My Toys</Link>
                    <Link to="/addToy" className="link link-hover">Add Toys</Link>
                    <Link to="/blog" className="link link-hover">Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="lg:col-span-2">
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base-100">Enter your email address</span>
                        </label>
                        <div className="space-y-2">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full" />
                            <button className="btn btn-primary capitalize">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;