import { } from 'react';
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className='bg-orange-50 py-5'>
            <div className='container mx-auto flex justify-between items-center'>
                <div>
                    <h3 className='text-3xl font-bold'>Marvel Toys</h3>
                </div>
                <div className='text-xl space-x-10 font-medium'>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/allToys" className={({ isActive }) => isActive ? 'active' : ''}>All Toys</NavLink>
                    <NavLink to="/sellerOwnToys" className={({ isActive }) => isActive ? 'active' : ''}>My Toys</NavLink>
                    <NavLink to="/addToy" className={({ isActive }) => isActive ? 'active' : ''}>Add Toy</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
                    <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;