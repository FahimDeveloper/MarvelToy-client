import { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from '../../../Auth/Auth';
import logo from "../../../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className='bg-accent text-base-100 relative'>
            <div className='container mx-auto flex justify-between items-center'>
                <FaBars onClick={() => setOpenNav(!openNav)} className='text-2xl text-base-100 lg:hidden' />
                <Link to="/" className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-20 object-cover' />
                    <h3 className='sm:text-3xl text-2xl font-bold italic'>Marvel <span className='text-primary'>Toys</span></h3>
                </Link>
                <div className='text-lg font-medium space-x-8 lg:flex hidden items-center'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/allToys" className={({ isActive }) => isActive ? 'active' : ''}>All Toys</NavLink>
                    {
                        user ? <>
                            <NavLink to="/sellerOwnToys" className={({ isActive }) => isActive ? 'active' : ''}>My Toys</NavLink>
                            <NavLink to="/addToy" className={({ isActive }) => isActive ? 'active' : ''}>Add Toy</NavLink>
                        </> : ''
                    }
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0}>
                                    <img title={user?.displayName} src={user?.photoURL} className='object-contain w-12 cursor-pointer rounded-full' />
                                </label>
                                <div tabIndex={0} className="mt-3 p-2 shadow card dropdown-content bg-base-100 text-accent rounded-box w-80 border border-secondary py-10 px-10 space-y-5">
                                    <img src={user?.photoURL} alt="user photo" className='w-28 border border-primary rounded-full object-contain mx-auto' />
                                    <h3 className='text-lg text-center'>{user?.displayName}</h3>
                                    <p className='text-sm text-center'>{user?.email}</p>
                                    <div className='text-center'>
                                        <button onClick={() => logOut()} className='btn btn-primary capitalize rounded-full px-16'>Log Out</button>
                                    </div>
                                </div>
                            </div>
                            : <NavLink to="/login" className={({ isActive }) => isActive ? 'btn btn-primary capitalize px-10 rounded-full' : 'btn btn-primary capitalize px-10 rounded-full'}>Login</NavLink>
                    }
                </div>
                <div className={`absolute z-50 py-6 space-y-3 font-medium border border-primary flex flex-col text-lg justify-center items-center bg-base-100 text-accent w-full ${openNav ? "top-[70px]" : "-top-96"} left-0`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/allToys" className={({ isActive }) => isActive ? 'active' : ''}>All Toys</NavLink>
                    {
                        user ? <>
                            <NavLink to="/sellerOwnToys" className={({ isActive }) => isActive ? 'active' : ''}>My Toys</NavLink>
                            <NavLink to="/addToy" className={({ isActive }) => isActive ? 'active' : ''}>Add Toy</NavLink>
                        </> : ''
                    }
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
                </div>
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0}>
                        <img title={user?.displayName} src={user?.photoURL} className='object-contain w-12 cursor-pointer rounded-full' />
                    </label>
                    <div tabIndex={0} className="mt-3 p-2 shadow card dropdown-content bg-base-100 text-accent rounded-box w-80 border border-secondary py-10 px-10 space-y-5">
                        <img src={user?.photoURL} alt="user photo" className='w-28 border border-primary rounded-full object-contain mx-auto' />
                        <h3 className='text-lg text-center'>{user?.displayName}</h3>
                        <p className='text-sm text-center'>{user?.email}</p>
                        <div className='text-center'>
                            <button onClick={() => logOut()} className='btn btn-primary capitalize rounded-full px-16'>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;