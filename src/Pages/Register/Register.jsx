import { useContext, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/Auth';
import { updateProfile } from 'firebase/auth';
import Loader from '../SharedComponents/Loader/Loader';
import Swal from 'sweetalert2';

const Register = () => {
    const { continueWithGoogle, createUserWithEmail } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, []);
    if (loading === true) {
        return <Loader />
    }
    const handleCraeteUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                if (user) {
                    updateProfile(user, {
                        displayName: name, photoURL: photo
                    }).then().catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error.message,
                        })
                    })
                }
            }).catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                })
            });
    }
    const handleGoogleLogin = () => {
        continueWithGoogle().then().catch(error => {
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
                    <h2 className="text-center text-3xl font-medium mb-8">Create Seller Account</h2>
                    <form onSubmit={handleCraeteUser} className='space-y-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className='input input-bordered' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className='input input-bordered' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password">Passwrod</label>
                            <input type="password" name="password" id="password" className='input input-bordered' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="photo">Photo URL</label>
                            <input type="url" name="photo" id="photo" className='input input-bordered' />
                        </div>
                        <button className='btn btn-primary w-full'>create account</button>
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
                    <p className='text-center'>Already have an account? please <Link to="/login" className='text-info underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;