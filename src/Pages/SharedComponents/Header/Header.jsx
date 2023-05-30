import { useContext } from 'react';
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from '../../../Auth/Auth';
import logo from "../../../assets/logo.png"

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='bg-accent text-base-100'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to="/" className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-20 object-cover' />
                    <h3 className='text-3xl font-bold italic'>Marvel <span className='text-primary'>Toys</span></h3>
                </Link>
                <div className='text-lg font-medium space-x-8 flex items-center'>
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
                            : <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;