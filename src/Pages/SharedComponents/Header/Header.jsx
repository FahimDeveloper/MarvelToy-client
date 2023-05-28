import { useContext } from 'react';
import { NavLink } from "react-router-dom"
import Logo from "../../../assets/logo-removebg-preview.png"
import { AuthContext } from '../../../Auth/Auth';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='bg-orange-50 py-2 rounded-full'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={Logo} alt="logo" className='w-20 h-12 object-fill' />
                    <h3 className='text-3xl font-bold italic'>Marvel <span className='text-primary'>Toys</span></h3>
                </div>
                <div className='text-xl space-x-8'>
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
                        user ? <span onClick={() => logOut()} className='cursor-pointer'>Log Out</span>
                            : <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;