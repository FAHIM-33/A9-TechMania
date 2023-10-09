import { useContext } from 'react';
import './form.css'
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../../Components/Navbar';
import Logo from '../../Components/Logo';


const Register = () => {
    let { createUser, update, googleLogin } = useContext(AuthContext)
    let nav = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        let name = e.target.name.value
        let url = e.target.url.value

        let patC = /[A-Z]/
        let patS = /[!@#$%^&*_/+=:;,.~'"]/;

        if (password.length < 6) { return toast.error("Password must be 6 characters or more.") }
        if (!patC.test(password)) { return toast.error("Password must have a capital leltter.") }
        if (!patS.test(password)) { return toast.error("Password must have a Special character.") }
        createUser(email, password)
            .then(() => {
                toast.success("Succesfully Registered!")
                update(name, url).then(()=> nav('/'))
                    .catch((error) => toast.error(error.code))

            })
            .catch((error) => toast.error(error.code))


    }
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        googleLogin()
            .then(() => {
                toast.success('Logged in with Google')
                nav('/')
            })
            .catch((error) => toast.error(error.code))

    }
    return (
        <div className="mb-12">
            <div className='bg-[#111] m-1 rounded-md'>
                <Navbar></Navbar>
            </div>
            <Logo></Logo>

            <form onSubmit={handleLogin} className="lg:w-2/5 md:4/5 m-4 md:mx-auto p-4 text-gray-300 border border-[#222] rounded-md">
                <div className='flex items-center gap-1'>
                    <span className="block whitespace-nowrap text-3xl md:text-5xl font-light" >Register Now </span>
                    <div className='h-[1px] w-full bg-gray-400'></div>
                </div>
                <div className='md:mt-12 mt-8'>
                    <label htmlFor="name"
                        className=''
                    >Enter Username:</label>
                    <br />
                    <input type="text" name="name" id="name" placeholder="Username_" required
                        className="p-4 rounded-md bg-transparent border border-[#222] w-full" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="url"
                        className=''
                    >Enter Image URL:</label>
                    <br />
                    <input type="text" name="url" id="url" placeholder="Image URL_" required
                        className="p-4 rounded-md bg-transparent border border-[#222] w-full" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Email Address:</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder="Email_" required
                        className="p-4 rounded-md bg-transparent border border-[#222] w-full" />
                </div>
                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Create a password:</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="Create Password_" required
                        className="p-4 rounded-md bg-transparent border border-[#222] w-full" />
                </div>
                <button className='btn bg-[#222] w-full rounded-md mt-4 text-xl md:text-2xl tracking-widest'>Register</button>
                <div className='flex items-center gap-2'>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <div className='text-amber-400 text-lg my-2'>or</div>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                </div>

                <button onClick={handleGoogleLogin} className='btn bg-[#222] text-xl w-full rounded-md flex justify-center items-center'><span className='text-2xl md:text-3xl'><FcGoogle></FcGoogle></span>oogle</button>
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login Here</Link></p>

        </div>
    );
};

export default Register;