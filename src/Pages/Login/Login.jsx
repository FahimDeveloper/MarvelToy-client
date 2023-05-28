import { } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className='container mx-auto flex justify-center items-center h-screen'>
            <div className="card w-1/3 bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-medium mb-8">Login</h2>
                    <form className='space-y-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className='input input-bordered' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password">Passwrod</label>
                            <input type="password" name="password" id="password" className='input input-bordered' />
                        </div>
                        <button className='btn btn-primary w-full'>Login</button>
                    </form>
                    <div className='flex justify-center items-center gap-3'>
                        <hr className='border border-primary w-full' />
                        <p>Or</p>
                        <hr className='border border-primary w-full' />
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-center text-xl'>Continue With</h3>
                        <div className='flex justify-center items-center gap-5'>
                            <FcGoogle className='text-3xl' />
                            <FaGithub className='text-3xl' />
                        </div>
                    </div>
                    <p className='text-center'>Don`t have an account? please <Link to="/register" className='text-info underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;