import { RiMenu2Fill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";


const Navbar = () => {
    let [open, setOpen] = useState(true)
    let { user, logOut } = useContext(AuthContext)
    let links = <>
        <li><NavLink to="/" className="p-2  block">HOME</NavLink></li>
        <li><NavLink to="/membership" className="p-2  block">Membership</NavLink></li>
        <li><NavLink to="/About" className="p-2  block">About us</NavLink></li>
    </>


    return (
        <div>
            {/* For Tab and PC */}
            <nav className="hidden md:grid items-center grid-cols-12 px-2 py-1 abosolute z-20">
                <div className="col-span-3">
                    <p className="font-semibold">
                        <span className="text-cyan-400 md:text-2xl">T</span>ech<span className="text-amber-400 md:text-2xl">M</span>ania
                    </p>
                </div>

                <ul className="flex col-span-6 font-semibold justify-center lg:gap-6 md:gap-2 gap-0 text-sm items-center whitespace-nowrap">
                    {links}
                </ul>
                {
                    user ? <div className="flex justify-end gap-4 items-center col-span-3">
                        <p className="lg:block hidden">{user?.displayName}</p>
                        <figure>
                            {
                                user?.photoURL ? <img className="rounded-full w-10" src={user.photoURL} alt="" />
                                    :
                                    <img className="rounded-full w-10" src="https://i.ibb.co/FwYsHLt/pngwing-com-1.png" alt="" />
                            }
                        </figure>
                        <button onClick={() => logOut()} className="btn bg-[#222] rounded-md font-medium text-lg">Log Out</button>
                    </div>
                        :
                        <div className="flex justify-end gap-4 items-center col-span-3">
                            <Link to="/login"><button className="btn bg-[#222] rounded-md font-medium text-lg">Login</button></Link>
                            <span>or</span>
                            <Link to="/register"><button className="btn bg-[#222] rounded-md font-medium text-lg">Register</button></Link>
                        </div>
                }

            </nav>



            {/* For Mobile------------------- */}


            <nav className="grid md:hidden items-center grid-cols-2 px-1 py-1 abosolute z-20">

                <div className="flex items-center gap-2">
                    <div>
                        <div className='hover:cursor-pointer text-2xl' onClick={() => setOpen(!open)}>
                            {
                                open ? <RiMenu2Fill></RiMenu2Fill>
                                    :
                                    <AiFillCloseCircle className='text-red-600'></AiFillCloseCircle>
                            }
                        </div>

                        <ul className={`font-semibold absolute z-50 top-10 rounded-br-md backdrop-blur-sm bg-[#00000073] border border-[#222] p-4  ${open?'-left-48':'left-0'} duration-200`}>
                            {links}
                        </ul>

                    </div>
                    <p className="font-semibold">
                        <span className="text-cyan-400 text-xl md:text-2xl">T</span>ech<span className="text-amber-400 md:text-2xl text-xl">M</span>ania
                    </p>
                </div>

                {
                    user ? <div className="flex justify-end gap-2 items-center">
                        <figure>
                            {
                                user?.photoURL ? <img className="rounded-full w-8" src={user.photoURL} alt="" />
                                    :
                                    <img className="rounded-full w-8" src="https://i.ibb.co/FwYsHLt/pngwing-com-1.png" alt="" />
                            }
                        </figure>
                        <button onClick={() => logOut()} className="btn bg-[#222] rounded-md font-medium text-sm">Log Out</button>
                    </div>
                        :
                        <div className="flex justify-end gap-1 items-center">
                            <Link to="/login"><button className="btn bg-[#222] rounded-md font-medium">Login</button></Link>
                            <span>or</span>
                            <Link to="/register"><button className="btn bg-[#222] rounded-md font-medium">Register</button></Link>
                        </div>
                }

            </nav>


        </div>
    );
};

export default Navbar;