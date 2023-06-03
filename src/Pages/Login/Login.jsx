import { useContext, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"
import { AuthContext } from '../../Auth/Auth';
import Loader from '../SharedComponents/Loader/Loader';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { continueWithGoogle, loginUserWithEmail, loginSucessAlert } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    useTitle('Login');
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    if (loading === true) {
        return <Loader />
    }
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUserWithEmail(email, password)
            .then(() => loginSucessAlert()).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            })
    }
    const handleGoogleLogin = () => {
        continueWithGoogle().then(() => loginSucessAlert()).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message,
            })
        })
    }
    return (
        <div className='container mx-auto flex justify-center items-center detailsHeight'>
            <div className="card w-1/3 bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-medium mb-8">Login</h2>
                    <form onSubmit={handleLogin} className='space-y-4'>
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
                            <FcGoogle onClick={handleGoogleLogin} className='text-3xl cursor-pointer' />
                        </div>
                    </div>
                    <p className='text-center'>Don`t have an account? please <Link to="/register" className='text-info underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;