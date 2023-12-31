import { useContext } from 'react';
import './form.css'
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../../Components/Navbar';
import Logo from '../../Components/Logo';
import { toast } from 'react-toastify';


const Login = () => {
    let { login, googleLogin } = useContext(AuthContext)
    let nav = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        login(email, password)
            .then(() => {
                // window.location.reload();
                nav('/')
                toast.success('Logged in succesfully')
            })
            .catch((error) => toast.error(error.code))
    }
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        googleLogin()
            .then(() => {
                // window.location.reload();
                nav('/')
                toast.success('Logged In user')
            })
            .catch((error) => toast.error(error.code))

    }
    return (
        <div className="">
            <div className='bg-[#111] m-1 rounded-md'>
                <Navbar></Navbar>
            </div>

            <Logo></Logo>

            <form onSubmit={handleLogin} className="lg:w-2/5 md:4/5 m-4 md:mx-auto p-4 text-gray-300 border border-[#222] rounded-md">
                <div className='flex items-center gap-1'>
                    <span className="block whitespace-nowrap text-3xl md:text-5xl font-light" >Login Here </span>
                    <div className='h-[1px] w-full bg-gray-400'></div>
                </div>
                <div className='md:mt-12 mt-8'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Email Address:</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder="Email_"
                        className="p-4 rounded-md bg-transparent border border-[#222] w-full" />
                </div>
                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Password:</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password_"
                        className="p-4 rounded-md bg-transparent border border-[#222] w-full" />
                </div>
                <button className='btn bg-[#222] w-full rounded-md mt-4 text-xl md:text-2xl tracking-widest'>Login</button>
                <div className='flex items-center gap-2'>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <div className='text-amber-400 text-lg my-2'>or</div>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                </div>
                <button onClick={handleGoogleLogin} className='btn bg-[#222] text-xl w-full rounded-md flex justify-center items-center'><span className='text-2xl md:text-3xl'><FcGoogle></FcGoogle></span>oogle</button>
            </form>
            <p className='text-center'>Don&apos;t have and account? <Link to="/register" className='text-blue-600'>Register Now.</Link></p>

        </div>
    );
};

export default Login;